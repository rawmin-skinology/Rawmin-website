import { IMAGES } from "@/lib/images";

/**
 * RAWMIN Skinology: Company Content
 * Official copy based directly on RAWMIN_SKINOLOGY_Website_Copy_Final document.
 */

export const companyVision = {
  eyebrow: "SKINCARE & PERSONAL CARE MANUFACTURING | MADE IN INDIA",
  headline: "Turning Your Beauty Brand Vision Into Market-Ready Products.",
  subhead: "Custom Cosmetic & Private Label Manufacturing, Built Around Your Brand.",
  heroHeading: "Your Partner in Cosmetic Formulation & Manufacturing",
  heroCopy: "Rawmin Skinology helps skincare and personal care brands turn ideas into production-ready products with private label manufacturing, custom formulation, R&D, ingredient sourcing, packaging support and compliant manufacturing in India.",
  servicesBadges: ["Private Label", "Custom Cosmetics", "Contract Manufacturing"],
};

export const ourStoryTimeline = [
  {
    year: "2023",
    title: "The Beginning",
    heading: "Where the Rawmin Skinology journey began.",
    description: "In 2023, Rawmin Skinology was set up to be a manufacturing partner that helps beauty and personal-care brands turn ideas into market-ready products. Our focus was simple: Understand the brand. Develop the product. Manufacture it right.",
    image: IMAGES.about.timeline.story2023,
  },
  {
    year: "2024",
    title: "Building the Foundation",
    heading: "Setting up processes from concept to production.",
    description: "As we progressed, Rawmin built up its capabilities in formulation, product development and manufacturing. The focus shifted from the initial vision to setting up the processes needed to support brands from concept and sampling through to production.",
    image: IMAGES.about.timeline.story2024,
  },
  {
    year: "2025",
    title: "Expanding Our Range",
    heading: "Widening capabilities across 7 core categories.",
    description: "With stronger capabilities, Rawmin widened its range to cover skin care, hair care, body care, lip care, bath & shower, men’s grooming and baby care. Our role grew beyond manufacturing. We now help brands develop products around their own vision.",
    image: IMAGES.about.timeline.story2025,
  },
  {
    year: "2026",
    title: "Where We Are Today",
    heading: "Helping brands build products that belong to them.",
    description: "Today, Rawmin Skinology brings together R&D, formulation, private label manufacturing, packaging, quality systems and end-to-end product support to take brands from idea to finished product. From custom cosmetics to private label, our focus stays the same: Helping brands build products that belong to them.",
    image: IMAGES.about.timeline.story2026,
  },
];

export const ourServices = [
  {
    id: "custom-cosmetics",
    number: "01",
    title: "Custom Cosmetics",
    subtitle: "Create products developed specifically for your brand.",
    description: "From formulation development and feasibility to packaging selection and production, we help turn your concept into a finished product.",
    capabilities: [
      "Custom formulation",
      "Product development",
      "Ingredient selection",
      "Packaging selection",
      "Feasibility studies",
      "Cost estimation",
      "Scale-up & production",
    ],
    image: IMAGES.services.customFormulation,
  },
  {
    id: "private-label",
    number: "02",
    title: "Private Label Solutions",
    subtitle: "Launch faster with proven formulations from our portfolio.",
    description: "Select a formulation, evaluate samples, make suitable customisations and launch under your own brand.",
    capabilities: [
      "Ready formulations",
      "Sample evaluation",
      "Minor customisation",
      "Packaging options",
      "Label & artwork support",
      "Production & dispatch",
    ],
    image: IMAGES.services.privateLabel,
  },
  {
    id: "packaging-solutions",
    number: "03",
    title: "Packaging Solutions",
    subtitle: "Packaging is a key part of how customers experience your brand.",
    description: "We help with packaging selection, consultation, materials, labelling and coordination of packaging requirements.",
    capabilities: [
      "Bottles",
      "Jars",
      "Tubes",
      "Airless Pumps",
      "Sachets",
      "Cartons",
      "Labels & Printing",
    ],
    image: IMAGES.services.packagingSupport,
  },
  {
    id: "quality-regulatory",
    number: "04",
    title: "Quality & Regulatory Support",
    subtitle: "From feasibility to documentation and compliance.",
    description: "From quality assurance and product feasibility to documentation and regulatory guidance, we help brands meet the requirements of developing and manufacturing cosmetic products.",
    capabilities: [
      "GMP-aligned manufacturing standards",
      "ISO-certified quality management",
      "FDA registration & compliance guidance",
      "Documented batch records & release testing",
      "COA, specifications and MSDS support",
    ],
    image: IMAGES.services.contractManufacturing,
  },
  {
    id: "export-support",
    number: "05",
    title: "Export Support",
    subtitle: "Prepared for Indian and global markets.",
    description: "For brands selling in international markets, we support documentation, specifications, COA, MSDS and export coordination.",
    capabilities: [
      "Certificate of Analysis (COA) for every batch",
      "Material Safety Data Sheets (MSDS)",
      "Product technical specifications",
      "Export documentation & compliance support",
      "International logistics coordination",
    ],
    image: IMAGES.services.testingExport,
  },
];

