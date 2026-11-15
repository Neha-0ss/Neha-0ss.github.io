import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { education, expertise, profile, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neha Martolia — Education & Skills" },
      {
        name: "description",
        content: "Education, skills and areas of expertise of Neha Martolia, MCA student at Graphic Era University.",
      },
      { property: "og:title", content: "About Neha Martolia — Education & Skills" },
      {
        property: "og:description",
        content: "Education, skills and areas of expertise of Neha Martolia, MCA student at Graphic Era University.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] aurora" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <section className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="About me" title="Curious learner, practical builder" />
          <p className="text-lg leading-relaxed text-muted-foreground animate-fade-up">{profile.bio}</p>
        </section>

        <section className="mt-24">
          <SectionHeading eyebrow="Education" title="Academic journey" />
          <ol className="relative mt-10 space-y-6 border-l border-border pl-8">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[2.85rem] grid size-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
                  <GraduationCap className="size-4" />
                </span>
                <div className="rounded-2xl glass-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.degree}</h3>
                    <span className="rounded-full bg-secondary px-3 py-1 font-display text-xs font-medium">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{e.institution}</p>
                  <p className="mt-3 font-display text-sm font-semibold text-electric">{e.score}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24">
          <SectionHeading eyebrow="Skills" title="My toolkit" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl glass-card p-6">
                <h3 className="font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm transition-colors hover:border-primary/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeading eyebrow="Expertise" title="Where I add value" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {expertise.map((x, i) => (
              <div key={x.title} className="rounded-2xl glass-card p-6">
                <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
                <h3 className="mt-3 font-semibold leading-snug">{x.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
