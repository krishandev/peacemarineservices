const steps = [
  {
    number: "01",
    title: "Discuss the Requirement",
    description:
      "Discuss the vessel, location, buyer concerns and the purpose of the inspection.",
  },
  {
    number: "02",
    title: "Define the Inspection Scope",
    description:
      "Agree the inspection scope against the vessel, access, documentation and areas of concern.",
  },
  {
    number: "03",
    title: "Coordinate Vessel Access",
    description:
      "Confirm practical arrangements for attendance, including location, timing and onboard access.",
  },
  {
    number: "04",
    title: "Conduct the Inspection",
    description:
      "Inspect accessible areas and systems within the agreed scope and record relevant observations.",
  },
  {
    number: "05",
    title: "Prepare the Inspection Report",
    description:
      "Document findings based on the agreed scope and the conditions accessible at the time of inspection.",
  },
] as const;

const reportItems = [
  "General vessel condition",
  "Observable defects",
  "Technical observations",
  "Machinery observations",
  "Safety-related observations",
  "Maintenance concerns",
  "Areas requiring further investigation",
  "Photographs where appropriate",
  "Documentation observations where applicable",
] as const;

export default function PrePurchaseProcess() {
  return (
    <>
      <section
        aria-labelledby="pre-purchase-process-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical inspection pathway. Timing depends
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
        aria-labelledby="pre-purchase-report-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Can the Inspection Report Tell You?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The report is based on the agreed scope and the conditions
            accessible at the time of inspection. Depending on that scope, the
            report may document:
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
