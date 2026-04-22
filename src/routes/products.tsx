import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { productCategories } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Neehal Trade and Infra | Redwop Chemicals Dealer" },
      { name: "description", content: "Complete range of Redwop construction chemicals: concrete admixtures, waterproofing, tile adhesives, repair mortars, coatings and flooring solutions." },
      { property: "og:title", content: "Our Products — Neehal Trade and Infra" },
      { property: "og:description", content: "From concrete admixtures to waterproofing — every Redwop chemical you need, in stock in Gandhidham." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <Layout>
      <PageHero
        title="Our Products"
        subtitle="We stock the complete range of Redwop construction chemicals — from concrete to waterproofing, flooring to coatings."
      />

      <div className="container-tight py-16 md:py-20 space-y-20">
        {productCategories.map((cat) => (
          <section key={cat.slug}>
            <div className="border-l-4 border-brand pl-4 mb-8">
              <h2 className="font-display font-extrabold text-2xl md:text-4xl text-charcoal tracking-tight">
                {cat.title}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">{cat.intro}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p, i) => (
                <ProductCard key={p.name} product={p} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
