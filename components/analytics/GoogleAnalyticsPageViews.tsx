"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsPageViewsProps = {
  measurementId: string;
};

function pagePath(pathname: string, search: string) {
  return search ? `${pathname}?${search}` : pathname;
}

export default function GoogleAnalyticsPageViews({
  measurementId,
}: GoogleAnalyticsPageViewsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();
    const path = pagePath(pathname, search);

    const sendPageView = () => {
      if (typeof window.gtag !== "function") {
        return false;
      }

      window.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
        send_to: measurementId,
      });

      return true;
    };

    if (sendPageView()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (sendPageView()) {
        window.clearInterval(intervalId);
      }
    }, 50);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [measurementId, pathname, searchParams]);

  return null;
}
