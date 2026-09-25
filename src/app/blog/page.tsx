import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ContactSection } from "@/components/home/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog : Conseils web pour artisans & indépendants",
  description:
    "Guides et conseils pour créer ton site vitrine, comprendre les prix, éviter les pièges IA et convertir plus de visiteurs en clients.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="Conseils concrets pour ton premier site."
        highlight="premier site"
        description="Prix, délais, Google, pièges à éviter… Des articles utiles pour artisans et indépendants qui veulent avancer sans se perdre."
        image="/image/photographe.jpg"
        imageAlt="Indépendant au travail : conseils blog pour créer son site"
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
