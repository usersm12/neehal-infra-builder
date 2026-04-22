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
        className="h-12 w-12 object-contain rounded-sm bg-white p-0.5"
      />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-sm sm:text-base tracking-tight ${textColor}`}>
          NEEHAL TRADE AND INFRA
        </span>
        <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5 ${subColor}`}>
          Authorized Redwop Dealer
        </span>
      </div>
    </Link>
  );
}
