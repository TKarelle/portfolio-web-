import Link from "next/link";

export type BlackInkLink = {
  href: string;
  /** Ancre contextuelle (1 exact match max par cible sur la page). */
  anchor: string;
};

type BlackInkBridgeProps = {
  /** Mot-clé de la page courante (co-occurrence, pas forcément cliquable). */
  keyword: string;
  /** 1–2 voisins de cocon (cosine / sous-cluster). */
  siblings?: readonly BlackInkLink[];
  /** Besoin / intent lié. */
  relatedBesoin?: BlackInkLink;
  /** Variante éditoriale courte. */
  variant?: "metier" | "besoin" | "comparatif";
};

const linkClass = "text-violet font-bold hover:underline underline-offset-2";

/**
 * Sem.10 — Black Ink : paragraphe de maillage contextuel.
 * Co-occurrence keyword + Karelle + action (sans prix dans le CTA éditorial).
 * Densité : 3–5 liens, phrases naturelles, zéro liste d’ancres.
 */
export function BlackInkBridge({
  keyword,
  siblings = [],
  relatedBesoin,
  variant = "metier",
}: BlackInkBridgeProps) {
  const sib = siblings.slice(0, 2);

  return (
    <p className="mt-6 text-sm md:text-base text-muted font-medium leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
      {variant === "metier" && (
        <>
          Karelle construit votre {keyword} pour qu&apos;il parle à Google, aux
          IA et à vos futurs clients. Pour caler la formule, voyez les{" "}
          <Link href="/tarifs" className={linkClass}>
            tarifs Kopio
          </Link>
          {relatedBesoin && (
            <>
              {" "}
              ou le besoin{" "}
              <Link href={relatedBesoin.href} className={linkClass}>
                {relatedBesoin.anchor}
              </Link>
            </>
          )}
          .{" "}
          {sib.length > 0 && (
            <>
              Métier proche :{" "}
              {sib.map((s, i) => (
                <span key={s.href}>
                  {i > 0 ? ", " : ""}
                  <Link href={s.href} className={linkClass}>
                    {s.anchor}
                  </Link>
                </span>
              ))}
              .
            </>
          )}{" "}
          Pour démarrer :{" "}
          <Link href="/contact" className={linkClass}>
            écrire à Karelle
          </Link>
          .
        </>
      )}

      {variant === "besoin" && (
        <>
          Sur ce besoin ({keyword}), Karelle livre une présence claire avec la{" "}
          <Link href="/tarifs" className={linkClass}>
            même offre Kopio
          </Link>
          . Vous pouvez aussi revenir à l&apos;{" "}
          <Link href="/" className={linkClass}>
            offre site pour professionnelles de l&apos;accompagnement
          </Link>
          {sib.length > 0 && (
            <>
              {" "}
              ou explorer{" "}
              {sib.map((s, i) => (
                <span key={s.href}>
                  {i > 0 ? " et " : ""}
                  <Link href={s.href} className={linkClass}>
                    {s.anchor}
                  </Link>
                </span>
              ))}
            </>
          )}
          . Contact :{" "}
          <Link href="/contact" className={linkClass}>
            message à Karelle
          </Link>
          .
        </>
      )}

      {variant === "comparatif" && (
        <>
          Après ce comparatif ({keyword}), la décision se joue souvent sur le
          suivi et la clarté de l&apos;offre : voir les{" "}
          <Link href="/tarifs" className={linkClass}>
            tarifs Kopio
          </Link>
          , tenus par Karelle. Revoir l&apos;{" "}
          <Link href="/" className={linkClass}>
            accueil Kopio
          </Link>
          {sib.length > 0 && (
            <>
              {" "}
              ou{" "}
              <Link href={sib[0].href} className={linkClass}>
                {sib[0].anchor}
              </Link>
            </>
          )}
          .
        </>
      )}
    </p>
  );
}
