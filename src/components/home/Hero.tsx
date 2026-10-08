"use client";

import { Button } from "@/components/ui/Button";
import { SoftProof } from "@/components/ui/SoftProof";
import { MeshGrainBackground } from "@/components/ui/MeshGrainBackground";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { CTA } from "@/data/copy";
import { BRAND_NAME } from "@/data/site";

const HERO = {
  lede: "Un site professionnel pensé pour convaincre vos visiteurs et vous rendre visible sur Google et les IA.",
} as const;

/**
 * Hero — titre sur 2 lignes (coupure après « expertise »).
 */
export function Hero() {
  return (
    <section className="sticky top-0 z-0 min-h-[100svh] flex flex-col">
      <MeshGrainBackground
        className="flex-1 flex flex-col min-h-[100svh]"
        contentClassName="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 min-h-[100svh]"
      >
        <div className="hero-enter text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
          <SectionHead
            as="h1"
            size="xl"
            eyebrow={BRAND_NAME}
            className="!max-w-none"
          >
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
        </div>

        <div className="hero-enter-d1 w-full mt-8 sm:mt-9 md:mt-10">
          <SoftProof />
        </div>
      </MeshGrainBackground>
    </section>
  );
}
