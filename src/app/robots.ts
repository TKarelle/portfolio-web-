import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

/** Chemins non indexables — coupe le Waste Crawl API (Sem.1, 0 €). */
const DISALLOW_WASTE = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
    ],
    sitemap: [`${base}/sitemap.xml`, `${base}/video-sitemap.xml`],
    host: base,
  };
}
