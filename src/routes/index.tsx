import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProductSlider } from "@/components/ProductSlider";
import { Award, Package, Truck, ArrowRight, Hammer, Wrench, ClipboardList, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const trustBadges = [
  { Icon: Award, title: "Authorized Redwop Distributor", desc: "Genuine, certified products direct from the manufacturer." },
  { Icon: Package, title: "25+ Construction Chemicals", desc: "A wide product range always ready in stock." },
  { Icon: Truck, title: "Timely Site Delivery", desc: "Dependable supply to contractors across Kutch." },
];

const services = [
  { Icon: Hammer, title: "Construction Material Supply", desc: "Cement, sand, aggregates and related materials for residential and commercial projects." },
  { Icon: Wrench, title: "Repair & Maintenance Solutions", desc: "Crack fillers, polymer repair mortars, and rehabilitation products for existing structures." },
  { Icon: ClipboardList, title: "Project-Based Supply Services", desc: "Customized material supply for small and large-scale construction projects." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neehal Trade and Infra — Authorized Redwop Distributor in Gandhidham, Kutch" },
      { name: "description", content: "Authorized distributor of Redwop Chemicals in Gandhidham, Kutch. Waterproofing, admixtures, tile adhesives, coatings and construction materials for builders and contractors." },
      { property: "og:title", content: "Neehal Trade and Infra — Authorized Redwop Distributor" },
      { property: "og:description", content: "Your trusted construction chemical partner in Kutch. Supplying waterproofing, admixtures, adhesives and coatings." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="container-tight relative py-24 md:py-36 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/50 bg-brand/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Authorized Redwop Distributor · Gandhidham
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
              Your Trusted Construction Chemical Partner in Kutch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Authorized distributor of <span className="text-brand font-semibold">Redwop Chemicals</span> — supplying high-quality waterproofing, adhesives, admixtures, coatings, and more to contractors, builders, and projects across the region.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3.5 rounded-md font-semibold transition-all shadow-elegant"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3.5 rounded-md font-semibold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex shrink-0 items-center justify-center"
          >
            <img
              src="/images/redwop-logo-white.png"
              alt="Redwop Chemicals"
              className="w-28 lg:w-64 xl:w-80 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-muted/50 border-y border-border">
        <div className="container-tight py-12 grid gap-6 md:grid-cols-3">
          {trustBadges.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">What we supply</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal mt-3 tracking-tight text-balance">
              The complete Redwop product range
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From foundation to finish — every chemical you need, sourced from a trusted ISO-certified manufacturer.
            </p>
          </div>
          <ProductSlider />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-muted/40 py-20 md:py-28 border-y border-border">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">About us</span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal mt-3 tracking-tight text-balance">
                A trusted name for construction chemicals in Kutch
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                <strong className="text-charcoal">Neehal Trade and Infra</strong> is the authorized distributor of <strong className="text-charcoal">Redwop Chemicals Pvt. Ltd.</strong> — an ISO 9001:2015 certified manufacturer of construction chemicals — serving builders, contractors and infrastructure projects across Gandhidham and the wider Kutch region.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From foundation admixtures to final coatings, we stock the complete Redwop range and back it with local expertise, fair pricing, and on-time site delivery.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { Icon: ShieldCheck, text: "ISO 9001:2015 certified products" },
                  { Icon: CheckCircle2, text: "25+ chemicals in stock" },
                  { Icon: MapPin, text: "Based in Gandhidham, Kutch" },
                  { Icon: Truck, text: "Reliable site delivery" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="shrink-0 h-9 w-9 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-sm font-semibold text-charcoal">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-6 py-3 rounded-md font-semibold transition-all"
                >
                  More about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white hover:bg-muted border border-border text-charcoal px-6 py-3 rounded-md font-semibold transition-all"
                >
                  View Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant border border-border bg-white">
                <img
                  src="https://www.redwop.net/wp-content/uploads/2024/07/redwop-story.jpg"
                  alt="Redwop Chemicals manufacturing"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex bg-brand text-brand-foreground px-6 py-5 rounded-lg shadow-elegant max-w-[16rem]">
                <div>
                  <div className="font-display font-extrabold text-3xl leading-none">5+ yrs</div>
                  <div className="text-xs uppercase tracking-wider mt-2 opacity-90">Redwop manufacturing experience</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden md:flex bg-white border border-border px-5 py-4 rounded-lg shadow-elegant items-center gap-3">
                <Award className="h-7 w-7 text-brand" />
                <div>
                  <div className="font-display font-bold text-charcoal text-sm leading-tight">Authorized Distributor</div>
                  <div className="text-xs text-muted-foreground">Redwop Chemicals Pvt. Ltd.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-charcoal text-charcoal-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-12">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Our services</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mt-3 tracking-tight text-balance">
              More than a supplier
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-brand/40 transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-brand text-brand-foreground flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-tight py-16 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight max-w-2xl text-balance">
            Need a reliable construction chemical supplier in Gandhidham? We've got you covered.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-7 py-4 rounded-md font-semibold transition-all"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
