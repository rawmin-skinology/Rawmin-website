"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductItem } from "@/data/product-catalog";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#B2E8EB] shadow-xs hover:border-[#2CB6C4] hover:shadow-[0_20px_40px_-12px_rgba(20,66,70,0.14)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB6C4] focus-visible:ring-offset-2"
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#EDF5F6]" data-reveal="image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#136B75] font-semibold block">
              {product.categoryName}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#144246] tracking-tight group-hover:text-[#2CB6C4] transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#2C5256] leading-relaxed line-clamp-2 font-normal">
            {product.shortDescription}
          </p>

          {/* Key Actives Pills */}
          {product.keyActives && product.keyActives.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {product.keyActives.slice(0, 3).map((active) => (
                <span
                  key={active}
                  className="inline-block text-[10px] font-mono bg-[#EDF8F9] text-[#144246] px-2 py-0.5 rounded-md border border-[#B2E8EB]/60 font-medium"
                >
                  {active}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-3.5 border-t border-[#B2E8EB]/50 flex items-center justify-between text-[#136B75] group-hover:text-[#144246] transition-colors duration-200">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
            View Formulation
          </span>
          <span className="w-7 h-7 rounded-full bg-[#EDF8F9] group-hover:bg-[#2CB6C4] group-hover:text-white flex items-center justify-center transition-all duration-200 ease-out transform group-hover:translate-x-1 shadow-xs">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
