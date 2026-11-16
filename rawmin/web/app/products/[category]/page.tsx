import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import {
  PRODUCT_CATEGORIES,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/product-catalog";
import ProductCard from "@/components/products/product-card";
import BreadcrumbNav from "@/components/products/breadcrumb-nav";
import { buildMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    return {
      title: "Category Not Found | RAWMIN Skinology",
    };
  }

  return buildMetadata({
    title: `${category.name} Formulations & Contract Manufacturing | RAWMIN`,
    description: category.shortDescription,
    path: `/products/${category.slug}`,
    keywords: [
      category.name,
      `${category.name} manufacturer India`,
      `Private label ${category.name}`,
      `Custom ${category.name} formulation`,
      ...category.highlights,
    ],
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="w-full bg-[#FBF9F5] min-h-screen text-[#121614]">
      {/* 01. Breadcrumb Navigation */}
      <div className="border-b border-[#B2E8EB]/40 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Products", href: "/products" },
              { label: category.name },
            ]}
          />
        </div>
      </div>

      {/* 02. Category Header / Editorial Hero */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#B2E8EB]/50 bg-gradient-to-b from-white to-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246] leading-tight">
                {category.name}
              </h1>

              <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                {category.detailedDescription}
              </p>

              {/* Category Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#144246]">
                    <CheckCircle2 className="w-4 h-4 text-[#2CB6C4] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?category=${encodeURIComponent(category.name)}&req=${encodeURIComponent(
                    `Enquiry for ${category.name} formulations`
                  )}#inquiry-section`}
                  className="inline-flex items-center gap-2 bg-[#144246] hover:bg-[#1B575D] text-white px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Enquire for {category.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#2CB6C4]" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#136B75] hover:text-[#144246] font-semibold transition-colors"
                >
                  <span>&larr; Back to All Categories</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] aspect-[4/3] bg-[#F5F2EB] group" data-reveal="image">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Product Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#144246]">
              All {category.name} Formulations
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" data-reveal="stagger">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. Bottom Category Navigation */}
      <section className="py-16 border-t border-[#B2E8EB]/60 bg-[#EDF8F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-[#144246] mb-6">
            Other Product Categories
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.id}
                href={`/products/${c.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#B2E8EB] text-xs font-mono uppercase tracking-wider text-[#144246] hover:bg-[#2CB6C4] hover:text-white hover:border-[#2CB6C4] transition-all duration-300 shadow-2xs"
              >
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

