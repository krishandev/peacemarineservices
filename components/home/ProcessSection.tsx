const steps = [
  {
    number: "01",
    title: "Discuss Your Requirement",
    description:
      "Tell us about the vessel, location, timing and the type of survey or inspection you need.",
  },
  {
    number: "02",
    title: "Plan the Inspection",
    description:
      "We confirm the scope, practical arrangements and any information needed before attendance.",
  },
  {
    number: "03",
    title: "Conduct the Survey or Inspection",
    description:
      "The survey or inspection is carried out against the agreed scope for the vessel and requirement.",
  },
  {
    number: "04",
    title: "Provide the Report / Findings",
    description:
      "Findings are documented so you have a clear record of the inspection or survey work completed.",
  },
] as const;

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Inspection Process
        </p>
        <h2
          id="process-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          How Our Marine Inspection Process Works
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The steps below outline a typical inspection pathway. The exact
          process depends on the vessel, location and the work required.
        </p>

        <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="border border-pms-line bg-white p-5 sm:p-6"
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
