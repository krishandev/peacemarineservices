import Link from "next/link";

const reasons = [
  "Understanding the vessel's current condition",
  "Identifying visible defects",
  "Identifying maintenance requirements",
  "Reviewing machinery and equipment",
  "Identifying technical concerns",
  "Identifying safety-related observations",
  "Reviewing available documentation",
  "Understanding potential repair or maintenance exposure",
  "Supporting informed purchasing decisions",
] as const;

export default function PrePurchaseWhat() {
  return (
    <>
      <section
        aria-labelledby="pre-purchase-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Pre-Purchase Marine Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A pre-purchase marine inspection is a condition assessment
              carried out before buying a vessel to help identify observable
              defects, technical concerns, maintenance requirements and other
              areas that may require attention or further investigation.
            </p>
            <p>
              PMS Peace Marine Services provides this support as part of its{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine surveying and inspection services
              </Link>
              . An inspection cannot identify every hidden or latent defect.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pre-purchase-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Arrange a Pre-Purchase Vessel Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A pre-purchase inspection can help buyers understand observable
            condition before completing a purchase. It does not eliminate all
            purchase risks or guarantee a defect-free vessel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
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
