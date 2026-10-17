import { photos } from "@/data/site-images";
import type { Guide } from "@/data/guides/types";

export const ismIspsMlcGuide: Guide = {
  slug: "ism-isps-mlc-audit-preparation",
  path: "/guides/ism-isps-mlc-audit-preparation/",
  h1: "ISM, ISPS and MLC Audit Preparation Guide",
  summary:
    "Plain-English preparation for ISM, ISPS and MLC internal audits, including records, previous findings and questions to ask an independent provider.",
  audience:
    "Ship managers, compliance teams, designated personnel and vessel operators.",
  category: "Management system audits",
  readingMinutes: 15,
  image: photos.bridgeGmdss,
  relatedService: {
    label: "Internal Audits for ISM, ISPS and MLC",
    href: "/internal-audits-for-ism-isps-and-mlc/",
  },
  relatedGuideSlugs: [
    "pre-psc-inspection-checklist",
    "marine-inspection-preparation-checklist",
  ],
  sources: [
    {
      label: "IMO — ISM Code",
      href: "https://www.imo.org/en/OurWork/HumanElement/Pages/ISMCode.aspx",
      external: true,
    },
    {
      label: "IMO — Maritime Security / ISPS Code",
      href: "https://www.imo.org/en/OurWork/Security/Pages/SOLAS-XI-2%20ISPS%20Code.aspx",
      external: true,
    },
    {
      label: "ILO — Maritime Labour Convention, 2006",
      href: "https://www.ilo.org/international-labour-standards/maritime-labour-convention-2006",
      external: true,
    },
    {
      label: "AMSA — Port State control common ISM issues",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control/port-state-control-inspection-common-international-safety",
      external: true,
    },
    {
      label: "AMSA — Port State control",
      href: "https://www.amsa.gov.au/vessels-operators/port-state-control",
      external: true,
    },
  ],
  faqs: [
    {
      question: "Is an internal audit the same as certification?",
      answer:
        "No. Internal audits are a company tool to check that the safety, security or labour-management system is implemented. Certificates such as the Document of Compliance, Safety Management Certificate, International Ship Security Certificate or Maritime Labour Certificate are issued through the processes of the flag State and recognised organisations, not by an independent internal-audit visit.",
    },
    {
      question: "Does PMS have statutory authority to certify ISM, ISPS or MLC?",
      answer:
        "No. PMS may provide independent internal-audit or consultancy support. That is not recognised-organisation status, flag-State authority, or a claim of a specific official auditor accreditation unless separately verified.",
    },
    {
      question: "How often should internal audits be done?",
      answer:
        "The ISM Code requires the company to carry out internal safety audits. The interval in your SMS, flag instructions and any recognised-organisation programme must be followed. This guide does not invent a substitute interval.",
    },
    {
      question: "What if previous non-conformities are still open?",
      answer:
        "Review them before the next audit. Either they are closed with evidence, or they remain open with a current plan. Repeating the same finding without action is itself a management-system problem.",
    },
    {
      question: "Should ship and office be audited together?",
      answer:
        "ISM looks at both the company and the ship. Office and ship audits may be scheduled separately, but the designated person, SMS manuals and shipboard implementation should tell the same story.",
    },
    {
      question: "Where can we request PMS internal-audit support?",
      answer:
        "See [Internal Audits for ISM, ISPS and MLC](/internal-audits-for-ism-isps-and-mlc/) and describe the ship, company, requested code and whether the work is office, ship or both.",
    },
  ],
  toc: [
    { id: "plain-english", label: "ISM, ISPS and MLC in plain English" },
    { id: "differences", label: "How the audits differ" },
    { id: "organise-records", label: "Organise procedures and records" },
    { id: "previous-findings", label: "Previous findings" },
    { id: "ism-checklist", label: "ISM preparation checklist" },
    { id: "isps-checklist", label: "ISPS preparation checklist" },
    { id: "mlc-checklist", label: "MLC preparation checklist" },
    { id: "corrective-action", label: "Findings and corrective action" },
    { id: "questions-for-provider", label: "Questions before engaging a provider" },
    { id: "key-takeaways", label: "Key takeaways" },
  ],
  blocks: [
    {
      type: "p",
      text: "This guide is for ship managers, compliance teams, designated persons and vessel operators preparing for internal audits against the ISM Code, the ISPS Code and the Maritime Labour Convention, 2006. It is a preparation aid. It is not an official audit, certification, or a statement of statutory authority.",
    },
    {
      type: "callout",
      variant: "limitation",
      title: "Independent support is not certification",
      text: "PMS Peace Marine Services does not claim statutory authority, recognised-organisation status, or a specific official auditor accreditation in this guide. Internal audit support is distinct from flag-State or recognised-organisation certification and from AMSA Port State Control. A completed internal audit does not guarantee external audit success or inspection clearance.",
    },
    {
      type: "h2",
      id: "plain-english",
      text: "Plain-English explanations",
    },
    {
      type: "h3",
      id: "ism-explained",
      text: "ISM Code",
    },
    {
      type: "p",
      text: "The [International Safety Management (ISM) Code](https://www.imo.org/en/OurWork/HumanElement/Pages/ISMCode.aspx) is the IMO international standard for the safe management and operation of ships and for pollution prevention. Companies implement a safety management system, appoint a designated person ashore, and maintain Document of Compliance (company) and Safety Management Certificate (ship) arrangements as required by SOLAS for ships to which the Code applies.",
    },
    {
      type: "h3",
      id: "isps-explained",
      text: "ISPS Code",
    },
    {
      type: "p",
      text: "The [International Ship and Port Facility Security (ISPS) Code](https://www.imo.org/en/OurWork/Security/Pages/SOLAS-XI-2%20ISPS%20Code.aspx) is the IMO security framework under SOLAS chapter XI-2. It requires ship security assessments, a ship security plan, a ship security officer, a company security officer, and an International Ship Security Certificate for ships to which it applies. Internal security audits check that the plan is used, not only filed.",
    },
    {
      type: "h3",
      id: "mlc-explained",
      text: "Maritime Labour Convention, 2006",
    },
    {
      type: "p",
      text: "The [Maritime Labour Convention, 2006](https://www.ilo.org/international-labour-standards/maritime-labour-convention-2006) is the ILO convention on seafarers’ working and living conditions. For ships that must be certified, flag processes typically involve a Maritime Labour Certificate and a Declaration of Maritime Labour Compliance. Inspection and PSC commonly look at seafarer employment agreements, wages, hours of rest, food, accommodation, medical care and complaint procedures, among other areas determined by the convention and flag implementation.",
    },
    {
      type: "h2",
      id: "differences",
      text: "How these frameworks and their audits differ",
    },
    {
      type: "ul",
      items: [
        "ISM is about safety management and pollution prevention as a system: procedures, resources, reporting and continual improvement.",
        "ISPS is about security measures, access control, drills and the controlled ship security plan.",
        "MLC is about seafarer living and working conditions and the records that show those conditions are met.",
        "External certification audits are performed under flag / recognised-organisation arrangements. Internal audits are the company’s own check. PSC may later sample the same systems in port, including in Australia — see AMSA’s notes on [common ISM](https://www.amsa.gov.au/vessels-operators/port-state-control/port-state-control-inspection-common-international-safety) and [MLC](https://www.amsa.gov.au/vessels-operators/port-state-control/port-state-control-inspection-common-maritime-labour) deficiencies.",
      ],
    },
    {
      type: "h2",
      id: "organise-records",
      text: "Organise procedures, records, certificates and training",
    },
    {
      type: "p",
      text: "Before an auditor arrives, the office and ship should be able to produce the current manuals, the certificates that belong to that system, training and drill records, master’s or company’s reviews, and the non-conformity log. Version control matters: an SMS revision that never reached the ship is a finding waiting to happen.",
    },
    {
      type: "h2",
      id: "previous-findings",
      text: "Review previous findings and verify follow-up",
    },
    {
      type: "ol",
      items: [
        "List open internal, external and PSC findings that touch ISM, ISPS or MLC.",
        "For each, attach evidence of corrective and preventive action, or record why it remains open.",
        "Check that the root-cause description is still honest. Replacing a broken printer does not fix a missing hours-of-rest culture.",
        "Brief the master and designated person so they describe the same close-out.",
      ],
    },
    {
      type: "h2",
      id: "ism-checklist",
      text: "ISM preparation checklist",
    },
    {
      type: "checklist",
      id: "ism-prep",
      title: "ISM internal-audit prompts",
      items: [
        { label: "Current SMS manuals on board and ashore, with matching revision status" },
        { label: "Document of Compliance and Safety Management Certificate, if applicable, with endorsements" },
        { label: "Designated person identity, contact and evidence they have access to the highest levels of management" },
        { label: "Master’s authority and master’s review records" },
        { label: "Internal-audit programme and last audit report" },
        { label: "Non-conformity, accident and hazardous-occurrence reports with follow-up" },
        { label: "Maintenance system sampling against critical equipment in the SMS" },
        { label: "Drills and familiarisation records that match what the crew can actually do" },
      ],
    },
    {
      type: "h2",
      id: "isps-checklist",
      text: "ISPS preparation checklist",
    },
    {
      type: "checklist",
      id: "isps-prep",
      title: "ISPS internal-audit prompts",
      items: [
        { label: "International Ship Security Certificate, if applicable" },
        { label: "Controlled access to the ship security plan; auditors should follow the company’s security protocol" },
        { label: "Company security officer and ship security officer identified and trained as required by the company system" },
        { label: "Access control, visitor logs and restricted-area measures for the current security level" },
        { label: "Security drills and exercises recorded" },
        { label: "Interface with the port facility as applicable to the port call" },
        { label: "Records of security incidents and declarations of security if used" },
      ],
    },
    {
      type: "h2",
      id: "mlc-checklist",
      text: "MLC preparation checklist",
    },
    {
      type: "checklist",
      id: "mlc-prep",
      title: "MLC internal-audit prompts",
      items: [
        { label: "Maritime Labour Certificate and DMLC Parts I and II, if the ship is certified" },
        { label: "Seafarer employment agreements that match the people on board" },
        { label: "Wage records and allotments" },
        { label: "Hours of work and rest records that can be reconciled with watch bills" },
        { label: "Food, water, accommodation and recreational facilities as applicable" },
        { label: "Medical chest, medical care arrangements and seafarer complaint procedure" },
        { label: "Evidence that crew know how to use the complaint procedure without victimisation" },
      ],
    },
    {
      type: "h2",
      id: "corrective-action",
      text: "How to record findings and manage corrective actions",
    },
    {
      type: "p",
      text: "Record the finding against the procedure or clause, the evidence, the agreed action, the person responsible and the due date. Verify close-out with new evidence, not a signature alone. Recurring findings should be raised to management review. Do not close an ISM non-conformity because a PSC visit is next week if the system has not changed.",
    },
    {
      type: "h2",
      id: "questions-for-provider",
      text: "Questions before engaging an independent audit or consultancy provider",
    },
    {
      type: "ol",
      items: [
        "Is the work an internal audit against our SMS, a gap analysis, or something else?",
        "Which code and which sites: office, ship, or both?",
        "How will security-sensitive ISPS material be handled?",
        "What will the report contain, and who owns the findings?",
        "Does the provider claim flag, RO or statutory powers they do not have?",
      ],
    },
    {
      type: "p",
      text: "To discuss independent internal-audit support, see [PMS Internal Audits for ISM, ISPS and MLC](/internal-audits-for-ism-isps-and-mlc/).",
    },
    {
      type: "h2",
      id: "key-takeaways",
      text: "Key takeaways",
    },
    {
      type: "ul",
      items: [
        "ISM, ISPS and MLC overlap on board but they are different systems with different records.",
        "Internal audit checks implementation. It is not a certificate.",
        "Open findings from last time are the first sample this time.",
        "Choose a provider who will describe the work accurately and stay within an agreed scope.",
      ],
    },
  ],
};
