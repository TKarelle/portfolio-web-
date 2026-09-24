import Image from "next/image";
import Link from "next/link";
import type { LandingPageData } from "@/data/landings";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { BrandPhrase } from "@/components/ui/BrandPhrase";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import { CTA } from "@/data/copy";

export function LandingTemplate({ data }: { data: LandingPageData }) {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-16 px-6 mesh-hero">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              {data.heroTitle}{" "}
              <span className="mark mark-pink">{data.heroHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-muted font-medium leading-relaxed">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button href="/contact" size="lg">
            {CTA.primary}
          </Button>
          <Button href="/tarifs" variant="outline">
            {CTA.secondary}
          </Button>
            </div>
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
      </section>

      <section className="py-16 px-6 bg-chunk-pink">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card p-8 bg-surface">
            <h2 className="text-xl font-extrabold mb-4">
              <span className="title-stroke title-stroke-pink">Le problème</span>
            </h2>
            <ul className="space-y-3">
              {data.problems.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium text-muted">
                  <span className="text-pink font-bold">✕</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8 !bg-lime text-ink border-ink">
            <h2 className="text-xl font-extrabold mb-4">
              <span className="title-stroke">Ma solution</span>
            </h2>
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

      <section className="py-16 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionHead stroke="violet" highlight="me choisir">
              {"Pourquoi me choisir"}
            </SectionHead>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.benefits.map((b, i) => {
              const cardStyles = [
                "card p-6 !bg-pink text-white border-ink",
                "card p-6 !bg-violet text-white border-ink",
                "card p-6 !bg-lime text-ink border-ink",
              ];
              const textStyles = ["text-white/80", "text-white/80", "text-ink/70"];
              return (
                <div key={b.title} className={cardStyles[i]}>
                  <p className="font-extrabold text-lg mb-2">{b.title}</p>
                  <p className={`text-sm font-medium ${textStyles[i]}`}>
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-chunk-violet">
        <div className="max-w-3xl mx-auto text-center card p-8 md:p-10 bg-surface">
          <SectionHead stroke="pink" highlight="forfaits">
            {"Les forfaits"}
          </SectionHead>
          <p className="mt-4 text-muted font-medium">
            Pour démarrer <strong className="text-ink">500 €</strong> · Complet <strong className="text-ink">800 €</strong> · Besoin précis sur devis
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/tarifs" size="lg">
              {CTA.secondary}
            </Button>
            <Button href="/contact" variant="outline">
              {CTA.primary}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-chunk-lime">
        <div className="max-w-3xl mx-auto text-center">
          <BrandPhrase size="md" className="mb-6" />
          <Button href="/contact" size="lg">
            {CTA.primary}
          </Button>
          <p className="mt-4 text-sm text-muted font-medium">
            Ou{" "}
            <Link href="/blog" className="text-violet font-bold hover:underline">
              lire le blog
            </Link>{" "}
            pour en savoir plus avant de te lancer.
          </p>
        </div>
      </section>
    </>
  );
}
