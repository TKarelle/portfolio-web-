import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/seo";

const DEFAULT_OG_IMAGE = "/image/pp.jpg";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: PageMeta): Metadata {
  const base = getBaseUrl();
  const url = `${base}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${base}${ogImage}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

