const ismItems = [
  "Safety management procedures",
  "Company procedures",
  "Shipboard implementation",
  "Emergency preparedness",
  "Maintenance systems",
  "Reporting procedures",
  "Non-conformity and corrective action processes",
  "Internal communication",
  "Safety-related records",
  "Relevant SMS documentation",
] as const;

const ispsItems = [
  "Ship security procedures",
  "Security responsibilities",
  "Security records",
  "Access control",
  "Security drills and exercises",
  "Security equipment",
  "Security awareness",
  "Relevant documentation",
  "Implementation of the Ship Security Plan",
] as const;

const mlcItems = [
  "Seafarer employment documentation",
  "Hours of work and rest",
  "Accommodation",
  "Food and catering arrangements",
  "Health and safety",
  "Medical care arrangements",
  "Repatriation-related documentation",
  "Onboard complaint procedures",
  "Seafarer welfare",
  "Relevant records",
] as const;

export default function InternalAuditsTypes() {
  return (
    <>
      <section
        aria-labelledby="internal-audits-ism-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-ism-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            ISM Internal Audits
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS can conduct internal audit activities within an agreed scope to
            review aspects of the Safety Management System (SMS). The exact
            audit scope depends on the company&apos;s SMS, vessel, audit purpose
            and applicable requirements. Not every ISM audit checks every item.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ismItems.map((item) => (
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
        aria-labelledby="internal-audits-isps-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-isps-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            ISPS Internal Audits
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            ISPS-related internal audits can review implementation of applicable
            ship security procedures and the Ship Security Plan within the
            agreed scope. This page describes audit themes in general terms
            only and does not include operational security details.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ispsItems.map((item) => (
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
        aria-labelledby="internal-audits-mlc-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-mlc-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            MLC Internal Audits and Verification
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            MLC-related internal audit or verification work may review relevant
            aspects of maritime labour and onboard working and living
            conditions within the agreed scope. An internal audit does not
            replace inspection, verification or certification by the competent
            authority, flag administration or recognized organization.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mlcItems.map((item) => (
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