export const clientBrands = [
  { id: "herbaush", name: "Herbaush", category: "Ayurvedic & Natural", logo: IMAGES.brands.herbaush, theme: "light" },
  { id: "amedria-labs", name: "Amedria Labs", category: "Active Hair & Skin", logo: IMAGES.brands.amedriaLabs, theme: "light" },
  { id: "mufasa-man", name: "Mufasa Man", category: "Men's Grooming", logo: IMAGES.brands.mufasaMan, theme: "light" },
  { id: "healthcon", name: "Healthcon", category: "Conscious Skincare", logo: IMAGES.brands.healthcon, theme: "light" },
  { id: "la-arhea", name: "La Arhea", category: "Prestige Beauty", logo: IMAGES.brands.laArhea, theme: "light" },
  { id: "groomessence", name: "GroomEssence", category: "Grooming & Shaving", logo: IMAGES.brands.groomEssence, theme: "light" },
  { id: "la-vende", name: "La Vendée", category: "Luxury Botanicals", logo: IMAGES.brands.laVende, theme: "light" },
  { id: "dab-and-dew", name: "Dab & Dew", category: "Clean Hydration", logo: IMAGES.brands.dabAndDew, theme: "light" },
  { id: "amrisa-organics", name: "Amrisa Organics", category: "Organic Care", logo: IMAGES.brands.amrisaOrganics, theme: "light" },
  { id: "kohl-and-spice", name: "Kohl & Spice", category: "Herbal Formulation", logo: IMAGES.brands.kohlAndSpice, theme: "light" },
  { id: "skinceutics", name: "Skinceutics", category: "Dermaceutical", logo: IMAGES.brands.skinceutics, theme: "light" },
  { id: "seranyx", name: "Seranyx", category: "Active Formulations", logo: IMAGES.brands.seranyx, theme: "dark" },
  { id: "skindulge", name: "Skindulge", category: "Facial Care", logo: IMAGES.brands.skindulge, theme: "light" },
  { id: "perr-cherry", name: "Perr Cherry", category: "Specialty Beauty", logo: IMAGES.brands.perrCherry, theme: "light" },
  { id: "womenhood", name: "Womenhood", category: "Intimate & Body", logo: IMAGES.brands.womenhood, theme: "light" },
  { id: "121-glam", name: "#121-Glam", category: "Cosmetics", logo: IMAGES.brands.glam121, theme: "light" },
  { id: "purearth", name: "Pūrearth", category: "Conscious Wellness", logo: IMAGES.brands.purearth, theme: "light" },
  { id: "gnv", name: "GNV Commodities", category: "Raw Material & Trade Partner", logo: IMAGES.brands.gnvCommodities, theme: "light" },
  { id: "loreal", name: "L’Oréal Paris", category: "Global Benchmark Brand", logo: IMAGES.brands.loreal, theme: "light" },
];

export const clientBrandPartners = [
  { name: "Herbaush", category: "Ayurvedic & Natural" },
  { name: "Amedria Labs", category: "Active Hair & Skin" },
  { name: "Mufasa Man", category: "Men's Grooming" },
  { name: "Healthcon", category: "Conscious Skincare" },
  { name: "La Arhea", category: "Prestige Beauty" },
  { name: "GroomEssence", category: "Grooming & Shaving" },
  { name: "La Vendée", category: "Luxury Botanicals" },
  { name: "Dab & Dew", category: "Clean Hydration" },
  { name: "Amrisa Organics", category: "Organic Care" },
  { name: "Kohl & Spice", category: "Herbal Formulation" },
  { name: "Skinceutics", category: "Dermaceutical" },
  { name: "Seranyx", category: "Active Formulations" },
  { name: "Skindulge", category: "Facial Care" },
  { name: "Perr Cherry", category: "Specialty Beauty" },
  { name: "Womenhood", category: "Intimate & Body" },
  { name: "#121-Glam", category: "Cosmetics" },
  { name: "Purearth", category: "Conscious Wellness" },
  { name: "GNV Commodities", category: "Strategic Partner" },
  { name: "L’Oréal Paris", category: "Global Standard" },
];

