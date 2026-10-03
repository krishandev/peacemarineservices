const comparisons = [
  {
    title: "Pre-PSC Inspection",
    text: "A preparatory assessment carried out to identify potential areas requiring attention before an applicable PSC inspection.",
    note: "This is a PMS inspection support service. It is not an official Port State Control inspection.",
  },
  {
    title: "Official Port State Control Inspection",
    text: "An inspection conducted by the relevant Port State authority or authorized officials.",
    note: "Outcomes, deficiencies and any enforcement action rest with the relevant authority, not with PMS.",
  },
] as const;

export default function PrePscCompare() {
  return (
    <section
      aria-labelledby="pre-psc-compare-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="pre-psc-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Pre-PSC Inspection vs Official PSC Inspection
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS provides preparatory inspection support. PMS is not a Port State
          Control authority and does not perform official PSC inspections.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {comparisons.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 flex-col border border-pms-line bg-pms-wash p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">{item.text}</p>
              <p className="mt-4 text-sm leading-6 font-medium text-pms-navy">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
