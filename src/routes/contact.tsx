import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Neha Martolia" },
      { name: "description", content: "Get in touch with Neha Martolia via LinkedIn or GitHub. Based in Dehradun, India." },
      { property: "og:title", content: "Contact Neha Martolia" },
      {
        property: "og:description",
        content: "Get in touch with Neha Martolia via LinkedIn or GitHub. Based in Dehradun, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = [
    ...(profile.email
      ? [{ icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` }]
      : []),
    { icon: Linkedin, label: "LinkedIn", value: "neha-martolia", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "Neha-0ss", href: profile.github },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-4xl px-5 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          intro="Have an opportunity, a project idea, or just want to talk tech? Reach out — I'd love to hear from you."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="truncate font-display font-semibold">{value}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-electric" />
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-2xl glass-card p-6">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary text-electric">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-display font-semibold">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
