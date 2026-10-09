import Link from "next/link";
import type { BesoinPageData } from "@/data/besoins";
import { besoinPath, besoins } from "@/data/besoins";
import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { LandingHero } from "@/components/ui/LandingHero";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { resolveBesoinSiblings } from "@/lib/cluster-mesh";
import { BlackInkBridge } from "@/components/seo/BlackInkBridge";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";

function besoinDateLabel(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return undefined;
  const label = d.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function BesoinTemplate({ data }: { data: BesoinPageData }) {
  const recommended =
    pricingPlans.find((p) => p.id === data.recommendedPlanId) ??
    pricingPlans[0];
  const siblingSlugs = resolveBesoinSiblings(data.slug, 4);
  const siblings = siblingSlugs
    .map((slug) => besoins.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const heroEyebrow =
    besoinDateLabel(data.updatedAt) ?? data.eyebrow ?? undefined;

  return (
    <>
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={besoinPath(data.slug)}
        price={recommended.price}
      />

      <LandingHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: data.label, href: besoinPath(data.slug) },
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
      />

      <SeoProseSections sections={data.sections} />

      <section className="py-16 md:py-20 page-x bg-bg">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <SectionHead size="md" align="left" className="mb-5">
              En <TitleEm>pratique</TitleEm>
            </SectionHead>
            <ul className="space-y-3">
              {data.problems.map((p) => (
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
            <SectionHead size="md" align="left" className="mb-5">
              Ce que je <TitleEm>livre</TitleEm>
            </SectionHead>
            <ul className="space-y-3">
              {data.solutions.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 text-sm font-medium text-ink/80 leading-relaxed"
                >
                  <span className="text-ink/30 shrink-0">✦</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FutureVitrineCta />

      <section className="py-12 page-x border-t border-ink/8 bg-surface">
        <div className="w-full">
          <BlackInkBridge
            variant="besoin"
            keyword={data.keyword}
            siblings={siblings.slice(0, 2).map((b) => ({
              href: besoinPath(b.slug),
              anchor: b.label,
            }))}
          />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-4 mt-10">
            Besoins du même cocon
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((b) => (
              <li key={b.slug}>
                <Link
                  href={besoinPath(b.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-[var(--rounded-large)] bg-ink/5 text-ink hover:bg-ink/10 transition-colors"
                >
                  {b.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
