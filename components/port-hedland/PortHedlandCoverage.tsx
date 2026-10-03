import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const nearbyLocations = locations.filter(
  (location) =>
    location.href !== "/accredited-amsa-maritime-surveyor-in-port-hedland/",
);

export default function PortHedlandCoverage() {
  return (
    <section
      aria-labelledby="port-hedland-coverage-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="port-hedland-coverage-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Survey & Inspection Support Across Port Hedland and the Pilbara
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            Port Hedland is a Pilbara commercial port associated with bulk cargo
            operations and visiting ocean-going ships. Inspection and survey
            requests may relate to vessels calling at the port, cargo
            operations, bunkering where applicable, technical condition, DCV
            work, fit-out or modification inspections, and regulatory
            preparation. Nearby Pilbara marine activity may also connect with
            Dampier, Karratha and other regional service areas, depending on the
            assignment.
          </p>
          <p>
            PMS provides marine inspection and survey support across Port
            Hedland, the Pilbara and relevant Western Australian service areas.
            PMS does not operate a physical office at every listed location.
            Related coverage includes{" "}
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
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-bunbury/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Bunbury
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
