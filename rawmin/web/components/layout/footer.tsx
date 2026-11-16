import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#DCF4F6] via-[#E8F8F9] to-[#D5F1F4] text-[#16393C] pt-16 pb-12 border-t border-[#AEE6EA] select-none shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-[#BEECEF]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block" aria-label="RAWMIN Skinology Home">
              <div className="bg-white p-2.5 rounded-lg inline-block shadow-sm border border-[#BEECEF]">
                <Image
                  src={SITE.logoSrc}
                  alt={SITE.logoAlt}
                  width={160}
                  height={52}
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs font-mono uppercase tracking-widest text-[#136B75] font-bold">
              Private Label | Custom Cosmetics | Contract Manufacturing
            </p>

            <p className="text-sm text-[#274F54] leading-relaxed max-w-md font-normal">
              Rawmin Skinology helps skincare and personal care brands turn ideas into production-ready products with private label manufacturing, custom formulation, R&amp;D, ingredient sourcing, packaging support and compliant manufacturing in India.
            </p>

            <div className="space-y-2 text-xs text-[#274F54] pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#187580] shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#187580] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#2CB6C4] transition-colors font-medium">
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#187580] shrink-0" />
                <div className="flex items-center gap-2 font-medium">
                  <a href="tel:+919910393383" className="hover:text-[#2CB6C4] transition-colors">+91 99103 93383</a>
                  <span>,</span>
                  <a href="tel:+919311422855" className="hover:text-[#2CB6C4] transition-colors">+91 93114 22855</a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#136B75] font-bold">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-[#274F54]">
              <li>
                <Link href="/about" className="hover:text-[#2CB6C4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#journey" className="hover:text-[#2CB6C4] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-[#2CB6C4] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/quality#certificates" className="hover:text-[#2CB6C4] transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#136B75] font-bold">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#274F54]">
              <li>
                <Link href="/custom-cosmetics" className="hover:text-[#2CB6C4] transition-colors">
                  Custom Cosmetics
                </Link>
              </li>
              <li>
                <Link href="/private-label" className="hover:text-[#2CB6C4] transition-colors">
                  Private Label
                </Link>
              </li>
              <li>
                <Link href="/services#packaging" className="hover:text-[#2CB6C4] transition-colors">
                  Packaging
                </Link>
              </li>
              <li>
                <Link href="/services#quality" className="hover:text-[#2CB6C4] transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/services#export" className="hover:text-[#2CB6C4] transition-colors">
                  Export Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#136B75] font-bold">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm text-[#274F54]">
              <li>
                <Link href="/products#skin-care" className="hover:text-[#2CB6C4] transition-colors">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/products#hair-care" className="hover:text-[#2CB6C4] transition-colors">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/products#body-care" className="hover:text-[#2CB6C4] transition-colors">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="/products#lip-care" className="hover:text-[#2CB6C4] transition-colors">
                  Lip Care
                </Link>
              </li>
              <li>
                <Link href="/products#bath-shower" className="hover:text-[#2CB6C4] transition-colors">
                  Bath &amp; Shower
                </Link>
              </li>
              <li>
                <Link href="/products#mens-grooming" className="hover:text-[#2CB6C4] transition-colors">
                  Men’s Grooming
                </Link>
              </li>
              <li>
                <Link href="/products#baby-care" className="hover:text-[#2CB6C4] transition-colors">
                  Baby Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#136B75] font-bold">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-[#274F54]">
              <li>
                <Link href="/products" className="hover:text-[#2CB6C4] transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#2CB6C4] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2CB6C4] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2CB6C4] transition-colors">
                  Enquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation and Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#486E73]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[#136B75] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Standards: GMP | ISO | FDA</span>
            </span>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
