const steps = [
  {
    number: "01",
    title: "Discuss the Vessel & Inspection Scope",
    description:
      "Review vessel type, operation, location and the intended vetting or inspection objective.",
  },
  {
    number: "02",
    title: "Review Relevant Documents",
    description:
      "Examine available certificates, records and previous findings within the agreed scope.",
  },
  {
    number: "03",
    title: "Conduct the Vessel Inspection",
    description:
      "Inspect the agreed areas and record observable conditions on board.",
  },
  {
    number: "04",
    title: "Record Observations & Deficiencies",
    description:
      "Document findings, supporting evidence and areas requiring attention.",
  },
  {
    number: "05",
    title: "Provide the Inspection Report",
    description:
      "Issue a structured report with observations and practical recommendations. Follow-up or corrective-action review can be discussed where requested.",
  },
] as const;

const coverItems = [
  "Vessel condition",
  "Safety equipment",
  "Fire safety",
  "Life-saving equipment",
  "Navigation",
  "Communication systems",
  "Machinery",
  "Deck equipment",
  "Cargo operations",
  "Emergency preparedness",
  "Crew readiness",
  "Documentation",
  "Maintenance",
  "Environmental protection",
  "Housekeeping",
  "Previous deficiencies",
  "Corrective actions",
] as const;

export default function SafetyVettingProcess() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-process-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety Vetting Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical inspection pathway. Timing depends
            on the vessel, location, access and agreed scope.
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
        aria-labelledby="safety-vetting-cover-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-cover-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What the Inspection May Cover
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The exact inspection scope depends on the vessel, operation, client
            requirements and applicable vetting or inspection framework.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coverItems.map((item) => (
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
