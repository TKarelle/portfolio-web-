import { FeaturePoints } from "@/components/ui/FeaturePoints";
import { MediaCard } from "@/components/ui/MediaCard";
import { TitleEm } from "@/components/ui/SectionHead";
import {
  IconBadge,
  IconPath,
  IconSearch,
  IconSpark,
} from "@/components/ui/FeatureIcon";

const gains = [
  {
    id: "trouvee",
    title: "Soyez trouvée.",
    text: "La visibilité qui rapproche votre expertise des personnes qui la recherchent.",
    icon: IconSearch,
  },
  {
    id: "reconnue",
    title: "Soyez reconnue.",
    text: "Une présence en ligne à la hauteur de ce que vous avez construit.",
    icon: IconBadge,
  },
  {
    id: "unique",
    title: "Soyez unique.",
    text: "Un univers qui révèle votre personnalité et votre façon d’accompagner.",
    icon: IconSpark,
  },
  {
    id: "choisie",
    title: "Soyez choisie.",
    text: "Un parcours pensé pour transformer la découverte en confiance.",
    icon: IconPath,
  },
] as const;

/** Bande gains — FeaturePoints full-bleed au-dessus du hero sticky. */
export function Constat() {
  return (
    <FeaturePoints
      id="premier-site"
      glass
      title={
        <>
          Découvrez le pouvoir d’un site <TitleEm>qui vous ressemble</TitleEm>.
        </>
      }
      afterTitle={
        <MediaCard
          src="/image/maquettesophie.png"
          alt="Maquette site Sophie Delmas"
          aspect="1366/4608"
          sizes="(max-width: 768px) 92vw, 896px"
        />
      }
      ariaLabel="Ce que votre site vous apporte"
      items={gains}
    />
  );
}
