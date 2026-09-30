import type { Metadata } from "next";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { VideoJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Projets et réalisations",
  description:
    "Études de cas Kopio : avant / livrable / résultat concret pour professionnelles de l’accompagnement.",
  path: "/projets",
  ogVideo: "/image/videopulse.mp4",
});

export default function ProjetsPage() {
  return (
    <>
      <VideoJsonLd pagePath="/projets" />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Projets", href: "/projets" },
        ]}
        title="Des sites livrés. Des résultats concrets."
        highlight="résultats concrets"
        description="Sophrologue, consultante, créatrice… Avant, livrable, résultat vérifiable. Ce que ça change, concrètement."
        video="/image/videopulse.mp4"
        videoPoster="/image/videopulse-poster.jpg"
        videoLabel="Aperçu d’un site livré : PULSE"
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
