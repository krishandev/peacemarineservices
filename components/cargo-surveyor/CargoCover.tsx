const groups = [
  {
    title: "Cargo Condition",
    items: [
      "Observable condition of accessible cargo",
      "Visible irregularities, where present",
      "Condition notes within the agreed scope",
    ],
  },
  {
    title: "Loading Inspection",
    items: [
      "Attendance during loading, where instructed",
      "Handling observations",
      "Exceptions recorded as they arise",
    ],
  },
  {
    title: "Discharge Inspection",
    items: [
      "Attendance during discharge, where instructed",
      "Condition on outturn, where accessible",
      "Handling and transfer observations",
    ],
  },
  {
    title: "Quantity / Measurement Observations",
    items: [
      "Quantity-related observations where applicable",
      "Measurement records within the agreed method",
      "Subject to available information and survey instructions",
    ],
  },
  {
    title: "Packaging and Handling",
    items: [
      "Packaging condition, where accessible",
      "Handling practices observed at attendance",
      "Marks, labels and identification where relevant",
    ],
  },
  {
    title: "Cargo Damage",
    items: [
      "Visible damage documentation",
      "Apparent extent and location",
      "Photographs where appropriate",
    ],
  },
  {
    title: "Stowage and Securing",
    items: [
      "Stowage observations, where accessible",
      "Securing arrangements where included in scope",
      "Related exceptions",
    ],
  },
  {
    title: "Hold / Cargo Space Condition",
    items: [
      "Accessible hold or cargo-space observations",
      "Cleanliness and apparent fitness notes where relevant",
      "Subject to access at the time of attendance",
    ],
  },
  {
    title: "Draft / Ullage / Quantity-Related Observations",
    items: [
      "Draft survey where applicable and agreed",
      "Ullage-related measurements where applicable",
      "Not included unless the survey instructions require it",
    ],
  },
  {
    title: "Cargo Documentation",
    items: [
      "Review of documents supplied for the assignment",
      "Records of documents sighted",
      "No legal interpretation of contracts unless separately instructed",
    ],
  },
  {
    title: "Photographic Records",
    items: [
      "Photographs of relevant cargo and operations",
      "Images of damage or exceptions where present",
      "Within the agreed survey scope",
    ],
  },
  {
    title: "Damage / Exception Reporting",
    items: [
      "Record of exceptions noted during attendance",
      "Supporting notes and photographs",
      "Limited to observations within the agreed scope",
    ],
  },
] as const;

export default function CargoCover() {
  return (
    <section
      aria-labelledby="cargo-cover-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="cargo-cover-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Cargo Survey Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Items below may be included where applicable, where accessible and
          where they form part of the agreed scope, subject to available
          information and survey instructions. Not every cargo survey includes
          every item.
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
