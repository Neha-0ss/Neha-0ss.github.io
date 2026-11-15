import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Github, Server, Smartphone } from "lucide-react";

import { ProfileAvatar } from "@/components/site/ProfileAvatar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neha Martolia — Aspiring Software Developer" },
      {
        name: "description",
        content: "MCA student building web, backend and Android apps with Java, Spring Boot, React and Node.js.",
      },
      { property: "og:title", content: "Neha Martolia — Aspiring Software Developer" },
      {
        property: "og:description",
        content: "MCA student building web, backend and Android apps with Java, Spring Boot, React and Node.js.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "8.50", label: "MCA CGPA" },
  { value: "2", label: "Full projects" },
  { value: "20+", label: "Technologies" },
];

const focus = [
  { icon: Server, label: "Backend" },
  { icon: Code2, label: "Full-Stack Web" },
  { icon: Smartphone, label: "Android" },
  { icon: Database, label: "Databases" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 font-display text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-electric" /> {profile.role}
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Neha</span>
              <br />
              Martolia.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/projects">
                  View my projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-bold text-gradient">{s.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
          <ProfileAvatar />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="What I do"
          title="Building practical software, end to end"
          intro="From secure backend services to Android apps that work offline — I love turning ideas into working products."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl glass-card p-6 transition-transform hover:-translate-y-1">
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="size-5" />
              </span>
              <p className="mt-5 font-display font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured work" title="Selected projects" />
          <Link to="/projects" className="font-display text-sm font-medium text-electric hover:underline">
            See all details →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              hash={p.slug}
              className="group overflow-hidden rounded-3xl glass-card transition-all hover:shadow-glow"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-electric">{p.role}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 aurora opacity-80" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">Let's build something together</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              I'm always happy to talk about projects, internships and new technologies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact me</Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
