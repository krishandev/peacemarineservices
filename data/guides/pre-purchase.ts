import { photos } from "@/data/site-images";
import type { Guide } from "@/data/guides/types";

export const prePurchaseGuide: Guide = {
  slug: "pre-purchase-vessel-inspection-checklist",
  path: "/guides/pre-purchase-vessel-inspection-checklist/",
  h1: "Pre-Purchase Vessel Inspection Checklist",
  summary:
    "How buyers and operators can define inspection scope, review condition and documents, and understand the limits of a visual pre-purchase survey.",
  audience:
    "Vessel buyers, commercial operators, investors and owners considering a used vessel.",
  category: "Vessel purchase",
  readingMinutes: 14,
  image: photos.vesselAlongside,
  relatedService: {
    label: "Pre-Purchase Inspection",
    href: "/pre-purchase-inspection/",
  },
  relatedGuideSlugs: [
    "marine-inspection-preparation-checklist",
    "australian-dcv-survey-requirements",
  ],
  sources: [
    {
      label: "AMSA — Domestic commercial vessel requirements",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-requirements",
      external: true,
    },
    {
      label: "AMSA — Is it a domestic commercial vessel?",
      href: "https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/it-domestic-commercial-vessel",
      external: true,
    },
  ],
  faqs: [
    {
      question: "Will a pre-purchase inspection find every defect?",
      answer:
        "No. A visual inspection, even a thorough one, is limited by access, weather, time, the agreed scope, and what can be seen without dismantling or specialist testing. Hidden corrosion, fatigue, electrical faults and machinery condition can remain undetected.",
    },
    {
      question: "Does a survey mean the vessel is seaworthy or a good investment?",
      answer:
        "No. An inspection report describes observations within the agreed scope. It is not a warranty, valuation, sea-trial certificate, or a statement that the vessel is safe, seaworthy or commercially sound.",
    },
    {
      question: "Should the inspection happen before or after the sale contract?",
      answer:
        "That is a commercial decision. Many buyers make the purchase subject to a satisfactory independent inspection. Agree the scope, access and who pays for lifting or opening up before the inspector attends.",
    },
    {
      question: "Do I need a different inspection for a domestic commercial vessel?",
      answer:
        "The physical condition still matters, but a DCV buyer also needs to understand certificates, exemptions, SMS, survey status and whether the intended operation is allowed. Confirm the regulatory pathway with AMSA or an accredited surveyor. A pre-purchase inspection does not issue or transfer certificates.",
    },
    {
      question: "What should the report include?",
      answer:
        "At minimum: the agreed scope, how the inspection was done, what was and was not seen, observed defects, items needing further investigation, and limitations. It should not imply work was done that was not done.",
    },
    {
      question: "Can PMS inspect a vessel I am considering buying?",
      answer:
        "Yes, within an agreed scope. See the [PMS Pre-Purchase Inspection](/pre-purchase-inspection/) page and request an enquiry with vessel type, location and what you need assessed.",
    },
  ],
  toc: [
    { id: "why-it-matters", label: "Why a pre-purchase inspection matters" },
    { id: "define-scope", label: "Define the scope" },
    { id: "hull-structure", label: "Hull and structure" },
    { id: "systems", label: "Machinery and systems" },
    { id: "safety", label: "Safety equipment" },
    { id: "documents", label: "History and documents" },
    { id: "recording-defects", label: "Recording defects" },
    { id: "questions-for-seller", label: "Questions for the seller" },
    { id: "the-report", label: "What the report should say" },
    { id: "limitations", label: "Limitations" },
    { id: "key-takeaways", label: "Key takeaways" },
  ],
  blocks: [
    {
      type: "p",
      text: "This guide is for people considering the purchase of a used commercial or work vessel, including buyers, operators and investors. It explains how to set an inspection scope, what is commonly looked at, and how to read a report without treating it as a guarantee.",
    },
    {
      type: "callout",
      variant: "limitation",
      title: "No hidden-defect guarantee",
      text: "A pre-purchase inspection will not identify every hidden defect and does not certify that a vessel is safe, seaworthy, legally compliant for your intended use, or a sound investment. Specialist testing, docking, sea trial or further examination may still be required.",
    },
    {
      type: "h2",
      id: "why-it-matters",
      text: "Why a pre-purchase inspection matters",
    },
    {
      type: "p",
      text: "Used vessels carry history you cannot see in photographs: repairs, grounding, fire, neglected machinery, incomplete certificates, or modifications that change survey status. An independent inspection gives a structured record of what was visible on a given date, so commercial negotiations are based on observations rather than assumptions.",
    },
    {
      type: "h2",
      id: "define-scope",
      text: "Define the inspection scope before booking",
    },
    {
      type: "p",
      text: "Write the scope down. A walkthrough of a workboat afloat is not the same as an out-of-water hull inspection plus machinery trials. If the vessel is a domestic commercial vessel, say so, because certificates and survey status affect the buying risk even when they are outside a visual condition survey.",
    },
    {
      type: "ul",
      items: [
        "Vessel type, location, whether it will be afloat, slipped or in a shed.",
        "Areas included: hull, decks, machinery, electrical, safety equipment, documentation review.",
        "Areas excluded: diving, ultrasonic gauging, oil analysis, sea trial, opening of sealed tanks, unless agreed.",
        "Who supplies access, keys, shore power, a competent person on board, and lifting.",
        "Who receives the report and whether the seller may attend.",
      ],
    },
    {
      type: "h2",
      id: "hull-structure",
      text: "Hull and visible structural condition",
    },
    {
      type: "p",
      text: "Where the hull can be seen, the inspection typically records coating condition, obvious deformation, cracking, wastage, repairs, through-hull fittings, decks, superstructure and watertight closures. What cannot be seen — internal framing behind linings, tank internals, underwater hull if the vessel stays afloat — should be listed as a limitation, not guessed.",
    },
    {
      type: "h2",
      id: "systems",
      text: "Machinery, propulsion, steering, electrical and equipment",
    },
    {
      type: "p",
      text: "If included in the agreed scope, the inspector may observe engines, stern gear, steering, pumps, switchboards and installed equipment as found. Running trials only occur if they are safe, authorised and agreed. Absence of leaks during a short run does not prove reliability.",
    },
    {
      type: "h2",
      id: "safety",
      text: "Safety equipment and visible deficiencies",
    },
    {
      type: "p",
      text: "Note what is fitted, what is missing, and what is past a marked service date. For a DCV, safety equipment standards depend on class and whether the vessel is existing, transitional or new. A buyer should not assume equipment that “looks enough” meets the standard for the intended operation.",
    },
    {
      type: "h2",
      id: "documents",
      text: "Maintenance history, certificates and available documentation",
    },
    {
      type: "checklist",
      id: "pre-purchase-docs",
      title: "Document review prompts",
      items: [
        { label: "Proof of ownership and any mortgage or interest noted by the seller" },
        { label: "For a DCV: Certificate of Survey, Certificate of Operation, Unique Vessel Identifier and SMS, if they exist" },
        { label: "Survey reports, exemptions and outstanding recommendations" },
        { label: "Class or load-line documents if the vessel is in class" },
        { label: "Maintenance logs, rebuild records and service invoices" },
        { label: "Stability information and known modifications" },
        { label: "Insurance survey history if the seller provides it" },
      ],
    },
    {
      type: "h2",
      id: "recording-defects",
      text: "How to document defects, limitations and further investigation",
    },
    {
      type: "p",
      text: "Each finding should say what was seen, where, and why it matters to the agreed purpose of the inspection. Separate “defect observed” from “could not inspect” from “recommend specialist test”. Photographs with location notes help later commercial discussion.",
    },
    {
      type: "h2",
      id: "questions-for-seller",
      text: "Questions buyers should ask the seller",
    },
    {
      type: "ol",
      items: [
        "Has the vessel been grounded, flooded, in collision or had a fire?",
        "What repairs or structural modifications have been done, and by whom?",
        "Are there open survey items, conditions of class, or AMSA inspection actions?",
        "Will the intended operation match the current certificate and operational area?",
        "What equipment is included, and what is on hire or owned by a crew member?",
        "When was the last out-of-water inspection, and can those reports be provided?",
      ],
    },
    {
      type: "h2",
      id: "the-report",
      text: "What a survey report should communicate",
    },
    {
      type: "p",
      text: "A useful report states the client, vessel identity, date, location, scope, method, observations, recommendations for further investigation, and limitations. It should not bury exclusions. It is not a repair specification unless that extra work was agreed.",
    },
    {
      type: "h2",
      id: "limitations",
      text: "Limitations of a visual inspection",
    },
    {
      type: "p",
      text: "Linings, tanks, underwater hull, running hours authenticity, electrical insulation, and fatigue in way of welds often need tools or docking that were not in the scope. If those items matter to the price, commission the extra work. For regulatory status of a DCV, read AMSA’s [requirements](https://www.amsa.gov.au/vessels-operators/domestic-commercial-vessels/domestic-commercial-vessel-requirements) and speak to an accredited surveyor where a certificate decision is needed.",
    },
    {
      type: "p",
      text: "To discuss an agreed-scope inspection, see [PMS Pre-Purchase Inspection](/pre-purchase-inspection/).",
    },
    {
      type: "h2",
      id: "key-takeaways",
      text: "Key takeaways",
    },
    {
      type: "ul",
      items: [
        "Agree the scope, access and exclusions in writing before anyone attends the vessel.",
        "Condition and regulatory status are different questions, especially for DCVs.",
        "Record what was not seen as carefully as what was seen.",
        "The report informs a buying decision. It does not guarantee the vessel.",
      ],
    },
  ],
};
