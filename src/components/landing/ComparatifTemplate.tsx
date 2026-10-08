import Link from "next/link";
import type { ComparatifPageData } from "@/data/comparatifs";
import { comparatifPath, comparatifs } from "@/data/comparatifs";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/home/FAQ";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { HeroFacts } from "@/components/ui/HeroFacts";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MediaCard } from "@/components/ui/MediaCard";
import { BRAND_NAME } from "@/data/site";
import { BlackInkBridge } from "@/components/seo/BlackInkBridge";

export function ComparatifTemplate({ data }: { data: ComparatifPageData }) {
  const siblings = comparatifs.filter((c) => c.slug !== data.slug);

  return (
    <>
      <FaqJsonLd items={data.faqs} />
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={comparatifPath(data.slug)}
      />

      <section className="relative overflow-hidden pt-36 md:pt-40 pb-14 px-5 sm:px-8">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
              var(--bg)
            `,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: data.keyword, href: comparatifPath(data.slug) },
            ]}
          />

          <div className="mt-10">
            <SectionHead as="h1" size="xl" align="left" className="!max-w-none">
              {data.h1}
            </SectionHead>
          </div>
          <HeroFacts geoSummary={data.tldr} />
          <p className="mt-4 text-base font-extrabold text-ink leading-snug">
            {data.verdict}
          </p>
          <p className="mt-4 text-lg text-muted font-medium leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      <ComparisonTable
        title={
          <>
            {BRAND_NAME} face à <TitleEm>Wix, WordPress & agences</TitleEm>
          </>
        }
      />

      <SeoProseSections
        sections={data.sections.map(({ h2, body }) => ({ h2, body }))}
      />

      <section className="py-16 md:py-20 px-5 sm:px-8 bg-bg">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <SectionHead size="md" align="left" className="mb-4">
              Ce que {data.otherName} fait <TitleEm>bien</TitleEm>
            </SectionHead>
            <ul className="space-y-2">
              {data.otherFairPoints.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium text-muted leading-relaxed">
                  <span className="text-ink/30 shrink-0">—</span> {p}
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
                <li key={p} className="flex gap-2 text-sm font-medium text-ink/80 leading-relaxed">
                  <span className="text-ink/30 shrink-0">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {data.image ? (
        <section className="py-12 px-5 sm:px-8 bg-surface">
          <div className="max-w-3xl mx-auto">
            <MediaCard
              src={data.image}
              alt={data.imageAlt}
              aspect="21/9"
              sizes="800px"
            />
          </div>
        </section>
      ) : null}

      <FAQ
        items={data.faqs}
        title={
          <>
            Questions <TitleEm>fréquentes</TitleEm>
          </>
        }
      />

      <section className="py-16 px-6 bg-bg">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8">
            {data.closing}
          </p>
          <Button href="/contact" size="lg">
            {data.ctaLabel}
          </Button>
          <BlackInkBridge
            variant="comparatif"
            keyword={data.keyword}
            siblings={siblings.slice(0, 1).map((c) => ({
              href: comparatifPath(c.slug),
              anchor: c.keyword,
            }))}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3">
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
