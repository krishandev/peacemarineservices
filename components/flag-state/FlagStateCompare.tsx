const comparisons = [
  {
    title: "Flag State Inspection",
    items: [
      {
        label: "Who conducts it",
        text: "Conducted by or on behalf of the vessel's flag administration.",
      },
      {
        label: "Primary purpose",
        text: "Focuses on the vessel's compliance with applicable flag State requirements.",
      },
      {
        label: "Scope",
        text: "Applies to vessels registered under that flag, with scope determined by the administration, vessel and applicable requirements.",
      },
    ],
  },
  {
    title: "Port State Control",
    items: [
      {
        label: "Who conducts it",
        text: "Conducted by authorities of a port State.",
      },
      {
        label: "Primary purpose",
        text: "Checks compliance with applicable international and national requirements for foreign ships calling at that State's ports.",
      },
      {
        label: "Scope",
        text: "Applies to foreign ships visiting that State's ports. It does not automatically replace a Flag State Inspection.",
      },
    ],
  },
] as const;

export default function FlagStateCompare() {
  return (
    <section
      aria-labelledby="flag-state-compare-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="flag-state-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Flag State Inspection vs Port State Control
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The two processes have different roles. One inspection does not
          automatically replace the other.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {comparisons.map((column) => (
            <article
              key={column.title}
              className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {column.title}
              </h3>
              <dl className="mt-4 space-y-4">
                {column.items.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <dt className="text-sm font-semibold text-pms-navy">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 break-words text-pms-muted">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
