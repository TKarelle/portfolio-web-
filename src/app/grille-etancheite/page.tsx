import type { Metadata } from "next";
import { EtancheiteLanding } from "@/components/quiz/EtancheiteLanding";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: QUIZ_META.seoTitle,
  description: QUIZ_META.seoDescription,
  path: QUIZ_META.path,
});

export default function GrilleEtancheitePage() {
  return <EtancheiteLanding />;
}
