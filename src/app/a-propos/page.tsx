import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { PageIntro } from "@/components/ui/PageIntro";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { ProfilePageJsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/data/copy";
import { FOUNDER_NAME, FOUNDER_PHOTO, FOUNDER_PHOTO_ALT } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos : développeuse web pour l'accompagnement",
  description:
    "Karelle, développeuse web indépendante. Sites pour professionnelles de l'accompagnement dès 89 €/mois, hébergement et évolutions inclus.",
  path: "/a-propos",
});

const values = [
  {
    title: "Transparence",
    text: "Je t'explique les choses clairement, et pas de frais cachés. Tu sais toujours où on en est.",
  },
  {
    title: "Simplicité",
    text: "Je rends le web accessible à celles qui n'y connaissent rien.",
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
      <ProfilePageJsonLd />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos", href: "/a-propos" },
        ]}
        title={`Je suis ${FOUNDER_NAME}. Ton alliée pour ton site.`}
        highlight="Ton alliée"
        description="Développeuse web indépendante. j'aide les professionnelles de l'accompagnement à avoir un site clair : sans prise de tête, sans attendre 3 mois."
        image={FOUNDER_PHOTO}
        imageAlt={FOUNDER_PHOTO_ALT}
        badge="Dès 89 €/mois"
        secondaryHref="/tarifs"
      />
      <ValueBanner />

      <section className="py-14 md:py-20 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl md:text-2xl font-extrabold leading-snug text-ink mb-12 md:mb-14">
            Mon métier, c&apos;est de concevoir des architectures web invisibles,
            fluides et ultra-rapides, pour que la technique s&apos;efface
            totalement au profit de votre message.
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
                virtuelles, naturopathes, créatrices. Sites en abonnement dès{" "}
                89&nbsp;€/mois — conception, hébergement et évolutions inclus.
              </p>
              <p>
                Ce n&apos;est plus une offre pour artisans du bâtiment, plombiers
                ou entreprises de travaux. Les anciennes pages sur ces métiers
                redirigent vers la niche actuelle : l&apos;entité indexée est{" "}
                <strong className="text-ink">
                  Karelle / Kopio — sites pour l&apos;accompagnement
                </strong>
                , pas le BTP.
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
