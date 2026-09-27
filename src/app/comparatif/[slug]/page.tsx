import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparatifTemplate } from "@/components/landing/ComparatifTemplate";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllComparatifSlugs, getComparatif } from "@/lib/pages";
import { comparatifPath } from "@/data/comparatifs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllComparatifSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparatif(slug);
  if (!data) return { title: "Page non trouvée" };

  return buildPageMetadata({
    title: data.title,
    description: data.metaDescription,
    path: comparatifPath(data.slug),
    ogImage: data.image,
  });
}

export default async function ComparatifPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getComparatif(slug);
  if (!data) notFound();
  return <ComparatifTemplate data={data} />;
}
