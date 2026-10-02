import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";

export default function ServiceAreasSection() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Service Areas
        </p>
        <h2
          id="service-areas-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Surveyor Services Across Western Australia
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services provides marine surveying and inspection
          services across key ports and maritime locations in Western
          Australia.
        </p>
        <div className="mt-8">
          <LocationGrid />
        </div>
        <div className="mt-8">
          <Link
            href="/service-areas/"
            className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
