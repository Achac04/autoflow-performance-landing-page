export function TrustSection() {
  const items = [
    {
      title: "Financing & leasing",
      body: "Work with our finance desk to structure payments that fit your monthly budget and term preferences.",
    },
    {
      title: "Trade-ins welcome",
      body: "Bring your current vehicle for a transparent appraisal. We’ll apply fair market value toward your next purchase.",
    },
    {
      title: "Multi-point inspections",
      body: "Our used inventory is reviewed by technicians so you can buy with confidence and clear documentation.",
    },
  ];

  return (
    <section
      className="border-b border-zinc-800/80 py-14 sm:py-16"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="trust-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Why customers choose NorthStar
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Straightforward sales, experienced product specialists, and support
          after you drive home.
        </p>
        <div className="mt-10 grid gap-6 border-t border-zinc-800/80 pt-10 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-800/80 bg-zinc-900/40 p-5 transition hover:border-red-500/35 hover:shadow-[0_0_32px_-14px_rgba(248,113,113,0.25)]"
            >
              <h3 className="text-base font-semibold text-red-200/95">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
