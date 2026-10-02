const prepAreas = [
  "Safety equipment",
  "Vessel condition",
  "Documentation",
  "Maintenance records",
  "Operational procedures",
  "Visible deficiencies",
  "Relevant technical systems",
] as const;

const reporting = [
  "Inspection observations",
  "Identified deficiencies",
  "Documentation observations",
  "Areas requiring attention",
  "Recommendations or corrective considerations",
] as const;

export default function AmsaDcvRequirements() {
  return (
    <>
      <section
        aria-labelledby="amsa-dcv-requirements-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-requirements-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            DCV Surveys and Australian Maritime Requirements
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              DCV survey requirements are governed by applicable Australian
              maritime legislation, standards and requirements. The instruments
              that apply depend on the vessel, operation and survey purpose.
            </p>
            <p>
              Depending on the vessel and assignment, relevant context may
              include the Australian Maritime Safety Authority (AMSA), the
              Marine Safety (Domestic Commercial Vessel) National Law, and the
              National Standard for Commercial Vessels (NSCV).
            </p>
            <p>
              PMS is not a government agency and does not replace AMSA. PMS
              does not guarantee compliance with AMSA requirements or the
              issue of a Certificate of Survey.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="amsa-dcv-amsa-prep-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-amsa-prep-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing Your DCV for an AMSA Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An independent pre-inspection review may help identify potential
            issues before an official inspection and can support preparation. It
            does not guarantee AMSA approval, a pass outcome or the elimination
            of deficiencies.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {prepAreas.map((item) => (
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
        aria-labelledby="amsa-dcv-reporting-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-reporting-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Clear Marine Survey Reporting
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS aims to provide practical, understandable reporting based on the
            agreed inspection scope. The report is not an official AMSA
            certificate unless that is specifically what is being issued for
            the assignment.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the agreed scope, reporting may include:
          </p>
          <ul className="mt-4 max-w-xl list-disc space-y-1.5 pl-5 text-sm leading-6 text-pms-muted">
            {reporting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
