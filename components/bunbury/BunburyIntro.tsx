import Link from "next/link";

const serviceList = [
  "Vessel inspections",
  "Marine safety inspections",
  "Pre-purchase surveys",
  "Pre-AMSA inspection support",
  "AMSA and DCV survey support, where applicable",
  "Cargo surveys",
  "Bunker surveys",
  "Technical marine inspections",
  "Marine engineering consultancy",
  "Internal ISM, ISPS and MLC audits",
  "Flag State inspection support",
  "Pre-PSC inspections",
  "Safety vetting and pre-vetting inspections",
  "Class-related technical consultancy",
  "New vessel fit-out inspection",
  "Modification and repair inspection",
  "Salvage and recovery planning support, where applicable",
] as const;

export default function BunburyIntro() {
  return (
    <>
      <section
        aria-labelledby="bunbury-surveyor-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunbury-surveyor-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Marine Surveyor in Bunbury Do?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A marine surveyor may inspect vessel condition, machinery, safety
              systems, equipment, documentation and other relevant areas
              depending on the agreed inspection scope.
            </p>
            <p>
              PMS Peace Marine Services provides marine survey and inspection
              support for vessel owners, operators and maritime stakeholders in
              Bunbury. PMS is not AMSA, a Port State Control authority, a Flag
              State authority, a classification society, a charterer or a
              vetting organisation, and does not control those parties&apos;
              decisions. Company background is available on{" "}
              <Link
                href="/about-us/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                About PMS Peace Marine Services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="bunbury-services-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunbury-services-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Services in Bunbury
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunbury is a South West Western Australian port serving commercial
            shipping as well as regional domestic commercial vessels. Inspection
            work here may relate to vessels calling at the port, local
            workboats, cargo operations, technical condition, fit-out or
            modification work, and readiness for an external inspection.
            Depending on vessel type, inspection scope and client requirements,
            PMS can discuss the{" "}
            <Link
              href="/our-services/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveying and inspection services
            </Link>{" "}
            below. Not every service applies to every vessel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((item) => (
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
