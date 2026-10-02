const audiences = [
  "Prospective vessel buyers",
  "Ship owners",
  "Vessel operators",
  "Companies purchasing used vessels",
  "Commercial vessel purchasers",
  "Investors",
  "Buyer representatives",
  "Relevant maritime stakeholders",
] as const;

const timing = [
  "Vessel access",
  "Port coordination",
  "Inspection scope",
  "Documentation availability",
  "Scheduling",
  "Buyer-specific requirements",
] as const;

export default function PrePurchaseWho() {
  return (
    <>
      <section
        aria-labelledby="pre-purchase-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Should Consider a Pre-Purchase Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Pre-purchase inspection support may be relevant to the parties
            below. A pre-purchase inspection is not legally required for every
            vessel purchase.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm font-medium break-words text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pre-purchase-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should a Pre-Purchase Inspection Be Arranged?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            It is generally useful before completing a vessel purchase, while
            due diligence is still underway. Practical arrangements may include:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
