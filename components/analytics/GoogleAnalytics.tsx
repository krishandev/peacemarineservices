import Script from "next/script";
import { Suspense } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import GoogleAnalyticsPageViews from "./GoogleAnalyticsPageViews";

export default function GoogleAnalytics() {
  const measurementId = GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageViews measurementId={measurementId} />
      </Suspense>
    </>
  );
}
