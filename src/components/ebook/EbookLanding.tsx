"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FAQ } from "@/components/home/FAQ";
import { EbookHeroForm } from "@/components/ebook/EbookHeroForm";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EditorialSteps } from "@/components/ui/EditorialSteps";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { SurfaceCard, surfaceCardClassName } from "@/components/ui/SurfaceCard";
import {
  EBOOK_FAQS,
  EBOOK_META,
  EBOOK_PAINS,
  EBOOK_STEPS,
} from "@/data/ebook-coach";
import { readEbookGate, type EbookGateState } from "@/lib/ebook-lead";
import { cn } from "@/lib/utils";

function EbookPreviewCard() {
  return (
    <SurfaceCard className="h-full">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35">
        À l’intérieur
      </p>
      <p className="mt-3 text-lg font-extrabold text-ink leading-snug tracking-tight">
        Ce que vous recevez
      </p>
      <ul className="mt-5 space-y-3">
        {EBOOK_META.contents.map((item) => (
          <li key={item.title} className="flex gap-2.5">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink text-xs font-extrabold"
              aria-hidden
            >
              ✓
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink leading-snug">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 inline-flex items-center rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-3 py-1.5 text-xs font-bold text-ink/70">
        50 premières places · gratuit
      </p>
    </SurfaceCard>
  );
}

export function EbookLanding() {
  const [gate, setGate] = useState<EbookGateState | null>(null);

  useEffect(() => {
    setGate(readEbookGate());
  }, []);

  return (
    <>
      <FaqJsonLd items={EBOOK_FAQS} />

      <section className="relative overflow-hidden pt-36 md:pt-40 pb-14 md:pb-20 page-x">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.14) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 40% 35% at 70% 100%, rgba(212, 255, 0, 0.1) 0%, transparent 45%),
              var(--bg)
            `,
          }}
        />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Breadcrumbs
              items={[
                { label: "Accueil", href: "/" },
                { label: EBOOK_META.title, href: EBOOK_META.path },
              ]}
            />

            <p className="mt-6 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-ink/35">
              {EBOOK_META.eyebrow}
            </p>

            <div className="mt-4">
              <SectionHead
                as="h1"
                size="xl"
                align="left"
                className="!max-w-none"
              >
                Valoriser votre travail sans exposer vos{" "}
                <TitleEm>clients</TitleEm>
              </SectionHead>
            </div>

            <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed max-w-lg">
              {EBOOK_META.subtitle}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {[EBOOK_META.duration, ...EBOOK_META.bullets].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-[var(--rounded-large)] border border-ink/10 bg-bg/80 px-3 py-1.5 text-xs font-bold text-ink/70"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {gate ? (
                <div
                  id="ebook-confirme"
                  className={cn(
                    surfaceCardClassName,
                    "max-w-xl px-5 py-4 bg-lime/35 scroll-mt-28",
                  )}
                >
                  <p className="text-sm font-extrabold text-ink">
                    Place réservée, {gate.name}.
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-ink/70 leading-relaxed">
                    Vous recevrez l’ebook dès sa sortie, parmi les 50 premières.
                  </p>
                </div>
              ) : (
                <EbookHeroForm onUnlocked={setGate} />
              )}
            </div>
          </div>

          <EbookPreviewCard />
        </div>
      </section>

      <section className="py-16 md:py-24 page-x bg-bg">
        <div className="w-full">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <SectionHead size="xl">
              Comment ça marche en <TitleEm>3 étapes</TitleEm>
            </SectionHead>
          </div>
          <EditorialSteps
            columns={3}
            items={EBOOK_STEPS.map((step) => ({
              step: step.n,
              title: step.title,
              paragraphs: [step.body],
            }))}
          />
        </div>
      </section>

      <SoftBlurBand contentClassName="page-x">
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <SectionHead size="xl">
            Si vous vous <TitleEm>reconnaissez</TitleEm>
          </SectionHead>
        </div>
        <p className="text-center text-sm sm:text-base font-medium text-muted leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
          {EBOOK_META.introBody}
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {EBOOK_PAINS.map((pain) => (
            <li key={pain.title}>
              <SurfaceCard as="article" className="h-full">
                <h3 className="text-lg font-extrabold text-ink leading-snug tracking-tight">
                  {pain.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
                  {pain.body}
                </p>
              </SurfaceCard>
            </li>
          ))}
        </ul>

        <p className="mt-12 md:mt-14 text-center text-base sm:text-lg font-extrabold text-ink tracking-tight">
          Les 50 places partent.{" "}
          <Link
            href="#ebook-form"
            className="text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink transition-colors"
          >
            Réserver la mienne ↑
          </Link>
        </p>
      </SoftBlurBand>

      <FAQ
        items={EBOOK_FAQS}
        title={
          <>
            Questions <TitleEm>fréquentes</TitleEm>
          </>
        }
        contactHref="#ebook-form"
        contactLabel={EBOOK_META.ctaLabel}
      />

      <section className="py-16 md:py-20 page-x bg-surface border-t border-ink/8">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHead size="lg">
            La méthode en détail, <TitleEm>avant ou après</TitleEm> l’ebook
          </SectionHead>
          <p className="mt-5 text-sm sm:text-base font-medium text-muted leading-relaxed">
            {EBOOK_META.relatedArticleBody}
          </p>
          <p className="mt-8">
            <Link
              href={EBOOK_META.relatedArticlePath}
              className="inline-flex items-center justify-center gap-2 min-h-12 rounded-[var(--rounded-large)] bg-surface text-ink border-2 border-ink/10 px-7 text-sm sm:text-base font-bold hover:border-violet hover:bg-violet/5 transition-all touch-manipulation"
            >
              {EBOOK_META.relatedArticleLabel}
            </Link>
          </p>
          {!gate ? (
            <p className="mt-5 text-sm font-medium text-ink/50">
              Ou{" "}
              <Link
                href="#ebook-form"
                className="font-bold text-ink underline underline-offset-4 decoration-ink/20 hover:decoration-ink"
              >
                réservez d’abord votre place
              </Link>
              , puis lisez à votre rythme.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
