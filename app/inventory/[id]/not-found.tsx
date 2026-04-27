import Link from "next/link";

export default function VehicleNotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-white">Vehicle not found</h1>
      <p className="mt-3 text-sm text-zinc-400">
        That stock listing may have been sold or removed. Return to the main
        inventory to see current vehicles.
      </p>
      <p className="mt-8">
        <Link
          href="/#inventory"
          className="text-sm font-semibold text-red-300/90 underline decoration-red-500/35 underline-offset-4 transition hover:text-red-200 hover:decoration-red-400"
        >
          Back to inventory
        </Link>
      </p>
    </div>
  );
}
