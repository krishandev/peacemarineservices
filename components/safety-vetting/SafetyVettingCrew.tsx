import Link from "next/link";

const crewItems = [
  "Crew familiarisation",
  "Safety procedures",
  "Emergency preparedness",
  "Operational awareness",
  "Drills and records",
  "Training documentation",
  "Relevant onboard procedures",
] as const;

const envItems = [
  "Pollution prevention procedures",
  "Waste management",
  "Oil pollution prevention",
  "Relevant records",
  "Operational practices",
  "MARPOL-related considerations, where applicable",
] as const;

export default function SafetyVettingCrew() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-crew-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-crew-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Crew Competency & Operational Readiness
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the agreed scope, the inspection may consider practical
            readiness relating to the areas below. PMS does not certify crew
            competency. Related management-system work may be discussed through{" "}
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
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="safety-vetting-env-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-env-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Environmental & Pollution Prevention Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Applicable environmental requirements may include MARPOL
            requirements, depending on vessel type and operational scope. PMS is
            not a regulator or enforcement authority.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {envItems.map((item) => (
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
