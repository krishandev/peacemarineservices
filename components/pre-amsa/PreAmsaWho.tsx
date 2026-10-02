import Link from "next/link";

const audiences = [
  "Domestic commercial vessel owners",
  "Vessel operators",
  "Vessel managers",
  "Companies preparing for applicable inspections",
  "Operators preparing vessels for regulatory review",
  "Owners planning modifications or maintenance before an inspection, where relevant",
] as const;

const timing = [
  "Before a planned inspection",
  "Before a survey",
  "After significant maintenance or repair",
  "After modification, where relevant",
  "When preparing a vessel for operation",
  "When an independent pre-inspection assessment is needed",
  "When known deficiencies need to be reviewed",
] as const;

export default function PreAmsaWho() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-who-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit from Pre-AMSA Inspection Support?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Pre-AMSA inspection support may be relevant to the parties below. It
            is not mandatory for every vessel. Depending on the assignment,{" "}
            <Link
              href="/marine-safety-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine safety inspection
            </Link>
            ,{" "}
            <Link
              href="/pre-purchase-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              pre-purchase inspection
            </Link>
            ,{" "}
            <Link
              href="/our-services/pre-psc-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              pre-PSC inspection
            </Link>{" "}
            or{" "}
            <Link
              href="/internal-audits-for-ism-isps-and-mlc/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              ISM, ISPS and MLC internal audits
            </Link>{" "}
            may also be discussed.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm font-medium break-words text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pre-amsa-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should You Arrange a Pre-AMSA Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            It can be useful at the times below. There is no single statutory
            timeframe that applies to every vessel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
