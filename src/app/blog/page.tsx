import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { TitleEm } from "@/components/ui/SectionHead";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";
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
        title={
          <>
            Votre{" "}<TitleEm>expertise</TitleEm>, 
            <br/>sous{" "}
            <TitleEm>un nouveau regard.</TitleEm>
          </>
        }
        description="Des idées pour faire évoluer votre présence en ligne, mieux comprendre le référencement et rendre votre expertise visible sur Google et les IA."
        video="/image/sitewebvideo.mp4"
        videoPoster="/image/sophie.jpg"
        videoLabel="Aperçu du site Sophie Bluel, architecte d'intérieur"
        badge="Guides pratiques"
        secondaryHref="/tarifs"
      />
      <ValueBanner />

      <section className="py-16 sm:py-20 md:py-24 page-x bg-bg">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <BlogCard {...blogPostToCard(featured)} featured />
            {rest.map((post) => (
              <BlogCard key={post.slug} {...blogPostToCard(post)} />
            ))}
          </div>
        </div>
      </section>

      <FutureVitrineCta />
    </>
  );
}
