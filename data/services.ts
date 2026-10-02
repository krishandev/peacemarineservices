export type ServiceIconName =
  | "safety-inspection"
  | "amsa-dcv"
  | "flag-state"
  | "class-consultant"
  | "internal-audits"
  | "pre-purchase"
  | "pre-amsa"
  | "cargo-survey"
  | "technical-consultancy"
  | "bunker-survey"
  | "pre-psc"
  | "safety-vetting";

export type Service = {
  title: string;
  label: string;
  description: string;
  href: string;
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    title: "Marine Safety Inspection",
    label: "Marine Safety Inspection",
    description:
      "Inspection of vessel safety arrangements, equipment and onboard procedures for operational use.",
    href: "/our-services/marine-safety-inspection-in-australia/",
    icon: "safety-inspection",
    image: "/images/services/marine-safety-inspection.webp",
    imageAlt:
      "Inspector checking fire hoses and safety equipment in a commercial vessel corridor",
  },
  {
    title: "AMSA DCV Marine Surveyor",
    label: "AMSA DCV Marine Surveyor",
    description:
      "Survey support for domestic commercial vessels against AMSA-related inspection requirements.",
    href: "/our-services/amsa-dcv-marine-surveyor/",
    icon: "amsa-dcv",
    image: "/images/services/amsa-dcv-marine-surveyor.webp",
    imageAlt:
      "Surveyor inspecting a small commercial workboat at a harbour berth",
  },
  {
    title: "Flag State Inspection",
    label: "Flag State Inspection",
    description:
      "Inspection of a vessel against the requirements of its flag administration.",
    href: "/our-services/flag-state-inspection/",
    icon: "flag-state",
    image: "/images/services/flag-state-inspection.webp",
    imageAlt:
      "Inspector reviewing vessel documents beside a commercial ship at a quay",
  },
  {
    title: "Class Related Consultant",
    label: "Class Related Consultant",
    description:
      "Consultancy for class surveys, related findings and supporting technical documentation.",
    href: "/our-services/class-related-consultant/",
    icon: "class-consultant",
    image: "/images/services/class-related-consultant.webp",
    imageAlt:
      "Marine engineer inspecting machinery in a commercial ship engine room",
  },
  {
    title: "Internal Audits for ISM, ISPS & MLC",
    label: "Internal Audits for ISM, ISPS & MLC",
    description:
      "Internal audits of ISM, ISPS and MLC management systems used on board and ashore.",
    href: "/our-services/internal-audits-for-ism-isps-and-mlc/",
    icon: "internal-audits",
    image: "/images/services/internal-audits-ism-isps-mlc.webp",
    imageAlt:
      "Auditor reviewing vessel documentation and checklists at a desk onboard",
  },
  {
    title: "Pre-Purchase Inspection",
    label: "Pre-Purchase Inspection",
    description:
      "Independent inspection of a vessel's condition before a purchase decision is made.",
    href: "/our-services/pre-purchase-inspection/",
    icon: "pre-purchase",
    image: "/images/services/pre-purchase-inspection.webp",
    imageAlt:
      "Surveyor inspecting the deck and fittings of a vessel before purchase",
  },
  {
    title: "Pre-AMSA Inspection",
    label: "Pre-AMSA Inspection",
    description:
      "Inspection to identify issues before an AMSA attendance or related survey.",
    href: "/our-services/pre-amsa-inspection/",
    icon: "pre-amsa",
    image: "/images/services/pre-amsa-inspection.webp",
    imageAlt:
      "Surveyor on a commercial vessel deck reviewing an inspection checklist",
  },
  {
    title: "Cargo Surveyor",
    label: "Cargo Surveyor",
    description:
      "Cargo survey work covering loading, discharge, condition and quantity where required.",
    href: "/our-services/cargo-surveyor/",
    icon: "cargo-survey",
    image: "/images/services/cargo-surveyor.webp",
    imageAlt:
      "Shipping containers and a crane during cargo operations at a commercial port",
  },
  {
    title: "Technical Inspection & Marine Engineering Consultancy",
    label: "Technical Inspection & Marine Engineering Consultancy",
    description:
      "Technical inspection and engineering advice for vessel systems and marine operations.",
    href: "/our-services/technical-inspection-and-marine-engineering-consultancy/",
    icon: "technical-consultancy",
    image: "/images/services/technical-inspection-marine-engineering.webp",
    imageAlt:
      "Marine diesel machinery and piping in a commercial ship engine room",
  },
  {
    title: "Bunker Surveyor",
    label: "Bunker Surveyor",
    description:
      "Measurement and verification of bunker quantity during delivery or transfer.",
    href: "/our-services/bunker-surveyor/",
    icon: "bunker-survey",
    image: "/images/services/bunker-surveyor.webp",
    imageAlt:
      "Fuel hose connected during a bunkering operation between vessels at harbour",
  },
  {
    title: "Pre-PSC Inspection",
    label: "Pre-PSC Inspection",
    description:
      "Inspection to review a vessel's readiness before a port state control attendance.",
    href: "/our-services/pre-psc-inspection-in-australia/",
    icon: "pre-psc",
    image: "/images/services/pre-psc-inspection.webp",
    imageAlt:
      "Commercial cargo ship alongside a port berth during a vessel inspection",
  },
  {
    title: "Safety Vetting Inspection",
    label: "Safety Vetting Inspection",
    description:
      "Safety vetting inspection of vessels against charterer or operator inspection criteria.",
    href: "/our-services/safety-vetting-inspector-in-australia/",
    icon: "safety-vetting",
    image: "/images/services/safety-vetting-inspection.webp",
    imageAlt:
      "Surveyor assessing safety equipment on a tanker deck during a vetting inspection",
  },
];
