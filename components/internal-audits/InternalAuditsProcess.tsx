const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description:
      "Understand the company, vessel, audit purpose and required scope.",
  },
  {
    number: "02",
    title: "Audit Planning",
    description:
      "Agree the audit scope, schedule and relevant documentation.",
  },
  {
    number: "03",
    title: "Onboard / Company Audit",
    description:
      "Review relevant procedures, records, implementation and evidence within the agreed scope.",
  },
  {
    number: "04",
    title: "Findings & Reporting",
    description:
      "Document relevant findings, observations or non-conformities and provide a clear audit report.",
  },
  {
    number: "05",
    title: "Corrective Action Follow-Up",
    description:
      "Where agreed, support review of corrective actions and closure evidence.",
  },
] as const;

const findingTypes = [
  "Non-conformities",
  "Observations",
  "Areas requiring improvement",
  "Documentation gaps",
  "Implementation gaps",
] as const;

const reportItems = [
  "Audit scope",
  "Audit criteria",
  "Areas reviewed",
  "Evidence reviewed",
  "Findings",
  "Observations",
  "Non-conformities",
  "Corrective action considerations",
  "Recommendations",
  "Follow-up requirements",
] as const;

const followUp = [
  "Investigate root causes",
  "Define corrective actions",
  "Assign responsibility",
  "Set target dates",
  "Maintain evidence",
  "Verify closure",
] as const;

export default function InternalAuditsProcess() {
  return (
    <>
      <section
        aria-labelledby="internal-audits-process-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Our Internal Audit Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical internal audit pathway. PMS does
            not guarantee that an audit will produce zero findings and does not
            promise certification after the audit.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step) => (
              <li
                key={step.number}
                className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
              >
                <p className="text-sm font-semibold tracking-[0.14em] text-pms-blue">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-pms-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-pms-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="internal-audits-findings-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-findings-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Audit Findings, Observations and Non-Conformities
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Possible findings can include the categories below. Findings should
            be evaluated against the applicable audit criteria and agreed
            scope. PMS does not use a proprietary scoring system, and findings
            are not automatically accepted by an external authority.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {findingTypes.map((item) => (
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
        aria-labelledby="internal-audits-reporting-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-reporting-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Clear Internal Audit Reporting
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS aims to provide clear written audit reports. Depending on the
            audit scope, reports may include the items below. A report is not
            an official statutory certificate.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
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
        aria-labelledby="internal-audits-followup-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-followup-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Corrective Action and Follow-Up
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            After an internal audit, the company may need to take the steps
            below. PMS may provide follow-up support where included in the
            agreed scope. PMS cannot independently close findings belonging to
            an external authority.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {followUp.map((item) => (
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
