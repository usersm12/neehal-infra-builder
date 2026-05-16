import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const slides = [
  { image: "/images/products/TERATILE-PLATIUM.png", name: "Tile Adhesive", category: "Tile Adhesive & Grout" },
  { image: "/images/products/BLOCKFAST-AC100.png", name: "Accelerator", category: "Concrete Admixtures" },
  { image: "/images/products/SMARZKOT-B2Flex.png", name: "2K Elastic Waterproofing", category: "Waterproofing Chemicals" },
  { image: "/images/products/PLASTCONE-HS200.png", name: "Superplasticizer", category: "Concrete Admixtures" },
  { image: "/images/products/POLYCOTE-WH100.png", name: "Crystalline Waterproofing", category: "Waterproofing Chemicals" },
  { image: "/images/products/HARDFLOOR-N.png", name: "Floor Hardener", category: "Repair, Flooring & Specialty" },
  { image: "/images/products/EISENGUARD-1.png", name: "Anti Corrosive", category: "Repair, Flooring & Specialty" },
  { image: "/images/products/REDWOP-PU-200.png", name: "PU Liquid Membrane", category: "Waterproofing Chemicals" },
];

export function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
    startTimer();
  };

  return (
    <section className="w-full bg-charcoal overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].name}
              className="w-full h-full object-contain bg-charcoal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 md:px-12 md:py-8 flex items-end justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-1">{slides[current].category}</p>
              <h3 className="text-white font-display font-bold text-xl md:text-3xl">{slides[current].name}</h3>
            </motion.div>
          </AnimatePresence>
          <Link
            to="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-5 py-2.5 rounded-md text-sm font-semibold transition-all"
          >
            View All Products
          </Link>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); startTimer(); }}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-brand" : "w-1.5 bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
