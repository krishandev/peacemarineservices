import {
  createPageMetadata,
  validateMetadata,
  type PageSeoInput,
} from "@/lib/seo";

export const pageSeo = {
  home: {
    title: "AMSA Marine Surveyor & Inspection, Australia | PMS",
    description:
      "PMS Peace Marine Services provides marine surveying, vessel inspection, AMSA and DCV preparation, and consultancy for operators across Western Australia.",
    path: "/",
  },
  about: {
    title: "About PMS Peace Marine Services | Surveyor Australia",
    description:
      "Learn about PMS Peace Marine Services, including marine surveying, vessel inspection, consultancy and audit support for operators across Western Australia.",
    path: "/about-us/",
  },
  services: {
    title: "Our Marine Services | WA Surveyor Inspection | PMS",
    description:
      "Explore PMS marine survey and inspection, including AMSA and DCV preparation, pre-purchase, cargo, bunker, technical and audit support across Australia.",
    path: "/our-services/",
  },
  serviceAreas: {
    title: "Marine Surveyor Service Areas in Western Australia",
    description:
      "Find PMS marine surveyor and inspection coverage across Perth, Fremantle, Kwinana, Bunbury, Albany, Geraldton and the Pilbara ports in Western Australia.",
    path: "/service-areas/",
  },
  contact: {
    title: "Contact PMS Peace Marine Services | Marine Surveyor",
    description:
      "Contact PMS Peace Marine Services about marine surveys, vessel inspections, AMSA and DCV preparation, consultancy and marine support across Australia.",
    path: "/contact/",
  },
  faq: {
    title: "Marine Surveyor FAQ Hub | Inspection Questions PMS",
    description:
      "Questions about marine surveys, vessel inspections, AMSA and DCV preparation, pre-purchase checks, cargo and bunker surveys, and technical marine support.",
    path: "/faq/",
  },
  privacy: {
    title: "Privacy Policy | PMS Peace Marine Services Australia",
    description:
      "How PMS Peace Marine Services collects, uses, stores and protects personal information from website enquiries, calls and marine service communications.",
    path: "/privacy-policy/",
  },
  blog: {
    title: "Marine Surveyor Blog | Maritime Inspection Insights",
    description:
      "PMS articles on marine surveying, vessel inspections, AMSA and DCV preparation, cargo and bunker surveys, technical work, audits and maritime operations.",
    path: "/blog/",
  },
  marineSafety: {
    title: "Marine Safety Inspection Services, Australia | PMS",
    description:
      "Marine safety inspection support covering vessel condition, safety equipment, emergency preparedness, documentation and readiness for Australian operators.",
    path: "/marine-safety-inspection-in-australia/",
    image: "/images/services/marine-safety-inspection.webp",
    imageAlt:
      "Inspector checking fire hoses and safety equipment in a commercial vessel corridor",
  },
  amsaDcv: {
    title: "AMSA DCV Marine Surveyor Services, Australia | PMS",
    description:
      "Marine surveyor support for domestic commercial vessel operators, DCV inspection preparation, documentation review and vessel inspection help in Australia.",
    path: "/amsa-dcv-marine-surveyor/",
    image: "/images/services/amsa-dcv-marine-surveyor.webp",
    imageAlt: "Surveyor inspecting a small commercial workboat at a harbour berth",
  },
  flagState: {
    title: "Flag State Inspection Preparation, Australia | PMS",
    description:
      "Flag State inspection preparation and marine consultancy covering vessel condition, safety systems, documentation and readiness for operators in Australia.",
    path: "/flag-state-inspection/",
    image: "/images/services/flag-state-inspection.webp",
    imageAlt:
      "Inspector reviewing vessel documents beside a commercial ship at a quay",
  },
  classConsultant: {
    title: "Class Related Marine Consultancy Services | PMS AU",
    description:
      "Class-related marine consultancy covering technical inspections, machinery, repairs and modifications. PMS does not claim classification authorisation.",
    path: "/class-related-consultant/",
    image: "/images/services/class-related-consultant.webp",
    imageAlt:
      "Marine engineer inspecting machinery in a commercial ship engine room",
  },
  internalAudits: {
    title: "ISM, ISPS and MLC Internal Audits | PMS, Australia",
    description:
      "Internal audit support for ISM, ISPS and MLC systems, audit preparation, evidence review, findings and corrective action planning for maritime operators.",
    path: "/internal-audits-for-ism-isps-and-mlc/",
    image: "/images/services/internal-audits-ism-isps-mlc.webp",
    imageAlt:
      "Auditor reviewing vessel documentation and checklists at a desk onboard",
  },
  prePurchase: {
    title: "Pre-Purchase Marine Inspection Services in Australia",
    description:
      "Pre-purchase marine inspections help buyers assess vessel condition, systems, documentation and technical issues before acquisition, with a written report.",
    path: "/pre-purchase-inspection/",
    image: "/images/services/pre-purchase-inspection.webp",
    imageAlt:
      "Surveyor inspecting the deck and fittings of a vessel before purchase",
  },
  preAmsa: {
    title: "Pre-AMSA Inspection Services for Australian Vessels",
    description:
      "Pre-AMSA inspection support covering inspection readiness, documentation, safety systems and possible deficiencies before an official AMSA inspection.",
    path: "/pre-amsa-inspection/",
    image: "/images/services/pre-amsa-inspection.webp",
    imageAlt:
      "Surveyor on a commercial vessel deck reviewing an inspection checklist",
  },
  cargo: {
    title: "Cargo Surveyor Services Australia | Inspection PMS",
    description:
      "Cargo surveyor services covering cargo condition, loading and discharge observations, damage assessment and written survey reporting at Australian ports.",
    path: "/cargo-surveyor/",
    image: "/images/services/cargo-surveyor.webp",
    imageAlt:
      "Shipping containers and a crane during cargo operations at a commercial port",
  },
  technical: {
    title: "Technical Marine Inspection & Consultancy | PMS AU",
    description:
      "Technical marine inspection consultancy covering machinery, engine-room systems, repairs, modifications and vessel assessments for Australian operators.",
    path: "/technical-inspection-and-marine-engineering-consultancy/",
    image: "/images/services/technical-inspection-marine-engineering.webp",
    imageAlt:
      "Marine diesel machinery and piping in a commercial ship engine room",
  },
  bunker: {
    title: "Bunker Surveyor Services Australia | Quantity | PMS",
    description:
      "Bunker survey services covering quantity measurement, bunker delivery documentation, sampling and discrepancy reporting during Australian fuel operations.",
    path: "/bunker-surveyor/",
    image: "/images/services/bunker-surveyor.webp",
    imageAlt:
      "Fuel hose connected during a bunkering operation between vessels at harbour",
  },
  prePsc: {
    title: "Pre-PSC Inspection Preparation Across Australia | PMS",
    description:
      "Pre-PSC inspection support to help operators identify deficiencies in safety, documentation and operational readiness before Port State Control attendance.",
    path: "/pre-psc-inspection-in-australia/",
    image: "/images/services/pre-psc-inspection.webp",
    imageAlt: "Commercial cargo ship alongside a port berth",
  },
  safetyVetting: {
    title: "Safety Vetting Inspector Services, Australia | PMS",
    description:
      "Safety vetting and pre-vetting support covering vessel condition, safety equipment, documentation and operational preparedness for commercial vessels.",
    path: "/safety-vetting-inspector-in-australia/",
    image: "/images/services/safety-vetting-inspection.webp",
    imageAlt:
      "Surveyor assessing safety equipment on a tanker deck during a vetting inspection",
  },
  perth: {
    title: "Marine Surveyor Perth WA | Vessel Inspection | PMS",
    description:
      "Marine surveyor support in Perth covering vessel safety, AMSA and DCV preparation, pre-purchase assessments, cargo, bunker and technical consultancy in WA.",
    path: "/accredited-amsa-marine-surveyor-in-perth/",
    image: "/images/services/pre-psc-inspection.webp",
    imageAlt: "Commercial cargo ship alongside a port berth",
  },
  fremantle: {
    title: "Marine Surveyor Fremantle | Cargo & Inspection PMS",
    description:
      "Marine surveyor services in Fremantle covering vessel inspections, cargo and bunker work, technical assessments and compliance preparation for operators.",
    path: "/accredited-amsa-marine-surveyor-in-fremantle/",
    image: "/images/services/cargo-surveyor.webp",
    imageAlt:
      "Shipping containers and a crane during cargo operations at a commercial port",
  },
  kwinana: {
    title: "Marine Surveyor Kwinana | Technical Inspection PMS",
    description:
      "Marine surveyor services in Kwinana covering port calls, vessel safety, technical inspections, AMSA and DCV preparation and consultancy for operators.",
    path: "/accredited-amsa-marine-surveyor-in-kwinana/",
    image: "/images/services/bunker-surveyor.webp",
    imageAlt:
      "Fuel hose connected during a bunkering operation between vessels at harbour",
  },
  bunbury: {
    title: "Marine Surveyor Bunbury | DCV Vessel Inspection PMS",
    description:
      "Marine surveyor services in Bunbury covering DCV support, vessel inspections, technical assessments and consultancy for South West WA marine operators.",
    path: "/accredited-amsa-maritime-surveyor-in-bunbury/",
    image: "/images/services/amsa-dcv-marine-surveyor.webp",
    imageAlt: "Surveyor inspecting a small commercial workboat at a harbour berth",
  },
  portHedland: {
    title: "Marine Surveyor Port Hedland | Vessel Inspection PMS",
    description:
      "Marine surveyor support in Port Hedland covering port calls, vessel safety, cargo, bunker work, technical assessments and DCV preparation in the Pilbara.",
    path: "/accredited-amsa-maritime-surveyor-in-port-hedland/",
    image: "/images/services/pre-amsa-inspection.webp",
    imageAlt:
      "Surveyor on a commercial vessel deck reviewing an inspection checklist",
  },
  dampier: {
    title: "Marine Surveyor Dampier | Cargo & Bunker Survey PMS",
    description:
      "Marine surveyor services in Dampier covering vessel safety, AMSA and DCV preparation, cargo and bunker work, and technical support for Pilbara operations.",
    path: "/accredited-amsa-maritime-surveyor-in-dampier/",
    image: "/images/services/technical-inspection-marine-engineering.webp",
    imageAlt:
      "Marine diesel machinery and piping in a commercial ship engine room",
  },
  albany: {
    title: "Marine Surveyor Albany | Pre-Purchase Inspection PMS",
    description:
      "Marine surveyor services in Albany covering vessel safety, pre-purchase assessments, cargo and bunker work, and technical support on WA's south coast.",
    path: "/accredited-amsa-maritime-surveyor-in-albany/",
    image: "/images/services/flag-state-inspection.webp",
    imageAlt:
      "Inspector reviewing vessel documents beside a commercial ship at a quay",
  },
  esperance: {
    title: "Marine Surveyor Esperance | Inspection Services PMS",
    description:
      "Marine surveyor services in Esperance covering vessel safety, pre-purchase, cargo and bunker work, and technical inspections for southern WA operators.",
    path: "/accredited-amsa-marine-surveyor-in-esperance/",
    image: "/images/services/marine-safety-inspection.webp",
    imageAlt:
      "Inspector checking fire hoses and safety equipment in a commercial vessel corridor",
  },
  karratha: {
    title: "Marine Surveyor Karratha | Pilbara Inspection | PMS",
    description:
      "Marine surveyor services in Karratha covering vessel inspections, DCV preparation, technical consultancy and support for operators across the Pilbara.",
    path: "/accredited-amsa-maritime-surveyor-in-karratha/",
    image: "/images/services/safety-vetting-inspection.webp",
    imageAlt:
      "Surveyor assessing safety equipment on a tanker deck during a vetting inspection",
  },
  geraldton: {
    title: "Marine Surveyor Geraldton | Mid West Inspection PMS",
    description:
      "Marine surveyor services in Geraldton covering vessel safety, cargo and bunker work, technical inspections and DCV preparation for Mid West WA operators.",
    path: "/accredited-amsa-maritime-surveyor-in-geraldton/",
    image: "/images/services/pre-purchase-inspection.webp",
    imageAlt:
      "Surveyor inspecting the deck and fittings of a vessel before purchase",
  },
  pilbara: {
    title: "Marine Surveyor Pilbara | Regional Inspection | PMS",
    description:
      "Marine surveyor work across the Pilbara, including Karratha, Dampier and Port Hedland, with safety, cargo, bunker and technical support for operators.",
    path: "/accredited-amsa-maritime-surveyor-in-pilbara/",
    image: "/images/services/class-related-consultant.webp",
    imageAlt:
      "Marine engineer inspecting machinery in a commercial ship engine room",
  },
} satisfies Record<string, PageSeoInput>;

const titles = new Set<string>();
const descriptions = new Set<string>();

for (const page of Object.values(pageSeo)) {
  validateMetadata(page.title, page.description, page.path);

  if (titles.has(page.title)) {
    throw new Error(`Duplicate SEO title: ${page.title}`);
  }

  if (descriptions.has(page.description)) {
    throw new Error(`Duplicate SEO description for ${page.path}`);
  }

  titles.add(page.title);
  descriptions.add(page.description);
}

export const pageMetadata = Object.fromEntries(
  Object.entries(pageSeo).map(([key, value]) => [
    key,
    createPageMetadata(value),
  ]),
) as { [K in keyof typeof pageSeo]: ReturnType<typeof createPageMetadata> };
