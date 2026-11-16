import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Package,
  Layers,
  FlaskConical,
} from "lucide-react";
import {
  getAllProducts,
  getCategoryBySlug,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/product-catalog";
import BreadcrumbNav from "@/components/products/breadcrumb-nav";
import ProductEnquiryCta from "@/components/products/product-enquiry-cta";
import RelatedProducts from "@/components/products/related-products";
import ProductGallery from "@/components/products/product-gallery";
import { buildMetadata } from "@/lib/seo";

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((prod) => ({
    category: prod.categorySlug,
    product: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.category, resolvedParams.product);

  if (!product) {
    return {
      title: "Product Not Found | RAWMIN Skinology",
    };
  }

  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.categorySlug}/${product.slug}`,
    keywords: [
      product.name,
      `${product.name} manufacturer India`,
      `Private label ${product.name}`,
      `Custom ${product.name} formulation`,
      ...product.keyActives,
      product.categoryName,
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);
  const product = getProductBySlug(resolvedParams.category, resolvedParams.product);

  if (!category || !product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  // Schema.org Product structured data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://rawminskinology.com${product.image}`,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "RAWMIN Skinology",
    },
    category: product.categoryName,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "1.00",
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "RAWMIN Skinology Private Limited",
      },
    },
  };

  // Use single high-resolution product showcase image
  const galleryImages = [product.image];

  return (
    <div className="w-full bg-[#FBF9F5] min-h-screen text-[#121614]">
      {/* Product JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 01. Breadcrumb Navigation */}
      <div className="border-b border-[#B2E8EB]/40 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Products", href: "/products" },
              { label: category.name, href: `/products/${category.slug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* 02. Product Showcase Main Section */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-[#B2E8EB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Product Imagery Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <ProductGallery
                productName={product.name}
                categoryName={category.name}
                images={galleryImages}
              />
            </div>

            {/* Right: Product Technical & Formulation Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#136B75] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-3 py-1 rounded-full inline-block mb-3">
                  Custom Formulation &amp; Manufacturing
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#144246] leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
                  {product.detailedDescription}
                </p>
              </div>

              {/* CTA Row */}
              <div className="pt-2 pb-2">
                <ProductEnquiryCta
                  categoryName={category.name}
                  categorySlug={category.slug}
                  productName={product.name}
                  productSlug={product.slug}
                />
              </div>

              {/* Key Actives Section */}
              <div className="p-5 bg-white rounded-2xl border border-[#B2E8EB] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#144246]">
                  <Sparkles className="w-4 h-4 text-[#2CB6C4]" />
                  <span>Key Active Ingredients Available</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.keyActives.map((active) => (
                    <span
                      key={active}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF8F9] text-[#144246] text-xs font-mono font-medium border border-[#B2E8EB]/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4]" />
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formulation Possibilities */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-[#144246] flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-[#2CB6C4]" />
                  <span>Formulation Variations &amp; Customizations</span>
                </h2>
                <div className="space-y-2">
                  {product.formulationPossibilities.map((pos, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-[#B2E8EB]/70 flex items-start gap-2.5 text-xs sm:text-sm text-[#2C5256]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2CB6C4] shrink-0 mt-0.5" />
                      <span>{pos}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Textures and Packaging Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Available Textures */}
                <div className="p-4 bg-white rounded-2xl border border-[#B2E8EB] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#144246]">
                    <Layers className="w-4 h-4 text-[#2CB6C4]" />
                    <span>Textures &amp; Formats</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#2C5256]">
                    {product.texturesAndFormats.map((tex, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4]" />
                        <span>{tex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging Formats */}
                <div className="p-4 bg-white rounded-2xl border border-[#B2E8EB] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#144246]">
                    <Package className="w-4 h-4 text-[#2CB6C4]" />
                    <span>Packaging Options</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#2C5256]">
                    {product.packagingOptions.map((pkg, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4]" />
                        <span>{pkg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compliance & Claims */}
              <div className="p-4 bg-[#EDF8F9] rounded-2xl border border-[#B2E8EB] flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-[#144246] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#2CB6C4]" />
                  <span>Clean Beauty • Cruelty-Free • Paraben-Free • Dermatologist-Tested</span>
                </div>
                <Link
                  href="/quality"
                  className="text-[11px] font-mono text-[#136B75] hover:text-[#144246] underline uppercase tracking-wider"
                >
                  View Quality Certifications →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 03. Related Products Carousel/Grid */}
      <RelatedProducts
        products={relatedProducts}
        categoryName={category.name}
        categorySlug={category.slug}
      />
    </div>
  );
}
