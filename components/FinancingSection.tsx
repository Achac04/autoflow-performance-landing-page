import Link from "next/link";

const panel =
  "border border-zinc-800/90 bg-zinc-900/50 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:border-red-500/30 hover:shadow-[0_0_40px_-18px_rgba(248,113,113,0.28)] sm:p-8";

export function FinancingSection() {
  return (
    <section
      id="financing"
      className="scroll-mt-16 border-b border-zinc-800/80 py-14 sm:py-16"
      aria-labelledby="financing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="financing-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Financing and leasing
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Our finance office works with major banks and manufacturer captive
          lenders to present clear options. Whether you prefer to own outright,
          finance over a fixed term, or lease for lower monthly payments and
          predictable trade cycles, we will explain each path in plain language.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className={panel}>
            <h3 className="text-lg font-semibold text-white">
              Retail financing
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
              <li>Competitive fixed and variable rates on approved credit (O.A.C.)</li>
              <li>Flexible terms, typically from 36 to 84 months depending on vehicle age</li>
              <li>Trade-in equity applied to reduce amount financed and monthly payment</li>
              <li>Optional creditor insurance and vehicle protection products</li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Rates and programs change with market conditions and manufacturer
              promotions. A credit application helps us quote accurate payments.
            </p>
          </div>

          <div className={panel}>
            <h3 className="text-lg font-semibold text-white">Leasing</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
              <li>Lower monthly payments compared with similar-term financing on many new models</li>
              <li>Choice of annual kilometre allowances to match how you drive</li>
              <li>End-of-term options: return, buy out, or replace with a new lease</li>
              <li>Business leasing inquiries welcome—ask for our fleet contact</li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Leasing is offered on select new vehicles. Excess wear and kilometre
              charges may apply at lease end as set out in your contract.
            </p>
          </div>
        </div>

        <div className={`mt-10 ${panel}`}>
          <h3 className="text-base font-semibold text-white">
            How the process works
          </h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-300">
            <li>
              Choose a vehicle online or with a product specialist on the showroom
              floor.
            </li>
            <li>
              Share your budget and credit details securely with our finance
              manager.
            </li>
            <li>
              Review side-by-side payment scenarios for finance, lease, or cash
              purchase.
            </li>
            <li>
              Sign documents, arrange insurance, and pick up your vehicle—or
              schedule delivery where available.
            </li>
          </ol>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="tel:+14035550123"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_32px_-8px_rgba(220,38,38,0.55)] transition hover:from-red-500 hover:to-red-600"
          >
            Speak with finance: (403) 555-0123
          </a>
          <Link
            href="/#hours"
            className="inline-flex items-center justify-center border border-zinc-600 bg-zinc-950/50 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-red-500/45 hover:bg-red-950/25"
          >
            Visit our showroom
          </Link>
        </div>
      </div>
    </section>
  );
}
