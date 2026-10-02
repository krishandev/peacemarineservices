export interface Location {
  name: string;
  href: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export const locations: Location[] = [
  {
    name: "Perth",
    href: "/service-areas/perth/",
    description:
      "Marine surveying and vessel inspection support for maritime operators and vessel-related work connected with the Perth area.",
    image: "/images/services/pre-psc-inspection.webp",
    imageAlt: "Commercial cargo ship alongside a port berth",
  },
  {
    name: "Fremantle",
    href: "/service-areas/fremantle/",
    description:
      "Marine surveying and vessel inspection support for maritime operations in and around Fremantle.",
    image: "/images/services/cargo-surveyor.webp",
    imageAlt: "Shipping containers and a crane during cargo operations at a commercial port",
  },
  {
    name: "Kwinana",
    href: "/service-areas/kwinana/",
    description:
      "Inspection and survey support for vessels and operators using Kwinana and nearby industrial marine facilities.",
    image: "/images/services/bunker-surveyor.webp",
    imageAlt: "Fuel hose connected during a bunkering operation between vessels at harbour",
  },
  {
    name: "Bunbury",
    href: "/service-areas/bunbury/",
    description:
      "Marine survey and inspection support for vessels calling at Bunbury and related South West maritime operations.",
    image: "/images/services/amsa-dcv-marine-surveyor.webp",
    imageAlt: "Surveyor inspecting a small commercial workboat at a harbour berth",
  },
  {
    name: "Albany",
    href: "/service-areas/albany/",
    description:
      "Vessel inspection and marine survey support for ships and operators connected with Albany.",
    image: "/images/services/flag-state-inspection.webp",
    imageAlt: "Inspector reviewing vessel documents beside a commercial ship at a quay",
  },
  {
    name: "Esperance",
    href: "/service-areas/esperance/",
    description:
      "Marine surveying and inspection support for vessels and operators using Esperance.",
    image: "/images/services/marine-safety-inspection.webp",
    imageAlt: "Inspector checking fire hoses and safety equipment in a commercial vessel corridor",
  },
  {
    name: "Geraldton",
    href: "/service-areas/geraldton/",
    description:
      "Inspection, survey and related marine support for vessels operating through Geraldton.",
    image: "/images/services/pre-purchase-inspection.webp",
    imageAlt: "Surveyor inspecting the deck and fittings of a vessel before purchase",
  },
  {
    name: "Port Hedland",
    href: "/service-areas/port-hedland/",
    description:
      "Marine inspection and survey support for vessels and operators connected with Port Hedland.",
    image: "/images/services/pre-amsa-inspection.webp",
    imageAlt: "Surveyor on a commercial vessel deck reviewing an inspection checklist",
  },
  {
    name: "Dampier",
    href: "/service-areas/dampier/",
    description:
      "Vessel inspection and surveying support for marine operations in the Dampier area.",
    image: "/images/services/technical-inspection-marine-engineering.webp",
    imageAlt: "Marine diesel machinery and piping in a commercial ship engine room",
  },
  {
    name: "Karratha",
    href: "/service-areas/karratha/",
    description:
      "Marine surveying and inspection support for maritime stakeholders connected with Karratha.",
    image: "/images/services/safety-vetting-inspection.webp",
    imageAlt: "Surveyor assessing safety equipment on a tanker deck during a vetting inspection",
  },
  {
    name: "Pilbara",
    href: "/service-areas/pilbara/",
    description:
      "Marine surveying, inspection and related support across Pilbara port and marine locations.",
    image: "/images/services/class-related-consultant.webp",
    imageAlt: "Marine engineer inspecting machinery in a commercial ship engine room",
  },
  {
    name: "Western Australia",
    href: "/service-areas/western-australia/",
    description:
      "Statewide marine surveying, inspection, auditing and consultancy support across Western Australia.",
    image: "/images/services/internal-audits-ism-isps-mlc.webp",
    imageAlt: "Auditor reviewing vessel documentation and checklists at a desk onboard",
  },
];

export const serviceAreas = locations.map((location) => ({
  href: location.href,
  label: location.name,
}));

export const serviceCoverage = [
  "Kwinana",
  "Fremantle Port",
  "Bunbury Port",
  "Albany Port",
  "Esperance Port",
  "Geraldton Port",
  "Western Australia",
] as const;
