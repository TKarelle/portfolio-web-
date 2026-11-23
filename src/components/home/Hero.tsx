"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SoftProof } from "@/components/ui/SoftProof";
import { MeshGrainBackground } from "@/components/ui/MeshGrainBackground";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MockupMarquee } from "@/components/landing/MockupMarquee";
import { CTA } from "@/data/copy";
import { HERO_MOCKUPS } from "@/data/hero-mockups";
import {
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
} from "@/data/site";

const HERO = {
  lede: "Spécialisée dans la création de sites pour femmes coachs : une vitrine digne de votre bouche-à-oreille, qui rassure dès la première seconde et donne envie de vous écrire.",
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

            <Button href="/contact" size="lg" className="pl-2.5 sm:pl-3 pr-6 sm:pr-8">
              <Image
                src={FOUNDER_PHOTO}
                alt={FOUNDER_PHOTO_ALT}
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 ring-2 ring-ink/10"
                priority
              />
              <span>{CTA.planDiscuss}</span>
              <span className="sr-only"> — {FOUNDER_NAME}</span>
            </Button>
          </div>
        </div>

        <div className="hero-enter-d1 w-full mt-8 sm:mt-10 md:mt-12">
          <MockupMarquee items={HERO_MOCKUPS} />
        </div>
      </MeshGrainBackground>
    </section>
  );
}
