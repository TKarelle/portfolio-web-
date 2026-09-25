import type { Metadata } from "next";
import Link from "next/link";
import {
  BRAND_NAME,
  CALENDLY_URL,
  CONTACT_EMAIL,
  FOUNDER_NAME,
  HAS_CALENDLY,
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
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par{" "}
              <strong className="text-ink font-extrabold">Vercel Inc.</strong>,
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Contact :{" "}
              <a
                href="https://vercel.com/contact"
                className="text-violet font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/contact
              </a>
              .
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
              Tu peux me contacter par email ({CONTACT_EMAIL})
              {HAS_CALENDLY
                ? " ou en réservant un créneau via Calendly"
                : ""}
              . Les informations que tu m&apos;envoies (nom, email, téléphone,
              description du projet) servent uniquement à répondre à ta demande.
              Elles ne sont ni vendues ni cédées à des tiers à des fins
              commerciales.
            </p>
            {HAS_CALENDLY && (
              <p className="mt-2">
                La prise de rendez-vous est gérée par Calendly (
                <a
                  href={CALENDLY_URL}
                  className="text-violet font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calendly.com
                </a>
                ), soumis à sa propre politique de confidentialité. Aucun cookie
                analytique n&apos;est déposé par ce site tant qu&apos;aucun outil
                de mesure d&apos;audience n&apos;est activé.
              </p>
            )}
            <p className="mt-2">
              Pour toute question ou demande d&apos;accès, de rectification ou
              de suppression :{" "}
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
