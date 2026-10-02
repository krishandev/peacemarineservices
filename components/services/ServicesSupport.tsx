const areas = [
  {
    title: "Marine inspections",
    text: "Inspection of safety arrangements, equipment, procedures and related items against an agreed scope.",
  },
  {
    title: "Marine surveys",
    text: "Independent survey work to assess vessel condition, systems and supporting documentation.",
  },
  {
    title: "Compliance support",
    text: "Practical inspection and survey input that can support operators in addressing applicable requirements.",
  },
  {
    title: "Marine auditing",
    text: "Internal audits of ISM, ISPS and MLC management systems used on board and ashore.",
  },
  {
    title: "Technical inspection",
    text: "Inspection of vessel systems and marine equipment where technical assessment is required.",
  },
  {
    title: "Cargo surveying",
    text: "Cargo survey work covering loading, discharge, condition and quantity where required.",
  },
  {
    title: "Bunker surveying",
    text: "Measurement and verification of bunker quantity during delivery or transfer.",
  },
  {
    title: "Safety vetting",
    text: "Safety vetting inspection of vessels against charterer or operator inspection criteria.",
  },
  {
    title: "Marine engineering consultancy",
    text: "Technical inspection and engineering advice for vessel systems and marine operations.",
  },
] as const;

export default function ServicesSupport() {
  return (
    <section
      aria-labelledby="services-support-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="services-support-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Inspection &amp; Consultancy Support
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These areas describe how the approved service list can be used. They
          are not additional standalone service pages.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((item) => (
            <li
              key={item.title}
              className="border border-pms-line bg-pms-wash p-5 sm:p-6"
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
