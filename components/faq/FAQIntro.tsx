import Link from "next/link";

export default function FAQIntro() {
  return (
    <section
      aria-labelledby="faq-hero-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-cyan uppercase">
          PMS Peace Marine Services
        </p>
        <h1
          id="faq-hero-heading"
          className="mt-3 max-w-3xl text-[1.75rem] leading-tight font-semibold tracking-tight break-words text-white sm:text-4xl"
        >
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">
          Find answers to common questions about PMS Peace Marine Services,
          marine surveying, vessel inspections, AMSA/DCV preparation, marine
          compliance support, technical inspections, audits, cargo surveys,
          bunker surveys and our service areas across Western Australia. For
          longer checklists, see{" "}
          <Link
            href="/guides/"
            className="font-semibold text-white underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            marine guides and resources
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