export const companyFaqs = [
  {
    question: "Can Rawmin Skinology develop a completely new formulation?",
    answer: "Yes. Our custom cosmetics service develops formulations based on your product concept, target market, ingredients, claims and specifications.",
  },
  {
    question: "Can I manufacture products under my own brand?",
    answer: "Yes. Our private label and contract manufacturing programmes let you develop and manufacture products under your own brand name.",
  },
  {
    question: "Do you provide packaging support?",
    answer: "Yes. We help with packaging selection, consultation and coordination of packaging and artwork requirements.",
  },
  {
    question: "Can I provide my own formulation or benchmark product?",
    answer: "Yes. Your formulation brief, benchmark sample, INCI list, product concept or packaging idea can all be used to start the development discussion.",
  },
  {
    question: "Do you provide samples before bulk production?",
    answer: "Yes. Samples are evaluated and refined before the product moves into bulk production.",
  },
  {
    question: "Do you support export requirements?",
    answer: "Yes. Rawmin provides export documentation and compliance support, including COA, specifications and MSDS where required.",
  },
  {
    question: "What categories do you manufacture?",
    answer: "We manufacture skin care, hair care, body care, lip care, bath & shower, men’s grooming and baby care products.",
  },
  {
    question: "Can I request a custom quotation?",
    answer: "Yes. Share your product requirements, expected quantity and packaging preferences, and our team will get back to you with a quotation.",
  },
];


export const conceptToFinishSteps = [
  {
    step: "01",
    title: "Brief",
    subtitle: "Share Your Vision",
    description: "Understand your product, brand and requirements.",
    image: IMAGES.services.process.step1Idea,
  },
  {
    step: "02",
    title: "Formulation",
    subtitle: "Formulation Direction",
    description: "Select or develop the right formulation direction.",
    image: IMAGES.services.process.step2Feasibility,
  },
  {
    step: "03",
    title: "Sampling",
    subtitle: "Prototype Testing",
    description: "Prepare samples for review and refinement.",
    image: IMAGES.services.process.step3Formulation,
  },
  {
    step: "04",
    title: "Packaging",
    subtitle: "Packaging Selection",
    description: "Select packaging and finalise the presentation.",
    image: IMAGES.services.process.step4Sampling,
  },
  {
    step: "05",
    title: "Approval",
    subtitle: "Specifications Sign-off",
    description: "Confirm formulation, packaging and production specifications.",
    image: IMAGES.services.process.step5Packaging,
  },
  {
    step: "06",
    title: "Manufacturing",
    subtitle: "Controlled Production",
    description: "Move the approved product into production.",
    image: IMAGES.services.process.step6Cleanroom,
  },
  {
    step: "07",
    title: "Dispatch",
    subtitle: "Finished Delivery",
    description: "Prepare finished products for delivery.",
    image: IMAGES.services.process.step7Dispatch,
  },
];

export const certifications = [
  {
    title: "GMP Certified",
    subtitle: "Good Manufacturing Practices",
    description: "Strict hygiene controls, environmental monitoring, and controlled manufacturing environments.",
    logo: IMAGES.quality.certGmp,
    link: "/certificates/gmp.pdf",
  },
  {
    title: "ISO-Certified Standards",
    subtitle: "ISO 9001 & ISO 22716",
    description: "Internationally recognized standard for cosmetic production, storage, quality control, and transport.",
    logo: IMAGES.quality.certIso,
    link: "/certificates/iso-9001-2015.pdf",
  },
  {
    title: "FDA Registration",
    subtitle: "FDA Compliance",
    description: "Manufacturing standards aligned with regulatory requirements for Indian and international beauty markets.",
    logo: IMAGES.quality.certFda,
    link: "/certificates/fda-compliance.pdf",
  },
];

export const brandPartnerLogos = clientBrands;
