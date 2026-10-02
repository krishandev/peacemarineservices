const comparisons = [
  {
    title: "Pre-AMSA Inspection",
    text: "A preparatory service intended to help identify potential issues before an applicable official inspection or survey.",
    note: "This is a PMS inspection support service. It is not an official AMSA function.",
  },
  {
    title: "Official AMSA Inspection or Survey",
    text: "An inspection, survey or regulatory activity carried out by the relevant authority or authorized party under applicable requirements.",
    note: "Outcomes, certificates and decisions rest with the relevant authority or authorized party, not with PMS.",
  },
] as const;

export default function PreAmsaCompare() {
  return (
    <section
      aria-labelledby="pre-amsa-compare-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="pre-amsa-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Pre-AMSA Inspection vs Official AMSA Inspection
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS provides preparatory inspection support. PMS is not AMSA, a
          government authority or an official substitute for AMSA inspection or
          survey functions.
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
