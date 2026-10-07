import type { Metadata } from "next";
import { EtancheiteLanding } from "@/components/quiz/EtancheiteLanding";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: QUIZ_META.headline,
  description: QUIZ_META.subtitle,
  path: QUIZ_META.path,
});

export default function GrilleEtancheitePage() {
  return <EtancheiteLanding />;
}
