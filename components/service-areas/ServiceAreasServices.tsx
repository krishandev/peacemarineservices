import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceAreasServices() {
  return (
    <section
      aria-labelledby="service-areas-services-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="service-areas-services-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Services Available Across Our Service Areas
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The services below can be discussed for relevant Western Australian
          ports and marine locations. The work required depends on the vessel
          and the assignment.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="flex min-h-11 items-center border border-pms-line bg-white px-5 py-4 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:border-pms-blue/45 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/our-services/"
            className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View All Marine Services →
          </Link>
        </p>
      </div>
    </section>
  );
}
