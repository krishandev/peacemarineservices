import { dcvGuide } from "@/data/guides/dcv";
import { ismIspsMlcGuide } from "@/data/guides/ism-isps-mlc";
import { marineInspectionGuide } from "@/data/guides/marine-inspection";
import { prePscGuide } from "@/data/guides/pre-psc";
import { prePurchaseGuide } from "@/data/guides/pre-purchase";
import type { Guide, GuideCategory } from "@/data/guides/types";

export const guides: Guide[] = [
  prePscGuide,
  dcvGuide,
  prePurchaseGuide,
  marineInspectionGuide,
  ismIspsMlcGuide,
];

export const guideCategories: GuideCategory[] = [
  "Port State Control",
  "Domestic commercial vessels",
  "Vessel purchase",
  "Inspection preparation",
  "Management system audits",
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is Guide => Boolean(guide));
}

export function getGuideFaqsByPath() {
  return Object.fromEntries(guides.map((guide) => [guide.path, guide.faqs]));
}

export const footerGuideLinks = [
  {
    href: prePscGuide.path,
    label: "Pre-PSC inspection checklist",
  },
  {
    href: dcvGuide.path,
    label: "Australian DCV survey requirements",
  },
  {
    href: prePurchaseGuide.path,
    label: "Pre-purchase inspection checklist",
  },
  {
    href: marineInspectionGuide.path,
    label: "Marine inspection preparation checklist",
  },
  {
    href: ismIspsMlcGuide.path,
    label: "ISM, ISPS and MLC audit preparation",
  },
] as const;

export function relatedGuideSlugsForText(text: string) {
  const hay = text.toLowerCase();
  const slugs: string[] = [];

  if (/port state|pre-psc|pre psc|\bpsc\b/.test(hay)) {
    slugs.push("pre-psc-inspection-checklist");
  }
  if (/domestic commercial|\bdcv\b|pre-amsa|pre amsa/.test(hay)) {
    slugs.push("australian-dcv-survey-requirements");
  }
  if (/pre-purchase|pre purchase|buying a vessel|vessel purchase/.test(hay)) {
    slugs.push("pre-purchase-vessel-inspection-checklist");
  }
  if (/\bism\b|\bisps\b|\bmlc\b|internal audit/.test(hay)) {
    slugs.push("ism-isps-mlc-audit-preparation");
  }
  if (
    /inspection preparation|marine inspection|marine surveyor/.test(hay) &&
    slugs.length < 2
  ) {
    slugs.push("marine-inspection-preparation-checklist");
  }

  return [...new Set(slugs)].slice(0, 2);
}
