"use client";

import React from "react";
import Image from "next/image";

interface ProductsHeroBannerProps {
  src?: string;
  alt?: string;
}

export default function ProductsHeroBanner({
  src = "/images/products/product-lineup-flatlay-official.jpg?v=5",
  alt = "RAWMIN Skinology beauty & personal-care formulation lineup catalogue",
}: ProductsHeroBannerProps) {
  return (
    <div
      data-reveal="image"
      className="mt-10 sm:mt-12 rounded-3xl overflow-hidden shadow-xl border border-[#B2E8EB] bg-white p-3 sm:p-5 md:p-6 w-full max-w-5xl mx-auto group transition-shadow duration-500 hover:shadow-2xl"
    >
      {/* 
        Aspect ratio matches 1024 / 480 precisely (2.133 : 1),
        ensuring the cosmetic lineup photo fits edge-to-edge inside the box with zero unwanted bars or crop.
      */}
      <div className="relative w-full aspect-[2.133/1] min-h-[200px] sm:min-h-[300px] md:min-h-[380px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5F2EB] to-[#EAE6DD]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          unoptimized
          sizes="(max-width: 1200px) 100vw, 1024px"
          className="object-cover object-center w-full h-full group-hover:scale-[1.015] transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
}
