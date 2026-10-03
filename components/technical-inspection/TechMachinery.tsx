const machinery = [
  "Main engine",
  "Auxiliary engines",
  "Pumps",
  "Compressors",
  "Generators",
  "Valves",
  "Piping systems",
  "Steering systems",
  "Propulsion-related equipment",
  "Deck machinery",
  "Other vessel machinery",
] as const;

const repairs = [
  "Planned repairs",
  "Machinery replacement",
  "Equipment upgrades",
  "Vessel modifications",
  "Conversion-related technical assessment",
  "Maintenance planning",
  "Technical documentation",
  "Post-repair inspection",
] as const;

export default function TechMachinery() {
  return (
    <>
      <section
        aria-labelledby="tech-machinery-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-machinery-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Machinery & Engineering Systems
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Potential inspection areas include the systems below, where
            applicable and within the agreed scope. Performance testing is not
            included unless it is specifically agreed for the inspection.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {machinery.map((item) => (
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
        aria-labelledby="tech-repairs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-repairs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Support for Repairs & Vessel Modifications
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS may provide technical inspection or consultancy support relating
            to the work below. PMS cannot approve modifications on behalf of a
            classification society, flag State or government authority.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {repairs.map((item) => (
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
