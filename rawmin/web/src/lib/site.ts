export const SITE = {
  name: "RAWMIN SKINOLOGY",
  legal: "RAWMIN SKINOLOGY PRIVATE LIMITED",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phones: [
    { label: "Primary", display: "+91 99103 93383", tel: "+919910393383" },
    { label: "Secondary", display: "+91 93114 22855", tel: "+919311422855" },
  ],
  whatsapp: "919910393383",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // Address as printed on the supplied certificates. The brochure's contact page lists a different
  // (Sector 32, DLF Industrial Area) address: confirm which is current and edit only this block.
  address: { street: "2nd Floor, Plot No. 2, Site No. 2, 14/3 Main Mathura Road, Sector 31", city: "Faridabad", region: "Haryana", postal: "121003", country: "IN" },
  mapEmbed: process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "",
};
export const fullAddress = `${SITE.name}, ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}, India`;
export const mapsQuery = encodeURIComponent(fullAddress);

export type Product = { name: string; slug: string; description: string; range_items: string[]; image?: string | null };
export const PRODUCTS: Product[] = [
  { name: "Skin Care & Skin Protection", slug: "skin-care", description: "Skin care and skin-protection products for everyday care and targeted concerns.", range_items: ["Serums", "Moisturizers", "Sunscreens", "Face masks", "Scrubs", "Skin treatments"], image: "/products/skin-care.jpg" },
  { name: "Skin Cleansers", slug: "skin-cleansers", description: "Cleansing products for different skin types and product requirements.", range_items: ["Face cleansers", "Face wash", "Cleansing products"], image: "/products/skin-cleansers.jpg" },
  { name: "Hair Care & Hair Protection", slug: "hair-care", description: "Hair-care products for nourishment, conditioning and targeted hair and scalp care.", range_items: ["Hair conditioners", "Hair masks", "Hair serums", "Hair treatments"], image: "/products/hair-care.jpg" },
  { name: "Hair Cleansers", slug: "hair-cleansers", description: "Hair-cleansing products for different hair-care requirements.", range_items: ["Shampoos", "Hair cleansers", "Specialised cleansing products"], image: "/products/hair-cleansers.jpg" },
  { name: "Body Care", slug: "body-care", description: "Body-care products for cleansing, nourishment and everyday routines.", range_items: ["Body cleansers", "Body oils", "Body lotions", "Body scrubs", "Body butters"], image: "/products/body-care.jpg" },
  { name: "Lip Care", slug: "lip-care", description: "Lip-care products for nourishment and protection.", range_items: ["Lip balms", "Lip oils", "Lip scrubs", "Lip masks", "Lip butters"], image: "/products/lip-care.jpg" },
  { name: "Bath & Shower", slug: "bath-shower", description: "Bath and shower products for everyday personal-care routines.", range_items: ["Bath products", "Shower products", "Body wash"], image: "/products/bath-shower.jpg" },
];

export const STAGES = ["Ingredients", "R&D and formulation", "Testing and sampling", "Manufacturing", "Filling and packaging", "Finished product"];
export const STEPS = [
  ["Share your vision", "Tell us your product idea, category, positioning, ingredients or a benchmark product."],
  ["Development and sampling", "We evaluate the requirement and develop or select a suitable formulation for sampling."],
  ["Packaging and artwork", "Select packaging formats and coordinate artwork and labelling requirements."],
  ["Production and quality", "Once approved, the product moves into planned production with quality checkpoints."],
  ["Dispatch", "Finished products are packed and dispatched according to your requirements."],
];
export const FAQ = [
  ["Can RAWMIN SKINOLOGY develop a completely new formulation?", "Yes. Our custom cosmetics service supports formulation development based on your product concept, target market, ingredients, claims and specifications."],
  ["Can I manufacture products under my own brand?", "Yes. Our private label and third-party manufacturing programs let brands develop and manufacture products under their own brand identity."],
  ["Do you provide packaging support?", "Yes. We support packaging selection, packaging consultation and coordination of packaging and artwork requirements."],
  ["Can I provide my own formulation or benchmark product?", "Yes. Your formulation brief, benchmark sample, INCI list, product concept or packaging idea can be used in the development discussion."],
  ["Do you provide samples before bulk production?", "Yes. Samples can be evaluated and refined before moving toward final production."],
  ["Do you support export requirements?", "Yes. RAWMIN provides export documentation and compliance support, including COA, specifications and MSDS where required."],
  ["What categories do you manufacture?", "Skin care, hair care, men's grooming, baby care, kids care, herbal and other personal-care categories."],
  ["Can I request a custom quotation?", "Yes. Share your product requirements, expected quantity and packaging preferences with our team to discuss your project."],
];

