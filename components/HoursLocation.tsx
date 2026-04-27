const box =
  "border border-zinc-800/90 bg-zinc-900/45 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-red-500/30 hover:shadow-[0_0_36px_-16px_rgba(248,113,113,0.22)]";

export function HoursLocation() {
  return (
    <section
      id="hours"
      className="scroll-mt-16 py-14 sm:py-16"
      aria-labelledby="hours-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="hours-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Hours &amp; location
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Visit our Calgary showroom or call ahead to confirm availability and
          book a test drive.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className={box}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400/90">
              Showroom
            </h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-zinc-300">
              1200 Deerfoot Trail NE
              <br />
              Calgary, AB T2E 6J6
            </address>
          </div>

          <div className={box}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400/90">
              Sales hours
            </h3>
            <dl className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex justify-between gap-4">
                <dt>Monday – Friday</dt>
                <dd className="font-medium text-white">9:00 – 20:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Saturday</dt>
                <dd className="font-medium text-white">9:00 – 18:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Sunday</dt>
                <dd className="font-medium text-white">10:00 – 17:00</dd>
              </div>
            </dl>
          </div>

          <div className={box}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-400/90">
              Phone
            </h3>
            <p className="mt-3 text-sm text-zinc-300">
              Sales:{" "}
              <a
                className="font-semibold text-red-300 underline decoration-red-500/40 underline-offset-2 transition hover:text-red-200 hover:decoration-red-400"
                href="tel:+14035550123"
              >
                (403) 555-0123
              </a>
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              For service and parts, press 2 when prompted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
