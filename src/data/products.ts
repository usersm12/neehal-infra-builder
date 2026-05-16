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

const P = "/images/products";
const RW = "https://www.redwop.net/wp-content/uploads";

export const productCategories: ProductCategory[] = [
  {
    title: "Concrete Admixtures",
    slug: "concrete-admixtures",
    intro: "Performance-enhancing chemicals for stronger, more workable concrete.",
    products: [
      { name: "Accelerator", description: "Speeds up concrete setting time for faster construction.", image: `${P}/BLOCKFAST-AC100.png` },
      { name: "Superplasticizer", description: "High-range water reducer for flowable, strong concrete.", image: `${P}/PLASTCONE-HS200.png` },
      { name: "Water Reducer", description: "Reduces water content without compromising workability.", image: `${P}/PLASTCONE-R.png` },
      { name: "Retarders", description: "Delays setting time for large pours and hot weather.", image: `${P}/BLOCKFAST-ELOP-24.png` },
      { name: "Air Entrained", description: "Improves freeze-thaw resistance of concrete.", image: `${P}/PLASTCONE-AIRENT.png` },
      { name: "Crystalline Admixture", description: "Self-sealing waterproofing for concrete.", image: `${P}/POLYCOTE_CWP.png` },
      { name: "Integral Waterproofing Compound", description: "Mixed into concrete for built-in water resistance.", image: `${P}/PLASTCONE-AW.png` },
      { name: "Corrosion Inhibiting Admixture", description: "Protects rebar from corrosion in concrete.", image: `${P}/REDWOP-CI-150.png` },
      { name: "Under Water Admixture", description: "Specially formulated for underwater concrete pours.", image: `${P}/MICROCONE-UWL-1.png` },
      { name: "Precast Admixture", description: "Optimized for precast concrete production.", image: `${P}/PROCRETE-HP20.png` },
    ],
  },
  {
    title: "Waterproofing Chemicals",
    slug: "waterproofing-chemicals",
    intro: "Liquid membranes, crystalline coatings and cement-based systems for lasting protection.",
    products: [
      { name: "Liquid Membrane Waterproofing", description: "Flexible coating for terraces, roofs and balconies.", image: `${P}/SMARZKOT-ADVANCED.png` },
      { name: "2K Elastic Waterproofing", description: "Two-component system for crack-bridging protection.", image: `${P}/SMARZKOT-B2Flex.png` },
      { name: "Crystalline Waterproofing", description: "Penetrating protection that becomes part of the concrete.", image: `${P}/POLYCOTE-WH100.png` },
      { name: "Cement Based Waterproofing", description: "Reliable rigid or semi-flexible waterproofing for wet areas.", image: `${P}/SMARZKOT-waterguard.png` },
      { name: "PU Liquid Membrane Waterproofing", description: "Polyurethane-based liquid membrane for superior flexibility and durability.", image: `${P}/REDWOP-PU-200.png` },
      { name: "Polyurea Waterproofing", description: "Fast-curing, high-performance polyurea coating for demanding environments.", image: `${P}/POLYUREA-WATERPROOFING.jpeg` },
      { name: "Fiber Mesh", description: "Reinforcement mesh for waterproofing membranes.", image: `${P}/FIBER-GLASS-MESH-145-GSM.png` },
    ],
  },
  {
    title: "Tile Adhesive, Grout & Bonding",
    slug: "tile-adhesive",
    intro: "High-strength tile fixing solutions for walls, floors and heavy-duty applications.",
    products: [
      { name: "Tile Adhesive", description: "High-strength adhesive for walls and floors (IS 15477:2004).", image: `${P}/TERATILE-PLATIUM.png` },
      { name: "Tile Grout", description: "Fine-finish grout for joints between tiles.", image: `${P}/TILE-GROUT.png` },
      { name: "Bonding Agent", description: "Improves adhesion between old and new concrete surfaces.", image: `${P}/BUTABOND-SBR.png` },
      { name: "Epoxy Grout", description: "High-strength stain-resistant grouting for joints.", image: `${P}/EPTILE-GROUT-GLITTER-1.png` },
      { name: "Tile Cleaner", description: "Removes stains and efflorescence from tile surfaces.", image: `${P}/RECLEANER-100.png` },
    ],
  },
  {
    title: "Repair, Flooring & Specialty",
    slug: "repair-flooring",
    intro: "Comprehensive solutions for repair, flooring, finishing and protection.",
    products: [
      { name: "Non Shrink Grout", description: "Precision grouting for equipment bases and anchor bolts.", image: `${P}/ARACONE-AT.png` },
      { name: "Polymer Repair Mortar", description: "Structural repair for damaged concrete surfaces.", image: `${P}/REDELTITE-R.png` },
      { name: "Crack Filler", description: "Fast-setting filler for surface cracks in walls and floors.", image: `${P}/SEALCRACK.png` },
      { name: "Self Leveling Flooring", description: "Smooth, self-leveling base for industrial and commercial floors.", image: `${P}/MATTCEM-SL.png` },
      { name: "Floor Hardener", description: "Dust-proofing and hardening for industrial concrete floors.", image: `${P}/HARDFLOOR-N.png` },
      { name: "Light Weight Block Joint Mortar", description: "For AAC block jointing with minimal wastage.", image: `${P}/BLOCKFIX.png` },
      { name: "Ready Mix Plaster", description: "Factory-made plaster for consistent wall finishes.", image: `${P}/WHITPLAST-SF.png` },
      { name: "Mould Release Agent", description: "Prevents concrete from sticking to formwork.", image: `${P}/REMOL-Oil-based.png` },
      { name: "Fast Plugging", description: "Instant stop to active water leaks in concrete.", image: `${P}/PLUGFAST.png` },
      { name: "Polyester Anchor Grout", description: "Chemical anchoring for bolts and rebars.", image: `${P}/ANCHOSINE-P-FIX.png` },
      { name: "Rust Converter", description: "Converts rust to stable compound before painting.", image: `${P}/Rust-Converter.jpg` },
      { name: "Rust Remover", description: "Removes rust from metal surfaces.", image: `${P}/Rust-Remover.jpg` },
      { name: "Bituminous Products", description: "Waterproofing and protection for below-grade structures.", image: `${P}/Bituminous-Products.jpg` },
      { name: "Curing Compound", description: "Retains moisture in concrete for proper curing.", image: `${P}/REDICURE-WB-E.png` },
      { name: "Primer", description: "Prepares surfaces for coating adhesion.", image: `${P}/PRIMER-WB.png` },
      { name: "Wall Putty", description: "Smooth base coat for interior walls before painting.", image: `${P}/Wall-Putty.jpg` },
      { name: "Anti Corrosive", description: "Protection for steel structures and surfaces.", image: `${P}/EISENGUARD-1.png` },
      { name: "Protective Coating", description: "High-performance coatings for industrial surfaces.", image: `${P}/MAZIKCOAT-1.png` },
      { name: "Sealant", description: "Flexible gap filling and joint sealing.", image: `${P}/REDOFLEX-PG.png` },
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
