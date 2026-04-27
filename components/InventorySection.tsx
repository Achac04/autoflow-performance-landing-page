"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { vehicles, type VehicleCondition } from "@/lib/inventory-data";

const card =
  "flex h-full flex-col overflow-hidden border border-zinc-800/90 bg-zinc-900/45 shadow-[0_0_0_1px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:border-red-500/35 hover:shadow-[0_20px_48px_-22px_rgba(248,113,113,0.32)]";

export function InventorySection() {
  const [condition, setCondition] = useState<VehicleCondition>("new");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 500);
    return () => window.clearTimeout(t);
  }, [condition]);

  function selectCondition(next: VehicleCondition) {
    if (next === condition) return;
    setLoading(true);
    setCondition(next);
  }

  const filtered = useMemo(
    () => vehicles.filter((v) => v.condition === condition).slice(0, 4),
    [condition],
  );

  return (
    <section
      id="inventory"
      className="scroll-mt-16 border-b border-zinc-800/80 py-14 sm:py-16"
      aria-labelledby="inventory-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-zinc-800/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="inventory-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Featured vehicles
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              A sample of current stock. Ask our sales team about availability,
              incentives, and delivery options.
            </p>
          </div>

          <div
            className="flex gap-0 overflow-hidden rounded-sm border border-zinc-700 bg-zinc-950/80 shadow-inner shadow-black/40"
            role="group"
            aria-label="Filter by condition"
          >
            {(["new", "used"] as const).map((key, i) => (
              <button
                key={key}
                type="button"
                onClick={() => selectCondition(key)}
                className={`min-w-[5.5rem] px-4 py-2 text-sm font-semibold capitalize transition ${
                  i > 0 ? "border-l border-zinc-700" : ""
                } ${
                  condition === key
                    ? "bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[0_0_24px_-6px_rgba(220,38,38,0.55)]"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8 min-h-[260px]">
          {loading ? (
            <div
              className="flex min-h-[260px] flex-col items-center justify-center gap-2 border border-dashed border-zinc-700 bg-zinc-900/30 text-zinc-500"
              role="status"
              aria-live="polite"
            >
              <Loader2
                className="h-6 w-6 animate-spin text-red-500/80"
                aria-hidden
              />
              <span className="text-sm">Updating results…</span>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((v) => (
                <li key={v.id}>
                  <article id={`vehicle-${v.id}`} className={`group ${card}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                      <Image
                        src={v.imagePath}
                        alt={v.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-0 top-0 bg-gradient-to-r from-red-700 to-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                        {v.condition}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col border-t border-zinc-800/90 p-4">
                      <h3 className="text-base font-semibold text-white">
                        {v.model}
                      </h3>
                      <p className="text-sm text-zinc-400">{v.trim}</p>
                      <p className="mt-3 text-lg font-semibold text-red-300">
                        ${v.price.toLocaleString("en-CA")}
                      </p>
                      <Link
                        href={`/inventory/${v.id}`}
                        className="mt-4 inline-flex justify-center border border-zinc-600 py-2 text-sm font-semibold text-zinc-100 transition hover:border-red-500/60 hover:bg-red-950/30 hover:text-red-50"
                      >
                        View details
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
