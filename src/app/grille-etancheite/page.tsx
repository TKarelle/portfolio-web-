import type { Metadata } from "next";
import { EtancheiteQuiz } from "@/components/quiz/EtancheiteQuiz";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: QUIZ_META.headline,
  description: `${QUIZ_META.title} — ${QUIZ_META.subtitle}`,
  path: QUIZ_META.path,
});

export default function GrilleEtancheitePage() {
  return (
    <div className="pt-32 sm:pt-36 md:pt-32 pb-16 md:pb-24 min-h-screen min-h-dvh bg-chunk-pink px-5 sm:px-6">
      <EtancheiteQuiz />
    </div>
  );
}
