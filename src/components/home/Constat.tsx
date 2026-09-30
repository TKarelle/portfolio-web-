"use client";

import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { AutoPlayVideo } from "@/components/ui/AutoPlayVideo";
import { NumberedGainCards } from "@/components/ui/NumberedGainCards";
import { CTA } from "@/data/copy";
import { siteVideos } from "@/data/videos";

const gains = [
  {
    n: "01",
    t: "Être trouvable",
    d: "Après un bouche-à-oreille, on cherche votre nom. Le site est le point de contrôle final de toute recommandation.",
  },
  {
    n: "02",
    t: "Être présentable",
    d: "Une URL claire sur votre carte, votre signature, votre LinkedIn. Plus jamais d’hésitation avant d’envoyer le lien.",
  },
  {
    n: "03",
    t: "Être préqualifiante",
    d: "Méthode, tarifs indicatifs, parcours, rendez-vous : le site répond avant l’email. Moins d’allers-retours, plus de sérieux.",
  },
  {
    n: "04",
    t: "Être joignable",
    d: "Réserver, écrire, appeler : le prochain pas est évident. Vos clientes agissent pendant que vous restez sur votre pratique.",
  },
] as const;

const homeVideos = siteVideos.filter((v) => v.pagePaths.includes("/"));

function DemoVideos() {
  return (
    <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {homeVideos.map((demo) => (
        <figure
          key={demo.id}
          className="overflow-hidden rounded-[1.1rem] border-2 border-ink bg-surface shadow-[4px_4px_0_#111]"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
            <AutoPlayVideo
              src={demo.contentPath}
              poster={demo.thumbnailPath}
              title={demo.name}
              aria-label={demo.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="px-3.5 py-3 border-t-2 border-ink flex flex-col gap-0.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              {demo.category}
            </p>
            <p className="text-sm font-extrabold text-ink leading-snug">
              {demo.shortTitle}
            </p>
            <p className="text-xs text-muted font-medium leading-snug line-clamp-2 mt-0.5">
              {demo.description}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Constat() {
  return (
    <section className="py-14 md:py-20 px-5 sm:px-6 bg-chunk-pink" id="premier-site">
      <div className="max-w-5xl mx-auto">
        <div className="reveal max-w-2xl mb-8 md:mb-10">
          <p className="text-sm font-bold text-pink mb-3 tracking-wide">
            Ce que vous y gagnez
          </p>

          <SectionHead
            align="left"
            stroke="lime"
            highlight="déléguée"
            className="mb-4"
          >
            {"Kopio n'est pas une agence. C'est votre présence en ligne, déléguée."}
          </SectionHead>

          <p className="text-base md:text-lg font-medium text-muted leading-relaxed max-w-xl">
            Vous entretenez une présence, un service continu qui reste à votre
            écoute, à partir de 89&nbsp;€/mois.
          </p>
        </div>

        <div className="reveal">
          <NumberedGainCards
            items={gains}
            ariaLabel="Ce que vous gagnez avec votre site"
          />
          <DemoVideos />

          <div className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-10">
            <Button href="#contact" size="lg">
              {CTA.discovery}
            </Button>
            <Button href="#modeles" variant="outline" size="lg">
              {CTA.conditions}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
