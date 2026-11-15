import { profile } from "@/lib/portfolio-data";

/** Monogram avatar; swap the inner span for an <img> once a profile photo is available. */
export function ProfileAvatar() {
  return (
    <div className="relative mx-auto size-64 sm:size-80 animate-float">
      <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-60 blur-3xl" />
      <div className="absolute inset-0 rounded-full ring-conic p-[3px] animate-spin-slow">
        <div className="size-full rounded-full bg-background" />
      </div>
      <div className="absolute inset-3 grid place-items-center rounded-full glass-card">
        <span className="font-display text-7xl font-bold text-gradient sm:text-8xl">{profile.initials}</span>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-card px-4 py-1.5 font-display text-xs font-medium">
        <span className="mr-2 inline-block size-2 rounded-full bg-electric" />
        Open to opportunities
      </div>
    </div>
  );
}
