import { IMAGES } from "@/lib/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Target, ShieldCheck, Microscope, Factory, Layers, Award } from "lucide-react";
import { ourStoryTimeline } from "@/data/company-content";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | RAWMIN SKINOLOGY - Cosmetic Manufacturing Partner",
  description:
    "Helping brands develop and manufacture their beauty and personal-care products. Learn about RAWMIN Skinology's vision, mission, capabilities, quality certifications, and journey from 2023 to today.",
  path: "/about",
  keywords: ["About RAWMIN Skinology", "Cosmetic manufacturer Faridabad", "Private label journey", "Cosmetic formulation partner India"],
});

const whatWeDoSteps = [
  {
    num: "01",
    title: "Formulation",
    desc: "Developing formulations around the product concept and requirements.",
  },
  {
    num: "02",
    title: "Product Development",
    desc: "Sampling, testing and refining the product before production.",
  },
  {
    num: "03",
    title: "Manufacturing",
    desc: "Taking approved formulations into production through controlled processes.",
  },
  {
    num: "04",
    title: "Finishing & Support",
    desc: "Supporting packaging, quality assurance, documentation and dispatch.",
  },
];

const capabilitiesList = [
  {
    title: "Custom Cosmetics",
    desc: "Product development tailored to your requirements.",
    link: "/custom-cosmetics",
  },
  {
    title: "Private Label",
    desc: "Ready formulations that can be launched under your brand.",
    link: "/private-label",
  },
  {
    title: "Research & Formulation",
    desc: "Formulation and product development support.",
    link: "/services",
  },
  {
    title: "Manufacturing",
    desc: "Controlled production of cosmetic and personal-care products.",
    link: "/quality",
  },
  {
    title: "Packaging Support",
    desc: "Guidance on packaging selection and product presentation.",
    link: "/services#packaging",
  },
  {
    title: "Quality Assurance",
    desc: "Quality-focused processes through development and production.",
    link: "/quality",
  },
  {
    title: "Regulatory Support",
    desc: "Documentation and guidance for product development and market readiness.",
    link: "/services#quality",
  },
  {
    title: "Export Support",
    desc: "Documentation and support for brands selling across markets.",
    link: "/services#export",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 01. Opening / Hero Section */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
              Helping Brands Develop and Manufacture Their Products
            </h1>
            <p className="text-lg sm:text-xl text-[#2C5256] leading-relaxed font-normal">
              Rawmin Skinology is a B2B cosmetic manufacturing and product development partner that helps brands turn ideas into market-ready beauty and personal-care products.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              From formulation and product development to manufacturing, quality assurance and packaging support, we cover every step from concept to finished product.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-[0.98] apple-press"
              >
                <span>Start a Conversation →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Who We Are */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                Your Product Development and Manufacturing Partner
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p className="text-lg font-medium text-[#136B75]">
                  Successful products start long before they reach the shelf.
                </p>
                <p>
                  They start with an idea, a sound formulation, the right ingredients, suitable packaging and a manufacturing process that ties it all together.
                </p>
                <p>
                  Founded in 2023, Rawmin Skinology was built to be a capable, quality-driven manufacturing partner for the beauty and personal-care industry.
                </p>
                <p>
                  Today, we work across multiple product categories, giving brands the expertise and infrastructure to develop and manufacture cosmetic and personal-care products.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] bg-stone-100">
              <Image
                src={IMAGES.about.facilityCompounding}
                alt="Rawmin Skinology product development and manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. Vision & Mission */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#0D292D] via-[#144246] to-[#0A2023] text-white border-y border-[#2CB6C4]/30 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-light font-heading text-white tracking-tight">
              Purpose That Guides Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2CB6C4]/20 text-[#8DE3E8] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#8DE3E8] font-bold">
                  Our Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  A Trusted Partner for Every Beauty Brand.
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-normal">
                  To be a trusted, forward-looking partner for beauty and personal-care brands, helping new product ideas reach the market with quality, consistency and care.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={IMAGES.about.labScientist}
                    alt="R&D cosmetic formulation chemist in lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B89A60]/20 text-[#FFE494] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#FFE494] font-bold">
                  Our Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Turning Ideas Into Reliable, Market-Ready Products.
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-normal">
                  Our mission is to support brands with sound formulation, product development, quality-focused manufacturing and dependable service, creating products that meet market needs and building long-term partnerships.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={IMAGES.about.cleanroomVessels}
                    alt="Stainless steel compounding vessels in cleanroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. What We Do */}
      <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-tight font-bold">
              From Concept to Finished Product
            </h2>
            <p className="mt-3 text-lg font-medium text-[#136B75]">
              Our role goes beyond manufacturing.
            </p>
            <p className="mt-2 text-[#2C5256] text-base leading-relaxed font-normal">
              We support brands at each stage of product development, turning an initial concept into a finished product that is ready for the market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoSteps.map((step) => (
              <div key={step.title} className="bg-white p-6 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#144246]">{step.title}</h3>
                  <p className="text-sm text-[#2C5256] mt-2 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Our Approach */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#E2F5F7] via-[#EDF8F9] to-[#D8F1F4] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-tight font-bold">
              Built Around What Your Brand Needs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Every brand has a different vision, audience and product requirement. That is why we start by understanding the product first, then align formulation, development, manufacturing and support around it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#B2E8EB] shadow-sm space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#2CB6C4]/15 text-[#136B75] text-xs font-mono font-bold uppercase tracking-wider">
                Step 01
              </span>
              <h3 className="text-2xl font-bold text-[#144246] tracking-tight">UNDERSTAND</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                We start with your product concept, requirements and target market.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#B2E8EB] shadow-sm space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#2CB6C4]/15 text-[#136B75] text-xs font-mono font-bold uppercase tracking-wider">
                Step 02
              </span>
              <h3 className="text-2xl font-bold text-[#144246] tracking-tight">DEVELOP</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                Our formulation and development process turns the concept into a real product through sampling and refinement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#B2E8EB] shadow-sm space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#2CB6C4]/15 text-[#136B75] text-xs font-mono font-bold uppercase tracking-wider">
                Step 03
              </span>
              <h3 className="text-2xl font-bold text-[#144246] tracking-tight">DELIVER</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                Once approved, the product moves into manufacturing, quality checks, packaging support and dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Our Capabilities */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-tight font-bold">
              What We Can Do for Your Brand
            </h2>
            <p className="mt-3 text-[#2C5256] text-base leading-relaxed font-normal">
              Comprehensive end-to-end support spanning research, production, quality and global readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilitiesList.map((cap) => (
              <div key={cap.title} className="bg-[#F8FAF9] p-6 rounded-2xl border border-[#B2E8EB] flex flex-col justify-between hover:border-[#2CB6C4] transition group">
                <div>
                  <h3 className="text-base font-bold text-[#144246] group-hover:text-[#2CB6C4] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#2C5256] mt-2 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-4 mt-2">
                  <Link href={cap.link} className="text-xs font-semibold text-[#187580] hover:text-[#2CB6C4] inline-flex items-center gap-1">
                    <span>Learn More →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Our Manufacturing Mindset */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                Precision at Every Stage.
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p className="text-lg font-medium text-[#136B75]">
                  Quality is not something added at the end of manufacturing.
                </p>
                <p>
                  It is built into every stage, from formulation and raw-material selection to production, quality checks and dispatch.
                </p>
                <p>
                  Our processes are designed to keep every batch consistent and reliable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] bg-stone-100">
              <Image
                src={IMAGES.manufacturing.stainlessMixingTanks}
                alt="Controlled cosmetic compounding vessels at Rawmin Skinology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 08. Quality & Certifications */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl text-[#144246] leading-tight tracking-tight font-bold">
              Quality You Can Verify.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Our manufacturing approach follows recognised quality and regulatory standards, helping us stay consistent through product development and production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#B2E8EB] text-center space-y-2 shadow-xs">
              <span className="text-2xl font-bold font-mono text-[#2CB6C4]">GMP</span>
              <p className="text-sm font-semibold text-[#144246]">Good Manufacturing Practices</p>
              <p className="text-xs text-[#2C5256]">Controlled production environments and strict sanitary protocols.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#B2E8EB] text-center space-y-2 shadow-xs">
              <span className="text-2xl font-bold font-mono text-[#2CB6C4]">ISO</span>
              <p className="text-sm font-semibold text-[#144246]">ISO-Certified Quality Standards</p>
              <p className="text-xs text-[#2C5256]">Certified quality management systems ensuring consistent repeatability.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-[#B2E8EB] text-center space-y-2 shadow-xs">
              <span className="text-2xl font-bold font-mono text-[#2CB6C4]">FDA</span>
              <p className="text-sm font-semibold text-[#144246]">FDA Registration / Compliance</p>
              <p className="text-xs text-[#2C5256]">Regulatory compliance and safety standards for domestic and export goods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 09. Our Journey (2023 to Today) */}
      <section id="journey" className="py-20 sm:py-24 bg-[#F7F5EE] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              From 2023 to Today
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal">
              The evolution of Rawmin Skinology into a full-scale cosmetic manufacturing partner.
            </p>
          </div>

          <div className="space-y-14">
            {ourStoryTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#B2E8EB] rounded-3xl p-6 sm:p-10 shadow-sm"
                >
                  <div className={`lg:col-span-5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={`${item.year}: ${item.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-7 space-y-3 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                    <div className="inline-block font-mono text-3xl sm:text-4xl font-bold text-[#2CB6C4]">
                      {item.year}
                    </div>
                    <span className="block text-xs font-mono uppercase tracking-widest text-[#B89A60] font-semibold">
                      {item.title}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#144246] tracking-tight">
                      {item.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2C5256] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Closing Statement */}
      <section className="py-20 sm:py-24 bg-[#2CB6C4] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Let’s Bring Your Product Idea to Market
          </h2>
          <p className="text-base sm:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed">
            Whether you are developing your first product or expanding an existing range, Rawmin Skinology has the people, processes and capabilities to move your idea forward.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#144246] px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-stone-100 transition shadow-lg active:scale-95"
            >
              <span>Start a Conversation →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
