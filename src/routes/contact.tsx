import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { productCategories } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Neehal Trade and Infra | Gandhidham, Kutch" },
      { name: "description", content: "Contact Neehal Trade and Infra in Gandhidham for product enquiries, pricing, or project requirements. Call +91 90998 80842 or email neehaltrade@gmail.com." },
      { property: "og:title", content: "Contact Neehal Trade and Infra" },
      { property: "og:description", content: "Get in touch for product enquiries, pricing, or project requirements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}${form.interest ? ` — ${form.interest}` : ""}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:neehaltrade@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contacts = [
    {
      Icon: MapPin,
      title: "Address",
      lines: [
        "Ground Floor, Shop No. 27,",
        "Gurukul City Centre, Plot No. 68 & 69,",
        "Rambhag Road, Ward DC2,",
        "Gandhidham — Kutch, Gujarat 370 201",
      ],
    },
    {
      Icon: Phone,
      title: "Phone",
      lines: [
        { label: "Viththal Prajapati", value: "+91 90998 80842", href: "tel:+919099880842" },
        { label: "Naresh Prajapati", value: "+91 85303 01267", href: "tel:+918530301267" },
        { label: "Office", value: "+91 84600 52617", href: "tel:+918460052617" },
      ],
    },
    {
      Icon: Mail,
      title: "Email",
      lines: [{ label: "", value: "neehaltrade@gmail.com", href: "mailto:neehaltrade@gmail.com" }],
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for product enquiries, pricing, or project requirements."
      />

      <section className="container-tight py-16 md:py-20">
        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {contacts.map(({ Icon, title, lines }) => (
            <div key={title} className="bg-white border border-border rounded-lg p-6 hover:border-brand/40 hover:shadow-card transition-all">
              <div className="h-12 w-12 rounded-md bg-brand text-brand-foreground flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-3">{title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {lines.map((line, i) =>
                  typeof line === "string" ? (
                    <p key={i}>{line}</p>
                  ) : (
                    <p key={i}>
                      {line.label && <span className="text-charcoal font-medium">{line.label}: </span>}
                      <a href={line.href} className="hover:text-brand transition-colors break-all">
                        {line.value}
                      </a>
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid gap-10 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white border border-border rounded-lg p-7 md:p-9 space-y-5">
            <div>
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">Send a message</span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-charcoal mt-2 tracking-tight">
                Tell us about your requirement
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
              />
            </Field>

            <Field label="Product / Service of Interest">
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
              >
                <option value="">Select a category (optional)</option>
                {productCategories.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
                <option value="Construction Material Supply">Construction Material Supply</option>
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Message" required>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 rounded-md font-semibold transition-all shadow-elegant"
            >
              <Send className="h-4 w-4" />
              Send Enquiry
            </button>
          </form>

          {/* Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-border min-h-[400px]">
            <iframe
              title="Neehal Trade and Infra Location"
              src="https://www.google.com/maps?q=Gandhidham,+Kutch,+Gujarat+370201&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-charcoal mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
