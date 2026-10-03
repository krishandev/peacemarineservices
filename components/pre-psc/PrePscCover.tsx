const groups = [
  {
    title: "Vessel Condition",
    items: [
      "Observable hull, deck and space condition, where accessible",
      "Visible deficiencies",
      "Within the agreed inspection scope",
    ],
  },
  {
    title: "Safety Equipment",
    items: [
      "Relevant safety equipment, where included",
      "Condition and readiness observations",
      "Related records where available",
    ],
  },
  {
    title: "Fire Safety",
    items: [
      "Fire-fighting equipment, where accessible",
      "Visible fire safety arrangements",
      "Related documentation where provided",
    ],
  },
  {
    title: "Lifesaving Equipment",
    items: [
      "Life-saving appliances, where included",
      "Visible condition and stowage",
      "Related records where available",
    ],
  },
  {
    title: "Navigation & Communication Equipment",
    items: [
      "Navigation equipment, where accessible",
      "Communication equipment",
      "Bridge or wheelhouse observations",
    ],
  },
  {
    title: "Machinery & Technical Systems",
    items: [
      "Main and auxiliary machinery, where accessible",
      "Visible technical arrangements",
      "Maintenance-related observations",
    ],
  },
  {
    title: "Emergency Preparedness",
    items: [
      "Emergency equipment, where included",
      "Visible emergency arrangements",
      "Related procedures or records where available",
    ],
  },
  {
    title: "Documentation & Records",
    items: [
      "Available certificates",
      "Maintenance and inspection records where provided",
      "Other vessel-specific documents supplied for review",
    ],
  },
  {
    title: "Crew Familiarisation / Readiness",
    items: [
      "Familiarisation observations, where included",
      "Relevant drill or procedure records",
      "Within the agreed inspection scope",
    ],
  },
  {
    title: "Operational Readiness",
    items: [
      "Practical operational observations",
      "Known operational concerns",
      "Where applicable and accessible",
    ],
  },
  {
    title: "Environmental Protection Equipment",
    items: [
      "Pollution-prevention equipment, where applicable",
      "Visible condition observations",
      "Related records where available",
    ],
  },
  {
    title: "General Housekeeping & Visible Deficiencies",
    items: [
      "Housekeeping observations",
      "Visible defects or deficiencies",
      "Access and working areas",
    ],
  },
] as const;

export default function PrePscCover() {
  return (
    <section
      aria-labelledby="pre-psc-cover-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="pre-psc-cover-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Pre-PSC Inspection Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Items below may be reviewed where applicable, where accessible and
          within the agreed inspection scope. Not every Pre-PSC inspection
          includes every item.
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
