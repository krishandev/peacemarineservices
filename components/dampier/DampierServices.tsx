import Link from "next/link";

const preAmsaItems = [
  "Safety equipment",
  "Vessel condition",
  "Machinery",
  "Emergency systems",
  "Navigation and communication",
  "Documentation",
  "Maintenance",
  "Operational readiness",
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
  "Fire safety",
  "Life-saving equipment",
  "Emergency preparedness",
  "Safety equipment",
  "Navigation",
  "Communication",
  "Machinery",
  "Operational readiness",
  "Safety documentation",
  "Environmental considerations",
] as const;

export default function DampierServices() {
  return (
    <>
      <section
        aria-labelledby="dampier-pre-amsa-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-pre-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection Support in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A preparatory inspection may help identify areas requiring attention
            before an external or official inspection, including while a vessel
            is in Dampier or nearby Karratha. This is a PMS support service, not
            an official AMSA attendance, and does not guarantee approval,
            certification or acceptance. See{" "}
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
        aria-labelledby="dampier-pre-purchase-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-pre-purchase-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Marine Inspection in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A vessel may be inspected while it is in Dampier, Karratha or
            another Pilbara location. A pre-purchase inspection can help a
            prospective buyer understand a vessel&apos;s apparent condition
            before purchase. A pre-purchase inspection is an assessment within
            the agreed scope and cannot guarantee identification of every hidden
            or inaccessible defect. Further detail is available on{" "}
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
        aria-labelledby="dampier-safety-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-safety-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspection in Dampier
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Safety inspections review relevant safety arrangements, equipment
            and procedures within the agreed scope, including readiness for
            industrial harbour operations where that is part of the assignment.
            See{" "}
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
