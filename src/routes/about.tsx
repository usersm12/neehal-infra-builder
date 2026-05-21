import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Authorized Redwop Distributor", desc: "Genuine products, guaranteed quality." },
  { title: "Wide Range", desc: "25+ construction chemical products always in stock." },
  { title: "Local Expertise", desc: "Serving Gandhidham and Kutch region." },
  { title: "Reliable Supply", desc: "On-time delivery to sites and contractors." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neehal Trade and Infra | Redwop Distributor in Gandhidham" },
      { name: "description", content: "Neehal Trade and Infra is an authorized distributor of Redwop Chemicals Pvt. Ltd. based in Gandhidham, Kutch — serving contractors and builders across the region." },
      { property: "og:title", content: "About Neehal Trade and Infra" },
      { property: "og:description", content: "Authorized Redwop distributor in Gandhidham, Kutch. Genuine products, local expertise, reliable supply." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero title="About Neehal Trade and Infra" />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Who we are</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal tracking-tight text-balance">
              A trusted regional partner for construction chemicals
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-charcoal">Neehal Trade and Infra</strong> is an authorized distributor of Redwop Chemicals Pvt. Ltd., one of India's leading construction chemical manufacturers. Based in Gandhidham, Kutch, we serve contractors, builders, and infrastructure projects across the region with a complete range of construction chemicals and building materials.
              </p>
              <p>
                <strong className="text-charcoal">Redwop Chemicals Pvt. Ltd.</strong> is ISO 9001:2015 certified and has been in the business of construction chemicals for over five years, with a wide product range covering concrete admixtures, tile adhesives, waterproofing chemicals, curing compounds, epoxy grouts, industrial floor hardeners, and much more.
              </p>
              <p>
                As an authorized distributor, we bring Redwop's proven products to local construction projects — with the added advantage of proximity, timely availability, and personal service.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted rounded-2xl p-8 flex flex-col items-center justify-center border border-border"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Brand Partner</span>
            <img
              src="https://www.redwop.net/wp-content/uploads/2024/08/media_20241003_160242_8329776699937143088.png"
              alt="Redwop Chemicals"
              loading="lazy"
              className="w-full max-w-[220px] h-auto"
            />
            <p className="text-center text-sm text-muted-foreground mt-5 font-medium">
              ISO 9001:2015 Certified Manufacturer
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="bg-charcoal text-charcoal-foreground rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">Mission</span>
              <p className="mt-3 text-lg leading-relaxed">
                To provide high-quality construction materials and chemical solutions with reliable service, ensuring customer satisfaction and contributing to strong and durable infrastructure.
              </p>
            </div>
          </div>
          <div className="bg-brand text-brand-foreground rounded-xl p-8">
            <span className="font-semibold uppercase text-xs tracking-wider opacity-90">Vision</span>
            <p className="mt-3 text-lg leading-relaxed">
              To become a trusted and leading supplier in the construction industry by delivering innovative solutions, expanding our network, and building long-term relationships with clients and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/50 border-y border-border py-16 md:py-20">
        <div className="container-tight">
          <div className="max-w-2xl mb-10">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Why choose us</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal mt-3 tracking-tight">
              Built on trust, delivered on time
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border rounded-lg p-6 flex items-start gap-4 hover:border-brand/40 hover:shadow-card transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg text-charcoal">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
