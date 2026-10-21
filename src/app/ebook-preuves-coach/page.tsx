import type { Metadata } from "next";
import { EbookLanding } from "@/components/ebook/EbookLanding";
import { EBOOK_META } from "@/data/ebook-coach";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: EBOOK_META.seoTitle,
  description: EBOOK_META.seoDescription,
  path: EBOOK_META.path,
});

export default function EbookPreuvesCoachPage() {
  return <EbookLanding />;
}
