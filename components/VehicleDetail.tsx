import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/inventory-data";

type Props = {
  vehicle: Vehicle;
};

/**
 * Single reusable layout for `/inventory/[id]`.
 * Swap the `vehicle` prop (from CMS/API) to render different units.
 */
export function VehicleDetail({ vehicle: v }: Props) {
  const mileageLabel =
    v.condition === "new" && v.mileageKm < 500
      ? `${v.mileageKm.toLocaleString("en-CA")} km (delivery mileage)`
      : `${v.mileageKm.toLocaleString("en-CA")} km`;

  const specs: { label: string; value: string }[] = [
    { label: "Stock number", value: v.stockNumber },
    { label: "Odometer", value: mileageLabel },
    { label: "Exterior", value: v.exteriorColor },
    { label: "Interior", value: v.interiorColor },
    { label: "Drivetrain", value: v.drivetrain },
    { label: "Transmission", value: v.transmission },
    { label: "Engine / motor", value: v.engine },
    { label: "Fuel type", value: v.fuelType },
  ];

  return (
    <article className="relative overflow-hidden border-b border-zinc-800/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_-10%,rgba(220,38,38,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <nav className="text-sm text-zinc-400" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition hover:text-red-200 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.35)]"
              >
                Home
              </Link>
            </li>
            <li className="text-zinc-600" aria-hidden>
              /
            </li>
            <li>
              <Link
                href="/#inventory"
                className="transition hover:text-red-200 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.35)]"
              >
                Inventory
              </Link>
            </li>
            <li className="text-zinc-600" aria-hidden>
              /
            </li>
            <li className="font-medium text-white">{v.model}</li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="group relative aspect-[4/3] w-full max-w-xl overflow-hidden border border-zinc-800/90 bg-zinc-900 shadow-[0_0_48px_-20px_rgba(220,38,38,0.25)] lg:max-w-none">
            <Image
              src={v.imagePath}
              alt={v.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-0 top-0 bg-gradient-to-r from-red-700 to-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
              {v.condition}
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {v.model}
            </h1>
            <p className="mt-1 text-zinc-400">{v.trim}</p>
            <p className="mt-4 text-3xl font-semibold text-red-300">
              ${v.price.toLocaleString("en-CA")}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Price plus applicable taxes and fees. Ask for current incentives.
            </p>

            <div className="mt-8 border border-zinc-800/90 bg-zinc-900/50 backdrop-blur-sm">
              <dl className="divide-y divide-zinc-800/90">
                {specs.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-red-400/85">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-zinc-200">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+14035550123"
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_-8px_rgba(220,38,38,0.55)] transition hover:from-red-500 hover:to-red-600"
              >
                Call (403) 555-0123
              </a>
              <Link
                href="/#hours"
                className="inline-flex items-center justify-center border border-zinc-600 bg-zinc-950/50 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-red-500/45 hover:bg-red-950/25"
              >
                Plan a visit
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/80 pt-10">
          <h2 className="text-lg font-semibold text-white">Highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
            {v.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-10 text-lg font-semibold text-white">
            From our sales team
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            {v.description}
          </p>
        </div>

        <p className="mt-12">
          <Link
            href="/#inventory"
            className="text-sm font-semibold text-red-300/90 underline decoration-red-500/35 underline-offset-4 transition hover:text-red-200 hover:decoration-red-400"
          >
            ← Back to featured inventory
          </Link>
        </p>
      </div>
    </article>
  );
}
