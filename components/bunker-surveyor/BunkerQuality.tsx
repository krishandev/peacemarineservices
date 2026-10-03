const qualityItems = [
  "Fuel grade",
  "Specification information",
  "Sample collection",
  "Sample identification",
  "Visible or apparent observations where relevant",
  "Documentation supplied by the parties",
] as const;

const discrepancyItems = [
  "Recording measurements",
  "Documenting apparent shortages",
  "Reviewing available documentation",
  "Photographs where appropriate",
  "Recording statements or comments from relevant parties",
  "Preparing an exception or survey report",
] as const;

export default function BunkerQuality() {
  return (
    <>
      <section
        aria-labelledby="bunker-quality-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-quality-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Fuel Quality & Specification-Related Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A bunker survey may document information relating to the items
            below. Survey observations are distinct from laboratory fuel
            analysis. A visual inspection cannot determine the complete chemical
            or technical quality of marine fuel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {qualityItems.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="bunker-discrepancy-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-discrepancy-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Quantity Discrepancy & Exception Documentation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunker survey support may help document apparent discrepancies
            between relevant delivery information, measurements and
            observations. Survey findings can provide factual documentation that
            may assist the relevant parties and their advisers when assessing a
            bunker-related discrepancy. PMS does not determine legal liability
            or decide which party is responsible for a shortage.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {discrepancyItems.map((item) => (
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
    </>
  );
}
