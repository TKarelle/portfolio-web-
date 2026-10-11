"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SoftProof } from "@/components/ui/SoftProof";
import { MeshGrainBackground } from "@/components/ui/MeshGrainBackground";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MockupMarquee } from "@/components/landing/MockupMarquee";
import { CTA } from "@/data/copy";
import { HERO_MOCKUPS } from "@/data/hero-mockups";

const HERO = {
  lede: "Un site professionnel pensé pour convaincre vos visiteurs et vous rendre visible sur Google et les IA.",
} as const;

/**
 * Hero — titre sur 2 lignes (coupure après « expertise »).
 * SoftProof au-dessus du H1 · marquee maquettes en bas (comme création).
 */
export function Hero() {
  return (
    <section className="sticky top-0 z-0 min-h-[100svh] flex flex-col">
      <MeshGrainBackground
        className="flex-1 flex flex-col min-h-[100svh]"
        contentClassName="flex flex-col w-full pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 min-h-[100svh]"
      >
        <div className="page-x w-full flex-1 flex flex-col">
          <div className="hero-enter mt-2 text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6 flex-1 justify-center">
            <SoftProof />

            <SectionHead as="h1" size="xl" className="!max-w-none">
              Faites de votre <TitleEm>expertise</TitleEm>
              <br />
              votre plus belle <TitleEm>vitrine</TitleEm>.
            </SectionHead>

            <p className="hero-lede mx-auto m-0">{HERO.lede}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
              <Button href="#modeles" size="lg">
                {CTA.primary}
              </Button>
              <Button href="#demos" variant="outline" size="lg">
                {CTA.secondary}
              </Button>
            </div>

            <Link
              href="/sageo"
              className="text-sm font-extrabold text-ink/55 hover:text-ink underline-offset-4 hover:underline transition-colors"
            >
              Découvrir la méthode SAGEO
            </Link>
          </div>
        </div>

        <div className="hero-enter-d1 w-full mt-8 sm:mt-10 md:mt-12">
          <MockupMarquee items={HERO_MOCKUPS} />
        </div>
      </MeshGrainBackground>
    </section>
  );
}
