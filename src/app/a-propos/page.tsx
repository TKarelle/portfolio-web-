import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { PageIntro } from "@/components/ui/PageIntro";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { ProfilePageJsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/data/copy";
import {
  FOUNDER_BYLINE,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  FOUNDER_ROLE,
  FOUNDER_TAGLINE,
} from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `À propos : ${FOUNDER_BYLINE}`,
  description: FOUNDER_TAGLINE,
  path: "/a-propos",
});

const values = [
  {
    title: "Transparence",
    text: "Je vous explique les choix clairement. Vous savez toujours où en est votre site, sans jargon inutile.",
  },
  {
    title: "Simplicité",
    text: "Vous n’avez pas à devenir technique. Je porte la structure, vous gardez le message et les décisions utiles.",
  },
  {
    title: "Clarté",
    text: "Chaque page doit aider Google, les IA et vos futurs clients à comprendre qui vous êtes, vite et sans détour.",
  },
  {
    title: "Proximité",
    text: "Une seule interlocutrice : moi. Pas une agence anonyme, pas un ticket support sans visage.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ProfilePageJsonLd />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos", href: "/a-propos" },
        ]}
        title={FOUNDER_BYLINE}
        highlight={FOUNDER_ROLE}
        description={FOUNDER_TAGLINE}
        image={FOUNDER_PHOTO}
        imageAlt={FOUNDER_PHOTO_ALT}
        badge="Création de site web"
        secondaryHref="/tarifs"
        secondaryLabel="Voir les formules"
      />
      <ValueBanner />

      <section className="py-14 md:py-20 page-x bg-bg">
        <div className="max-w-5xl mx-auto">
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl md:text-2xl font-extrabold leading-snug text-ink tracking-tight mb-12 md:mb-14">
            Mon métier : concevoir des sites dont la technique s&apos;efface, pour
            que votre message soit trouvé, compris, puis retenu par Google, les
            IA et vos futurs clients.
          </p>

          <div className="max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="text-center mb-6">
              <SectionHead size="xl">
                Pour qui je <TitleEm>travaille</TitleEm>
              </SectionHead>
            </div>
            <div className="space-y-4 text-base md:text-lg font-medium leading-relaxed text-muted">
              <p>
                <strong className="text-ink">Kopio</strong> s&apos;adresse aux{" "}
                <strong className="text-ink">
                  professionnelles de l&apos;accompagnement
                </strong>{" "}
                : coachs, thérapeutes, sophrologues, consultantes, assistantes
                virtuelles, naturopathes, créatrices, et aux dirigeantes qui
                portent une expertise singulière, en indépendante ou en société.
              </p>
              <p>
                Ce que je construis avec vous, ce n&apos;est pas une vitrine
                générique. C&apos;est une présence claire : un site qui parle le
                langage de ceux qui vous cherchent, assez structuré pour être
                trouvé, assez précis pour être cité.
              </p>
              <p>
                Je suis {FOUNDER_NAME}. Derrière Kopio, il n&apos;y a pas une
                équipe : il y a une interlocutrice, diplômée en développement
                web, qui suit votre site dans la durée.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <SectionHead size="xl">
              Ce en quoi je <TitleEm>crois</TitleEm>
            </SectionHead>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {values.map((v) => (
              <SurfaceCard key={v.title} as="article" className="h-full">
                <h3 className="text-lg md:text-xl font-extrabold mb-3 text-ink tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed text-muted">
                  {v.text}
                </p>
              </SurfaceCard>
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
