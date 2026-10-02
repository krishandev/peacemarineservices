import Link from "next/link";
import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const westernAustraliaPorts = locations.filter(
  (location) => location.name !== "Western Australia",
);

export default function ClassConsultantLocations() {
  return (
    <section
      aria-labelledby="class-consultant-locations-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="class-consultant-locations-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Consultancy Across Western Australia
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS provides marine technical consultancy and inspection support
          across key ports and marine locations in Western Australia, including
          Perth, Fremantle, Kwinana, Bunbury, Albany, Esperance, Geraldton, Port
          Hedland, Dampier, Karratha and the Pilbara. PMS does not operate a
          physical office in every listed location.
        </p>
        <div className="mt-8">
          <LocationGrid locations={westernAustraliaPorts} />
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
