"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { SectionHead } from "@/components/ui/SectionHead";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20 px-6 bg-bg" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="reveal mb-8 md:mb-10 text-center">
          <SectionHead stroke="violet" highlight="questions">
            {"Des questions ?"}
          </SectionHead>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
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
                <span className="font-extrabold text-sm md:text-base">{item.question}</span>
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
                  <p className="text-muted text-sm leading-relaxed font-medium pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
