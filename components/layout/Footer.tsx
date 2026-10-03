import Image from "next/image";
import Link from "next/link";
import { serviceAreas, serviceCoverage } from "@/data/locations";
import { services } from "@/data/services";

const PHONE_PRIMARY_DISPLAY = "+61 456 980 609";
const PHONE_PRIMARY_HREF = "tel:+61456980609";
const PHONE_SECONDARY_DISPLAY = "+61 08 6249 2720";
const PHONE_SECONDARY_HREF = "tel:+61862492720";
const EMAIL_PRIMARY = "pmsoffshore@outlook.com";
const EMAIL_SECONDARY = "info@pmsmarine.org";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/our-services/", label: "Our Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
] as const;

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/peacemarineservices/home/?viewAsMember=true",
    label: "PMS Peace Marine Services on LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://www.facebook.com/pmsmarineservices",
    label: "PMS Peace Marine Services on Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://x.com/pms_marine",
    label: "PMS Peace Marine Services on X",
    icon: XIcon,
  },
  {
    href: "https://www.google.com/maps/place/Peace+Marine+Services+(PMS+Marine+Services)/@-32.0620861,115.7542118,12z/data=!4m6!3m5!1s0x2a32bd62db8b74cb:0x577d306cfb10641!8m2!3d-32.0660833!4d115.8864859!16s%2Fg%2F11trn5ghbj?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D",
    label: "Find Us on Google — PMS Peace Marine Services Google Business Profile",
    icon: GoogleIcon,
  },
] as const;

const linkClassName =
  "inline-flex min-h-11 items-center rounded-sm text-sm text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-pms-navy text-white">
      <div className="border-t-2 border-pms-blue">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <section
              aria-labelledby="footer-company-heading"
              className="sm:col-span-2 lg:col-span-4"
            >
              <h2 id="footer-company-heading" className="sr-only">
                PMS Peace Marine Services
              </h2>
              <Link
                href="/"
                className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="PMS Peace Marine Services home"
              >
                <Image
                  src="/PMS-4.png"
                  alt="PMS Peace Marine Services"
                  width={303}
                  height={135}
                  className="h-16 w-auto max-w-[220px] object-contain object-left sm:h-[72px] sm:max-w-[240px]"
                />
              </Link>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                PMS Peace Marine Services provides marine surveying, inspection,
                auditing and marine consultancy services across Western
                Australia and other Australian locations.
              </p>
              <ul className="mt-5 flex flex-wrap items-center gap-2">
                {socialLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <item.icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <nav
              aria-labelledby="footer-services-heading"
              className="lg:col-span-3"
            >
              <h2
                id="footer-services-heading"
                className="text-[11px] font-semibold tracking-[0.14em] text-white uppercase"
              >
                Our Services
              </h2>
              <ul className="mt-4 space-y-0.5">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClassName}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-labelledby="footer-areas-heading"
              className="lg:col-span-2"
            >
              <h2
                id="footer-areas-heading"
                className="text-[11px] font-semibold tracking-[0.14em] text-white uppercase"
              >
                Service Areas
              </h2>
              <ul className="mt-4 space-y-0.5">
                {serviceAreas.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClassName}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-labelledby="footer-quick-heading"
              className="lg:col-span-3"
            >
              <h2
                id="footer-quick-heading"
                className="text-[11px] font-semibold tracking-[0.14em] text-white uppercase"
              >
                Quick Links
              </h2>
              <ul className="mt-4 space-y-0.5">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClassName}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <section
            aria-labelledby="footer-contact-heading"
            className="border-t border-white/10 py-8"
          >
            <h2
              id="footer-contact-heading"
              className="text-[11px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              Contact
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold tracking-wide text-white/55 uppercase">
                  Phone
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      href={PHONE_PRIMARY_HREF}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-white transition-colors duration-150 hover:text-pms-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={`Call ${PHONE_PRIMARY_DISPLAY}`}
                    >
                      <PhoneIcon className="h-4 w-4 shrink-0 text-pms-cyan" />
                      {PHONE_PRIMARY_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <a
                      href={PHONE_SECONDARY_HREF}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-white transition-colors duration-150 hover:text-pms-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={`Call ${PHONE_SECONDARY_DISPLAY}`}
                    >
                      <PhoneIcon className="h-4 w-4 shrink-0 text-pms-cyan" />
                      {PHONE_SECONDARY_DISPLAY}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-white/55 uppercase">
                  Email
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      href={`mailto:${EMAIL_PRIMARY}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-white/90 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={`Email ${EMAIL_PRIMARY}`}
                    >
                      <MailIcon className="h-4 w-4 shrink-0 text-pms-cyan" />
                      {EMAIL_PRIMARY}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL_SECONDARY}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-white/90 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={`Email ${EMAIL_SECONDARY}`}
                    >
                      <MailIcon className="h-4 w-4 shrink-0 text-pms-cyan" />
                      {EMAIL_SECONDARY}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-white/55 uppercase">
                  Service coverage
                </p>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {serviceCoverage.join(" · ")}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <p className="text-xs leading-5 text-white/60">
              © {year} PMS Peace Marine Services. All rights reserved.
            </p>
            <Link
              href="/privacy-policy/"
              className="inline-flex min-h-11 items-center rounded-sm text-xs text-white/70 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-0 sm:py-1"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.5 8.5V6.8c0-.6.4-1 1-1h1.3V3.5h-2.2c-2.2 0-3.6 1.5-3.6 3.6v1.4H9.2v2.4h1.8V20.5h3.5v-9.6h2.3l.3-2.4h-2.6Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.6 3.5h2.4L14.4 10l6.7 10.5h-5.3l-4.1-6.1-4.7 6.1H4.6L11 13.2 4.6 3.5h5.4l3.8 5.6 3.8-5.6Zm-.8 15.6h1.3L7.3 4.8H5.9l10.9 14.3Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.54 9.5H4.1V20h2.44V9.5ZM5.32 4A1.42 1.42 0 1 0 5.33 6.84 1.42 1.42 0 0 0 5.32 4ZM19.9 20h-2.44v-5.73c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.19 1.48-2.19 3.02V20H11V9.5h2.34v1.43h.03c.33-.62 1.13-1.27 2.32-1.27 2.48 0 2.94 1.63 2.94 3.76V20Z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.35 12.24c0-.78-.07-1.53-.2-2.25H12v4.26h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.7 2.91-4.2 2.91-7.39Z" />
      <path d="M12 22c2.63 0 4.84-.87 6.45-2.37l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.55 0-4.71-1.72-5.48-4.04H3.27v2.52A9.99 9.99 0 0 0 12 22Z" />
      <path d="M6.52 14.08A6 6 0 0 1 6.2 12c0-.72.12-1.42.32-2.08V7.4H3.27A9.99 9.99 0 0 0 2 12c0 1.61.38 3.14 1.27 4.6l3.25-2.52Z" />
      <path d="M12 5.88c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 2.97 14.62 2 12 2A9.99 9.99 0 0 0 3.27 7.4l3.25 2.52C7.29 7.6 9.45 5.88 12 5.88Z" />
    </svg>
  );
}
