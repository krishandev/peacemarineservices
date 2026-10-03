import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const nearbyLocations = locations.filter(
  (location) => location.href !== "/accredited-amsa-marine-surveyor-in-perth/",
);

export default function PerthCoverage() {
  return (
    <section
      aria-labelledby="perth-coverage-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="perth-coverage-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Perth Marine & Port Coverage
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            Perth is Western Australia&apos;s capital and a base for many vessel
            owners, managers and maritime companies. Commercial marine
            operations connected with Perth commonly involve nearby port and
            harbour areas such as Fremantle, Kwinana and Cockburn Sound, as well
            as wider Western Australian ports depending on the assignment.
          </p>
          <p>
            PMS provides marine inspection and survey support across Perth and
            relevant Western Australian ports and service areas. PMS does not
            operate a physical office at every listed location. See all{" "}
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
