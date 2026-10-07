import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

/** Chemins non indexables — Waste Crawl API (Sem.1). */
const DISALLOW_WASTE = ["/api/"];

/**
 * Triade Sem.3 : host = SITE_URL canonique, sitemaps alignés, bots IA Allow.
 * Manifeste GEO : /llms.txt et /llms-full.txt (fichiers public/, pas listés ici —
 * les crawlers les découvrent via convention + headers Link).
 */
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
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: DISALLOW_WASTE,
      },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      `${base}/video-sitemap.xml`,
    ],
    host: base,
  };
}
