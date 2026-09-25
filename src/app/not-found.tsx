import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-6 bg-bg min-h-[70vh] flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-sm font-extrabold uppercase tracking-wider text-pink mb-3">
          Erreur 404
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
          Cette page n&apos;existe pas.
        </h1>
        <p className="text-muted font-medium leading-relaxed mb-8">
          Le lien est peut-être ancien, ou la page a été déplacée. Reviens à
          l&apos;accueil ou écris-moi directement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" size="lg">
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
