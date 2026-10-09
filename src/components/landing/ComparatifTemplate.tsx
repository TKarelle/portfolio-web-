import Link from "next/link";
import type { ComparatifPageData } from "@/data/comparatifs";
import { comparatifPath, comparatifs } from "@/data/comparatifs";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/home/FAQ";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { LandingHero } from "@/components/ui/LandingHero";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { ResponsiveDataTable } from "@/components/ui/ResponsiveDataTable";
import { BRAND_NAME } from "@/data/site";
import { BlackInkBridge } from "@/components/seo/BlackInkBridge";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";

function comparatifDateLabel(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return undefined;
  const label = d.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function ComparatifTemplate({ data }: { data: ComparatifPageData }) {
  const siblings = comparatifs.filter((c) => c.slug !== data.slug);
  const heroEyebrow =
    comparatifDateLabel(data.updatedAt) ?? data.eyebrow ?? undefined;

  return (
    <>
      <FaqJsonLd items={data.faqs} />
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={comparatifPath(data.slug)}
      />

      <LandingHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: data.keyword, href: comparatifPath(data.slug) },
        ]}
        title={data.h1}
        highlight={data.h1Highlight}
        eyebrow={heroEyebrow}
        intro={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
        geoSummary={data.tldr}
        delivery="Sous 21 jours"
        factChips={data.factChips}
        footer={
          <p className="mt-4 text-base font-extrabold text-ink leading-snug max-w-xl">
            {data.verdict}
          </p>
        }
      />

      <ComparisonTable
        title={
          <>
            {BRAND_NAME} face à <TitleEm>{data.otherName}</TitleEm>
          </>
        }
      />

      <section className="py-12 md:py-16 page-x bg-bg">
        <div className="w-full max-w-4xl mx-auto">
          <SectionHead size="md" align="left" className="mb-6">
            Grille <TitleEm>{data.keyword}</TitleEm>
          </SectionHead>
          <ResponsiveDataTable
            headers={["Critère", BRAND_NAME, data.otherName]}
            rows={data.rows.map((row) => [row.label, row.kopio, row.other])}
          />
        </div>
      </section>

      <SeoProseSections
        sections={data.sections.map(({ h2, body }) => ({ h2, body }))}
      />

      <section className="py-16 md:py-20 page-x bg-bg">
        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <SectionHead size="md" align="left" className="mb-4">
              Ce que {data.otherName} fait <TitleEm>bien</TitleEm>
            </SectionHead>
            <ul className="space-y-2">
              {data.otherFairPoints.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-sm font-medium text-muted leading-relaxed"
                >
                  <span className="text-ink/30 shrink-0">·</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead size="md" align="left" className="mb-4">
              Ce que {BRAND_NAME} <TitleEm>apporte</TitleEm>
            </SectionHead>
            <ul className="space-y-2">
              {data.kopioStrengths.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-sm font-medium text-ink/80 leading-relaxed"
                >
                  <span className="text-ink/30 shrink-0">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        items={data.faqs}
        title={
          <>
            Questions <TitleEm>fréquentes</TitleEm>
          </>
        }
      />

      <FutureVitrineCta />

      <section className="py-12 page-x border-t border-ink/8 bg-surface">
        <div className="w-full">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8 max-w-3xl">
            {data.closing}
          </p>
          <BlackInkBridge
            variant="comparatif"
            keyword={data.keyword}
            siblings={siblings.slice(0, 1).map((c) => ({
              href: comparatifPath(c.slug),
              anchor: c.keyword,
            }))}
          />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3 mt-10">
            Autres comparatifs
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((c) => (
              <li key={c.slug}>
                <Link
                  href={comparatifPath(c.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-[var(--rounded-large)] border border-ink/10 bg-white hover:bg-lime/40 transition-colors"
                >
                  {c.keyword}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
