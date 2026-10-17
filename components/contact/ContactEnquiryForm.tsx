"use client";

import { useEffect, useId, useRef, useState } from "react";

const FORM_ID = "262871341651457";
const SCRIPT_SRC = `https://form.jotform.com/jsform/${FORM_ID}`;
const FALLBACK_HREF = `https://form.jotform.com/${FORM_ID}`;

export default function ContactEnquiryForm() {
  const mountId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let cancelled = false;
    let timeoutId = 0;
    const script = document.createElement("script");

    function hasForm() {
      return Boolean(containerRef.current?.querySelector("iframe"));
    }

    function markReady() {
      if (!cancelled && hasForm()) {
        window.clearTimeout(timeoutId);
        setStatus("ready");
        return true;
      }
      return false;
    }

    setStatus("loading");

    const observer = new MutationObserver(() => {
      if (markReady()) {
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    script.type = "text/javascript";
    script.src = `${SCRIPT_SRC}?embed=${encodeURIComponent(mountId)}`;
    script.onerror = () => {
      if (!cancelled) {
        window.clearTimeout(timeoutId);
        setStatus("error");
      }
    };
    container.appendChild(script);

    timeoutId = window.setTimeout(() => {
      if (!markReady()) {
        setStatus("error");
      }
    }, 15000);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      observer.disconnect();
      script.remove();
      container.querySelectorAll("iframe").forEach((frame) => frame.remove());
    };
  }, [mountId]);

  return (
    <div className="min-w-0 overflow-x-hidden rounded-sm border border-pms-line bg-white p-5 sm:p-6 lg:p-8">
      <h2
        id="contact-form-heading"
        className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
      >
        Send Us a Marine Service Enquiry
      </h2>
      <p className="mt-3 text-sm leading-6 text-pms-muted sm:text-[15px]">
        Complete the form below with your vessel, service requirement and
        location so PMS can understand your enquiry.
      </p>

      <div
        ref={containerRef}
        className="mt-8 w-full min-w-0 overflow-x-hidden [&_iframe]:block [&_iframe]:max-w-full"
        aria-busy={status === "loading"}
        aria-live="polite"
      />

      {status === "loading" ? (
        <p className="mt-4 text-sm leading-6 text-pms-muted">
          Loading the enquiry form…
        </p>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 text-sm leading-6 text-pms-navy" role="alert">
          The enquiry form could not be loaded. Please open{" "}
          <a
            href={FALLBACK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            the PMS enquiry form
          </a>{" "}
          in a new tab, or use the phone and email details on this page.
        </p>
      ) : null}
    </div>
  );
}
