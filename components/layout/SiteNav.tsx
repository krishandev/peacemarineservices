"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { MenuId } from "@/lib/navigation";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

type SiteNavProps = {
  children: ReactNode;
};

export default function SiteNav({ children }: SiteNavProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState<MenuId | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDesktopMenu = (id: MenuId) => {
    clearCloseTimer();
    setOpenMenu(id);
  };

  const scheduleDesktopClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 120);
  };

  const toggleDesktopMenu = (id: MenuId) => {
    clearCloseTimer();
    setOpenMenu((current) => (current === id ? null : id));
  };

  const closeDesktopMenu = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setAccordion(null);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div ref={rootRef} className="relative border-b border-pms-line bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:gap-4 lg:px-6 lg:py-2.5">
        {children}
        <DesktopNavigation
          openMenu={openMenu}
          onOpen={openDesktopMenu}
          onClose={scheduleDesktopClose}
          onToggle={toggleDesktopMenu}
        />
        <MobileNavigation
          open={mobileOpen}
          accordion={accordion}
          onClose={() => {
            setMobileOpen(false);
            setAccordion(null);
          }}
          onToggle={() => {
            setMobileOpen((current) => !current);
            closeDesktopMenu();
          }}
          onAccordion={(id) =>
            setAccordion((current) => (current === id ? null : id))
          }
        />
      </div>
    </div>
  );
}
