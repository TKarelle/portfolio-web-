import { faqItems as defaultFaqItems } from "@/data/faq";
import { ROI_DISCLAIMER } from "@/data/pricing";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { ReactNode } from "react";

type FaqEntry = { question: string; answer: string };

/**
 * FAQ homepage — FaqAccordion éditorial (Server Component).
 */
export function FAQ({
  items,
  title = (
    <>
      Des <TitleEm>questions</TitleEm>&nbsp;?
    </>
  ),
  highlight: _highlight,
  showRoiDisclaimer = false,
  contactHref = "#contact",
  contactLabel = "Poser ma dernière question",
}: {
  items?: readonly FaqEntry[];
  title?: ReactNode;
  /** @deprecated Surlignage retiré */
  highlight?: string;
  showRoiDisclaimer?: boolean;
  contactHref?: string;
  contactLabel?: string;
} = {}) {
  const source = items ?? defaultFaqItems;

  return (
    <section
      className="relative z-10 py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-10 bg-bg"
      id="faq"
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="reveal mb-12 sm:mb-14 md:mb-16 text-center">
          <SectionHead size="xl">{title}</SectionHead>
        </div>

        <div className="reveal">
          <FaqAccordion items={source} />
        </div>

        <div className="reveal mt-10 sm:mt-12 text-center">
          <a
            href={contactHref}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-extrabold text-ink hover:text-pink transition-colors underline-offset-4 hover:underline"
          >
            {contactLabel}
            <span aria-hidden>↗</span>
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
