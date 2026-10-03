import Link from "next/link";

const crewItems = [
  "Familiarity with safety procedures",
  "Emergency preparedness",
  "Drills",
  "Safety equipment awareness",
  "Operational procedures",
  "Relevant records",
] as const;

const frameworks = [
  "SOLAS, where applicable",
  "MARPOL, where applicable",
  "STCW, where applicable",
  "MLC 2006, where applicable",
  "Load Line Convention, where applicable",
] as const;

export default function PrePscCrew() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-crew-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-crew-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Crew Readiness & Familiarisation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where included in the agreed scope, PMS may review practical
            readiness relating to the areas below. PMS does not formally certify
            crew competence. Related management-system work may be discussed
            through{" "}
            <Link
              href="/internal-audits-for-ism-isps-and-mlc/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              ISM, ISPS and MLC internal audits
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {crewItems.map((item) => (
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

      <section
        aria-labelledby="pre-psc-context-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Understanding Port State Control
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Port State Control (PSC) involves inspection of foreign ships in
              ports by the relevant port State authorities. PSC focuses on
              applicable international and national requirements relating to
              vessel safety, security, pollution prevention, living and working
              conditions and other relevant areas.
            </p>
            <p>
              The exact inspection scope depends on the vessel, flag, port
              State, applicable conventions and circumstances. Frameworks that
              may be relevant, where applicable, include those listed below.
              This is not a universal checklist for every PSC inspection.
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
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
