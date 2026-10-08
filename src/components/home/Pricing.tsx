import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import {
  PricingGuarantees,
  PricingIncluded,
} from "@/components/home/PricingPromises";
import { ScrollBoldText } from "@/components/home/ScrollBoldText";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { CTA } from "@/data/copy";

const PRICING_HEADLINE = [
  "VOTRE SITE.",
  "VOTRE RYTHME.",
  "VOTRE VISIBILITÉ.",
] as const;

/** Tarifs — SoftBlurBand + SurfaceCard (shell partagé). */
export function Pricing({
  title: _title,
  highlight: _highlight,
}: {
  title?: string;
  highlight?: string;
} = {}) {
  return (
    <section className="scroll-mt-28 bg-bg" id="modeles">
      <div className="reveal pt-14 md:pt-20">
        <PricingIncluded />
      </div>

      <SoftBlurBand contentClassName="px-5 sm:px-8 flex justify-center">
        <ScrollBoldText
          paragraphs={PRICING_HEADLINE}
          className="text-center max-w-3xl"
        />
      </SoftBlurBand>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 space-y-6 sm:space-y-8 md:space-y-10">
        {pricingPlans.map((plan) => (
          <SurfaceCard
            key={plan.id}
            as="article"
            padded={false}
            highlight={plan.highlight}
            className="px-6 py-8 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-11"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] gap-8 lg:gap-10 xl:gap-14 items-start">
              <header className="lg:max-w-[16.5rem]">
                <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-ink">
                  {plan.tier}
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-muted">
                  {plan.name}
                </p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-none">
                    {plan.price}&nbsp;€
                  </span>
                  <span className="pb-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    /mois
                  </span>
                </div>

                <div className="mt-5 h-px w-12 bg-ink/15" aria-hidden />

                <p className="mt-5 text-base sm:text-lg font-semibold text-ink leading-snug text-pretty">
                  {plan.tagline}
                </p>

                <div className="mt-7">
                  <Button
                    href="/contact"
                    variant={plan.highlight ? "primary" : "dark"}
                    className="w-full sm:w-auto"
                    size="md"
                  >
                    {plan.highlight ? CTA.plan : CTA.planDiscuss}
                  </Button>
                </div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 xl:gap-12 min-w-0">
                {plan.groups.map((group) => (
                  <div key={group.label} className="min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/50 mb-3.5">
                      {group.label}
                    </p>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[0.85rem] sm:text-[0.9rem] font-medium text-muted leading-relaxed"
                        >
                          <span
                            className="text-ink/25 shrink-0 mt-0.5"
                            aria-hidden
                          >
                            ✦
                          </span>
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-10 sm:pt-12">
        <DeliveryDisclaimer className="reveal text-center max-w-lg mx-auto mb-4" />
      </div>

      <div className="reveal pb-14 md:pb-20">
        <PricingGuarantees />
      </div>
    </section>
  );
}
