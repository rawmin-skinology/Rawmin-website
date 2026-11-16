"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import InquiryForm from "@/components/InquiryForm";
import ScrollFlipSection from "@/components/sections/scroll-flip-section";
import BrandPartnersSlider from "@/components/sections/brand-partners-slider";
import ExploreOurJourney from "@/components/sections/explore-our-journey";
import ManufacturingScroll from "@/components/ManufacturingScroll";
import ManufacturingTimeline, { TimelineStep } from "@/components/timeline/ManufacturingTimeline";
import HorizontalManufacturingJourney from "@/components/sections/horizontal-manufacturing-journey";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, Check, ShieldCheck, Microscope, Factory, Sparkles } from "lucide-react";
import { ourStoryTimeline, companyFaqs } from "@/data/company-content";
import { PRODUCT_CATEGORIES } from "@/data/product-catalog";

const faqs = companyFaqs.map((f) => ({
  q: f.question,
  a: f.answer,
}));

const capabilities = [
  {
    num: "01",
    title: "Custom Cosmetics",
    href: "/custom-cosmetics",
    desc: "Create products developed specifically for your brand. From formulation development and feasibility to packaging selection and production.",
    highlights: [
      "Custom formulation",
      "Product development",
      "Ingredient selection",
      "Packaging selection",
      "Feasibility studies",
      "Scale-up & production",
    ],
    image: IMAGES.home.capabilities.customFormulation,
  },
  {
    num: "02",
    title: "Private Label",
    href: "/private-label",
    desc: "Launch faster with proven formulations from our portfolio. Select a formulation, evaluate samples, make suitable customisations and launch under your own brand.",
    highlights: [
      "Ready formulations",
      "Sample evaluation",
      "Minor customisation",
      "Packaging options",
      "Label & artwork support",
      "Production & dispatch",
    ],
    image: IMAGES.home.capabilities.privateLabel,
  },
  {
    num: "03",
    title: "Packaging Solutions",
    href: "/services#packaging",
    desc: "Packaging is a key part of how customers experience your brand. We help with packaging selection, consultation, materials, labelling and coordination of packaging requirements.",
    highlights: [
      "Bottles, Jars & Tubes",
      "Airless Pumps & Droppers",
      "Sachets, Cartons & Boxes",
      "Labels & Printing Support",
    ],
    image: IMAGES.home.capabilities.packaging,
  },
  {
    num: "04",
    title: "Quality",
    href: "/quality",
    desc: "From quality assurance and product feasibility to documentation and regulatory guidance, we help brands meet the requirements of developing and manufacturing cosmetic products.",
    highlights: [
      "GMP-aligned manufacturing standards",
      "ISO-certified quality management",
      "FDA compliance guidance",
      "Documented batch release records",
    ],
    image: IMAGES.home.capabilities.manufacturing,
  },
  {
    num: "05",
    title: "Export Support",
    href: "/services#export",
    desc: "For brands selling in international markets, we support documentation, specifications, COA, MSDS and export coordination.",
    highlights: [
      "Batch Certificate of Analysis (COA)",
      "Safety data sheets (MSDS)",
      "Product technical specifications",
      "Export documentation & coordination",
    ],
    image: IMAGES.home.capabilities.exportSupport,
  },
];

const whyPoints = [
  {
    step: "01",
    title: "Quality-Focused Manufacturing",
    desc: "Controlled processes and quality checkpoints help keep every batch consistent.",
  },
  {
    step: "02",
    title: "R&D & Formulation Expertise",
    desc: "Our technical team develops products for cosmetic and personal-care categories around your requirements and market positioning.",
  },
  {
    step: "03",
    title: "15+ Years of Industry Experience",
    desc: "Our team brings over 15 years of experience in formulation, filling, packaging and cosmetic manufacturing, so we understand the real challenges of taking a product to market.",
  },
  {
    step: "04",
    title: "Wide Product Portfolio",
    desc: "Ready formulations across skin care, hair care, body care, men’s grooming, baby care and more.",
  },
  {
    step: "05",
    title: "Export-Ready Support",
    desc: "Documentation, samples, compliance guidance and logistics support for domestic and international markets.",
  },
  {
    step: "06",
    title: "End-to-End Support",
    desc: "From formulation and sampling to packaging, production, QA and dispatch.",
  },
];

