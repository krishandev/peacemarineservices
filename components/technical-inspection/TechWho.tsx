import Link from "next/link";

const audiences = [
  "Vessel owners",
  "Vessel operators",
  "Ship managers",
  "Fleet managers",
  "Charterers where appropriate",
  "Maritime companies",
  "Buyers during vessel acquisition",
  "Companies planning repairs or modifications",
  "Other maritime stakeholders",
] as const;

const timing = [
  "Machinery problems",
  "Recurring equipment issues",
  "Before major repairs",
  "After repairs",
  "Before vessel purchase",
  "Before vessel modification",
  "During maintenance planning",
  "When technical documentation needs review",
  "When unusual equipment conditions are observed",
  "When an independent technical assessment is useful",
] as const;

export default function TechWho() {
  return (
    <>
      <section
        aria-labelledby="tech-who-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit From Technical Marine Consultancy?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspection and consultancy support may be relevant to the
            parties below. PMS does not represent any party unless specifically
            engaged for that assignment. Related work such as{" "}
            <Link
              href="/pre-purchase-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              pre-purchase inspection
            </Link>
            ,{" "}
            <Link
              href="/cargo-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              cargo survey
            </Link>{" "}
            or{" "}
            <Link
              href="/bunker-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              bunker survey
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
        aria-labelledby="tech-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should You Arrange a Technical Marine Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A technical inspection can be useful in the situations below.
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
