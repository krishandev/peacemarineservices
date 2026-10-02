const points = [
  {
    title: "Professional inspection and survey support",
    text: "Marine surveying, inspection, auditing and consultancy are delivered against an agreed scope.",
  },
  {
    title: "Practical reporting",
    text: "Findings are documented so you have a usable record of the work completed.",
  },
  {
    title: "Compliance-focused approach",
    text: "Services can support operators in addressing applicable inspection and compliance requirements.",
  },
  {
    title: "Clear communication",
    text: "Scope, timing and findings are discussed in straightforward terms.",
  },
  {
    title: "Responsive service",
    text: "Enquiries can be made by phone or through the contact form when an inspection or survey is needed.",
  },
  {
    title: "Western Australian coverage",
    text: "Work can be arranged across relevant Western Australian ports and locations, depending on the vessel and assignment.",
  },
] as const;

export default function WhyWorkWithPms() {
  return (
    <section
      aria-labelledby="why-pms-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Why PMS
        </p>
        <h2
          id="why-pms-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Work With PMS Peace Marine Services?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These points describe how PMS approaches marine surveying and
          inspection work. They are not rankings or awards.
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
