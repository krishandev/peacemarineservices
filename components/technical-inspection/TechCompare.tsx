import Link from "next/link";

const comparisons = [
  {
    title: "Technical Inspection & Engineering Consultancy",
    text: "Technical condition assessment and engineering support.",
    href: "/technical-inspection-and-marine-engineering-consultancy/",
    current: true,
  },
  {
    title: "Pre-Purchase Inspection",
    text: "Assess vessel condition before purchase.",
    href: "/pre-purchase-inspection/",
  },
  {
    title: "Marine Safety Inspection",
    text: "Focus on vessel safety-related condition.",
    href: "/marine-safety-inspection-in-australia/",
  },
  {
    title: "Class Related Consultancy",
    text: "Technical support relating to classification and vessel matters.",
    href: "/class-related-consultant/",
  },
  {
    title: "Pre-AMSA Inspection",
    text: "Preparation for an applicable AMSA-related inspection or survey.",
    href: "/pre-amsa-inspection/",
  },
  {
    title: "Flag State Inspection",
    text: "Preparation and support relating to Flag State inspection requirements.",
    href: "/flag-state-inspection/",
  },
  {
    title: "Pre-PSC Inspection",
    text: "Preparation for a potential Port State Control inspection.",
    href: "/pre-psc-inspection-in-australia/",
  },
] as const;

export default function TechCompare() {
  return (
    <section
      aria-labelledby="tech-compare-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="tech-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Technical Inspection vs Other Marine Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Related PMS services may be useful depending on the vessel and
          requirement. One service does not automatically replace another.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((item) => (
            <li
              key={item.href}
              className="flex min-w-0 flex-col border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-pms-muted">
                {item.text}
              </p>
              {"current" in item && item.current ? (
                <p className="mt-4 text-sm font-semibold text-pms-navy">
                  Current page
                </p>
              ) : (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  Learn more about {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
