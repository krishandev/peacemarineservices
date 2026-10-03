const groups = [
  {
    title: "Bunker Quantity",
    items: [
      "Quantity-related observations, where applicable",
      "Measurement records within the agreed method",
      "Subject to available information and survey instructions",
    ],
  },
  {
    title: "Fuel Sampling",
    items: [
      "Sampling observation, where included in the agreed scope",
      "Identification and labelling notes",
      "Not the same as laboratory analysis",
    ],
  },
  {
    title: "Bunker Delivery Documentation",
    items: [
      "Review of documents supplied for the assignment",
      "Bunker Delivery Note observations, where provided",
      "Records of documents sighted",
    ],
  },
  {
    title: "Bunker Transfer Observation",
    items: [
      "Attendance during transfer, where instructed",
      "Operational observations within the agreed scope",
      "Exceptions recorded as they arise",
    ],
  },
  {
    title: "Fuel Grade / Specification Information",
    items: [
      "Grade or specification information as documented",
      "Information supplied by the parties",
      "Subject to the documents provided",
    ],
  },
  {
    title: "Sampling Records",
    items: [
      "Sampling records, where applicable",
      "Notes of the procedure observed",
      "Within the agreed survey scope",
    ],
  },
  {
    title: "Sealing / Sample Identification",
    items: [
      "Seal and identification notes, where included",
      "Labelling observations",
      "Custody or handling records where applicable",
    ],
  },
  {
    title: "Bunker Delivery Note Review",
    items: [
      "BDN review based on the document provided",
      "Quantity, grade and delivery details as recorded",
      "No legal interpretation of BDN terms",
    ],
  },
  {
    title: "Apparent Shortage / Discrepancy Documentation",
    items: [
      "Apparent discrepancy notes, where present",
      "Supporting measurements and records",
      "Factual documentation, not a liability finding",
    ],
  },
  {
    title: "Bunkering Operation Records",
    items: [
      "Timing and operation notes, where accessible",
      "Relevant operational observations",
      "Subject to survey instructions",
    ],
  },
  {
    title: "Photographic Records",
    items: [
      "Photographs of relevant operations",
      "Images of equipment, samples or documents where appropriate",
      "Within the agreed survey scope",
    ],
  },
  {
    title: "Statement / Exception Documentation",
    items: [
      "Statements or remarks from relevant parties",
      "Exceptions recorded during attendance",
      "Limited to observations within the agreed scope",
    ],
  },
] as const;

export default function BunkerCover() {
  return (
    <section
      aria-labelledby="bunker-cover-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="bunker-cover-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Bunker Survey Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Items below may be included where applicable, where accessible and
          where they form part of the agreed scope, subject to available
          information and survey instructions. Not every bunker survey includes
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
