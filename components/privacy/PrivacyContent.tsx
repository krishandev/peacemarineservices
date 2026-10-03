import Link from "next/link";
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

const linkClassName =
  "font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue";

export default function PrivacyContent() {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Legal information
        </p>
        <h1 className="mt-3 text-[1.75rem] leading-tight font-semibold tracking-tight break-words text-pms-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-pms-muted">Last updated: 3 October 2026</p>
        <div className="mt-6 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
          <p>
            PMS Peace Marine Services respects the privacy of people who
            interact with its website and marine services. This Privacy Policy
            explains how PMS may collect, use, store, disclose and protect
            personal information.
          </p>
          <p>
            It applies to personal information collected through this website
            and through other interactions described below, including contact
            forms, inspection requests, telephone calls, email and other
            business communications.
          </p>
          <p>
            PMS handles personal information in accordance with applicable
            Australian privacy laws and the Australian Privacy Principles where
            they apply. This page is a website policy for PMS Peace Marine
            Services. It is not legal advice and does not replace independent
            legal advice.
          </p>
          <p>
            This policy may be updated when business practices, technology or
            applicable privacy requirements change.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section aria-labelledby="privacy-who">
            <h2
              id="privacy-who"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              1. Who We Are
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS Peace Marine Services provides marine surveying, marine
                inspection, marine consultancy, auditing, cargo and bunker
                survey, technical inspection and related marine services in
                Australia. More information about the business is available on{" "}
                <Link href="/about-us/" className={linkClassName}>
                  About Us
                </Link>
                ,{" "}
                <Link href="/our-services/" className={linkClassName}>
                  Our Services
                </Link>{" "}
                and{" "}
                <Link href="/service-areas/" className={linkClassName}>
                  Service Areas
                </Link>
                .
              </p>
              <p>
                PMS is a private marine services business. It is not a
                government authority and this policy does not describe official
                statutory or regulatory functions.
              </p>
              <address className="not-italic">
                <p className="font-semibold text-pms-navy">{BUSINESS_NAME}</p>
                {BUSINESS_ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-3">
                  Website:{" "}
                  <a
                    href="https://peacemarineservices.com.au/"
                    className={linkClassName}
                  >
                    https://peacemarineservices.com.au/
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={PHONE_HREF} className={linkClassName}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Secondary phone:{" "}
                  <a href={OFFICE_PHONE_HREF} className={linkClassName}>
                    {OFFICE_PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={EMAIL_HREF} className={linkClassName}>
                    {EMAIL}
                  </a>
                </p>
                <p>
                  Additional email:{" "}
                  <a href={EMAIL_SECONDARY_HREF} className={linkClassName}>
                    {EMAIL_SECONDARY}
                  </a>
                </p>
              </address>
            </div>
          </section>

          <section aria-labelledby="privacy-what">
            <h2
              id="privacy-what"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              2. What Personal Information We May Collect
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                Depending on how you interact with PMS, we may collect
                information such as:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Full name</li>
                <li>Company or organisation name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Vessel name</li>
                <li>Vessel type</li>
                <li>Vessel or project location</li>
                <li>Requested marine service</li>
                <li>Preferred inspection date</li>
                <li>Information included in enquiries or messages</li>
                <li>
                  Information you voluntarily provide during business
                  communications
                </li>
                <li>
                  Limited technical information generated when someone visits
                  the website, where the hosting or browser environment records
                  it
                </li>
              </ul>
              <p>
                Some of this information is personal information, such as your
                name, email address and phone number. Other details relate to a
                vessel or project, such as vessel name, vessel type, location
                and requested service. Vessel or project details may still
                identify a person when they are combined with contact
                information.
              </p>
              <p>
                PMS does not, through this website, request passport numbers,
                driver licence numbers, payment card details, medical
                information or biometric information. Please do not include
                sensitive information in a website form unless it is clearly
                necessary for the enquiry and you choose to provide it.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-how">
            <h2
              id="privacy-how"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              3. How We Collect Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS generally collects personal information directly from the
                person providing it. This may occur through:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Website contact forms</li>
                <li>Request an Inspection forms</li>
                <li>Direct email</li>
                <li>Telephone communication</li>
                <li>Business and service enquiries</li>
                <li>Information provided voluntarily in other correspondence</li>
              </ul>
              <p>
                You can also send an enquiry through the{" "}
                <Link href="/contact/" className={linkClassName}>
                  contact page
                </Link>
                .
              </p>
              <p>
                This website uses Google Analytics 4 to understand how the
                public Next.js site is used. It does not currently include an
                advertising pixel or cookie-consent platform. Some pages may
                include embedded YouTube videos using privacy-enhanced embeds.
                Playing those videos may involve YouTube or Google technologies
                outside PMS&apos;s control.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-why">
            <h2
              id="privacy-why"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              4. Why We Collect and Use Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>PMS may collect and use personal information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to enquiries</li>
                <li>Respond to inspection or survey requests</li>
                <li>Understand vessel and service requirements</li>
                <li>Prepare or discuss quotations</li>
                <li>Schedule inspections or surveys</li>
                <li>Communicate about marine services</li>
                <li>Provide requested services</li>
                <li>Maintain business records</li>
                <li>Manage customer and business relationships</li>
                <li>
                  Improve website functionality and user experience where
                  applicable
                </li>
                <li>
                  Meet legal or regulatory obligations where they apply
                </li>
                <li>
                  Protect the security and integrity of the website and
                  business
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="privacy-use">
            <h2
              id="privacy-use"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              5. How We Use Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS uses personal information for legitimate business purposes
                connected with the reason it was collected, the marine services
                requested, related communications, applicable legal
                obligations, or other uses permitted by law.
              </p>
              <p>
                PMS does not use personal information for unrelated purposes
                simply because it has been provided. If a new purpose is
                unrelated to the original enquiry or service, PMS will consider
                whether further notice or consent is appropriate in the
                circumstances.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-disclose">
            <h2
              id="privacy-disclose"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              6. When We May Disclose Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS may disclose personal information where reasonably necessary
                for legitimate business purposes, or where required or
                permitted by law. This may include disclosure to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  PMS personnel or contractors involved in providing the
                  requested services
                </li>
                <li>Professional advisers where appropriate</li>
                <li>
                  Technology or service providers needed to operate relevant
                  website or business functions
                </li>
                <li>
                  Regulatory, government or law enforcement bodies where
                  legally required or authorised
                </li>
                <li>
                  Other parties where you have requested or authorised the
                  disclosure
                </li>
              </ul>
              <p>
                PMS does not sell personal information as a business practice.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-overseas">
            <h2
              id="privacy-overseas"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              7. Overseas Disclosure of Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                Some technology or service providers used by a business may
                process or store information outside Australia. The exact
                location of processing or storage may depend on the services
                and providers actually used.
              </p>
              <p>
                Where personal information is disclosed overseas, PMS will take
                reasonable steps appropriate to the circumstances. This policy
                does not list specific countries or providers because those
                details can change with the tools used to operate the website
                and business communications.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2
              id="privacy-cookies"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              8. Cookies and Website Technologies
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                Cookies are small files that a website or related service may
                store in a browser. They can support basic website operation,
                remember preferences, or, in some cases, help a third-party
                service function.
              </p>
              <p>
                This PMS website uses Google Analytics 4 (measurement ID
                G-DKZ9H681E2) on the public Next.js frontend. Analytics is not
                gated behind a cookie-consent banner on this site. PMS does
                not currently use an advertising pixel and does not operate a
                newsletter subscription system on this website.
              </p>
              <p>
                Google Analytics may set cookies or similar storage to measure
                visits and page views. The website may also use limited
                technical storage or cookies that are necessary for hosting,
                security or basic page operation. Some pages include embedded
                YouTube videos. If you play an embedded video, YouTube may
                collect information according to Google&apos;s own privacy
                practices.
              </p>
              <p>
                You can usually control cookies through your browser settings.
                Blocking some cookies may affect how parts of the website or
                embedded content work.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-security">
            <h2
              id="privacy-security"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              9. How We Protect Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS takes reasonable steps appropriate to the circumstances to
                protect personal information from unauthorised access, misuse,
                interference, loss, unauthorised disclosure and unauthorised
                modification.
              </p>
              <p>
                Those steps depend on the type of information, how it is held
                and the systems used at the time. No method of internet
                transmission or electronic storage can be guaranteed completely
                secure.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2
              id="privacy-retention"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              10. How Long We Keep Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS retains personal information only for as long as reasonably
                necessary for the purposes for which it was collected,
                legitimate business requirements, record-keeping, dispute
                resolution, security and applicable legal obligations.
              </p>
              <p>
                When information is no longer required, PMS may securely
                delete, destroy or de-identify it where appropriate.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-access">
            <h2
              id="privacy-access"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              11. Accessing and Correcting Your Personal Information
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                You may contact PMS to request access to personal information
                PMS holds about you, or to request correction of information
                that is inaccurate or incomplete.
              </p>
              <p>
                Email:{" "}
                <a href={EMAIL_HREF} className={linkClassName}>
                  {EMAIL}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={PHONE_HREF} className={linkClassName}>
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                PMS may need to verify your identity before providing or
                changing information. There may be circumstances where access
                or correction cannot be given in full, including where the law
                permits or requires that outcome. If that happens, PMS will
                explain the position as far as it reasonably can.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-complaints">
            <h2
              id="privacy-complaints"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              12. Privacy Complaints
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                If you have a privacy concern, please contact PMS first so the
                matter can be reviewed.
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Contact PMS using the published contact details.</li>
                <li>
                  Describe the privacy concern and any relevant information.
                </li>
                <li>
                  PMS will review the concern and respond within a reasonable
                  period appropriate to the circumstances.
                </li>
              </ol>
              <p>
                Email:{" "}
                <a href={EMAIL_HREF} className={linkClassName}>
                  {EMAIL}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={PHONE_HREF} className={linkClassName}>
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                If the concern cannot be resolved and the Privacy Act applies
                to the relevant circumstances, you may be able to contact the{" "}
                <a
                  href="https://www.oaic.gov.au/"
                  className={linkClassName}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Office of the Australian Information Commissioner (OAIC)
                </a>
                . This policy does not determine whether a particular matter is
                covered by the Privacy Act.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-marketing">
            <h2
              id="privacy-marketing"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              13. Direct Marketing
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                PMS may contact people for business communications connected
                with an enquiry or requested marine service, where that is
                appropriate and permitted by applicable law.
              </p>
              <p>
                This website does not currently operate a newsletter or
                marketing subscription form. If you do not wish to receive
                certain marketing communications from PMS, please contact PMS
                using the details in this policy.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-links">
            <h2
              id="privacy-links"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              14. Third-Party Websites and Links
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                The PMS website may contain links to third-party websites,
                including LinkedIn, Facebook, X, Google Maps and YouTube.
                External websites operate under their own privacy policies.
              </p>
              <p>
                PMS is not responsible for the privacy practices of external
                websites. A link is provided for convenience and does not mean
                PMS endorses those privacy practices. Related questions about
                PMS services are also covered on the{" "}
                <Link href="/faq/" className={linkClassName}>
                  FAQ
                </Link>{" "}
                page.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-children">
            <h2
              id="privacy-children"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              15. Children&apos;s Privacy
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                The PMS website and marine services are intended for business
                and professional users. They are not specifically directed at
                children.
              </p>
              <p>
                PMS does not knowingly collect children&apos;s personal
                information for marketing purposes.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2
              id="privacy-changes"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              16. Changes to This Privacy Policy
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>PMS may update this policy when:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>business practices change</li>
                <li>website technology changes</li>
                <li>legal or privacy requirements change</li>
                <li>information handling practices change</li>
              </ul>
              <p>
                The updated version will be published on this page with an
                updated &quot;Last updated&quot; date.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2
              id="privacy-contact"
              className="text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl"
            >
              17. Contact Us
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-pms-muted sm:text-[15px]">
              <p>
                Contact PMS if you have a question about this Privacy Policy,
                want to request access to or correction of personal
                information, or want to raise a privacy concern.
              </p>
              <address className="not-italic">
                <p className="font-semibold text-pms-navy">{BUSINESS_NAME}</p>
                {BUSINESS_ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-3">
                  Phone:{" "}
                  <a href={PHONE_HREF} className={linkClassName}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Secondary:{" "}
                  <a href={OFFICE_PHONE_HREF} className={linkClassName}>
                    {OFFICE_PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={EMAIL_HREF} className={linkClassName}>
                    {EMAIL}
                  </a>
                </p>
                <p>
                  Additional email:{" "}
                  <a href={EMAIL_SECONDARY_HREF} className={linkClassName}>
                    {EMAIL_SECONDARY}
                  </a>
                </p>
              </address>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
