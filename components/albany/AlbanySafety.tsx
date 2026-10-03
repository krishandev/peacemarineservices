import Link from "next/link";

const safetyItems = [
  "Vessel condition",
  "Safety equipment",
  "Emergency preparedness",
  "Machinery and engine-room observations",
  "Navigation-related equipment, where within scope",
  "Fire safety",
  "Lifesaving equipment",
  "Operational safety",
  "Environmental protection considerations",
  "Documentation and records",
  "Identification of visible deficiencies",
] as const;

const amsaItems = [
  "Domestic Commercial Vessel context, where applicable",
  "Documentation review and inspection preparation",
  "Vessel condition and safety checks",
  "Practical corrective-action recommendations",
  "Support in preparing for an official AMSA inspection",
] as const;

const preAmsaItems = [
  "Vessel readiness",
  "Safety equipment",
  "Documentation",
  "Visible condition",
  "Operational readiness",
  "Deficiencies",
  "Corrective-action recommendations",
  "Preparation priorities",
] as const;

export default function AlbanySafety() {
  return (
    <>
      <section
        aria-labelledby="albany-safety-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-safety-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Safety Inspections in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A marine safety inspection reviews relevant safety arrangements,
            equipment and procedures within the agreed scope. The actual
            inspection scope depends on vessel type, purpose, condition,
            requested service and applicable requirements. This is not official
            certification unless a separate verified service provides it. See{" "}
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
        aria-labelledby="albany-amsa-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            AMSA & DCV Inspection Support in Albany
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Domestic Commercial Vessels are Australian vessels used in
              commercial operations under the Marine Safety (Domestic Commercial
              Vessel) National Law and related National Standard for Commercial
              Vessels requirements, where those frameworks apply. Regional
              harbour craft and other DCVs working from Albany often need
              documentation and condition preparation before an official
              inspection.
            </p>
            <p>
              PMS may provide AMSA-related inspection support within an agreed
              scope, including{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>
              . PMS is not AMSA, is not a government officer, does not issue
              AMSA statutory certificates, does not guarantee Certificate of
              Survey issuance or a successful AMSA inspection, and cannot
              influence AMSA decisions. Official AMSA decisions remain with AMSA
              or the relevant competent authority.
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
        aria-labelledby="albany-pre-amsa-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="albany-pre-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection Services in Albany
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A pre-AMSA inspection is a preparatory assessment intended to
            identify potential gaps before an official AMSA inspection. It does
            not promise approval, clearance or a successful official inspection.
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
