"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { BlogCard, projectToCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { bubbleInStyle } from "@/lib/motion";

const selection = projects.slice(0, 3);

export function SitePreview() {
  const gridRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-14 md:py-20 px-6 bg-bg" id="projets">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-8 md:mb-10 max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3">
            Ce que je te propose
          </p>
          <SectionHead align="left" size="xl">
            Des projets concrets, <TitleEm>déjà en ligne</TitleEm>
          </SectionHead>
        </div>

        <ul
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          aria-label="Sélection de projets"
        >
          {selection.map((project, i) => (
            <li
              key={project.id}
              className="list-none h-full"
              style={bubbleInStyle(i, visible)}
            >
              <BlogCard {...projectToCard(project)} />
            </li>
          ))}
        </ul>

        <div className="reveal mt-8 md:mt-10">
          <Button href="#contact" size="md">
            Je veux un site comme ça
          </Button>
        </div>
      </div>
    </section>
  );
}
