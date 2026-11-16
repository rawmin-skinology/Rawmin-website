import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductItem } from "@/data/product-catalog";
import ProductCard from "./product-card";

interface RelatedProductsProps {
  products: ProductItem[];
  categoryName: string;
  categorySlug: string;
}

export default function RelatedProducts({
  products,
  categoryName,
  categorySlug,
}: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 border-t border-[#B2E8EB]/50 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#136B75] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-3 py-1 rounded-full inline-block mb-3">
              Complementary Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#144246]">
              Related {categoryName} Products
            </h2>
          </div>
          <Link
            href={`/products/${categorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#136B75] hover:text-[#144246] transition-colors group"
          >
            <span>View All In {categoryName}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

