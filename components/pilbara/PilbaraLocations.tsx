import LocationGrid from "@/components/locations/LocationGrid";
import { locations } from "@/data/locations";

const pilbaraLocationHrefs = [
  "/accredited-amsa-maritime-surveyor-in-karratha/",
  "/accredited-amsa-maritime-surveyor-in-dampier/",
  "/accredited-amsa-maritime-surveyor-in-port-hedland/",
] as const;

const pilbaraLocations = pilbaraLocationHrefs
  .map((href) => locations.find((location) => location.href === href))
  .filter((location): location is (typeof locations)[number] =>
    Boolean(location),
  );

export default function PilbaraLocations() {
  return (
    <section
      aria-labelledby="pilbara-locations-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="pilbara-locations-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Surveyor Coverage Across the Pilbara
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS&apos;s Pilbara service-area coverage includes inspection support
          for agreed assignments connected with Karratha, Dampier and Port
          Hedland. These locations are not physical PMS offices. Availability
          depends on the vessel, requested service, access arrangements and
          timing.
        </p>
        <div className="mt-8">
          <LocationGrid locations={pilbaraLocations} />
        </div>
      </div>
    </section>
  );
}
