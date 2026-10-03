import Link from "next/link";

const preAmsaItems = [
  "Safety equipment",
  "Vessel condition",
  "Documentation",
  "Machinery",
  "Emergency systems",
  "Navigation and communication",
  "Operational readiness",
  "Maintenance records",
  "Previous deficiencies",
] as const;

const prePurchaseItems = [
  "Hull and structure, where accessible",
  "Machinery",
  "Electrical systems",
  "Safety equipment",
  "Navigation equipment",
  "Deck equipment",
  "Accommodation, where relevant",
  "Visible defects",
  "Maintenance observations",
  "Documentation review, where agreed",
] as const;

const safetyItems = [
  "Safety equipment",
  "Emergency preparedness",
  "Fire safety",
  "Life-saving appliances",
  "Navigation",
  "Communication",
  "Machinery",
  "Operational readiness",
  "Safety documentation",
  "Environmental considerations",
] as const;

export default function PerthServices() {
  return (
    <>
      <section
        aria-labelledby="perth-pre-amsa-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-pre-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection Support in Perth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A preparatory inspection can help identify areas that may need
            attention before an external or official inspection. This is a PMS
            support service, not an official AMSA attendance, and does not
            guarantee approval or certification. See{" "}
            <Link
              href="/pre-amsa-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Pre-AMSA inspection
            </Link>{" "}
            for the dedicated service page.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preAmsaItems.map((item) => (
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
        aria-labelledby="perth-pre-purchase-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-pre-purchase-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Marine Inspection in Perth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A pre-purchase inspection can help buyers understand a vessel&apos;s
            apparent condition before purchase. A pre-purchase inspection is an
            assessment within the agreed scope and does not guarantee discovery
            of every hidden defect. Further detail is available on{" "}
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
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="perth-safety-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-safety-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspection in Perth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Safety inspections review relevant safety arrangements, equipment
            and procedures within the agreed scope. See{" "}
            <Link
              href="/marine-safety-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine safety inspection in Australia
            </Link>{" "}
            for the dedicated service page.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {safetyItems.map((item) => (
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
