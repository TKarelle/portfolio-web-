import Image from "next/image";
import type { MetierPage } from "@/data/metiers";
import { caseStudies } from "@/data/caseStudies";
import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { ContactSection } from "@/components/home/ContactSection";
import { CTA } from "@/data/copy";

export function MetierTemplate({ data }: { data: MetierPage }) {
  const study = data.caseStudyId
    ? caseStudies.find((c) => c.id === data.caseStudyId)
    : undefined;

  return (
    <>
      <FaqJsonLd items={data.faqs} />

      <section className="pt-28 md:pt-36 pb-12 px-6 mesh-hero">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: data.label, href: `/${data.slug}` },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h1 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.12] tracking-tight">
                {data.h1Before}{" "}
                <span className="mark mark-pink">{data.h1Highlight}</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted font-medium leading-relaxed">
                {data.intro}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="lg">
                  {CTA.primary}
                </Button>
                <Button href="/tarifs" variant="outline" size="lg">
                  {CTA.secondary}
                </Button>
              </div>
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

      <section className="py-16 md:py-20 px-6 bg-chunk-pink">
        <div className="max-w-5xl mx-auto">
          <SectionHead align="left" stroke="pink" highlight="besoin" className="mb-8">
            {data.whyTitle}
          </SectionHead>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.whyPoints.map((p, i) => (
              <li
                key={p.t}
                className="bg-surface/80 rounded-2xl px-4 py-4 border border-ink/8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-ink text-lime text-xs font-extrabold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-extrabold text-ink leading-snug">
                    {p.t}
                  </span>
                </div>
                <p className="text-sm text-muted font-medium leading-relaxed pl-11">
                  {p.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="scroll-mt-28 py-16 md:py-20 px-6 bg-bg" id="forfaits">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-pink mb-3 tracking-wide">
              Tarifs clairs
            </p>
            <SectionHead stroke="pink" highlight="inclus">
              {`Ce qui est inclus pour votre site de ${data.metier}`}
            </SectionHead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`card p-6 md:p-7 flex flex-col ${
                  plan.highlight
                    ? "!bg-violet !text-white !border-lime !shadow-[6px_6px_0_#d4ff00]"
                    : "bg-surface"
                }`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-wider ${
                    plan.highlight ? "text-lime" : "text-pink"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="mt-3 text-4xl font-extrabold">
                  {plan.price}
                  {plan.period && (
                    <span className="text-lg font-semibold ml-1">
                      {plan.period}
                    </span>
                  )}
                </p>
                <p
                  className={`text-sm mt-2 mb-4 font-medium ${
                    plan.highlight ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <p
                  className={`text-xs font-bold mb-4 ${
                    plan.highlight ? "text-lime" : "text-violet"
                  }`}
                >
                  Livraison : {plan.delivery}
                </p>
                <ul
                  className={`space-y-2 text-sm font-medium flex-1 mb-6 ${
                    plan.highlight ? "text-white/85" : "text-ink/80"
                  }`}
                >
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>✦</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlight ? "primary" : "outline"}
                  className={`w-full ${plan.highlight ? "!text-ink" : ""}`}
                >
                  {CTA.plan}
                </Button>
              </div>
            ))}
          </div>
          <DeliveryDisclaimer className="mt-8 text-center max-w-lg mx-auto" />
        </div>
      </section>

      {study && (
        <section className="py-16 md:py-20 px-6 bg-chunk-lime">
          <div className="max-w-5xl mx-auto">
            <SectionHead align="left" stroke="pink" highlight="concret" className="mb-8">
              {`Exemple concret : ${study.title}`}
            </SectionHead>
            <article className="card overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto lg:min-h-[260px] photo-frame">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <div className="lg:col-span-3 p-7 md:p-9">
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-5">
                  <div className="bg-pink-bg rounded-2xl p-4 border-2 border-ink">
                    <p className="font-bold text-pink text-xs uppercase mb-1">
                      Avant
                    </p>
                    <p className="font-medium text-ink/80">{study.problem}</p>
                  </div>
                  <div className="bg-violet-bg rounded-2xl p-4 border-2 border-ink">
                    <p className="font-bold text-violet text-xs uppercase mb-1">
                      Ce qu&apos;on a fait
                    </p>
                    <p className="font-medium text-ink/80">{study.solution}</p>
                  </div>
                </div>
                <p className="font-extrabold text-lg bg-ink text-lime inline-block px-4 py-2 rounded-full">
                  → {study.result}
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-violet mb-3 tracking-wide">
              FAQ
            </p>
            <SectionHead stroke="violet" highlight={data.metierPlural}>
              {`Questions fréquentes des ${data.metierPlural}`}
            </SectionHead>
          </div>
          <div className="space-y-3">
            {data.faqs.map((item) => (
              <details
                key={item.question}
                className="card bg-surface p-5 md:p-6 group"
              >
                <summary className="font-extrabold cursor-pointer list-none flex justify-between gap-4">
                  {item.question}
                  <span className="text-pink shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted font-medium leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
