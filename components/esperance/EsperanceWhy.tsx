const whyItems = [
  "Compliance-focused inspection approach",
  "Practical marine inspection support",
  "Clear reporting",
  "Identification of findings and observations",
  "Support across multiple inspection requirements",
  "Technical and operational perspective",
  "Western Australia service coverage",
  "Focus on safety, documentation and inspection readiness",
] as const;

export default function EsperanceWhy() {
  return (
    <section
      aria-labelledby="esperance-why-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="esperance-why-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Work with PMS Peace Marine Services in Esperance?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Inspection work in Esperance often needs a practical approach that
          can cover a cargo-related port call, regional domestic vessels,
          documentation readiness and technical observations within an agreed
          scope. The points below describe how the work is delivered. They are
          not performance statistics, rankings or accreditation claims.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item) => (
            <li
              key={item}
              className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
