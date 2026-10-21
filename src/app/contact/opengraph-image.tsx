import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Contact Kopio — Échangez sur votre projet avec Karelle";
/** Dimensions du fichier public/image/opengraph-contact.png */
export const size = { width: 1676, height: 954 };
export const contentType = "image/png";

/** Open Graph /contact — capture page contact. */
export default async function ContactOpenGraphImage() {
  const data = await readFile(
    join(process.cwd(), "public/image/opengraph-contact.png"),
  );
  return new Response(data, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
