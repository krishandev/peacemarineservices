const documents = [
  "Bunker Delivery Note (BDN)",
  "Fuel quantity information",
  "Fuel grade or specification information",
  "Delivery date and time",
  "Delivery location",
  "Supplier information",
  "Sample information",
  "Relevant statements or remarks",
] as const;

const operations = [
  "Commencement of transfer",
  "Transfer process",
  "Sampling activities",
  "Measurements",
  "Completion of transfer",
  "Documentation",
  "Apparent operational irregularities",
] as const;

export default function BunkerDocs() {
  return (
    <>
      <section
        aria-labelledby="bunker-bdn-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-bdn-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Delivery Note & Documentation Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Relevant bunker documentation may include the records below.
            Document review is based on the information provided and the agreed
            survey scope. PMS does not provide legal interpretation of contracts
            or BDN terms as part of a standard bunker survey.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((item) => (
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
        aria-labelledby="bunker-ops-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-ops-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunkering Operation Observation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The surveyor may observe relevant aspects of the bunkering operation
            within the agreed scope. The surveyor does not control the bunkering
            operation and is not responsible for vessel, terminal, supplier or
            crew operational decisions.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {operations.map((item) => (
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
