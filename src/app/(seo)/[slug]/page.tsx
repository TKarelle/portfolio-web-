import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import { MetierTemplate } from "@/components/landing/MetierTemplate";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllTopLevelSlugs, resolveTopLevelPage } from "@/lib/pages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Uniquement les slugs connus (pages métiers du brief + landings). */
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTopLevelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveTopLevelPage(slug);
  if (!page) return { title: "Page non trouvée" };

  return buildPageMetadata({
    title: page.data.title,
    description: page.data.metaDescription,
    path: `/${page.data.slug}`,
    ogImage: page.data.image,
  });
}

/**
 * Route unique pour les URLs du brief :
 * /site-internet-plombier, /site-internet-boulanger, …
 * et landings /site-vitrine-*.
 *
 * Convention Next.js : segment dynamique `[slug]` (pas `site-internet-[metier]`).
 */
export default async function SeoSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = resolveTopLevelPage(slug);
  if (!page) notFound();

  if (page.kind === "metier") {
    return <MetierTemplate data={page.data} />;
  }

  return <LandingTemplate data={page.data} />;
}
