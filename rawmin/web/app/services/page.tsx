import { IMAGES } from "@/lib/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FlaskConical, Package, ShieldCheck, Globe, Sparkles, Check, Layers, Factory } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | RAWMIN SKINOLOGY - Formulation, Packaging & Manufacturing",
  description:
    "From ready formulations to fully custom products, explore RAWMIN Skinology's services: Custom Cosmetics, Private Label, Product Development, Packaging Support, Quality & Regulatory, and Export Support.",
  path: "/services",
  keywords: ["Custom cosmetic formulation", "Private label skincare manufacturing", "Cosmetic packaging India", "Export cosmetic manufacturing"],
});

const steps = [
  { num: "01", title: "Brief", desc: "Understand your product, brand and requirements." },
  { num: "02", title: "Formulation", desc: "Select or develop the right formulation direction." },
  { num: "03", title: "Sampling", desc: "Prepare samples for review and refinement." },
  { num: "04", title: "Packaging", desc: "Select packaging and finalise the presentation." },
  { num: "05", title: "Approval", desc: "Confirm formulation, packaging and production specifications." },
  { num: "06", title: "Manufacturing", desc: "Move the approved product into production." },
  { num: "07", title: "Dispatch", desc: "Prepare finished products for delivery." },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* 01. Opening Section */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
              Formulation, Packaging and Manufacturing Services
            </h1>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              From ready formulations to fully custom products, Rawmin Skinology supports beauty and personal-care brands across product development and manufacturing.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              Our services combine formulation support, ingredient sourcing, packaging assistance, quality processes and manufacturing to take brands from product brief to market-ready production.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 apple-press"
              >
                <span>Start a Conversation →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Two Ways to Build */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Two Ways to Start Your Product
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Every brand starts differently. Some need a proven formulation adapted to their identity. Others start with an idea that must be developed from scratch. Rawmin supports both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 01 — Private Label */}
            <div className="bg-[#F8FAF9] p-8 sm:p-10 rounded-3xl border border-[#B2E8EB] flex flex-col justify-between shadow-xs hover:border-[#2CB6C4] transition group">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75]">
                  Private Label Manufacturing
                </span>
                <h3 className="text-2xl font-bold text-[#144246] group-hover:text-[#2CB6C4] transition-colors">
                  Launch an Established Formulation Under Your Brand
                </h3>
                <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                  Choose from existing formulations and develop them around your brand requirements. Formulations can be adapted through ingredients, actives, fragrance, colour, texture and packaging.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#B2E8EB]/50">
                <Link
                  href="/private-label"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#187580] hover:text-[#2CB6C4]"
                >
                  <span>Explore Private Label →</span>
                </Link>
              </div>
            </div>

            {/* 02 — Custom Cosmetics */}
            <div className="bg-[#F8FAF9] p-8 sm:p-10 rounded-3xl border border-[#B2E8EB] flex flex-col justify-between shadow-xs hover:border-[#2CB6C4] transition group">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75]">
                  Custom Cosmetics
                </span>
                <h3 className="text-2xl font-bold text-[#144246] group-hover:text-[#2CB6C4] transition-colors">
                  Develop a New Product Around Your Idea
                </h3>
                <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                  When your product needs a specific direction, we work from your brief to develop a formulation that matches your positioning, ingredients, texture, performance and packaging.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#B2E8EB]/50">
                <Link
                  href="/custom-cosmetics"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#187580] hover:text-[#2CB6C4]"
                >
                  <span>Explore Custom Cosmetics →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Product Development */}
      <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                From Product Brief to Market-Ready Production.
              </h2>
              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                A successful product starts with a clear understanding of what it needs to achieve. Rawmin supports brands through product requirements, formulation development, sampling, refinement and production planning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  "Product brief evaluation",
                  "Formulation development",
                  "Ingredient selection",
                  "Texture and sensory development",
                  "Sample preparation",
                  "Product refinement",
                  "Production planning",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#16393C]">
                    <Check className="w-4 h-4 text-[#2CB6C4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#B2E8EB]">
              <Image
                src={IMAGES.services.customFormulation}
                alt="Product development and lab sampling at Rawmin Skinology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04. Research & Formulation */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              Formulation Built Around the Product.
            </h2>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Our formulation approach combines ingredient knowledge, product requirements and manufacturing feasibility.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              Whether it is an everyday personal-care product or an active-led formulation, the aim is a product that moves smoothly from development into consistent production.
            </p>
          </div>
        </div>
      </section>

      {/* 05. Packaging Support */}
      <section id="packaging" className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                The Product Is More Than the Formula.
              </h2>
              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                Rawmin helps brands choose packaging formats that suit the product, brand positioning and production requirements.
              </p>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-[#136B75] font-semibold mb-3">
                  Packaging support can include:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-[#136B75]">
                  {["Bottles", "Jars", "Tubes", "Airless Pumps", "Sachets", "Cartons", "Labels", "Printing"].map((fmt, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#B2E8EB] shadow-2xs">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#B2E8EB]">
              <Image
                src={IMAGES.services.packagingSupport}
                alt="Packaging support, bottles, jars, and cartons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 06. Manufacturing */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#B2E8EB] order-2 lg:order-1">
              <Image
                src={IMAGES.services.contractManufacturing}
                alt="Controlled cosmetic production and filling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                From Formulation to Finished Product.
              </h2>
              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                Once formulation and packaging are approved, Rawmin moves the product into controlled production.
              </p>
              <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
                Our workflow covers production, filling, packing and preparation of finished products to the agreed specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Quality & Regulatory Support */}
      <section id="quality" className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              Consistent Quality Backed by Documented Processes
            </h2>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Quality is considered throughout manufacturing, from formulation and raw materials to production and finished products.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              Rawmin follows quality and manufacturing standards designed to support reliable production for our brand partners.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="px-4 py-2 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75]">
                GMP
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75]">
                ISO
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75]">
                FDA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 08. Export & Documentation */}
      <section id="export" className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              Prepared for Indian and Global Markets.
            </h2>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              For brands preparing for markets beyond India, Rawmin supports the manufacturing and documentation requirements linked to production and export, including COA, specifications and MSDS.
            </p>
          </div>
        </div>
      </section>

      {/* 09. How We Work (Our Step-by-Step Process) */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Our Step-by-Step Process
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal">
              Seven clear steps from initial concept brief to commercial dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((st) => (
              <div key={st.title} className="bg-white p-5 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#144246]">{st.title}</h3>
                  <p className="text-xs text-[#2C5256] mt-1.5 leading-relaxed font-normal">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why Brands Work With Rawmin */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Complete Support From Brief to Dispatch
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Instead of coordinating separate teams for formulation, packaging and manufacturing, brands work with one partner that brings these capabilities together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Formulation", desc: "Product development and formulation support." },
              { title: "Sourcing", desc: "Ingredient and packaging sourcing support." },
              { title: "Production", desc: "Manufacturing, filling and packing." },
              { title: "Quality", desc: "Quality-focused production processes." },
              { title: "Packaging", desc: "Packaging formats and presentation support." },
            ].map((col, idx) => (
              <div key={idx} className="bg-[#F8FAF9] p-6 rounded-2xl border border-[#B2E8EB] shadow-xs">
                <h3 className="text-base font-bold text-[#144246]">{col.title}</h3>
                <p className="text-xs text-[#2C5256] mt-2 leading-relaxed font-normal">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-20 sm:py-24 bg-[#2CB6C4] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Have a Product in Mind?
          </h2>
          <p className="text-base sm:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed">
            Whether you need a proven formulation or want to develop something completely new, let’s discuss what you are building.
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
