"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site";

interface ProductShowcaseProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

export default function ProductShowcase({
  products,
  title = "Formulation & Product Portfolio",
  subtitle = "Engineered for private label brands, boutique cosmetic lines, and commercial personal-care ranges.",
  showFilters = true,
}: ProductShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => {
    if (p.slug.startsWith("skin")) return "Skin Care";
    if (p.slug.startsWith("hair")) return "Hair Care";
    if (p.slug === "body-care") return "Body Care";
    if (p.slug === "lip-care") return "Lip Care";
    if (p.slug === "bath-shower") return "Bath & Shower";
    return "Other";
  })))];

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => {
        if (selectedCategory === "Skin Care") return p.slug.startsWith("skin");
        if (selectedCategory === "Hair Care") return p.slug.startsWith("hair");
        if (selectedCategory === "Body Care") return p.slug === "body-care";
        if (selectedCategory === "Lip Care") return p.slug === "lip-care";
        if (selectedCategory === "Bath & Shower") return p.slug === "bath-shower";
        return true;
      });

  return (
    <div className="product-showcase-container">
      <div className="ps-header">
        <div>
          <span className="section-eyebrow">Portfolio &amp; Capabilities</span>
          <h2>{title}</h2>
        </div>
        <p className="ps-lead">{subtitle}</p>
      </div>

      {showFilters && (
        <div className="ps-filters" role="tablist" aria-label="Filter products by category">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-chip ${isActive ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      <div className="ps-grid">
        {filtered.map((prod, idx) => {
          const imageSrc = prod.image || `/products/${prod.slug}.jpg`;
          return (
            <article
              key={prod.slug}
              className="product-card"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="pc-image-wrap">
                <Image
                  src={imageSrc}
                  alt={`${prod.name} cosmetic manufacturing and private label`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="pc-image"
                  loading="lazy"
                />
                <div className="pc-image-overlay" />
                <span className="pc-category-badge">
                  {prod.slug.startsWith("skin") ? "Skin Care" :
                   prod.slug.startsWith("hair") ? "Hair Care" :
                   prod.slug === "body-care" ? "Body Care" :
                   prod.slug === "lip-care" ? "Lip Care" :
                   prod.slug === "bath-shower" ? "Bath & Shower" : "Personal Care"}
                </span>
              </div>

              <div className="pc-content">
                <h3 className="pc-title">{prod.name}</h3>
                <p className="pc-desc">{prod.description}</p>

                <div className="pc-range">
                  <span className="pc-range-label">Available Formats:</span>
                  <div className="pc-pills">
                    {prod.range_items.map((item) => (
                      <span key={item} className="pc-pill">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="pc-footer">
                  <Link
                    href={`/contact?cat=${encodeURIComponent(prod.name)}#enquiry`}
                    className="pc-link-btn"
                  >
                    <span>Request Quotation</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href={`/products#${prod.slug}`} className="pc-text-link">
                    Explore Details
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

