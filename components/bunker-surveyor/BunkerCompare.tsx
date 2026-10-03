const comparisons = [
  {
    title: "Bunker Survey",
    text: "Focuses on agreed observations, measurements, sampling and documentation during bunker operations.",
  },
  {
    title: "Fuel Laboratory Testing",
    text: "Analyses fuel samples using laboratory testing methods.",
  },
  {
    title: "Bunker Surveyor",
    text: "Documents observations and measurements within the agreed survey scope.",
  },
  {
    title: "Laboratory",
    text: "Performs specialist fuel analysis where testing is requested.",
  },
] as const;

export default function BunkerCompare() {
  return (
    <section
      aria-labelledby="bunker-compare-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="bunker-compare-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Bunker Survey vs Fuel Testing
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          A bunker survey does not automatically include laboratory analysis.
          Sampling observation and laboratory testing are separate activities
          unless testing is specifically arranged.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {comparisons.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 flex-col border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
