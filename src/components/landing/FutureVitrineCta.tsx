import type { ReactNode } from "react";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { HAS_CALENDLY } from "@/data/site";

type FutureVitrineCtaProps = {
  /** Titre H2 (défaut : future vitrine) */
  title?: ReactNode;
  lead?: string;
  closing?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Affiche le sous-titre 30 min (défaut true) */
  showMeta?: boolean;
};

/**
 * CTA éditorial réutilisable (pages métier / besoin / hubs) — sans grille tarifaire.
 */
export function FutureVitrineCta({
  title = (
    <>
      Parlons de votre future <TitleEm>vitrine</TitleEm>.
    </>
  ),
  lead = "Un site qui vous ressemble, et qui parle le langage de Google, des IA et de vos futurs clients.",
  closing = "Ensemble, donnons à votre activité une présence claire, singulière et pensée pour durer.",
  primaryLabel = "Faire le point ensemble",
  primaryHref = "/contact",
  secondaryLabel = "Voir les formules",
  secondaryHref = "/tarifs",
  showMeta = true,
}: FutureVitrineCtaProps = {}) {
  const useCalendly =
    HAS_CALENDLY && primaryHref === "/contact" && !primaryLabel.startsWith("Créer");

  return (
    <section className="scroll-mt-28 relative z-10 w-full" id="parlons-vitrine">
      <SoftBlurBand contentClassName="page-x py-20 sm:py-24 md:py-28">
        <div className="reveal text-center max-w-3xl mx-auto">
          <SectionHead size="xl">{title}</SectionHead>

          {lead ? (
            <p className="mt-6 text-base md:text-lg font-medium text-muted leading-relaxed">
              {lead}
            </p>
          ) : null}

          {closing ? (
            <p className="mt-5 text-lg md:text-xl font-extrabold text-ink leading-snug text-balance">
              {closing}
            </p>
          ) : null}

          <div className="mt-10 flex flex-col items-center gap-3">
            {useCalendly ? (
              <CalendlyButton size="lg">{primaryLabel}</CalendlyButton>
            ) : (
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel ? (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            ) : null}
            {showMeta ? (
              <p className="text-sm font-bold text-ink/50">
                30 minutes · Gratuit 
              </p>
            ) : null}
          </div>
        </div>
      </SoftBlurBand>
    </section>
  );
}
