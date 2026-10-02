import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";

export default function AboutServiceAreas() {
  return (
    <section
      aria-labelledby="about-areas-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="about-areas-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Services Across Western Australia
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services provides marine surveying and inspection
          services across relevant Western Australian ports and locations,
          including Kwinana, Fremantle, Bunbury, Albany, Esperance, Geraldton,
          Port Hedland, Dampier, Karratha and the Pilbara. PMS does not
          operate a physical office in every listed location. Coverage for a
          specific job depends on the vessel, timing and inspection
          requirement.
        </p>
        <div className="mt-8">
          <LocationGrid />
        </div>
        <div className="mt-8">
          <Link
            href="/service-areas/"
            className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
