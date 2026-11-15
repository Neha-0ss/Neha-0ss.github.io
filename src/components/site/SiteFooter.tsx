import { Github, Linkedin, MapPin } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with curiosity.
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="size-4" /> Dehradun, India
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
