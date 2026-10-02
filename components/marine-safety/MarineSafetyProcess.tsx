const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss the vessel, location, inspection purpose and required scope.",
  },
  {
    number: "02",
    title: "Inspection Planning",
    description:
      "Confirm the inspection scope, vessel information and practical arrangements.",
  },
  {
    number: "03",
    title: "On-Site Inspection",
    description:
      "Conduct the agreed inspection and document relevant observations.",
  },
  {
    number: "04",
    title: "Findings & Reporting",
    description:
      "Provide clear findings and practical recommendations based on the inspection scope.",
  },
] as const;

export default function MarineSafetyProcess() {
  return (
    <section
      aria-labelledby="marine-safety-process-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="marine-safety-process-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Our Marine Safety Inspection Process
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The steps below outline a typical inspection pathway. Timing and
          reporting format depend on the assignment and are confirmed when the
          work is planned.
        </p>
        <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
  );
}
