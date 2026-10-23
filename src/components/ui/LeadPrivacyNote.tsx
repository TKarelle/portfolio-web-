import Link from "next/link";

/** Rappel au moment de la saisie, en plus des mentions légales. */
export function LeadPrivacyNote() {
  return (
    <p className="mt-3 text-xs font-medium text-ink/50 leading-relaxed">
      Prénom et email, pour vous répondre.{" "}
      <Link
        href="/mentions-legales"
        className="underline underline-offset-2 hover:text-ink"
      >
        Mentions légales
      </Link>
    </p>
  );
}
