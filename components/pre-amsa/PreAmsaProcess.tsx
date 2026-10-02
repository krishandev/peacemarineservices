const steps = [
  {
    number: "01",
    title: "Understand the Vessel and Requirement",
    description:
      "Review vessel type, operation, location and inspection objective.",
  },
  {
    number: "02",
    title: "Define the Inspection Scope",
    description:
      "Identify the areas and systems that need to be reviewed against the agreed requirement.",
  },
  {
    number: "03",
    title: "Conduct the Pre-Inspection Assessment",
    description:
      "Inspect the agreed areas and document observable findings.",
  },
  {
    number: "04",
    title: "Identify Areas Requiring Attention",
    description:
      "Highlight deficiencies, maintenance concerns or documentation gaps that may require action.",
  },
  {
    number: "05",
    title: "Report & Follow-Up",
    description:
      "Provide findings and practical recommendations for further action where appropriate.",
  },
] as const;

const reportItems = [
  "Inspection scope",
  "Vessel details",
  "Observations",
  "Identified deficiencies",
  "Safety-related observations",
  "Technical observations",
  "Documentation observations",
  "Photographs where appropriate",
  "Areas requiring corrective action",
  "Recommendations for further investigation where required",
] as const;

export default function PreAmsaProcess() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-process-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical preparatory pathway. Timing depends
            on the vessel, location and access arrangements.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        aria-labelledby="pre-amsa-report-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does the Pre-AMSA Inspection Report Include?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The report reflects the agreed inspection scope and the conditions
            observed at the time. Depending on that scope, the report may
            include:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
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
