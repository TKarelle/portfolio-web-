import Link from "next/link";
import type { MetierPage } from "@/data/metiers";
import { metiers, metierPath } from "@/data/metiers";
import { besoinPath } from "@/data/besoins";
import { caseStudies } from "@/data/caseStudies";
import { FAQ } from "@/components/home/FAQ";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { NumberedGainCards } from "@/components/ui/NumberedGainCards";
import { LandingHero } from "@/components/ui/LandingHero";
import { MediaCard } from "@/components/ui/MediaCard";
import {
  FaqJsonLd,
  HowToJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { pricingPlans } from "@/data/pricing";
import { resolveMetierSiblings } from "@/lib/cluster-mesh";
import { metierAnchor } from "@/lib/black-ink";
import { IgDecisionMatrix } from "@/components/seo/IgDecisionMatrix";
import { BlackInkBridge } from "@/components/seo/BlackInkBridge";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";
import { EditorialSteps } from "@/components/ui/EditorialSteps";
import { InlineProse } from "@/components/seo/InlineProse";

const THERAPIE_VS_SOPHRO: readonly (readonly [string, string, string])[] = [
  [
    "Intention de la visiteuse",
    "Cadre thérapeutique, motif de consultation",
    "Stress, sommeil, préparation mentale",
  ],
  [
    "Risque de confusion",
    "Guérison / promesse médicale",
    "Coaching de performance",
  ],
  [
    "Preuve utile sur le site",
    "Approches, limites, déroulé de séance",
    "Exercices, formats individuels / groupe",
  ],
  ["Prochain pas typique", "Premier contact prudent", "Réservation de séance"],
];

function metierDateLabel(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return undefined;
  const label = d.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function withWhyHighlight(title: string, highlight?: string) {
  if (!highlight) return title;
  const idx = title.indexOf(highlight);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <TitleEm>{highlight}</TitleEm>
      {title.slice(idx + highlight.length)}
    </>
  );
}

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

  const heroEyebrow =
    metierDateLabel(data.updatedAt) ?? data.eyebrow ?? undefined;

  const schema = data.serviceSchema;
  const serviceName = schema?.name ?? `Site web pour ${data.metier}`;
  const serviceDescription = schema?.description ?? data.metaDescription;
  const servicePrice = schema?.omitPrice ? undefined : recommended.price;

  return (
    <>
      <FaqJsonLd items={data.faqs} />
      <ServiceJsonLd
        name={serviceName}
        serviceType={schema?.serviceType}
        description={serviceDescription}
        url={metierPath(data.slug)}
        price={servicePrice}
      />
      {data.processSteps && data.processSteps.length > 0 ? (
        <HowToJsonLd
          name={
            data.processTitle ??
            `Comment se déroule la création d’un site pour ${data.metier}`
          }
          description={serviceDescription}
          steps={data.processSteps.map((step) => ({
            name: step.title,
            text: step.body,
          }))}
        />
      ) : null}

      <LandingHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: data.label, href: metierPath(data.slug) },
        ]}
        title={data.h1}
        highlight={data.h1Highlight}
        eyebrow={heroEyebrow}
        intro={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
        geoSummary={data.tldr}
        proof={data.factChips ? undefined : study?.title}
        delivery="Sous 21 jours"
        factChips={data.factChips}
      />

      <section className="py-16 md:py-20 page-x bg-bg">
        <div className="w-full">
          <div className="reveal mb-10 md:mb-12 text-center max-w-3xl mx-auto">
            <SectionHead size="xl">
              {withWhyHighlight(data.whyTitle, data.whyHighlight)}
            </SectionHead>
          </div>
          <div className="reveal">
            <NumberedGainCards items={gainItems} ariaLabel={data.whyTitle} />
          </div>
        </div>
      </section>

      <SeoProseSections sections={data.sections} startTone="surface" />

      {(data.slug === "therapeute" || data.slug === "sophrologue") && (
        <section className="py-16 md:py-20 page-x bg-bg">
          <div className="w-full max-w-3xl mx-auto text-center">
            <SectionHead size="xl" className="mb-3 !max-w-none">
              {data.slug === "therapeute" ? (
                <>
                  Thérapeute ou sophrologue : quelle page vous{" "}
                  <TitleEm>correspond</TitleEm>&nbsp;?
                </>
              ) : (
                <>
                  Sophrologue ou thérapeute : quelle page vous{" "}
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

      {data.beforeAfter ? (
        <section className="py-16 md:py-20 page-x bg-surface">
          <div className="w-full max-w-5xl mx-auto">
            <div className="reveal mb-8 md:mb-10 text-center max-w-3xl mx-auto">
              <SectionHead size="xl">{data.beforeAfter.heading}</SectionHead>
              <p className="mt-5 text-base md:text-lg font-medium text-muted leading-relaxed">
                {data.beforeAfter.intro}
              </p>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
              {[data.beforeAfter.before, data.beforeAfter.after].map((side) => (
                <figure key={side.caption} className="min-w-0">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-3">
                    {side.caption}
                  </p>
                  <MediaCard
                    src={side.image}
                    alt={side.alt}
                    aspect="16/10"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <figcaption className="mt-4 text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed">
                    {side.body}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="reveal mt-12 md:mt-14">
              <h3 className="text-center text-xl md:text-2xl font-extrabold tracking-tight text-ink mb-8">
                {data.beforeAfter.improvementsTitle}
              </h3>
              <NumberedGainCards
                items={data.beforeAfter.improvements.map((item, i) => ({
                  n: String(i + 1).padStart(2, "0"),
                  t: item.t,
                  d: item.d,
                }))}
                ariaLabel={data.beforeAfter.improvementsTitle}
              />
            </div>

            <p className="reveal mt-10 text-center mx-auto max-w-2xl text-[0.95rem] md:text-base font-medium text-muted leading-relaxed">
              {data.beforeAfter.closing}
            </p>

            {data.beforeAfter.projectHref ? (
              <div className="reveal mt-8 flex justify-center">
                <Button
                  href={data.beforeAfter.projectHref}
                  variant="outline"
                  size="lg"
                >
                  {data.beforeAfter.projectLabel ?? "Découvrir mes réalisations"}
                </Button>
              </div>
            ) : null}
          </div>
        </section>
      ) : study ? (
        <section className="py-16 md:py-20 page-x bg-surface">
          <div className="w-full">
            <div className="reveal mb-10 md:mb-12 text-center">
              <SectionHead size="xl">{caseHeading}</SectionHead>
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
      ) : null}

      {data.processSteps && data.processSteps.length > 0 ? (
        <section className="py-16 md:py-20 page-x bg-bg">
          <div className="w-full max-w-5xl mx-auto">
            <div className="reveal mb-10 md:mb-12 text-center max-w-3xl mx-auto">
              <SectionHead size="xl">
                {data.processTitle ?? "Comment se déroule la création ?"}
              </SectionHead>
            </div>
            <div className="reveal">
              <EditorialSteps
                columns={2}
                items={data.processSteps.map((step, i) => ({
                  step: String(i + 1).padStart(2, "0"),
                  title: step.title,
                  paragraphs: [step.body],
                }))}
              />
            </div>
          </div>
        </section>
      ) : null}

      <FAQ
        items={data.faqs}
        title={
          <>
            Questions fréquentes des <TitleEm>{data.metierPlural}</TitleEm>
          </>
        }
      />

      {data.slug === "coach" ? (
        <FutureVitrineCta
          title={
            <>
              Parlons de votre future <TitleEm>vitrine</TitleEm>
            </>
          }
          lead={data.closing}
          closing="Chez Kopio, je crée des sites internet pour les coachs qui veulent une présence web aussi professionnelle que leur expertise."
          primaryLabel="Faire le point ensemble"
          secondaryLabel="Découvrir les formules Kopio"
          secondaryHref="/tarifs"
        />
      ) : (
        <FutureVitrineCta />
      )}

      <section className="py-12 page-x border-t border-ink/8 bg-surface">
        <div className="w-full">
          <BlackInkBridge
            variant="metier"
            keyword={data.keyword}
            relatedBesoin={
              data.relatedBesoinSlug
                ? {
                    href: besoinPath(data.relatedBesoinSlug),
                    anchor: data.relatedBesoinLabel ?? "un besoin proche",
                  }
                : undefined
            }
            siblings={siblings.slice(0, 2).map((m) => ({
              href: metierPath(m.slug),
              anchor: metierAnchor(m.metier),
            }))}
          />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-4 mt-10">
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
          {data.slug === "coach" ? (
            <p className="mt-8 text-sm font-medium text-muted leading-relaxed max-w-2xl">
              <InlineProse text="Vous préférez comparer les supports avant de décider ? [LinkedIn ou site internet : que choisir ?](/comparatif/linkedin-ou-site-web). Pour une vue d’ensemble de la création : [création de site web](/creation-de-site-web)." />
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
