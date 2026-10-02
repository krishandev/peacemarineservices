const steps = [
  {
    number: "01",
    title: "Initial Enquiry",
    description:
      "Discuss the vessel, operation, location and survey requirement.",
  },
  {
    number: "02",
    title: "Scope & Documentation",
    description:
      "Review available vessel information and establish the appropriate inspection or survey scope.",
  },
  {
    number: "03",
    title: "On-Site Survey",
    description:
      "Conduct the agreed inspection and assessment of relevant vessel areas, systems, equipment and documentation.",
  },
  {
    number: "04",
    title: "Findings & Reporting",
    description:
      "Document observations and provide clear findings based on the agreed scope.",
  },
  {
    number: "05",
    title: "Follow-Up",
    description:
      "Where appropriate, discuss identified issues and possible next steps.",
  },
] as const;

export default function AmsaDcvProcess() {
  return (
    <section
      aria-labelledby="amsa-dcv-process-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="amsa-dcv-process-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Our AMSA DCV Survey Process
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The steps below outline a typical survey pathway. Timing, attendance
          and reporting format depend on the assignment. PMS does not promise a
          specific turnaround or a successful survey outcome.
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
  );
}
