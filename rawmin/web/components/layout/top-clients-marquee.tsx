"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const CLIENT_BRANDS = [
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

export default function TopClientsMarquee() {
  return (
    <div
      className="relative z-50 w-full bg-[#0D292D] text-white border-b border-[#2CB6C4]/35 py-2 sm:py-2.5 overflow-hidden select-none"
      aria-label="Trusted Brand Partners"
    >
      <div className="flex items-center">
        {/* Fixed Title Label on the Left */}
        <div className="shrink-0 pl-3 sm:pl-4 pr-3 py-0.5 bg-[#0D292D] z-10 border-r border-[#2CB6C4]/30 hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2CB6C4] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8DE3E8] whitespace-nowrap">
            Trusted Brand Partners
          </span>
        </div>

        {/* Continuous Smooth Infinite Marquee */}
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
            {/* First Set of Brands */}
            {CLIENT_BRANDS.map((b) => (
              <div key={b.id} className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={28}
                    height={28}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <span className="text-xs font-semibold text-white/95 tracking-wide">
                  {b.name}
                </span>
                <span className="text-[#2CB6C4]/60 mx-1">✦</span>
              </div>
            ))}

            {/* Duplicated for Seamless Infinite Loop */}
            {CLIENT_BRANDS.map((b) => (
              <div key={`dup-${b.id}`} className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={28}
                    height={28}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <span className="text-xs font-semibold text-white/95 tracking-wide">
                  {b.name}
                </span>
                <span className="text-[#2CB6C4]/60 mx-1">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

