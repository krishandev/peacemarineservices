import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7.2 12 13l8-5.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="hidden bg-pms-navy text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 lg:px-6">
        <p className="truncate text-[11px] leading-5 tracking-[0.02em] text-white/80 lg:text-xs">
          AMSA Marine Surveyor Australia | Marine Inspection &amp; Compliance
        </p>
        <div className="flex shrink-0 items-center gap-4 lg:gap-6">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-sm bg-white/10 px-2.5 py-1 text-[13px] font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Phone:</span>
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-1.5 rounded-sm text-xs text-white/85 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Email PMS Peace Marine Services at ${EMAIL}`}
          >
            <MailIcon className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Email:</span>
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
