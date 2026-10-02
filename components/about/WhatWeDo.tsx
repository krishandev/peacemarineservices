import Link from "next/link";

const categories = [
  {
    title: "Marine Surveys",
    href: "/our-services/pre-purchase-inspection/",
    description:
      "Independent survey work to assess vessel condition, systems and related documentation within an agreed scope.",
  },
  {
    title: "Marine Inspections",
    href: "/our-services/marine-safety-inspection-in-australia/",
    description:
      "Inspection of safety arrangements, equipment and onboard procedures for operational use.",
  },
  {
    title: "AMSA-Related Services",
    href: "/our-services/amsa-dcv-marine-surveyor/",
    description:
      "Survey and inspection support connected with domestic commercial vessel and AMSA-related requirements.",
  },
  {
    title: "Flag State Inspections",
    href: "/our-services/flag-state-inspection/",
    description:
      "Inspection of a vessel against the requirements of the administration under which it is registered.",
  },
  {
    title: "Port State Control Preparation",
    href: "/our-services/pre-psc-inspection-in-australia/",
    description:
      "Inspection to review a vessel's readiness before a port state control attendance.",
  },
  {
    title: "Marine Audits",
    href: "/our-services/internal-audits-for-ism-isps-and-mlc/",
    description:
      "Internal audits of ISM, ISPS and MLC management systems used on board and ashore.",
  },
  {
    title: "Safety Vetting",
    href: "/our-services/safety-vetting-inspector-in-australia/",
    description:
      "Safety vetting inspection of vessels against charterer or operator inspection criteria.",
  },
  {
    title: "Cargo & Bunker Surveys",
    href: "/our-services/cargo-surveyor/",
    description:
      "Cargo survey work covering loading, discharge, condition and quantity, plus bunker quantity measurement where required.",
  },
  {
    title: "Marine Engineering Consultancy",
    href: "/our-services/technical-inspection-and-marine-engineering-consultancy/",
    description:
      "Technical inspection and engineering advice for vessel systems and marine operations.",
  },
] as const;

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="what-we-do-heading"
          className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What We Do
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services provides marine surveying, inspection,
          auditing and consultancy services. The categories below reflect our
          current service offering.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <li
              key={item.title}
              className="border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                Learn more
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-6 text-pms-muted">
          See the full list of{" "}
          <Link
            href="/our-services/"
            className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            marine surveying and inspection services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
