"use client";

import { useState } from "react";
import Image from "next/image";
import { googleReviews, GOOGLE_REVIEWS_URL } from "@/data/google-reviews";
import { testimonials } from "@/data/testimonials";
import { SectionHead } from "@/components/ui/SectionHead";
import { StarRating } from "@/components/ui/StarRating";
import { MOTION } from "@/lib/motion";

type DisplayTestimonial = {
  id: number | string;
  name: string;
  fullName: string;
  role?: string;
  city?: string;
  date: string;
  text: string;
  rating: number;
  image?: string;
  source?: "google";
};

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

function GoogleAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="relative w-16 h-16 photo-frame photo-frame-lime shrink-0 flex items-center justify-center bg-lime/30 rounded-[0.9rem] font-extrabold text-xl text-ink"
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

function TestimonialBody({ t }: { t: DisplayTestimonial }) {
  const isGoogle = t.source === "google";

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        {t.image ? (
          <div className="relative w-16 h-16 photo-frame photo-frame-lime shrink-0">
            <Image
              src={t.image}
              alt={`${t.fullName}, ${t.role}`}
              fill
              className="object-cover rounded-[0.9rem]"
              sizes="64px"
            />
          </div>
        ) : (
          <GoogleAvatar name={t.fullName} />
        )}
        <div className="min-w-0">
          <p className="font-extrabold text-lg">{t.fullName}</p>
          {isGoogle ? (
            <p className="text-sm text-muted font-medium">Avis Google</p>
          ) : (
            <p className="text-sm text-muted font-medium">
              {t.role}, {t.city}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={t.rating} size="sm" />
            <p className="text-xs text-muted/80 font-medium">{t.date}</p>
          </div>
        </div>
      </div>

      <blockquote className="text-base md:text-lg font-medium leading-relaxed text-ink flex-1">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      {isGoogle ? (
        <p className="mt-5 text-sm font-semibold">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet hover:underline underline-offset-2"
          >
            Voir l&apos;avis sur Google →
          </a>
        </p>
      ) : null}
    </div>
  );
}

const displayedTestimonials: DisplayTestimonial[] = [
  ...googleReviews.map((r) => ({
    id: r.id,
    name: r.name,
    fullName: r.fullName,
    date: r.date,
    text: r.text,
    rating: r.rating,
    source: r.source,
  })),
  ...testimonials.map((t) => ({
    id: t.id,
    name: t.name,
    fullName: t.fullName,
    role: t.role,
    city: t.city,
    date: t.date,
    text: t.text,
    rating: t.rating,
    image: t.image,
  })),
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const displayed = displayedTestimonials;
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
            Elles en parlent
          </p>
          <SectionHead stroke="violet" highlight="réel">
            {"Des retours concrets, ancrés dans le réel"}
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
