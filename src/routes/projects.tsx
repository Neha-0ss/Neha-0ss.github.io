import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Neha Martolia" },
      {
        name: "description",
        content: "Offline UPI Payment System and PawSafe animal rescue platform — projects by Neha Martolia.",
      },
      { property: "og:title", content: "Projects — Neha Martolia" },
      {
        property: "og:description",
        content: "Offline UPI Payment System and PawSafe animal rescue platform — projects by Neha Martolia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] aurora" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Projects & practical experience"
          title="Things I've built"
          intro="Hands-on academic projects where I designed, built and shipped real features."
        />

        <div className="mt-14 space-y-16">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2"
            >
              <div className={i % 2 ? "md:order-2" : undefined}>
                <div className="overflow-hidden rounded-3xl glass-card p-2 shadow-glow">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-electric">
                  {p.role}
                </p>
                <h2 className="mt-3 text-3xl font-bold">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
