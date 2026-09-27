import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BesoinTemplate } from "@/components/landing/BesoinTemplate";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllBesoinSlugs, getBesoin } from "@/lib/pages";
import { besoinPath } from "@/data/besoins";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBesoinSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getBesoin(slug);
  if (!data) return { title: "Page non trouvée" };

  return buildPageMetadata({
    title: data.title,
    description: data.metaDescription,
    path: besoinPath(data.slug),
    ogImage: data.image,
  });
}

export default async function BesoinPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getBesoin(slug);
  if (!data) notFound();
  return <BesoinTemplate data={data} />;
}
