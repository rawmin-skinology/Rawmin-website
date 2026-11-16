import { IMAGES } from "@/lib/images";

/**
 * RAWMIN Skinology: Product Catalog & Manufacturing Capabilities
 * Official portfolio based directly on RAWMIN_SKINOLOGY_Website_Copy_Final document.
 */

export interface ProductCategory {
  id: string;
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  productRange: string[];
  featuredItem?: {
    name: string;
    brand: string;
    volume: string;
    highlights: string[];
    description: string;
  };
}

export const productCategories: ProductCategory[] = [
  {
    id: "cat-1",
    slug: "skin-care",
    number: "01",
    name: "Skin Care & Skin Protection",
    subtitle: "Everyday use, targeted concerns and modern routines.",
    description: "Skin care and skin protection products for everyday use, targeted concerns and modern routines.",
    image: "/images/products/categories/skin-care.jpg",
    productRange: [
      "Serums",
      "Moisturisers",
      "Sunscreens",
      "Face Masks",
      "Scrubs",
      "Skin Treatments",
      "Other Skin Protection Products",
    ],
  },
  {
    id: "cat-2",
    slug: "skin-cleansers",
    number: "02",
    name: "Skin Cleansers",
    subtitle: "Cleansers that clean effectively and suit different skin types.",
    description: "Cleansers that clean effectively and suit different skin types and product requirements.",
    image: IMAGES.products.categories.skinCleansers,
    productRange: [
      "Face Wash",
      "Face Cleansers",
      "Other Skin Cleansers",
    ],
  },
  {
    id: "cat-3",
    slug: "hair-care",
    number: "03",
    name: "Hair Care & Hair Protection",
    subtitle: "Everyday nourishment, conditioning and targeted hair & scalp care.",
    description: "Hair care products for different needs, from everyday nourishment and conditioning to targeted hair and scalp care.",
    image: IMAGES.products.categories.hairCare,
    productRange: [
      "Hair Conditioners",
      "Hair Masks",
      "Hair Serums",
      "Hair Treatments",
      "Hair Protection Products",
    ],
    featuredItem: {
      name: "Anaquil Hair Growth Serum",
      brand: "Amedria Labs",
      volume: "60 ml / 2.02 fl oz",
      highlights: ["Redensyl", "Capixyl", "Procapil", "Enriched with Sanguisorba"],
      description: "Advanced hair growth serum formulated with Redensyl, Capixyl, and Procapil, enriched with botanical Sanguisorba.",
    },
  },
  {
    id: "cat-4",
    slug: "hair-cleansers",
    number: "04",
    name: "Hair Cleansers",
    subtitle: "Cleansing products for different hair-care needs and daily routines.",
    description: "Hair cleansing products for different hair-care needs and everyday routines.",
    image: IMAGES.products.categories.hairCleansers,
    productRange: [
      "Shampoos",
      "Specialised Cleansing Products",
      "Other Hair Cleansers",
    ],
  },
  {
    id: "cat-5",
    slug: "body-care",
    number: "05",
    name: "Body Care",
    subtitle: "Body-care products for cleansing, nourishment and everyday personal care.",
    description: "Body-care products for cleansing, nourishment and everyday personal care.",
    image: IMAGES.products.categories.bodyCare,
    productRange: [
      "Body Cleansers",
      "Body Oils",
      "Body Lotions",
      "Body Scrubs",
      "Body Butters",
      "Other Body Care Products",
    ],
  },
  {
    id: "cat-6",
    slug: "lip-care",
    number: "06",
    name: "Lip Care",
    subtitle: "Lip-care products for nourishment, protection and everyday use.",
    description: "Lip-care products for nourishment, protection and everyday use.",
    image: IMAGES.products.categories.lipCare,
    productRange: [
      "Lip Balms",
      "Lip Oils",
      "Lip Scrubs",
      "Lip Masks",
      "Lip Butters",
      "Other Lip Care Products",
    ],
  },
  {
    id: "cat-7",
    slug: "bath-shower",
    number: "07",
    name: "Bath & Shower",
    subtitle: "Cleanse, care and make everyday routines feel better.",
    description: "Bath and shower products that cleanse, care and make everyday routines feel better.",
    image: IMAGES.products.categories.bathShower,
    productRange: [
      "Bath Products",
      "Shower Products",
      "Body Wash",
      "Bath & Shower Cleansers",
      "Other Bath & Shower Products",
    ],
  },
  {
    id: "cat-9",
    slug: "mens-grooming",
    number: "09",
    name: "Men’s Grooming",
    subtitle: "Grooming products made for men’s skin, hair and daily routines.",
    description: "Grooming products made for men’s skin, hair and daily routines.",
    image: "/images/products/categories/Men’s Grooming .png",
    productRange: [
      "Face Washes",
      "Beard Care Products",
      "Shaving Products",
      "Other Men’s Grooming Products",
    ],
  },
  {
    id: "cat-10",
    slug: "baby-care",
    number: "10",
    name: "Baby Care",
    subtitle: "Gentle baby-care products for cleansing, moisturising and everyday care.",
    description: "Gentle baby-care products for cleansing, moisturising and everyday care.",
    image: "/images/products/categories/Soft Baby Care Still Life.png",
    productRange: [
      "Baby Washes",
      "Baby Lotions",
      "Baby Oils",
      "Baby Shampoos",
      "Other Baby Care Products",
    ],
  },
];

export const additionalCapabilities = [
  {
    title: "Men’s Grooming",
    description: "Face care, beard care, shaving and specialized grooming products.",
    icon: "UserCheck",
  },
  {
    title: "Baby Care",
    description: "Gentle washes, lotions, oils, shampoos and baby-care formulations.",
    icon: "Baby",
  },
  {
    title: "Mother Care & Botanicals",
    description: "Nourishing body oils, stretch care and botanical skin formulations.",
    icon: "Heart",
  },
  {
    title: "Pet Care & Grooming",
    description: "Gentle shampoos, conditioning washes and soothing coat balms.",
    icon: "Sparkles",
  },
];
