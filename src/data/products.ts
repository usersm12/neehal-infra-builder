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
      { name: "PU Liquid Membrane Waterproofing", description: "Polyurethane-based liquid membrane for superior flexibility and durability.", image: `${RW}/2026/04/PU-LIQUID-MEMBRANE-WATER-PROOFING.jpeg` },
      { name: "Polyurea Waterproofing", description: "Fast-curing, high-performance polyurea coating for demanding environments.", image: `${RW}/2026/04/POLYUREA-WATERPROOFING.jpeg` },
      { name: "Fiber Mesh", description: "Reinforcement mesh for waterproofing membranes.", image: `${RW}/2024/11/Fiber-Mesh.jpg` },
    ],
  },
  {
    title: "Tile Adhesive, Grout & Bonding",
    slug: "tile-adhesive",
    intro: "High-strength tile fixing solutions for walls, floors and heavy-duty applications.",
    products: [
      { name: "Tile Adhesive", description: "High-strength adhesive for walls and floors (IS 15477:2004).", image: `${RW}/2025/09/Normal-Tile-Adhesive.jpg` },
      { name: "Tile Grout", description: "Fine-finish grout for joints between tiles.", image: `${RW}/2026/01/Tile-Grout.jpg` },
      { name: "Bonding Agent", description: "Improves adhesion between old and new concrete surfaces.", image: `${RW}/2024/11/Bonding-Agent.jpg` },
      { name: "Epoxy Grout", description: "High-strength stain-resistant grouting for joints.", image: `${RW}/2025/09/Epoxy-Tile-Adhesive.jpg` },
      { name: "Tile Cleaner", description: "Removes stains and efflorescence from tile surfaces.", image: `${RW}/2025/09/8-TILES-APPLICATION-ON-CEMENT-SHEETS-SURFACES.jpg` },
    ],
  },
  {
    title: "Repair, Flooring & Specialty",
    slug: "repair-flooring",
    intro: "Comprehensive solutions for repair, flooring, finishing and protection.",
    products: [
      { name: "Non Shrink Grout", description: "Precision grouting for equipment bases and anchor bolts.", image: `${RW}/2024/11/Non-Shrink-Grout.jpg` },
      { name: "Polymer Repair Mortar", description: "Structural repair for damaged concrete surfaces.", image: `${RW}/2026/02/Polymer-Repair-Mortar.png` },
      { name: "Crack Filler", description: "Fast-setting filler for surface cracks in walls and floors.", image: `${RW}/2026/02/Polymer-Repair-Mortar.png` },
      { name: "Self Leveling Flooring", description: "Smooth, self-leveling base for industrial and commercial floors.", image: `${RW}/2026/02/Self-Leveling-Flooring.png` },
      { name: "Floor Hardener", description: "Dust-proofing and hardening for industrial concrete floors.", image: `${RW}/2026/02/Self-Leveling-Flooring.png` },
      { name: "Light Weight Block Joint Mortar", description: "For AAC block jointing with minimal wastage.", image: `${RW}/2024/11/Light-Weight-Block-Joint-Mortar.jpg` },
      { name: "Ready Mix Plaster", description: "Factory-made plaster for consistent wall finishes.", image: `${RW}/2024/11/Ready-Mix-Plaster.jpg` },
      { name: "Mould Release Agent", description: "Prevents concrete from sticking to formwork.", image: `${RW}/2024/11/Bituminous-Products.jpg` },
      { name: "Fast Plugging", description: "Instant stop to active water leaks in concrete.", image: `${RW}/2024/11/Crystalline-Water-Proofing.jpg` },
      { name: "Polyester Anchor Grout", description: "Chemical anchoring for bolts and rebars.", image: `${RW}/2024/11/Non-Shrink-Grout.jpg` },
      { name: "Rust Converter", description: "Converts rust to stable compound before painting.", image: `${RW}/2024/11/Rust-Converter.jpg` },
      { name: "Rust Remover", description: "Removes rust from metal surfaces.", image: `${RW}/2024/11/Rust-Remover.jpg` },
      { name: "Bituminous Products", description: "Waterproofing and protection for below-grade structures.", image: `${RW}/2024/11/Bituminous-Products.jpg` },
      { name: "Curing Compound", description: "Retains moisture in concrete for proper curing.", image: `${RW}/2024/11/Integral-Waterproofing-Compound.jpg` },
      { name: "Primer", description: "Prepares surfaces for coating adhesion.", image: `${RW}/2024/11/Bonding-Agent.jpg` },
      { name: "Wall Putty", description: "Smooth base coat for interior walls before painting.", image: `${RW}/2026/01/Wall-Putty.jpg` },
      { name: "Anti Corrosive", description: "Protection for steel structures and surfaces.", image: `${RW}/2024/11/Rust-Converter.jpg` },
      { name: "Protective Coating", description: "High-performance coatings for industrial surfaces.", image: `${RW}/2026/01/Protective-Coating.jpg` },
      { name: "Sealant", description: "Flexible gap filling and joint sealing.", image: `${RW}/2024/11/Liquid-Membrane-Waterproofing.jpg` },
    ],
  },
  {
    title: "Others",
    slug: "others",
    intro: "Allied construction materials we supply alongside our Redwop chemical range.",
    products: [
      { name: "Bitumen Membrane and Butyl Tape", description: "Self-adhesive aluminium-faced tape for sealing joints, flashings and leaks.", image: `${RW}/2024/11/Bituminous-Products.jpg` },
      { name: "Fiber Recrones", description: "Polypropylene micro fibres for crack control and shrinkage resistance in concrete.", image: `${RW}/2024/11/Fiber-Mesh.jpg` },
      { name: "Expansion Joint Board", description: "Bitumen-impregnated joint filler board for concrete expansion joints.", image: `${RW}/2024/11/Bituminous-Products.jpg` },
      { name: "Fiber Mesh", description: "Alkali-resistant fiberglass mesh for plaster reinforcement and waterproofing.", image: `${RW}/2024/11/Fiber-Mesh.jpg` },
      { name: "Backer Rod", description: "Closed-cell foam rod for backing sealants in expansion and construction joints.", image: `${RW}/2024/11/Liquid-Membrane-Waterproofing.jpg` },
    ],
  },
];

export const allProductNames = productCategories.flatMap((c) => c.products.map((p) => p.name));
