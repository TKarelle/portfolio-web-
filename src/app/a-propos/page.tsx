import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { CTA } from "@/data/copy";
import { FOUNDER_NAME, FOUNDER_PHOTO } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos — Développeuse web indépendante",
  description:
    "Karelle, développeuse web indépendante. Sites vitrines dès 500 € pour artisans et indépendants — livrés en 7 à 14 jours, simplement.",
  path: "/a-propos",
});

const values = [
  {
    title: "Transparence",
    text: "Je t'explique les choses clairement, et pas de frais cachés. Tu sais toujours où on en est.",
  },
  {
    title: "Simplicité",
    text: "Je rends le web accessible à ceux qui n'y connaissent rien.",
  },
  {
    title: "Qualité",
    text: "Chaque site est soigné, rapide et pensé pour convertir.",
  },
  {
    title: "Proximité",
    text: "Un seul interlocuteur. Pas une agence impersonnelle.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos", href: "/a-propos" },
        ]}
        title={`Je suis ${FOUNDER_NAME}. Ton alliée pour ton premier site.`}
        highlight="Ton alliée"
        stroke="violet"
        description="Développeuse web indépendante. J'aide les artisans et indépendants à avoir un site clair — sans prise de tête, sans attendre 3 mois."
        image={FOUNDER_PHOTO}
        imageAlt={`${FOUNDER_NAME}, développeuse web indépendante`}
        badge="Dès 500 € · sans engagement"
        frame="lime"
        secondaryHref="/tarifs"
      />
      <ValueBanner />

      <section className="py-14 md:py-20 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionHead stroke="violet" highlight="je crois">
              {"Ce en quoi je crois"}
            </SectionHead>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface rounded-[1.5rem] border-[3px] border-ink p-6 md:p-7 shadow-[4px_4px_0_#111]"
              >
                <h2 className="text-lg md:text-xl font-extrabold mb-3 text-ink">
                  <span className="float-left mr-2 -mt-0.5 text-3xl md:text-4xl font-extrabold text-pink leading-[0.9]">
                    {v.title.charAt(0)}
                  </span>
                  {v.title.slice(1)}
                </h2>
                <p className="text-sm md:text-base font-medium leading-relaxed text-muted clear-both">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg">
              {CTA.primary}
            </Button>
            <Button href="/projets" variant="outline" size="lg">
              Voir les projets
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
