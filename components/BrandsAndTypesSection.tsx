import type { BrandDef } from "@/lib/brands";
import { brandDefs } from "@/lib/brands";

const bodyStyles = [
  {
    title: "SUVs & crossovers",
    description:
      "Compact to three-row models for families, winter driving, and weekend gear.",
  },
  {
    title: "Sedans & hatchbacks",
    description:
      "Efficient daily drivers and premium four-door options with strong resale value.",
  },
  {
    title: "Trucks & vans",
    description:
      "Light-duty pickups, work-ready configurations, and passenger vans for crews.",
  },
  {
    title: "Electric & hybrid",
    description:
      "Battery-electric and hybrid models for lower fuel costs and provincial incentives where available.",
  },
] as const;

function BrandTile({ def }: { def: BrandDef }) {
  const base =
    "group flex flex-col items-center justify-center gap-2 border border-zinc-800/90 bg-zinc-900/50 px-3 py-5 transition duration-300 hover:border-red-500/40 hover:bg-zinc-900/80 hover:shadow-[0_0_36px_-10px_rgba(248,113,113,0.35)]";

  if ("abbr" in def) {
    return (
      <li className={base} aria-label={def.name}>
        <span
          className="flex h-11 w-11 items-center justify-center border border-zinc-700 bg-zinc-950 text-xs font-bold tracking-tight text-red-300 transition group-hover:border-red-500/50 group-hover:text-red-200"
          aria-hidden
        >
          {def.abbr}
        </span>
        <span className="text-center text-xs font-medium text-zinc-300 transition group-hover:text-white">
          {def.name}
        </span>
      </li>
    );
  }

  const { icon } = def;
  return (
    <li className={base} aria-label={def.name}>
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-zinc-500 transition duration-300 group-hover:scale-110 group-hover:text-red-400 group-hover:drop-shadow-[0_0_14px_rgba(248,113,113,0.45)]"
        aria-hidden
      >
        <path fill="currentColor" d={icon.path} />
      </svg>
      <span className="text-center text-xs font-medium text-zinc-300 transition group-hover:text-white">
        {def.name}
      </span>
    </li>
  );
}

export function BrandsAndTypesSection() {
  return (
    <section
      id="brands"
      className="scroll-mt-16 w-full border-b border-zinc-800/80 py-14 sm:py-16"
      aria-labelledby="brands-heading"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
        <h2
          id="brands-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Brands and vehicle types
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-400 sm:text-base">
          NorthStar Motors carries new and used inventory across the brands
          below. Availability changes weekly—contact us if you are looking for a
          specific model or trim.
        </p>

        <div className="mt-10 flex w-full flex-col gap-12 lg:gap-14">
          <div className="w-full">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400/90">
              Car Brands In Stock
            </h3>
            <ul className="mt-4 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
              {brandDefs.map((def) => (
                <BrandTile key={def.name} def={def} />
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-xs text-zinc-500">
              Other makes may appear through trade-ins or special orders. Ask
              sales about incoming units not yet listed online.
            </p>
          </div>

          <div className="w-full">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400/90">
              Body styles and use cases
            </h3>
            <ul className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {bodyStyles.map((item) => (
                <li
                  key={item.title}
                  className="border border-zinc-800/90 bg-zinc-900/40 px-4 py-4 transition hover:border-red-500/35 hover:bg-red-950/15"
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
