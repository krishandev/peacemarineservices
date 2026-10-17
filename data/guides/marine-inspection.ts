import { photos } from "@/data/site-images";
import type { Guide } from "@/data/guides/types";

export const marineInspectionGuide: Guide = {
  slug: "marine-inspection-preparation-checklist",
  path: "/guides/marine-inspection-preparation-checklist/",
  h1: "Marine Inspection Preparation Checklist",
  summary:
    "A practical checklist for owners, managers and ship’s staff to prepare documents, access and known defects before an agreed marine inspection.",
  audience:
    "Vessel owners, ship managers, operators, marine engineers and onboard personnel.",
  category: "Inspection preparation",
  readingMinutes: 12,
  image: photos.tankerDeckPersonnel,
  relatedService: {
    label: "Marine Safety Inspection in Australia",
    href: "/marine-safety-inspection-in-australia/",
  },
  relatedGuideSlugs: [
    "pre-psc-inspection-checklist",
    "pre-purchase-vessel-inspection-checklist",
  ],
  sources: [
    {
      label: "AMSA — Domestic commercial vessel inspections",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-inspections",
      external: true,
    },
    {
      label: "AMSA — Before a port State control inspection",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control/port-state-control-inspection",
      external: true,
    },
  ],
  faqs: [
    {
      question: "Is there one checklist for every marine inspection?",
      answer:
        "No. The exact list depends on vessel type, applicable requirements and the agreed scope. A cargo condition survey, a pre-purchase inspection and an ISM internal audit need different evidence.",
    },
    {
      question: "Who should be onboard for the inspection?",
      answer:
        "A responsible person who can grant access, operate equipment safely if tests are agreed, and retrieve certificates. For some inspections that is the master or chief engineer; for a small DCV it may be the owner-operator.",
    },
    {
      question: "What if a space cannot be opened?",
      answer:
        "Say so before the inspector attends if possible. The report should record the limitation. Do not imply a space was inspected if it was not.",
    },
    {
      question: "Should known defects be hidden?",
      answer:
        "No. Declare known defects and the current control measures. Concealing a defect wastes the inspection and can create a more serious finding later.",
    },
    {
      question: "What happens after the report?",
      answer:
        "The client should review findings, assign actions, record close-out evidence, and decide whether specialist follow-up is needed. An inspection report is not itself a repair contract.",
    },
    {
      question: "Can PMS attend different types of inspection?",
      answer:
        "PMS provides a range of survey, inspection and consultancy services. Match the enquiry to the need — for example [marine safety inspection](/marine-safety-inspection-in-australia/), [pre-PSC](/pre-psc-inspection-in-australia/), or [technical inspection](/technical-inspection-and-marine-engineering-consultancy/).",
    },
  ],
  toc: [
    { id: "identify-scope", label: "Identify type and scope" },
    { id: "confirm-attendance", label: "Confirm attendance details" },
    { id: "documents", label: "Document checklist" },
    { id: "access", label: "Access and boarding" },
    { id: "records", label: "Records and previous reports" },
    { id: "spaces", label: "Make areas accessible" },
    { id: "known-defects", label: "Known defects" },
    { id: "during", label: "During the inspection" },
    { id: "after", label: "Reports and follow-up" },
    { id: "key-takeaways", label: "Key takeaways" },
  ],
  blocks: [
    {
      type: "p",
      text: "This guide is for vessel owners, managers, engineers and onboard personnel who need to prepare for an agreed marine inspection. It covers planning, documents, access and follow-up. It is not a statutory checklist and it does not replace the instructions issued for an official AMSA, class, flag or port-State attendance.",
    },
    {
      type: "callout",
      variant: "limitation",
      title: "Scope depends on the job",
      text: "The exact checklist depends on vessel type, applicable requirements and the agreed scope of inspection. Do not treat this page as a guarantee of compliance or inspection success.",
    },
    {
      type: "h2",
      id: "identify-scope",
      text: "Identify the type and scope of inspection",
    },
    {
      type: "p",
      text: "Write down why the inspection is happening and what success looks like. A safety walkthrough, a pre-purchase survey, cargo attendance, bunker survey, pre-PSC preparation and an internal ISM audit are different jobs. If the purpose is unclear, the report will be unclear.",
    },
    {
      type: "ul",
      items: [
        "Purpose: condition, purchase, safety, cargo, bunker, audit preparation, or another defined need.",
        "Standard or reference, if any: company SMS, charterer’s form, class instruction, or none.",
        "Exclusions: tanks, underwater hull, running trials, night work, confined-space entry.",
      ],
    },
    {
      type: "h2",
      id: "confirm-attendance",
      text: "Confirm date, location, access and contact",
    },
    {
      type: "ol",
      items: [
        "Date, time window and whether the vessel will be alongside, at anchor, or on the hard.",
        "Port, berth, yard or depot address and any induction, PPE or permit-to-work rules.",
        "Named shipboard contact and a shore contact if the ship’s staff change at crew change.",
        "How the inspector boards, including gangway, transfer boat or yard access.",
        "Language and whether a competent person will accompany throughout.",
      ],
    },
    {
      type: "h2",
      id: "documents",
      text: "Document preparation checklist",
    },
    {
      type: "checklist",
      id: "inspection-docs",
      title: "Documents to have ready",
      intro:
        "Not every inspection needs every item. Pull what matches the agreed scope.",
      items: [
        { label: "Vessel identification, contact list and agreed scope of work" },
        { label: "Certificates relevant to the inspection" },
        { label: "Crew certificates if manning or competence is in scope" },
        { label: "Safety management system or company procedures if they will be sampled" },
        { label: "Planned-maintenance extracts and equipment service records" },
        { label: "Previous inspection, survey, class or audit reports" },
        { label: "Current defect list and permits for isolated equipment" },
        { label: "Drawings or tank plans if spaces will be discussed" },
      ],
    },
    {
      type: "h2",
      id: "access",
      text: "Vessel access and safe boarding",
    },
    {
      type: "p",
      text: "AMSA’s DCV inspection guidance asks for a gangway or safe means of access that allows three points of contact. The same principle applies to any visitor. Lighting, a clear deck path, and a briefing on hazards reduce delays and incidents. Do not ask an inspector to climb an unsecured pilot ladder as a shortcut.",
    },
    {
      type: "h2",
      id: "records",
      text: "Organise maintenance records, certificates and previous reports",
    },
    {
      type: "p",
      text: "Put paper certificates in one folder and know the path in the electronic PMS. If a previous report closed an item, keep the evidence next to it. Inspectors and surveyors spend less time searching and more time on the vessel when the file is in order.",
    },
    {
      type: "h2",
      id: "spaces",
      text: "Make relevant areas accessible",
    },
    {
      type: "ul",
      items: [
        "Unlock machinery spaces, bosun stores, safety-equipment lockers and document lockers in the agreed scope.",
        "Move stores that block fire doors, hydrants or hatch access if those areas are included.",
        "Confirm gas-free or enclosed-space procedures before anyone is asked to enter a tank.",
        "Provide lighting and a competent escort. Do not leave a visitor unescorted in a machinery space.",
      ],
    },
    {
      type: "h2",
      id: "known-defects",
      text: "Record known defects and previous corrective actions",
    },
    {
      type: "p",
      text: "Hand over a current list: item, date, action, status. If a fire pump is isolated, say so and show the risk assessment. That is more credible than discovering it during the round.",
    },
    {
      type: "h2",
      id: "during",
      text: "What to expect during an inspection",
    },
    {
      type: "p",
      text: "Expect an opening discussion of scope, a walk of agreed areas, sampling of documents, and notes or photographs. Tests happen only if they are safe and agreed. Official AMSA inspections follow AMSA’s own process, including letters and reports described on AMSA’s website. Independent inspections follow the contract you signed.",
    },
    {
      type: "h2",
      id: "after",
      text: "What a report may contain and how to follow up",
    },
    {
      type: "p",
      text: "A typical report restates scope, method, observations, recommendations and limitations. Assign each finding an owner and a due date. Verify close-out on board, not only in email. If the inspection was official, follow the authority’s notice. If it was independent, treat it as advice to the client.",
    },
    {
      type: "h2",
      id: "key-takeaways",
      text: "Key takeaways",
    },
    {
      type: "ul",
      items: [
        "Scope first, then documents, access and known defects.",
        "Safe boarding and a named contact save more time than extra paperwork.",
        "Record limitations honestly.",
        "Follow-up is part of the inspection. The PDF is not the end of the work.",
      ],
    },
  ],
};
