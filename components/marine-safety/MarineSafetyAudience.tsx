const audiences = [
  "Vessel owners",
  "Vessel operators",
  "Ship managers",
  "Commercial vessel operators",
  "Maritime companies",
  "Vessel buyers",
  "Other maritime stakeholders",
] as const;

const situations = [
  "Before an official inspection",
  "Before taking over vessel operations",
  "After significant repairs or modifications",
  "When safety deficiencies have been identified",
  "Before purchasing a vessel",
  "During periodic internal safety reviews",
  "Before planned operations where a safety review is appropriate",
  "When vessel condition needs an independent assessment",
] as const;

export default function MarineSafetyAudience() {
  return (
    <>
      <section
        aria-labelledby="marine-safety-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="marine-safety-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who May Need a Marine Safety Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Marine safety inspection support may be relevant to a range of
            maritime parties. Suitability depends on the vessel, the inspection
            purpose and the agreed scope. No specific vessel type is always
            eligible.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="border border-pms-line bg-pms-wash px-4 py-3 text-sm font-medium text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the agreed service scope, inspection support may also
            be relevant to domestic commercial vessels and other vessel types.
            Eligibility is discussed against the assignment, not assumed.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="marine-safety-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="marine-safety-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Is a Marine Safety Inspection Useful?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A marine safety inspection may be useful in the situations below,
            depending on the circumstances. A PMS inspection is not legally
            required in all of these cases.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pms-blue"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
