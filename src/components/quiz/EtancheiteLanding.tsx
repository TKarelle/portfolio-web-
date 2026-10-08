import Link from "next/link";
import { FAQ } from "@/components/home/FAQ";
import { EtancheiteQuiz } from "@/components/quiz/EtancheiteQuiz";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { EditorialSteps } from "@/components/ui/EditorialSteps";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import {
  QUIZ_FAQS,
  QUIZ_META,
  QUIZ_SIGNALS,
  QUIZ_STEPS,
} from "@/data/etancheite-quiz";

export function EtancheiteLanding() {
  return (
    <>
      <FaqJsonLd items={QUIZ_FAQS} />

      <EtancheiteQuiz />

      <section className="py-16 md:py-24 px-5 sm:px-8 bg-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <SectionHead size="xl">
              Comment ça marche en <TitleEm>3 étapes</TitleEm>
            </SectionHead>
          </div>

          <EditorialSteps
            columns={3}
            items={QUIZ_STEPS.map((step) => ({
              step: step.n,
              title: step.title,
              paragraphs: [step.body],
            }))}
          />
        </div>
      </section>

      <SoftBlurBand contentClassName="w-full max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <SectionHead size="xl">
            Ce que Google et ChatGPT <TitleEm>montrent</TitleEm> de toi
          </SectionHead>
        </div>
        <p className="text-center text-sm sm:text-base font-medium text-muted leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
          {QUIZ_META.introBody}
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {QUIZ_SIGNALS.map((signal) => (
            <li key={signal.title}>
              <SurfaceCard as="article" className="h-full">
                <h3 className="text-lg font-extrabold text-ink leading-snug tracking-tight">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
                  {signal.body}
                </p>
              </SurfaceCard>
            </li>
          ))}
        </ul>

        <p className="mt-12 md:mt-14 text-center text-base sm:text-lg font-extrabold text-ink tracking-tight">
          Mieux vaut le savoir avant vos prospects.{" "}
          <Link
            href="#audit-form"
            className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink transition-colors"
          >
            Laisse ton email ↑
          </Link>
        </p>
      </SoftBlurBand>

      <FAQ
        items={QUIZ_FAQS}
        title={
          <>
            Questions <TitleEm>fréquentes</TitleEm>
          </>
        }
        contactHref="#audit-form"
        contactLabel="Lancer mon test"
      />
    </>
  );
}
