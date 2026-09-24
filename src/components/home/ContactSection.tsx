"use client";

import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHead } from "@/components/ui/SectionHead";

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-chunk-pink" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative rounded-blob overflow-hidden bg-ink text-white p-8 md:p-12 lg:p-14 border-[3px] border-ink shadow-[8px_8px_0_#ff1f71]">
          <div
            className="absolute top-0 right-0 w-72 h-72 bg-pink/40 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionHead
                align="left"
                stroke="lime"
                highlight="ensemble"
                className="mb-4 !text-white"
              >
                {"Discutons ensemble"}
              </SectionHead>
              <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">
                Tu as besoin d&apos;être trouvé, compris, et joignable. Dis-moi
                ton métier — on voit ensemble ce qu&apos;il te faut.
              </p>
              <p className="mt-5 text-xs font-bold text-lime/90 tracking-wide">
                Réponse sous 24h · Sans engagement
              </p>
            </div>

            <ContactForm
              className="lg:col-span-8 bg-surface rounded-blob p-6 md:p-8 text-ink border-2 border-ink"
              idPrefix="home-"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
