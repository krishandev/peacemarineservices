const vessels = [
  "Workboats",
  "Tugs",
  "Barges",
  "Crew transfer vessels",
  "Utility vessels",
  "Passenger vessels",
  "Commercial fishing vessels",
  "Other domestic commercial vessels",
] as const;

const situations = [
  "Before a new commercial operation",
  "Before a scheduled survey",
  "When preparing for renewal",
  "Following significant modifications",
  "Following relevant repairs or damage",
  "When purchasing or taking over a commercial vessel",
  "When preparing documentation",
  "When safety or compliance concerns have been identified",
  "When clarification of survey scope is required",
] as const;

const documents = [
  "Vessel certificates",
  "Vessel documentation",
  "Safety management documentation",
  "Maintenance records",
  "Equipment records",
  "Stability information",
  "Operational manuals",
  "Previous inspection or survey reports",
  "Relevant technical records",
] as const;

export default function AmsaDcvVessels() {
  return (
    <>
      <section
        aria-labelledby="amsa-dcv-vessels-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-vessels-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Vessels That May Require DCV Survey Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the vessel and operation, examples may include the
            vessel types below. PMS does not survey every vessel type in every
            circumstance. Suitability is discussed against the assignment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {vessels.map((item) => (
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
        aria-labelledby="amsa-dcv-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should You Contact a DCV Marine Surveyor?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Contacting a marine surveyor may be useful in the situations below,
            depending on the circumstances. A survey is not legally required in
            every situation listed.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
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
        aria-labelledby="amsa-dcv-prep-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="amsa-dcv-prep-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing for a DCV Survey
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the survey and vessel, relevant documents may include
            the items below. This list does not apply identically to every
            survey.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((item) => (
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
