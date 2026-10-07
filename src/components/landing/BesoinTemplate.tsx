import Image from "next/image";
import Link from "next/link";
import type { BesoinPageData } from "@/data/besoins";
import { besoinPath, besoins } from "@/data/besoins";
import { pricingPlans } from "@/data/pricing";
import { Pricing } from "@/components/home/Pricing";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { SeoProseSections } from "@/components/seo/SeoProseSections";
import { HeroFacts } from "@/components/ui/HeroFacts";
import { resolveBesoinSiblings } from "@/lib/cluster-mesh";

export function BesoinTemplate({ data }: { data: BesoinPageData }) {
  const recommended =
    pricingPlans.find((p) => p.id === data.recommendedPlanId) ??
    pricingPlans[0];
  const siblingSlugs = resolveBesoinSiblings(data.slug, 4);
  const siblings = siblingSlugs
    .map((slug) => besoins.find((b) => b.slug === slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <>
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={besoinPath(data.slug)}
        price={recommended.price}
      />

      <section className="pt-36 md:pt-40 pb-16 px-6 mesh-hero">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: data.label, href: besoinPath(data.slug) },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                {data.h1}{" "}
                <span className="mark mark-pink">{data.h1Highlight}</span>
              </h1>
              <HeroFacts
                geoSummary={data.tldr}
                delivery={
                  data.recommendedPlanId === "sur-mesure" ||
                  data.recommendedPlanId === "pro" ||
                  data.recommendedPlanId === "launch"
                    ? "Sous 21 jours"
                    : "Sur devis"
                }
              />
              <p className="mt-5 text-lg text-muted font-medium leading-relaxed">
                {data.intro}
              </p>
              <DeliveryDisclaimer className="mt-4" />
            </div>

            <div className="photo-frame-lime relative aspect-[4/3]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover rounded-[1.1rem]"
                sizes="500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SeoProseSections sections={data.sections} />

      <section className="py-16 px-6 bg-chunk-pink">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card p-8 bg-surface">
            <SectionHead
              stroke="pink"
              highlight="situation"
              className="!text-xl md:!text-xl mb-4"
              align="left"
            >
              En pratique
            </SectionHead>
            <ul className="space-y-3">
              {data.problems.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium text-muted">
                  <span className="text-pink font-bold">✕</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8 !bg-lime text-ink border-ink">
            <SectionHead
              stroke="lime"
              highlight="concret"
              className="!text-xl md:!text-xl mb-4"
              align="left"
            >
              Ce que je livre
            </SectionHead>
            <ul className="space-y-3">
              {data.solutions.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium text-ink/80">
                  <span className="text-ink font-bold">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-16 px-6 bg-chunk-violet">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-8">
            {data.closing}
          </p>
          <Button href="/contact" size="lg">
            {data.ctaLabel}
          </Button>
          <p className="mt-6 text-sm text-muted font-medium">
            Retour à l&apos;{" "}
            <Link href="/" className="text-violet font-bold hover:underline">
              accueil
            </Link>{" "}
            ou aux{" "}
            <Link href="/tarifs" className="text-violet font-bold hover:underline">
              tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-10 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-extrabold uppercase tracking-wider text-pink mb-3">
            Autres besoins
          </p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((b) => (
              <li key={b.slug}>
                <Link
                  href={besoinPath(b.slug)}
                  className="inline-block px-3 py-1.5 text-sm font-semibold rounded-full border border-ink/15 bg-surface hover:bg-lime"
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
