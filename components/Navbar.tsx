"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#financing", label: "Financing" },
  { href: "/about-project", label: "Project overview" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group text-base font-semibold tracking-tight text-white transition hover:text-red-100 hover:drop-shadow-[0_0_14px_rgba(248,113,113,0.45)]"
          onClick={() => setOpen(false)}
        >
          NorthStar{" "}
          <span className="text-red-500 transition group-hover:text-red-300">
            Motors
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm text-zinc-300 transition duration-200 hover:text-red-100 hover:drop-shadow-[0_0_12px_rgba(248,113,113,0.35)] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-red-500 after:to-red-600/0 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-zinc-700 text-zinc-200 transition hover:border-red-500/50 hover:bg-red-950/30 hover:text-red-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-zinc-800 bg-zinc-950/98 md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col px-4 py-2" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-zinc-800/80 py-3 text-sm text-zinc-200 transition hover:bg-red-950/20 hover:text-red-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
