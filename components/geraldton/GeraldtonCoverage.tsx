import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const nearbyLocations = locations.filter(
  (location) =>
    location.href !== "/accredited-amsa-maritime-surveyor-in-geraldton/",
);

export default function GeraldtonCoverage() {
  return (
    <section
      aria-labelledby="geraldton-coverage-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="geraldton-coverage-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Surveyor Support Across Geraldton and Western Australia
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            PMS supports maritime operations in Geraldton and across its wider
            Western Australia service area. Assignments may also connect with
            Perth, Fremantle and Kwinana to the south, or with Port Hedland,
            Dampier, Karratha and other northern locations depending on the
            vessel. PMS does not operate a physical office at every listed
            location.
          </p>
          <p>
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
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-albany/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Albany
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-marine-surveyor-in-esperance/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Esperance
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-port-hedland/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Port Hedland
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-dampier/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Dampier
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-karratha/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Karratha
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-pilbara/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Pilbara
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
