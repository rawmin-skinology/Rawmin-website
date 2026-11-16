import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCT_CATEGORIES, PRODUCTS_LIST } from "@/data/product-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/private-label", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/custom-cosmetics", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/process", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/quality", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const categoryRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    path: `/products/${cat.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productRoutes = PRODUCTS_LIST.map((prod) => ({
    path: `/products/${prod.categorySlug}/${prod.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes];

  return allRoutes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
