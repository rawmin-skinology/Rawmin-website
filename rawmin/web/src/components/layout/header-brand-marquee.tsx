"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

// Exactly 19 verified brand partners in original order
const BRAND_LOGOS = [
  { id: "herbaush", name: "Herbaush", logo: IMAGES.brands.herbaush },
  { id: "amedria-labs", name: "Amedria Labs", logo: IMAGES.brands.amedriaLabs },
  { id: "mufasa-man", name: "Mufasa Man", logo: IMAGES.brands.mufasaMan },
  { id: "healthcon", name: "Healthcon", logo: IMAGES.brands.healthcon },
  { id: "la-arhea", name: "La Arhea", logo: IMAGES.brands.laArhea },
  { id: "groom-essence", name: "Groom Essence", logo: IMAGES.brands.groomEssence },
  { id: "la-vende", name: "La Vendé", logo: IMAGES.brands.laVende },
  { id: "dab-and-dew", name: "Dab & Dew", logo: IMAGES.brands.dabAndDew },
  { id: "amrisa-organics", name: "Amrisa Organics", logo: IMAGES.brands.amrisaOrganics },
  { id: "kohl-and-spice", name: "Kohl & Spice", logo: IMAGES.brands.kohlAndSpice },
  { id: "skinceutics", name: "Skin Ceutics", logo: IMAGES.brands.skinceutics },
  { id: "seranyx", name: "Seranyx", logo: IMAGES.brands.seranyx },
  { id: "skindulge", name: "Skindulge", logo: IMAGES.brands.skindulge },
  { id: "perr-cherry", name: "Perr Cherry", logo: IMAGES.brands.perrCherry },
  { id: "womenhood", name: "Womenhood", logo: IMAGES.brands.womenhood },
  { id: "121-glam", name: "#121-GLAM", logo: IMAGES.brands.glam121 },
  { id: "purearth", name: "Pūrearth", logo: IMAGES.brands.purearth },
  { id: "gnv-commodities", name: "GNV Commodities", logo: IMAGES.brands.gnvCommodities },
  { id: "loreal", name: "L’Oréal Paris", logo: IMAGES.brands.loreal },
];

export default function HeaderBrandMarquee() {
  return (
    <aside
      className="w-full bg-[#0D292D] border-b border-[#2CB6C4]/25 py-2 overflow-hidden select-none relative z-40"
      aria-label="Brand Partner Marquee"
    >
      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12">
        {/* Set 1 of 19 brand logos */}
        {BRAND_LOGOS.map((brand, idx) => (
          <div
            key={`marquee-1-${brand.id}-${idx}`}
            className="relative h-6 sm:h-7 w-20 sm:w-24 shrink-0 bg-white/95 rounded-md px-2 py-0.5 flex items-center justify-center shadow-xs"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain p-1"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
        ))}
        {/* Set 2 of 19 brand logos for seamless continuous loop */}
        {BRAND_LOGOS.map((brand, idx) => (
          <div
            key={`marquee-2-${brand.id}-${idx}`}
            className="relative h-6 sm:h-7 w-20 sm:w-24 shrink-0 bg-white/95 rounded-md px-2 py-0.5 flex items-center justify-center shadow-xs"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain p-1"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
