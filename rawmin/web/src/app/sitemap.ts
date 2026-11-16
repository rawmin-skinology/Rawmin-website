import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...Object.keys(PAGES).map((s) => `/${s}`), "/contact"];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
