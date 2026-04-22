import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container-tight flex items-center justify-between py-3">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-charcoal hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919099880842"
            className="hidden md:flex items-center gap-2 bg-brand text-brand-foreground px-4 py-2.5 rounded-md font-semibold text-sm hover:bg-brand-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            90998 80842
          </a>
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-tight py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-charcoal font-semibold border-b border-border last:border-0"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919099880842"
              className="mt-3 flex items-center justify-center gap-2 bg-brand text-brand-foreground px-4 py-3 rounded-md font-semibold"
            >
              <Phone className="h-4 w-4" />
              Call: 90998 80842
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
