/** Métadonnées vidéos pour SEO (VideoObject + video sitemap). */
export type SiteVideo = {
  id: string;
  /** Chemin public du fichier MP4 */
  contentPath: string;
  /** Chemin public du poster */
  thumbnailPath: string;
  name: string;
  description: string;
  /** ISO 8601 date-heure avec fuseau (ex. 2025-09-24T10:00:00+02:00) */
  uploadDate: string;
  /** Secondes (arrondi) */
  durationSeconds: number;
  /** Pages qui hébergent la vidéo (chemins relatifs) */
  pagePaths: readonly string[];
  category: string;
  shortTitle: string;
};

export const siteVideos: readonly SiteVideo[] = [
  {
    id: "site-demo",
    contentPath: "/image/sitewebvideo.mp4",
    thumbnailPath: "/image/sitewebvideo-poster.jpg",
    name: "Aperçu d’un site web livré par Kopio",
    description:
      "Démo d’un site livré : offre claire, preuves et parcours de contact.",
    uploadDate: "2025-09-24T10:00:00+02:00",
    durationSeconds: 28,
    pagePaths: ["/"],
    category: "Site livré",
    shortTitle: "Exemple de site",
  },
  {
    id: "pulse",
    contentPath: "/image/videopulse.mp4",
    thumbnailPath: "/image/videopulse-poster.jpg",
    name: "Aperçu site web PULSE, consultante en bien-être",
    description:
      "Démo du site livré pour PULSE, consultante en bien-être : offre claire, preuves et prise de contact simplifiée.",
    uploadDate: "2025-09-25T10:00:00+02:00",
    durationSeconds: 29,
    pagePaths: ["/"],
    category: "Consultante en bien-être",
    shortTitle: "PULSE",
  },
  {
    id: "sophie-delmas",
    contentPath: "/image/videosophie.mp4",
    thumbnailPath: "/image/sophie-poster.jpg",
    name: "Aperçu site web Sophie Delmas, coach",
    description:
      "Démo du site livré pour Sophie Delmas, coach : offre claire, preuves et prise de contact simplifiée.",
    uploadDate: "2026-10-09T12:00:00+02:00",
    durationSeconds: 48,
    pagePaths: ["/", "/projets"],
    category: "Coach",
    shortTitle: "Sophie Delmas",
  },
] as const;

export function iso8601Duration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `PT${s}S`;
  return s === 0 ? `PT${m}M` : `PT${m}M${s}S`;
}

export function getVideosForPage(path: string): SiteVideo[] {
  return siteVideos.filter((v) => v.pagePaths.includes(path));
}
