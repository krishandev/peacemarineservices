const values = [
  {
    title: "Safety & Sustainability",
    description:
      "Work is planned with safe working practices in mind and with regard to responsible marine operations.",
  },
  {
    title: "Integrity & Credibility",
    description:
      "Findings and communication are intended to be honest, fair and professionally presented.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Processes are reviewed over time so inspection and reporting methods stay practical and useful.",
  },
  {
    title: "Client-Focused Approach",
    description:
      "Where practical, work is arranged around vessel operations, port calls and commercial timing.",
  },
] as const;

export default function OurValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="values-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Our Values
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-[15px]">
          These principles guide how PMS Peace Marine Services approaches
          marine surveying, inspection and audit work.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <li
              key={item.title}
              className="border border-white/15 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-pms-cyan">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
