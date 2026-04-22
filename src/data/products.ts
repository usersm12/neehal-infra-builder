export type Product = {
  name: string;
  description: string;
  image?: string;
};

export type ProductCategory = {
  title: string;
  slug: string;
  intro: string;
  products: Product[];
};

const RW = "https://www.redwop.net/wp-content/uploads";

export const productCategories: ProductCategory[] = [
  {
    title: "Concrete Admixtures",
    slug: "concrete-admixtures",
    intro: "Performance-enhancing chemicals for stronger, more workable concrete.",
    products: [
      { name: "Accelerator", description: "Speeds up concrete setting time for faster construction.", image: `${RW}/2024/11/Accelerator.jpg` },
      { name: "Superplasticizer", description: "High-range water reducer for flowable, strong concrete.", image: `${RW}/2024/11/Superplasticizer.jpg` },
      { name: "Water Reducer", description: "Reduces water content without compromising workability.", image: `${RW}/2024/11/Water-Reducer.jpg` },
      { name: "Retarders", description: "Delays setting time for large pours and hot weather.", image: `${RW}/2024/11/Retarders.jpg` },
      { name: "Air Entrained", description: "Improves freeze-thaw resistance of concrete.", image: `${RW}/2024/11/Air-Entrained.jpg` },
      { name: "Crystalline Admixture", description: "Self-sealing waterproofing for concrete.", image: `${RW}/2024/11/Crystalline.jpg` },
      { name: "Integral Waterproofing Compound", description: "Mixed into concrete for built-in water resistance.", image: `${RW}/2024/11/Integral-Waterproofing-Compound.jpg` },
      { name: "Corrosion Inhibiting Admixture", description: "Protects rebar from corrosion in concrete.", image: `${RW}/2024/11/Corrosion-Inhibiting-Admixture.jpg` },
      { name: "Under Water Admixture", description: "Specially formulated for underwater concrete pours.", image: `${RW}/2024/11/Under-Water-Admixture-For-Concrete.jpg` },
      { name: "Precast Admixture", description: "Optimized for precast concrete production.", image: `${RW}/2024/11/Precast-Admixture.jpg` },
    ],
  },
  {
    title: "Waterproofing Chemicals",
    slug: "waterproofing-chemicals",
    intro: "Liquid membranes, crystalline coatings and cement-based systems for lasting protection.",
    products: [
      { name: "Liquid Membrane Waterproofing", description: "Flexible coating for terraces, roofs and balconies.", image: `${RW}/2024/11/Liquid-Membrane-Waterproofing.jpg` },
      { name: "2K Elastic Waterproofing", description: "Two-component system for crack-bridging protection.", image: `${RW}/2024/11/2k-Elastic-Waterproofing-Chemicals.jpg` },
      { name: "Crystalline Waterproofing", description: "Penetrating protection that becomes part of the concrete.", image: `${RW}/2024/11/Crystalline-Water-Proofing.jpg` },
      { name: "Cement Based Waterproofing", description: "Reliable rigid or semi-flexible waterproofing for wet areas.", image: `${RW}/2024/11/Cement-Based-Water-Proofing.jpg` },
      { name: "Fiber Mesh", description: "Reinforcement mesh for waterproofing membranes.", image: `${RW}/2024/11/Fiber-Mesh.jpg` },
    ],
  },
  {
    title: "Tile Adhesive, Grout & Bonding",
    slug: "tile-adhesive",
    intro: "High-strength tile fixing solutions for walls, floors and heavy-duty applications.",
    products: [
      { name: "Tile Adhesive", description: "High-strength adhesive for walls and floors (IS 15477:2004).", image: `${RW}/2024/08/media_20241003_160242_8329776699937143088.png` },
      { name: "Tile Grout", description: "Fine-finish grout for joints between tiles.", image: `${RW}/2026/01/Tile-Grout.jpg` },
      { name: "Bonding Agent", description: "Improves adhesion between old and new concrete surfaces.", image: `${RW}/2024/11/Bonding-Agent.jpg` },
    ],
  },
  {
    title: "Repair, Flooring & Specialty",
    slug: "repair-flooring",
    intro: "Comprehensive solutions for repair, flooring, finishing and protection.",
    products: [
      { name: "Non Shrink Grout", description: "Precision grouting for equipment bases and anchor bolts.", image: `${RW}/2024/11/Non-Shrink-Grout.jpg` },
      { name: "Polymer Repair Mortar", description: "Structural repair for damaged concrete surfaces.", image: `${RW}/2026/02/Polymer-Repair-Mortar.png` },
      { name: "Crack Filler", description: "Fast-setting filler for surface cracks in walls and floors." },
      { name: "Self Leveling Flooring", description: "Smooth, self-leveling base for industrial and commercial floors.", image: `${RW}/2026/02/Self-Leveling-Flooring.png` },
      { name: "Floor Hardener", description: "Dust-proofing and hardening for industrial concrete floors." },
      { name: "Light Weight Block Joint Mortar", description: "For AAC block jointing with minimal wastage.", image: `${RW}/2024/11/Light-Weight-Block-Joint-Mortar.jpg` },
      { name: "Ready Mix Plaster", description: "Factory-made plaster for consistent wall finishes.", image: `${RW}/2024/11/Ready-Mix-Plaster.jpg` },
      { name: "Mould Release Agent", description: "Prevents concrete from sticking to formwork." },
      { name: "Fast Plugging", description: "Instant stop to active water leaks in concrete." },
      { name: "Polyester Anchor Grout", description: "Chemical anchoring for bolts and rebars." },
      { name: "Rust Converter", description: "Converts rust to stable compound before painting.", image: `${RW}/2024/11/Rust-Converter.jpg` },
      { name: "Rust Remover", description: "Removes rust from metal surfaces.", image: `${RW}/2024/11/Rust-Remover.jpg` },
      { name: "Bituminous Products", description: "Waterproofing and protection for below-grade structures.", image: `${RW}/2024/11/Bituminous-Products.jpg` },
      { name: "Curing Compound", description: "Retains moisture in concrete for proper curing." },
      { name: "Primer", description: "Prepares surfaces for coating adhesion." },
      { name: "Wall Putty", description: "Smooth base coat for interior walls before painting.", image: `${RW}/2026/01/Wall-Putty.jpg` },
      { name: "Anti Corrosive", description: "Protection for steel structures and surfaces." },
      { name: "Fiber Resa", description: "Polypropylene fiber for crack resistance in concrete.", image: `${RW}/2024/11/Fiber-Resa.jpg` },
      { name: "Protective Coating", description: "High-performance coatings for industrial surfaces.", image: `${RW}/2026/01/Protective-Coating.jpg` },
      { name: "Sealant", description: "Flexible gap filling and joint sealing." },
      { name: "Tile Cleaner", description: "Removes stains and efflorescence from tile surfaces." },
      { name: "Epoxy Grout", description: "High-strength stain-resistant grouting for joints." },
      { name: "Wall Putty & Paints", description: "Interior and exterior finishing solutions." },
    ],
  },
];

export const allProductNames = productCategories.flatMap((c) => c.products.map((p) => p.name));
