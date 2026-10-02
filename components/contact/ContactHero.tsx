export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-cyan uppercase">
          Contact
        </p>
        <h1
          id="contact-hero-heading"
          className="mt-3 max-w-3xl text-[1.75rem] leading-tight font-semibold tracking-tight text-white sm:text-4xl"
        >
          Contact PMS Peace Marine Services
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Contact PMS Peace Marine Services to discuss your marine inspection,
          survey, auditing or consultancy requirements.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-[15px]">
          Provide details about your vessel, required service, location or
          port, and preferred contact information so our team can understand
          your enquiry.
        </p>
      </div>
    </section>
  );
}
