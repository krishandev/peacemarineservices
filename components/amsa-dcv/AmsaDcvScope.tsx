const groups = [
  {
    title: "Vessel Structure & Condition",
    note: "Where included in the agreed inspection scope.",
    items: [
      "General vessel condition",
      "Hull and deck areas",
      "Structural observations within inspection scope",
      "Access and working areas",
    ],
  },
  {
    title: "Machinery & Engineering",
    note: "Where included in the agreed inspection scope.",
    items: [
      "Main and auxiliary machinery",
      "Engine room arrangements",
      "Mechanical systems",
      "Relevant technical equipment",
    ],
  },
  {
    title: "Electrical Systems",
    note: "Where applicable to the vessel and survey.",
    items: [
      "Electrical installations",
      "Relevant safety arrangements",
      "Electrical documentation where applicable",
    ],
  },
  {
    title: "Safety Equipment",
    note: "Where included in the agreed inspection scope.",
    items: [
      "Life-saving appliances",
      "Fire-fighting equipment",
      "Emergency equipment",
      "Safety arrangements",
    ],
  },
  {
    title: "Navigation & Communication",
    note: "Where relevant to the vessel and survey scope.",
    items: [
      "Navigation equipment",
      "Communication systems",
      "Required operational equipment",
    ],
  },
  {
    title: "Stability & Operational Documentation",
    note: "Where applicable to the survey purpose.",
    items: [
      "Stability information",
      "Operational documentation",
      "Safety management documentation",
    ],
  },
] as const;

export default function AmsaDcvScope() {
  return (
    <section
      aria-labelledby="amsa-dcv-scope-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="amsa-dcv-scope-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a DCV Marine Survey Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The inspection scope is determined by the vessel, survey purpose and
          applicable requirements. Not every survey checks every category below.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li
              key={group.title}
              className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {group.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-pms-muted">{group.note}</p>
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
