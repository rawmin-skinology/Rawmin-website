import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import { conceptToFinishSteps } from "@/data/company-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Concept-to-Finish Process: From Idea to Finished Product",
  description:
    "Explore RAWMIN Skinology's 7-stage manufacturing process: from initial vision and Korean R&D formulation to sampling, cleanroom filling, and export dispatch.",
  path: "/process",
  keywords: ["Cosmetic manufacturing process", "Skincare formulation stages", "Contract packaging process", "Cosmetic cleanroom production"],
});

export default function ProcessPage() {
  return (
    <div className="w-full">
      {/* 01. Hero */}
      <section className="py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#2CB6C4] font-semibold">
              Our Process
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#121614] leading-[1.05]">
              How It Works: From Idea to{" "}
              <span className="text-[#2CB6C4] italic ">Finished Product.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#121614]/80 leading-relaxed font-light">
              We make cosmetic manufacturing simple. Here is how your project moves from our first conversation to final delivery in your warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* 02. The 7 Distinct Process Stages */}
      <section className="py-24 bg-[#F7F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {conceptToFinishSteps.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={stage.step}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FBF9F5] border border-[#121614]/10 rounded-3xl p-6 sm:p-10 shadow-sm"
                >
                  {/* Image */}
                  <div className={`lg:col-span-6 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                    <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md bg-white border border-black/5">
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B89A60] font-semibold">
                      {stage.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#121614] tracking-tight">
                      {stage.title}
                    </h2>
                    <p className="text-base sm:text-lg text-[#121614]/80 leading-relaxed font-light">
                      {stage.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2CB6C4]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Quality Checked Milestone</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. CTA */}
      <section className="py-20 bg-[#121614] text-[#FBF9F5] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#B89A60]">
            Start Your Brand
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-[#FBF9F5]/80 max-w-xl mx-auto font-light">
            Tell us about your product idea or formula goals. Our team is ready to guide you.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B89A60] text-[#121614] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#d6aa65] transition shadow-lg"
            >
              <span>Discuss Your Project →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
