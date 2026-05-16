import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { productCategories } from "@/data/products";

const allProducts = productCategories.flatMap((c) =>
  c.products.filter((p) => p.image).map((p) => ({ ...p, category: c.title }))
);

const VISIBLE = 4;

export function ProductSlider() {
  const [start, setStart] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setStart((s) => (s + 1) % allProducts.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setStart((s) => (s + dir + allProducts.length) % allProducts.length);
    startTimer();
  };

  const visible = Array.from({ length: VISIBLE }, (_, i) => allProducts[(start + i) % allProducts.length]);

  return (
    <div className="relative">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((product, i) => (
          <Link
            key={`${product.name}-${i}`}
            to="/products"
            className="group block bg-white border border-border rounded-lg overflow-hidden hover:shadow-elegant hover:border-brand/40 transition-all h-full"
          >
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-brand transition-colors leading-tight">{product.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => go(-1)}
          className="h-10 w-10 rounded-full border border-border bg-white hover:bg-muted text-charcoal flex items-center justify-center transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm text-muted-foreground">
          {start + 1}–{((start + VISIBLE - 1) % allProducts.length) + 1} of {allProducts.length}
        </span>
        <button
          onClick={() => go(1)}
          className="h-10 w-10 rounded-full border border-border bg-white hover:bg-muted text-charcoal flex items-center justify-center transition-all"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
