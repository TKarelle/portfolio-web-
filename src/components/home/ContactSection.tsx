import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { Button } from "@/components/ui/Button";
import { EditorialSteps } from "@/components/ui/EditorialSteps";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { CTA } from "@/data/copy";
import { CONTACT_EMAIL, HAS_CALENDLY } from "@/data/site";

/** Contact — SoftBlurBand + EditorialSteps (même langage que le process). */
export function ContactSection({
  headingAs = "h2",
}: {
  headingAs?: "h1" | "h2";
} = {}) {
  return (
    <section
      className="scroll-mt-28 relative z-10 w-full pb-[env(safe-area-inset-bottom)]"
      id="contact"
    >
      <SoftBlurBand contentClassName="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16 md:mb-20">
          <SectionHead as={headingAs} size="xl">
            Parlons de votre <TitleEm>pratique</TitleEm>.
          </SectionHead>
        </div>

        <div className="reveal">
          <EditorialSteps
            items={[
              {
                step: "01",
                title: "Faire le point",
                paragraphs: [
                  "30 minutes pour parler de votre activité, de votre site et de ce que vous aimeriez faire évoluer.",
                  "Appel découverte gratuit, sans engagement. Vous choisissez directement votre créneau dans mon agenda.",
                ],
                action: HAS_CALENDLY ? (
                  <CalendlyButton size="lg">{CTA.discovery}</CalendlyButton>
                ) : (
                  <p className="text-sm font-bold text-muted">
                    Agenda bientôt disponible.
                  </p>
                ),
              },
              {
                step: "02",
                title: "M’écrire",
                paragraphs: [
                  "Vous préférez prendre le temps de poser vos idées ? Envoyez-moi un mail.",
                  "Je vous réponds personnellement sous 24 h.",
                ],
                action: (
                  <Button
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demande de détails : site web")}`}
                    variant="dark"
                    size="lg"
                  >
                    {CTA.mail}
                  </Button>
                ),
              },
            ]}
          />
        </div>

        <p className="reveal mt-16 sm:mt-20 md:mt-24 text-center max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-extrabold text-ink tracking-tight leading-snug text-balance">
          Votre expertise est déjà là.
          <br />
          Parlons de la façon de la faire vivre en ligne.
        </p>
      </SoftBlurBand>
    </section>
  );
}
