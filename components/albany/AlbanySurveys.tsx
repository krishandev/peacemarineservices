import Link from "next/link";

const prePurchaseItems = [
  "General vessel condition",
  "Visible defects",
  "Machinery condition",
  "Safety equipment",
  "Structural observations within inspection scope",
  "Maintenance condition",
  "Documentation observations",
  "Repair or maintenance considerations",
] as const;

const cargoItems = [
  "Cargo condition observations",
  "Loading and discharge observations",
  "Apparent damage",
  "Quantity-related observations, where applicable",
  "Documentation",
  "Reporting",
] as const;

const bunkerItems = [
  "Bunker quantity survey",
  "Meter or tank measurements, where applicable",
  "Bunker delivery documentation",
  "Sampling observation",
  "Transfer documentation",
  "Recording discrepancies",
] as const;

const technicalItems = [
  "Machinery",
  "Engine-room systems",
  "Equipment condition",
  "Repairs",
  "Modifications",
  "Technical documentation",
  "Maintenance observations",
  "Vessel systems",
  "New vessel fit-out support, where applicable",
] as const;

export default function AlbanySurveys() {
  return (
    <>
      <section
        aria-labelledby="albany-pre-purchase-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-pre-purchase-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Marine Inspections in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An independent inspection can help a prospective buyer understand a
            vessel&apos;s apparent condition while it is in Albany or another
            agreed southern Western Australian location. Inspection findings
            should support informed decision-making but are not a guarantee of
            future vessel performance, and cannot guarantee identification of
            every hidden or inaccessible defect. See{" "}
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
        aria-labelledby="albany-cargo-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-cargo-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Surveyor Services in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo survey work records observed condition, handling and related
            documentation during commercial cargo operations where those
            operations form part of the assignment. Survey findings do not
            determine legal liability. See{" "}
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
        aria-labelledby="albany-bunker-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-bunker-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Surveyor Services in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunker surveying records quantity, documentation and related
            observations during fuel delivery or transfer where bunkering
            applies. It is not laboratory fuel testing, and PMS does not claim
            to determine fuel quality through laboratory analysis as part of
            this service. See{" "}
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
        aria-labelledby="albany-technical-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-technical-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Marine Inspection & Engineering Consultancy in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection and consultancy may assist when machinery,
            repairs or modifications need independent observation while a
            vessel is in Albany. This page does not claim statutory engineering
            approval or professional engineering registration. See{" "}
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
