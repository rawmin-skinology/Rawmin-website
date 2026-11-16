import { IMAGES } from "./images";

export const CERTIFICATE_LINKS = {
  gmp: "/certificates/gmp.pdf",
  gmpCert: "/certificates/gmp.pdf",
  iso: "/certificates/iso-9001-2015.pdf",
  isoCert: "/certificates/iso-9001-2015.pdf",
  iso22716: "/certificates/iso-22716.pdf",
  iso22716Cert: "/certificates/iso-22716.pdf",
  brochure: "/certificates/rawmin-skinology-brochure.pdf",
} as const;

export const SITE = {
  name: "RAWMIN SKINOLOGY",
  legalName: "RAWMIN SKINOLOGY PRIVATE LIMITED",
  brandAliases: ["Rawmin Skinology", "Rawmin", "Roman Technology", "Romans Technology"],
  tagline: "SKINCARE & PERSONAL CARE MANUFACTURING | MADE IN INDIA",
  eyebrow: "SKINCARE & PERSONAL CARE MANUFACTURING | MADE IN INDIA",
  headline: "Turning Your Beauty Brand Vision Into Market-Ready Products.",
  subheadline: "Custom Cosmetic & Private Label Manufacturing, Built Around Your Brand.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rawminskinology.com",
  email: "info@rawminskinology.com",
  secondaryEmail: "info@romanstechnology.com",
  phone: "+91 99103 93383",
  secondaryPhone: "+91 93114 22855",
  additionalPhone: "+91 93114 22855",
  whatsapp: "+91 99103 93383",
  whatsappNumber: "919910393383",
  address: "2, Site No. 2, Plot No. NH-19, Block A, DLF Industrial Area, Sector 32, Faridabad, Haryana 121003",
  logoSrc: IMAGES.brand.logo,
  logoOfficialSrc: IMAGES.brand.logoOfficial,
  logoAlt: "RAWMIN SKINOLOGY: Min it to Win it",
  slogan: "Private Label | Custom Cosmetics | Contract Manufacturing",
  driveLinks: CERTIFICATE_LINKS,
} as const;

export const NAV_MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/private-label", label: "Private Label" },
  { href: "/custom-cosmetics", label: "Custom Formulation" },
  { href: "/contact", label: "Contact" },
] as const;

export const NAV_CONTACT_LINK = { href: "/contact", label: "Contact" } as const;

export const NAV_LINKS = [
  ...NAV_MAIN_LINKS,
] as const;

export const BRAND_PILLARS = [
  {
    number: "01",
    title: "Quality-Focused Manufacturing",
    description: "Controlled processes and quality checkpoints help keep every batch consistent.",
  },
  {
    number: "02",
    title: "R&D & Formulation Expertise",
    description: "Our technical team develops products for cosmetic and personal-care categories around your requirements and market positioning.",
  },
  {
    number: "03",
    title: "15+ Years of Industry Experience",
    description: "Our team brings over 15 years of experience in formulation, filling, packaging and cosmetic manufacturing, so we understand the real challenges of taking a product to market.",
  },
  {
    number: "04",
    title: "Wide Product Portfolio",
    description: "Ready formulations across skin care, hair care, body care, men’s grooming, baby care and more.",
  },
  {
    number: "05",
    title: "Export-Ready Support",
    description: "Documentation, samples, compliance guidance and logistics support for domestic and international markets.",
  },
  {
    number: "06",
    title: "End-to-End Support",
    description: "From formulation and sampling to packaging, production, QA and dispatch.",
  },
] as const;

export const BRAND_PARTNERS = [
  { name: "Herbaush", category: "Ayurvedic & Herbal" },
  { name: "Amedria Labs", category: "Advanced Cosmeceuticals" },
  { name: "Mufasa Man", category: "Men's Grooming" },
  { name: "Healthcon", subtitle: "The Conscious Choice", category: "Wellness & Skin" },
  { name: "La Arhea", category: "Luxury Skin Care" },
  { name: "Groom Essence", category: "Grooming & Hair" },
  { name: "La Vendée", category: "Premium Botanical" },
  { name: "Dab & Dew", category: "Daily Cleansing & Glow" },
  { name: "Amrisa Organics", category: "Organic Skincare" },
  { name: "Kohl & Spice", category: "Color & Beauty" },
  { name: "Skinceutics", category: "Clinical Active Care" },
  { name: "Seranyx", category: "Dermatological Care" },
  { name: "Skindulge", category: "Luxury Indulgence" },
  { name: "Perr Cherry", category: "Clean Beauty" },
  { name: "Womenhood", category: "Intimate & Personal Care" },
  { name: "#121-GLAM", category: "Glamour & Glow" },
  { name: "Purearth", category: "Pure Plant-Based" },
] as const;
