import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { landings } from "@/data/landings";
import { metiers } from "@/data/metiers";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/projets`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Pages métiers du brief (priorité SEO)
  const metierPages = metiers.map((m) => ({
    url: `${base}/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const landingPages = landings.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...metierPages, ...landingPages, ...blogPages];
}
