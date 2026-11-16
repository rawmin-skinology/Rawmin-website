import { IMAGES } from "@/lib/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Package, ShieldCheck, Layers, FlaskConical, FileText, Check, Zap, Sparkles } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Private Label Cosmetic Manufacturing | RAWMIN SKINOLOGY",
  description:
    "Bring your beauty brand to market with established formulations adapted to your requirements. Explore RAWMIN Skinology's private label skincare, haircare, and personal-care manufacturing in India.",
  path: "/private-label",
  keywords: [
    "Private label cosmetic manufacturer India",
    "Private label skincare manufacturing",
    "Contract cosmetic manufacturer Faridabad",
    "Private label hair care manufacturer",
    "B2B cosmetics manufacturing India",
  ],
});

const plCategories = [
  { num: "01", name: "Skin Care & Skin Protection", desc: "Products for everyday skin care and skin protection." },
  { num: "02", name: "Skin Cleansers", desc: "Cleansing formats for different skin-care routines." },
  { num: "03", name: "Hair Care & Hair Protection", desc: "Products for everyday hair care and hair protection." },
  { num: "04", name: "Hair Cleansers", desc: "Shampoo and cleansing formats for hair-care ranges." },
  { num: "05", name: "Body Care", desc: "Body cleansers, oils, lotions, scrubs and body butters." },
  { num: "06", name: "Lip Care", desc: "Lip balms, oils, scrubs, masks and butters." },
  { num: "07", name: "Bath & Shower", desc: "Bath and shower cleansing and personal-care formats." },
  { num: "09", name: "Men’s Grooming", desc: "Grooming formats for men’s skin and hair care." },
  { num: "10", name: "Baby Care", desc: "Gentle baby-care formats for everyday use." },
];

const plSteps = [
  { num: "01", title: "Product Selection", desc: "Choose the formulation that fits your brand requirements." },
  { num: "02", title: "Customisation", desc: "Discuss changes to ingredients, actives, fragrance, colour, texture or other product characteristics." },
  { num: "03", title: "Sampling", desc: "Samples are prepared for evaluation and refinement." },
  { num: "04", title: "Packaging", desc: "Select suitable packaging formats and presentation components." },
  { num: "05", title: "Approval", desc: "Confirm the agreed formulation, packaging and production specifications." },
  { num: "06", title: "Manufacturing", desc: "The approved product moves into manufacturing and packing." },
  { num: "07", title: "Dispatch", desc: "Finished products are prepared for delivery." },
];

