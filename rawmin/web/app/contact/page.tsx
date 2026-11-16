import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/sections/inquiry-form";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Check, MapPin, Mail, Phone, MessageSquare, Navigation } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | RAWMIN SKINOLOGY - Cosmetic Manufacturing Partner",
  description:
    "Have a product idea, formulation requirement or manufacturing project in mind? Connect with Rawmin Skinology in Faridabad, Haryana, India. Start an enquiry today.",
  path: "/contact",
  keywords: ["Contact RAWMIN Skinology", "Cosmetic manufacturer Faridabad", "Private label skincare quote", "Cosmetic development contact"],
});

const contactFaqs = [
  {
    q: "What products does Rawmin Skinology manufacture?",
    a: "We develop and manufacture skin care, hair care, body care, lip care, bath & shower, men’s grooming and baby care products.",
  },
  {
    q: "Do you offer private label manufacturing?",
    a: "Yes. We offer private label manufacturing and product development support based on your project requirements.",
  },
  {
    q: "Can you develop a custom formulation?",
    a: "Yes. We develop custom formulations based on your product concept and requirements.",
  },
  {
    q: "Can I discuss a new product idea before placing an order?",
    a: "Yes. Send your requirements through the enquiry form and our team will start the discussion with you.",
  },
  {
    q: "How can I get in touch with Rawmin Skinology?",
    a: "You can reach our team through the enquiry form, phone, email or WhatsApp.",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5] text-[#121614] border-b border-[#121614]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#144246] leading-[1.1]">
            Talk to Us About Your Next Product
          </h1>
          <p className="text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
            Have a product idea, formulation requirement or manufacturing project in mind? Connect with Rawmin Skinology and let’s explore how we can bring it to life.
          </p>
          <div className="pt-2">
            <a
              href="#inquiry-section"
              className="inline-flex items-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 apple-press cursor-pointer"
            >
              <span>Start an Enquiry →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact + Enquiry Form */}
      <InquiryForm />

      {/* What Are You Looking to Create? */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              What Are You Looking to Create?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAF9] p-8 rounded-3xl border border-[#B2E8EB] shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75]">
                Custom Formulation
              </span>
              <h3 className="text-xl font-bold text-[#144246]">Custom Formulation</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                Develop a product around your specific concept and requirements.
              </p>
            </div>

            <div className="bg-[#F8FAF9] p-8 rounded-3xl border border-[#B2E8EB] shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75]">
                Private Label
              </span>
              <h3 className="text-xl font-bold text-[#144246]">Private Label</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                Launch selected formulations under your own brand.
              </p>
            </div>

            <div className="bg-[#F8FAF9] p-8 rounded-3xl border border-[#B2E8EB] shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75]">
                Manufacturing
              </span>
              <h3 className="text-xl font-bold text-[#144246]">Manufacturing</h3>
              <p className="text-sm text-[#2C5256] leading-relaxed font-normal">
                Partner with us to produce your cosmetic and personal-care products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Rawmin Skinology? */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246]">
              One Conversation Can Start the Process.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Understand", desc: "Tell us about your product and requirements." },
              { title: "Discuss", desc: "Explore formulation, manufacturing and development options." },
              { title: "Develop", desc: "Move from concept to samples and refinement." },
              { title: "Deliver", desc: "Take your approved product into manufacturing and dispatch." },
            ].map((col, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#B2E8EB] shadow-xs">
                <h3 className="text-lg font-bold text-[#144246]">{col.title}</h3>
                <p className="text-xs text-[#2C5256] mt-2 leading-relaxed font-normal">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Visit Us & Map */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#B2E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#136B75] bg-[#EDF8F9] px-3.5 py-1.5 rounded-full border border-[#B2E8EB] inline-block mb-3">
              FACILITY &amp; HEADQUARTERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] leading-tight tracking-tight">
              Find Us
            </h2>
            <p className="text-sm sm:text-base text-[#2C5256] mt-3 leading-relaxed">
              Our advanced cosmetic manufacturing plant and formulation laboratory are strategically situated in Delhi-NCR (Faridabad, Haryana), with seamless connectivity to national highways, rail, and international freight routes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Address Details Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="p-7 rounded-3xl bg-[#F8FAF9] border border-[#B2E8EB] shadow-xs space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF8F9] border border-[#B2E8EB] flex items-center justify-center text-[#136B75] shrink-0">
                    <MapPin className="w-6 h-6 text-[#144246]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#136B75] block">
                      Manufacturing Facility &amp; Office
                    </span>
                    <h3 className="text-xl font-bold text-[#144246] mt-0.5">
                      Rawmin Skinology
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 pt-1 border-t border-[#B2E8EB]/60">
                  <p className="text-sm text-[#2C5256] leading-relaxed">
                    <strong className="text-[#144246] font-semibold">Address:</strong><br />
                    2, Site No. 2, Plot No. NH-19, Block A, DLF Industrial Area, Sector 32, Faridabad, Haryana 121003, India
                  </p>

                  <div className="text-xs text-[#2C5256] space-y-2 pt-1">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4] shrink-0" />
                      <span><strong>Highway Access:</strong> Direct entry off NH-19 (Delhi-Agra / Mathura Road)</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4] shrink-0" />
                      <span><strong>Nearest Metro:</strong> Mewala Maharajpur / NHPC Chowk (Violet Line)</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4] shrink-0" />
                      <span><strong>Airport Connectivity:</strong> ~45 mins from IGI Airport (DEL)</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#B2E8EB] space-y-1.5">
                  <p className="text-xs font-bold text-[#144246] uppercase tracking-wider">
                    Facility Visits &amp; Audits
                  </p>
                  <p className="text-xs text-[#2C5256] leading-relaxed">
                    Facility tours, formulation review sessions and quality audits are welcome by prior appointment to maintain GMP cleanroom standards.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=DLF+Industrial+Area,+Sector+32,+Faridabad,+Haryana+121003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#144246] hover:bg-[#1C585D] text-white px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="#inquiry-section"
                    className="inline-flex items-center justify-center gap-2 bg-[#EDF8F9] hover:bg-[#E0F3F5] text-[#144246] border border-[#B2E8EB] px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all active:scale-95"
                  >
                    <span>Schedule a Visit</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px] rounded-3xl border border-[#B2E8EB] overflow-hidden shadow-sm bg-[#F8FAF9] relative">
                <iframe
                  title="Rawmin Skinology Location Map"
                  src="https://maps.google.com/maps?q=DLF+Industrial+Area,+Sector+32,+Faridabad,+Haryana+121003&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-[#EDF8F9] border-b border-[#B2E8EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#144246]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#B2E8EB] shadow-xs">
                <h3 className="text-base font-bold text-[#144246]">{f.q}</h3>
                <p className="text-sm text-[#2C5256] mt-2 leading-relaxed font-normal">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 bg-[#2CB6C4] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Have an Idea in Mind?
          </h2>
          <p className="text-base sm:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed">
            Let’s turn your product vision into a finished product.
          </p>

          <div className="pt-4">
            <a
              href="#inquiry-section"
              className="inline-flex items-center gap-2 bg-white text-[#144246] px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-stone-100 transition shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Start a Conversation →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
