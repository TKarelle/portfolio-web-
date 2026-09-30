"use client";

import { useState } from "react";
import { faqItems as defaultFaqItems } from "@/data/faq";
import { ROI_DISCLAIMER } from "@/data/pricing";
import { SectionHead } from "@/components/ui/SectionHead";

type FaqEntry = { question: string; answer: string };

export function FAQ({
  items,
  title = "Des questions ?",
  highlight = "questions",
  showRoiDisclaimer = false,
}: {
  items?: readonly FaqEntry[];
  title?: string;
  highlight?: string;
  /** Afficher la mention * une seule fois (ex. page /faq, hors homepage) */
  showRoiDisclaimer?: boolean;
} = {}) {
  const source = items ?? defaultFaqItems;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20 px-6 bg-bg" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="reveal mb-8 md:mb-10 text-center">
          <SectionHead stroke="violet" highlight={highlight}>
            {title}
          </SectionHead>
        </div>

        <div className="space-y-3">
          {source.map((item, i) => (
            <div
              key={item.question}
              className="reveal card overflow-hidden bg-surface"
              style={{ animationDelay: `${i * 0.38}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-extrabold text-sm md:text-base">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border-2 border-ink flex items-center justify-center text-pink font-bold shrink-0 transition-transform duration-300 ${
                    open === i ? "bg-lime rotate-45" : "bg-surface"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 border-t-2 border-ink/5">
                  <p className="text-muted text-sm leading-relaxed font-medium pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-pink hover:text-pink-hot transition-colors"
          >
            Poser ma dernière question
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {showRoiDisclaimer ? (
          <p
            id="estimation-rentabilite"
            className="reveal mt-8 mx-auto max-w-2xl text-center text-[10px] sm:text-[11px] font-medium text-muted/80 leading-relaxed"
          >
            {ROI_DISCLAIMER}
          </p>
        ) : null}
      </div>
    </section>
  );
}
