import Link from "next/link";

const prePurchaseItems = [
  "Overall vessel condition",
  "Visible defects",
  "Machinery observations",
  "Structural observations within agreed scope",
  "Safety equipment",
  "Maintenance condition",
  "Documentation observations",
  "Repair and maintenance considerations",
] as const;

const cargoItems = [
  "Cargo condition observations",
  "Loading and discharge observations",
  "Apparent damage",
  "Quantity-related observations, where applicable",
  "Cargo documentation",
  "Discrepancy recording",
  "Survey reporting",
] as const;

const bunkerItems = [
  "Quantity assessment",
  "Tank measurements, where applicable",
  "Bunker delivery documentation",
  "Bunker Delivery Note review",
  "Sampling observation",
  "Transfer observation",
  "Discrepancy documentation",
] as const;

const technicalItems = [
  "Machinery",
  "Engine-room systems",
  "Vessel equipment",
  "Technical systems",
  "Repairs",
  "Modifications",
  "Maintenance observations",
  "Technical documentation",
  "New vessel fit-out, where applicable",
] as const;

export default function GeraldtonSurveys() {
  return (
    <>
      <section
        aria-labelledby="geraldton-pre-purchase-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-pre-purchase-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Marine Inspection in Geraldton
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An independent inspection can help a prospective buyer understand
            overall vessel condition, visible defects, machinery observations,
            structural observations within the agreed scope, safety equipment,
            maintenance condition, documentation observations, and repair or
            maintenance considerations. Findings reflect the defined inspection
            scope and conditions observed at the time of inspection. They do
            not guarantee future vessel performance or identification of every
            hidden or inaccessible defect. See{" "}
            <Link
              href="/pre-purchase-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              pre-purchase marine inspection
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {prePurchaseItems.map((item) => (
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
        aria-labelledby="geraldton-cargo-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-cargo-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Surveyor Services in Geraldton
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo survey support may be requested during commercial loading,
            discharge or related operations at Geraldton. Depending on the
            assignment, work may include cargo condition observations,
            loading or discharge observation, apparent damage, quantity-related
            observations where applicable, cargo documentation, discrepancy
            recording and survey reporting. Findings record what was observed
            within the agreed scope and do not determine legal liability. See{" "}
            <Link
              href="/cargo-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              cargo surveyor services
            </Link>
            .
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
        aria-labelledby="geraldton-bunker-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-bunker-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Surveyor Services in Geraldton
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where bunkering applies, bunker survey work may include quantity
            assessment, tank measurements where applicable, bunker delivery
            documentation, Bunker Delivery Note review, sampling observation,
            transfer observation and discrepancy documentation. Bunker
            surveying is distinct from laboratory fuel-quality testing. PMS
            does not operate a fuel laboratory or provide laboratory analysis
            as part of this service. See{" "}
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
        aria-labelledby="geraldton-technical-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-technical-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Marine Inspection & Engineering Consultancy in Geraldton
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection and marine engineering consultancy may assist
            when machinery, engine-room systems, vessel equipment, repairs,
            modifications or maintenance observations need independent review
            during a Mid West port call. This page does not claim statutory
            engineering approval or professional engineering registration. See{" "}
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
