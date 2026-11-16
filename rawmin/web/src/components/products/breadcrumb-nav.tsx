import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  // Construct schema.org BreadcrumbList JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rawminskinology.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://rawminskinology.com${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="breadcrumb-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-1">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#2C5256]">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#136B75] hover:text-[#144246] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[#2C5256]/40 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-[#136B75] hover:text-[#144246] transition-colors truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-[#144246] font-semibold truncate max-w-[220px] sm:max-w-none"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

