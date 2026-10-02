import {
  serviceAreasColumnOne,
  serviceAreasColumnTwo,
} from "@/lib/navigation";

type ServiceAreasMenuProps = {
  id: string;
  open: boolean;
};

export default function ServiceAreasMenu({ id, open }: ServiceAreasMenuProps) {
  return (
    <div
      id={id}
      className={`absolute top-full left-0 z-50 w-[min(22rem,calc(100vw-2rem))] pt-2 transition-opacity duration-150 ${
        open
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-sm border border-pms-line bg-white shadow-[0_12px_32px_rgba(7,26,50,0.14)]">
        <div className="h-0.5 bg-pms-blue" />
        <p className="border-b border-pms-line bg-pms-wash px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-pms-navy uppercase">
          Western Australia
        </p>
        <div className="grid grid-cols-2 gap-x-1 p-2">
          <ul className="flex flex-col">
            {serviceAreasColumnOne.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-[13px] text-pms-ink transition-colors duration-150 hover:bg-pms-wash hover:text-pms-blue focus-visible:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            {serviceAreasColumnTwo.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-[13px] text-pms-ink transition-colors duration-150 hover:bg-pms-wash hover:text-pms-blue focus-visible:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-pms-line bg-pms-wash px-4 py-2">
          <a
            href="/service-areas/"
            className="text-[13px] font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            All service areas
          </a>
        </div>
      </div>
    </div>
  );
}
