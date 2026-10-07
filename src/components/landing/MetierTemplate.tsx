import Image from "next/image";
import Link from "next/link";
import type { MetierPage } from "@/data/metiers";
import { metiers, metierPath } from "@/data/metiers";
import { besoinPath } from "@/data/besoins";
import { caseStudies } from "@/data/caseStudies";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { NumberedGainCards } from "@/components/ui/NumberedGainCards";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { HeroFacts } from "@/components/ui/HeroFacts";
import { pricingPlans } from "@/data/pricing";
import { resolveMetierSiblings } from "@/lib/cluster-mesh";
import { IgDecisionMatrix } from "@/components/seo/IgDecisionMatrix";

const THERAPIE_VS_SOPHRO: readonly (readonly [string, string, string])[] = [
  ["Intention de la visiteuse", "Cadre thérapeutique, motif de consultation", "Stress, sommeil, préparation mentale"],
  ["Risque de confusion", "Guérison / promesse médicale", "Coaching de performance"],
  ["Preuve utile sur le site", "Approches, limites, déroulé de séance", "Exercices, formats individuels / groupe"],
  ["Prochain pas typique", "Premier contact prudent", "Réservation de séance"],
];

export function MetierTemplate({ data }: { data: MetierPage }) {
  const study = data.caseStudyId
    ? caseStudies.find((c) => c.id === data.caseStudyId)
    : undefined;
  const recommended =
    pricingPlans.find((p) => p.id === data.recommendedPlanId) ??
    pricingPlans[0];
  const siblingSlugs = resolveMetierSiblings(data.slug, 5);
  const siblings = siblingSlugs
    .map((slug) => metiers.find((m) => m.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const gainItems = data.whyPoints.map((p, i) => ({
    n: String(i + 1).padStart(2, "0"),
    t: p.t,
    d: p.d,
  }));

  const caseHeading =
    data.caseStudyHeading ??
    (study ? `Exemple concret : ${study.title}` : "Exemple concret");

  return (
    <>
      <FaqJsonLd items={data.faqs} />
      <ServiceJsonLd
        name={`Site web pour ${data.metier}`}
        description={data.metaDescription}
        url={metierPath(data.slug)}
        price={recommended.price}
      />

      <section className="pt-36 md:pt-40 pb-12 px-6 mesh-hero">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: data.label, href: metierPath(data.slug) },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h1 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.12] tracking-tight">
                {data.h1}
              </h1>
              {/* Sem.6 — pyramide inversée : réponse (tldr) avant le mécanisme (intro) */}
              <HeroFacts
                geoSummary={data.tldr}
                proof={study?.title}
                delivery="Sous 21 jours"
              />
              <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed">
                {data.intro}
              </p>
            </div>

            <div className="photo-frame photo-frame-lime relative aspect-[4/3] max-w-lg mx-auto lg:ml-auto w-full">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover rounded-[1.1rem]"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SeoProseSections sections={data.sections} />

      {(data.slug === "therapeute" || data.slug === "sophrologue") && (
        <section className="py-12 md:py-14 px-6 bg-bg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-2">
              {data.slug === "therapeute"
                ? "Thérapeute ou sophrologue : quelle page te correspond ?"
                : "Sophrologue ou thérapeute : quelle page te correspond ?"}
            </h2>
            <p className="text-muted font-medium leading-relaxed mb-2">
              Deux métiers proches, deux intents de recherche distincts. Cette
              matrice évite de coller le même discours sur les deux URLs.
            </p>
            <IgDecisionMatrix
              caption="Matrice d'autorité — différenciation thérapeutique / sophrologie"
              headers={["Critère", "Thérapeute", "Sophrologue"]}
              rows={THERAPIE_VS_SOPHRO}
            />
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 px-6 bg-chunk-pink">
        <div className="max-w-5xl mx-auto">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-bold text-pink mb-3 tracking-wide">
              Pour {data.metierPlural}
            </p>
            <SectionHead
              align="left"
              stroke="lime"
              highlight="en pratique"
              className="mb-8"
            >
              {data.whyTitle}
            </SectionHead>
          </div>
          <div className="reveal">
            <NumberedGainCards items={gainItems} ariaLabel={data.whyTitle} />
          </div>
        </div>
      </section>

      <Pricing title={data.includedTitle} highlight="inclus" />

      {study && (
        <section className="pt-6 md:pt-8 pb-14 md:pb-20 px-6 bg-bg">
          <div className="max-w-5xl mx-auto">
            <div className="reveal mb-10 md:mb-12 text-center">
              <SectionHead stroke="pink" highlight="concret">
                {caseHeading}
              </SectionHead>
            </div>

            <article className="reveal card card-hover overflow-hidden bg-surface">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] photo-frame overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="40vw"
                    quality={75}
                  />
                  <span className="absolute top-4 left-4 bg-ink text-surface text-xs font-bold px-3 py-1 rounded-full z-10">
                    {study.category}
                  </span>
                </div>

                <div className="lg:col-span-3 p-7 md:p-9">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight leading-tight">
                    {study.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-5">
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/60">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1">
                        Avant
                      </p>
                      <p className="text-ink/80 font-medium">{study.problem}</p>
                    </div>
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/60">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1">
                        Ce que j&apos;ai fait
                      </p>
                      <p className="text-ink/80 font-medium">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-extrabold text-lg bg-ink text-lime inline-block px-4 py-2 rounded-full">
                      → {study.result}
                    </p>
                    {study.url && (
                      <Button href={study.url} variant="outline" size="sm">
                        Voir le site →
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <FAQ
        items={data.faqs}
        title={`Questions fréquentes des ${data.metierPlural}`}
        highlight={data.metierPlural}
      />

      <section className="py-16 px-6 bg-chunk-violet">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8">
            {data.closing}
          </p>
          <Button href="/contact" size="lg">
            {data.ctaLabel}
          </Button>
          <p className="mt-6 text-sm text-muted font-medium">
            Voir l&apos;{" "}
            <Link href="/" className="text-violet font-bold hover:underline">
              offre Kopio
            </Link>
            , les{" "}
            <Link href="/tarifs" className="text-violet font-bold hover:underline">
              tarifs
            </Link>
            {data.relatedBesoinSlug && (
              <>
                {" "}
                ou{" "}
                <Link
                  href={besoinPath(data.relatedBesoinSlug)}
                  className="text-violet font-bold hover:underline"
                >
                  {data.relatedBesoinLabel ?? "un besoin proche"}
                </Link>
              </>
            )}
            .
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-chunk-pink border-t border-ink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-extrabold uppercase tracking-wider text-pink mb-4">
            Autres métiers
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((m) => (
              <li key={m.slug}>
                <Link
                  href={metierPath(m.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-full border border-ink/15 bg-surface hover:bg-lime transition-colors"
                >
                  Site web pour {m.metier}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
