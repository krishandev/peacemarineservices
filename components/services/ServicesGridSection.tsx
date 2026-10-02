import ServiceGrid from "@/components/services/ServiceGrid";

export default function ServicesGridSection() {
  return (
    <section
      aria-labelledby="our-marine-services-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="our-marine-services-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Our Marine Services
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The services below are the current PMS Peace Marine Services offering
          for marine surveying, inspection, auditing and consultancy.
        </p>
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}
