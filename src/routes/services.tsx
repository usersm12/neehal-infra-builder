import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Hammer, FlaskConical, Building2, Truck, Wrench, ClipboardList, ArrowRight } from "lucide-react";

const services = [
  { Icon: Hammer, title: "Construction Material Supply", desc: "We provide high-quality construction materials such as cement, sand, aggregates, and related products for residential and commercial projects of all sizes." },
  { Icon: FlaskConical, title: "Construction Chemical Solutions", desc: "We supply Redwop's complete range of waterproofing products, admixtures, and protective chemicals to enhance the strength and durability of your structures." },
  { Icon: Building2, title: "Building & Infrastructure Support", desc: "Complete material and support solutions for residential and commercial construction projects — from foundation to finish." },
  { Icon: Truck, title: "Contractor & Site Supply Services", desc: "We ensure timely delivery of required materials and chemical solutions directly to contractors and construction sites across the Kutch region." },
  { Icon: Wrench, title: "Repair & Maintenance Solutions", desc: "Effective solutions for repairing, maintaining, and improving the life of existing structures — including crack filling, waterproofing, and polymer mortars." },
  { Icon: ClipboardList, title: "Project-Based Supply Services", desc: "Customized material supply and support for both small and large-scale projects — with consistent quality, reliable timelines, and expert guidance." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Neehal Trade and Infra | Construction Supply Gandhidham" },
      { name: "description", content: "Construction material supply, chemical solutions, repair & maintenance, and project-based supply services across Kutch and Gandhidham." },
      { property: "og:title", content: "Our Services — Neehal Trade and Infra" },
      { property: "og:description", content: "Beyond supplying products — your complete construction solutions partner in Kutch." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Beyond supplying products — we're your complete construction solutions partner."
      />

      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white border border-border rounded-lg p-7 hover:shadow-elegant hover:border-brand/40 transition-all group"
            >
              <div className="h-14 w-14 rounded-md bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-charcoal text-charcoal-foreground rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">
              Have a project requirement? Let's talk.
            </h2>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-7 py-3.5 rounded-md font-semibold transition-all"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
