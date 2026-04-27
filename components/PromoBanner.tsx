type PromoBannerProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  subline?: string;
  /** Short call-to-action or fine print shown in the accent strip below the headline */
  highlight?: string;
  /** Visual weight: wide showroom strip vs compact rail */
  size?: "lg" | "md";
};

/**
 * Full-width promotional strip. Pass `highlight` for a short CTA or program note under the headline.
 */
export function PromoBanner({
  id,
  eyebrow,
  headline,
  subline,
  highlight,
  size = "lg",
}: PromoBannerProps) {
  const pad = size === "lg" ? "py-12 sm:py-14" : "py-8 sm:py-10";

  return (
    <aside
      id={id}
      className={`relative overflow-hidden border-y border-red-900/35 bg-zinc-950 ${pad}`}
      aria-label="Promotional banner"
    >
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-[140%] w-[55%] -translate-y-1/2 rotate-[-8deg] bg-gradient-to-r from-red-600/25 via-red-500/10 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_70%_30%,rgba(248,113,113,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400/90">
          {eyebrow}
        </p>
        <p
          className={`mt-2 font-semibold tracking-tight text-white ${size === "lg" ? "max-w-3xl text-2xl sm:text-3xl" : "max-w-2xl text-xl sm:text-2xl"}`}
        >
          {headline}
        </p>
        {subline ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            {subline}
          </p>
        ) : null}
        {highlight ? (
          <p className="mt-4 inline-block max-w-3xl border border-red-500/35 bg-red-950/25 px-3 py-2 text-xs leading-relaxed text-red-100/95 sm:text-sm">
            {highlight}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
