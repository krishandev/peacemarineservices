import {
  servicesColumnOne,
  servicesColumnTwo,
} from "@/lib/navigation";

type ServicesMegaMenuProps = {
  id: string;
  open: boolean;
};

export default function ServicesMegaMenu({ id, open }: ServicesMegaMenuProps) {
  return (
    <div
      id={id}
      className={`absolute top-full left-1/2 z-50 w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-opacity duration-150 ${
        open
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-sm border border-pms-line bg-white shadow-[0_12px_32px_rgba(7,26,50,0.14)]">
        <div className="h-0.5 bg-pms-blue" />
        <p className="border-b border-pms-line bg-pms-wash px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-pms-navy uppercase">
          Services
        </p>
        <div className="grid grid-cols-2 gap-x-2 p-2">
          <ul className="flex flex-col">
            {servicesColumnOne.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-[13px] leading-snug text-pms-ink transition-colors duration-150 hover:bg-pms-wash hover:text-pms-blue focus-visible:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            {servicesColumnTwo.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-[13px] leading-snug text-pms-ink transition-colors duration-150 hover:bg-pms-wash hover:text-pms-blue focus-visible:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-pms-line bg-pms-wash px-4 py-2">
          <a
            href="/our-services/"
            className="text-[13px] font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            View all services
          </a>
        </div>
      </div>
    </div>
  );
}
