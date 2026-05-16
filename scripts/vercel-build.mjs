import { execSync } from 'node:child_process'
import { cpSync, mkdirSync, writeFileSync, existsSync, rmSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// 1. Run Vite build
console.log('Building with Vite...')
execSync('node_modules/.bin/vite build', { stdio: 'inherit', cwd: root })

// 2. Set up .vercel/output
const vercelOut = resolve(root, '.vercel/output')
if (existsSync(vercelOut)) rmSync(vercelOut, { recursive: true })
mkdirSync(vercelOut, { recursive: true })

// 3. Vercel routing config
writeFileSync(
  resolve(vercelOut, 'config.json'),
  JSON.stringify({
    version: 3,
    routes: [
      // Cache static assets forever
      {
        src: '/assets/(.*)',
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
        continue: true,
      },
      // Serve from filesystem first (static assets)
      { handle: 'filesystem' },
      // Everything else → SSR function
      { src: '/(.*)', dest: '/ssr' },
    ],
  }, null, 2)
)

// 4. Copy client static assets
console.log('Copying static assets...')
cpSync(resolve(root, 'dist/client'), resolve(vercelOut, 'static'), { recursive: true })

// 5. Create SSR serverless function
const funcDir = resolve(vercelOut, 'functions/ssr.func')
mkdirSync(funcDir, { recursive: true })

// Function runtime config
writeFileSync(
  resolve(funcDir, '.vc-config.json'),
  JSON.stringify({
    runtime: 'nodejs20.x',
    handler: 'index.mjs',
    launcherType: 'Nodejs',
    shouldAddHelpers: false,
  }, null, 2)
)

// Write entry wrapper — converts Node.js (req, res) to Web Fetch API
const entryPath = resolve(root, '_vercel_entry_tmp.mjs')
writeFileSync(
  entryPath,
  `import { default as server } from './dist/server/server.js'
import { Readable } from 'node:stream'

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers.host || 'localhost'
  const url = new URL(req.url, protocol + '://' + host)

  const headers = new Headers()
  for (const [key, val] of Object.entries(req.headers)) {
    if (val == null) continue
    if (Array.isArray(val)) val.forEach(v => headers.append(key, v))
    else headers.set(key, val)
  }

  const hasBody = !['GET', 'HEAD'].includes(req.method || 'GET')
  const webRequest = new Request(url.toString(), {
    method: req.method || 'GET',
    headers,
    body: hasBody ? Readable.toWeb(req) : null,
    duplex: hasBody ? 'half' : undefined,
  })

  const webResponse = await server.fetch(webRequest)

  res.statusCode = webResponse.status
  for (const [key, val] of webResponse.headers.entries()) {
    res.setHeader(key, val)
  }

  if (webResponse.body) {
    Readable.fromWeb(webResponse.body).pipe(res)
  } else {
    res.end()
  }
}
`
)

// Bundle server + all npm deps into the function dir, preserving dynamic import chunks
console.log('Bundling SSR function...')
await build({
  entryPoints: [entryPath],
  bundle: true,
  splitting: true,
  platform: 'node',
  target: 'node20',
  format: 'esm',
  outdir: funcDir,
  outbase: root,
  ignoreAnnotations: true,
  banner: {
    js: `import { createRequire as __createRequire } from 'node:module';\nconst require = __createRequire(import.meta.url);`,
  },
  external: ['node:async_hooks', 'node:stream', 'node:buffer', 'node:util', 'node:path', 'node:fs', 'node:os', 'node:crypto', 'node:http', 'node:https', 'node:net', 'node:tls', 'node:url', 'node:zlib', 'node:events', 'node:querystring', 'node:string_decoder', 'async_hooks', 'stream', 'buffer', 'util', 'path', 'fs', 'os', 'crypto', 'http', 'https', 'net', 'tls', 'url', 'zlib', 'events', 'querystring', 'string_decoder'],
  mainFields: ['module', 'main'],
  conditions: ['import', 'require', 'node'],
})

// Rename entry to index.mjs (esbuild may output .js or .mjs)
for (const ext of ['.mjs', '.js']) {
  const entryOut = resolve(funcDir, `_vercel_entry_tmp${ext}`)
  if (existsSync(entryOut)) {
    const content = readFileSync(entryOut, 'utf-8')
    writeFileSync(resolve(funcDir, 'index.mjs'), content)
    rmSync(entryOut)
    break
  }
}

// Clean up temp entry
if (existsSync(entryPath)) rmSync(entryPath)

console.log('✓ Vercel output created at .vercel/output/')
