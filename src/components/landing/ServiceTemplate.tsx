import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { ServicePageData } from "@/data/services";
import { servicePath } from "@/data/services";
import { MotDeKarelle } from "@/components/blog/MotDeKarelle";
import { FAQ } from "@/components/home/FAQ";
import { QuizLeadMagnet } from "@/components/home/QuizLeadMagnet";
import { CreationEmotionalHero } from "@/components/landing/CreationEmotionalHero";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";
import { PillarsCarousel } from "@/components/landing/PillarsCarousel";
import { ServiceFeatureBand } from "@/components/landing/ServiceFeatureBand";
import { Button } from "@/components/ui/Button";
import { LandingHero } from "@/components/ui/LandingHero";
import { PhotoScrollStory } from "@/components/ui/PhotoScrollStory";
import { SectionCta } from "@/components/ui/SectionCta";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { EditorialSteps } from "@/components/ui/EditorialSteps";
import {
  DefinedTermTechArticleJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { InlineProse } from "@/components/seo/InlineProse";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { ServiceCompareTable } from "@/components/landing/ServiceCompareTable";
import { CTA } from "@/data/copy";
import { buildPageMetadata } from "@/lib/metadata";
import { emphasizeTitle } from "@/lib/title-emphasis";

export function serviceMetadata(data: ServicePageData): Metadata {
  const base = buildPageMetadata({
    title: data.title,
    description: data.metaDescription,
    path: servicePath(data.slug),
  });
  return {
    ...base,
    title: { absolute: data.title },
  };
}

type ContentBlock =
  | "pillars"
  | "sections"
  | "stages"
  | "featureBand"
  | "compareTable";
type SectionTone = "bg" | "surface";

const DEFAULT_ORDER: ContentBlock[] = [
  "featureBand",
  "pillars",
  "sections",
  "stages",
];

function toneClass(tone: SectionTone) {
  return tone === "bg" ? "bg-bg" : "bg-surface";
}

function flipTone(tone: SectionTone): SectionTone {
  return tone === "bg" ? "surface" : "bg";
}

/** Alloue un fond, puis alterne (séparation visuelle des sections). */
function takeTone(ref: { current: SectionTone }): SectionTone {
  const tone = ref.current;
  ref.current = flipTone(tone);
  return tone;
}

function PillarsBlock({
  data,
  bgClass,
}: {
  data: ServicePageData;
  bgClass: string;
}) {
  if (!data.pillars) return null;

  if (data.pillars.layout === "carousel") {
    return (
      <PillarsCarousel
        h2={data.pillars.h2}
        h2Highlight={data.pillars.h2Highlight}
        items={data.pillars.items}
        className={bgClass}
      />
    );
  }

  const hasCtas = data.pillars.items.some((item) => item.cta);
  const count = data.pillars.items.length;
  const gridCols = hasCtas
    ? "md:grid-cols-3"
    : count === 4
      ? "md:grid-cols-2"
      : count >= 3
        ? "md:grid-cols-3"
        : "";

  return (
    <section className={`py-14 md:py-20 page-x ${bgClass}`}>
      {data.pillars.h2 ? (
        <div className="w-full max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <SectionHead size="lg">
            {data.pillars.h2Highlight
              ? emphasizeTitle(data.pillars.h2, data.pillars.h2Highlight)
              : data.pillars.h2}
          </SectionHead>
        </div>
      ) : null}
      <ul
        className={`w-full max-w-5xl mx-auto grid grid-cols-1 gap-10 md:gap-8 ${gridCols}`}
      >
        {data.pillars.items.map((item) => (
          <li key={item.title} className="text-center flex flex-col">
            <h3 className="text-lg md:text-xl font-extrabold text-ink tracking-tight leading-snug mb-3">
              {item.title}
            </h3>
            <div className="space-y-3 flex-1">
              {item.body.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="text-muted font-medium leading-[1.75] max-w-2xl mx-auto text-[0.95rem] md:text-base"
                >
                  <InlineProse text={para} />
                </p>
              ))}
            </div>
            {item.cta ? (
              <div className="mt-6">
                <Button href={item.cta.href} size="sm" variant="outline">
                  {item.cta.label}
                </Button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function StagesBlock({
  data,
  bgClass,
}: {
  data: ServicePageData;
  bgClass: string;
}) {
  if (!data.stages) return null;

  if (data.stages.layout === "carousel") {
    return (
      <>
        <PillarsCarousel
          h2={data.stages.h2}
          h2Highlight={data.stages.h2Highlight}
          intro={data.stages.intro}
          className={bgClass}
          items={data.stages.items.map((s) => ({
            label: s.step,
            title: s.title,
            body: s.body
              ? s.body.split("\n\n").filter(Boolean).join(" ")
              : "",
            image: s.image,
            imageAlt: s.imageAlt ?? s.title,
          }))}
        />
        {data.stages.outro ? (
          <div className={`page-x pb-14 md:pb-20 -mt-4 md:-mt-6 ${bgClass}`}>
            <p className="text-center text-base md:text-[1.05rem] font-medium text-ink/75 leading-[1.75] max-w-2xl mx-auto">
              <InlineProse text={data.stages.outro} />
            </p>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <section className={`py-14 md:py-20 page-x ${bgClass}`}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <SectionHead size="lg">
            {data.stages.h2Highlight
              ? emphasizeTitle(data.stages.h2, data.stages.h2Highlight)
              : data.stages.h2}
          </SectionHead>
          {data.stages.intro
            ? data.stages.intro.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="mt-5 text-base md:text-lg font-medium text-muted leading-relaxed first:mt-5"
                >
                  {para}
                </p>
              ))
            : null}
        </div>
        <EditorialSteps
          columns={3}
          items={data.stages.items.map((s) => ({
            step: s.step,
            title: s.title,
            paragraphs: s.body ? s.body.split("\n\n").filter(Boolean) : [],
          }))}
        />
        {data.stages.outro ? (
          <p className="mt-12 md:mt-14 text-center text-base md:text-[1.05rem] font-medium text-ink/75 leading-[1.75] max-w-2xl mx-auto">
            <InlineProse text={data.stages.outro} />
          </p>
        ) : null}
      </div>
    </section>
  );
}

function ServiceSections({
  data,
  toneRef,
}: {
  data: ServicePageData;
  toneRef: { current: SectionTone };
}) {
  if (data.sections.length === 0) return null;

  const nodes: ReactNode[] = [];
  let proseBatch: typeof data.sections = [];

  const flushProse = () => {
    if (proseBatch.length === 0) return;
    const start = takeTone(toneRef);
    for (let i = 1; i < proseBatch.length; i++) takeTone(toneRef);
    nodes.push(
      <SeoProseSections
        key={proseBatch[0].h2}
        sections={proseBatch}
        startTone={start}
      />,
    );
    proseBatch = [];
  };

  for (const section of data.sections) {
    if (section.layout === "photoScroll") {
      flushProse();
      const title = /[.!?]$/.test(section.h2) ? section.h2 : `${section.h2}.`;
      const paragraphs = [
        title,
        ...section.body.split("\n\n").filter(Boolean),
      ];
      /* SoftBlurBand : la section suivante repart en lavande */
      toneRef.current = "bg";
      nodes.push(
        <PhotoScrollStory
          key={section.h2}
          title={section.h2}
          image={section.image ?? data.image}
          imageAlt={section.imageAlt ?? data.imageAlt}
          paragraphs={paragraphs}
          cta={
            <SectionCta
              href={data.emotionalHero?.primaryCta?.href ?? "/contact"}
              align="left"
              className="lg:justify-start"
            >
              {data.emotionalHero?.primaryCta?.label ?? CTA.primary}
            </SectionCta>
          }
        />,
      );
      continue;
    }
    proseBatch.push(section);
  }
  flushProse();

  return <>{nodes}</>;
}

function ctaTitle(data: NonNullable<ServicePageData["cta"]>): ReactNode {
  if (data.titleHighlight && data.title.includes(data.titleHighlight)) {
    const idx = data.title.indexOf(data.titleHighlight);
    return (
      <>
        {data.title.slice(0, idx)}
        <TitleEm>{data.titleHighlight}</TitleEm>
        {data.title.slice(idx + data.titleHighlight.length)}
      </>
    );
  }
  return data.title;
}

function LeadBlock({
  data,
  bgClass,
}: {
  data: ServicePageData;
  bgClass: string;
}) {
  if (!data.lead && !data.leadTitle) return null;
  return (
    <section className={`py-12 md:py-16 page-x ${bgClass}`}>
      <div className="w-full max-w-3xl mx-auto text-center space-y-5">
        {data.leadTitle ? (
          <SectionHead size="lg">
            {emphasizeTitle(
              data.leadTitle,
              data.leadTitleHighlight,
              data.leadTitleBreakAfter,
            )}
          </SectionHead>
        ) : null}
        {data.lead
          ? data.lead.split("\n\n").map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-base md:text-[1.05rem] font-medium text-ink/75 leading-[1.75]"
              >
                {para}
              </p>
            ))
          : null}
      </div>
    </section>
  );
}

function ServiceBody({ data }: { data: ServicePageData }) {
  const order = data.contentOrder ?? DEFAULT_ORDER;
  const leadAfterFeature = Boolean(data.featureBand);
  /** Après SoftBlurBand : lavande d’abord, puis blanc, etc. */
  const toneRef = { current: "bg" as SectionTone };

  return (
    <>
      {!leadAfterFeature && (data.lead || data.leadTitle) ? (
        <LeadBlock
          data={data}
          bgClass={toneClass(takeTone(toneRef))}
        />
      ) : null}

      {order.map((block) => {
        if (block === "featureBand") {
          return (
            <div key={block}>
              {data.featureBand ? (
                <ServiceFeatureBand data={data.featureBand} />
              ) : null}
              {leadAfterFeature && (data.lead || data.leadTitle) ? (
                <LeadBlock
                  data={data}
                  bgClass={toneClass(takeTone(toneRef))}
                />
              ) : null}
            </div>
          );
        }

        if (block === "pillars" && data.pillars) {
          return (
            <PillarsBlock
              key={block}
              data={data}
              bgClass={toneClass(takeTone(toneRef))}
            />
          );
        }

        if (block === "sections" && data.sections.length > 0) {
          return (
            <ServiceSections key={block} data={data} toneRef={toneRef} />
          );
        }

        if (block === "stages" && data.stages) {
          return (
            <StagesBlock
              key={block}
              data={data}
              bgClass={toneClass(takeTone(toneRef))}
            />
          );
        }

        if (block === "compareTable" && data.compareTable) {
          return (
            <ServiceCompareTable
              key={block}
              data={data.compareTable}
              className={toneClass(takeTone(toneRef))}
            />
          );
        }

        return null;
      })}

      {data.motDeKarelle ? (
        <section
          className={`py-10 md:py-14 page-x ${toneClass(takeTone(toneRef))}`}
        >
          <MotDeKarelle>{data.motDeKarelle}</MotDeKarelle>
        </section>
      ) : null}

      {data.quizSection !== false && data.emotionalHero ? (
        <QuizLeadMagnet
          id={`quiz-${data.slug}`}
          className={toneClass(takeTone(toneRef))}
        />
      ) : null}

      {data.faqs && data.faqs.length > 0 ? (
        <FAQ
          items={data.faqs}
          className={toneClass(takeTone(toneRef))}
          title={
            <>
              Questions <TitleEm>fréquentes</TitleEm>
            </>
          }
          contactHref="/contact"
          contactLabel={CTA.primary}
        />
      ) : null}

      {data.cta ? (
        <FutureVitrineCta
          title={ctaTitle(data.cta)}
          lead={data.cta.lead}
          closing={data.cta.closing ?? ""}
          primaryLabel={data.cta.primaryLabel}
          primaryHref={data.cta.primaryHref}
          secondaryLabel={data.cta.secondaryLabel}
          secondaryHref={data.cta.secondaryHref}
        />
      ) : (
        <FutureVitrineCta />
      )}
    </>
  );
}

export function ServiceTemplate({ data }: { data: ServicePageData }) {
  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: data.navLabel, href: servicePath(data.slug) },
  ];

  return (
    <>
      <ServiceJsonLd
        name={data.title.replace(/\s*\|\s*Kopio\s*$/i, "").trim() || data.h1}
        description={data.metaDescription}
        url={servicePath(data.slug)}
        price={data.offerPrice}
      />
      {data.definedTerm ? (
        <DefinedTermTechArticleJsonLd
          termName={data.definedTerm.name}
          termDescription={data.definedTerm.description}
          headline={data.h1}
          description={data.metaDescription}
          url={servicePath(data.slug)}
        />
      ) : null}
      {data.faqs && data.faqs.length > 0 ? (
        <FaqJsonLd items={data.faqs} />
      ) : null}

      {data.emotionalHero ? (
        <div className="relative">
          <CreationEmotionalHero
            breadcrumbs={crumbs}
            title={data.h1}
            highlight={data.h1Highlight}
            lede={data.emotionalHero.lede}
            directAnswer={data.tldr}
            stack={data.emotionalHero.stack}
            primaryCta={data.emotionalHero.primaryCta}
            secondaryCta={data.emotionalHero.secondaryCta}
            mockups={data.emotionalHero.mockups}
          />
          {/* Contenu qui passe par-dessus le hero sticky (comme Constat / FeaturePoints) */}
          <div className="relative z-10">
            <ServiceBody data={data} />
          </div>
        </div>
      ) : (
        <>
          <LandingHero
            breadcrumbs={crumbs}
            title={data.h1}
            highlight={data.h1Highlight}
            eyebrow={data.eyebrow}
            intro={data.intro}
            image={data.image}
            imageAlt={data.imageAlt}
            geoSummary={data.tldr}
            factChips={
              data.factChips ?? ["Création de site", "SEO", "Visibilité IA"]
            }
          />
          <ServiceBody data={data} />
        </>
      )}
    </>
  );
}
