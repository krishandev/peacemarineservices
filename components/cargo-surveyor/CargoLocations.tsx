import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

export default function CargoLocations() {
  return (
    <section
      aria-labelledby="cargo-ports-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="cargo-ports-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Cargo Survey Services Across Australian Ports
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Cargo surveys may be useful during vessel and cargo operations at
          Australian ports. PMS is not a port authority and does not hold a
          government appointment for cargo operations. Attendance depends on
          the assignment, access and survey instructions.
        </p>
        <h2
          id="cargo-locations-heading"
          className="mt-10 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Cargo Surveyor Services Across Australia
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS provides marine survey and inspection support across Western
          Australia, including Perth, Fremantle, Kwinana, Bunbury, Albany,
          Esperance, Geraldton, Port Hedland, Dampier, Karratha, the Pilbara and
          Western Australia more broadly. Other Australian locations can be
          discussed depending on the assignment. PMS does not operate a physical
          office in every listed location. See all{" "}
          <Link
            href="/service-areas/"
            className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            service areas
          </Link>
          .
        </p>
        <div className="mt-8">
          <LocationGrid locations={locations} />
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
