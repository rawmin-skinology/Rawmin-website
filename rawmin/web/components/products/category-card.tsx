"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCategory } from "@/data/product-catalog";

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#B2E8EB] shadow-xs hover:border-[#2CB6C4] hover:shadow-[0_20px_40px_-12px_rgba(20,66,70,0.14)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB6C4] focus-visible:ring-offset-2"
    >
      {/* Category Image with Subtle Depth */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EB]" data-reveal="image">
        <Image
          src={category.image}
          alt={category.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#144246]/45 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div className="space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-bold text-[#144246] tracking-tight group-hover:text-[#2CB6C4] transition-colors duration-200">
            {category.name}
          </h2>
          <p className="text-sm text-[#2C5256] leading-relaxed line-clamp-3 font-normal">
            {category.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="mt-6 pt-4 border-t border-[#B2E8EB]/50 flex items-center justify-between text-[#136B75] group-hover:text-[#144246] transition-colors duration-200">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
            Explore Formulations
          </span>
          <span className="w-8 h-8 rounded-full bg-[#EDF8F9] group-hover:bg-[#2CB6C4] group-hover:text-white flex items-center justify-center transition-all duration-200 ease-out transform group-hover:translate-x-1 shadow-xs">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
