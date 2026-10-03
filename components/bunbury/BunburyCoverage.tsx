import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const nearbyLocations = locations.filter(
  (location) =>
    location.href !== "/accredited-amsa-maritime-surveyor-in-bunbury/",
);

export default function BunburyCoverage() {
  return (
    <section
      aria-labelledby="bunbury-coverage-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="bunbury-coverage-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Survey & Inspection Support Across Bunbury and Western
          Australia
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            Bunbury is the principal South West Western Australian port,
            serving commercial maritime operations as well as regional vessel
            activity. Inspection and survey requests may relate to vessels
            calling at the port, cargo operations, bunkering where applicable,
            technical condition, DCV work, fit-out or modification inspections,
            and regulatory preparation.
          </p>
          <p>
            PMS provides marine inspection and survey support across Bunbury and
            relevant Western Australian ports and service areas. PMS does not
            operate a physical office at every listed location. Related coverage
            includes{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-perth/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveyor services in Perth
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-fremantle/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Fremantle
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-kwinana/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Kwinana
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
