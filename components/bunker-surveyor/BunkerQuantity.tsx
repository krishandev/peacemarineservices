const quantityItems = [
  "Reviewing delivery information",
  "Observing measurement procedures",
  "Recording vessel tank information",
  "Documenting relevant measurements",
  "Reviewing bunker delivery documentation",
  "Documenting apparent quantity discrepancies",
] as const;

const samplingItems = [
  "Sampling process observation",
  "Sample identification",
  "Sample sealing",
  "Sample labelling",
  "Sample documentation",
  "Custody or handling records where applicable",
] as const;

export default function BunkerQuantity() {
  return (
    <>
      <section
        aria-labelledby="bunker-quantity-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-quantity-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Quantity Survey
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A bunker survey may include quantity-related measurements or
            observations associated with fuel delivery, depending on the agreed
            scope and circumstances. Quantity cannot be guaranteed where the
            required information or access is unavailable.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quantityItems.map((item) => (
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
        aria-labelledby="bunker-sampling-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-sampling-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Fuel Sampling & Sample Documentation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunker survey support may include observation and documentation of
            fuel sampling procedures where included in the survey scope. PMS
            does not perform laboratory fuel analysis. If laboratory analysis is
            required, samples may be submitted to an appropriate laboratory
            according to the relevant instructions or contractual requirements.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {samplingItems.map((item) => (
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
