const whyItems = [
  "Compliance-focused inspection approach",
  "Practical marine inspection support",
  "Clear reporting",
  "Identification of findings and observations",
  "Technical inspection support",
  "Support across multiple inspection requirements",
  "Western Australia service coverage",
  "Focus on safety, documentation and inspection readiness",
] as const;

export default function KarrathaWhy() {
  return (
    <section
      aria-labelledby="karratha-why-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="karratha-why-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Work with PMS Peace Marine Services in Karratha?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Inspection work arranged from Karratha often needs a practical
          approach that can cover nearby industrial harbour operations, coastal
          support craft, documentation readiness and technical observations
          within an agreed scope. The points below describe how the work is
          delivered. They are not performance statistics, rankings or
          accreditation claims.
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
