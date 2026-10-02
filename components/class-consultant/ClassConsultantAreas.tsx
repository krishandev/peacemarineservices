const areas = [
  {
    title: "Machinery & Mechanical Systems",
    items: [
      "Main engines",
      "Auxiliary machinery",
      "Pumps",
      "Mechanical systems",
      "Machinery condition",
      "Maintenance-related concerns",
    ],
  },
  {
    title: "Fuels & Lubricants",
    items: [
      "Fuel-related issues",
      "Lubricants",
      "Machinery lubrication",
      "Fuel quality concerns",
      "Operational considerations",
    ],
  },
  {
    title: "Vessel Equipment",
    items: ["Relevant vessel equipment and technical systems within the agreed scope"],
  },
  {
    title: "Repairs & Modifications",
    items: [
      "Technical review or support relating to proposed repairs, alterations or modifications, subject to the relevant approval process",
    ],
  },
  {
    title: "Technical Documentation",
    items: ["Review or support involving relevant technical documents and records"],
  },
  {
    title: "Inspection & Survey Preparation",
    items: ["Preparation support before relevant technical inspections or surveys"],
  },
  {
    title: "Operational Reliability",
    items: [
      "Technical observations that may help operators understand reliability and maintenance considerations",
    ],
  },
  {
    title: "Regulatory & Technical Requirements",
    items: [
      "Support in understanding relevant technical requirements within the agreed consultancy scope",
    ],
  },
] as const;

export default function ClassConsultantAreas() {
  return (
    <section
      aria-labelledby="class-consultant-areas-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="class-consultant-areas-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Technical Consultancy Areas
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Potential support depends on the vessel and agreed scope. PMS does
          not itself provide statutory approval. Technical comments are based
          on the information available for that assignment and are not a
          substitute for vessel-specific engineering design.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((group) => (
            <li
              key={group.title}
              className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {group.title}
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-pms-muted">
                {group.items.map((item) => (
                  <li key={item} className="break-words">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