const homeTimelineSteps: TimelineStep[] = [
  {
    id: "01",
    title: "Ingredients",
    tagline: "01 — Raw Materials & Actives",
    description: "Sourcing quality-certified cosmetic raw materials, active ingredients, and botanical extracts under strict incoming quality checks.",
    image: "/images/home-20-ingredients.jpg",
    points: [
      "Verified raw material sourcing & supplier certification",
      "Active ingredient purity checks & batch traceability",
      "Climate-controlled storage before production",
    ],
  },
  {
    id: "02",
    title: "R&D",
    tagline: "02 — Bench Chemistry & Emulsion Science",
    description: "Our dedicated technical team researches, develops and optimizes formulas tailored to your target benefits, skin feel, and stability requirements.",
    image: "/images/home-21-rnd.jpg",
    points: [
      "Custom formulation & base optimization",
      "High-shear emulsification and texture crafting",
      "pH, viscosity, and sensory evaluation",
    ],
  },
  {
    id: "03",
    title: "Formulation",
    tagline: "03 — Precision Compounding & Homogenisation",
    description: "Controlled compounding and high-shear homogenisation in sanitary stainless-steel vessels under strict batch manufacturing records.",
    image: "/images/services/process-step3-formulation.png",
    points: [
      "Sanitary jacketed stainless-steel compounding tanks",
      "Controlled cleanrooms operating under GMP & ISO standards",
      "Documented batch manufacturing records (BMR)",
    ],
  },
  {
    id: "04",
    title: "Testing",
    tagline: "04 — Analytical & Quality Validation",
    description: "Rigorous analytical, physical, microbiological and stability testing to verify safety, shelf-life and regulatory compliance.",
    image: "/images/home-22-testing.jpg",
    points: [
      "Microbiological purity & preservative efficacy testing",
      "Accelerated thermal and physical stability checks",
      "Certificate of Analysis (COA) and MSDS documentation",
    ],
  },
  {
    id: "05",
    title: "Sampling",
    tagline: "05 — Prototype Evaluation & Brand Approval",
    description: "Production-grade samples prepared for brand evaluation, sensory testing and final formulation sign-off before full-scale commercial manufacturing.",
    image: "/images/services/process-step4-sampling.png",
    points: [
      "Prototype sample evaluation by brand team",
      "Refinement based on sensory and skin feel feedback",
      "Final brand sign-off before commercial batch scheduling",
    ],
  },
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* SECTION 1: HERO INTRO - Logo & Badge */}
      <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden turquoise-hero-mesh">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[440px] bg-[#2CB6C4]/22 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-[#8DE3E8]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div
            id="hero-logo-anchor"
            className="relative w-[340px] sm:w-[460px] md:w-[540px] lg:w-[620px] xl:w-[660px] max-w-[90vw] aspect-[755/320] select-none mx-auto"
          >
            <Image
              src={SITE.logoSrc}
              alt={SITE.logoAlt}
              width={755}
              height={320}
              priority
              className="w-full h-full object-contain object-center hero-anchor-img"
            />
          </div>

          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#136B75]">
            <span className="px-4 py-2 bg-[#2CB6C4]/15 rounded-full border border-[#2CB6C4]/35 flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2CB6C4] animate-pulse" />
              SKINCARE &amp; PERSONAL CARE MANUFACTURING | MADE IN INDIA
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCROLL-BASED FACILITY SHOWCASE & OPENING */}
      <ScrollFlipSection />

      {/* MARQUEE ACTION STRIP */}
      <a
        href="#inquiry"
        className="group block bg-[#2CB6C4] hover:bg-[#26A6B4] text-white py-3.5 sm:py-4 overflow-hidden border-y border-[#209DA9] select-none transition-colors duration-200 cursor-pointer apple-press shadow-xs"
        aria-label="Start your cosmetic manufacturing enquiry with Rawmin Skinology"
      >
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap text-xs uppercase tracking-widest font-medium">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8">
              <span className="text-white font-bold flex items-center gap-2 group-hover:text-[#FFE89E] transition-colors">
                START YOUR BRAND
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#FFE89E]" />
              </span>
              <span className="text-[#FFE89E]">★</span>
              <span className="text-white/95">PRIVATE LABEL</span>
              <span className="text-[#FFE89E]">★</span>
              <span className="text-white/95">CUSTOM COSMETICS</span>
              <span className="text-[#FFE89E]">★</span>
              <span className="text-white/95">CONTRACT MANUFACTURING</span>
              <span className="text-[#FFE89E]">★</span>
              <span className="text-white font-bold flex items-center gap-2 group-hover:text-[#FFE89E] transition-colors">
                TALK TO OUR TEAM
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#FFE89E]" />
              </span>
              <span className="text-[#FFE89E]">★</span>
              <span className="text-white/95">GMP | ISO | FDA</span>
            </div>
          ))}
        </div>
      </a>

      {/* SECTION 04: OUR STORY */}
      <section id="story" className="relative py-20 sm:py-24 turquoise-marble border-b border-[#B2E8EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-[-0.03em]">
                Manufacturing Partner Built Around Brands.
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p>
                  Since 2023, Rawmin Skinology has worked toward one goal: to make cosmetic manufacturing simpler, more reliable and more transparent for brands.
                </p>
                <p>
                  What began as a vision now covers formulation, R&amp;D, manufacturing, quality control and product development, supporting brands across beauty and personal care.
                </p>
                <p>
                  As our capabilities and portfolio have grown, so has our understanding of what brands need from a manufacturing partner. Today, we continue to build on the same principles: consistent products, clear communication and dependable delivery.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-6 text-sm">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#187580] hover:text-[#2CB6C4] hover:underline"
                >
                  <span>Explore Our Journey (2023–2026)</span>
                  <ArrowRight className="w-4 h-4 text-[#B89A60]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#B2E8EB] bg-stone-100">
              <Image
                src={IMAGES.home.companyIntroFilling}
                alt="Rawmin Skinology cleanroom cosmetic manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: EXPLORE OUR JOURNEY (2023-2026) */}
      <ExploreOurJourney />

      {/* SECTION 06: WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-[-0.03em] font-bold">
              Why Choose Us?
            </h2>
            <p className="mt-2 text-lg font-medium text-[#136B75]">
              Supported at Every Step of Product Development
            </p>
            <p className="mt-2 text-[#2C5256] text-base leading-relaxed font-normal">
              We bring formulation, manufacturing, packaging support and quality control together in one place, so your product development stays simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPoints.map((pt) => (
              <div
                key={pt.title}
                tabIndex={0}
                className="group bg-white hover:bg-[#24A6B5] active:bg-[#24A6B5] focus:bg-[#24A6B5] p-8 rounded-3xl border border-[#B2E8EB] hover:border-[#1E95A3] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start space-y-3 cursor-pointer select-none touch-manipulation focus:outline-none"
              >
                <h3 className="text-xl font-bold text-[#144246] group-hover:text-white group-active:text-white group-focus:text-white transition-colors duration-300">
                  {pt.title}
                </h3>
                <p className="text-[#2C5256] group-hover:text-white/95 group-active:text-white/95 group-focus:text-white/95 text-sm leading-relaxed font-normal transition-colors duration-300">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: OUR SERVICES */}
      <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-[#E2F5F7] via-[#EDF8F9] to-[#D8F1F4] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-[-0.03em] font-bold">
              Manufacturing Solutions for Every Stage of Your Brand
            </h2>
            <p className="mt-4 text-[#2C5256] text-base sm:text-lg leading-relaxed font-normal">
              Whether you need a ready formulation or a completely new product, Rawmin Skinology offers flexible manufacturing solutions to match your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-[#B2E8EB] flex flex-col justify-between group hover:border-[#2CB6C4] transition-all shadow-xs hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#144246] group-hover:text-[#2CB6C4] transition-colors leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#B2E8EB]/50">
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#187580] group-hover:text-[#2CB6C4] transition-colors"
                  >
                    <span>Explore {cap.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B89A60] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: OUR PRODUCTS (7 Core Categories) */}
      <section id="products" className="relative py-20 sm:py-24 bg-gradient-to-b from-[#DEF2F4] via-[#EBF7F8] to-[#D6EFF2] border-b border-[#B2E8EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-[-0.03em] font-bold">
              Our Beauty &amp; Personal-Care Product Range
            </h2>
            <p className="mt-4 text-[#2C5256] text-base sm:text-lg leading-relaxed font-normal">
              Choose from a wide range of formulations across categories, or work with our team to develop something completely new.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="bg-white rounded-2xl overflow-hidden group flex flex-col justify-between border border-[#B2E8EB] hover:border-[#2CB6C4] transition-all shadow-xs hover:shadow-xl active:scale-[0.98] apple-press"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#144246] group-hover:text-[#2CB6C4] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#2C5256] mt-2 line-clamp-2 leading-relaxed font-normal">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#187580] group-hover:text-[#2CB6C4] inline-flex items-center gap-1.5">
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B89A60] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all shadow-md active:scale-[0.98] apple-press"
            >
              View Full Product Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FROM FORMULA TO FINISHED GOODS (SCROLL-CONTROLLED HORIZONTAL JOURNEY) */}
      <HorizontalManufacturingJourney />

      {/* SECTION 11: CERTIFICATIONS & QUALITY */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#0D292D] via-[#144246] to-[#0A2023] text-white border-y border-[#2CB6C4]/30 overflow-hidden select-none">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-[-0.03em]">
                Built for Responsive Manufacturing.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal">
                Our manufacturing and quality systems are backed by applicable certifications, regulatory requirements and documented processes.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-[#2CB6C4]/40 text-center">
                  <p className="text-xl font-bold text-[#8DE3E8]">GMP</p>
                  <p className="text-xs text-white/70">Good Manufacturing Practices</p>
                </div>
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-[#2CB6C4]/40 text-center">
                  <p className="text-xl font-bold text-[#8DE3E8]">ISO</p>
                  <p className="text-xs text-white/70">ISO-certified quality standards</p>
                </div>
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-[#2CB6C4]/40 text-center">
                  <p className="text-xl font-bold text-[#8DE3E8]">FDA</p>
                  <p className="text-xs text-white/70">FDA registration / compliance</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-[0.98] apple-press"
                >
                  <span>Explore Quality &amp; Certificates</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#2CB6C4]/40 bg-white/5 backdrop-blur-sm group">
                <Image
                  src={IMAGES.home.cleanroomCompounding}
                  alt="Rawmin Skinology cleanroom manufacturing facility and stainless steel compounding"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: HOW WE WORK */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-[-0.03em] font-bold">
              How We Work With Your Brand
            </h2>
            <p className="mt-4 text-[#2C5256] text-base leading-relaxed font-normal">
              A transparent, five-step progression from initial concept to commercial dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Share Your Vision", desc: "Tell us your product idea, category, positioning, ingredients or benchmark product." },
              { num: "02", title: "Development & Sampling", desc: "Our team reviews your requirement and develops or selects a suitable formulation for sampling." },
              { num: "03", title: "Packaging & Artwork", desc: "Choose packaging formats and coordinate artwork and labelling requirements." },
              { num: "04", title: "Production & Quality", desc: "Once approved, the product moves into planned production with quality checkpoints." },
              { num: "05", title: "Dispatch", desc: "Finished products are packed and dispatched as per your requirements." },
            ].map((step) => (
              <div key={step.title} className="bg-white p-6 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#144246]">{step.title}</h3>
                  <p className="text-xs text-[#2C5256] mt-2 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TRUSTED BRANDS / OUR TRUSTED PARTNERS - Immediately Above FAQ */}
      <BrandPartnersSlider />

      {/* SECTION 14: FAQ */}
      <section id="faq" className="py-20 sm:py-24 bg-gradient-to-b from-[#E5F5F7] to-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl text-[#144246] tracking-[-0.03em] font-bold">
              Questions? We’ve Got You Covered.
            </h2>
            <p className="mt-3 text-[#2C5256] text-base font-normal">
              Practical answers to the most common questions about working with Rawmin Skinology.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl overflow-hidden border border-[#B2E8EB] transition-all shadow-2xs hover:border-[#2CB6C4]"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB6C4] min-h-[56px] apple-press"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "text-base sm:text-lg transition-colors",
                      isOpen ? "text-[#187580] font-bold" : "text-[#16393C] font-semibold"
                    )}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-colors",
                        isOpen ? "bg-[#2CB6C4] text-white" : "bg-[#DEF2F4] text-[#187580]"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#2C5256] leading-relaxed border-t border-[#B2E8EB]/40 font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION / INQUIRY */}
      <section id="inquiry" className="py-20 sm:py-24 turquoise-marble border-t border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#136B75] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-3.5 py-1.5 rounded-full inline-block">
                Start a Conversation
              </span>
              <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-[-0.03em] font-bold">
                Let’s Bring Your Product Idea to Market.
              </h2>
              <p className="text-[#2C5256] text-base leading-relaxed font-normal">
                Whether you are developing your first product or expanding an existing range, Rawmin Skinology has the people, processes and capabilities to move your idea forward.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#B2E8EB] text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#136B75] font-bold mb-0.5">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-[#16393C] font-bold hover:text-[#2CB6C4] transition-colors min-h-[44px] inline-flex items-center">
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#136B75] font-bold mb-1">Phone</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm">
                    <a
                      href="tel:+919910393383"
                      className="text-[#16393C] font-bold hover:text-[#2CB6C4] transition-colors min-h-[36px] inline-flex items-center gap-1.5"
                    >
                      <span>+91 99103 93383</span>
                    </a>
                    <span className="hidden sm:inline text-[#AEE6EA]">|</span>
                    <a
                      href="tel:+919311422855"
                      className="text-[#16393C] font-bold hover:text-[#2CB6C4] transition-colors min-h-[36px] inline-flex items-center gap-1.5"
                    >
                      <span>+91 93114 22855</span>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#136B75] font-bold mb-0.5">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SITE.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#16393C] font-bold hover:text-[#2CB6C4] transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {SITE.whatsapp}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#136B75] font-bold mb-0.5">Location</p>
                  <p className="text-xs text-[#2C5256] leading-relaxed">
                    {SITE.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
