import Link from "next/link";
import type { ReactNode } from "react";
import {
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

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}

export type FAQHubItem = {
  question: string;
  answer: ReactNode;
  schemaAnswer: string;
};

export type FAQHubCategory = {
  id: string;
  title: string;
  navLabel: string;
  items: FAQHubItem[];
};

export const faqHubCategories: FAQHubCategory[] = [
  {
    id: "general",
    title: "General Marine Surveyor Questions",
    navLabel: "General",
    items: [
      {
        question: "What does a marine surveyor do?",
        schemaAnswer:
          "A marine surveyor inspects a vessel, its equipment, systems and relevant records to assess condition, safety or another defined requirement, then reports findings within the agreed scope. The work may include condition assessment, inspection, technical observations and written reporting.",
        answer: (
          <>
            <p>
              A marine surveyor inspects a vessel, its equipment, systems and
              relevant records to assess condition, safety or another defined
              requirement, then reports the findings.
            </p>
            <p>
              Depending on the agreed scope, that can include condition
              assessment, inspection, technical observations and a written
              report. The exact work depends on the vessel, the purpose of the
              visit and the items included in the assignment.
            </p>
          </>
        ),
      },
      {
        question: "What types of marine inspection services does PMS provide?",
        schemaAnswer:
          "PMS Peace Marine Services provides marine survey, inspection, audit, technical consultancy and inspection-preparation services. The services offered for a particular job depend on the vessel, location and agreed scope.",
        answer: (
          <>
            <p>
              PMS Peace Marine Services provides marine survey, inspection,
              audit, technical consultancy and inspection-preparation services.
            </p>
            <p>
              The services offered for a particular job depend on the vessel,
              location and agreed scope. The full list is on the{" "}
              <InlineLink href="/our-services/">marine services</InlineLink>{" "}
              page, and company background is on{" "}
              <InlineLink href="/about-us/">About PMS</InlineLink>.
            </p>
          </>
        ),
      },
      {
        question: "What types of vessels can PMS inspect?",
        schemaAnswer:
          "PMS can discuss inspection of commercial and other vessels where the work is within an agreed scope. The appropriate inspection depends on the vessel type, purpose, condition, location and requested work. Not every vessel type or every inspection is suitable for every assignment.",
        answer: (
          <>
            <p>
              PMS can discuss inspection of commercial and other vessels where
              the work is within an agreed scope.
            </p>
            <p>
              The appropriate inspection depends on the vessel type, purpose,
              condition, location and requested work. Not every vessel type or
              every inspection is suitable for every assignment.
            </p>
          </>
        ),
      },
      {
        question: "What information should I provide when requesting an inspection?",
        schemaAnswer:
          "It helps to include the vessel name, vessel type, location, requested service, inspection objective, preferred date and any relevant documentation. Those details allow the inspection scope to be discussed before attendance.",
        answer: (
          <>
            <p>
              It helps to include the vessel name, vessel type, location,
              requested service, inspection objective, preferred date and any
              relevant documentation.
            </p>
            <p>
              Those details allow the inspection scope to be discussed before
              attendance. A longer document and access list is in the{" "}
              <InlineLink href="/guides/marine-inspection-preparation-checklist/">
                marine inspection preparation checklist
              </InlineLink>
              . You can send an enquiry through the{" "}
              <InlineLink href="/contact/">contact form</InlineLink>.
            </p>
          </>
        ),
      },
      {
        question: "How do I request a marine inspection?",
        schemaAnswer:
          "You can request a marine inspection through the PMS contact page or by calling +61 456 980 609. Include the vessel, location, requested service and preferred timing so the assignment can be discussed.",
        answer: (
          <>
            <p>
              You can request a marine inspection through the PMS{" "}
              <InlineLink href="/contact/">contact page</InlineLink> or by
              calling {PHONE_DISPLAY}.
            </p>
            <p>
              Include the vessel, location, requested service and preferred
              timing so the assignment can be discussed. PMS does not promise
              availability for a particular date until that is confirmed.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "marine-inspection",
    title: "Marine Survey & Inspection FAQs",
    navLabel: "Inspections",
    items: [
      {
        question: "What is a marine safety inspection?",
        schemaAnswer:
          "A marine safety inspection reviews a vessel's condition, safety equipment and related arrangements within an agreed scope. It is a private inspection service and is not an official AMSA inspection.",
        answer: (
          <>
            <p>
              A marine safety inspection reviews a vessel&apos;s condition,
              safety equipment and related arrangements within an agreed scope.
            </p>
            <p>
              Typical areas can include fire safety, lifesaving equipment,
              machinery observations, documentation and visible deficiencies,
              depending on the vessel and requested work. It is a private
              inspection service and is not an official AMSA inspection. See{" "}
              <InlineLink href="/marine-safety-inspection-in-australia/">
                marine safety inspection in Australia
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What can a marine inspection report include?",
        schemaAnswer:
          "A marine inspection report may include observations, findings, photographs where appropriate, documentation notes and recommendations, depending on the assignment. Report content follows the agreed scope and the conditions observed at the time of inspection.",
        answer: (
          <>
            <p>
              A marine inspection report may include observations, findings,
              photographs where appropriate, documentation notes and
              recommendations, depending on the assignment.
            </p>
            <p>
              Report content follows the agreed scope and the conditions
              observed at the time of inspection. PMS does not promise a single
              report format for every service.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS inspect a vessel before repairs or modifications?",
        schemaAnswer:
          "Yes, where requested and within an agreed scope. Technical inspection and marine engineering consultancy may be used to observe condition, machinery, equipment or documentation before or during repair and modification work.",
        answer: (
          <>
            <p>
              Yes, where requested and within an agreed scope. Technical
              inspection and marine engineering consultancy may be used to
              observe condition, machinery, equipment or documentation before
              or during repair and modification work.
            </p>
            <p>
              This is inspection and consultancy support, not statutory
              approval or classification society approval. See{" "}
              <InlineLink href="/technical-inspection-and-marine-engineering-consultancy/">
                technical inspection and marine engineering consultancy
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Can PMS provide marine inspection support after vessel damage?",
        schemaAnswer:
          "Yes, condition assessment or inspection support may be discussed after vessel damage, depending on the nature of the damage, access and the requested scope. This is not an emergency response service.",
        answer: (
          <>
            <p>
              Yes, condition assessment or inspection support may be discussed
              after vessel damage, depending on the nature of the damage,
              access and the requested scope.
            </p>
            <p>
              This is inspection and reporting support. It is not an emergency
              response service and does not replace the responsibilities of the
              vessel operator, harbour authority or other competent parties.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "amsa-dcv",
    title: "AMSA & Domestic Commercial Vessel FAQs",
    navLabel: "AMSA & DCV",
    items: [
      {
        question: "What is a Domestic Commercial Vessel (DCV)?",
        schemaAnswer:
          "A Domestic Commercial Vessel is an Australian vessel used in commercial operations under Australia's domestic commercial vessel laws and related standards, where those frameworks apply. Whether a vessel is a DCV depends on how it is used and the applicable requirements.",
        answer: (
          <>
            <p>
              A Domestic Commercial Vessel is an Australian vessel used in
              commercial operations under Australia&apos;s domestic commercial
              vessel laws and related standards, where those frameworks apply.
            </p>
            <p>
              Whether a vessel is a DCV depends on how it is used and the
              applicable requirements. Official classification of a vessel
              remains a matter for the relevant competent authority. See the{" "}
              <InlineLink href="/guides/australian-dcv-survey-requirements/">
                Australian DCV survey requirements guide
              </InlineLink>{" "}
              for a practical overview with official AMSA links.
            </p>
          </>
        ),
      },
      {
        question: "Does PMS provide AMSA-related inspection support?",
        schemaAnswer:
          "Yes, PMS can provide AMSA-related inspection and preparation support where applicable and within an agreed scope. PMS is not AMSA and does not make official AMSA decisions.",
        answer: (
          <>
            <p>
              Yes, PMS can provide AMSA-related inspection and preparation
              support where applicable and within an agreed scope.
            </p>
            <p>
              PMS is not AMSA, is not a government authority and does not make
              official AMSA decisions. See{" "}
              <InlineLink href="/amsa-dcv-marine-surveyor/">
                AMSA DCV marine surveyor support
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What is a pre-AMSA inspection?",
        schemaAnswer:
          "A pre-AMSA inspection is a preparatory assessment intended to identify potential issues before an official AMSA inspection. It is not a substitute for AMSA's own inspection or decision.",
        answer: (
          <>
            <p>
              A pre-AMSA inspection is a preparatory assessment intended to
              identify potential issues before an official AMSA inspection.
            </p>
            <p>
              It is not a substitute for AMSA&apos;s own inspection or
              decision. Further detail is on the{" "}
              <InlineLink href="/pre-amsa-inspection/">
                pre-AMSA inspection
              </InlineLink>{" "}
              page.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS guarantee AMSA approval?",
        schemaAnswer:
          "No. PMS can provide inspection and preparation support, but official AMSA decisions remain with AMSA or the relevant competent authority. PMS cannot influence or control those decisions.",
        answer: (
          <>
            <p>
              No. PMS can provide inspection and preparation support, but
              official AMSA decisions remain with AMSA or the relevant
              competent authority.
            </p>
            <p>
              PMS cannot influence or control those decisions and does not
              guarantee approval, certification or a successful official
              inspection.
            </p>
          </>
        ),
      },
      {
        question: "Does PMS issue official AMSA certificates?",
        schemaAnswer:
          "No. Official statutory certificates and related decisions are issued by the relevant competent authority or authorised organisation where applicable. PMS provides inspection, survey support and preparation services; it does not issue official AMSA certificates.",
        answer: (
          <>
            <p>
              No. Official statutory certificates and related decisions are
              issued by the relevant competent authority or authorised
              organisation where applicable.
            </p>
            <p>
              PMS provides inspection, survey support and preparation services.
              It does not issue official AMSA certificates.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "pre-amsa",
    title: "Pre-AMSA Inspection FAQs",
    navLabel: "Pre-AMSA",
    items: [
      {
        question: "What does a pre-AMSA inspection check?",
        schemaAnswer:
          "Depending on the assignment, a pre-AMSA inspection may review vessel condition, safety equipment, emergency preparedness, documentation, operational readiness and visible deficiencies. The exact scope depends on the vessel and the requested work.",
        answer: (
          <>
            <p>
              Depending on the assignment, a pre-AMSA inspection may review
              vessel condition, safety equipment, emergency preparedness,
              documentation, operational readiness and visible deficiencies.
            </p>
            <p>
              The exact scope depends on the vessel and the requested work. See{" "}
              <InlineLink href="/pre-amsa-inspection/">
                pre-AMSA inspection
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "When should I arrange a pre-AMSA inspection?",
        schemaAnswer:
          "Owners and operators may consider a pre-AMSA inspection before an expected official inspection, or when they want an independent review to identify potential deficiencies. Timing depends on the vessel, access and the official inspection arrangements.",
        answer: (
          <>
            <p>
              Owners and operators may consider a pre-AMSA inspection before an
              expected official inspection, or when they want an independent
              review to identify potential deficiencies.
            </p>
            <p>
              Timing depends on the vessel, access and the official inspection
              arrangements. PMS does not set AMSA attendance dates.
            </p>
          </>
        ),
      },
      {
        question: "Does a pre-AMSA inspection guarantee a successful AMSA inspection?",
        schemaAnswer:
          "No. A pre-AMSA inspection is a preparation service and cannot guarantee the outcome of an official inspection. Official decisions remain with AMSA or the relevant competent authority.",
        answer: (
          <>
            <p>
              No. A pre-AMSA inspection is a preparation service and cannot
              guarantee the outcome of an official inspection.
            </p>
            <p>
              Official decisions remain with AMSA or the relevant competent
              authority. Preparation support is described on the{" "}
              <InlineLink href="/pre-amsa-inspection/">
                pre-AMSA inspection
              </InlineLink>{" "}
              page.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "pre-purchase",
    title: "Pre-Purchase Marine Inspection FAQs",
    navLabel: "Pre-purchase",
    items: [
      {
        question: "Why should I arrange a pre-purchase marine inspection?",
        schemaAnswer:
          "A pre-purchase marine inspection can help a prospective buyer understand a vessel's apparent condition before making a purchase decision. It provides independent observations within the agreed scope at the time of inspection.",
        answer: (
          <>
            <p>
              A pre-purchase marine inspection can help a prospective buyer
              understand a vessel&apos;s apparent condition before making a
              purchase decision.
            </p>
            <p>
              It provides independent observations within the agreed scope at
              the time of inspection. See{" "}
              <InlineLink href="/pre-purchase-inspection/">
                pre-purchase marine inspection
              </InlineLink>{" "}
              and the{" "}
              <InlineLink href="/guides/pre-purchase-vessel-inspection-checklist/">
                pre-purchase vessel inspection checklist
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What does a pre-purchase inspection cover?",
        schemaAnswer:
          "Scope can include visible condition, machinery observations, safety equipment, structural observations within the agreed scope, maintenance, documentation and apparent defects. Coverage depends on the vessel, access and the requested inspection.",
        answer: (
          <>
            <p>
              Scope can include visible condition, machinery observations,
              safety equipment, structural observations within the agreed
              scope, maintenance, documentation and apparent defects.
            </p>
            <p>
              Coverage depends on the vessel, access and the requested
              inspection. Hidden or inaccessible defects may not be identified.
            </p>
          </>
        ),
      },
      {
        question: "Does a pre-purchase inspection guarantee the vessel has no defects?",
        schemaAnswer:
          "No. An inspection is based on its defined scope and conditions observable at the time of inspection. It cannot guarantee that a vessel has no defects or that it will perform in a particular way after purchase.",
        answer: (
          <>
            <p>
              No. An inspection is based on its defined scope and conditions
              observable at the time of inspection.
            </p>
            <p>
              It cannot guarantee that a vessel has no defects or that it will
              perform in a particular way after purchase.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS help with pre-purchase inspections across Western Australia?",
        schemaAnswer:
          "Yes, PMS can discuss pre-purchase inspection support across its Western Australia service area, depending on the vessel, location and assignment. PMS does not operate a physical office at every listed location.",
        answer: (
          <>
            <p>
              Yes, PMS can discuss pre-purchase inspection support across its
              Western Australia service area, depending on the vessel, location
              and assignment.
            </p>
            <p>
              PMS does not operate a physical office at every listed location.
              Coverage is listed on the{" "}
              <InlineLink href="/service-areas/">service areas</InlineLink>{" "}
              page and on{" "}
              <InlineLink href="/pre-purchase-inspection/">
                pre-purchase inspection
              </InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "cargo",
    title: "Cargo Survey FAQs",
    navLabel: "Cargo",
    items: [
      {
        question: "What is a cargo survey?",
        schemaAnswer:
          "A cargo survey records observations about cargo condition, loading or discharge operations, apparent damage, quantity-related matters where applicable, and related documentation. The work depends on the assignment and agreed scope.",
        answer: (
          <>
            <p>
              A cargo survey records observations about cargo condition,
              loading or discharge operations, apparent damage, quantity-related
              matters where applicable, and related documentation.
            </p>
            <p>
              The work depends on the assignment and agreed scope. Survey
              findings do not determine legal liability. See{" "}
              <InlineLink href="/cargo-surveyor/">
                cargo surveyor services
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What can a cargo survey report include?",
        schemaAnswer:
          "A cargo survey report may include findings and observations appropriate to the agreed scope, such as condition notes, discrepancy records and related documentation observations. Content depends on the assignment.",
        answer: (
          <>
            <p>
              A cargo survey report may include findings and observations
              appropriate to the agreed scope, such as condition notes,
              discrepancy records and related documentation observations.
            </p>
            <p>
              Content depends on the assignment and what could be observed at
              the time of the survey.
            </p>
          </>
        ),
      },
      {
        question: "Does PMS provide cargo survey services in Western Australia?",
        schemaAnswer:
          "Yes. Cargo survey support may be available in Western Australia depending on the location, assignment and agreed scope. PMS does not operate a physical office at every listed location.",
        answer: (
          <>
            <p>
              Yes. Cargo survey support may be available in Western Australia
              depending on the location, assignment and agreed scope.
            </p>
            <p>
              PMS does not operate a physical office at every listed location.
              See{" "}
              <InlineLink href="/cargo-surveyor/">cargo surveyor</InlineLink>{" "}
              and{" "}
              <InlineLink href="/service-areas/">service areas</InlineLink>.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "bunker",
    title: "Bunker Survey FAQs",
    navLabel: "Bunker",
    items: [
      {
        question: "What is a bunker survey?",
        schemaAnswer:
          "A bunker survey may involve quantity assessment, bunker delivery documentation, transfer observation and sampling observation, depending on the agreed scope. It records measurements and related observations during fuel delivery where bunkering applies.",
        answer: (
          <>
            <p>
              A bunker survey may involve quantity assessment, bunker delivery
              documentation, transfer observation and sampling observation,
              depending on the agreed scope.
            </p>
            <p>
              It records measurements and related observations during fuel
              delivery where bunkering applies. See{" "}
              <InlineLink href="/bunker-surveyor/">
                bunker surveyor services
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Does a bunker survey include laboratory fuel testing?",
        schemaAnswer:
          "No. A bunker survey does not automatically include laboratory fuel-quality analysis. Laboratory testing is a separate activity. PMS does not operate a fuel laboratory or provide laboratory analysis as part of bunker surveying.",
        answer: (
          <>
            <p>
              No. A bunker survey does not automatically include laboratory
              fuel-quality analysis. Laboratory testing is a separate activity.
            </p>
            <p>
              PMS does not operate a fuel laboratory or provide laboratory
              analysis as part of bunker surveying.
            </p>
          </>
        ),
      },
      {
        question: "What documents are relevant to a bunker survey?",
        schemaAnswer:
          "Relevant documents can include the Bunker Delivery Note and related transfer records, where applicable. Other delivery or tank records may also be reviewed if they form part of the agreed scope.",
        answer: (
          <>
            <p>
              Relevant documents can include the Bunker Delivery Note and
              related transfer records, where applicable.
            </p>
            <p>
              Other delivery or tank records may also be reviewed if they form
              part of the agreed scope. See{" "}
              <InlineLink href="/bunker-surveyor/">bunker surveyor</InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Marine Inspection & Consultancy FAQs",
    navLabel: "Technical",
    items: [
      {
        question: "What is a technical marine inspection?",
        schemaAnswer:
          "A technical marine inspection is an inspection or assessment of machinery, equipment, technical systems and vessel condition within the agreed scope. Coverage depends on the vessel, the technical issue and the requested work.",
        answer: (
          <>
            <p>
              A technical marine inspection is an inspection or assessment of
              machinery, equipment, technical systems and vessel condition
              within the agreed scope.
            </p>
            <p>
              Coverage depends on the vessel, the technical issue and the
              requested work. See{" "}
              <InlineLink href="/technical-inspection-and-marine-engineering-consultancy/">
                technical inspection and marine engineering consultancy
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Can PMS provide marine engineering consultancy?",
        schemaAnswer:
          "Yes, PMS can provide marine engineering consultancy as inspection and advisory support relating to machinery, equipment, repairs, modifications and technical documentation, where agreed. This page does not claim professional engineering registration or statutory engineering approval.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine engineering consultancy as inspection
              and advisory support relating to machinery, equipment, repairs,
              modifications and technical documentation, where agreed.
            </p>
            <p>
              This does not claim professional engineering registration or
              statutory engineering approval.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS inspect vessel repairs or modifications?",
        schemaAnswer:
          "Yes, technical inspection or consultancy support may be available for repairs or modifications, depending on the project and agreed scope. PMS is not the shipyard, certifying authority or classification society.",
        answer: (
          <>
            <p>
              Yes, technical inspection or consultancy support may be available
              for repairs or modifications, depending on the project and agreed
              scope.
            </p>
            <p>
              PMS is not the shipyard, certifying authority or classification
              society. Related work is described on{" "}
              <InlineLink href="/technical-inspection-and-marine-engineering-consultancy/">
                technical inspection and marine engineering consultancy
              </InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "flag-psc-vetting",
    title: "Flag State, Port State Control & Vetting FAQs",
    navLabel: "Flag, PSC & vetting",
    items: [
      {
        question: "What is Flag State inspection?",
        schemaAnswer:
          "A Flag State inspection is an inspection of a vessel against the requirements of the administration under which the vessel is registered. PMS is not a Flag State authority.",
        answer: (
          <>
            <p>
              A Flag State inspection is an inspection of a vessel against the
              requirements of the administration under which the vessel is
              registered.
            </p>
            <p>
              PMS is not a Flag State authority. Preparation and inspection
              support is described on{" "}
              <InlineLink href="/flag-state-inspection/">
                Flag State inspection
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What is Port State Control?",
        schemaAnswer:
          "Port State Control is the inspection of foreign ships by authorities in a port state according to applicable international and national requirements. Official PSC inspections and decisions remain with the relevant authority.",
        answer: (
          <>
            <p>
              Port State Control is the inspection of foreign ships by
              authorities in a port state according to applicable international
              and national requirements.
            </p>
            <p>
              Official PSC inspections and decisions remain with the relevant
              authority. PMS is not a Port State Control authority. The{" "}
              <InlineLink href="/guides/pre-psc-inspection-checklist/">
                Pre-PSC inspection checklist for Australian ports
              </InlineLink>{" "}
              covers preparation steps and limitations.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS provide pre-PSC inspection support?",
        schemaAnswer:
          "Yes. PMS can provide preparation and inspection support before an applicable Port State Control inspection. Official PSC decisions remain with the relevant authority, and PMS does not guarantee clearance or detention avoidance.",
        answer: (
          <>
            <p>
              Yes. PMS can provide preparation and inspection support before an
              applicable Port State Control inspection.
            </p>
            <p>
              Official PSC decisions remain with the relevant authority, and
              PMS does not guarantee clearance or detention avoidance. See{" "}
              <InlineLink href="/pre-psc-inspection-in-australia/">
                pre-PSC inspection in Australia
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What is a safety vetting inspection?",
        schemaAnswer:
          "A safety vetting inspection is a commercial or operator-driven assessment of a vessel's safety and operational arrangements. Pre-vetting support can help identify issues before an external vetting inspection. Frameworks such as SIRE, CDI, OCIMF or RightShip may be relevant context for some vessels.",
        answer: (
          <>
            <p>
              A safety vetting inspection is a commercial or operator-driven
              assessment of a vessel&apos;s safety and operational
              arrangements. Pre-vetting support can help identify issues before
              an external vetting inspection.
            </p>
            <p>
              Frameworks such as SIRE, CDI, OCIMF or RightShip may be relevant
              context for some vessels. PMS is not accredited by those
              organisations. See{" "}
              <InlineLink href="/safety-vetting-inspector-in-australia/">
                safety vetting inspector in Australia
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Can PMS guarantee a vessel's vetting score or acceptance?",
        schemaAnswer:
          "No. PMS can provide preparation and inspection support, but final decisions belong to the relevant vetting organisation, charterer, operator or other decision-maker. PMS does not claim official SIRE, CDI, OCIMF or RightShip accreditation.",
        answer: (
          <>
            <p>
              No. PMS can provide preparation and inspection support, but final
              decisions belong to the relevant vetting organisation, charterer,
              operator or other decision-maker.
            </p>
            <p>
              PMS does not claim official SIRE, CDI, OCIMF or RightShip
              accreditation and does not guarantee a vetting score or
              acceptance.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "audits",
    title: "ISM, ISPS & MLC Audit FAQs",
    navLabel: "Audits",
    items: [
      {
        question: "What is an ISM internal audit?",
        schemaAnswer:
          "An ISM internal audit reviews how a company's safety management system is implemented on board and ashore, within an agreed scope. It is an internal review, not automatic statutory certification.",
        answer: (
          <>
            <p>
              An ISM internal audit reviews how a company&apos;s safety
              management system is implemented on board and ashore, within an
              agreed scope.
            </p>
            <p>
              It is an internal review, not automatic statutory certification.
              See{" "}
              <InlineLink href="/internal-audits-for-ism-isps-and-mlc/">
                internal audits for ISM, ISPS and MLC
              </InlineLink>{" "}
              and the{" "}
              <InlineLink href="/guides/ism-isps-mlc-audit-preparation/">
                ISM, ISPS and MLC audit preparation guide
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "What is an ISPS internal audit?",
        schemaAnswer:
          "An ISPS internal audit reviews how ship security arrangements are implemented against the agreed ISPS-related scope. It is consultancy and review support, not an official security certification.",
        answer: (
          <>
            <p>
              An ISPS internal audit reviews how ship security arrangements are
              implemented against the agreed ISPS-related scope.
            </p>
            <p>
              It is consultancy and review support, not an official security
              certification.
            </p>
          </>
        ),
      },
      {
        question: "What is an MLC internal audit?",
        schemaAnswer:
          "An MLC internal audit reviews seafarer living and working condition arrangements against the agreed Maritime Labour Convention-related scope. It does not automatically constitute statutory certification.",
        answer: (
          <>
            <p>
              An MLC internal audit reviews seafarer living and working
              condition arrangements against the agreed Maritime Labour
              Convention-related scope.
            </p>
            <p>
              It does not automatically constitute statutory certification or
              government approval.
            </p>
          </>
        ),
      },
      {
        question: "Can PMS help identify corrective actions?",
        schemaAnswer:
          "Yes. Audit and inspection findings can be documented, and corrective-action support can be discussed where agreed. Follow-up depends on the assignment and does not guarantee that a later official audit or inspection will have a particular outcome.",
        answer: (
          <>
            <p>
              Yes. Audit and inspection findings can be documented, and
              corrective-action support can be discussed where agreed.
            </p>
            <p>
              Follow-up depends on the assignment and does not guarantee that a
              later official audit or inspection will have a particular
              outcome.
            </p>
          </>
        ),
      },
      {
        question: "Does an internal audit automatically provide statutory certification?",
        schemaAnswer:
          "No. Internal audit and consultancy support should not be presented as statutory certification or government approval. Official certification remains with the relevant competent authority or authorised organisation.",
        answer: (
          <>
            <p>
              No. Internal audit and consultancy support should not be
              presented as statutory certification or government approval.
            </p>
            <p>
              Official certification remains with the relevant competent
              authority or authorised organisation. See{" "}
              <InlineLink href="/internal-audits-for-ism-isps-and-mlc/">
                internal audits for ISM, ISPS and MLC
              </InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "class",
    title: "Class-Related Marine Consultancy FAQs",
    navLabel: "Class consultancy",
    items: [
      {
        question: "What does class-related marine consultancy mean?",
        schemaAnswer:
          "Class-related marine consultancy may involve technical preparation, repair or modification support, documentation and inspection preparation connected with classification society requirements. PMS provides consultancy support; it does not issue class certificates.",
        answer: (
          <>
            <p>
              Class-related marine consultancy may involve technical
              preparation, repair or modification support, documentation and
              inspection preparation connected with classification society
              requirements.
            </p>
            <p>
              PMS provides consultancy support; it does not issue class
              certificates. See{" "}
              <InlineLink href="/class-related-consultant/">
                class-related marine consultancy
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Is PMS a classification society?",
        schemaAnswer:
          "No. PMS is not a classification society. PMS provides consultancy and inspection support, while classification decisions remain with the relevant classification society.",
        answer: (
          <>
            <p>No. PMS is not a classification society.</p>
            <p>
              PMS provides consultancy and inspection support, while
              classification decisions remain with the relevant classification
              society. See{" "}
              <InlineLink href="/class-related-consultant/">
                class-related marine consultancy
              </InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "service-areas",
    title: "Marine Surveyor Service Area FAQs",
    navLabel: "Service areas",
    items: [
      {
        question: "Where does PMS provide marine surveyor services?",
        schemaAnswer:
          "PMS provides marine surveyor service coverage across Western Australia, subject to the assignment and agreed scope. PMS does not operate a physical office at every listed location.",
        answer: (
          <>
            <p>
              PMS provides marine surveyor service coverage across Western
              Australia, subject to the assignment and agreed scope.
            </p>
            <p>
              PMS does not operate a physical office at every listed location.
              The full list is on{" "}
              <InlineLink href="/service-areas/">service areas</InlineLink>.
            </p>
          </>
        ),
      },
      {
        question: "Do you provide marine surveyor services in Perth?",
        schemaAnswer:
          "Yes, PMS can provide marine surveyor and inspection support connected with Perth, depending on the vessel and assignment. PMS does not claim a separate Perth office on this page.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine surveyor and inspection support
              connected with Perth, depending on the vessel and assignment.
            </p>
            <p>
              See{" "}
              <InlineLink href="/accredited-amsa-marine-surveyor-in-perth/">
                marine surveyor services in Perth
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide marine surveyor services in Fremantle?",
        schemaAnswer:
          "Yes, PMS can provide marine surveyor and inspection support connected with Fremantle, depending on the vessel and assignment.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine surveyor and inspection support
              connected with Fremantle, depending on the vessel and assignment.
            </p>
            <p>
              See{" "}
              <InlineLink href="/accredited-amsa-marine-surveyor-in-fremantle/">
                marine surveyor services in Fremantle
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide marine surveyor services in Kwinana?",
        schemaAnswer:
          "Yes, PMS can provide marine surveyor and inspection support connected with Kwinana, depending on the vessel and assignment.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine surveyor and inspection support
              connected with Kwinana, depending on the vessel and assignment.
            </p>
            <p>
              See{" "}
              <InlineLink href="/accredited-amsa-marine-surveyor-in-kwinana/">
                marine surveyor services in Kwinana
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide services in Bunbury, Albany and Esperance?",
        schemaAnswer:
          "Yes. PMS can discuss marine survey and inspection support connected with Bunbury, Albany and Esperance, depending on the vessel, location and assignment. These are service-coverage locations, not claims of a local office in each town.",
        answer: (
          <>
            <p>
              Yes. PMS can discuss marine survey and inspection support
              connected with Bunbury, Albany and Esperance, depending on the
              vessel, location and assignment.
            </p>
            <p>
              These are service-coverage locations, not claims of a local
              office in each town. See{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-bunbury/">
                Bunbury
              </InlineLink>
              ,{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-albany/">
                Albany
              </InlineLink>{" "}
              and{" "}
              <InlineLink href="/accredited-amsa-marine-surveyor-in-esperance/">
                Esperance
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide services in Geraldton?",
        schemaAnswer:
          "Yes, PMS can provide marine surveyor and inspection support connected with Geraldton, depending on the vessel and assignment. PMS does not claim a physical office in Geraldton.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine surveyor and inspection support
              connected with Geraldton, depending on the vessel and assignment.
            </p>
            <p>
              PMS does not claim a physical office in Geraldton. See{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-geraldton/">
                marine surveyor services in Geraldton
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide services in the Pilbara?",
        schemaAnswer:
          "Yes, PMS can provide marine surveyor and inspection support across the Pilbara region for agreed assignments. PMS does not operate a physical office throughout the Pilbara.",
        answer: (
          <>
            <p>
              Yes, PMS can provide marine surveyor and inspection support
              across the Pilbara region for agreed assignments.
            </p>
            <p>
              PMS does not operate a physical office throughout the Pilbara.
              See{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-pilbara/">
                marine surveyor services in the Pilbara
              </InlineLink>
              .
            </p>
          </>
        ),
      },
      {
        question: "Do you provide services in Karratha, Dampier and Port Hedland?",
        schemaAnswer:
          "Yes. PMS can discuss marine survey and inspection support connected with Karratha, Dampier and Port Hedland, depending on the vessel and assignment. These remain separate location pages and are not claims of a local office in each place.",
        answer: (
          <>
            <p>
              Yes. PMS can discuss marine survey and inspection support
              connected with Karratha, Dampier and Port Hedland, depending on
              the vessel and assignment.
            </p>
            <p>
              These remain separate location pages and are not claims of a
              local office in each place. See{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-karratha/">
                Karratha
              </InlineLink>
              ,{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-dampier/">
                Dampier
              </InlineLink>{" "}
              and{" "}
              <InlineLink href="/accredited-amsa-maritime-surveyor-in-port-hedland/">
                Port Hedland
              </InlineLink>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "booking",
    title: "Booking & Contact FAQs",
    navLabel: "Booking & contact",
    items: [
      {
        question: "How do I request an inspection?",
        schemaAnswer:
          "Request an inspection through the PMS contact page or by calling +61 456 980 609. Include enough vessel and location detail for the requested service to be discussed.",
        answer: (
          <>
            <p>
              Request an inspection through the PMS{" "}
              <InlineLink href="/contact/">contact page</InlineLink> or by
              calling {PHONE_DISPLAY}.
            </p>
            <p>
              Include enough vessel and location detail for the requested
              service to be discussed.
            </p>
          </>
        ),
      },
      {
        question: "What details should I include when contacting PMS?",
        schemaAnswer:
          "Include your name, company if applicable, vessel name, vessel type, location, requested service, preferred date and any relevant message or documents. Those details help the inspection scope to be discussed.",
        answer: (
          <>
            <p>
              Include your name, company if applicable, vessel name, vessel
              type, location, requested service, preferred date and any
              relevant message or documents.
            </p>
            <p>
              Those details help the inspection scope to be discussed. Use the{" "}
              <InlineLink href="/contact/">contact form</InlineLink> if you
              prefer to send them in writing.
            </p>
          </>
        ),
      },
      {
        question: "How can I contact PMS directly?",
        schemaAnswer:
          "You can call +61 456 980 609 or email info@pmsmarine.org. A secondary email address is pmsoffshore@outlook.com. Office phone +61 08 62492720 is also listed on the site contact details.",
        answer: (
          <>
            <p>
              You can call{" "}
              <a href={PHONE_HREF} className={linkClassName}>
                {PHONE_DISPLAY}
              </a>{" "}
              or email{" "}
              <a href={EMAIL_HREF} className={linkClassName}>
                {EMAIL}
              </a>
              . A secondary email address is{" "}
              <a href={EMAIL_SECONDARY_HREF} className={linkClassName}>
                {EMAIL_SECONDARY}
              </a>
              .
            </p>
            <p>
              The office phone{" "}
              <a href={OFFICE_PHONE_HREF} className={linkClassName}>
                {OFFICE_PHONE_DISPLAY}
              </a>{" "}
              is also listed on the site contact details. See the{" "}
              <InlineLink href="/contact/">contact page</InlineLink> for the
              enquiry form.
            </p>
          </>
        ),
      },
      {
        question: "Can I request an inspection for a specific date?",
        schemaAnswer:
          "Yes, you can provide a preferred date and time when you enquire. PMS can confirm availability separately and does not promise that a requested date will be available.",
        answer: (
          <>
            <p>
              Yes, you can provide a preferred date and time when you enquire.
            </p>
            <p>
              PMS can confirm availability separately and does not promise that
              a requested date will be available.
            </p>
          </>
        ),
      },
    ],
  },
];
