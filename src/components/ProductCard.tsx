import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { Box } from "lucide-react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-elegant hover:border-brand/40 transition-all"
    >
      <div className="aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
            <Box className="h-10 w-10 mb-2 opacity-40" />
            <span className="text-sm font-semibold text-charcoal">{product.name}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-charcoal leading-tight">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        <a
          href={`mailto:neehaltrade@gmail.com?subject=Enquiry: ${encodeURIComponent(product.name)}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          Enquire →
        </a>
      </div>
    </motion.article>
  );
}
