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
  title: "Mentions légales | Informations légales du site",
  description: `Mentions légales, données personnelles et mesure d’audience du site ${BRAND_NAME}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <section className="pt-36 md:pt-40 pb-20 px-6 bg-bg">
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
                className="text-ink font-bold underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
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
                className="text-ink font-bold underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
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
              Responsable du traitement : {FOUNDER_NAME} ({CONTACT_EMAIL}),
              pour le site {BRAND_NAME}.
            </p>
            <p className="mt-2">
              <strong className="text-ink font-extrabold">
                Données que vous me confiez volontairement
              </strong>{" "}
              (prénom ou nom, email, téléphone éventuel, message, projet) :
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                formulaire de contact (ouverture de votre messagerie vers{" "}
                {CONTACT_EMAIL}) ;
              </li>
              <li>
                Test des 10 Secondes et déblocage d&apos;articles (prénom +
                email) ;
              </li>
              {HAS_CALENDLY ? (
                <li>prise de rendez-vous via Calendly ;</li>
              ) : null}
            </ul>
            <p className="mt-2">
              Finalités : répondre à votre demande, vous envoyer le résultat du
              test ou le contenu débloqué, et éventuellement vous recontacter au
              sujet de Kopio si vous avez laissé vos coordonnées. Base légale :
              votre consentement et, le cas échéant, l&apos;exécution de mesures
              précontractuelles à votre demande. Les données ne sont ni vendues
              ni cédées à des fins commerciales.
            </p>
            <p className="mt-2">
              Destinataires techniques (sous-traitants) : votre message ou lead
              peut transiter par{" "}
              <strong className="text-ink font-extrabold">Web3Forms</strong>{" "}
              (acheminement vers mon email) et être journalisé côté serveur pour
              le suivi des leads. L&apos;hébergeur du site est Vercel (voir
              ci-dessus).
              {HAS_CALENDLY
                ? " La prise de rendez-vous est gérée par Calendly, soumis à sa propre politique de confidentialité."
                : ""}{" "}
              Conservation : le temps nécessaire au traitement de votre demande,
              puis archivage raisonnable des échanges professionnels, sauf
              demande de suppression plus tôt.
            </p>
            {HAS_CALENDLY ? (
              <p className="mt-2">
                Calendly :{" "}
                <a
                  href={CALENDLY_URL}
                  className="text-ink font-bold underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calendly.com
                </a>
                .
              </p>
            ) : null}
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">
              Mesure d&apos;audience
            </h2>
            <p>
              Ce site utilise des mesures d&apos;audience anonymes et
              respectueuses de la vie privée, sans aucun dépôt de cookie de
              suivi. En pratique :{" "}
              <strong className="text-ink font-extrabold">
                Vercel Web Analytics
              </strong>{" "}
              compte les pages vues de façon agrégée, sans identifier une
              personne et sans cookie de tracking publicitaire. Ces statistiques
              servent uniquement à comprendre quelles pages sont utiles.
            </p>
            <p className="mt-2">
              Si un outil de type Google Analytics était activé un jour via une
              configuration dédiée, cette page serait mise à jour et, le cas
              échéant, un consentement cookies serait demandé. Tant que ce
              n&apos;est pas le cas, aucun cookie de suivi n&apos;est déposé
              pour la mesure d&apos;audience.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-ink mb-2">Vos droits</h2>
            <p>
              Vous pouvez demander l&apos;accès, la rectification, l&apos;effacement
              ou la limitation des données vous concernant, ainsi que vous
              opposer à un traitement non nécessaire. Pour toute question ou
              exercice de vos droits :{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-ink font-bold underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
              >
                {CONTACT_EMAIL}
              </a>
              . Vous pouvez aussi introduire une réclamation auprès de la CNIL
              (cnil.fr).
            </p>
          </section>

          <p>
            <Link
              href="/contact"
              className="font-bold text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
            >
              Retour au contact
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
