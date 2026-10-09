import type { Metadata } from "next";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { TitleEm } from "@/components/ui/SectionHead";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { VideoJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Projets et réalisations",
  description:
    "Études de cas Kopio : avant / livrable / résultat concret pour professionnelles de l’accompagnement.",
  path: "/projets",
  ogVideo: "/image/videosophie.mp4",
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
        title={
          <>
            Des sites livrés.
            <br />
            Des résultats <TitleEm>concrets</TitleEm>.
          </>
        }
        description="Coach, consultante, créatrice… Avant, livrable, résultat vérifiable. Ce que ça change, concrètement."
        video="/image/videosophie.mp4"
        videoPoster="/image/sophie-poster.jpg"
        videoLabel="Aperçu d’un site livré : Sophie Delmas"
        badge="Preuves concrètes"
        secondaryHref="/tarifs"
      />
      <ValueBanner />
      <CaseStudies />
      <ContactSection />
    </>
  );
}
