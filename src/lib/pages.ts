import { besoins, getBesoin, type BesoinPageData } from "@/data/besoins";
import {
  comparatifs,
  getComparatif,
  type ComparatifPageData,
} from "@/data/comparatifs";
import { metiers, getMetier, type MetierPage } from "@/data/metiers";

export type { MetierPage, BesoinPageData, ComparatifPageData };

export function getAllMetierSlugs(): string[] {
  return metiers.map((m) => m.slug);
}

export function getAllBesoinSlugs(): string[] {
  return besoins.map((b) => b.slug);
}

export function getAllComparatifSlugs(): string[] {
  return comparatifs.map((c) => c.slug);
}

export { getMetier, getBesoin, getComparatif, metiers, besoins, comparatifs };
