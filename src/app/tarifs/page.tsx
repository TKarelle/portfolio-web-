import type { Metadata } from "next";
import Link from "next/link";
import { Pricing } from "@/components/home/Pricing";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs site web | Découverte, Essentiel, Visibilité",
  description:
    "Grille novembre 2026 : Découverte gratuite, Essentiel 29 € HT/mois ou Visibilité 59 € HT/mois. Site web pour professionnelles de l’accompagnement, délai à partir de 48h.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Création de site web en abonnement"
        description="Création et maintenance de sites web pour professionnelles de l'accompagnement. Gratuit ou dès 29 € HT/mois, hébergement inclus."
        url="/tarifs"
        price="29"
      />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs", href: "/tarifs" },
        ]}
        title="Votre site, clair et pensé pour durer."
        highlight="pensé pour durer"
        description="Une offre conçue pour les professionnelles de l’accompagnement : conception, hébergement, évolutions et accompagnement inclus. Vous gardez toujours le dernier mot avant la mise en ligne."
        image="/image/sitewebvideo-poster.jpg"
        imageAlt="Aperçu d’un site livré"
        video="/image/sitewebvideo.mp4"
        videoPoster="/image/sitewebvideo-poster.jpg"
        videoLabel="Aperçu d’un site livré"
        videoByline="Sophie Bluel"
        badge="Formules d’accompagnement"
        secondaryHref="#modeles"
        secondaryLabel="Voir les formules"
      />
      <ValueBanner />
      <Pricing />
      <section className="page-x pb-10 md:pb-12 bg-bg">
        <p className="mx-auto max-w-2xl text-center text-sm sm:text-base font-medium text-muted leading-relaxed">
          Avant de choisir une durée,{" "}
          <Link
            href="/blog/abonnement-ou-paiement-unique-site-web"
            className="font-bold text-pink underline underline-offset-2 hover:text-violet transition-colors"
          >
            comprendre les différences entre abonnement et paiement unique
          </Link>
          .
        </p>
      </section>
      <ComparisonTable />
      <ContactSection />
    </>
  );
}
