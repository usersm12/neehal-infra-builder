import { motion } from "framer-motion";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-charcoal text-charcoal-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand/20" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 text-brand-foreground text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Neehal Trade and Infra
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
