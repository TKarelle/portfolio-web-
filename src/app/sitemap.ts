import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { besoins, besoinPath } from "@/data/besoins";
import { comparatifs, comparatifPath } from "@/data/comparatifs";
import { metiers, metierPath } from "@/data/metiers";
import {
  blogPostLastmod,
  CLUSTER_LASTMOD,
  latestBlogLastmod,
  toLastmod,
} from "@/lib/content-dates";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const core = toLastmod(CLUSTER_LASTMOD.core);
  const landings = toLastmod(CLUSTER_LASTMOD.landings);
  const legal = toLastmod(CLUSTER_LASTMOD.legal);
  const grille = toLastmod(CLUSTER_LASTMOD.grille);
  const blogHub = latestBlogLastmod();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: core, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/tarifs`,
      lastModified: core,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/projets`,
      lastModified: core,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq`,
      lastModified: core,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/contact`,
      lastModified: core,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/a-propos`,
      lastModified: core,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/blog`,
      lastModified: blogHub,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/grille-etancheite`,
      lastModified: grille,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: legal,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const metierPages = metiers.map((m) => ({
    url: `${base}${metierPath(m.slug)}`,
    lastModified: landings,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const besoinPages = besoins.map((b) => ({
    url: `${base}${besoinPath(b.slug)}`,
    lastModified: landings,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const comparatifPages = comparatifs.map((c) => ({
    url: `${base}${comparatifPath(c.slug)}`,
    lastModified: landings,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: blogPostLastmod(post),
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
