import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog : conseils web pour professionnelles de l'accompagnement",
  description:
    "Guides pour créer votre site vitrine en abonnement : prix, délais, Instagram vs site, pièges à éviter. Pour coachs, thérapeutes et consultantes.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = getBlogPosts();

  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="Conseils concrets pour ton site web."
        highlight="site web"
        description="Prix, délais, Google, pièges à éviter… Des articles utiles pour les professionnelles de l'accompagnement qui veulent avancer sans se perdre."
        video="/image/sitewebvideo.mp4"
        videoPoster="/image/sophie.jpg"
        videoLabel="Aperçu du site Sophie Bluel, architecte d'intérieur"
        badge="Guides pratiques"
        frame="lime"
        secondaryHref="/tarifs"
      />
      <ValueBanner />

      <section className="py-12 md:py-16 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <BlogCard {...blogPostToCard(featured)} featured />
            </div>
            {rest.map((post) => (
              <BlogCard key={post.slug} {...blogPostToCard(post)} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
