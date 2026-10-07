import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import {
  PricingGuarantees,
  PricingIncluded,
} from "@/components/home/PricingPromises";
import { MOTION } from "@/lib/motion";
import { CTA } from "@/data/copy";

const waveClass = ["float-wave", "float-wave-slow", "float-wave-alt"] as const;

/** Tarifs — Server Component (Sem.2). Motion via CSS view-timeline, pas d’hydratation. */
export function Pricing({
  title = "Choisissez votre modèle",
  highlight = "modèle",
}: {
  title?: string;
  highlight?: string;
} = {}) {
  return (
    <section className="scroll-mt-28 py-14 md:py-20 px-6 bg-bg" id="modeles">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <PricingIncluded />
        </div>

        <div className="reveal text-center mb-10 md:mb-12">
          <SectionHead stroke="pink" highlight={highlight}>
            {title}
          </SectionHead>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={`h-full bubble-stagger ${plan.highlight ? "md:-translate-y-3" : ""}`}
              style={{ animationDelay: `${i * MOTION.stagger}s` }}
            >
              <div
                className={`h-full ${waveClass[i % waveClass.length]}`}
                style={{
                  animationDelay: `${i * MOTION.stagger + MOTION.duration * 0.85}s`,
                }}
              >
                <div
                  className={`card card-hover p-7 md:p-8 flex flex-col relative h-full ${
                    plan.highlight
                      ? "!bg-violet !text-white !shadow-[6px_6px_0_#d4ff00] !border-lime"
                      : "bg-surface"
                  }`}
                >
                  {plan.badge ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-lime !text-ink text-xs font-bold px-4 py-1 rounded-full border-2 border-ink whitespace-nowrap">
                      {plan.badge}
                    </span>
                  ) : null}

                  <p
                    className={`text-sm font-bold uppercase tracking-wider ${
                      plan.highlight ? "text-lime" : "text-pink"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="mt-4 mb-6">
                    <p className="flex items-baseline gap-1.5 flex-wrap">
                      <span
                        className={`text-5xl font-extrabold tracking-tight ${
                          plan.highlight ? "text-white" : ""
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-lg font-semibold ${
                          plan.highlight ? "text-white/60" : "text-muted"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </p>
                  </div>

                  <p
                    className={`text-xs font-bold mb-6 ${
                      plan.highlight ? "text-lime" : "text-violet"
                    }`}
                  >
                    Livraison : {plan.delivery}
                  </p>

                  <ul
                    className={`space-y-3 mb-8 flex-1 text-sm font-medium ${
                      plan.highlight ? "text-white/85" : "text-ink/80"
                    }`}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          className={plan.highlight ? "text-lime" : "text-pink"}
                        >
                          ✦
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={plan.highlight ? "primary" : "dark"}
                    className={`w-full mt-auto ${plan.highlight ? "!text-ink" : ""}`}
                  >
                    {plan.highlight ? CTA.plan : CTA.planDiscuss}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DeliveryDisclaimer className="reveal mt-8 text-center max-w-lg mx-auto" />

        <div className="reveal">
          <PricingGuarantees />
        </div>
      </div>
    </section>
  );
}
