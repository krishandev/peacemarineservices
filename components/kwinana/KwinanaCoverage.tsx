import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const nearbyLocations = locations.filter(
  (location) => location.href !== "/accredited-amsa-marine-surveyor-in-kwinana/",
);

export default function KwinanaCoverage() {
  return (
    <section
      aria-labelledby="kwinana-coverage-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="kwinana-coverage-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Survey & Inspection Support Across Kwinana and Western
          Australia
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            Kwinana is associated with industrial maritime operations on
            Cockburn Sound, south of Fremantle and the Perth metropolitan area.
            Inspection and survey requests may relate to vessels at industrial
            berths, cargo or bunker operations, technical condition and
            regulatory preparation. Nearby marine areas such as Fremantle and
            Cockburn Sound may also be relevant depending on the assignment.
          </p>
          <p>
            PMS provides marine inspection and survey support across Kwinana and
            relevant Western Australian ports and service areas. PMS does not
            operate a physical office at every listed location. Related coverage
            includes{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-fremantle/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveyor services in Fremantle
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-perth/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveyor services in Perth
            </Link>{" "}
            and the full list of{" "}
            <Link
              href="/service-areas/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              service areas
            </Link>
            .
          </p>
        </div>
        <div className="mt-8">
          <LocationGrid locations={nearbyLocations} />
        </div>
        <p className="mt-8">
          <Link
            href="/service-areas/"
            className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View All Service Areas
          </Link>
        </p>
      </div>
    </section>
  );
}
