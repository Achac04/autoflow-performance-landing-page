import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project overview",
  description:
    "Overview of the NorthStar Motors spring clearance microsite: technology choices and how content can connect to your systems.",
};

export default function AboutProjectPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-red-400/90">
        Project overview
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Dealership campaign site
      </h1>
      <p className="mt-6 text-base leading-relaxed text-zinc-400">
        This microsite demonstrates a typical spring campaign landing page: a
        strong headline, featured vehicles, reasons to buy, and clear
        hours/location information. The layout is structured so marketing can
        update copy and imagery without rethinking the whole page.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">
        Technology in use
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
        <li>
          <span className="font-medium text-zinc-100">Next.js</span> for fast
          pages, responsive images, and a structure that scales from a single
          campaign to additional routes.
        </li>
        <li>
          <span className="font-medium text-zinc-100">Tailwind CSS</span> for
          consistent spacing, typography, and breakpoints across the site.
        </li>
        <li>
          <span className="font-medium text-zinc-100">Lucide</span> for a small
          set of navigation icons (mobile menu).
        </li>
      </ul>

      <blockquote className="mt-10 border-l-2 border-red-500 pl-5 text-base italic leading-relaxed text-zinc-300">
        Built to simulate a CMS-driven environment, optimized for Core Web
        Vitals, and designed to translate Figma-style layouts into code.
      </blockquote>

      <h2 className="mt-10 text-lg font-semibold text-white">
        Connecting to your systems
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        Vehicle cards and store hours can be fed from the same sources you
        already use—whether that is a WordPress site with a headless API, an
        inventory database behind PHP endpoints, or a third-party DMS feed. The
        front end stays focused on presentation; your team controls the data.
      </p>

      <p className="mt-10">
        <Link
          href="/"
          className="text-sm font-semibold text-red-300/90 underline decoration-red-500/35 underline-offset-4 transition hover:text-red-200 hover:decoration-red-400"
        >
          Back to home
        </Link>
      </p>
    </article>
  );
}
