const steps = [
  {
    number: "01",
    title: "Understand the Survey Requirement",
    description:
      "Review cargo type, vessel, port, operation and survey instructions.",
  },
  {
    number: "02",
    title: "Define the Survey Scope",
    description:
      "Confirm the observations, measurements, documentation and reporting requirements.",
  },
  {
    number: "03",
    title: "Attend the Relevant Operation",
    description:
      "Attend the vessel, terminal, cargo location or other agreed location as required.",
  },
  {
    number: "04",
    title: "Record Observations",
    description:
      "Document relevant cargo condition, handling, quantity-related observations, damage or exceptions within the agreed scope.",
  },
  {
    number: "05",
    title: "Prepare the Survey Report",
    description:
      "Provide a structured report with observations, photographs and supporting information where applicable.",
  },
] as const;

const reportItems = [
  "Survey date and location",
  "Vessel and cargo details",
  "Survey instructions",
  "Scope of attendance",
  "Cargo observations",
  "Condition observations",
  "Quantity-related observations where applicable",
  "Damage or exception details",
  "Photographs",
  "Relevant documents reviewed",
  "Statements or information provided by relevant parties where appropriate",
  "Conclusions limited to the agreed scope",
] as const;

export default function CargoProcess() {
  return (
    <>
      <section
        aria-labelledby="cargo-process-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Survey Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical survey pathway. Timing depends on
            the cargo operation, location and access arrangements.
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
        aria-labelledby="cargo-report-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Cargo Survey Report Include?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The report should distinguish observed facts from information
            supplied by other parties. Depending on the agreed scope, a report
            may include:
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
