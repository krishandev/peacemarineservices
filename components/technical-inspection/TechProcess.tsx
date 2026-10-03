const steps = [
  {
    number: "01",
    title: "Understand the Requirement",
    description:
      "Review the vessel, technical issue, location and objectives.",
  },
  {
    number: "02",
    title: "Define the Scope",
    description:
      "Confirm the systems, equipment, documents or engineering areas to be assessed.",
  },
  {
    number: "03",
    title: "Conduct the Inspection / Assessment",
    description:
      "Inspect the agreed areas and document relevant technical observations.",
  },
  {
    number: "04",
    title: "Technical Review",
    description:
      "Assess observations and identify areas requiring maintenance, repair, further investigation or specialist input.",
  },
  {
    number: "05",
    title: "Report & Recommendations",
    description:
      "Provide a structured report with observations and practical recommendations within the agreed scope.",
  },
] as const;

const reportItems = [
  "Vessel and inspection details",
  "Inspection scope",
  "Technical observations",
  "Machinery observations",
  "Equipment condition",
  "Visible defects",
  "Maintenance concerns",
  "Photographs",
  "Documents reviewed",
  "Areas requiring further investigation",
  "Recommendations where appropriate",
] as const;

export default function TechProcess() {
  return (
    <>
      <section
        aria-labelledby="tech-process-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical inspection or consultancy pathway.
            Timing depends on the vessel, location and access arrangements.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
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
        aria-labelledby="tech-report-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Technical Inspection Report Include?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Recommendations are based on the agreed scope and information
            available at the time. Depending on that scope, a report may
            include:
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
    </>
  );
}
