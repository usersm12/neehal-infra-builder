import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/neehal-logo.jpg";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-charcoal" : "text-white";
  const subColor = variant === "dark" ? "text-brand" : "text-brand-foreground/90";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logoImg}
        alt="Neehal Trade and Infra"
        className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-sm bg-white p-0.5"
      />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-base sm:text-lg md:text-xl tracking-tight ${textColor}`}>
          NEEHAL TRADE AND INFRA
        </span>
        <span className={`text-[11px] sm:text-sm font-semibold uppercase tracking-wider mt-1 ${subColor}`}>
          Authorized Redwop Distributor
        </span>
      </div>
    </Link>
  );
}
