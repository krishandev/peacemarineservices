"use client";

import { usePathname } from "next/navigation";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  mainNav,
  type MenuId,
} from "@/lib/navigation";
import ServicesMegaMenu from "./ServicesMegaMenu";
import ServiceAreasMenu from "./ServiceAreasMenu";

type DesktopNavigationProps = {
  openMenu: MenuId | null;
  onOpen: (id: MenuId) => void;
  onClose: () => void;
  onToggle: (id: MenuId) => void;
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
      className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
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

const linkClass =
  "inline-flex items-center whitespace-nowrap rounded-sm px-2 py-2 text-sm font-medium text-pms-ink transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue";

export default function DesktopNavigation({
  openMenu,
  onOpen,
  onClose,
  onToggle,
}: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="hidden min-w-0 flex-1 items-center xl:flex">
      <nav className="flex flex-1 justify-center" aria-label="Primary">
        <ul className="flex items-center gap-1">
          {mainNav.map((item) => {
            if ("id" in item && (item.id === "services" || item.id === "areas")) {
              const open = openMenu === item.id;
              const menuId =
                item.id === "services"
                  ? "desktop-services-menu"
                  : "desktop-service-areas-menu";

              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => onOpen(item.id)}
                  onMouseLeave={onClose}
                >
                  <div className="flex items-center">
                    <a
                      href={item.href}
                      className={`${linkClass} ${
                        isCurrent(pathname, item.href) ? "text-pms-blue" : ""
                      }`}
                      aria-current={
                        isCurrent(pathname, item.href) ? "page" : undefined
                      }
                    >
                      {item.label}
                    </a>
                    <button
                      type="button"
                      className="inline-flex h-8 w-7 items-center justify-center rounded-sm text-pms-navy transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                      aria-expanded={open}
                      aria-controls={menuId}
                      aria-label={`${item.label} menu`}
                      onClick={(event) => {
                        const hoverCapable = window.matchMedia(
                          "(hover: hover) and (pointer: fine)",
                        ).matches;
                        if (hoverCapable && event.detail !== 0 && open) {
                          return;
                        }
                        onToggle(item.id);
                      }}
                    >
                      <ChevronIcon open={open} />
                    </button>
                  </div>
                  {item.id === "services" ? (
                    <ServicesMegaMenu id={menuId} open={open} />
                  ) : (
                    <ServiceAreasMenu id={menuId} open={open} />
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${linkClass} ${
                    isCurrent(pathname, item.href) ? "text-pms-blue" : ""
                  }`}
                  aria-current={
                    isCurrent(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-3 pl-4">
        <a
          href={PHONE_HREF}
          className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-sm border border-pms-navy px-3.5 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
        >
          <PhoneIcon className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="/contact/"
          className="inline-flex h-10 items-center whitespace-nowrap rounded-sm bg-pms-blue px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          Request an Inspection
        </a>
      </div>
    </div>
  );
}
