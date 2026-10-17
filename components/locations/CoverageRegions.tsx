import { nationalCoverageRegions } from "@/data/locations";

type CoverageRegionsProps = {
  className?: string;
};

export default function CoverageRegions({ className }: CoverageRegionsProps) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
        Australia-wide coverage
      </p>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
        Enquiries and assignments can also be discussed for ports and marine
        locations across Australia. Coverage for a specific job depends on the
        vessel, timing and inspection requirement. PMS does not operate a
        physical office in every listed location.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nationalCoverageRegions.map((group) => (
          <li
            key={group.region}
            className="rounded-sm border border-pms-line bg-white px-5 py-4 shadow-[0_1px_2px_rgba(7,26,50,0.05)]"
          >
            <h3 className="text-sm font-semibold tracking-tight text-pms-navy">
              {group.region}
            </h3>
            <p className="mt-2 text-sm leading-6 text-pms-muted">
              {group.ports.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
