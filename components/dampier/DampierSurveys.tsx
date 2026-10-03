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

export default function DampierSurveys() {
  return (
    <>
      <section
        aria-labelledby="dampier-cargo-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-cargo-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Surveyor Services in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Industrial cargo operations are a common reason to request a
            surveyor during a Dampier call. Survey work records observed
            condition, handling and related documentation within the agreed
            scope. Survey findings do not determine legal liability. See{" "}
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
        aria-labelledby="dampier-bunker-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-bunker-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Surveyor Services in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Fuel transfer can be relevant for visiting ships and for vessels
            supporting industrial marine activity around Dampier. Bunker
            surveying records quantity, documentation and related observations
            during fuel delivery or transfer. It is not laboratory fuel testing,
            and PMS does not claim to perform laboratory fuel analysis as part
            of this service. See{" "}
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
        aria-labelledby="dampier-technical-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-technical-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Marine Inspection & Engineering Consultancy in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection is often requested in Dampier when machinery,
            piping or shipboard systems need independent observation while a
            vessel is alongside an industrial berth. This page does not claim
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
