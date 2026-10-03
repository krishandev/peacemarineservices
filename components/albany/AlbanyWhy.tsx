const whyItems = [
  "Compliance-focused inspection approach",
  "Practical reporting",
  "Clear identification of findings",
  "Marine inspection and survey experience",
  "Support across multiple inspection requirements",
  "Flexible service coverage across Western Australia",
  "Focus on safety, documentation and operational readiness",
] as const;

export default function AlbanyWhy() {
  return (
    <section
      aria-labelledby="albany-why-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="albany-why-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Choose PMS Peace Marine Services for Albany
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Inspection work on the south coast often needs a practical approach
          that can cover visiting commercial ships, regional domestic vessels,
          documentation readiness and technical observations within an agreed
          scope. The points below describe how the work is delivered. They are
          not performance statistics, rankings or accreditation claims.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item) => (
            <li
              key={item}
              className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
