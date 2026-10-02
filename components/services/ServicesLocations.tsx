import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const westernAustraliaPorts = locations.filter(
  (location) => location.name !== "Western Australia",
);

export default function ServicesLocations() {
  return (
    <section
      aria-labelledby="services-areas-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="services-areas-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Services Across Western Australia
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Serving vessel owners, operators and maritime stakeholders across
          major ports and marine locations in Western Australia. PMS does not
          operate a physical office in every listed location. Coverage for a
          specific job depends on the vessel, timing and inspection
          requirement.
        </p>
        <div className="mt-8">
          <LocationGrid locations={westernAustraliaPorts} />
        </div>
      </div>
    </section>
  );
}
