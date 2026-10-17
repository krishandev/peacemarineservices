import { photos } from "@/data/site-images";

export interface Location {
  name: string;
  href?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export type CoverageRegion = {
  region: string;
  ports: readonly string[];
};

export const nationalCoverageRegions: CoverageRegion[] = [
  { region: "New South Wales", ports: ["Newcastle", "Sydney"] },
  {
    region: "Queensland",
    ports: ["Brisbane", "Gladstone", "Mackay", "Cairns", "Weipa"],
  },
  { region: "Victoria", ports: ["Melbourne"] },
  { region: "South Australia", ports: ["Adelaide"] },
  { region: "Northern Territory", ports: ["Darwin"] },
  { region: "Tasmania", ports: ["Tasmania"] },
];

export const nationalCoveragePorts = nationalCoverageRegions.flatMap(
  (group) => group.ports,
);

export const locations: Location[] = [
  {
    name: "Perth",
    href: "/accredited-amsa-marine-surveyor-in-perth/",
    description:
      "Marine surveying and vessel inspection support for maritime operators and vessel-related work connected with the Perth area.",
    image: photos.bridgeWide.src,
    imageAlt: photos.bridgeWide.alt,
  },
  {
    name: "Fremantle",
    href: "/accredited-amsa-marine-surveyor-in-fremantle/",
    description:
      "Marine surveying and vessel inspection support for maritime operations in and around Fremantle.",
    image: photos.containerGantries.src,
    imageAlt: photos.containerGantries.alt,
  },
  {
    name: "Kwinana",
    href: "/accredited-amsa-marine-surveyor-in-kwinana/",
    description:
      "Inspection and survey support for vessels and operators using Kwinana and nearby industrial marine facilities.",
    image: photos.tankerDeckGreen.src,
    imageAlt: photos.tankerDeckGreen.alt,
  },
  {
    name: "Bunbury",
    href: "/accredited-amsa-maritime-surveyor-in-bunbury/",
    description:
      "Marine survey and inspection support for vessels calling at Bunbury and related South West maritime operations.",
    image: photos.shipAtSea.src,
    imageAlt: photos.shipAtSea.alt,
  },
  {
    name: "Albany",
    href: "/accredited-amsa-maritime-surveyor-in-albany/",
    description:
      "Vessel inspection and marine survey support for ships and operators connected with Albany.",
    image: photos.bulkDeckCrane.src,
    imageAlt: photos.bulkDeckCrane.alt,
  },
  {
    name: "Esperance",
    href: "/accredited-amsa-marine-surveyor-in-esperance/",
    description:
      "Marine surveying and inspection support for vessels and operators using Esperance.",
    image: photos.enclosedLifeboat.src,
    imageAlt: photos.enclosedLifeboat.alt,
  },
  {
    name: "Geraldton",
    href: "/accredited-amsa-maritime-surveyor-in-geraldton/",
    description:
      "Inspection, survey and related marine support for vessels operating through Geraldton.",
    image: photos.cargoLoading.src,
    imageAlt: photos.cargoLoading.alt,
  },
  {
    name: "Port Hedland",
    href: "/accredited-amsa-maritime-surveyor-in-port-hedland/",
    description:
      "Marine inspection and survey support for vessels and operators connected with Port Hedland.",
    image: photos.bulkLoading.src,
    imageAlt: photos.bulkLoading.alt,
  },
  {
    name: "Dampier",
    href: "/accredited-amsa-maritime-surveyor-in-dampier/",
    description:
      "Vessel inspection and surveying support for marine operations in the Dampier area.",
    image: photos.bulkHatches.src,
    imageAlt: photos.bulkHatches.alt,
  },
  {
    name: "Karratha",
    href: "/accredited-amsa-maritime-surveyor-in-karratha/",
    description:
      "Marine surveying and inspection support for maritime stakeholders connected with Karratha.",
    image: photos.rescueBoat.src,
    imageAlt: photos.rescueBoat.alt,
  },
  {
    name: "Pilbara",
    href: "/accredited-amsa-maritime-surveyor-in-pilbara/",
    description:
      "Marine surveying, inspection and related support across Pilbara port and marine locations.",
    image: photos.tankerDeckPersonnel.src,
    imageAlt: photos.tankerDeckPersonnel.alt,
  },
  {
    name: "Western Australia",
    href: "/service-areas/",
    description:
      "Statewide marine surveying, inspection, auditing and consultancy support across Western Australia.",
    image: photos.bridgeEcdis.src,
    imageAlt: photos.bridgeEcdis.alt,
  },
];

export const serviceAreas = locations
  .filter((location): location is Location & { href: string } =>
    Boolean(location.href),
  )
  .map((location) => ({
    href: location.href,
    label: location.name,
  }));

export const serviceCoverage = [
  ...locations
    .filter((location) => location.name !== "Western Australia")
    .map((location) => location.name),
  ...nationalCoveragePorts,
];
