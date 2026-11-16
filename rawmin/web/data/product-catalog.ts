export interface ProductItem {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  formulationPossibilities: string[];
  texturesAndFormats: string[];
  keyActives: string[];
  packagingOptions: string[];
  moq: string;
  leadTime: string;
  image: string;
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
  relatedProductIds: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  highlights: string[];
  productSlugs: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
{
    id: "skin-care",
    slug: "skin-care",
    name: "Skin Care & Skin Protection",
    tagline: "High-performance dermaceutical, barrier-repair & everyday skincare formulations",
    shortDescription: "From gentle cleansers and restorative serums to broad-spectrum sunscreens and peptide barrier creams, formulated with clinical efficacy and clean standards.",
    detailedDescription: "Rawmin Skinology specializes in contract manufacturing and bespoke private label formulation for the complete skincare spectrum. Our cleanroom facilities and Korean R&D formulation benchmarks deliver clinically validated actives, stability-tested emulsions, and high-compatibility skincare products tailored for modern beauty brands.",
    image: "/images/products/categories/skin-care.jpg",
    highlights: [
      "Microbiome-friendly & barrier-strengthening ingredients",
      "Broad-spectrum SPF 30 / 50+ PA++++ photostable UV systems",
      "EWG Green grade, vegan & clean beauty compliant options",
      "Scalable from 1,000 units to commercial multi-ton batch production"
    ],
    productSlugs: [
      "face-wash",
      "facial-cleansers",
      "toners",
      "face-mists",
      "face-serums",
      "face-creams",
      "moisturisers",
      "sunscreens",
      "face-scrubs",
      "peel-off-masks",
      "face-masks",
      "skin-protection-formulations",
      "specialty-skin-care"
    ]
  },
  {
    id: "hair-care",
    slug: "hair-care",
    name: "Hair Care & Hair Protection",
    tagline: "Follicle-nourishing, scalp-strengthening & restorative hair care formulations",
    shortDescription: "Sulfate-free shampoos, keratin bonding conditioners, targeted scalp serums, and intensive hair masks engineered for strand resilience and scalp vitality.",
    detailedDescription: "Our haircare and scalp formulation capabilities combine modern trichological science with clean cosmetic formulations. From growth-stimulating Redensyl-Capixyl-Procapil complexes to lightweight lipid serums and thermal protection mists, we build formulations that deliver visible shine, cuticle seal, and hair fiber strength.",
    image: "/images/products/categories/category-hair-care.jpg",
    highlights: [
      "Trichology-backed active systems (Redensyl, Capixyl, Biotinoyl)",
      "Sulfate-free, silicone-free, and color-safe surfactant bases",
      "Thermal & environmental UV fiber protection systems",
      "Viscosity and foaming profiles engineered for global packaging standards"
    ],
    productSlugs: [
      "shampoos",
      "conditioners",
      "hair-masks",
      "hair-serums",
      "hair-oils",
      "scalp-care-formulations",
      "hair-protection-products"
    ]
  },
  {
    id: "body-care",
    slug: "body-care",
    name: "Body Care",
    tagline: "Nourishing, revitalizing & barrier-replenishing body care treatments",
    shortDescription: "Ultra-hydrating body lotions, whipped botanical butters, illuminating dry body oils, and smoothing exfoliants crafted for silky texture and deep hydration.",
    detailedDescription: "Elevate your brand's body care portfolio with luxurious textures and targeted active treatments. Rawmin Skinology manufactures high-shear emulsions, rich botanical balms, and non-greasy lipid dry oils that absorb quickly while delivering 24-hour hydration and sensory elegance.",
    image: "/images/products/categories/body-care.png",
    highlights: [
      "Fast-absorbing lipid profiles with zero sticky residue",
      "Rich cold-pressed botanical butters (Shea, Murumuru, Mango, Cocoa)",
      "AHA/BHA chemical exfoliation & microbead-free physical polishes",
      "Compatible with airless pumps, aluminum tubes, and recycled PET packaging"
    ],
    productSlugs: [
      "body-cleansers",
      "body-oils",
      "body-lotions",
      "body-scrubs",
      "body-butters",
    ]
  },
  {
    id: "lip-care",
    slug: "lip-care",
    name: "Lip Care",
    tagline: "Ultra-nourishing, volumizing & protective lip treatment formulations",
    shortDescription: "Plumping lip oils, melting butter balms, smoothing sugar polishes, and overnight restorative peptide lip sleeping masks engineered for delicate lip tissue.",
    detailedDescription: "Lip tissue requires precision formulation with high moisture retention and barrier repair actives. Rawmin Skinology crafts ultra-hydrating lip care solutions ranging from mirror-finish non-sticky lip oils with plant squalane to high-melting-point stick balms, nourishing tinted butter pots, and peptide volumizing treatments.",
    image: "/images/products/categories/lip-care.jpg",
    highlights: [
      "Ultra-glossy, mirror-shine oils without tackiness or heaviness",
      "Peptide-infused volumizing and fine-line smoothing complexes",
      "Gentle food-grade flavors and clean botanical waxes (Candelilla, Carnauba)",
      "Available in wand tubes, squeeze applicators, metal tins, and stick formats"
    ],
    productSlugs: [
      "lip-balms",
      "lip-oils",
      "lip-scrubs",
      "lip-masks",
      "lip-butters",
      "lip-care-treatments"
    ]
  },
  {
    id: "bath-shower",
    slug: "bath-shower",
    name: "Bath & Shower",
    tagline: "Spa-grade, sensorial cleansing gels, aromatic washes & mineral bath soaks",
    shortDescription: "Rich lathering body washes, crystal-clear aromatic shower gels, revitalizing bath salts, and silky bath oils designed to turn daily cleansing into a spa ritual.",
    detailedDescription: "Transform daily bathing into an immersive wellness experience. Our bath and shower formulations feature sulfate-free amino acid cleansers, skin-conditioning glycerin matrixes, mineral-rich Himalayan and Epsom crystals, and encapsulated fragrance oils that maintain hydration while thoroughly cleansing.",
    image: "/images/products/categories/bath-shower.jpg",
    highlights: [
      "Micro-foam and dense cloud-lather surfactant architectures",
      "Skin-neutral pH 5.5 preserving the acid mantle during frequent washing",
      "Aromatherapeutic essential oil and allergen-free fragrance blends",
      "Clear, pearlescent, jelly, and dual-phase suspension formulations"
    ],
    productSlugs: [
      "body-washes",
      "shower-gels",
      "bath-products",
      "bath-scrubs",
    ]
  },
  {
    id: "mens-grooming",
    slug: "mens-grooming",
    name: "Men's Grooming",
    tagline: "High-performance, multi-functional grooming & skincare engineered for men",
    shortDescription: "Clarifying charcoal cleansers, fast-absorbing matte moisturizers, conditioning beard oils, smooth shaving creams, and soothing after-shave treatments.",
    detailedDescription: "Men's skin has unique physiological characteristics, including greater thickness, higher sebum production, and frequent irritation from shaving. Rawmin Skinology formulates targeted men's grooming products with non-greasy textures, anti-inflammatory botanicals, active sebum regulators, and masculine aromatic notes.",
    image: "/images/products/categories/Men’s Grooming .png",
    highlights: [
      "Matte-finish, fast-absorbing textures tailored for oily & thick skin",
      "Soothing post-shave complexes with Bisabolol, Witch Hazel & Centella",
      "Conditioning non-comedogenic beard oils with Argan, Jojoba & Cedarwood",
      "Sleek minimalist packaging compatibility: matte black, gunmetal & slate"
    ],
    productSlugs: [
      "mens-face-wash",
      "mens-face-creams",
      "beard-oils",
      "beard-balms",
      "shaving-creams",
      "after-shave-products",
      "mens-grooming-serums",
    ]
  },
  {
    id: "baby-care",
    slug: "baby-care",
    name: "Baby Care",
    tagline: "Ultra-mild, hypoallergenic, tear-free & dermatologically tested infant care",
    shortDescription: "Gentle head-to-toe baby washes, soothing colloidal oatmeal lotions, pure botanical massage oils, calming diaper barrier creams, and tear-free shampoos.",
    detailedDescription: "Infant and newborn skin is fragile, delicate, and prone to moisture loss. Rawmin Skinology adheres to the highest global pediatric safety benchmarks, formulating ultra-mild baby care products free from sulfates, parabens, phthalates, synthetic dyes, and harsh allergens to protect delicate developing skin.",
    image: "/images/products/categories/Soft Baby Care Still Life.png",
    highlights: [
      "Pediatrician-aligned, certified hypoallergenic & tear-free chemistry",
      "Zinc oxide & calendula soothing diaper barrier protection",
      "Natural colloidal oat, sweet almond & cold-pressed chamomile oils",
      "Certified cleanroom production complying with ISO 22716 & Good Manufacturing Practices"
    ],
    productSlugs: [
      "baby-washes",
      "baby-lotions",
      "baby-oils",
      "baby-creams",
      "baby-shampoos",
    ]
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
{
    id: "face-wash",
    slug: "face-wash",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Wash",
    shortDescription: "Gentle daily foaming and gel face washes tailored for sensitive, acne-prone, oily, or dry skin types.",
    detailedDescription: "Our custom face wash formulations balance deep pore cleansing with skin barrier preservation. Engineered with amino-acid surfactants, soothing botanicals, and optional active systems like salicylic acid, green tea, and niacinamide.",
    formulationPossibilities: [
      "Acne-control formula with 2% Salicylic Acid and Zinc PCA",
      "Brightening gel cleanser with Vitamin C and Licorice Root extract",
      "Gentle foaming cream wash with Ceramides and Hyaluronic Acid",
      "Hydrating gel-to-foam wash with Centella Asiatica and Aloe Vera"
    ],
    texturesAndFormats: ["Transparent gel", "Gentle self-foaming pump liquid", "Cream-to-foam emulsion", "Micellar cleansing wash"],
    keyActives: ["Salicylic Acid", "Niacinamide", "Centella Asiatica", "Ceramides", "Zinc PCA", "Hyaluronic Acid"],
    packagingOptions: ["Pump bottle (100ml / 150ml / 200ml)", "Flexible squeeze tube with flip cap", "Foamer pump dispenser"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face-wash.jpg",
    gallery: ["/images/products/skin-care/face-wash.jpg", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Face Wash Manufacturer | Custom Formulation | RAWMIN Skinology",
    seoDescription: "Contract manufacturing of private label face wash formulations. Custom gel, foaming, and cream cleansers with active ingredients in Faridabad, India.",
    relatedProductIds: ["facial-cleansers", "toners", "face-mists", "face-serums"]
  },
{
    id: "facial-cleansers",
    slug: "facial-cleansers",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Facial Cleansers",
    shortDescription: "Specialized cleansing oils, balms, and micellar waters that lift stubborn makeup and impurities without stripping moisture.",
    detailedDescription: "High-performance facial cleansers designed for modern double-cleansing routines. Formulated with lightweight plant-derived emulsifying oils and soothing agents that rinse away completely clean without greasy residue.",
    formulationPossibilities: [
      "Melting cleansing balm with Moringa oil and Vitamin E",
      "Lightweight cleansing oil with Jojoba and Squalane",
      "Biphasic micellar makeup remover with Rose water",
      "Hydrating milky cleanser with colloidal oatmeal"
    ],
    texturesAndFormats: ["Melting solid balm", "Silky cleansing oil", "Biphasic liquid", "Velvety cleansing milk"],
    keyActives: ["Plant Squalane", "Moringa Seed Oil", "Jojoba Oil", "Vitamin E", "Colloidal Oatmeal"],
    packagingOptions: ["Wide-mouth cosmetic jar with spatula", "Pump dispenser bottle", "Recycled amber bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/facial-cleansers.jpg",
    gallery: ["/images/products/skin-care/facial-cleansers.jpg", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Contract Facial Cleanser Manufacturer | Cleansing Balms & Oils | RAWMIN",
    seoDescription: "Bespoke facial cleansers, cleansing balms, and cleansing oils contract manufacturing. High-efficiency makeup-melting formulas for private labels.",
    relatedProductIds: ["face-wash", "toners", "face-creams", "moisturisers"]
  },
{
    id: "toners",
    slug: "toners",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Toners",
    shortDescription: "Clarifying, exfoliating, and deep-hydration toners engineered to balance skin pH and prep for serum absorption.",
    detailedDescription: "Our toners utilize advanced solvent systems and active hydrosols that deliver instant hydration while refining skin texture. Available in gentle exfoliating AHA/BHA acid toners, Korean milk toners, and soothing botanical infusions.",
    formulationPossibilities: [
      "Korean-style milky toner with Rice Ferment filtrate and Ceramides",
      "Exfoliating glow toner with 7% Glycolic Acid and Witch Hazel",
      "Calming barrier toner with Heartleaf and Centella Asiatica",
      "Hydrating multi-molecular Hyaluronic Acid moisture toner"
    ],
    texturesAndFormats: ["Milky essence toner", "Water-light clarifying liquid", "Viscous essence toner", "Biphasic shake toner"],
    keyActives: ["Rice Ferment Filtrate", "Glycolic Acid", "Centella Asiatica", "Witch Hazel", "Panthenol (Pro-Vitamin B5)"],
    packagingOptions: ["Frosted glass bottle (100ml / 150ml)", "Recycled PET bottle with flow restrictor", "Pump bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/toners.jpg",
    gallery: ["/images/products/skin-care/toners.jpg", "/images/products/textures/gel-emulsion-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Face Toner Manufacturer | OEM Cosmetic Toners | RAWMIN",
    seoDescription: "Custom formulation and contract manufacturing of face toners. Milky essence toners, exfoliating acid toners, and soothing barrier toners.",
    relatedProductIds: ["face-mists", "face-serums", "face-wash", "moisturisers"]
  },
{
    id: "face-mists",
    slug: "face-mists",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Mists",
    shortDescription: "Ultra-fine hydrating and antioxidant facial mists designed for on-the-go refresh and makeup setting.",
    detailedDescription: "Designed for cloud-like atomization, our face mists infuse skin with moisture, anti-pollution defenders, and calming botanical extracts without disrupting makeup or leaving droplets on skin.",
    formulationPossibilities: [
      "Hydrating dewy glow mist with Rose water and Niacinamide",
      "Urban shield anti-pollution mist with Ectoin and Green Tea",
      "Soothing mineral thermal mist with Aloe and Allantoin",
      "Bi-phase oil-in-water radiance mist with Squalane"
    ],
    texturesAndFormats: ["Ultra-fine micro-mist", "Bi-phase oil/water spray", "Refreshing botanical tonic spray"],
    keyActives: ["Ectoin", "Niacinamide", "Rose Hydrosol", "Green Tea Extract", "Plant Squalane", "Allantoin"],
    packagingOptions: ["Fine-mist spray bottle (50ml / 100ml)", "Continuous micro-spray aluminum bottle", "Frosted glass sprayer"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face-mists.jpg",
    gallery: ["/images/products/skin-care/face-mists.jpg", "/images/products/textures/gel-emulsion-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Face Mist Manufacturer | Custom Formulated Facial Sprays | RAWMIN",
    seoDescription: "Private label face mist manufacturing. Hydrating, setting, and anti-pollution facial mists with ultra-fine mist atomizers.",
    relatedProductIds: ["toners", "face-serums", "moisturisers", "sunscreens"]
  },
{
    id: "face-serums",
    slug: "face-serums",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Serums",
    shortDescription: "High-potency targeted active serums for hyperpigmentation, anti-aging, acne, brightening, and barrier repair.",
    detailedDescription: "The cornerstone of clinical skincare. We formulate high-concentration, highly stable active serums with optimized penetration enhancers. Formulations undergo rigorous stability, viscosity, and microbial challenge testing in our cleanrooms.",
    formulationPossibilities: [
      "Brightening serum with 10% / 15% Vitamin C (Ethyl Ascorbic Acid) + Ferulic Acid",
      "Pore-refining serum with 10% Niacinamide + 1% Zinc PCA",
      "Anti-aging firming serum with Multi-Peptide complex and Copper Peptides",
      "Deep plumping serum with 2% Hyaluronic Acid (4 molecular weights) + B5",
      "Gentle resurfacing serum with 0.3% / 1% Micro-encapsulated Retinol"
    ],
    texturesAndFormats: ["Crystal-clear lightweight gel", "Milky emulsion serum", "Rich nourishing oil-serum", "Biphasic ampoule"],
    keyActives: ["Vitamin C (Ethyl Ascorbic Acid)", "Niacinamide", "Retinol", "Copper Peptides", "Multi-Molecular Hyaluronic Acid", "Alpha Arbutin"],
    packagingOptions: ["Amber / frosted glass dropper bottle (30ml)", "Airless pump dispenser", "Twist-up precision dropper bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face serum (1).png",
    gallery: ["/images/products/skin-care/face serum (1).png", "/images/products/textures/dropper-pipette-macro.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Face Serum Manufacturer | Vitamin C & Retinol | RAWMIN",
    seoDescription: "Custom face serum manufacturing in India. High potency Vitamin C, Niacinamide, Retinol, and Hyaluronic Acid serums for beauty brands.",
    relatedProductIds: ["face-creams", "moisturisers", "sunscreens", "specialty-skin-care"]
  },
{
    id: "face-creams",
    slug: "face-creams",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Creams",
    shortDescription: "Rich, velvety day and night face creams providing deep cellular nourishment, anti-aging benefits, and lipid barrier support.",
    detailedDescription: "Luxurious emulsion chemistry combining bio-compatible lipids, peptides, and humectants. Formulated for quick absorption without greasy residue, leaving a soft-focus velvet skin feel.",
    formulationPossibilities: [
      "Overnight barrier restoration cream with 5 Ceramides and Cholesterol",
      "Anti-wrinkle peptide face cream with Matrixyl 3000 and Argireline",
      "Rich glow cream with Squalane, Bakuchiol, and Marula oil",
      "Firming collagen night cream with marine collagen and Shea butter"
    ],
    texturesAndFormats: ["Velvety rich cream", "Melting whipped soufflé", "Firming dense balm-cream", "Lightweight day cream"],
    keyActives: ["Ceramides Complex (NP, AP, EOP)", "Bakuchiol", "Matrixyl 3000", "Plant Squalane", "Marine Collagen"],
    packagingOptions: ["Heavy-wall cosmetic jar (50ml) with silver/gold lid", "Airless jar with pump lid", "Aluminum squeeze tube"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face cream.png",
    gallery: ["/images/products/skin-care/face cream.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Contract Face Cream Manufacturer | Anti-Aging & Barrier Creams | RAWMIN",
    seoDescription: "Private label face cream manufacturing. Formulate anti-aging night creams, peptide creams, and ceramide barrier creams with RAWMIN Skinology.",
    relatedProductIds: ["moisturisers", "face-serums", "sunscreens", "skin-protection-formulations"]
  },
{
    id: "moisturisers",
    slug: "moisturisers",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Moisturisers",
    shortDescription: "Weightless oil-free gel creams, daily hydration lotions, and soothing barrier emulsions for all skin types.",
    detailedDescription: "Engineered for daily use under makeup or sunscreen. These breathable moisturizers replenish the natural moisturizing factor (NMF) of the stratum corneum with immediate and sustained 24-hour hydration.",
    formulationPossibilities: [
      "Oil-free water-burst gel cream with Hyaluronic Acid and Centella",
      "Cica soothing daily moisturizer for sensitive and post-treatment skin",
      "Mattifying hydration fluid for oily skin with Niacinamide and Silica",
      "Barrier repair lotion with Oat Beta-Glucan and Allantoin"
    ],
    texturesAndFormats: ["Water-break gel-cream", "Featherlight emulsion lotion", "Calming gel lotion", "Dewy cream fluid"],
    keyActives: ["Centella Asiatica", "Hyaluronic Acid", "Oat Beta-Glucan", "Niacinamide", "Allantoin", "Glycerin"],
    packagingOptions: ["Pump dispenser bottle (50ml / 100ml)", "Cosmetic tube with needle nose or flip cap", "Airless pump bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/moisturiser.png",
    gallery: ["/images/products/skin-care/moisturiser.png", "/images/products/textures/gel-emulsion-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Moisturiser Manufacturer | Private Label Daily Hydration | RAWMIN",
    seoDescription: "Contract manufacturing of daily face moisturisers, gel creams, and oil-free lotions. Tailored formulations for brands across global markets.",
    relatedProductIds: ["face-creams", "face-serums", "sunscreens", "face-wash"]
  },
{
    id: "sunscreens",
    slug: "sunscreens",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Sunscreens",
    shortDescription: "Broad-spectrum SPF 30 & SPF 50+ PA++++ mineral, chemical, and hybrid sunscreens with zero white cast.",
    detailedDescription: "Photostable sun protection tested according to ISO 24444 and ISO 24443 standards. Formulated with lightweight sensory textures that spread smoothly, leaving no sticky residue or white cast on any skin tone.",
    formulationPossibilities: [
      "Invisible chemical sunscreen SPF 50+ PA++++ with modern EU/Korean UV filters",
      "100% Mineral non-nano Zinc Oxide SPF 50 PA++++ for sensitive and baby skin",
      "Tinted mineral sunscreen fluid with universal adapting sheer tint",
      "Sunstick SPF 50 with matte non-greasy glide for touch-ups",
      "Hydrating sunscreen serum with Hyaluronic Acid and Niacinamide"
    ],
    texturesAndFormats: ["Featherlight sunscreen fluid", "Gel-cream invisible sunscreen", "Matte sunscreen stick", "Water-resistant sports lotion"],
    keyActives: ["Tinosorb S/M", "Uvinul A Plus", "Non-Nano Zinc Oxide", "Titanium Dioxide", "Niacinamide", "Vitamin E"],
    packagingOptions: ["Sleek oval squeeze tube (50ml)", "Twist-up sunstick container", "Airless pump bottle", "Pocket dropper bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/sunscreen.png",
    gallery: ["/images/products/skin-care/sunscreen.png", "/images/products/textures/sunscreen-lotion-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Sunscreen Manufacturer | SPF 50+ PA++++ OEM | RAWMIN",
    seoDescription: "Custom SPF 50+ sunscreen manufacturing in India. Broad spectrum mineral and invisible chemical UV formulations with ISO testing compliance.",
    relatedProductIds: ["moisturisers", "face-creams", "face-serums", "skin-protection-formulations"]
  },
{
    id: "face-scrubs",
    slug: "face-scrubs",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Scrubs",
    shortDescription: "Gentle physical face scrubs featuring ultra-fine biodegradable micro-exfoliants and soothing botanicals.",
    detailedDescription: "Our face scrubs buff away dead cellular buildup without micro-tears. Crafted using spherical jojoba wax beads, walnut shell powder, bamboo silica, or finely milled rice powder suspended in a creamy hydrating matrix.",
    formulationPossibilities: [
      "Jojoba bead gentle polishing scrub with Calendula",
      "Bamboo silica clarifying scrub with Charcoal and Tea Tree",
      "Brightening vitamin scrub with ground Apricot and Orange oil",
      "Creamy enzyme and micro-polish scrub with Papain and Bromelain"
    ],
    texturesAndFormats: ["Cream-based scrub", "Gel suspension scrub", "Foaming scrub cleanser"],
    keyActives: ["Jojoba Wax Spheres", "Bamboo Silica", "Papain Enzymes", "Tea Tree Extract", "Aloe Vera"],
    packagingOptions: ["Cosmetic tube (75ml / 100ml)", "Wide-mouth jar", "Flip-top bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face scrub.png",
    gallery: ["/images/products/skin-care/face scrub.png", "/images/products/textures/botanical-scrub-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Face Scrub Manufacturer | Private Label Physical Exfoliants | RAWMIN",
    seoDescription: "Contract manufacturing of gentle face scrubs and physical exfoliants. Formulated with biodegradable beads and nourishing plant oils.",
    relatedProductIds: [ "face-masks", "face-wash", "facial-cleansers"]
  },
{
    id: "peel-off-masks",
    slug: "peel-off-masks",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Peel-Off Masks",
    shortDescription: "Pore-clearing, detoxifying, and luminous peel-off masks that lift away sebum and blackheads in one clean peel.",
    detailedDescription: "Formulated with flexible film-forming polymers that dry uniformly and peel away seamlessly without redness or irritation. Infused with active charcoal, gold glitter, witch hazel, and firming peptides.",
    formulationPossibilities: [
      "Blackhead clearing charcoal peel-off mask with Tea Tree",
      "Luminous 24K gold firming peel-off mask with Collagen",
      "Clarifying rose gold peel-off mask with Fruit extracts",
      "Soothing cucumber and aloe vera hydrating peel-off mask"
    ],
    texturesAndFormats: ["Viscous metallic gel", "Charcoal black gel", "Shimmering holographic mask paste"],
    keyActives: ["Activated Bamboo Charcoal", "Hydrolyzed Collagen", "Witch Hazel Extract", "Gold Mica", "Tea Tree Oil"],
    packagingOptions: ["Glossy or matte squeeze tube (50ml / 100ml)", "Single-use sachet pouches"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/Peel-Off Mask.png",
    gallery: ["/images/products/skin-care/Peel-Off Mask.png", "/images/products/textures/clay-mask-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Peel-Off Mask Manufacturer | Charcoal & Gold Masks OEM | RAWMIN",
    seoDescription: "Private label peel-off face mask contract manufacturing. Formulate blackhead clearing, charcoal, and firming peel-off masks.",
    relatedProductIds: ["face-masks", "face-scrubs", "facial-cleansers"]
  },
{
    id: "face-masks",
    slug: "face-masks",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Face Masks",
    shortDescription: "Mineral clay masks, wash-off cream masks, sleeping packs, and biocellulose sheet mask formulations.",
    detailedDescription: "Intensive treatment masks for immediate skin rescue. Our formulations include non-drying French Kaolin and Bentonite clay masks, deeply nourishing gel sleeping packs, and nutrient-dense biocellulose essences.",
    formulationPossibilities: [
      "Pore-refining French Pink Clay and Bentonite detox mask",
      "Overnight water sleeping mask with Hyaluronic Acid and Squalane",
      "Brightening turmeric and vitamin C glow mask",
      "Calming Centella Asiatica cica repair wash-off mask"
    ],
    texturesAndFormats: ["Creamy non-drying clay paste", "Cooling bouncy jelly mask", "Overnight sleeping pack", "Sheet mask essence"],
    keyActives: ["Kaolin Clay", "Bentonite Clay", "Turmeric Extract", "Hyaluronic Acid", "Centella Asiatica"],
    packagingOptions: ["Cosmetic tub with inner seal lid (100g)", "Squeeze tube (100ml)", "Single-dose pods", "Pouch foil sachets"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/face mask.png",
    gallery: ["/images/products/skin-care/face mask.png", "/images/products/textures/clay-mask-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Face Mask Manufacturer | Clay Masks & Sleeping Packs | RAWMIN",
    seoDescription: "Contract manufacturing of cosmetic face masks. French clay masks, brightening masks, and overnight sleeping packs for beauty brands.",
    relatedProductIds: ["peel-off-masks", "face-scrubs", "face-creams", "moisturisers"]
  },
{
    id: "skin-protection-formulations",
    slug: "skin-protection-formulations",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Skin Protection Formulations",
    shortDescription: "Targeted barrier defense creams, cica balms, and post-procedure recovery formulations for damaged skin.",
    detailedDescription: "Formulated specifically for compromised, sensitive, eczema-prone, or post-laser skin. These therapeutic creams accelerate epidermal recovery through lamellar lipid bilayers and anti-inflammatory extracts.",
    formulationPossibilities: [
      "Cica intensive barrier repair balm with 5% Madecassoside and Panthenol",
      "Lipid-replenishing cream for eczema-prone skin with Colloidal Oatmeal",
      "Post-procedure recovery ointment with Allantoin and Zinc",
      "Environmental defense barrier shield against blue light and pollutants"
    ],
    texturesAndFormats: ["Dense protective balm", "Rich barrier repair cream", "Soothing recovery ointment"],
    keyActives: ["Madecassoside", "Panthenol (5%)", "Colloidal Oatmeal", "Ceramides NP", "Zinc Oxide", "Ectoin"],
    packagingOptions: ["Laminate barrier tube (30ml / 50ml)", "Airless pump dispenser", "Aluminum medicinal tube"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/skin-protection-formulations.png",
    gallery: ["/images/products/skin-care/skin-protection-formulations.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Skin Barrier Repair Formulation Manufacturer | Cica Creams | RAWMIN",
    seoDescription: "Specialized skin protection and barrier restoration manufacturing. Cica balms, eczema creams, and post-procedure skincare OEM.",
    relatedProductIds: ["face-creams", "sunscreens", "moisturisers", "specialty-skin-care"]
  },
{
    id: "specialty-skin-care",
    slug: "specialty-skin-care",
    categorySlug: "skin-care",
    categoryName: "Skin Care & Skin Protection",
    name: "Specialty Skin Care",
    shortDescription: "Targeted clinical treatments including eye creams, spot treatments, ampoules, and retinol boosters.",
    detailedDescription: "High-precision niche dermaceuticals addressing focused anatomical areas and specific dermatological concerns. Formulated with clinical active benchmarks for under-eye circles, dark spots, and stubborn blemishes.",
    formulationPossibilities: [
      "Dark circle and puffiness eye cream with Caffeine, Peptides & Vitamin K",
      "Targeted acne spot gel with 2% Salicylic Acid, Tea Tree, and Niacinamide",
      "Dark spot correcting booster ampoule with 3% Tranexamic Acid + Arbutin",
      "Concentrated anti-wrinkle retinol oil booster with 1% Retinol & Squalane"
    ],
    texturesAndFormats: ["Precision cooling gel", "Silky eye cream", "Targeted blemish fluid", "High-potency dry oil"],
    keyActives: ["Caffeine", "Tranexamic Acid", "Alpha Arbutin", "Copper Tripeptide-1", "Vitamin K", "Niacinamide"],
    packagingOptions: ["Eye cream tube with zamac/ceramic cooling applicator tip", "Needle nose dropper tube (15ml)", "Glass ampoules"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/skin-care/speciality skincare.png",
    gallery: ["/images/products/skin-care/speciality skincare.png", "/images/products/textures/dropper-pipette-macro.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Specialty Skin Care Manufacturer | Eye Creams & Spot Treatments | RAWMIN",
    seoDescription: "Contract manufacturing of specialty skincare. Formulate clinical eye creams, acne spot treatments, and dark spot ampoules.",
    relatedProductIds: ["face-serums", "face-creams", "skin-protection-formulations", "sunscreens"]
  },
{
    id: "shampoos",
    slug: "shampoos",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Shampoos",
    shortDescription: "Sulfate-free, clarifying, volumizing, and color-protecting shampoos formulated with gentle plant surfactants.",
    detailedDescription: "Custom shampoo formulation utilizing gentle sodium cocoyl isethionate and glucoside surfactants. Engineered for rich, dense lather, scalp soothing, and zero strand dehydration.",
    formulationPossibilities: [
      "Sulfate-free bond repair shampoo with Keratin and Argan oil",
      "Anti-dandruff scalp clarifying shampoo with Salicylic Acid & Piroctone Olamine",
      "Volumizing biotin & caffeine shampoo for thinning hair",
      "Color-lock violet toning shampoo for blonde and highlighted hair"
    ],
    texturesAndFormats: ["Clear viscous gel", "Pearlescent cream shampoo", "Dense foaming liquid", "Sulfate-free micellar shampoo"],
    keyActives: ["Keratin Amino Acids", "Piroctone Olamine", "Biotin", "Caffeine", "Argan Oil", "Panthenol"],
    packagingOptions: ["Pump bottle (250ml / 500ml)", "Cylindrical bottle with disc-top cap", "Recycled amber bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/hair Shampoo.png",
    gallery: ["/images/products/hair-care/hair Shampoo.png", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Shampoo Manufacturer | Sulfate-Free & Anti-Dandruff | RAWMIN",
    seoDescription: "Contract manufacturing of private label shampoos. Sulfate-free, clarifying, and hair growth formulations in Faridabad, India.",
    relatedProductIds: ["conditioners", "hair-masks", "hair-serums", "scalp-care-formulations"]
  },
{
    id: "conditioners",
    slug: "conditioners",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Conditioners",
    shortDescription: "Deeply moisturizing, detangling, and cuticle-smoothing conditioners that add shine without weighing hair down.",
    detailedDescription: "Formulated with cationic conditioning agents, biomimetic lipids, and lightweight plant esters that coat each hair cuticle, preventing frizz, reducing friction, and locking in hydration.",
    formulationPossibilities: [
      "Keratin & silk protein smoothing conditioner for frizzy hair",
      "Weightless volume conditioner for fine flat hair with Rice protein",
      "Deep moisture conditioner for curly and coily hair with Shea & Jojoba",
      "Leave-in detangling conditioning spray with UV protection"
    ],
    texturesAndFormats: ["Rich velvety cream", "Whipped light conditioner", "Leave-in conditioning spray", "Silicone-free balm"],
    keyActives: ["Hydrolyzed Silk Protein", "Hydrolyzed Keratin", "Rice Protein", "Shea Butter", "Behentrimonium Methosulfate"],
    packagingOptions: ["Squeeze tube (200ml)", "Pump dispenser bottle (300ml / 500ml)", "Flip-cap bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/Hair Conditioner.png",
    gallery: ["/images/products/hair-care/Hair Conditioner.png", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Hair Conditioner Manufacturer | Private Label Contract Formulation | RAWMIN",
    seoDescription: "Custom hair conditioner contract manufacturing. Silicone-free, deep moisturising, and bond-building conditioners for haircare brands.",
    relatedProductIds: ["shampoos", "hair-masks", "hair-serums", "hair-protection-products"]
  },
{
    id: "hair-masks",
    slug: "hair-masks",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Hair Masks",
    shortDescription: "Intensive weekly bond-building, moisture-drenching, and cuticle-repair hair butter and mask treatments.",
    detailedDescription: "A powerhouse treatment for bleached, heat-damaged, or chronically dry strands. Formulated with concentrated peptide bonds, cold-pressed plant butters, and ceramides that reconstruct compromised hair fibers.",
    formulationPossibilities: [
      "Molecular bond repair hair mask with Peptides and Amino Acids",
      "Deep hydration raw butter mask with Shea, Argan, and Murumuru",
      "Glossing laminating hair mask with Hyaluronic Acid and Camellia oil",
      "Scalp and strand detox mask with Kaolin clay and Rosemary extract"
    ],
    texturesAndFormats: ["Ultra-rich dense butter", "Silky melting cream mask", "Dual-phase restorative paste"],
    keyActives: ["Bond-Building Oligopeptides", "Argan Oil", "Murumuru Butter", "Ceramide NG", "Rosemary Extract"],
    packagingOptions: ["Wide-mouth cosmetic tub (200g / 250g) with protective inner seal", "Flexible squeeze pouch", "Airless tub"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/Hair Mask Cream Cascade.png",
    gallery: ["/images/products/hair-care/Hair Mask Cream Cascade.png", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Hair Mask Manufacturer | Bond Building & Deep Conditioning | RAWMIN",
    seoDescription: "Private label hair mask manufacturing. Formulate professional salon bond-repair treatments, butter masks, and scalp detox masks.",
    relatedProductIds: ["conditioners", "hair-serums", "hair-oils", "shampoos"]
  },
{
    id: "hair-serums",
    slug: "hair-serums",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Hair Serums",
    shortDescription: "Featherlight leave-in hair serums for frizz control, high-gloss shine, split-end sealing, and hair density stimulation.",
    detailedDescription: "High-performance hair serums engineered for instant cosmetic shine or cellular follicular density. Our portfolio includes celebrated hair density serums (such as Anaquil featuring Redensyl, Capixyl, and Procapil) and weightless shine elixirs.",
    formulationPossibilities: [
      "Advanced hair density serum with Redensyl, Capixyl, and Procapil (Anaquil benchmark)",
      "Instant anti-frizz gloss serum with Plant Squalane and Argan oil",
      "Split-end bonding serum with Amino acids and Keratin",
      "Overnight scalp density and strand renewal serum with Peptides"
    ],
    texturesAndFormats: ["Crystal-clear lightweight fluid", "Dry touch hair oil serum", "Water-based scalp density serum"],
    keyActives: ["Redensyl", "Capixyl", "Procapil", "Plant Squalane", "Argan Oil", "Vitamin E"],
    packagingOptions: ["Slender glass pump bottle (50ml / 60ml)", "Precision dropper bottle", "Airless serum pump"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/hair-serums.jpg",
    gallery: ["/images/products/hair-care/hair-serums.jpg", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Hair Serum Manufacturer | Redensyl & Capixyl Formulations | RAWMIN",
    seoDescription: "Contract manufacturing of hair growth and shine serums. Formulate with Redensyl, Capixyl, Procapil, and botanical extracts.",
    relatedProductIds: ["scalp-care-formulations", "hair-oils", "hair-protection-products", "conditioners"]
  },
{
    id: "hair-oils",
    slug: "hair-oils",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Hair Oils",
    shortDescription: "Pre-wash nourishing oils, hot oil treatments, and lightweight finishing oils infused with cold-pressed botanicals.",
    detailedDescription: "Rooted in authentic Ayurvedic and modern botanical lipid science. Formulated with cold-pressed Rosemary, Bhringraj, Amla, Golden Jojoba, and Castor oils for deep scalp stimulation and strand resilience.",
    formulationPossibilities: [
      "Rosemary & Bhringraj stimulating hair growth oil",
      "Golden Jojoba & Sweet Almond weightless finishing oil",
      "Intensive Ayurvedic 10-herb hot oil treatment",
      "Strengthening Castor & Rosemary root application oil"
    ],
    texturesAndFormats: ["Rich cold-pressed oil blend", "Lightweight dry oil", "Herbal infused multi-botanical oil"],
    keyActives: ["Rosemary Leaf Oil", "Bhringraj Extract", "Amla (Indian Gooseberry)", "Golden Jojoba Oil", "Castor Oil"],
    packagingOptions: ["Amber glass bottle with dropper (50ml / 100ml)", "Flip-cap bottle", "Precision root applicator bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/Hair Oil.png",
    gallery: ["/images/products/hair-care/Hair Oil.png", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Hair Oil Manufacturer | Rosemary & Ayurvedic Hair Oils | RAWMIN",
    seoDescription: "Private label hair oil contract manufacturing in India. Formulate Rosemary, Bhringraj, and botanical hair growth oils with RAWMIN.",
    relatedProductIds: ["hair-serums", "scalp-care-formulations", "hair-masks", "shampoos"]
  },
{
    id: "scalp-care-formulations",
    slug: "scalp-care-formulations",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Scalp Care Formulations",
    shortDescription: "Scalp exfoliating scrubs, soothing tonics, microbiome balancers, and targeted clarifying treatments.",
    detailedDescription: "Treating the scalp as an extension of facial skin. Our scalp formulations clear product buildup, calm itchiness, regulate sebum, and optimize the follicular environment for healthy hair growth.",
    formulationPossibilities: [
      "Scalp detox scrub with Sea Salt, Tea Tree, and Salicylic Acid",
      "Soothing peptide scalp tonic with Centella and Niacinamide",
      "Anti-itch cooling scalp serum with Peppermint and Aloe Vera",
      "Prebiotic scalp microbiome balancing mist"
    ],
    texturesAndFormats: ["Granular exfoliating scalp paste", "Water-light leave-on tonic", "Targeted cooling scalp gel"],
    keyActives: ["Salicylic Acid", "Tea Tree Oil", "Peppermint Oil", "Prebiotics", "Niacinamide", "Centella Asiatica"],
    packagingOptions: ["Bottle with precision nozzle applicator (100ml)", "Exfoliating scrub tub with scoop", "Dropper bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/Scalp Care.png",
    gallery: ["/images/products/hair-care/Scalp Care.png", "/images/products/textures/botanical-scrub-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Scalp Care Formulation Manufacturer | Scalp Scrubs & Tonics | RAWMIN",
    seoDescription: "Bespoke contract manufacturing of scalp scrubs, scalp serums, and exfoliating tonics. Cleanroom manufacturing in Faridabad, India.",
    relatedProductIds: ["hair-serums", "hair-oils", "shampoos", "hair-protection-products"]
  },
{
    id: "hair-protection-products",
    slug: "hair-protection-products",
    categorySlug: "hair-care",
    categoryName: "Hair Care & Hair Protection",
    name: "Hair Protection Products",
    shortDescription: "Thermal heat protectants up to 450°F / 230°C, UV defense hair shields, and anti-humidity frizz barriers.",
    detailedDescription: "Formulated with heat-activated polymers and UV absorbents that shield delicate hair keratin from curling irons, blow dryers, and solar radiation, preventing protein breakdown and moisture loss.",
    formulationPossibilities: [
      "Thermal protection mist (protects up to 450°F / 230°C) with Silk Amino Acids",
      "Solar UV hair shield mist with antioxidant Vitamin E and Green Tea",
      "Weather-proof anti-humidity frizz barrier spray",
      "Pre-swim chlorine & salt water protective barrier oil"
    ],
    texturesAndFormats: ["Ultra-fine aerosol or trigger mist", "Weightless leave-in cream fluid", "Bi-phase protection spray"],
    keyActives: ["Hydrolyzed Silk Protein", "Thermal Defense Polymers", "UV Sunscreens for Hair", "Vitamin E", "Panthenol"],
    packagingOptions: ["Trigger spray bottle (150ml / 200ml)", "Fine-mist spray bottle", "Aluminum bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/hair-care/Hair Protection.png",
    gallery: ["/images/products/hair-care/Hair Protection.png", "/images/products/textures/hair-argan-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Heat Protectant Hair Spray Manufacturer | Private Label | RAWMIN",
    seoDescription: "Contract manufacturing of heat protectant sprays, UV hair shields, and anti-humidity formulations for haircare brands.",
    relatedProductIds: ["hair-serums", "conditioners", "hair-oils", "hair-masks"]
  },
{
    id: "body-cleansers",
    slug: "body-cleansers",
    categorySlug: "body-care",
    categoryName: "Body Care",
    name: "Body Cleansers",
    shortDescription: "Hydrating, non-stripping daily body cleansers that purify skin while maintaining the epidermal moisture barrier.",
    detailedDescription: "Formulated with plant-derived glucosides and gentle surfactants that effectively remove dirt and sweat while replenishing skin lipids. Gentle enough for sensitive and reactive skin.",
    formulationPossibilities: [
      "Nourishing cream body cleanser with Oat extract and Shea butter",
      "AHA exfoliating body cleanser with 2% Lactic Acid for strawberry skin",
      "Antibacterial botanical body cleanser with Tea Tree and Neem",
      "Hydrating oil-to-milk body cleanser with Squalane"
    ],
    texturesAndFormats: ["Creamy emulsion cleanser", "Oil-to-milk cleanser", "Gentle foaming gel"],
    keyActives: ["Colloidal Oat Extract", "Lactic Acid", "Tea Tree Extract", "Plant Squalane", "Glycerin"],
    packagingOptions: ["Pump bottle (250ml / 400ml / 500ml)", "Flip-top bottle", "Recycled amber bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/body-care/body cleansers.png",
    gallery: ["/images/products/body-care/body cleansers.png", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Body Cleanser Manufacturer | Custom Formulation | RAWMIN",
    seoDescription: "Contract manufacturing of daily body cleansers, cream washes, and AHA body washes. Bespoke private label formulations by RAWMIN Skinology.",
    relatedProductIds: ["body-lotions", "body-scrubs", "body-oils", "body-butters"]
  },
{
    id: "body-oils",
    slug: "body-oils",
    categorySlug: "body-care",
    categoryName: "Body Care",
    name: "Body Oils",
    shortDescription: "Fast-absorbing dry body oils, post-shower hydration oils, and glowing shimmer body elixirs.",
    detailedDescription: "Formulated with ultra-light, dry-touch botanical esters and cold-pressed plant oils that lock in shower moisture within seconds, leaving a luminous, non-sticky velvet sheen.",
    formulationPossibilities: [
      "Golden shimmer dry body oil with fine mineral pearl mica",
      "Restorative post-shower body oil with Jojoba, Rosehip, and Vitamin E",
      "Firming body oil with Coffee extract and Sweet Almond oil",
      "Calming lavender & chamomile nighttime body sleep oil"
    ],
    texturesAndFormats: ["Fast-absorbing dry oil", "Shimmer pearl oil", "Rich herbal massage oil"],
    keyActives: ["Golden Jojoba Oil", "Rosehip Seed Oil", "Sweet Almond Oil", "Vitamin E", "Mineral Bronze/Gold Mica"],
    packagingOptions: ["Clear or frosted glass bottle (100ml)", "Pump dispenser bottle", "Spray mister bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/body-care/Body Oil (1).png",
    gallery: ["/images/products/body-care/Body Oil (1).png", "/images/products/textures/dropper-pipette-macro.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Body Oil Manufacturer | Shimmer Oils & Dry Body Oils OEM | RAWMIN",
    seoDescription: "Custom body oil manufacturing in India. Formulate illuminating shimmer body oils, post-shower oils, and dry touch body oils.",
    relatedProductIds: ["body-lotions", "body-butters", "body-cleansers",]
  },
{
    id: "body-lotions",
    slug: "body-lotions",
    categorySlug: "body-care",
    categoryName: "Body Care",
    name: "Body Lotions",
    shortDescription: "Featherlight daily hydration lotions that absorb instantly, providing 24-hour moisture and skin barrier support.",
    detailedDescription: "High-shear emulsion technology produces silken lotions that glide effortlessly over large body areas without drag, white streaks, or greasy transfer onto clothing.",
    formulationPossibilities: [
      "Daily ceramide barrier lotion with Hyaluronic Acid and Glycerin",
      "Brightening body lotion with 5% Niacinamide and Alpha Arbutin",
      "Exfoliating smoothing lotion with 10% AHA/Lactic Acid for Keratosis Pilaris",
      "Soothing Aloe & Cucumber cooling after-sun body lotion"
    ],
    texturesAndFormats: ["Silky fluid lotion", "Lightweight hydration milk", "Gel-lotion emulsion"],
    keyActives: ["Ceramides Complex", "Niacinamide (5%)", "Lactic Acid (10%)", "Hyaluronic Acid", "Shea Butter"],
    packagingOptions: ["Pump dispenser bottle (200ml / 400ml)", "Flip-top tube", "Soft-touch squeeze bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/body-care/Vanilla Body Lotion Still Life.png",
    gallery: ["/images/products/body-care/Vanilla Body Lotion Still Life.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Body Lotion Manufacturer | Private Label Contract Formulation | RAWMIN",
    seoDescription: "Private label body lotion manufacturing. Formulate daily moisturising lotions, AHA smoothing lotions, and brightening body lotions.",
    relatedProductIds: [ "body-butters", "body-cleansers", "body-oils"]
  },
{
    id: "body-scrubs",
    slug: "body-scrubs",
    categorySlug: "body-care",
    categoryName: "Body Care",
    name: "Body Scrubs",
    shortDescription: "Invigorating sugar, sea salt, coffee, and botanical seed polishes for silky, radiant body exfoliation.",
    detailedDescription: "Engineered to slough away dead cellular debris while imparting deep hydration. Formulated in emulsified bases that rinse off cleanly without leaving greasy residue on shower floors.",
    formulationPossibilities: [
      "Brown sugar & vanilla nourishing body polish with Coconut oil",
      "Mineral sea salt & eucalyptus detox body scrub with Sweet Almond oil",
      "Arabica coffee firming scrub with Cocoa butter and Vitamin E",
      "Brightening citrus body scrub with crushed walnut shells"
    ],
    texturesAndFormats: ["Emulsified sugar scrub", "Mineral salt polish", "Whipped foaming scrub paste"],
    keyActives: ["Cane Sugar Crystals", "Himalayan Pink Salt", "Ground Arabica Coffee", "Coconut Oil", "Vitamin E"],
    packagingOptions: ["Wide-mouth PET or cosmetic jar (200g / 300g)", "Squeeze tube with flip cap"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/body-care/Body Scrub.png",
    gallery: ["/images/products/body-care/Body Scrub.png", "/images/products/textures/botanical-scrub-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Body Scrub Manufacturer | Sugar & Coffee Body Polish OEM | RAWMIN",
    seoDescription: "Contract manufacturing of body scrubs and polishes. Emulsified sugar scrubs, coffee scrubs, and mineral sea salt scrubs.",
    relatedProductIds: ["body-cleansers", "body-butters", "body-lotions", "body-oils"]
  },
{
    id: "body-butters",
    slug: "body-butters",
    categorySlug: "body-care",
    categoryName: "Body Care",
    name: "Body Butters",
    shortDescription: "Ultra-rich, whipped body butters packed with raw Shea, Cocoa, and Mango butters for deeply parched skin.",
    detailedDescription: "Decadent whipped body butters with a cloud-like texture that melts on contact with body heat. Offers intensive moisture replenishment for elbows, knees, heels, and winter-chapped skin.",
    formulationPossibilities: [
      "Whipped triple butter (Shea, Mango, Cocoa) cloud cream",
      "Deep moisture body butter with Murumuru and Cupuaçu",
      "Illuminating bronze body butter with gold mica and Jojoba",
      "Calming unscented hypoallergenic body butter for eczema-prone skin"
    ],
    texturesAndFormats: ["Fluffy whipped butter", "Dense melting balm-butter", "Soufflé body cream"],
    keyActives: ["Raw Shea Butter", "Cocoa Butter", "Mango Seed Butter", "Murumuru Butter", "Vitamin E"],
    packagingOptions: ["Wide-mouth cosmetic tub (200g / 250g) with aluminium or plastic lid"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/body-care/Body Butters.png",
    gallery: ["/images/products/body-care/Body Butters.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Body Butter Manufacturer | Whipped Shea Butter Formulations | RAWMIN",
    seoDescription: "Private label body butter manufacturing. Formulate whipped shea butters, cocoa body creams, and luxury moisture balms.",
    relatedProductIds: [ "body-lotions", "body-oils", "body-scrubs"]
  },
{
    id: "lip-balms",
    slug: "lip-balms",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Balms",
    shortDescription: "Nourishing, protective stick and pot lip balms formulated with natural plant waxes and cold-pressed oils.",
    detailedDescription: "High-melting point stick balms and buttery pots that guard lips against windburn and dehydration. Formulated with Candelilla, Carnauba, and Beeswax alongside soothing oils and optional broad-spectrum SPF 15 / 30.",
    formulationPossibilities: [
      "100% Vegan plant wax lip balm stick with Jojoba and Shea butter",
      "Mineral SPF 30 sunscreen lip balm stick with Zinc Oxide",
      "Tinted berry hydrating lip balm with natural plant pigments",
      "Cooling medicated lip balm with Menthol and Camphor"
    ],
    texturesAndFormats: ["Smooth glide stick balm", "Melting pot balm", "Creamy tube balm"],
    keyActives: ["Candelilla Wax", "Shea Butter", "Zinc Oxide (SPF 30)", "Jojoba Oil", "Vitamin E"],
    packagingOptions: ["Twist-up balm tube (4.5g / 5g)", "Aluminium pocket tin (15g)", "Cosmetic pot with screw lid"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/Lip Balm.png",
    gallery: ["/images/products/lip-care/Lip Balm.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Lip Balm Manufacturer | Private Label Stick & Pot Balms | RAWMIN",
    seoDescription: "Custom formulation and contract manufacturing of lip balms. Vegan plant wax balms, SPF lip balms, and tinted lip balms in India.",
    relatedProductIds: ["lip-oils", "lip-butters", "lip-masks", "lip-care-treatments"]
  },
{
    id: "lip-oils",
    slug: "lip-oils",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Oils",
    shortDescription: "High-shine, non-sticky luxury lip oils that nourish lips with plant squalane and sheer botanical tint.",
    detailedDescription: "Combining the mirror shine of a gloss with the deep lipid nourishment of a treatment oil. Formulated with plush emollients and antioxidant seed oils that plump fine lines without stickiness.",
    formulationPossibilities: [
      "Ultra-glossy sheer tinted lip oil with Raspberry and Jojoba seed oils",
      "pH-adjusting color bloom lip oil that turns custom rose-pink on contact",
      "Peptide-plumping lip glaze oil with Hyaluronic Acid micro-spheres",
      "Restorative clear honey & peptide bedtime lip oil"
    ],
    texturesAndFormats: ["Mirror-shine cushion oil", "pH-reacting blooming oil", "Plush glossy glaze"],
    keyActives: ["Plant Squalane", "Raspberry Seed Oil", "Hyaluronic Acid Filling Spheres", "Jojoba Oil", "Vitamin E"],
    packagingOptions: ["Thick-walled glass or acrylic vial with jumbo doe-foot applicator (6ml / 8ml)"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/lip oil.png",
    gallery: ["/images/products/lip-care/lip oil.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Lip Oil Manufacturer | Glossy Non-Sticky OEM | RAWMIN",
    seoDescription: "Contract manufacturing of luxury lip oils. Custom tinted, plumping, and pH-reacting lip gloss oils with jumbo doe-foot applicators.",
    relatedProductIds: ["lip-balms", "lip-masks", "lip-care-treatments", "lip-butters"]
  },
{
    id: "lip-scrubs",
    slug: "lip-scrubs",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Scrubs",
    shortDescription: "Sweet sugar crystal exfoliants that gently polish away dry, flaky skin, leaving lips soft and plump.",
    detailedDescription: "Food-grade, edible-safe lip polish formulations combining ultrafine sucrose crystals with whipped plant oils. Leaves lips primed for smooth lipstick or balm application.",
    formulationPossibilities: [
      "Vanilla sugar crystal lip scrub with Sweet Almond oil and Honey",
      "Berry burst lip scrub with Strawberry seed oil and Vitamin E",
      "Coffee & brown sugar lip polish for dull lips",
      "Minty fresh conditioning lip scrub with Peppermint oil"
    ],
    texturesAndFormats: ["Dense crystalline sugar paste", "Whipped buttery polish", "Solid stick scrub"],
    keyActives: ["Sucrose (Ultra-fine Cane Sugar)", "Sweet Almond Oil", "Shea Butter", "Honey Extract", "Vitamin E"],
    packagingOptions: ["Mini cosmetic pot (15g / 20g) with lid", "Twist-up scrub stick"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/Lip Scrub.png",
    gallery: ["/images/products/lip-care/Lip Scrub.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Lip Scrub Manufacturer | Sugar Lip Polish Contract Formulation | RAWMIN",
    seoDescription: "Private label lip scrub manufacturing in India. Gentle sugar crystal lip scrubs and conditioning lip polishes for beauty brands.",
    relatedProductIds: ["lip-masks", "lip-balms", "lip-butters", "lip-oils"]
  },
{
    id: "lip-masks",
    slug: "lip-masks",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Masks",
    shortDescription: "Overnight leave-on lip sleeping masks and daytime hydro-rescue jelly masks for intensive moisture repair.",
    detailedDescription: "Formulated with moisture-trapping film formers, Berry Fruit complexes, and hyaluronic acid spheres that form a protective barrier over lips overnight, waking to pillowy-soft, hydrated lips.",
    formulationPossibilities: [
      "Overnight berry lip sleeping mask with Vitamin C and Shea butter",
      "Ceramide barrier repair lip rescue mask with Cica extract",
      "Collagen plumping hydro-gel lip mask with Peptides",
      "Soothing lavender and chamomile bedtime lip treatment mask"
    ],
    texturesAndFormats: ["Melting thick jelly-balm", "Rich velvety overnight ointment", "Glossy leave-on mask"],
    keyActives: ["Berry Fruit Complex", "Hyaluronic Acid Filling Spheres", "Ceramide NP", "Shea Butter", "Vitamin C"],
    packagingOptions: ["Heavy acrylic or glass pot (20g) with applicator wand", "Squeeze tube with angled silicone tip"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/Lip Mask.png",
    gallery: ["/images/products/lip-care/Lip Mask.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Lip Mask Manufacturer | Overnight Sleeping Mask Formulations | RAWMIN",
    seoDescription: "Contract manufacturing of overnight lip sleeping masks and hydrating lip treatments. Custom private label formulations by RAWMIN.",
    relatedProductIds: ["lip-care-treatments", "lip-oils", "lip-scrubs", "lip-balms"]
  },
{
    id: "lip-butters",
    slug: "lip-butters",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Butters",
    shortDescription: "Ultra-cushiony melting lip butters that provide rich emollient comfort and long-lasting barrier seal.",
    detailedDescription: "Richer and more cushiony than standard balms, our lip butters melt instantly on lip contact, delivering deep moisture without heavy waxiness. Available in sheer tints and delicious natural flavors.",
    formulationPossibilities: [
      "Whipped Mango & Murumuru cushion lip butter",
      "Tinted rose lip butter with natural floral waxes",
      "Deep cocoa & vanilla intensive hydration lip butter",
      "Raw Coconut & Shea soothing moisture butter"
    ],
    texturesAndFormats: ["Melting whipped butter", "Glossy cushion butter", "Rich balm-in-pot"],
    keyActives: ["Murumuru Butter", "Mango Seed Butter", "Cocoa Butter", "Plant Squalane", "Vitamin E"],
    packagingOptions: ["Pocket tin (15g)", "Mini frosted jar", "Squeeze tube with slanted applicator (15ml)"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/Lip Butter.png",
    gallery: ["/images/products/lip-care/Lip Butter.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Lip Butter Manufacturer | Private Label Custom Formulation | RAWMIN",
    seoDescription: "Private label lip butter manufacturing. Formulate whipped murumuru and shea lip butters for cosmetic and personal care brands.",
    relatedProductIds: ["lip-balms", "lip-masks", "lip-oils", "lip-care-treatments"]
  },
{
    id: "lip-care-treatments",
    slug: "lip-care-treatments",
    categorySlug: "lip-care",
    categoryName: "Lip Care",
    name: "Lip Care Treatments",
    shortDescription: "High-potency peptide lip plumpers, line-smoothing treatments, and SPF barrier repair therapies.",
    detailedDescription: "Clinical-grade dermaceutical lip treatments formulated with Palmitoyl Tripeptide-38, Volulip complexes, and ceramides to visibly enhance lip volume, smooth vertical lines, and restore lip contour.",
    formulationPossibilities: [
      "Peptide volume & contour treatment with Palmitoyl Tripeptide-38",
      "Lip barrier repair cream with 5 Ceramides and Cholesterol",
      "Hydrating plumping treatment with Hyaluronic Acid micro-spheres",
      "Soothing post-filler recovery balm with Arnica and Centella"
    ],
    texturesAndFormats: ["Targeted treatment cream-gel", "Plumping gloss treatment", "Restorative barrier balm"],
    keyActives: ["Palmitoyl Tripeptide-38", "Hyaluronic Acid Filling Spheres", "Ceramide Complex", "Centella Asiatica", "Arnica Extract"],
    packagingOptions: ["Squeeze tube with ceramic cooling applicator (10ml / 15ml)", "Airless click-pen dispenser"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/lip-care/Lip care.png",
    gallery: ["/images/products/lip-care/Lip care.png", "/images/products/textures/gloss-lip-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Lip Treatment Manufacturer | Peptide Plumping & Barrier Repair | RAWMIN",
    seoDescription: "Contract manufacturing of peptide lip plumping treatments, contour restorers, and post-procedure lip balms in India.",
    relatedProductIds: ["lip-masks", "lip-oils", "lip-butters", "lip-balms"]
  },
{
    id: "body-washes",
    slug: "body-washes",
    categorySlug: "bath-shower",
    categoryName: "Bath & Shower",
    name: "Body Washes",
    shortDescription: "Luxurious, rich-foaming body washes formulated with sulfate-free plant surfactants and hydrating glycerin.",
    detailedDescription: "Engineered to deliver a rich, dense micro-foam that rinses off completely clean while leaving skin moisturized. Formulated with balanced pH 5.5 to maintain the acid mantle of the skin during daily washing.",
    formulationPossibilities: [
      "Sulfate-free hydrating body wash with Shea Butter and Vanilla",
      "Brightening vitamin body wash with Niacinamide and Citrus extracts",
      "Calming bedtime body wash with Lavender and Chamomile essential oils",
      "Clarifying body wash with Salicylic Acid and Tea Tree for back-acne"
    ],
    texturesAndFormats: ["Pearlescent cream wash", "Clear gel wash", "Silken body wash fluid"],
    keyActives: ["Sodium Cocoyl Isethionate", "Glycerin", "Shea Butter", "Niacinamide", "Lavender Essential Oil"],
    packagingOptions: ["Pump bottle (250ml / 500ml)", "Squeeze bottle with disc cap", "Recycled amber bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/bath-shower/Body Wash.png",
    gallery: ["/images/products/bath-shower/Body Wash.png", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Body Wash Manufacturer | Sulfate-Free Private Label Formulations | RAWMIN",
    seoDescription: "Contract manufacturing of private label body washes. Sulfate-free, clarifying, and deep moisture body wash formulations in Faridabad, India.",
    relatedProductIds: ["shower-gels", "bath-products", "bath-scrubs",]
  },
{
    id: "shower-gels",
    slug: "shower-gels",
    categorySlug: "bath-shower",
    categoryName: "Bath & Shower",
    name: "Shower Gels",
    shortDescription: "Aromatic, crystal-clear shower gels that awaken the senses with invigorating botanicals and gentle lather.",
    detailedDescription: "Formulated for an invigorating morning shower experience. Features sparkling clarity, suspended botanical beads, and long-lasting fresh aromatics that linger subtly on skin.",
    formulationPossibilities: [
      "Invigorating citrus & bergamot shower gel with Vitamin C beads",
      "Cooling ocean breeze shower gel with Marine Algae and Menthol",
      "Warm amber & sandalwood luxury apothecary shower gel",
      "Soothing cucumber & green tea antioxidant shower gel"
    ],
    texturesAndFormats: ["Crystal-clear aromatic gel", "Bead-suspended gel", "Cooling fresh gel"],
    keyActives: ["Marine Algae Extract", "Green Tea Extract", "Vitamin C Spheres", "Aloe Vera Juice", "Glycerin"],
    packagingOptions: ["Clear cylindrical bottle (250ml / 300ml)", "Flip-top bottle", "Pump bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/bath-shower/Aqua Shower Gel Glow.png",
    gallery: ["/images/products/bath-shower/Aqua Shower Gel Glow.png", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Shower Gel Manufacturer | Private Label Contract Formulation | RAWMIN",
    seoDescription: "Private label shower gel manufacturing. Formulate crystal clear aromatic shower gels, cooling gels, and apothecary cleansers.",
    relatedProductIds: ["body-washes", "bath-scrubs", "bath-products",]
  },
{
    id: "bath-products",
    slug: "bath-products",
    categorySlug: "bath-shower",
    categoryName: "Bath & Shower",
    name: "Bath Products",
    shortDescription: "Spa-grade bath soaks, Himalayan crystal salts, relaxing bath teas, and effervescent bath formulations.",
    detailedDescription: "Elevate bathing into a therapeutic mineral ritual. Crafted with pure Epsom and Himalayan pink salt crystals, dried botanical petals, and aromatherapeutic essential oils that ease muscle tension and soothe stressed skin.",
    formulationPossibilities: [
      "Muscle recovery mineral soak with Magnesium Epsom Salt & Eucalyptus",
      "Sleep sanctuary Himalayan crystal bath soak with Lavender & Frankincense",
      "Detoxifying mineral bath soak with Dead Sea salts and Activated Charcoal",
      "Nourishing colloidal oat & coconut milk powder bath soak"
    ],
    texturesAndFormats: ["Coarse crystal salts", "Silky milk powder soak", "Effervescent mineral bath powder"],
    keyActives: ["Epsom Salt (Magnesium Sulfate)", "Himalayan Pink Salt", "Dead Sea Salts", "Colloidal Oatmeal", "Eucalyptus Oil"],
    packagingOptions: ["Wide-mouth glass or PET jar with wooden scoop (300g / 500g)", "Resealable stand-up kraft pouch"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/bath-shower/Bath Product.png",
    gallery: ["/images/products/bath-shower/Bath Product.png", "/images/products/textures/foam-cleanser-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Bath Salt & Soak Manufacturer | Private Label Mineral Salts | RAWMIN",
    seoDescription: "Custom formulation and contract manufacturing of bath salts, Epsom muscle recovery soaks, and mineral bath products in India.",
    relatedProductIds: ["bath-scrubs", "body-washes", "shower-gels"]
  },
{
    id: "bath-scrubs",
    slug: "bath-scrubs",
    categorySlug: "bath-shower",
    categoryName: "Bath & Shower",
    name: "Bath Scrubs",
    shortDescription: "Foaming bath and shower exfoliators that cleanse, polish, and moisturize in a single luxurious step.",
    detailedDescription: "Hybrid formulations uniting rich foaming cleansers with fine mineral polishing grains. They buff away roughness on elbows, knees, and feet while generating a rich, creamy lather in the bath.",
    formulationPossibilities: [
      "Whipped foaming bath scrub with Sea Salt and Coconut oil",
      "Detoxifying charcoal shower polish with Bamboo powder",
      "Smoothing brown sugar bath scrub with Shea butter",
      "Invigorating citrus foaming shower scrub with Pumice grains"
    ],
    texturesAndFormats: ["Whipped foaming scrub", "Granular bath polish paste", "Creamy shower scrub"],
    keyActives: ["Sea Salt Grains", "Bamboo Powder", "Brown Sugar", "Shea Butter", "Coconut Oil"],
    packagingOptions: ["Wide-mouth cosmetic tub (250g / 300g)", "Flexible squeeze pouch with flip cap"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/bath-shower/Bath Scrub Product.png",
    gallery: ["/images/products/bath-shower/Bath Scrub Product.png", "/images/products/textures/botanical-scrub-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Bath Scrub Manufacturer | Foaming Shower Scrubs Contract OEM | RAWMIN",
    seoDescription: "Private label bath scrub manufacturing. Formulate foaming bath scrubs, whipped shower polishes, and mineral exfoliants with RAWMIN.",
    relatedProductIds: ["bath-products", "body-washes", "shower-gels",]
  },
{
    id: "mens-face-wash",
    slug: "mens-face-wash",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Men's Face Wash",
    shortDescription: "Deep-cleansing charcoal, clay, and cooling menthol face washes engineered for male skin biology.",
    detailedDescription: "Designed for thicker, oilier male skin subjected to daily shaving and pollution. Formulated to dissolve stubborn sebum, unblock pores, and prep stubble for a smooth, irritation-free shave.",
    formulationPossibilities: [
      "Activated Charcoal deep pore detox face wash with Menthol",
      "Oil-control face wash with 2% Salicylic Acid and Tea Tree oil",
      "Hydrating beard & face gentle foam wash with Aloe Vera",
      "Energizing volcanic ash scrub-wash with Caffeine"
    ],
    texturesAndFormats: ["Charcoal black gel", "Cooling menthol foaming wash", "Micro-exfoliating clay wash"],
    keyActives: ["Activated Charcoal", "Salicylic Acid", "Caffeine", "Tea Tree Oil", "Menthol"],
    packagingOptions: ["Matte black squeeze tube (100ml / 150ml)", "Foamer pump bottle", "Flip-top bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Men’s Face Wash.png",
    gallery: ["/images/products/mens-grooming/Men’s Face Wash.png", "/images/products/textures/shave-lather-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Men's Face Wash Manufacturer | Private Label Charcoal & Oil-Control | RAWMIN",
    seoDescription: "Contract manufacturing of men's face washes. Charcoal detox, salicylic oil control, and energizing caffeine formulations in India.",
    relatedProductIds: ["mens-face-creams", "beard-oils", "shaving-creams", "after-shave-products"]
  },
{
    id: "mens-face-creams",
    slug: "mens-face-creams",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Men's Face Creams",
    shortDescription: "Fast-absorbing, matte-finish daily creams and anti-fatigue moisturizers designed specifically for men.",
    detailedDescription: "Formulated to conquer shine while locking in hydration. These lightweight creams absorb in seconds without shine, greasiness, or residue, delivering anti-aging peptides and antioxidants.",
    formulationPossibilities: [
      "Anti-fatigue energizing face cream with Caffeine and Niacinamide",
      "Matte-finish oil-control moisturizer with Silica and Zinc PCA",
      "Daily defense moisturizer with broad-spectrum SPF 30",
      "Anti-aging night recovery cream with Peptides and Bakuchiol"
    ],
    texturesAndFormats: ["Matte-finish gel-cream", "Fast-absorbing lightweight lotion", "Anti-fatigue fluid"],
    keyActives: ["Caffeine", "Niacinamide", "Zinc PCA", "Bakuchiol", "Centella Asiatica"],
    packagingOptions: ["Matte gunmetal or black jar (50ml)", "Airless pump dispenser", "Squeeze tube"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Men’s Face Cream.png",
    gallery: ["/images/products/mens-grooming/Men’s Face Cream.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Men's Face Cream Manufacturer | Matte Moisturizer OEM | RAWMIN",
    seoDescription: "Private label men's face cream contract manufacturing. Formulate anti-fatigue creams, matte moisturizers, and SPF lotions for men.",
    relatedProductIds: ["mens-face-wash", "mens-grooming-serums", "after-shave-products", "beard-oils"]
  },
{
    id: "beard-oils",
    slug: "beard-oils",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Beard Oils",
    shortDescription: "Non-greasy conditioning beard oils that soften coarse facial hair and moisturize the underlying skin.",
    detailedDescription: "Formulated with lightweight, non-comedogenic cold-pressed oils that tame unruly whiskers, eliminate beard itch (beardruff), and impart a healthy, subtle sheen with masculine cedarwood and sandalwood notes.",
    formulationPossibilities: [
      "Cedarwood & Tobacco nourishing beard oil with Argan and Jojoba",
      "Beard growth stimulating oil with Rosemary and Castor oil",
      "Unscented hypoallergenic sensitive-skin beard oil",
      "Fast-absorbing dry beard oil with Plant Squalane"
    ],
    texturesAndFormats: ["Fast-absorbing conditioning oil", "Lightweight dry beard elixir"],
    keyActives: ["Argan Oil", "Golden Jojoba Oil", "Rosemary Leaf Oil", "Cedarwood Oil", "Plant Squalane", "Vitamin E"],
    packagingOptions: ["Amber glass bottle with dropper (30ml / 50ml)", "Glass bottle with reducer", "Matte black dropper bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Beard Oil.png",
    gallery: ["/images/products/mens-grooming/Beard Oil.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Beard Oil Manufacturer | Argan & Cedarwood OEM | RAWMIN",
    seoDescription: "Contract manufacturing of private label beard oils in India. Custom softening, growth stimulating, and conditioning formulations for men's brands.",
    relatedProductIds: ["beard-balms", "mens-face-wash", "shaving-creams", "mens-face-creams"]
  },
{
    id: "beard-balms",
    slug: "beard-balms",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Beard Balms",
    shortDescription: "Sculpting, conditioning styling balms that shape beards, tame flyaways, and provide deep all-day moisture.",
    detailedDescription: "A balanced fusion of beeswax, shea butter, and conditioning oils. Provides light-to-medium hold to shape and groom the beard while sealing in moisture and protecting against environmental drying.",
    formulationPossibilities: [
      "Medium hold styling beard balm with Beeswax and Shea Butter",
      "Vegan beard styling balm with Candelilla wax and Mango butter",
      "Citrus & Pine conditioning butter balm for thick beards",
      "Deep moisture overnight beard conditioning butter"
    ],
    texturesAndFormats: ["Firm melting balm", "Whipped beard butter", "Soft styling pomade"],
    keyActives: ["Beeswax / Candelilla Wax", "Shea Butter", "Mango Butter", "Jojoba Oil", "Vitamin E"],
    packagingOptions: ["Matte black aluminium screw tin (50g / 60g / 100g)"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Beard Balm.png",
    gallery: ["/images/products/mens-grooming/Beard Balm.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Beard Balm Manufacturer | Styling & Conditioning Balms | RAWMIN",
    seoDescription: "Private label beard balm manufacturing. Formulate sculpting beard balms, conditioning butters, and vegan styling waxes for men.",
    relatedProductIds: ["beard-oils", "mens-face-wash", "mens-face-creams",]
  },
{
    id: "shaving-creams",
    slug: "shaving-creams",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Shaving Creams",
    shortDescription: "Ultra-slick, cushiony shaving creams and brushless shave gels that eliminate razor burn and razor drag.",
    detailedDescription: "Engineered to create a protective barrier between the razor blade and the epidermis. Our shaving formulations soften the hair follicle and allow effortless blade glide with zero nicks or post-shave irritation.",
    formulationPossibilities: [
      "Traditional rich lathering shaving cream with Sandalwood and Glycerin",
      "Clear brushless precision shave gel with Aloe Vera and Allantoin",
      "Sensitive skin soothing shave cream with Colloidal Oat and Chamomile",
      "Cooling menthol shave cream with Tea Tree and Witch Hazel"
    ],
    texturesAndFormats: ["Dense lathering cream", "Clear brushless precision gel", "Moisturising shave lotion"],
    keyActives: ["Glycerin", "Aloe Barbadensis Juice", "Allantoin", "Colloidal Oatmeal", "Menthol", "Bisabolol"],
    packagingOptions: ["Brushed aluminium squeeze tube (100ml / 150ml)", "Wide-mouth shaving tub", "Pump bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Shaving Cream.png",
    gallery: ["/images/products/mens-grooming/Shaving Cream.png", "/images/products/textures/shave-lather-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Shaving Cream Manufacturer | Brushless Shave Gels OEM | RAWMIN",
    seoDescription: "Contract manufacturing of private label shaving creams and clear brushless shave gels. High-glide, razor-burn defense formulations.",
    relatedProductIds: ["after-shave-products", "mens-face-wash", "mens-face-creams", "beard-oils"]
  },
{
    id: "after-shave-products",
    slug: "after-shave-products",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "After-Shave Products",
    shortDescription: "Alcohol-free soothing balms, cooling splashes, and post-shave tonics that calm redness and prevent ingrown hairs.",
    detailedDescription: "Formulated without harsh drying alcohols. These soothing post-shave treatments feature witch hazel, bisabolol, and cica that instantly extinguish razor burn, tighten pores, and sanitize micro-nicks.",
    formulationPossibilities: [
      "Alcohol-free soothing after-shave balm with Witch Hazel & Bisabolol",
      "Cooling splash tonic with Menthol, Eucalyptus, and Niacinamide",
      "Anti-ingrown hair post-shave fluid with 2% Salicylic Acid and Allantoin",
      "Hydrating gel-lotion after-shave with Aloe Vera and Centella"
    ],
    texturesAndFormats: ["Velvety soothing balm", "Cooling liquid splash", "Targeted post-shave gel fluid"],
    keyActives: ["Witch Hazel Distillate", "Bisabolol", "Centella Asiatica", "Salicylic Acid", "Allantoin", "Menthol"],
    packagingOptions: ["Glass splash bottle with flow restrictor (100ml)", "Pump dispenser bottle", "Aluminium bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/After-Shave Products.png",
    gallery: ["/images/products/mens-grooming/After-Shave Products.png", "/images/products/textures/shave-lather-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "After-Shave Manufacturer | Alcohol-Free Balms & Splashes | RAWMIN",
    seoDescription: "Private label after-shave product manufacturing. Formulate soothing alcohol-free balms, cooling splashes, and ingrown hair treatments.",
    relatedProductIds: ["shaving-creams", "mens-face-creams", "mens-face-wash", "mens-grooming-serums"]
  },
{
    id: "mens-grooming-serums",
    slug: "mens-grooming-serums",
    categorySlug: "mens-grooming",
    categoryName: "Men's Grooming",
    name: "Men's Grooming Serums",
    shortDescription: "High-potency, water-light active serums tackling dark circles, enlarged pores, acne, and premature aging in men.",
    detailedDescription: "Engineered specifically for men who want active skincare results without any feeling of heavy product on the skin. Sinks in immediately with a completely invisible matte finish.",
    formulationPossibilities: [
      "Anti-aging peptide & caffeine eye serum for tired male eyes",
      "Pore-refining 10% Niacinamide + Zinc serum for oily men's skin",
      "Brightening Vitamin C & Hyaluronic serum with fast penetration",
      "Gentle post-shave barrier repair serum with Madecassoside"
    ],
    texturesAndFormats: ["Water-break gel serum", "Cooling eye roller serum", "Fast-absorbing oil-free fluid"],
    keyActives: ["Caffeine", "Niacinamide (10%)", "Zinc PCA", "Peptides", "Madecassoside", "Hyaluronic Acid"],
    packagingOptions: ["Matte black dropper bottle (30ml)", "Airless pump vial", "Rollerball eye tube"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/mens-grooming/Men’s Grooming Serum.png",
    gallery: ["/images/products/mens-grooming/Men’s Grooming Serum.png", "/images/products/textures/rich-cream-swatch.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Men's Skincare Serum Manufacturer | Private Label Formulations | RAWMIN",
    seoDescription: "Contract manufacturing of men's active skincare serums. Niacinamide, caffeine eye serums, and peptide formulations for men.",
    relatedProductIds: ["mens-face-creams", "mens-face-wash", "after-shave-products",]
  },
{
    id: "baby-washes",
    slug: "baby-washes",
    categorySlug: "baby-care",
    categoryName: "Baby Care",
    name: "Baby Washes",
    shortDescription: "Ultra-gentle, tear-free head-to-toe baby washes formulated with mild oat extracts and organic chamomile.",
    detailedDescription: "Formulated specifically for the delicate, developing skin mantle of infants. Dermatologically tested and clinically validated tear-free surfactant system that cleanses without irritation, dryness, or stinging eyes.",
    formulationPossibilities: [
      "Tear-free head-to-toe baby wash with Colloidal Oat and Chamomile",
      "Bedtime calming baby wash with gentle Organic Lavender oil",
      "Fragrance-free hypoallergenic baby wash for eczema-prone newborn skin",
      "Milky nourishing baby wash with Sweet Almond oil and Aloe"
    ],
    texturesAndFormats: ["Ultra-mild foaming liquid", "Creamy milky baby wash", "Self-foaming pump cloud wash"],
    keyActives: ["Colloidal Oatmeal", "Organic Chamomile Extract", "Aloe Vera Gel", "Sweet Almond Oil", "Glycerin"],
    packagingOptions: ["Pump bottle (200ml / 400ml) with safety lock", "Soft squeeze bottle with flip cap"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/baby-care/Baby Wash.png",
    gallery: ["/images/products/baby-care/Baby Wash.png", "/images/products/textures/baby-oat-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Private Label Baby Wash Manufacturer | Tear-Free & Hypoallergenic | RAWMIN",
    seoDescription: "Contract manufacturing of private label baby washes. Pediatrician-tested, tear-free, and hypoallergenic formulations in Faridabad, India.",
    relatedProductIds: ["baby-shampoos", "baby-lotions", "baby-oils"]
  },
{
    id: "baby-lotions",
    slug: "baby-lotions",
    categorySlug: "baby-care",
    categoryName: "Baby Care",
    name: "Baby Lotions",
    shortDescription: "Hypoallergenic, ultra-nourishing daily baby lotions that lock in moisture and soothe delicate infant skin.",
    detailedDescription: "Designed to counteract transepidermal water loss in newborn skin. Features biocompatible ceramides, oat extracts, and nourishing plant lipids that absorb gently without leaving sticky residue.",
    formulationPossibilities: [
      "Daily moisture baby lotion with Colloidal Oat and Shea butter",
      "Bedtime lavender soothing baby massage lotion",
      "Fragrance-free barrier protection lotion for sensitive newborn skin",
      "Calming Calendula & Chamomile ultra-gentle baby fluid"
    ],
    texturesAndFormats: ["Silky gentle lotion", "Lightweight baby milk", "Calming fluid emulsion"],
    keyActives: ["Colloidal Oatmeal", "Shea Butter", "Calendula Extract", "Chamomile Extract", "Ceramide Complex"],
    packagingOptions: ["Pump bottle with safety lock (200ml / 400ml)", "Squeeze bottle with flip cap"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/baby-care/Baby Lotion.png",
    gallery: ["/images/products/baby-care/Baby Lotion.png", "/images/products/textures/baby-oat-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Baby Lotion Manufacturer | Private Label Hypoallergenic OEM | RAWMIN",
    seoDescription: "Custom baby lotion contract manufacturing in India. Pediatric-aligned, colloidal oat, and hypoallergenic formulations for baby care brands.",
    relatedProductIds: ["baby-creams", "baby-oils", "baby-washes",]
  },
{
    id: "baby-oils",
    slug: "baby-oils",
    categorySlug: "baby-care",
    categoryName: "Baby Care",
    name: "Baby Oils",
    shortDescription: "100% natural cold-pressed plant massage oils designed for newborn bonding and cradle cap softening.",
    detailedDescription: "Formulated entirely without mineral oil, paraffin, or synthetic fragrance. Combines organic Sweet Almond, Virgin Coconut, and Chamomile oils to nourish delicate infant skin and promote peaceful sleep through massage.",
    formulationPossibilities: [
      "Pure Sweet Almond & Chamomile nourishing baby massage oil",
      "Virgin Coconut & Vitamin E cradle-cap softening oil",
      "Bedtime relaxing baby oil with gentle Lavender essential oil",
      "Cold-pressed Jojoba & Calendula sensitive baby oil"
    ],
    texturesAndFormats: ["Lightweight pure botanical oil", "Cradle-cap softening treatment oil"],
    keyActives: ["Sweet Almond Oil", "Cold-Pressed Jojoba Oil", "Virgin Coconut Oil", "Chamomile Extract", "Vitamin E"],
    packagingOptions: ["Clear or frosted PET bottle with flow restrictor (100ml / 200ml)", "Pump bottle with safety lock"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/baby-care/Baby Oi.png",
    gallery: ["/images/products/baby-care/Baby Oi.png", "/images/products/textures/baby-oat-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Baby Oil Manufacturer | Pure Natural Massage Oils OEM | RAWMIN",
    seoDescription: "Private label baby oil manufacturing. Formulate 100% natural, mineral-oil-free baby massage oils with cold-pressed almond and chamomile.",
    relatedProductIds: ["baby-lotions", "baby-washes", "baby-creams",]
  },
{
    id: "baby-creams",
    slug: "baby-creams",
    categorySlug: "baby-care",
    categoryName: "Baby Care",
    name: "Baby Creams",
    shortDescription: "Protective diaper rash creams, soothing face creams, and rich moisture barrier balms for babies.",
    detailedDescription: "Provides an impermeable protective shield against moisture and wetness that trigger diaper rash. Formulated with pharmaceutical-grade non-nano Zinc Oxide, Calendula, and soothing panthenol.",
    formulationPossibilities: [
      "Diaper rash barrier cream with 15% / 20% Zinc Oxide and Panthenol",
      "Soothing baby face cream for teething rash and dry cheeks with Calendula",
      "Intensive dry patch & eczema relief balm with Colloidal Oat and Ceramides",
      "Ultra-nourishing organic shea butter baby cream"
    ],
    texturesAndFormats: ["Thick protective zinc barrier paste", "Rich soothing baby face cream", "Gentle multi-purpose balm"],
    keyActives: ["Non-Nano Zinc Oxide (15-20%)", "Panthenol (Pro-Vitamin B5)", "Calendula Extract", "Shea Butter", "Colloidal Oatmeal"],
    packagingOptions: ["Laminate barrier squeeze tube (75ml / 100ml)", "Cosmetic tub with inner seal lid (100g)"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/baby-care/baby face cream.png",
    gallery: ["/images/products/baby-care/baby face cream.png", "/images/products/textures/baby-oat-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Baby Cream & Diaper Rash Cream Manufacturer | Private Label | RAWMIN",
    seoDescription: "Contract manufacturing of baby diaper rash creams and barrier balms. Zinc oxide, calendula, and eczema-soothing formulations.",
    relatedProductIds: ["baby-lotions", "baby-washes", "baby-oils"]
  },
{
    id: "baby-shampoos",
    slug: "baby-shampoos",
    categorySlug: "baby-care",
    categoryName: "Baby Care",
    name: "Baby Shampoos",
    shortDescription: "Ultra-mild, tear-free baby shampoos that cleanse fine infant hair while nurturing the sensitive scalp.",
    detailedDescription: "Specially formulated with ultra-low irritation surfactants and conditioned pH 5.5-6.0. Cleanses fine newborn hair and cradle cap gently without stinging eyes or stripping natural scalp lipids.",
    formulationPossibilities: [
      "Tear-free gentle baby shampoo with Chamomile and Wheat protein",
      "Cradle cap clarifying baby shampoo with Salicylic acid and Aloe",
      "Hydrating curly baby hair shampoo with Shea butter and Jojoba",
      "Fragrance-free hypoallergenic baby shampoo for newborn scalp"
    ],
    texturesAndFormats: ["Golden clear gentle shampoo", "Self-foaming cloud shampoo", "Milky baby hair wash"],
    keyActives: ["Hydrolyzed Wheat Protein", "Organic Chamomile Extract", "Aloe Vera Leaf Juice", "Glycerin", "Panthenol"],
    packagingOptions: ["Pump bottle with safety lock (200ml / 300ml)", "Flip-top baby bottle"],
    moq: "1,000 units",
    leadTime: "3-4 weeks",
    image: "/images/products/baby-care/baby shampoo.png",
    gallery: ["/images/products/baby-care/baby shampoo.png", "/images/products/textures/baby-oat-texture.jpg", "/images/products/textures/cleanroom-lab-testing.jpg"],
    seoTitle: "Baby Shampoo Manufacturer | Tear-Free Private Label Formulations | RAWMIN",
    seoDescription: "Private label baby shampoo contract manufacturing in India. Gentle tear-free shampoos for infant and newborn hair.",
    relatedProductIds: ["baby-washes", "baby-lotions", "baby-oils"]
  }
];

export function getAllCategories(): ProductCategory[] {
  return PRODUCT_CATEGORIES;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getProductsByCategory(categorySlug: string): ProductItem[] {
  return PRODUCTS_LIST.filter((prod) => prod.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): ProductItem | undefined {
  return PRODUCTS_LIST.find((prod) => prod.categorySlug === categorySlug && prod.slug === productSlug);
}

export function getAllProducts(): ProductItem[] {
  return PRODUCTS_LIST;
}

export function getRelatedProducts(product: ProductItem, limit: number = 3): ProductItem[] {
  const categoryProducts = PRODUCTS_LIST.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  );
  
  // Prioritize products explicitly listed in relatedProductIds
  const explicitlyRelated = categoryProducts.filter((p) => product.relatedProductIds.includes(p.slug));
  const others = categoryProducts.filter((p) => !product.relatedProductIds.includes(p.slug));
  
  return [...explicitlyRelated, ...others].slice(0, limit);
}
