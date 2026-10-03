import Link from "next/link";

const reasons = [
  "Early identification of deficiencies",
  "Safety and operational readiness",
  "Documentation readiness",
  "Crew familiarisation",
  "Equipment condition",
  "Maintenance and housekeeping observations",
  "Environmental and pollution-prevention practices",
  "Preparation for external vetting",
  "Better visibility of corrective actions",
] as const;

export default function SafetyVettingIntro() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-do-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-do-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Safety Vetting Inspector Do?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A safety vetting inspection is a structured assessment of a
              vessel&apos;s safety, operational readiness, equipment,
              documentation, crew readiness and other relevant areas against the
              applicable vetting scope or framework.
            </p>
            <p>
              PMS Peace Marine Services provides independent inspection support
              as part of its{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine surveying and inspection services
              </Link>
              . PMS does not act as a charterer, oil major, vetting
              organisation, Flag State, Port State Control authority,
              classification society or other official body, and does not issue
              official vetting approvals or certificates.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="safety-vetting-what-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Safety Vetting Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              In commercial shipping, safety vetting is a process used to review
              whether a vessel is suitable for a particular trade, charter or
              cargo interest. Owners and operators may undergo vetting because
              charterers, cargo interests or related organisations request an
              inspection against defined criteria before accepting a vessel.
            </p>
            <p>
              A pre-vetting inspection can help identify issues before that
              external inspection. Scope can vary by vessel type, operator,
              charterer, cargo and the applicable vetting framework. Related
              preparatory work may also include a{" "}
              <Link
                href="/marine-safety-inspection-in-australia/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine safety inspection
              </Link>{" "}
              or{" "}
              <Link
                href="/pre-psc-inspection-in-australia/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                Pre-PSC inspection
              </Link>
              , depending on the requirement.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="safety-vetting-why-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Safety Vetting Inspections Matter
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A safety vetting or pre-vetting inspection may help identify
            deficiencies before an external inspection or vetting assessment. It
            does not guarantee vetting approval, a passing result, a particular
            score, prevention of detention or absence of delays.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
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
