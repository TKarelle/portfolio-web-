"use client";

import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { SectionHead } from "@/components/ui/SectionHead";
import { CTA } from "@/data/copy";
import { CONTACT_EMAIL, HAS_CALENDLY } from "@/data/site";

export function ContactSection() {
  return (
    <section
      className="scroll-mt-28 py-16 md:py-28 px-4 sm:px-6 bg-chunk-pink pb-[max(4rem,env(safe-area-inset-bottom))]"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative rounded-[1.75rem] md:rounded-blob overflow-hidden bg-ink text-white p-5 sm:p-8 md:p-12 lg:p-14 border-[3px] border-ink shadow-[6px_6px_0_#ff1f71] md:shadow-[8px_8px_0_#ff1f71]">
          <div
            className="absolute top-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-pink/40 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="max-w-2xl mb-7 md:mb-10">
              <SectionHead
                align="left"
                stroke="lime"
                highlight="allié commercial"
                className="mb-4 !text-white !text-[1.65rem] sm:!text-3xl md:!text-4xl"
              >
                {"Faisons de ton site un vrai allié commercial."}
              </SectionHead>
              <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">
                Deux façons simples de me joindre. Choisis celle qui te convient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
              <div className="rounded-[1.35rem] sm:rounded-[1.5rem] border-2 border-lime bg-white text-ink p-5 sm:p-6 md:p-7 flex flex-col">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-violet mb-2">
                  Option 1
                </p>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug mb-2">
                  Réserver un créneau
                </h3>
                <p className="text-sm text-muted font-medium leading-relaxed mb-5 sm:mb-6 flex-1">
                  Appel découverte de 15&nbsp;min. Tu choisis l’horaire dans mon
                  agenda. Sans engagement.
                </p>
                {HAS_CALENDLY ? (
                  <CalendlyButton size="lg" className="w-full px-4">
                    {CTA.book}
                  </CalendlyButton>
                ) : (
                  <p className="text-sm font-bold text-muted">
                    Agenda bientôt disponible.
                  </p>
                )}
              </div>

              <div className="rounded-[1.35rem] sm:rounded-[1.5rem] border-2 border-white/20 bg-white/5 text-white p-5 sm:p-6 md:p-7 flex flex-col">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-lime mb-2">
                  Option 2
                </p>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug mb-2">
                  Envoyer un mail
                </h3>
                <p className="text-sm text-white/60 font-medium leading-relaxed mb-5 sm:mb-6 flex-1">
                  Tu veux plus de détails par écrit&nbsp;? Je te réponds sous 24h.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demande de détails : site web")}`}
                  className="inline-flex items-center justify-center w-full min-h-12 font-bold rounded-full px-4 sm:px-7 py-3.5 text-[0.95rem] sm:text-base text-center leading-snug bg-surface text-ink border-2 border-ink hover:bg-lime transition-colors touch-manipulation"
                >
                  {CTA.mail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
