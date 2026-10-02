const points = [
  {
    title: "Practical inspection and survey support",
    text: "Work is planned against an agreed scope for the vessel, location and inspection requirement.",
  },
  {
    title: "Clear reporting",
    text: "Findings are documented so you have a usable record of the inspection or survey completed.",
  },
  {
    title: "Compliance-focused approach",
    text: "Services can support operators in addressing applicable inspection and compliance requirements.",
  },
  {
    title: "Safety-conscious inspection practices",
    text: "Onboard work is carried out with attention to safe working practices and vessel operations.",
  },
  {
    title: "Professional communication",
    text: "Scope, timing and findings are discussed in practical terms before and after attendance.",
  },
  {
    title: "Support across Australian ports",
    text: "Inspection and survey work can be arranged across relevant Western Australian ports and other Australian locations, depending on the assignment.",
  },
  {
    title: "Technical and operational understanding",
    text: "Inspection input is intended to be useful to owners, operators and other marine stakeholders making operational decisions.",
  },
] as const;

export default function ServicesApproach() {
  return (
    <section
      aria-labelledby="services-approach-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="services-approach-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Our Approach to Marine Services
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services aims to provide structured, documented
          marine inspection and survey work. The points below describe how
          assignments are typically approached.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <li
              key={item.title}
              className="border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
