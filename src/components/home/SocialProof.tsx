import { SoftProof } from "@/components/ui/SoftProof";

/** Alias SoftProof (Google only). */
export function SocialProof({ className }: { className?: string } = {}) {
  return (
    <section className={className} aria-label="Avis Google">
      <div className="py-10 px-5 flex justify-center">
        <SoftProof />
      </div>
    </section>
  );
}
