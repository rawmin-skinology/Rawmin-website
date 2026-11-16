import { IMAGES } from "@/lib/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FlaskConical, Microscope, ShieldCheck, Sparkles, Layers, Check } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Custom Cosmetic Formulation & Development | RAWMIN SKINOLOGY",
  description:
    "Custom cosmetic formulation built around your product idea. Rawmin Skinology helps brands develop bespoke formulations from brief and ingredient selection to testing, sampling, and manufacturing.",
  path: "/custom-cosmetics",
  keywords: [
    "Custom cosmetic formulation India",
    "Cosmetics product development",
    "Cosmetic bench chemistry",
    "Contract cosmetic formulation Faridabad",
  ],
});

export default function CustomCosmeticsPage() {
  return (
    <div className="w-full">
      {/* 01. Opening Section */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
              Custom Cosmetic Formulation Built Around Your Product Idea.
            </h1>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Rawmin helps brands develop custom cosmetic products around their product brief, target audience and formulation requirements.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              From ingredient selection and formulation development to testing, sampling and manufacturing, we support you from concept to finished product.
            </p>
            <div className="pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 apple-press cursor-pointer"
              >
                <span>Discuss Your Product Idea →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. What Is Custom Cosmetics? */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                A Formulation Built Around Your Product.
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p>
                  Custom cosmetics are developed around your specific product requirements rather than a fixed formulation.
                </p>
                <p>
                  Rawmin works with brands to define the ingredients, actives, texture, fragrance, format and performance of the product.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB]">
              <Image
                src={IMAGES.services.customFormulation}
                alt="Custom formulation chemistry in lab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. From Product Brief to Formulation */}
      <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              From Product Brief to Formulation.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Every custom product starts with a clear understanding of what the brand wants to create. Product requirements are translated into a formulation direction covering ingredients, actives, texture, fragrance and product format.
            </p>
          </div>

          {/* Flow representation */}
          <div className="p-8 bg-white rounded-3xl border border-[#B2E8EB] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-mono font-semibold text-[#144246]">
              <span className="px-4 py-2 bg-[#EDF8F9] rounded-xl border border-[#B2E8EB]">Brief</span>
              <span className="text-[#2CB6C4] font-bold">→</span>
              <span className="px-4 py-2 bg-[#EDF8F9] rounded-xl border border-[#B2E8EB]">Ingredients</span>
              <span className="text-[#2CB6C4] font-bold">→</span>
              <span className="px-4 py-2 bg-[#EDF8F9] rounded-xl border border-[#B2E8EB]">Formulation</span>
              <span className="text-[#2CB6C4] font-bold">→</span>
              <span className="px-4 py-2 bg-[#EDF8F9] rounded-xl border border-[#B2E8EB]">Testing</span>
              <span className="text-[#2CB6C4] font-bold">→</span>
              <span className="px-4 py-2 bg-[#EDF8F9] rounded-xl border border-[#B2E8EB]">Sample</span>
              <span className="text-[#2CB6C4] font-bold">→</span>
              <span className="px-4 py-2 bg-[#2CB6C4] text-white rounded-xl">Approval</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Research & Development */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] order-2 lg:order-1">
              <Image
                src={IMAGES.manufacturing.formulationTesting}
                alt="Formulation research and development testing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                Research That Shapes the Formula.
              </h2>
              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                Our R&amp;D process develops formulations around the intended product requirements, with attention to ingredients, formulation balance, texture and production feasibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Ingredient & Active Selection */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              The Right Ingredients for the Product.
            </h2>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Ingredient and active selection is a key part of formulation development. The formulation is built around your product concept and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 06. Stability & Testing */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                Tested for Stability and Consistency.
              </h2>
              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                Formulations go through appropriate testing and stability evaluation to check consistency and performance under controlled conditions.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB]">
              <Image
                src={IMAGES.quality.microbiologyTesting}
                alt="Stability and microbiological testing at Rawmin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Inquiry Section */}
      <section id="inquiry" className="py-20 sm:py-24 bg-[#F8FAF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
