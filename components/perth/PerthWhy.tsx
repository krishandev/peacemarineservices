import Link from "next/link";

const cards = [
  {
    title: "Flag State Inspection Support",
    href: "/flag-state-inspection/",
    text: "Inspection support against the requirements of a vessel's flag administration, within an agreed scope. PMS is not a Flag State authority.",
  },
  {
    title: "Pre-Port State Control Inspection",
    href: "/pre-psc-inspection-in-australia/",
    text: "Preparatory assessment before an applicable Port State Control inspection. PMS is not a Port State Control authority and does not perform official PSC inspections.",
  },
  {
    title: "Safety Vetting / Pre-Vetting Inspection",
    href: "/safety-vetting-inspector-in-australia/",
    text: "Preparatory or commercial safety vetting support. PMS is not a vetting organisation and does not issue official vetting approvals or scores.",
  },
  {
    title: "Internal Audits for ISM, ISPS and MLC",
    href: "/internal-audits-for-ism-isps-and-mlc/",
    text: "Internal audits of safety, security and seafarer welfare management systems used on board and ashore, where those frameworks apply.",
  },
] as const;

export default function PerthWhy() {
  return (
    <>
      <section
        aria-labelledby="perth-related-support-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-related-support-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Flag State, Pre-PSC, Safety Vetting & Internal Audit Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Related inspection preparation and audit support can be discussed
            for vessels connected with Perth, depending on the vessel,
            operation and agreed scope.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {cards.map((item) => (
              <li
                key={item.href}
                className="flex min-w-0 flex-col border border-pms-line bg-pms-wash p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-pms-muted">
                  {item.text}
                </p>
                <p className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  >
                    {item.title}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="perth-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Choose PMS in Perth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS Peace Marine Services is based in the Perth metropolitan area
            and provides practical marine inspection, survey and consultancy
            support across Western Australia. The points below describe how the
            work is delivered. They are not performance statistics or
            accreditation claims.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Marine inspection and survey expertise",
              "Practical inspection approach",
              "Clear reporting",
              "Perth and Western Australia service coverage",
              "Multiple marine inspection disciplines",
              "Responsive communication",
              "Technical and compliance-focused support",
              "Client-focused inspection scope",
            ].map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
