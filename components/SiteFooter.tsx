import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/90 bg-zinc-950/90 py-8 shadow-[0_-12px_40px_-20px_rgba(220,38,38,0.12)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} NorthStar Motors. All rights reserved.
        </p>
        <Link
          href="/about-project"
          className="text-sm font-semibold text-red-300/90 underline decoration-red-500/30 underline-offset-4 transition hover:text-red-200 hover:decoration-red-400"
        >
          Project overview
        </Link>
      </div>
    </footer>
  );
}
