import Link from "next/link";
import type { MetierPage } from "@/data/metiers";
import { metiers, metierPath } from "@/data/metiers";
import { besoinPath } from "@/data/besoins";
import { caseStudies } from "@/data/caseStudies";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { NumberedGainCards } from "@/components/ui/NumberedGainCards";
import { LandingHero } from "@/components/ui/LandingHero";
import { MediaCard } from "@/components/ui/MediaCard";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { pricingPlans } from "@/data/pricing";
import { resolveMetierSiblings } from "@/lib/cluster-mesh";
import { metierAnchor } from "@/lib/black-ink";
import { IgDecisionMatrix } from "@/components/seo/IgDecisionMatrix";
import { BlackInkBridge } from "@/components/seo/BlackInkBridge";

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

      <LandingHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: data.label, href: metierPath(data.slug) },
        ]}
        title={data.h1}
        intro={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
        geoSummary={data.tldr}
        proof={study?.title}
        delivery="Sous 21 jours"
      />

      <SeoProseSections sections={data.sections} />

      {(data.slug === "therapeute" || data.slug === "sophrologue") && (
        <section className="py-16 md:py-20 px-5 sm:px-8 bg-bg">
          <div className="max-w-3xl mx-auto">
            <SectionHead size="xl" align="left" className="mb-3 !max-w-none">
              {data.slug === "therapeute" ? (
                <>
                  Thérapeute ou sophrologue : quelle page te{" "}
                  <TitleEm>correspond</TitleEm>&nbsp;?
                </>
              ) : (
                <>
                  Sophrologue ou thérapeute : quelle page te{" "}
                  <TitleEm>correspond</TitleEm>&nbsp;?
                </>
              )}
            </SectionHead>
            <p className="text-muted font-medium leading-relaxed mb-8">
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

      <section className="py-16 md:py-20 px-5 sm:px-8 bg-bg">
        <div className="max-w-5xl mx-auto">
          <div className="reveal max-w-3xl mb-10">
            <SectionHead align="left" size="xl" eyebrow={`Pour ${data.metierPlural}`}>
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
        <section className="py-16 md:py-20 px-5 sm:px-8 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="reveal mb-10 md:mb-12 text-center">
              <SectionHead size="xl">
                {caseHeading}
              </SectionHead>
            </div>

            <article className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <MediaCard
                  src={study.image}
                  alt={study.imageAlt}
                  aspect="16/10"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35">
                  {study.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  {study.title}
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-2">
                      Avant
                    </p>
                    <p className="text-base font-medium text-ink/80 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-2">
                      Ce que j&apos;ai fait
                    </p>
                    <p className="text-base font-medium text-ink/80 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-2">
                      Résultat
                    </p>
                    <p className="text-base font-extrabold text-ink leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
                {study.url ? (
                  <div>
                    <Button href={study.url} variant="outline" size="sm">
                      Voir le site →
                    </Button>
                  </div>
                ) : null}
              </div>
            </article>
          </div>
        </section>
      )}

      <FAQ
        items={data.faqs}
        title={
          <>
            Questions fréquentes des <TitleEm>{data.metierPlural}</TitleEm>
          </>
        }
      />

      <section className="py-16 md:py-20 px-5 sm:px-8 bg-bg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8">
            {data.closing}
          </p>
          <Button href="/contact" size="lg">
            {data.ctaLabel}
          </Button>
          <BlackInkBridge
            variant="metier"
            keyword={data.keyword}
            relatedBesoin={
              data.relatedBesoinSlug
                ? {
                    href: besoinPath(data.relatedBesoinSlug),
                    anchor:
                      data.relatedBesoinLabel ?? "un besoin proche",
                  }
                : undefined
            }
            siblings={siblings.slice(0, 2).map((m) => ({
              href: metierPath(m.slug),
              anchor: metierAnchor(m.metier),
            }))}
          />
        </div>
      </section>

      <section className="py-12 px-5 sm:px-8 border-t border-ink/8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-4">
            Métiers du même cocon
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((m) => (
              <li key={m.slug}>
                <Link
                  href={metierPath(m.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-[var(--rounded-large)] bg-ink/5 text-ink hover:bg-ink/10 transition-colors"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
