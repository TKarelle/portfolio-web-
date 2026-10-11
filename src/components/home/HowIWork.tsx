import {
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  FOUNDER_TAGLINE,
} from "@/data/site";
import { PhotoScrollStory } from "@/components/ui/PhotoScrollStory";
import { SectionCta } from "@/components/ui/SectionCta";
import { CTA } from "@/data/copy";

const ABOUT_COPY = [
  "Un site n’est jamais simplement un site.",
  "Vous avez construit votre expertise. Comment la faire ressentir en quelques secondes sur Google ?",
  "C’est là que j’interviens.",
  `Je suis ${FOUNDER_NAME}. ${FOUNDER_TAGLINE}`,
  "Votre expertise est déjà là. Mon rôle : lui donner la place qu’elle mérite.",
] as const;

/** À propos — SoftBlurBand + photo + texte scroll-bold. */
export function HowIWork() {
  return (
    <PhotoScrollStory
      id="pourquoi-moi"
      image={FOUNDER_PHOTO}
      imageAlt={FOUNDER_PHOTO_ALT}
      paragraphs={ABOUT_COPY}
      cta={
        <SectionCta align="left" className="lg:justify-start">
          {CTA.practice}
        </SectionCta>
      }
    />
  );
}
