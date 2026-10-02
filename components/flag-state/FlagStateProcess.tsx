const steps = [
  {
    number: "01",
    title: "Initial Review",
    description:
      "Discuss vessel details, flag State, location and inspection requirement.",
  },
  {
    number: "02",
    title: "Scope & Preparation",
    description:
      "Review the intended inspection scope and available vessel information. PMS support at this stage is independent of the flag administration.",
  },
  {
    number: "03",
    title: "Inspection",
    description:
      "The relevant Flag State authority or authorised party conducts the applicable inspection. PMS does not perform the official Flag State inspection unless a specific authorised function is verified for that assignment.",
  },
  {
    number: "04",
    title: "Findings & Follow-Up",
    description:
      "Findings or deficiencies are documented by the responsible authority, with corrective action handled according to the applicable requirements.",
  },
] as const;

export default function FlagStateProcess() {
  return (
    <section
      aria-labelledby="flag-state-process-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="flag-state-process-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Typical Flag State Inspection Process
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The steps below outline a typical pathway. Official inspection
          decisions rest with the flag administration or an authorised party.
          PMS support is separate from that authority.
        </p>
        <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
  );
}
