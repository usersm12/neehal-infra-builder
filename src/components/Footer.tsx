import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/neehal-logo.jpg";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Neehal Trade and Infra"
              className="h-20 w-20 object-contain rounded-sm bg-white p-1 shrink-0"
            />
            <div className="flex flex-col leading-none">
              <h3 className="font-display font-extrabold text-base tracking-tight">NEEHAL TRADE AND INFRA</h3>
              <p className="text-brand font-semibold text-xs uppercase tracking-wider mt-1.5">
                Authorized Redwop Dealer
              </p>
            </div>
          </div>
          <p className="text-sm text-white/60 mt-4 leading-relaxed">
            Authorized Dealer — Redwop Chemicals Pvt. Ltd. Serving Gandhidham and Kutch region.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="tel:+919099880842" className="hover:text-brand">+91 90998 80842</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="mailto:neehaltrade@gmail.com" className="hover:text-brand break-all">neehaltrade@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <span>Gurukul City Centre, Rambhag Road, Gandhidham — Kutch, Gujarat 370 201</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Follow</h4>
          <a
            href="https://www.instagram.com/neehaltrade?igsh=MXY4d3UzZHQ0aXd4bg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 hover:bg-brand transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight py-5 text-center text-xs text-white/50">
          © 2025 Neehal Trade and Infra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
