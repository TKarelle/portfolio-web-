"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { AutoPlayVideo } from "@/components/ui/AutoPlayVideo";
import { CTA } from "@/data/copy";
import { bubbleInStyle } from "@/lib/motion";

const gains = [
  {
    n: "01",
    t: "Tes clients arrivent au bon endroit",
    d: "Que tu partes de zéro, que tu changes de site, ou que tu ajoutes une fonctionnalité précise : le résultat doit être le même : les bonnes personnes tombent sur toi, pas sur un concurrent.",
  },
  {
    n: "02",
    t: "Ils comprennent en 5 secondes ce que tu proposes",
    d: "Un client hésite rarement à cause du prix. Il hésite parce qu’il ne comprend pas assez vite ce que tu offres. Ton activité devient limpide, dès le premier coup d’œil.",
  },
  {
    n: "03",
    t: "La confiance s’installe avant même le premier échange",
    d: "Personne n’aime contacter un inconnu. Avec de vraies preuves de ton travail sous les yeux, tes clients arrivent déjà convaincus : que ce soit pour un devis, une réservation ou un achat.",
  },
  {
    n: "04",
    t: "Passer à l’action devient évident",
    d: "Appeler, réserver, commander : chaque étape doit être simple, sinon le client hésite et part ailleurs. Peu importe ce que ton site doit faire, cette étape ne doit jamais être un obstacle.",
  },
];

const demos = [
  {
    id: "sophie",
    src: "/image/sitewebvideo.mp4",
    poster: "/image/sitewebvideo-poster.jpg",
    label: "Sophie Bluel : architecte d’intérieur",
    title: "Sophie Bluel",
    category: "Architecte d’intérieur",
  },
  {
    id: "pulse",
    src: "/image/videopulse.mp4",
    poster: "/image/videopulse-poster.jpg",
    label: "PULSE : consultante en bien-être",
    title: "PULSE",
    category: "Consultante en bien-être",
  },
] as const;

function DemoVideos() {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {demos.map((demo) => (
        <figure
          key={demo.id}
          className="overflow-hidden rounded-[1.1rem] border-2 border-ink bg-surface shadow-[4px_4px_0_0_#ffffff]"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
            <AutoPlayVideo
              src={demo.src}
              poster={demo.poster}
              aria-label={demo.label}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="px-3.5 py-3 border-t-2 border-ink flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted mb-0.5">
                {demo.category}
              </p>
              <p className="text-sm font-extrabold text-ink leading-snug truncate">
                {demo.title}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function GainCards() {
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
      aria-label="Ce que tu gagnes avec ton site"
    >
      {gains.map((g, i) => (
        <li
          key={g.n}
          className="bg-surface/80 rounded-2xl px-4 py-4 border border-ink/8 will-change-transform"
          style={bubbleInStyle(i, visible)}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-full bg-ink text-lime text-xs font-extrabold flex items-center justify-center shrink-0">
              {g.n}
            </span>
            <span className="text-sm font-extrabold text-ink leading-snug">
              {g.t}
            </span>
          </div>
          <p className="text-sm text-muted font-medium leading-relaxed pl-11">
            {g.d}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Constat() {
  return (
    <section className="py-16 md:py-20 px-6 bg-chunk-pink" id="premier-site">
      <div className="max-w-5xl mx-auto">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-bold text-pink mb-3 tracking-wide">
            Ce que tu y gagnes
          </p>

          <SectionHead
            align="left"
            stroke="lime"
            highlight="sans gérer la technique"
            className="mb-8"
          >
            {"De l'idée au site en ligne, sans gérer la technique"}
          </SectionHead>
        </div>

        <div className="reveal">
          <DemoVideos />
          <GainCards />

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button href="#contact" size="lg">
              {CTA.primary}
            </Button>
            <Button href="#forfaits" variant="outline" size="lg">
              {CTA.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
