import Link from "next/link";
import { FAQ } from "@/components/home/FAQ";
import { EtancheiteQuiz } from "@/components/quiz/EtancheiteQuiz";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { SectionHead } from "@/components/ui/SectionHead";
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

      {/* Hero (PageIntro DA) + email inline + quiz si débloqué */}
      <EtancheiteQuiz />

      {/* Comment ça marche */}
      <section className="py-14 md:py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <SectionHead stroke="violet" highlight="3 étapes">
              {"Comment ça marche en 3 étapes"}
            </SectionHead>
          </div>

          <ol className="space-y-8 md:space-y-10">
            {QUIZ_STEPS.map((step) => (
              <li key={step.n} className="flex gap-4 sm:gap-6">
                <span
                  className="shrink-0 text-3xl sm:text-4xl font-extrabold text-pink leading-none tabular-nums"
                  aria-hidden
                >
                  {step.n}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base font-medium text-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signaux */}
      <section className="py-14 md:py-20 px-6 bg-chunk-lime">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <SectionHead stroke="lime" highlight="fuir">
              {QUIZ_META.introTitle}
            </SectionHead>
          </div>
          <p className="text-center text-sm sm:text-base font-medium text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            {QUIZ_META.introBody}
          </p>

          <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {QUIZ_SIGNALS.map((signal) => (
              <li key={signal.title}>
                <h3 className="text-lg font-extrabold text-ink leading-snug">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
                  {signal.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center text-base sm:text-lg font-extrabold text-ink">
            Mieux vaut le savoir avant vos prospects.{" "}
            <Link
              href="#audit-form"
              className="text-pink hover:text-pink-hot underline underline-offset-2"
            >
              Laisse ton email ↑
            </Link>
          </p>
        </div>
      </section>

      <FAQ
        items={QUIZ_FAQS}
        title="Questions fréquentes"
        highlight="fréquentes"
        contactHref="#audit-form"
        contactLabel="Lancer mon test"
      />
    </>
  );
}
