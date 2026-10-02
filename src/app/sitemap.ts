import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { besoins, besoinPath } from "@/data/besoins";
import { comparatifs, comparatifPath } from "@/data/comparatifs";
import { metiers, metierPath } from "@/data/metiers";
import { SITE_CONTENT_UPDATED } from "@/data/site";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const contentUpdated = new Date(SITE_CONTENT_UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: contentUpdated, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/tarifs`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/projets`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/contact`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/a-propos`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/blog`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/grille-etancheite`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: contentUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const metierPages = metiers.map((m) => ({
    url: `${base}${metierPath(m.slug)}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const besoinPages = besoins.map((b) => ({
    url: `${base}${besoinPath(b.slug)}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const comparatifPages = comparatifs.map((c) => ({
    url: `${base}${comparatifPath(c.slug)}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...metierPages,
    ...besoinPages,
    ...comparatifPages,
    ...blogPages,
  ];
}
