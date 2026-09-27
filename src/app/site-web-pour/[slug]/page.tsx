import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MetierTemplate } from "@/components/landing/MetierTemplate";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllMetierSlugs, getMetier } from "@/lib/pages";
import { metierPath } from "@/data/metiers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllMetierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getMetier(slug);
  if (!data) return { title: "Page non trouvée" };

  return buildPageMetadata({
    title: data.title,
    description: data.metaDescription,
    path: metierPath(data.slug),
    ogImage: data.image,
  });
}

export default async function MetierPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getMetier(slug);
  if (!data) notFound();
  return <MetierTemplate data={data} />;
}
