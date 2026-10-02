const findings = [
  "Observed deficiencies",
  "Safety concerns",
  "Documentation observations",
  "Areas requiring corrective action",
  "Recommendations for follow-up",
] as const;

export default function MarineSafetyReporting() {
  return (
    <>
      <section
        aria-labelledby="marine-safety-reporting-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="marine-safety-reporting-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Clear Inspection Findings and Reporting
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS aims to provide clear and practical inspection reporting. The
            report records observations against the agreed scope. It is not a
            statutory certificate unless that is specifically what is being
            issued, and it does not by itself guarantee compliance.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the agreed scope, reporting may identify:
          </p>
          <ul className="mt-4 max-w-xl list-disc space-y-1.5 pl-5 text-sm leading-6 text-pms-muted">
            {findings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="marine-safety-requirements-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="marine-safety-requirements-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspections and Applicable Requirements
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Marine safety requirements can involve Australian maritime
              regulations and relevant international maritime standards
              depending on vessel type, operation and inspection purpose.
            </p>
            <p>
              Depending on the vessel, operation and inspection scope, relevant
              requirements may include Australian maritime requirements and
              applicable international conventions such as SOLAS and MARPOL.
            </p>
            <p>
              Not every inspection covers every convention or requirement. PMS
              does not guarantee SOLAS or MARPOL compliance, and a PMS
              inspection does not replace an official AMSA or Flag State
              inspection.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="marine-safety-amsa-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="marine-safety-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspection Support Before AMSA or Other Inspections
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS can provide inspection support intended to help identify
              potential issues before an official inspection where appropriate.
            </p>
            <p>
              An independent pre-inspection assessment may help vessel operators
              identify areas requiring attention before an official inspection.
            </p>
            <p>
              PMS is not described here as an official AMSA representative. A
              marine safety inspection cannot guarantee AMSA approval,
              certificate issuance, an absence of deficiencies, a pass at an
              AMSA inspection, or the avoidance of detention.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
