"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { nationalCoverageRegions } from "@/data/locations";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  mainNav,
  serviceAreas,
  services,
  type MenuId,
} from "@/lib/navigation";

type MobileNavigationProps = {
  open: boolean;
  accordion: MenuId | null;
  onClose: () => void;
  onToggle: () => void;
  onAccordion: (id: MenuId) => void;
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.7 3.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.3l-.2 2.2c0 .4-.2.8-.5 1.1l-1.1 1.1a12.6 12.6 0 0 0 5.6 5.6l1.1-1.1c.3-.3.7-.5 1.1-.5l2.2-.2c.6 0 1.1.3 1.3.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.4.4-1 .6-1.6.5-3.4-.4-6.6-2.2-9.4-5-2.8-2.8-4.6-6-5-9.4-.1-.6.1-1.2.5-1.6L6.7 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(href);
}

export default function MobileNavigation({
  open,
  accordion,
  onClose,
  onToggle,
  onAccordion,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <a
        href={PHONE_HREF}
        className="inline-flex h-11 items-center gap-1.5 rounded-sm bg-pms-blue px-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
      >
        <PhoneIcon className="h-4 w-4" />
        <span>Call</span>
      </a>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-pms-line text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={onToggle}
      >
        {open ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6 18 18M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      <div
        className={`absolute inset-x-0 top-full z-50 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div
          className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-t border-pms-line bg-white shadow-[0_16px_32px_rgba(7,26,50,0.16)] md:max-h-[calc(100dvh-6.25rem)]"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col px-2 py-2">
              {mainNav.map((item) => {
                if ("id" in item && item.id === "services") {
                  const expanded = accordion === "services";
                  return (
                    <li key={item.href} className="border-b border-pms-line">
                      <div className="flex items-stretch">
                        <Link
                          href={item.href}
                          className={`flex-1 px-3 py-3 text-[15px] font-medium ${
                            isCurrent(pathname, item.href)
                              ? "text-pms-blue"
                              : "text-pms-ink"
                          }`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="inline-flex w-12 items-center justify-center text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pms-blue"
                          aria-expanded={expanded}
                          aria-controls="mobile-services-menu"
                          aria-label="Our Services submenu"
                          onClick={() => onAccordion("services")}
                        >
                          <ChevronIcon open={expanded} />
                        </button>
                      </div>
                      <ul
                        id="mobile-services-menu"
                        className={expanded ? "space-y-0.5 bg-pms-wash px-2 pb-3" : "hidden"}
                      >
                        {services.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="block rounded-sm px-3 py-2.5 text-sm text-pms-ink hover:bg-white hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                              onClick={onClose}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                if ("id" in item && item.id === "areas") {
                  const expanded = accordion === "areas";
                  return (
                    <li key={item.href} className="border-b border-pms-line">
                      <div className="flex items-stretch">
                        <Link
                          href={item.href}
                          className={`flex-1 px-3 py-3 text-[15px] font-medium ${
                            isCurrent(pathname, item.href)
                              ? "text-pms-blue"
                              : "text-pms-ink"
                          }`}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="inline-flex w-12 items-center justify-center text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pms-blue"
                          aria-expanded={expanded}
                          aria-controls="mobile-service-areas-menu"
                          aria-label="Service Areas submenu"
                          onClick={() => onAccordion("areas")}
                        >
                          <ChevronIcon open={expanded} />
                        </button>
                      </div>
                      <ul
                        id="mobile-service-areas-menu"
                        className={expanded ? "space-y-0.5 bg-pms-wash px-2 pb-3" : "hidden"}
                      >
                        {serviceAreas.map((area) => (
                          <li key={area.href}>
                            <Link
                              href={area.href}
                              className="block rounded-sm px-3 py-2.5 text-sm text-pms-ink hover:bg-white hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-pms-blue"
                              onClick={onClose}
                            >
                              {area.label}
                            </Link>
                          </li>
                        ))}
                        <li className="px-3 pt-2 pb-1">
                          <p className="text-[11px] font-semibold tracking-[0.12em] text-pms-navy uppercase">
                            Other Australian ports
                          </p>
                          <ul className="mt-2 space-y-1">
                            {nationalCoverageRegions.map((group) => (
                              <li
                                key={group.region}
                                className="text-[13px] leading-5 text-pms-muted"
                              >
                                <span className="font-medium text-pms-ink">
                                  {group.region}:
                                </span>{" "}
                                {group.ports.join(", ")}
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="border-b border-pms-line">
                    <Link
                      href={item.href}
                      className={`block px-3 py-3 text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pms-blue ${
                        isCurrent(pathname, item.href)
                          ? "text-pms-blue"
                          : "text-pms-ink"
                      }`}
                      aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-2 px-4 py-4">
              <Link
                href="/contact/"
                className="inline-flex min-h-11 items-center justify-center rounded-sm bg-pms-blue px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                onClick={onClose}
              >
                Request an Inspection
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-pms-navy bg-white px-4 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
              >
                <PhoneIcon className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
