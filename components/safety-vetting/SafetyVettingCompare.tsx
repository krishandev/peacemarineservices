const comparisons = [
  {
    title: "Safety Vetting / Pre-Vetting Inspection",
    text: "Preparatory or commercial inspection support that identifies potential issues and may help improve readiness. Scope depends on client and vessel requirements.",
    note: "This is a PMS inspection support service. It is not an official government, Flag State, Port State Control or vetting-organisation inspection.",
  },
  {
    title: "Official Regulatory / External Inspection",
    text: "Conducted by the relevant authority, organisation, charterer, vetting body or other responsible party, using that party's own procedures and acceptance criteria.",
    note: "Final decisions belong to the responsible organisation. PMS does not have authority to conduct official Port State Control, Flag State or government inspections.",
  },
] as const;

export default function SafetyVettingCompare() {
  return (
    <section
      aria-labelledby="safety-vetting-compare-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="safety-vetting-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Safety Vetting vs Official Regulatory Inspection
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS provides preparatory and commercial inspection support. PMS is not
          a Port State Control authority, Flag State administration or
          government inspectorate.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {comparisons.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 flex-col border border-pms-line bg-white p-5 sm:p-6"
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