export default function PrivateLabelPage() {
  return (
    <div className="w-full">
      {/* 01. Opening Section */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
              Private Label Skincare &amp; Personal Care, Made for Your Brand.
            </h1>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              Bring your beauty brand to market with established formulations adapted to your requirements.
            </p>
            <p className="text-sm sm:text-base text-[#2C5256]/80 leading-relaxed font-normal">
              Rawmin Skinology supports private label skincare, haircare and personal-care products, from formulation selection and customisation to packaging and manufacturing in India.
            </p>
            <div className="pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 apple-press cursor-pointer"
              >
                <span>Discuss Your Project →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. What Is Private Label Manufacturing? */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                A Proven Formulation Under Your Brand Name
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p>
                  Private label manufacturing lets brands select an established formulation and launch it under their own brand.
                </p>
                <p>
                  Instead of developing every product from scratch, you start with a proven formulation and customise selected aspects to your requirements. This can include ingredients, active ingredients, fragrance, colour, texture and packaging.
                </p>
              </div>

              {/* Formulation Progression Flow */}
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-[#144246]">
                  <span className="px-3 py-1.5 bg-[#EDF8F9] rounded-lg border border-[#B2E8EB]">Existing Formulation</span>
                  <span className="text-[#2CB6C4]">→</span>
                  <span className="px-3 py-1.5 bg-[#EDF8F9] rounded-lg border border-[#B2E8EB]">Your Requirements</span>
                  <span className="text-[#2CB6C4]">→</span>
                  <span className="px-3 py-1.5 bg-[#EDF8F9] rounded-lg border border-[#B2E8EB]">Customisation</span>
                  <span className="text-[#2CB6C4]">→</span>
                  <span className="px-3 py-1.5 bg-[#EDF8F9] rounded-lg border border-[#B2E8EB]">Your Packaging</span>
                  <span className="text-[#2CB6C4]">→</span>
                  <span className="px-3 py-1.5 bg-[#2CB6C4] text-white rounded-lg">Finished Product</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB]">
              <Image
                src={IMAGES.services.privateLabel}
                alt="Private label cosmetics bottles and packaging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. Why Choose Private Label? */}
      <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              A Faster Way to Build Your Product Range
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Private label gives brands a practical way to build a product range without developing every formulation from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Established Formulation", desc: "Begin with an existing formulation instead of starting at zero." },
              { num: "02", title: "Product Customisation", desc: "Adapt selected product characteristics to suit your brand." },
              { num: "03", title: "Flexible Packaging", desc: "Choose packaging formats that fit your product and brand presentation." },
              { num: "04", title: "Manufacturing Support", desc: "Move from approved formulation and packaging into production with one manufacturing partner." },
            ].map((col) => (
              <div key={col.title} className="bg-white p-6 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#144246]">{col.title}</h3>
                  <p className="text-sm text-[#2C5256] mt-2 leading-relaxed font-normal">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. What Can You Customise? */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Customise the Product to Suit Your Brand
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Private label does not have to mean identical. Depending on the product, selected formulation and presentation elements can be adapted so the product reflects your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ingredients", desc: "Select suitable ingredients based on the product brief." },
              { title: "Active Ingredients", desc: "Build the formulation around selected actives and product positioning." },
              { title: "Fragrance", desc: "Explore fragrance options suited to the product." },
              { title: "Colour", desc: "Develop the desired visual appearance where applicable." },
              { title: "Texture", desc: "Refine the sensory feel of the product." },
              { title: "Packaging", desc: "Select the bottle, jar, tube, pump, carton and other packaging components." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAF9] p-6 rounded-2xl border border-[#B2E8EB] shadow-2xs">
                <h3 className="text-lg font-bold text-[#144246]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#2C5256] mt-2 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Product Categories */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Choose Your Products and Build Your Range
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal leading-relaxed">
              Our private label range covers skincare, haircare and personal-care categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {plCategories.map((cat) => (
              <div key={cat.name} className="bg-white p-5 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#144246]">{cat.name}</h3>
                  <p className="text-xs text-[#2C5256] mt-1.5 leading-relaxed font-normal">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. How Private Label Works */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              Seven Steps From Selection to Dispatch
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#2C5256] font-normal">
              A transparent, proven flow to take your private label product to market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {plSteps.map((st) => (
              <div key={st.title} className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#B2E8EB] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#144246]">{st.title}</h3>
                  <p className="text-xs text-[#2C5256] mt-1.5 leading-relaxed font-normal">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Packaging Options */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                Packaging That Suits Your Product and Brand
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p>
                  Packaging plays a key role in how a finished product is presented.
                </p>
                <p>
                  Rawmin supports brands with a range of packaging formats and components, depending on product requirements and availability.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-[#136B75] font-semibold mb-3">
                  Packaging formats include:
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

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB]">
              <Image
                src={IMAGES.labels.packagingBottles}
                alt="Cosmetic private label bottles, jars, and packaging options"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 08. Manufacturing */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] order-2 lg:order-1">
              <Image
                src={IMAGES.labels.cleanroomBottling}
                alt="Cleanroom cosmetic bottling and manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
                We Manufacture Your Approved Product
              </h2>
              <div className="space-y-4 text-[#2C5256] text-base leading-relaxed font-normal">
                <p>
                  Once formulation and packaging are approved, the product moves into production.
                </p>
                <p>
                  Rawmin takes your product from approved formulation to finished, packaged goods through our manufacturing capabilities in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09. Quality & Certifications */}
      <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              Quality Considered Throughout the Process.
            </h2>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
              From formulation and raw materials to manufacturing and finished-product preparation, quality remains part of every stage of production.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="px-5 py-2.5 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75] shadow-2xs">
                GMP
              </span>
              <span className="px-5 py-2.5 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75] shadow-2xs">
                ISO
              </span>
              <span className="px-5 py-2.5 rounded-xl bg-white border border-[#B2E8EB] font-bold text-[#136B75] shadow-2xs">
                FDA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 sm:py-24 bg-[#EDF8F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
