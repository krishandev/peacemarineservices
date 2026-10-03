import Link from "next/link";

const audiences = [
  "Ship owners",
  "Vessel operators",
  "Charterers",
  "Cargo owners",
  "Importers and exporters",
  "Freight and logistics stakeholders",
  "Marine insurers and claims stakeholders where applicable",
  "Terminal or cargo interests where appropriate",
  "Other maritime stakeholders",
] as const;

const timing = [
  "Before loading",
  "During loading",
  "After loading",
  "During discharge",
  "After discharge",
  "When cargo damage is suspected",
  "When quantity discrepancies are identified",
  "When cargo condition needs independent documentation",
  "During cargo claims or investigations",
  "When contractual survey instructions require attendance",
] as const;

export default function CargoWho() {
  return (
    <>
      <section
        aria-labelledby="cargo-who-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit From Cargo Survey Services?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo survey support may be relevant to the parties below. PMS does
            not represent any specific party unless instructed for that
            assignment. Related work such as{" "}
            <Link
              href="/bunker-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              bunker survey
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
              href="/flag-state-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              flag state inspection
            </Link>{" "}
            may also be discussed depending on the requirement.
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
        aria-labelledby="cargo-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should a Cargo Survey Be Arranged?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A survey can be useful at the times below, where applicable. This
            page does not describe cargo surveys as legally mandatory for every
            cargo movement.
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
