import Link from "next/link";

const situations = [
  "Commercial and operational vessels calling at or based around Albany",
  "Vessel condition inspections before a voyage, sale or repair period",
  "Safety and compliance checks for regional harbour operations",
  "Preparation before a regulatory or external inspection",
  "Pre-purchase assessment of a vessel in southern Western Australia",
  "Cargo or bunker survey support where those operations apply",
  "Machinery and technical condition observations",
  "Documentation and compliance readiness",
  "Repairs, modifications or changes to vessel systems",
  "Audit preparation and corrective-action follow-up",
] as const;

export default function AlbanyIntro() {
  return (
    <>
      <section
        aria-labelledby="albany-answer-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-answer-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Need a marine surveyor or marine inspection service in Albany?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS Peace Marine Services can discuss marine safety inspections,
              Domestic Commercial Vessel survey support, pre-AMSA inspection
              preparation, pre-purchase vessel inspections, cargo surveying,
              bunker surveying, technical marine inspections, marine engineering
              consultancy, Flag State inspection preparation, pre-PSC inspection
              preparation, safety vetting or pre-vetting support, and ISM, ISPS
              and MLC internal audits, depending on vessel type, inspection
              scope and client requirements.
            </p>
            <p>
              PMS provides inspection, consultancy and preparation support. It
              is not AMSA, a Port State Control authority, a Flag State
              authority, a classification society, a charterer or a vetting
              organisation, and does not control those parties&apos; decisions.
              Official regulatory outcomes remain with the relevant competent
              authority. Company background is available on{" "}
              <Link
                href="/about-us/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                About PMS Peace Marine Services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="albany-context-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Support in Albany, Western Australia
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Albany is a regional commercial port on Western Australia&apos;s
            south coast. Inspection requests often relate to visiting commercial
            ships, regional domestic vessels, documentation readiness and
            practical condition checks that can be completed while a vessel is
            alongside. PMS does not operate a physical office in Albany. Work is
            arranged around the vessel, berth access and the agreed inspection
            requirement. A full list of{" "}
            <Link
              href="/our-services/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveying and inspection services
            </Link>{" "}
            is available on the services page.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
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