type Section = { h: string; p: string; list?: string[] };
export type PageDef = { slug: string; nav: string; title: string; description: string; h1: string; lead: string; sections: Section[]; cta: string };
export const PAGES: Record<string, PageDef> = {
  about: {
    slug: "about", nav: "About", title: "About RAWMIN SKINOLOGY | Cosmetic Manufacturer in Faridabad",
    description: "RAWMIN SKINOLOGY, founded in 2023 in Faridabad, is a B2B cosmetic manufacturing and product development partner for skin and personal-care brands.",
    h1: "Built with purpose. Evolved with precision.",
    lead: "RAWMIN SKINOLOGY is a B2B cosmetic manufacturing and product development partner, helping brands turn ideas into market-ready beauty and personal-care products.",
    sections: [
      { h: "More than a manufacturer", p: "Successful products begin long before they reach the shelf: with an idea, a formulation, the right ingredients, thoughtful packaging and a manufacturing process that brings everything together. Founded in 2023, RAWMIN was built to be a capable, quality-driven partner for the beauty and personal-care industry." },
      { h: "Vision and mission", p: "Our vision is to become a trusted and forward-thinking partner for beauty and personal-care brands, moving innovative ideas from concept to market with quality, precision and purpose. Our mission is to turn ideas into reliable, market-ready products through thoughtful formulation, product development, quality-focused manufacturing and dependable support." },
      { h: "Our approach", p: "We start by understanding the product first, then align formulation, development, manufacturing and support around it.", list: ["Understand the product concept, requirements and intended market.", "Develop the formulation through sampling and refinement.", "Deliver through manufacturing, quality checks, packaging support and dispatch."] },
      { h: "From 2023 to today", p: "2023: the beginning. 2024: building the foundation across formulation, product development and manufacturing. 2025: growing capabilities and product possibilities. 2026: bringing together R&D, manufacturing, quality and product development." },
    ],
    cta: "Talk to our team",
  },
  products: {
    slug: "products", nav: "Products", title: "Products | Skincare, Haircare & Personal-Care Manufacturing | RAWMIN SKINOLOGY",
    description: "Seven product categories for brands: skin care, skin cleansers, hair care, hair cleansers, body care, lip care and bath and shower, manufactured in Faridabad, India.",
    h1: "Products designed for beauty and personal care.",
    lead: "A focused portfolio covering skin protection and cleansing, haircare, body care, lip care and bath and shower, developed for brands that need reliable product development and manufacturing support.",
    sections: [], cta: "Find the right category for your brand",
  },
  services: {
    slug: "services", nav: "Services", title: "Cosmetic Manufacturing Services in India | RAWMIN SKINOLOGY",
    description: "Private label, custom cosmetics, packaging support, quality and regulatory support and export documentation from RAWMIN SKINOLOGY, Faridabad.",
    h1: "One manufacturing partner. Different ways to build.",
    lead: "From established formulations to completely custom products, RAWMIN works with beauty and personal-care brands from product brief to market-ready production.",
    sections: [
      { h: "Private label manufacturing", p: "Choose from existing formulations and develop them around your brand. Ingredients, actives, fragrance, colour, texture and packaging can be adapted." },
      { h: "Custom cosmetics", p: "Start with an idea. We build a formulation around your brief covering positioning, ingredients, texture, performance and packaging." },
      { h: "Product development and R&D", p: "Product brief evaluation, formulation development, ingredient selection, texture and sensory development, sample preparation, refinement and production planning." },
      { h: "Packaging support", p: "Selection and coordination for bottles, jars, tubes, airless pumps, sachets, cartons, labels and printing, depending on product requirements and availability." },
      { h: "Manufacturing", p: "Once formulation and packaging are approved, products move into controlled production, filling and packing to agreed specifications." },
      { h: "Quality and regulatory support", p: "Quality assurance, product feasibility, documentation and regulatory guidance throughout development and manufacturing." },
      { h: "Export support", p: "Documentation, specifications, COA, MSDS and export-related coordination for brands targeting international markets." },
    ],
    cta: "Start a conversation",
  },
  "private-label": {
    slug: "private-label", nav: "Private Label", title: "Private Label Cosmetic Manufacturer in India | RAWMIN SKINOLOGY",
    description: "Start with a proven formulation and build it into your brand. Private label skincare, haircare and personal-care manufacturing in Faridabad, India.",
    h1: "Start with a proven formulation. Build it into your brand.",
    lead: "Private label lets you select an established formulation and develop it under your own brand identity, instead of developing every product from the beginning.",
    sections: [
      { h: "What you can customise", p: "Private label does not have to mean identical.", list: ["Ingredients and active ingredients", "Fragrance and colour", "Texture", "Packaging: bottle, jar, tube, pump, carton and more"] },
      { h: "How it works", p: "Product selection, customisation, sampling, packaging, approval, manufacturing and dispatch. Samples are prepared for evaluation and refinement before the agreed formulation, packaging and production specifications are finalised." },
      { h: "Categories", p: "Skin care and skin protection, skin cleansers, hair care and hair protection, hair cleansers, body care, lip care, and bath and shower." },
    ],
    cta: "Discuss private label",
  },
  "custom-formulation": {
    slug: "custom-formulation", nav: "Custom Formulation", title: "Custom Cosmetic Formulation & Product Development | RAWMIN SKINOLOGY",
    description: "Custom cosmetic formulation and product development around your brief, from ingredient selection to testing, sampling and manufacturing in Faridabad.",
    h1: "Start with an idea. Build the formulation around it.",
    lead: "RAWMIN develops custom cosmetic products around your product brief, target audience and formulation requirements, from ingredient selection to testing, sampling and manufacturing.",
    sections: [
      { h: "From brief to formulation", p: "Requirements are translated into a formulation direction covering ingredients, actives, texture, fragrance and product format. The path runs brief, ingredients, formulation, testing, sample, approval." },
      { h: "Research and development", p: "Our R&D process develops formulations around the intended product, with attention to ingredients, formulation balance, texture and production feasibility." },
      { h: "Stability and testing", p: "Formulations undergo appropriate testing and stability evaluation to assess consistency and performance under controlled conditions." },
    ],
    cta: "Discuss your product idea",
  },
  quality: {
    slug: "quality", nav: "Quality", title: "Quality & Certifications | RAWMIN SKINOLOGY",
    description: "Quality-focused cosmetic manufacturing at RAWMIN SKINOLOGY, with GMP and ISO 9001:2015 certificate documents you can open and read.",
    h1: "Quality you can verify.",
    lead: "Quality is built into every stage, from formulation and raw-material selection to production, quality checks and dispatch, with the aim of consistency across every batch.",
    sections: [], cta: "Ask about our quality processes",
  },
};
