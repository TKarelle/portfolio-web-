"use client";

import { useState } from "react";
import Image from "next/image";
import { googleReviews, GOOGLE_REVIEWS_URL } from "@/data/google-reviews";
import { testimonials } from "@/data/testimonials";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { SoftNavButton } from "@/components/ui/SoftNavButton";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

type DisplayTestimonial = {
  id: number | string;
  fullName: string;
  role?: string;
  city?: string;
  date: string;
  text: string;
  rating: number;
  image?: string;
  source?: "google";
};

const displayedTestimonials: DisplayTestimonial[] = [
  ...googleReviews.map((r) => ({
    id: r.id,
    fullName: r.fullName,
    date: r.date,
    text: r.text,
    rating: r.rating,
    source: r.source,
  })),
  ...testimonials.map((t) => ({
    id: t.id,
    fullName: t.fullName,
    role: t.role,
    city: t.city,
    date: t.date,
    text: t.text,
    rating: t.rating,
    image: t.image,
  })),
];

function TestimonialSlide({
  t,
  className,
}: {
  t: DisplayTestimonial;
  className?: string;
}) {
  const isGoogle = t.source === "google";

  return (
    <figure className={cn("text-center flex flex-col items-center", className)}>
      <blockquote className="max-w-3xl mx-auto text-[1.2rem] sm:text-xl md:text-[1.45rem] lg:text-[1.55rem] font-medium text-ink leading-[1.45] tracking-tight text-balance">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      <figcaption className="mt-8 sm:mt-10 flex flex-col items-center gap-3 w-full">
        {t.image ? (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src={t.image}
              alt=""
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        ) : (
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ink text-lime flex items-center justify-center text-lg font-extrabold"
            aria-hidden
          >
            {t.fullName.charAt(0)}
          </div>
        )}

        <div>
          <p className="font-extrabold text-ink tracking-tight">{t.fullName}</p>
          <p className="mt-0.5 text-sm font-medium text-muted">
            {isGoogle
              ? "Avis Google"
              : [t.role, t.city].filter(Boolean).join(" · ")}
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <StarRating rating={t.rating} size="sm" />
            <span className="text-xs font-medium text-muted/70">{t.date}</span>
          </div>
        </div>

        {/* Réserve la hauteur du lien Google pour tous les slides */}
        <p
          className={cn(
            "mt-1 text-sm font-semibold min-h-[1.25rem]",
            isGoogle ? "visible" : "invisible",
          )}
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/50 hover:text-pink transition-colors underline-offset-2 hover:underline"
            tabIndex={isGoogle ? undefined : -1}
            aria-hidden={!isGoogle}
          >
            Voir l&apos;avis sur Google →
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

/**
 * Témoignages — hauteur figée (slide le plus long) pour titre / flèches stables.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const len = displayedTestimonials.length;
  const current = displayedTestimonials[active];

  const goNext = () => setActive((a) => (a + 1) % len);
  const goPrev = () => setActive((a) => (a - 1 + len) % len);

  return (
    <section id="temoignages" className="relative z-10 w-full">
      <SoftBlurBand contentClassName="w-full max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <SectionHead size="xl">
            Des retours concrets, ancrés dans le{" "}
            <TitleEm>réel</TitleEm>
          </SectionHead>
        </div>

        <div className="reveal relative">
          {/* Hauteur = slide le plus long → titre / flèches ne bougent pas */}
          <div className="relative grid">
            {displayedTestimonials.map((t) => (
              <div
                key={`measure-${t.id}`}
                className="col-start-1 row-start-1 invisible pointer-events-none"
                aria-hidden
              >
                <TestimonialSlide t={t} />
              </div>
            ))}

            {displayedTestimonials.map((t, i) => {
              const isFront = i === active;
              return (
                <div
                  key={t.id}
                  className={cn(
                    "col-start-1 row-start-1 absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isFront
                      ? "z-10 opacity-100"
                      : "z-0 opacity-0 pointer-events-none",
                  )}
                  aria-hidden={!isFront}
                >
                  <TestimonialSlide
                    t={t}
                    className={cn("w-full", isFront && "testimonial-quote")}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
            <SoftNavButton
              direction="prev"
              label="Témoignage précédent"
              onClick={goPrev}
            />

            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Témoignages"
            >
              {displayedTestimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Témoignage ${i + 1} : ${t.fullName}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] touch-manipulation",
                    i === active
                      ? "w-7 bg-ink"
                      : "w-2 bg-ink/20 hover:bg-ink/40",
                  )}
                />
              ))}
            </div>

            <SoftNavButton
              direction="next"
              label="Témoignage suivant"
              onClick={goNext}
            />
          </div>

          <p className="sr-only" aria-live="polite">
            Témoignage de {current.fullName}
          </p>
        </div>
      </SoftBlurBand>
    </section>
  );
}
