import Link from "next/link";

export interface CTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
  className?: string;
}

export default function CTA({
  eyebrow = "Marine Surveying & Inspection Services",
  title = "Need a Marine Inspection or Survey?",
  description = "Speak with PMS Peace Marine Services about your marine surveying, inspection, auditing or consultancy requirements.",
  primaryLabel = "Request an Inspection",
  primaryHref = "/contact/",
  secondaryLabel = "Call +61 456 980 609",
  secondaryHref = "tel:+61456980609",
  variant = "dark",
  className = "",
}: CTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      aria-labelledby="cta-heading"
      className={`${
        isDark
          ? "border-t-2 border-pms-blue bg-pms-navy text-white"
          : "border-y border-pms-line bg-pms-wash text-pms-navy"
      } ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:px-6 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {eyebrow ? (
              <p
                className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${
                  isDark ? "text-pms-cyan" : "text-pms-blue"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              id="cta-heading"
              className={`mt-3 max-w-2xl text-2xl leading-tight font-semibold tracking-tight sm:text-3xl ${
                isDark ? "text-white" : "text-pms-navy"
              }`}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={`mt-3 max-w-xl text-sm leading-6 sm:text-[15px] ${
                  isDark ? "text-white/75" : "text-pms-muted"
                }`}
              >
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link
              href={primaryHref}
              className={`inline-flex min-h-12 items-center justify-center rounded-sm bg-pms-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isDark
                  ? "focus-visible:outline-white"
                  : "focus-visible:outline-pms-blue"
              }`}
            >
              {primaryLabel}
            </Link>
            <a
              href={secondaryHref}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isDark
                  ? "bg-white text-pms-navy hover:bg-pms-wash focus-visible:outline-white"
                  : "border border-pms-navy bg-white text-pms-navy hover:bg-white focus-visible:outline-pms-blue"
              }`}
              aria-label={
                secondaryHref.startsWith("tel:")
                  ? `Call PMS Peace Marine Services on ${secondaryLabel.replace(/^Call\s+/i, "")}`
                  : undefined
              }
            >
              {secondaryHref.startsWith("tel:") ? (
                <PhoneIcon className="h-4 w-4" />
              ) : null}
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
