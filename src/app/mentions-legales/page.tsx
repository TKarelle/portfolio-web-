import type { Metadata } from "next";
import Link from "next/link";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  HAS_PHONE,
  FOUNDER_NAME,
  SITE_URL,
} from "@/data/site";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: `Mentions légales et informations de contact du site ${BRAND_NAME}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-6 bg-bg">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales", href: "/mentions-legales" },
          ]}
        />

        <h1 className="mt-8 text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
          Mentions légales
        </h1>

        <div className="space-y-8 text-sm md:text-base text-muted font-medium leading-relaxed">
          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">Éditeur</h2>
            <p>
              Le site {SITE_URL} est édité par {FOUNDER_NAME}, développeuse web
              indépendante.
            </p>
            <p className="mt-2">
              Email :{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet font-bold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            {HAS_PHONE && (
              <p className="mt-1">Téléphone : {CONTACT_PHONE_DISPLAY}</p>
            )}
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par un prestataire d&apos;hébergement web.
              Les informations détaillées d&apos;hébergement peuvent être
              communiquées sur demande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo) est protégé. Toute reproduction non autorisée
              est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">
              Données personnelles
            </h2>
            <p>
              Les informations envoyées via le formulaire de contact (prénom,
              email ou téléphone, description du projet) sont utilisées
              uniquement pour répondre à ta demande. Elles ne sont pas vendues
              ni cédées à des tiers.
            </p>
            <p className="mt-2">
              Pour toute question ou demande de suppression :{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet font-bold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <p>
            <Link href="/contact" className="font-bold text-pink hover:underline">
              Retour au contact
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
