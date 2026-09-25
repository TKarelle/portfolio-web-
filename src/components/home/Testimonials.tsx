"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHead } from "@/components/ui/SectionHead";
import { MOTION } from "@/lib/motion";

function ArrowLeft({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6L9 12l6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialBody({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <div className="relative w-16 h-16 photo-frame photo-frame-lime shrink-0">
          <Image
            src={t.image}
            alt={t.fullName}
            fill
            className="object-cover rounded-[0.9rem]"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <p className="font-extrabold text-lg">{t.fullName}</p>
          <p className="text-sm text-muted font-medium">{t.role}</p>
        </div>
        <div className="ml-auto text-pink font-extrabold text-lg hidden sm:block shrink-0">
          {"★".repeat(t.rating)}
        </div>
      </div>

      <blockquote className="text-lg md:text-xl font-semibold leading-relaxed text-ink flex-1">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      <p className="mt-4 text-sm text-violet font-bold bg-violet-bg inline-block px-3 py-1 rounded-full border border-violet/30 shrink-0 self-start">
        {t.project}
      </p>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const displayed = testimonials;
  const len = displayed.length;
  const current = displayed[active];

  const goNext = () => setActive((a) => (a + 1) % len);
  const goPrev = () => setActive((a) => (a - 1 + len) % len);

  const transition = `transform ${MOTION.duration}s ${MOTION.ease}, opacity ${MOTION.duration}s ${MOTION.ease}`;

  return (
    <section className="py-20 md:py-28 px-6 bg-chunk-pink" id="temoignages">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-bold text-violet mb-3 tracking-wide">
            Avis clients
          </p>
          <SectionHead stroke="violet" highlight="mieux que moi">
            {"Ils en parlent mieux que moi"}
          </SectionHead>
        </div>

        <div className="reveal relative mx-auto max-w-2xl">
          <div className="relative pb-12">
            {/* Hauteur = card la plus haute (grille superposée) */}
            <div className="relative grid">
              {displayed.map((t) => (
                <article
                  key={`measure-${t.id}`}
                  className="card bg-surface col-start-1 row-start-1 invisible pointer-events-none p-8 md:p-10 border-ink"
                  aria-hidden
                >
                  <TestimonialBody t={t} />
                </article>
              ))}

              {displayed.map((t, i) => {
                const offset = (i - active + len) % len;
                const deep = offset > 2;
                const isFront = offset === 0;

                return (
                  <article
                    key={t.id}
                    aria-hidden={!isFront}
                    className="card bg-surface absolute inset-0 p-8 md:p-10 border-ink"
                    style={{
                      zIndex: len - offset,
                      opacity: deep ? 0 : 1 - offset * 0.14,
                      transform: deep
                        ? "translateY(48px) scale(0.9)"
                        : `translateY(${offset * 14}px) scale(${1 - offset * 0.04}) rotate(${offset * -1.2}deg)`,
                      transition,
                      pointerEvents: isFront ? "auto" : "none",
                    }}
                  >
                    <TestimonialBody t={t} />
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-2">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-ink bg-surface hover:bg-ink hover:text-white transition-colors"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft />
            </button>

            <div className="flex gap-2">
              {displayed.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full border border-ink ${
                    i === active
                      ? "bg-pink w-10"
                      : "bg-surface w-2.5 hover:bg-pink/30"
                  }`}
                  style={{ transition }}
                  aria-label={`Témoignage ${i + 1} : ${t.fullName}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-ink bg-surface hover:bg-ink hover:text-white transition-colors"
              aria-label="Témoignage suivant"
            >
              <ArrowRight />
            </button>
          </div>

          <p className="sr-only" aria-live="polite">
            Témoignage de {current.fullName}
          </p>
        </div>
      </div>
    </section>
  );
}
