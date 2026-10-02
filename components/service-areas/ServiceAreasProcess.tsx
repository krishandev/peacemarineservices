const steps = [
  {
    number: "01",
    title: "Tell Us Your Location",
    text: "Provide the vessel or inspection location and the relevant port or marine area.",
  },
  {
    number: "02",
    title: "Tell Us What Service You Need",
    text: "Provide details about the survey, inspection, audit or consultancy requirement.",
  },
  {
    number: "03",
    title: "Discuss Inspection Requirements",
    text: "PMS can review the information provided and discuss the appropriate next steps.",
  },
] as const;

export default function ServiceAreasProcess() {
  return (
    <section
      aria-labelledby="service-areas-process-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="service-areas-process-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Requesting a Marine Inspection in Your Area
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Enquiries are reviewed against the vessel, location and the work
          requested. Availability depends on the assignment and is not
          guaranteed in advance.
        </p>
        <ol className="mt-8 grid list-none grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="border border-pms-line bg-pms-wash p-5 sm:p-6"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-pms-blue">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-pms-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
