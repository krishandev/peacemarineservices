import LocationGrid from "@/components/locations/LocationGrid";

export default function ServiceAreasGridSection() {
  return (
    <section
      aria-labelledby="our-marine-service-areas-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="our-marine-service-areas-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Our Marine Service Areas
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Explore the key ports and marine locations where PMS Peace Marine
          Services provides marine surveying, inspection and related support.
        </p>
        <div className="mt-8">
          <LocationGrid showImages linkLabel="View Service Area" />
        </div>
      </div>
    </section>
  );
}
