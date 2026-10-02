import {
  BUSINESS_ADDRESS_LINES,
  BUSINESS_NAME,
  EMAIL,
  EMAIL_HREF,
  EMAIL_SECONDARY,
  EMAIL_SECONDARY_HREF,
  OFFICE_PHONE_DISPLAY,
  OFFICE_PHONE_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/navigation";

const detailLinkClass =
  "inline-flex min-h-11 max-w-full items-center break-all rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue";

export default function ContactDetails() {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
        Contact Information
      </p>
      <h2
        id="contact-details-heading"
        className="mt-3 text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
      >
        PMS Peace Marine Services
      </h2>
      <p className="mt-3 text-sm leading-6 text-pms-muted sm:text-[15px]">
        Use the details below to call or email PMS about a marine inspection,
        survey, audit or consultancy enquiry.
      </p>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-xs font-semibold tracking-wide text-pms-muted uppercase">
            Business
          </dt>
          <dd className="mt-2 text-sm font-semibold text-pms-navy">
            {BUSINESS_NAME}
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold tracking-wide text-pms-muted uppercase">
            Primary mobile
          </dt>
          <dd className="mt-1">
            <a
              href={PHONE_HREF}
              className={detailLinkClass}
              aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold tracking-wide text-pms-muted uppercase">
            Office phone
          </dt>
          <dd className="mt-1">
            <a
              href={OFFICE_PHONE_HREF}
              className={detailLinkClass}
              aria-label={`Call the PMS office on ${OFFICE_PHONE_DISPLAY}`}
            >
              {OFFICE_PHONE_DISPLAY}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold tracking-wide text-pms-muted uppercase">
            Email
          </dt>
          <dd className="mt-1 flex flex-col gap-1">
            <a
              href={EMAIL_HREF}
              className={detailLinkClass}
              aria-label={`Email ${EMAIL}`}
            >
              {EMAIL}
            </a>
            <a
              href={EMAIL_SECONDARY_HREF}
              className={detailLinkClass}
              aria-label={`Email ${EMAIL_SECONDARY}`}
            >
              {EMAIL_SECONDARY}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold tracking-wide text-pms-muted uppercase">
            Business address
          </dt>
          <dd className="mt-2">
            <address className="text-sm leading-6 text-pms-navy not-italic">
              {BUSINESS_ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-2 text-sm leading-6 text-pms-muted">
              This is the verified PMS business/contact address. It is not a
              claim that PMS has offices in every Western Australian service
              area.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
}
