import Link from "next/link";

export default function TrustIntro() {
  return (
    <section
      aria-labelledby="trust-intro-heading"
      className="border-b border-pms-line bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14 lg:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Marine Surveying &amp; Inspection Services
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              id="trust-intro-heading"
              className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
            >
              Professional Marine Surveying, Inspection &amp; Compliance Support
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
              PMS Peace Marine Services provides marine surveying, inspection,
              auditing and consultancy services for vessel owners, operators,
              ship managers and maritime businesses. Work is arranged around
              vessel operations and inspection needs across Western Australia
              and other Australian locations.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/about-us/"
              className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              About PMS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
