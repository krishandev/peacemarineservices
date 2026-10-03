import Link from "next/link";

const limitations = [
  "Inspection scope is agreed before attendance",
  "Findings depend on accessibility and vessel condition",
  "Some technical issues require specialist testing",
  "Hidden defects may not be identifiable through visual inspection",
  "Engineering conclusions may require additional data",
  "Specialist engineers or laboratories may be required for certain issues",
  "Regulatory or classification approval is separate from PMS consultancy",
  "Recommendations do not automatically constitute statutory or classification approval",
] as const;

export default function TechLimits() {
  return (
    <>
      <section
        aria-labelledby="tech-limits-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Information About Technical Inspections & Consultancy
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection and consultancy are practical assessment
            services. They are not a substitute for statutory, classification or
            government approval. Further context is available on{" "}
            <Link
              href="/about-us/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              About PMS Peace Marine Services
            </Link>
            .
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
        aria-labelledby="tech-australia-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-australia-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Marine Engineering Support in Australia
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Technical vessel work can involve Australian maritime
              requirements, classification requirements, flag requirements,
              safety requirements and other applicable standards depending on
              vessel type and operation. Depending on the vessel, requirements
              associated with the Australian Maritime Safety Authority (AMSA)
              may also be relevant.
            </p>
            <p>
              PMS is not AMSA, a government authority or a classification
              society. PMS cannot issue statutory certificates, approve class
              modifications or guarantee regulatory compliance. Related
              preparation and survey support may include{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>
              ,{" "}
              <Link
                href="/pre-amsa-inspection/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                Pre-AMSA inspection
              </Link>
              ,{" "}
              <Link
                href="/marine-safety-inspection-in-australia/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine safety inspection
              </Link>{" "}
              or{" "}
              <Link
                href="/pre-psc-inspection-in-australia/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                pre-PSC inspection
              </Link>
              . To discuss a vessel, use the{" "}
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
