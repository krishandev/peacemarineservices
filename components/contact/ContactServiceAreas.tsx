import Link from "next/link";
import { serviceAreas } from "@/lib/navigation";

export default function ContactServiceAreas() {
  return (
    <section
      aria-labelledby="contact-areas-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="contact-areas-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Services Across Western Australia
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services provides marine surveying, inspection and
          related support across key ports and marine locations in Western
          Australia. Coverage for a specific job depends on the vessel, timing
          and inspection requirement. PMS does not operate a physical office
          in every listed location.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="inline-flex min-h-11 items-center rounded-sm border border-pms-line bg-pms-wash px-4 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:border-pms-blue/45 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                {area.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href="/service-areas/"
            className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View all service areas
          </Link>
        </p>
      </div>
    </section>
  );
}
