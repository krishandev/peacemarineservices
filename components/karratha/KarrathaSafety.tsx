import Link from "next/link";

const safetyItems = [
  "Vessel condition",
  "Safety equipment",
  "Emergency preparedness",
  "Fire safety",
  "Lifesaving equipment",
  "Machinery and engine-room observations",
  "Operational safety",
  "Navigation-related equipment, where relevant",
  "Environmental protection considerations",
  "Documentation and records",
  "Visible deficiencies",
  "Maintenance observations",
] as const;

const amsaItems = [
  "Domestic Commercial Vessel context, where applicable",
  "Documentation readiness",
  "Safety equipment and vessel condition",
  "Operational readiness",
  "Identification of potential deficiencies",
  "Corrective-action planning",
] as const;

const preAmsaItems = [
  "Vessel readiness",
  "Safety equipment",
  "Visible condition",
  "Documentation",
  "Operational readiness",
  "Deficiencies",
  "Corrective-action recommendations",
  "Preparation priorities",
] as const;

export default function KarrathaSafety() {
  return (
    <>
      <section
        aria-labelledby="karratha-safety-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="karratha-safety-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspection Services in Karratha
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A marine safety inspection may review the areas below, depending on
            the agreed scope. Scope depends on vessel type, operational purpose,
            condition, requested inspection and applicable requirements. A PMS
            inspection is not an official AMSA inspection. See{" "}
            <Link
              href="/marine-safety-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine safety inspection in Australia
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {safetyItems.map((item) => (
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
        aria-labelledby="karratha-amsa-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="karratha-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            AMSA & DCV Inspection Support in Karratha
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Domestic Commercial Vessels are Australian vessels used in
              commercial operations under the Marine Safety (Domestic Commercial
              Vessel) National Law and related National Standard for Commercial
              Vessels requirements, where those frameworks apply. Coastal
              support craft and other DCVs working from the Karratha–Dampier
              area may need condition and documentation preparation before an
              official inspection.
            </p>
            <p>
              PMS may provide AMSA-related inspection support and support in
              preparing for an official AMSA inspection within an agreed scope,
              including{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>{" "}
              and{" "}
              <Link
                href="/pre-amsa-inspection/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                pre-AMSA inspection
              </Link>
              . PMS is not AMSA, is not an AMSA government officer, is not a
              government authority, does not guarantee AMSA approval or a
              Certificate of Survey, and cannot control AMSA decisions. Official
              regulatory decisions remain with AMSA or the relevant authority.
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {amsaItems.map((item) => (
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
        aria-labelledby="karratha-pre-amsa-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="karratha-pre-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection Services in Karratha
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A pre-AMSA inspection is a preparatory assessment intended to
            identify potential issues before an official AMSA inspection. It
            does not promise approval, clearance or a successful inspection.
            Further detail is available on{" "}
            <Link
              href="/pre-amsa-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Pre-AMSA inspection
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preAmsaItems.map((item) => (
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
