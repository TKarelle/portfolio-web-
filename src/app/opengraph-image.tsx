import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Kopio — Faites de votre expertise votre plus belle vitrine";
/** Dimensions du fichier public/image/opengraph-hero.png */
export const size = { width: 1676, height: 954 };
export const contentType = "image/png";

/** Open Graph accueil (kopio.eu) — capture hero. */
export default async function OpenGraphImage() {
  const data = await readFile(
    join(process.cwd(), "public/image/opengraph-hero.png"),
  );
  return new Response(data, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
