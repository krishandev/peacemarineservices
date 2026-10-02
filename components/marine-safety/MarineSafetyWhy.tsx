const points = [
  {
    title: "Identify Safety Risks",
    text: "Inspections can help identify safety-related issues before they contribute to operational problems.",
  },
  {
    title: "Review Vessel Readiness",
    text: "A structured inspection can provide a clearer view of vessel condition and operational readiness within the agreed scope.",
  },
  {
    title: "Support Corrective Action",
    text: "Clear findings can help vessel operators understand areas requiring attention.",
  },
  {
    title: "Support Compliance Preparation",
    text: "Inspections can help operators identify potential gaps against applicable requirements.",
  },
  {
    title: "Improve Safety Awareness",
    text: "Regular reviews can support stronger safety practices and operational awareness.",
  },
  {
    title: "Reduce Avoidable Disruption",
    text: "Early identification of issues may help operators plan corrective work and may help reduce unexpected operational disruption.",
  },
] as const;

export default function MarineSafetyWhy() {
  return (
    <section
      aria-labelledby="marine-safety-why-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="marine-safety-why-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Marine Safety Inspections Matter
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          A marine safety inspection can support informed operational decisions.
          It does not guarantee that detentions, accidents or penalties will be
          prevented.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <li
              key={item.title}
              className="border border-pms-line bg-pms-wash p-5 sm:p-6"
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
