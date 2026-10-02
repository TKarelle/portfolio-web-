import Image from "next/image";
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
import { BRAND_NAME } from "@/data/site";

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

      <section className="pt-36 md:pt-40 pb-12 px-6 mesh-hero">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: data.keyword, href: comparatifPath(data.slug) },
            ]}
          />

          <h1 className="mt-10 text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-tight tracking-tight">
            {data.h1}
          </h1>
          <p className="mt-6 text-lg text-muted font-medium leading-relaxed">
            {data.intro}
          </p>
          <p className="mt-4 text-base font-extrabold text-ink leading-snug">
            {data.verdict}
          </p>
          <HeroFacts geoSummary={data.tldr} />
        </div>
      </section>

      <ComparisonTable
        title={`${BRAND_NAME} face à Wix, WordPress & agences`}
        highlight="Wix, WordPress & agences"
      />

      <SeoProseSections
        sections={data.sections.map(({ h2, body }) => ({ h2, body }))}
      />

      <section className="py-16 px-6 bg-chunk-pink">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8 bg-surface">
            <h2 className="text-lg font-extrabold mb-4">
              Ce que {data.otherName} fait bien
            </h2>
            <ul className="space-y-2">
              {data.otherFairPoints.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium text-muted">
                  <span className="text-violet font-bold">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 md:p-8 !bg-violet text-white">
            <h2 className="text-lg font-extrabold mb-4">
              Ce que {BRAND_NAME} apporte
            </h2>
            <ul className="space-y-2">
              {data.kopioStrengths.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium text-white/85">
                  <span className="text-lime font-bold">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {data.image && (
        <section className="py-12 px-6 bg-chunk-lime">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[21/9] photo-frame-lime rounded-2xl overflow-hidden">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover"
                sizes="800px"
              />
            </div>
          </div>
        </section>
      )}

      <FAQ items={data.faqs} title="Questions fréquentes" highlight="fréquentes" />

      <section className="py-16 px-6 bg-bg">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8">
            {data.closing}
          </p>
          <Button href="/contact" size="lg">
            {data.ctaLabel}
          </Button>
          <p className="mt-6 text-sm text-muted font-medium">
            Voir l&apos;{" "}
            <Link href="/" className="text-violet font-bold hover:underline">
              accueil
            </Link>{" "}
            ou les{" "}
            <Link href="/tarifs" className="text-violet font-bold hover:underline">
              tarifs
            </Link>
            .
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-extrabold uppercase tracking-wider text-pink mb-3">
            Autres comparatifs
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((c) => (
              <li key={c.slug}>
                <Link
                  href={comparatifPath(c.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-full border border-ink/15 bg-surface hover:bg-lime"
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
