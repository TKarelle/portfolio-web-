import type { Metadata } from "next";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Projets et réalisations",
  description:
    "Sites livrés pour artisans et indépendants : boulangerie, coiffure, plomberie… Avant / après et résultats concrets.",
  path: "/projets",
});

export default function ProjetsPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Projets", href: "/projets" },
        ]}
        title="Des sites livrés. Des résultats concrets."
        highlight="résultats concrets"
        description="Madeleine Fragrance, boulangerie, coiffure… Voici ce que ça donne quand le site est clair, joignable, et à la hauteur de l'activité."
        video="/image/sitewebvideo.mp4"
        videoLabel="Aperçu d’un site livré : Sophie Bluel"
        badge="Preuves concrètes"
        frame="lime"
        secondaryHref="/tarifs"
      />
      <ValueBanner />
      <CaseStudies />
      <ContactSection />
    </>
  );
}
