import Link from "next/link";

const preparation = [
  "Vessel name and details",
  "Vessel type",
  "Vessel location",
  "Available vessel documentation",
  "Maintenance records where available",
  "Previous survey or inspection reports where available",
  "Known technical concerns",
  "Buyer-specific concerns",
  "Access arrangements",
  "Agreed inspection scope",
] as const;

const limitations = [
  "Inspection is performed according to the agreed scope",
  "Findings depend on vessel accessibility and condition",
  "Some components may require specialist testing",
  "Some defects may not be visible during a normal inspection",
  "Hidden or latent defects may require additional investigation",
  "Documentation availability can affect the assessment",
  "Additional specialist inspections may be recommended where appropriate",
] as const;

export default function PrePurchasePrepare() {
  return (
    <>
      <section
        aria-labelledby="pre-purchase-prepare-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-prepare-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            How to Prepare for a Pre-Purchase Vessel Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Useful information may include the items below. These are not
            mandatory document requirements for every inspection.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preparation.map((item) => (
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
        aria-labelledby="pre-purchase-limits-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Information About Pre-Purchase Inspections
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A pre-purchase inspection is a practical condition assessment, not a
            guarantee of a defect-free vessel. The points below describe typical
            limitations.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {limitations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pms-blue"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pre-purchase-australia-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-australia-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Purchase Vessel Inspections in Australia
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Vessel acquisition can involve technical, safety, operational,
              regulatory, flag and classification considerations depending on
              the vessel and its intended operation. Depending on the vessel,
              relevant Australian maritime requirements, including those
              associated with the Australian Maritime Safety Authority (AMSA),
              may form part of the buyer&apos;s due diligence.
            </p>
            <p>
              PMS is not AMSA, a government authority or a classification
              society. A pre-purchase inspection does not guarantee AMSA
              approval, government certificates or regulatory compliance.{" "}
              <Link
                href="/about-us/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                About PMS Peace Marine Services
              </Link>
              ,{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>{" "}
              and{" "}
              <Link
                href="/flag-state-inspection/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                flag state inspection
              </Link>{" "}
              provide further context for related work. To discuss a vessel,
              use the{" "}
              <Link
                href="/contact/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
