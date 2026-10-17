import { photos } from "@/data/site-images";
import type { Guide } from "@/data/guides/types";

export const prePscGuide: Guide = {
  slug: "pre-psc-inspection-checklist",
  path: "/guides/pre-psc-inspection-checklist/",
  h1: "Pre-PSC Inspection Checklist for Ships Visiting Australian Ports",
  summary:
    "A practical preparation checklist for shipowners, operators, masters and superintendents before a possible Port State Control inspection in Australia.",
  audience:
    "Shipowners, ship operators, ship managers, masters and marine superintendents.",
  category: "Port State Control",
  readingMinutes: 16,
  image: photos.heroHarbour,
  relatedService: {
    label: "Pre-PSC Inspection in Australia",
    href: "/pre-psc-inspection-in-australia/",
  },
  relatedGuideSlugs: [
    "marine-inspection-preparation-checklist",
    "ism-isps-mlc-audit-preparation",
  ],
  sources: [
    {
      label: "AMSA — Port State control",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control",
      external: true,
    },
    {
      label: "AMSA — What is port State control?",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control/what-port-state-control",
      external: true,
    },
    {
      label: "AMSA — Before a port State control inspection",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control/port-state-control-inspection",
      external: true,
    },
    {
      label: "IMO — SOLAS",
      href: "https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Safety-of-Life-at-Sea-(SOLAS),-1974.aspx",
      external: true,
    },
    {
      label: "IMO — MARPOL",
      href: "https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Prevention-of-Pollution-from-Ships-(MARPOL).aspx",
      external: true,
    },
    {
      label: "ILO — Maritime Labour Convention, 2006",
      href: "https://www.ilo.org/international-labour-standards/maritime-labour-convention-2006",
      external: true,
    },
  ],
  faqs: [
    {
      question: "Is a pre-PSC inspection the same as an AMSA Port State Control inspection?",
      answer:
        "No. An official PSC inspection is conducted by AMSA as the port State. Independent preparation or inspection support is a private operational check. AMSA states that it does not accredit pre-PSC inspection services, and the results of any pre-PSC inspection are not considered by a port State control officer.",
    },
    {
      question: "Can independent preparation guarantee that a ship will not be detained?",
      answer:
        "No. Preparation can help the crew and operator identify obvious gaps, but it cannot guarantee clearance, a successful inspection outcome, or avoidance of detention. AMSA decides the inspection scope, findings and any enforcement action.",
    },
    {
      question: "Why might a ship be selected for PSC in Australia?",
      answer:
        "AMSA may inspect ships in Australian ports as part of port State control. Selection can include targeting based on risk information as well as other inspection programmes. Treat every port call as one where an inspection is possible.",
    },
    {
      question: "What should we do if a previous inspection recorded deficiencies?",
      answer:
        "Review the deficiency list, confirm what was closed out, keep evidence of corrective action, and identify anything still outstanding. Do not present a closed item as complete unless the record and the physical condition both support that.",
    },
    {
      question: "When is it useful to request independent pre-inspection support?",
      answer:
        "It can be useful when a ship is preparing for an Australian port call, after repairs, after a change of crew or manager, or when previous findings remain open. Any support should be scoped in writing and treated as preparation, not as an official inspection.",
    },
    {
      question:
        "Which conventions are commonly relevant to PSC in Australia?",
      answer:
        "AMSA identifies SOLAS, MARPOL, the Load Lines Convention, STCW and the Maritime Labour Convention, 2006 among the conventions it works to. The instruments that apply to a particular ship depend on flag, type, size, age and certificates in force.",
    },
  ],
  toc: [
    { id: "who-this-is-for", label: "Who this guide is for" },
    { id: "what-psc-is", label: "What Port State Control is" },
    { id: "how-to-prepare", label: "How to prepare" },
    { id: "practical-checklist", label: "Practical checklist" },
    { id: "defects-and-records", label: "Defects and records" },
    { id: "if-deficiencies-are-found", label: "If deficiencies are found" },
    { id: "limitations", label: "Scope and limitations" },
    { id: "key-takeaways", label: "Key takeaways" },
  ],
  blocks: [
    {
      type: "p",
      text: "This guide helps shipowners, operators, ship managers, masters and marine superintendents prepare a ship for a possible Port State Control (PSC) inspection in an Australian port. It is a preparation aid, not an official AMSA inspection and not a substitute for the ship’s safety management system, class or flag requirements.",
    },
    {
      type: "callout",
      variant: "limitation",
      title: "Important limitation",
      text: "PMS Peace Marine Services preparation or inspection support is not an official PSC inspection. It cannot guarantee clearance, a successful outcome, or avoidance of detention. [AMSA does not accredit pre-PSC inspection services](https://www.amsa.gov.au/vessels-operators/port-state-control/what-port-state-control), and it states that the results of any pre-PSC inspection are not considered by a port State control officer.",
    },
    {
      type: "h2",
      id: "who-this-is-for",
      text: "Who this guide is for",
    },
    {
      type: "p",
      text: "Use this guide if you are responsible for a foreign-flagged or other PSC-eligible ship calling at an Australian port, or if you support the master from the office. It is most useful when you can still correct paperwork, equipment and access issues before arrival.",
    },
    {
      type: "h2",
      id: "what-psc-is",
      text: "What Port State Control inspections are",
    },
    {
      type: "p",
      text: "[AMSA explains](https://www.amsa.gov.au/vessels-operators/port-state-control/what-port-state-control) that a ship may be subject to PSC at any Australian port. PSC is a method of checking that ships in port comply with applicable international conventions and Australian law so they do not pose an unacceptable risk to people, the ship or the marine environment. Flag States and companies remain responsible for the ship’s safety and operation.",
    },
    {
      type: "p",
      text: "AMSA identifies SOLAS, MARPOL, the Load Lines Convention, STCW and the Maritime Labour Convention, 2006 among the conventions it works to. A ship may be selected using AMSA’s inspection and targeting arrangements. If deficiencies are found, AMSA may require corrective action and, where justified, detain the ship until issues are resolved. See AMSA’s [Port State control](https://www.amsa.gov.au/vessels-operators/port-state-control) pages for current inspection, detention and campaign information.",
    },
    {
      type: "h3",
      id: "why-ships-are-inspected",
      text: "Why a ship may be inspected",
    },
    {
      type: "ul",
      items: [
        "Risk-based targeting and inspection history, including previous deficiencies or detentions.",
        "Focused or concentrated inspection campaigns on nominated topics.",
        "Complaints, incidents, or information suggesting a safety, pollution or seafarer-welfare concern.",
        "Random or expanded inspections as determined by AMSA.",
      ],
    },
    {
      type: "h2",
      id: "how-to-prepare",
      text: "How an operator can prepare",
    },
    {
      type: "p",
      text: "Start with the ship as it will be presented on arrival: certificates in date, equipment working or clearly isolated with a plan, records complete, and the crew able to demonstrate familiar routines. AMSA’s guidance on preparing for an inspection should be read alongside the company’s SMS and the flag administration’s instructions.",
    },
    {
      type: "ol",
      items: [
        "Confirm the next Australian port, berth or anchorage, expected cargo operations, and who will meet an inspector (master, chief engineer, safety officer).",
        "Review the last PSC, class, flag and internal-audit reports. List open items and evidence of closure.",
        "Walk the ship against the checklist below. Record defects with location, photograph and planned action.",
        "Give the crew time to retrieve certificates, test equipment that is meant to be operational, and brief on boarding access and language.",
        "Do not wait until the inspector is on the gangway to look for expired certificates or seized fire-dampers.",
      ],
    },
    {
      type: "h2",
      id: "practical-checklist",
      text: "Practical preparation checklist",
    },
    {
      type: "p",
      text: "This list is a working prompt. It is not every item an inspector may examine, and it does not create a legal requirement. Applicable certificates and equipment depend on ship type, size, age, flag and the conventions in force. Where an item does not apply, record that it is not fitted or not required rather than skipping it silently.",
    },
    {
      type: "checklist",
      id: "certificates-documents",
      title: "Certificates and statutory documents",
      intro:
        "Keep originals or authorised copies where the convention or flag requires them, and make sure names, dates and endorsements match the ship in front of you.",
      items: [
        {
          label: "Registry, class and statutory certificates",
          note: "Check validity, annual or intermediate endorsements, and any conditions of class.",
        },
        {
          label: "Safety certificates relevant to the ship",
          note: "Examples may include cargo ship safety construction, equipment and radio certificates, or a passenger ship safety certificate, as applicable.",
        },
        {
          label: "International Load Line Certificate",
        },
        {
          label: "MARPOL-related certificates and manuals",
          note: "IOPP, IAPP, ISPP, IEE and garbage, ballast-water or other certificates as applicable to the ship.",
        },
        {
          label: "ISM Document of Compliance and Safety Management Certificate",
        },
        {
          label: "ISPS International Ship Security Certificate and security plan access arrangements",
        },
        {
          label: "Maritime Labour Certificate and Declaration of Maritime Labour Compliance, if applicable",
        },
        {
          label: "Minimum Safe Manning Document and crew certificates",
          note: "Certificates should match the people on board and remain valid, including medical fitness and flag endorsements where required.",
        },
        {
          label: "Exemptions, equivalents and dispensations",
          note: "Keep the issuing administration’s document with the related certificate.",
        },
      ],
    },
    {
      type: "checklist",
      id: "safety-fire-lsa",
      title: "Safety equipment, fire safety and lifesaving appliances",
      items: [
        {
          label: "Fire detection, alarm and fixed fire-extinguishing systems ready for use or clearly isolated with a documented plan",
        },
        {
          label: "Fire doors, fire dampers, ventilation shutdowns and emergency fire pump",
          note: "AMSA regularly reports fire-safety defects. Doors should close as designed; dampers should operate.",
        },
        {
          label: "Portable extinguishers, hydrants, hoses and international shore connection",
        },
        {
          label: "Lifeboats, rescue boats, davits, release gear and embarkation arrangements",
        },
        {
          label: "Life rafts, hydrostatic releases, lifebuoys, lifejackets and immersion suits as fitted",
        },
        {
          label: "Emergency lighting, escape routes and imo/safety-plan signage unobstructed",
        },
        {
          label: "Service and inspection records for LSA and fire-fighting appliances",
        },
      ],
    },
    {
      type: "checklist",
      id: "navigation-machinery-pollution",
      title: "Navigation, machinery and pollution prevention",
      items: [
        {
          label: "Charts, ECDIS, publications and passage plan for the intended Australian port",
        },
        {
          label: "Navigation lights, shapes, sound signals and bridge equipment",
        },
        {
          label: "Steering gear, emergency steering and communication between bridge and steering gear",
        },
        {
          label: "Main and auxiliary machinery, bilge systems and engine-room cleanliness at a standard that allows safe inspection",
        },
        {
          label: "Oil filtering equipment, 15 ppm alarm, oil record book and sludge/landing records",
        },
        {
          label: "Sewage, garbage and ballast-water arrangements as applicable, with matching record books",
        },
        {
          label: "SOPEP/SMPEP and pollution-response equipment where required",
        },
      ],
    },
    {
      type: "checklist",
      id: "crew-records",
      title: "Crew documentation and operational records",
      items: [
        {
          label: "Hours of rest records that can be shown and explained",
        },
        {
          label: "Drills and familiarisation records, including enclosed-space, fire and abandon-ship as applicable",
        },
        {
          label: "ISM records: non-conformities, maintenance, master’s review and designated-person contact",
        },
        {
          label: "Security records and access control for the current port call",
        },
        {
          label: "Seafarer employment agreements, wage records and complaint procedures if MLC applies",
        },
        {
          label: "Safe means of access for boarding",
        },
      ],
    },
    {
      type: "h2",
      id: "defects-and-records",
      text: "Review outstanding defects and keep records",
    },
    {
      type: "p",
      text: "A common failure is presenting a tidy deficiency list in the office file while the same defect is still visible on board. Treat each open item as a physical check, not only a paperwork close-out.",
    },
    {
      type: "ol",
      items: [
        "List every open class condition, PSC deficiency, internal finding and reported defect.",
        "For each item record: date found, location, action taken, remaining work, responsible person, and target date.",
        "Keep supporting evidence: job orders, service reports, spare-part receipts, photographs dated on board.",
        "If an item cannot be completed before arrival, document the temporary measure, risk assessment and the planned repair port.",
        "Brief the master so explanations to an inspector are consistent with the file.",
      ],
    },
    {
      type: "p",
      text: "Store records where the master can retrieve them quickly: certificate folder, planned-maintenance system, and a current defect list. Do not rely on a superintendent’s email inbox as the only copy.",
    },
    {
      type: "h2",
      id: "if-deficiencies-are-found",
      text: "What to do if an inspection identifies deficiencies",
    },
    {
      type: "p",
      text: "AMSA’s after-inspection guidance should be followed when an official PSC inspection takes place. In general terms, the master should understand each deficiency, the required action, and any restriction on departure. If the ship is detained, the company, flag and class must be informed in line with the SMS and flag instructions. Independent consultants can help interpret findings and plan corrective work, but they do not replace AMSA’s decision.",
    },
    {
      type: "ul",
      items: [
        "Read the inspection report before the inspector leaves, if that opportunity is given.",
        "Ask for clarification of codes, due dates and whether an item is detainable.",
        "Start corrective action and evidence collection immediately.",
        "Do not sail if a detention or prohibition remains in force.",
      ],
    },
    {
      type: "h2",
      id: "limitations",
      text: "Scope and limitations",
    },
    {
      type: "p",
      text: "This checklist cannot list every convention requirement. It does not replace class survey, flag inspection, ISM internal audit, or AMSA PSC. Independent support from [PMS Pre-PSC Inspection services](/pre-psc-inspection-in-australia/) can help an operator walk the ship and documents before a port call. It is still the company and master who present the ship.",
    },
    {
      type: "h2",
      id: "key-takeaways",
      text: "Key takeaways",
    },
    {
      type: "ul",
      items: [
        "Treat every Australian port call as one where PSC is possible.",
        "Certificates, fire safety, lifesaving appliances, pollution equipment and crew records are examined often because they fail often.",
        "Open defects need physical close-out and evidence, not only a spreadsheet status.",
        "Independent pre-inspection support is preparation only. It is not AMSA PSC and cannot guarantee the inspection result.",
      ],
    },
  ],
};
