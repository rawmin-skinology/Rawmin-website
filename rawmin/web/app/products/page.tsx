import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/product-catalog";
import CategoryCard from "@/components/products/category-card";
import ProductsHeroBanner from "@/components/products/products-hero-banner";
import BreadcrumbNav from "@/components/products/breadcrumb-nav";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Beauty & Personal-Care Product Range | RAWMIN SKINOLOGY",
  description:
    "Explore our range of cosmetic and personal-care formulations. Choose from our existing product categories or work with our team to develop a formulation tailored to your brand.",
  path: "/products",
  keywords: [
    "Beauty product range",
    "Personal-care formulations",
    "Cosmetic contract manufacturer India",
    "Private label skincare formulations",
    "B2B cosmetic catalogue",
  ],
});

export default function ProductsPage() {
  return (
    <div className="w-full bg-[#FBF9F5] min-h-screen text-[#121614]">
      {/* 01. Breadcrumb Navigation */}
      <div className="border-b border-[#B2E8EB]/40 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ label: "Products" }]} />
        </div>
      </div>

      {/* 02. Page Header / Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#B2E8EB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
              Our Beauty &amp; Personal-Care Product Range
            </h1>
            <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal pt-1">
              Explore our range of cosmetic and personal-care formulations. Choose from our existing product categories or work with our team to develop a formulation tailored to your brand.
            </p>
          </div>

          {/* Full Lineup Presentation Banner (Edge-to-edge authentic ratio fit) */}
          <ProductsHeroBanner
            src="/images/products/product-lineup.png"
            alt="RAWMIN Skinology beauty & personal-care formulation lineup catalogue"
          />
        </div>
      </section>

      {/* 03. 7 Main Categories Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#144246]">
              Explore By Category
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#2C5256] max-w-2xl">
              Browse through our 7 specialized formulation categories. Each category features proven base formulations, custom active infusions, and scalable batch compounding.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal="stagger">
            {PRODUCT_CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. B2B Manufacturing Capabilities Banner */}
      <section className="py-16 bg-[#EDF8F9] border-y border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-6 bg-white rounded-2xl border border-[#B2E8EB]/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF8F9] text-[#144246] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#2CB6C4]" />
              </div>
              <h3 className="text-lg font-bold text-[#144246]">Regulatory &amp; Testing</h3>
              <p className="text-xs text-[#2C5256] leading-relaxed">
                Full microbial challenge, 3-month accelerated stability, patch testing, and global export compliance (EU, US FDA, ASEAN).
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#B2E8EB]/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF8F9] text-[#144246] flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#2CB6C4]" />
              </div>
              <h3 className="text-lg font-bold text-[#144246]">Low MOQ to Commercial</h3>
              <p className="text-xs text-[#2C5256] leading-relaxed">
                Pilot production batches starting at 1,000 units for emerging beauty brands up to multi-ton automated commercial compounding.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#B2E8EB]/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF8F9] text-[#144246] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#2CB6C4]" />
              </div>
              <h3 className="text-lg font-bold text-[#144246]">Custom Formulation</h3>
              <p className="text-xs text-[#2C5256] leading-relaxed">
                Work directly with our cosmetic chemists to benchmark textures, source hero active ingredients, and optimize skin-feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Bottom Call to Action */}
      <section className="py-20 sm:py-24 bg-[#144246] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2CB6C4] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-4 py-1.5 rounded-full inline-block">
            Start Your Product Line
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Need a Custom Formulation for Your Brand?
          </h2>
          <p className="text-base sm:text-lg text-[#FBF9F5]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Our cosmetic scientists and cleanroom facility are ready to formulate, test, package, and manufacture your brand’s next breakthrough product.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#inquiry-section"
              data-open-inquiry
              className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-[#144246] px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Discuss Your Formulation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/custom-cosmetics"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300"
            >
              <span>Our Formulation Process</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
