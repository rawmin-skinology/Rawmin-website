/**
 * RAWMIN Skinology - Centralized Image Management System
 * 
 * HOW TO REPLACE IMAGES:
 * 1. Open the folder in VS Code under `public/images/<section>/`
 * 2. Drop in your replacement image using the EXACT same filename
 * 3. The website will automatically update everywhere without touching any code!
 * 
 * ALL IMAGE DIMENSIONS & RATIOS ARE MAINTAINED AUTOMATICALLY.
 */

export const IMAGES = {
  /**
   * BRAND LOGOS & IDENTITY
   * Location: public/images/brands/
   */
  brand: {
    // Primary RAWMIN Skinology Logo (Navbar, Hero Intro)
    logo: "/images/brands/rawmin-logo.png",
    // Official RAWMIN Skinology Logo (Footer, Legal & Certifications)
    logoOfficial: "/images/brands/rawmin-logo-official.png",
  },

  /**
   * HOMEPAGE IMAGES
   * Location: public/images/home/
   */
  home: {
    // Item 1: Korean Science Scientist with Pipette (1.png)
    koreanScientistPipette: "/images/home/korean-science-scientist-pipette.png",
    // Item 1: Indian Production Scientist with Spatula & Bench (1.1.png)
    koreanScientistLab: "/images/home/korean-science-formulation-lab.png",
    // RAWMIN Skinology Modern Manufacturing Facility in Faridabad
    rawminFacility: "/images/home/rawmin-manufacturing-facility.png",
    // Item 24: Hero Cleanroom Facility visual (2.png)
    heroFacility: "/images/home/hero-facility.png",
    // Company Intro: Automated cream jar filling nozzles (2.png)
    companyIntroFilling: "/images/home/cleanroom-cream-filling.png",
    // Item 7: Section 7 Cleanroom stainless steel mixing (7.png)
    cleanroomCompounding: "/images/home/cleanroom-stainless-mixing.png",

    // Capabilities Section (6 Cards)
    capabilities: {
      privateLabel: "/images/home/capability-private-label.png", // Item 3 (3.png)
      customFormulation: "/images/home/capability-custom-formulation.png", // Item 4 (4.png)
      labSampling: "/images/home/capability-lab-sampling.png", // Item 5 (5.png)
      packaging: "/images/home/capability-packaging.png", // Item 6 (6.png)
      manufacturing: "/images/home/cleanroom-stainless-mixing.png", // Item 7 (7.png)
      exportSupport: "/images/home/capability-export.png", // Item 8 (8.png)
    },

    // 7 Product Category Showcase Cards on Homepage
    products: {
      skinCare: "/images/products/categories/skin-care.jpg",
      skinCleansers: "/images/products/skin-cleansers.png",
      hairCare: "/images/products/categories/category-hair-care.jpg",
      hairCleansers: "/images/products/hair-cleansers.png",
      bodyCare: "/images/products/categories/body-care.png",
      lipCare: "/images/products/categories/lip-care.jpg",
      bathShower: "/images/products/categories/bath-shower.jpg",
    },
  },

  /**
   * ABOUT US PAGE IMAGES
   * Location: public/images/about/
   */
  about: {
    // Item 24: Facility Compounding Overview (2.png)
    facilityCompounding: "/images/about/facility-compounding.png",
    // Item 5: Chemist in Lab with Beakers & Formulation (5.png)
    labScientist: "/images/about/lab-scientist.png",
    // Item 7: Cleanroom Sanitary Stainless Compounding Vessels (7.png)
    cleanroomVessels: "/images/about/cleanroom-vessels.png",

    // Company Journey Timeline Cards
    timeline: {
      story2023: "/images/about/journey-2023.jpg",
      story2024: "/images/about/journey-2024.jpg",
      story2025: "/images/about/journey-2025.jpg",
      story2026: "/images/about/journey-2026.jpg",
    },
  },

  /**
   * SERVICES PAGE IMAGES
   * Location: public/images/services/
   */
  services: {
    // 5 Core B2B Service Cards
    customFormulation: "/images/services/custom-formulation.png", // Item 4 (4.png)
    privateLabel: "/images/services/private-label.png", // Item 3 (3.png)
    packagingSupport: "/images/services/packaging-support.png", // Item 6 (6.png)
    contractManufacturing: "/images/services/contract-manufacturing.png", // Item 7 (7.png)
    testingExport: "/images/services/testing-export.png", // Item 8 (8.png)

    // Services Page Hero & Technical Banners
    servicesBanner: "/images/services/services-banner.png", // Item 25 (3.png)
    fillingInspection: "/images/services/filling-inspection.png", // Item 23 (23.png)
    packagingDisplay: "/images/services/packaging-display.png", // Item 6 (6.png)

    // 7-Stage "Concept to Finish" Formulation Process Workflow
    process: {
      step1Idea: "/images/services/process-step1-idea.jpg", // Item 17: Stage 01 Share Your Idea
      step2Feasibility: "/images/services/process-step2-feasibility.png", // Item 18: Stage 02 Feasibility Review (18.png)
      step3Formulation: "/images/services/process-step3-formulation.png", // Item 19: Stage 03 Lab Formulation (19.png)
      step4Sampling: "/images/services/process-step4-sampling.png", // Item 20: Stage 04 Prototype Testing (20.png)
      step5Packaging: "/images/services/process-step5-packaging.png", // Item 21: Stage 05 Packaging Compatibility (21.png)
      step6Cleanroom: "/images/services/process-step6-cleanroom.png", // Item 22: Stage 06 Cleanroom Compounding (22.png)
      step7Dispatch: "/images/services/process-step7-dispatch.png", // Item 23: Stage 07 QC Release & Dispatch (23.png)
    },
  },

  /**
   * PRODUCTS CATALOG IMAGES
   * Location: public/images/products/
   */
  products: {
    // Top Catalog Overview Banner (New Flat-lay Cosmetics Lineup)
    catalogOverview: "/images/products/product-lineup-flatlay.jpg?v=3",

    // 7 Core Formulation Categories
    categories: {
      skinCare: "/images/products/categories/skin-care.jpg",
      skinCleansers: "/images/products/skin-cleansers.png",
      hairCare: "/images/products/categories/category-hair-care.jpg",
      hairCleansers: "/images/products/hair-cleansers.png",
      bodyCare: "/images/products/categories/body-care.png",
      lipCare: "/images/products/categories/lip-care.jpg",
      bathShower: "/images/products/categories/bath-shower.jpg",
    },
  },

  /**
   * PRIVATE LABEL & LABELS PAGE IMAGES
   * Location: public/images/labels/
   */
  labels: {
    hero: "/images/labels/private-label-hero.png", // Item 3 (3.png)
    formulation: "/images/labels/custom-formulation.png", // Item 4 (4.png)
    packagingBottles: "/images/labels/packaging-bottles.png", // Item 6 (6.png)
    cleanroomBottling: "/images/labels/cleanroom-bottling.png", // Item 22 (22.png)
  },

  /**
   * MANUFACTURING & CLEANROOM IMAGES
   * Location: public/images/manufacturing/
   */
  manufacturing: {
    cleanroomCompounding: "/images/manufacturing/cleanroom-compounding.png", // Item 2 (2.png)
    stainlessMixingTanks: "/images/manufacturing/stainless-mixing-tanks.png", // Item 7 (7.png)
    automatedFillingNozzles: "/images/manufacturing/automated-filling-nozzles.png", // Item 2 (2.png)
    formulationTesting: "/images/manufacturing/formulation-testing.png", // Item 5 (5.png)
  },

  /**
   * QUALITY & CERTIFICATION IMAGES
   * Location: public/images/quality/
   */
  quality: {
    // Official Certificate Document Previews
    certGmp: "/images/quality/cert-gmp.jpg",
    certIso: "/images/quality/cert-iso.jpg",
    certIso22716: "/images/quality/cert-iso22716.jpg",
    certFda: "/images/quality/cert-fda.jpg",

    // Lab Standards & Testing Photos
    cleanroomStandards: "/images/quality/cleanroom-standards.png", // Item 24 (2.png)
    microbiologyTesting: "/images/quality/microbiology-testing.jpg",
  },

  /**
   * 19 VERIFIED BRAND PARTNER LOGOS
   * Location: public/images/brands/
   */
  brands: {
    herbaush: "/images/brands/herbaush.png",
    amedriaLabs: "/images/brands/amedria-labs.png",
    mufasaMan: "/images/brands/mufasa-man.png",
    healthcon: "/images/brands/healthcon.png",
    laArhea: "/images/brands/la-arhea.png",
    groomEssence: "/images/brands/groom-essence.png",
    laVende: "/images/brands/la-vende.png",
    dabAndDew: "/images/brands/dab-and-dew.png",
    amrisaOrganics: "/images/brands/amrisa-organics.png",
    kohlAndSpice: "/images/brands/kohl-and-spice.png",
    skinceutics: "/images/brands/skinceutics.png",
    seranyx: "/images/brands/seranyx.png",
    skindulge: "/images/brands/skindulge.png",
    perrCherry: "/images/brands/perr-cherry.png",
    womenhood: "/images/brands/womenhood.png",
    glam121: "/images/brands/121-glam.png",
    purearth: "/images/brands/purearth.png",
    gnvCommodities: "/images/brands/gnv-commodities.png",
    loreal: "/images/brands/loreal.svg",
  },
} as const;

export type ImageConfig = typeof IMAGES;
