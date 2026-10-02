import {
  EMAIL,
  EMAIL_HREF,
  EMAIL_SECONDARY,
  EMAIL_SECONDARY_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/navigation";

export default function ContactDirect() {
  return (
    <section
      aria-labelledby="contact-direct-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="contact-direct-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Prefer to Contact Us Directly?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          If you would rather speak with PMS or send an email, use the contact
          options below.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="min-w-0 border border-pms-line bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
              Call PMS Peace Marine Services
            </h3>
            <p className="mt-2 break-all text-sm font-semibold text-pms-navy">
              {PHONE_DISPLAY}
            </p>
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-pms-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue sm:w-auto"
              aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="min-w-0 border border-pms-line bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
              Email Us
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex min-h-11 max-w-full items-center break-all rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  aria-label={`Email ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_SECONDARY_HREF}
                  className="inline-flex min-h-11 max-w-full items-center break-all rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  aria-label={`Email ${EMAIL_SECONDARY}`}
                >
                  {EMAIL_SECONDARY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
