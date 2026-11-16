"use client";

import React from "react";
import Image from "next/image";

interface ProductGalleryProps {
  productName: string;
  categoryName?: string;
  images: string[];
}

export default function ProductGallery({
  productName,
  images,
}: ProductGalleryProps) {
  const mainImage = images && images.length > 0 ? images[0] : "/images/products/categories/skin-care.jpg";

  return (
    <div className="w-full">
      {/* High-Resolution Main Product Showcase (No category overlay, no thumbnails, no counters) */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#EDF5F6] border border-[#B2E8EB] shadow-lg group">
        <Image
          src={mainImage}
          alt={productName}
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
}
