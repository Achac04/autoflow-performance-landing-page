import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-red-900/25"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[120%] w-[70%] rotate-[-11deg] bg-gradient-to-r from-red-600/35 via-red-500/10 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[90%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.18),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_42%,rgba(255,255,255,0.06)_50%,transparent_58%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-red-500 to-transparent sm:w-14" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400/95">
            Spring clearance event
          </p>
        </div>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Spring clearance on{" "}
          <span className="bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
            new and used
          </span>{" "}
          vehicles
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Competitive financing, clear pricing, and a team focused on finding
          the right vehicle for your budget. Schedule a test drive or visit our
          showroom this week.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/#inventory"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(220,38,38,0.65)] transition hover:from-red-500 hover:to-red-600 hover:shadow-[0_0_48px_-6px_rgba(248,113,113,0.55)]"
          >
            View inventory
          </Link>
          <Link
            href="/#hours"
            className="inline-flex items-center justify-center border border-zinc-600 bg-zinc-950/40 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition hover:border-red-500/50 hover:bg-red-950/25 hover:text-red-50"
          >
            Hours &amp; directions
          </Link>
        </div>
      </div>
    </section>
  );
}
