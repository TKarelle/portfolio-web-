import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/seo";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  /** Si omis, Next utilise opengraph-image.tsx / twitter-image */
  ogImage?: string;
  ogType?: "website" | "article";
  /** URL absolue ou chemin public d'une vidéo OG (optionnel) */
  ogVideo?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  ogImage,
  ogType = "website",
  ogVideo,
}: PageMeta): Metadata {
  const base = getBaseUrl();
  const url = `${base}${path}`;
  const images = ogImage
    ? [
        {
          url: ogImage.startsWith("http") ? ogImage : `${base}${ogImage}`,
          alt: title,
        },
      ]
    : undefined;
  const videos = ogVideo
    ? [
        {
          url: ogVideo.startsWith("http") ? ogVideo : `${base}${ogVideo}`,
          type: "video/mp4" as const,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      ...(images ? { images } : {}),
      ...(videos ? { videos } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images: [images[0].url] } : {}),
    },
  };
}
