import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { HAS_CALENDLY } from "@/data/site";

/**
 * CTA éditorial réutilisable (pages métier / besoin) — sans grille tarifaire.
 */
export function FutureVitrineCta() {
  return (
    <section className="scroll-mt-28 relative z-10 w-full" id="parlons-vitrine">
      <SoftBlurBand contentClassName="page-x py-20 sm:py-24 md:py-28">
        <div className="reveal text-center max-w-3xl mx-auto">
          <SectionHead size="xl">
            Parlons de votre future <TitleEm>vitrine</TitleEm>.
          </SectionHead>

          <p className="mt-6 text-base md:text-lg font-medium text-muted leading-relaxed">
            Un site qui vous ressemble, qui parle à vos visiteurs et qui aide
            Google et les IA à comprendre votre expertise.
          </p>

          <p className="mt-5 text-lg md:text-xl font-extrabold text-ink leading-snug text-balance">
            Ensemble, donnons à votre activité une présence en ligne claire,
            singulière et pensée pour durer.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            {HAS_CALENDLY ? (
              <CalendlyButton size="lg">
                Faire le point ensemble ↗
              </CalendlyButton>
            ) : (
              <Button href="/contact" size="lg">
                Faire le point ensemble ↗
              </Button>
            )}
            <p className="text-sm font-bold text-ink/50">
              30 minutes · Gratuit · Sans engagement
            </p>
          </div>
        </div>
      </SoftBlurBand>
    </section>
  );
}
