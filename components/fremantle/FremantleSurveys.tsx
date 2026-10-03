import Link from "next/link";

const cargoItems = [
  "Cargo condition inspection",
  "Loading and discharge observation",
  "Cargo damage inspection",
  "Quantity or measurement assessment, where applicable",
  "Cargo documentation",
  "Photographic records",
  "Exception and damage reporting",
  "Stowage and securing observations, where applicable",
] as const;

const bunkerItems = [
  "Bunker quantity survey",
  "Bunker Delivery Note and document review",
  "Sampling documentation",
  "Bunkering and transfer observation",
  "Quantity discrepancies",
  "Statements of facts or exceptions, where applicable",
  "Photographic records",
] as const;

const technicalItems = [
  "Machinery",
  "Engine room",
  "Pumps",
  "Valves",
  "Piping",
  "Mechanical systems",
  "Electrical systems",
  "Marine equipment",
  "Deck machinery",
  "Repairs and modifications",
  "Maintenance observations",
  "Technical documentation",
] as const;

export default function FremantleSurveys() {
  return (
    <>
      <section
        aria-labelledby="fremantle-cargo-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-cargo-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Surveyor Services in Fremantle
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo work is a common reason to request a surveyor while a vessel
            is in Fremantle. Survey work records observed condition, handling
            and related documentation within the agreed scope. Survey findings
            do not determine legal liability. See{" "}
            <Link
              href="/cargo-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              cargo surveyor services
            </Link>{" "}
            for more detail.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cargoItems.map((item) => (
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
        aria-labelledby="fremantle-bunker-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-bunker-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Surveyor Services in Fremantle
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunker surveying records quantity, documentation and related
            observations during fuel delivery or transfer. It is not laboratory
            fuel testing, and PMS does not claim to perform laboratory fuel
            analysis as part of this service. See{" "}
            <Link
              href="/bunker-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              bunker surveyor services
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bunkerItems.map((item) => (
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

      <section
        aria-labelledby="fremantle-technical-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-technical-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Marine Inspection & Engineering Consultancy in Fremantle
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection and consultancy may include the areas below,
            where accessible and within the agreed scope, including machinery
            observations while a vessel is alongside. This page does not claim
            professional engineering registration or statutory engineering
            approval. See{" "}
            <Link
              href="/technical-inspection-and-marine-engineering-consultancy/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              technical inspection and marine engineering consultancy
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technicalItems.map((item) => (
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
    </>
  );
}
