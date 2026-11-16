import React from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

interface ProductEnquiryCtaProps {
  categoryName: string;
  categorySlug: string;
  productName: string;
  productSlug: string;
  className?: string;
}

export default function ProductEnquiryCta({
  categoryName,
  categorySlug,
  productName,
  productSlug,
  className = "",
}: ProductEnquiryCtaProps) {
  const queryParams = new URLSearchParams({
    category: categoryName,
    categorySlug: categorySlug,
    product: productName,
    productSlug: productSlug,
    req: `Custom Formulation & Contract Manufacturing for ${productName}`,
  }).toString();

  const href = `/contact?${queryParams}#inquiry-section`;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 bg-[#144246] hover:bg-[#1B575D] text-white px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] focus:ring-offset-2 ${className}`}
    >
      <span>Enquire About This Product</span>
      <ArrowRight className="w-4 h-4 text-[#2CB6C4] group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
}

