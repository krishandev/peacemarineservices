const steps = [
  {
    number: "01",
    title: "Understand the Survey Requirement",
    description:
      "Review vessel, fuel, bunkering location and survey instructions.",
  },
  {
    number: "02",
    title: "Define the Survey Scope",
    description:
      "Confirm quantity, sampling, documentation and observation requirements.",
  },
  {
    number: "03",
    title: "Attend the Bunkering Operation",
    description:
      "Attend the vessel, bunkering location or other agreed location.",
  },
  {
    number: "04",
    title: "Record Measurements & Observations",
    description:
      "Document relevant quantity, sampling, documentation and operational observations within the agreed scope.",
  },
  {
    number: "05",
    title: "Prepare the Survey Report",
    description:
      "Provide a structured report containing relevant observations, records and photographs where applicable.",
  },
] as const;

const reportItems = [
  "Vessel details",
  "Survey date and location",
  "Bunker details",
  "Survey instructions",
  "Survey scope",
  "Quantity-related observations",
  "Sampling observations",
  "BDN and documentation observations",
  "Apparent discrepancies",
  "Photographs",
  "Sample or seal information where applicable",
  "Statements or remarks from relevant parties",
  "Exceptions recorded during the survey",
] as const;

export default function BunkerProcess() {
  return (
    <>
      <section
        aria-labelledby="bunker-process-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Survey Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical survey pathway. Timing depends on
            the bunkering operation, location and access arrangements.
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
        aria-labelledby="bunker-report-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Bunker Survey Report Include?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The report should distinguish observed facts, measurements,
            documents provided by parties and information reported by third
            parties. Depending on the agreed scope, a report may include:
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
