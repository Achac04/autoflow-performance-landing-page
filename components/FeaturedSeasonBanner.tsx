"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * Seasonal offer: compact rail by default; expands on click to the full promo layout.
 * Motion is stronger only while expanded (see `globals.css`, prefers-reduced-motion respected).
 */
export function FeaturedSeasonBanner() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headingId = "featured-season-offer-heading";

  return (
    <section
      id="banner-primary"
      className={`offer-banner relative isolate w-full overflow-hidden border-y border-red-500/50 bg-zinc-950 transition-[padding] duration-300 ease-out ${
        open
          ? "offer-banner--expanded py-10 sm:py-14"
          : "offer-banner--collapsed py-0"
      }`}
      aria-label="Seasonal finance offer"
    >
      {!open ? (
        <button
          type="button"
          className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-red-950/15 sm:gap-4 sm:px-6 lg:px-10"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span
            className="offer-banner-dot h-2 w-2 shrink-0 rounded-full bg-red-500"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-white sm:text-base">
              Featured Spring/Summer Offer
            </p>
            <p className="truncate text-xs text-zinc-400 sm:text-sm">
              Low rates, stackable OEM incentives &amp; seasonal savings — tap
              for details
            </p>
          </div>
          <ChevronDown
            className="h-5 w-5 shrink-0 text-red-400/90 sm:h-6 sm:w-6"
            aria-hidden
          />
        </button>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(220,38,38,0.35),transparent_55%)] offer-banner-glow-layer"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-1/4 top-1/2 h-[180%] w-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-r from-red-600/30 via-transparent to-transparent blur-3xl offer-banner-glow-layer"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div className="offer-banner-shimmer absolute -inset-y-8 left-0 w-[45%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent offer-banner-edge-glow" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent offer-banner-edge-glow" />

          <div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-sm border border-red-500/40 bg-red-950/40 px-3 py-1.5">
                <span
                  className="offer-banner-dot h-2 w-2 shrink-0 rounded-full bg-red-500"
                  aria-hidden
                />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                  Limited season
                </p>
              </div>
              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-zinc-600 bg-zinc-900/80 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-red-500/50 hover:bg-red-950/30 hover:text-white sm:text-sm"
                aria-expanded={open}
                aria-label="Collapse seasonal offer"
                onClick={() => setOpen(false)}
              >
                <span className="hidden sm:inline">Show less</span>
                <ChevronUp className="h-4 w-4 text-red-400" aria-hidden />
              </button>
            </div>

            <h2
              id={headingId}
              className="offer-banner-title text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[1.75rem] md:leading-snug"
            >
              Featured Spring/Summer Offer
            </h2>

            <div className="offer-banner-body mt-6 space-y-4 text-base leading-relaxed text-zinc-200 sm:text-lg">
              <p>
                Drive into the season with limited-time Spring &amp; Summer
                Clearance Pricing on select models. Take advantage of low rates
                on approved credit, plus stackable OEM incentives available on
                eligible vehicles.
              </p>
              <p>
                Enjoy flexible financing options, competitive payments, and
                exclusive seasonal savings designed to get you on the road for
                less.
              </p>
              <p className="rounded-md border border-red-500/25 bg-black/25 px-4 py-3 text-sm italic leading-relaxed text-red-100/90 sm:text-base">
                Representative offer only. Terms vary by lender, credit profile,
                and vehicle selection. Incentives and pricing are subject to
                change without notice and may vary weekly. No obligation to
                apply.
              </p>
              <p className="font-medium text-white">
                Visit our finance team today to explore current offers, eligible
                inventory, and personalized payment options before these seasonal
                deals end.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
