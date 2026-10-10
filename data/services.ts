import { photos, stockPhotos } from "@/data/site-images";

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
    label: "Marine Safety Inspection in Australia",
    description:
      "Inspection of vessel safety arrangements, equipment and onboard procedures for operational use.",
    href: "/marine-safety-inspection-in-australia/",
    icon: "safety-inspection",
    image: photos.rescueBoat.src,
    imageAlt: photos.rescueBoat.alt,
  },
  {
    title: "AMSA DCV Marine Surveyor",
    label: "AMSA DCV Marine Surveyor",
    description:
      "Survey support for domestic commercial vessels against AMSA-related inspection requirements.",
    href: "/amsa-dcv-marine-surveyor/",
    icon: "amsa-dcv",
    image: stockPhotos.dcvWorkboat.src,
    imageAlt: stockPhotos.dcvWorkboat.alt,
  },
  {
    title: "Flag State Inspection",
    label: "Flag State Inspection",
    description:
      "Inspection of a vessel against the requirements of its flag administration.",
    href: "/flag-state-inspection/",
    icon: "flag-state",
    image: photos.vesselAlongside.src,
    imageAlt: photos.vesselAlongside.alt,
  },
  {
    title: "Class Related Consultant",
    label: "Class Related Consultant",
    description:
      "Consultancy for class surveys, related findings and supporting technical documentation.",
    href: "/class-related-consultant/",
    icon: "class-consultant",
    image: photos.mooringWinch.src,
    imageAlt: photos.mooringWinch.alt,
  },
  {
    title: "Internal Audits for ISM, ISPS and MLC",
    label: "Internal Audits for ISM, ISPS and MLC",
    description:
      "Internal audits of ISM, ISPS and MLC management systems used on board and ashore.",
    href: "/internal-audits-for-ism-isps-and-mlc/",
    icon: "internal-audits",
    image: photos.bridgeGmdss.src,
    imageAlt: photos.bridgeGmdss.alt,
  },
  {
    title: "Pre-Purchase Inspection",
    label: "Pre-Purchase Inspection",
    description:
      "Independent inspection of a vessel's condition before a purchase decision is made.",
    href: "/pre-purchase-inspection/",
    icon: "pre-purchase",
    image: photos.bulkHatches.src,
    imageAlt: photos.bulkHatches.alt,
  },
  {
    title: "Pre-AMSA Inspection",
    label: "Pre-AMSA Inspection",
    description:
      "Inspection to identify issues before an AMSA attendance or related survey.",
    href: "/pre-amsa-inspection/",
    icon: "pre-amsa",
    image: photos.bridgeConsole.src,
    imageAlt: photos.bridgeConsole.alt,
  },
  {
    title: "Cargo Surveyor",
    label: "Cargo Surveyor",
    description:
      "Cargo survey work covering loading, discharge, condition and quantity where required.",
    href: "/cargo-surveyor/",
    icon: "cargo-survey",
    image: photos.containerGantries.src,
    imageAlt: photos.containerGantries.alt,
  },
  {
    title: "Technical Inspection & Marine Engineering Consultancy",
    label: "Technical Inspection & Marine Engineering Consultancy",
    description:
      "Technical inspection and engineering advice for vessel systems and marine operations.",
    href: "/technical-inspection-and-marine-engineering-consultancy/",
    icon: "technical-consultancy",
    image: stockPhotos.engineRoom.src,
    imageAlt: stockPhotos.engineRoom.alt,
  },
  {
    title: "Bunker Surveyor",
    label: "Bunker Surveyor",
    description:
      "Measurement and verification of bunker quantity during delivery or transfer.",
    href: "/bunker-surveyor/",
    icon: "bunker-survey",
    image: stockPhotos.bunkerHose.src,
    imageAlt: stockPhotos.bunkerHose.alt,
  },
  {
    title: "Pre-PSC Inspection",
    label: "Pre-PSC Inspection in Australia",
    description:
      "Inspection to review a vessel's readiness before a port state control attendance.",
    href: "/pre-psc-inspection-in-australia/",
    icon: "pre-psc",
    image: photos.heroHarbour.src,
    imageAlt: photos.heroHarbour.alt,
  },
  {
    title: "Safety Vetting Inspection",
    label: "Safety Vetting Inspector in Australia",
    description:
      "Safety vetting inspection of vessels against charterer or operator inspection criteria.",
    href: "/safety-vetting-inspector-in-australia/",
    icon: "safety-vetting",
    image: photos.tankerDeckPersonnel.src,
    imageAlt: photos.tankerDeckPersonnel.alt,
  },
];
