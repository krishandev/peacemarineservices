import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-16">
        <figure className="w-full min-w-0 lg:order-last">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-pms-line bg-pms-wash">
            <Image
              src="/images/services/marine-safety-inspection.webp"
              alt="Inspector checking fire hoses and safety equipment in a commercial vessel corridor"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
            Who We Are
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveying, Inspection &amp; Compliance Support
          </h2>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS Peace Marine Services is a marine surveying and inspection
            company. We provide marine inspection, surveying, auditing and
            consultancy services for vessel owners, operators, ship managers
            and other maritime stakeholders who need independent inspection
            input.
          </p>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            Work can support vessel safety, inspection requirements,
            operational readiness, marine documentation, technical assessment
            and auditing. The exact scope depends on the vessel, the
            assignment and the applicable regulatory framework.
          </p>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            Services are arranged around vessel operations and inspection
            needs. You can review our{" "}
            <Link
              href="/our-services/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine services
            </Link>{" "}
            or{" "}
            <Link
              href="/faq/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              frequently asked questions
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
