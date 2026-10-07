import type { Metadata } from "next";
import { Pricing } from "@/components/home/Pricing";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs site web : 89, 139 ou 179 €/mois selon engagement",
  description:
    "Grille octobre 2026 : 89 €/mois (24 mois), 139 €/mois (12 mois) ou 179 €/mois (6 mois). Présence en ligne déléguée, livraison 21 jours, propriété en fin d'engagement.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Création de site web en abonnement"
        description="Création et maintenance de sites web pour professionnelles de l'accompagnement. Dès 89 €/mois, hébergement inclus."
        url="/tarifs"
        price="89"
      />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs", href: "/tarifs" },
        ]}
        title="Votre site, clair et maintenu dans le temps."
        highlight="maintenu dans le temps"
        description="Grille octobre 2026 pour professionnelles de l'accompagnement : conception, hébergement et évolutions inclus. Vous validez tout avant la mise en ligne."
        image="/image/independant.jpg"
        imageAlt="Professionnelle de l'accompagnement : site web dès 89 €/mois"
        badge="Dès 89 €/mois"
        secondaryHref="#modeles"
        secondaryLabel="Voir les modèles"
      />
      <ValueBanner />
      <Pricing />
      <ComparisonTable />
      <ContactSection />
    </>
  );
}
