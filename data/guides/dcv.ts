import { stockPhotos } from "@/data/site-images";
import type { Guide } from "@/data/guides/types";

export const dcvGuide: Guide = {
  slug: "australian-dcv-survey-requirements",
  path: "/guides/australian-dcv-survey-requirements/",
  h1: "Australian DCV Survey Requirements — A Practical Guide",
  summary:
    "A plain-English overview of domestic commercial vessel survey, certificates, SMS and preparation questions, with links to current AMSA guidance.",
  audience:
    "Domestic commercial vessel owners, operators, builders and vessel managers.",
  category: "Domestic commercial vessels",
  readingMinutes: 15,
  image: stockPhotos.dcvWorkboat,
  relatedService: {
    label: "AMSA DCV marine surveyor support",
    href: "/amsa-dcv-marine-surveyor/",
  },
  relatedGuideSlugs: [
    "marine-inspection-preparation-checklist",
    "pre-purchase-vessel-inspection-checklist",
  ],
  sources: [
    {
      label: "AMSA — Is it a domestic commercial vessel?",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/it-domestic-commercial-vessel",
      external: true,
    },
    {
      label: "AMSA — Domestic commercial vessel requirements",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-requirements",
      external: true,
    },
    {
      label: "AMSA — Survey standards for DCVs in survey",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/survey-standards-domestic-commercial-vessels-survey",
      external: true,
    },
    {
      label: "AMSA — Survey frequency for DCVs",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/survey-frequency-domestic-commercial-vessels",
      external: true,
    },
    {
      label: "AMSA — Domestic commercial vessel inspections",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-inspections",
      external: true,
    },
    {
      label: "AMSA — Find an accredited marine surveyor",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/find-accredited-marine-surveyor",
      external: true,
    },
    {
      label: "AMSA — My Boat",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/my-boat",
      external: true,
    },
  ],
  faqs: [
    {
      question: "Does every domestic commercial vessel need a Certificate of Survey?",
      answer:
        "No. AMSA states that a Certificate of Survey is required for vessels except those that qualify for non-survey approval, such as arrangements described under exemption 02 or exemption 40. Confirm the current position for the specific vessel with AMSA or an accredited surveyor.",
    },
    {
      question: "Is a safety management system required for all DCVs?",
      answer:
        "AMSA’s requirements table states that a safety management system is required for all domestic commercial vessels. The content and complexity of the SMS should match the operation. AMSA introduced updated SMS requirements from 1 June 2025, including simplified arrangements for some smaller, less complex vessels.",
    },
    {
      question: "Who can survey a DCV that needs a Certificate of Survey?",
      answer:
        "AMSA states that unless the vessel is built to class rules it can be surveyed by an accredited marine surveyor with accreditation in the relevant category, or by a recognised organisation. Use AMSA’s register to find an accredited surveyor. PMS consultancy or preparation support is not the same as an official survey decision.",
    },
    {
      question: "Are new, existing and transitional vessels treated the same?",
      answer:
        "No. Marine Order 503 distinguishes existing, transitional and new vessels, and the standards that apply depend on that status, any later changes, vessel class and operations. Do not assume another vessel’s arrangement applies to yours.",
    },
    {
      question: "Can PMS decide whether a vessel is exempt?",
      answer:
        "No. Exemptions, certificates and survey outcomes are regulatory decisions. PMS can help an owner prepare documents and discuss inspection or survey readiness. Official decisions rest with AMSA and, where relevant, an accredited surveyor or recognised organisation.",
    },
    {
      question: "Where should I start if I am unsure which framework applies?",
      answer:
        "Start with AMSA’s “Is it a domestic commercial vessel?” guidance, then the DCV requirements page and My Boat. If the vessel may be a regulated Australian vessel, foreign vessel or recreational craft, the national DCV system may not apply.",
    },
  ],
  toc: [
    { id: "direct-answer", label: "What this guide covers" },
    { id: "what-is-a-dcv", label: "What a DCV is" },
    { id: "which-framework", label: "Which framework may apply" },
    { id: "core-requirements", label: "Core certificates and SMS" },
    { id: "standards-and-categories", label: "Standards, class and survey" },
    { id: "new-existing", label: "New, existing and transitional vessels" },
    { id: "periodic-prep", label: "Periodic survey preparation" },
    { id: "owner-questions", label: "Questions to resolve first" },
    { id: "who-to-consult", label: "When to consult AMSA or a surveyor" },
    { id: "key-takeaways", label: "Key takeaways" },
  ],
  blocks: [
    {
      type: "p",
      text: "This guide is for owners, operators, builders and managers of domestic commercial vessels in Australia. It explains, in practical terms, how survey and operational requirements are structured, which questions to settle before arranging a survey, and where to read the official AMSA material. It is not legal advice and it does not replace Marine Order 503, Marine Order 504, exemptions or AMSA’s assessment of a particular vessel.",
    },
    {
      type: "callout",
      variant: "limitation",
      title: "Vessel-specific requirements",
      text: "Not every vessel has the same certificates, survey interval or standards. Exemptions, vessel length, class, operational area, passengers, construction date and later modifications can all change the picture. Confirm the current official position. PMS Peace Marine Services can discuss [DCV survey and inspection support](/amsa-dcv-marine-surveyor/); that support is consultancy or preparation, not an AMSA accreditation statement and not an official regulatory decision.",
    },
    {
      type: "h2",
      id: "direct-answer",
      text: "What this guide covers",
    },
    {
      type: "p",
      text: "Use it to understand the difference between a Certificate of Survey, a Certificate of Operation, a Unique Vessel Identifier and a safety management system; to see why “existing” and “new” vessels are treated differently; and to prepare a document pack before a periodic survey or AMSA inspection.",
    },
    {
      type: "h2",
      id: "what-is-a-dcv",
      text: "What a Domestic Commercial Vessel is",
    },
    {
      type: "p",
      text: "[AMSA](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/it-domestic-commercial-vessel) regulates domestic commercial vessels under the Marine Safety (Domestic Commercial Vessel) National Law Act 2012. In broad terms, a craft used or intended for use in connection with a commercial, governmental or research activity within Australia’s Exclusive Economic Zone is treated as a DCV, including mixed recreational and commercial use.",
    },
    {
      type: "p",
      text: "AMSA also lists craft that are not vessels, and vessels excluded from the national system, including foreign vessels, defence vessels, regulated Australian vessels, and several specified community, school and recreational situations. If you are unsure, work through AMSA’s “Is it a domestic commercial vessel?” page rather than assuming the National Law applies.",
    },
    {
      type: "h2",
      id: "which-framework",
      text: "How to determine which regulatory framework may apply",
    },
    {
      type: "ol",
      items: [
        "Confirm it is a vessel under the National Law definition.",
        "Confirm the activity is commercial, governmental or research (or mixed), and where it operates.",
        "Check whether an exclusion applies (for example a foreign or regulated Australian vessel).",
        "Identify length, passenger numbers, operational area and service category. AMSA’s vessel classes and service categories affect compliance.",
        "Use [AMSA My Boat](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/my-boat) and, where needed, ask AMSA or an accredited surveyor before money is spent on modifications.",
      ],
    },
    {
      type: "h2",
      id: "core-requirements",
      text: "Certificates, SMS, crew and Unique Vessel Identifiers",
    },
    {
      type: "p",
      text: "AMSA’s [DCV requirements](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-requirements) page summarises the usual building blocks. Treat the table as official orientation, then confirm exceptions.",
    },
    {
      type: "ul",
      items: [
        "Certificate of Survey (CoS): AMSA describes this as evidence that the vessel is safe and seaworthy and has the right safety equipment, for vessels except those that qualify for non-survey approval (AMSA cites exemption 02 or exemption 40).",
        "Certificate of Operation (CoO): describes the vessels in the operation, how and where they operate, and conditions, except vessels that qualify for a CoO exemption.",
        "Safety management system: AMSA states this is required for all vessels. From 1 June 2025 AMSA introduced updated SMS requirements, including simplified SMS for some smaller, less complex vessels. Read the current Marine Order 504 material.",
        "Unique vessel identifier: AMSA describes this as like a number plate, issued when you obtain a CoS or non-survey approval, and required for all vessels in that table.",
        "Crew: people working on the vessel must meet qualification requirements that apply to that operation. Do not copy another operator’s crewing arrangement without checking AMSA crewing guidance.",
      ],
    },
    {
      type: "h2",
      id: "standards-and-categories",
      text: "How class, operations, construction and exemptions affect survey",
    },
    {
      type: "p",
      text: "[Survey standards](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/survey-standards-domestic-commercial-vessels-survey) for vessels that must be in survey are set out in Marine Order 503 (Certificate of Survey – national law) 2018. Design, construction, stability and equipment standards may come from the National Standard for Commercial Vessels, parts of the Uniform Shipping Laws Code, class rules, or the standards that applied when an existing vessel was last surveyed. General exemptions can modify requirements for some kinds of vessels.",
    },
    {
      type: "p",
      text: "Survey frequency is not one-size-fits-all. AMSA allocates high, medium or low survey-frequency categories using Marine Order 503 Schedule 3. Class, passengers, length, high-risk attributes (survey modifiers) and other factors change the schedule. Read the [survey frequency](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/survey-frequency-domestic-commercial-vessels) page rather than assuming an annual out-of-water survey.",
    },
    {
      type: "p",
      text: "Vessels 35 metres and above that are required to meet class rules have a split survey arrangement: some aspects are surveyed by a recognised organisation to class rules, and other aspects follow NSCV and the Marine Order 503 schedule. Existing and transitional vessels that were not required to be surveyed by a recognised organisation before 1 July 2013 are treated differently. Confirm which case applies.",
    },
    {
      type: "h2",
      id: "new-existing",
      text: "New vessel versus existing and transitional vessels",
    },
    {
      type: "p",
      text: "Marine Order 503 defines existing vessels by construction and operating history around 1 July 2013. A new vessel is one that is not existing or transitional. A transitional vessel is an existing vessel that has had specified changes in Schedule 1 of Marine Order 503, or whose certificate of survey ceased to be in force for at least two years. Transitional vessels may meet alternative standards in Schedule 2 instead of full new-vessel standards, or may opt into new-vessel standards.",
    },
    {
      type: "p",
      text: "Heritage vessels, unpowered barges and other special cases have their own AMSA notes and exemptions. Do not apply a workboat example to a passenger vessel, barge or heritage craft without checking the official pathway.",
    },
    {
      type: "h2",
      id: "periodic-prep",
      text: "Periodic survey preparation and documents",
    },
    {
      type: "p",
      text: "AMSA’s [DCV inspections](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-inspections) page also lists practical items that help any attendance: a safe means of access with three points of contact, an implemented SMS, certificates and crew documents ready, and fire-fighting and lifesaving equipment checked or marked with a repair plan. For a periodic or renewal survey, add the surveyor’s requested reports, stability information, and evidence of any modifications since the last survey.",
    },
    {
      type: "h2",
      id: "owner-questions",
      text: "Questions to resolve before arranging a survey",
    },
    {
      type: "checklist",
      id: "dcv-owner-checklist",
      title: "Owner and operator checklist",
      intro:
        "Answer these before booking. If you cannot answer an item, that is the first task.",
      items: [
        {
          label: "Is this craft a domestic commercial vessel under the National Law, or does an exclusion apply?",
        },
        {
          label: "What is the service category, operational area and passenger number?",
        },
        {
          label: "Is the vessel existing, transitional or new under Marine Order 503?",
        },
        {
          label: "Has the vessel been altered, re-engined, or changed in operation since the last certificate?",
        },
        {
          label: "Does a Certificate of Survey apply, or is a non-survey approval / exemption the intended pathway?",
        },
        {
          label: "Is the Certificate of Operation current, and does it describe the actual operation?",
        },
        {
          label: "Is the Unique Vessel Identifier issued and displayed as AMSA requires?",
        },
        {
          label: "Is the SMS written for this operation and actually used on board, including the 1 June 2025 SMS changes if they apply?",
        },
        {
          label: "Do crew certificates match the operation, including any temporary crewing permit if used?",
        },
        {
          label: "Which accredited surveyor categories or recognised organisation will be needed?",
        },
        {
          label: "Are previous survey reports, deficiency lists and close-out evidence available?",
        },
      ],
    },
    {
      type: "h2",
      id: "who-to-consult",
      text: "When to consult AMSA or an accredited surveyor",
    },
    {
      type: "p",
      text: "Consult AMSA when the vessel’s status, an exemption, a change of operation, or an equivalent means of compliance is unclear. Consult an [accredited marine surveyor](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/find-accredited-marine-surveyor) (or recognised organisation where class rules apply) for statutory survey work. PMS can help owners prepare for survey or inspection discussions; it does not issue Certificates of Survey or Operation and does not replace AMSA.",
    },
    {
      type: "h2",
      id: "key-takeaways",
      text: "Key takeaways",
    },
    {
      type: "ul",
      items: [
        "Start with whether the National Law applies, then certificates, SMS and survey pathway.",
        "Existing, transitional and new vessels follow different standards.",
        "Survey frequency depends on AMSA’s category table, not a single industry rumour.",
        "Exemptions exist; they are not automatic and must be confirmed.",
        "Official decisions sit with AMSA and accredited or recognised surveyors. Preparation support is not a regulatory approval.",
      ],
    },
  ],
};
