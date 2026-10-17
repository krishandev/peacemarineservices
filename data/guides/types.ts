import type { FAQItem } from "@/data/faqs";
import type { SiteImage } from "@/data/site-images";

export type GuideCategory =
  | "Port State Control"
  | "Domestic commercial vessels"
  | "Vessel purchase"
  | "Inspection preparation"
  | "Management system audits";

export type GuideLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ChecklistItem = {
  label: string;
  note?: string;
};

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "checklist";
      id: string;
      title: string;
      intro?: string;
      items: ChecklistItem[];
    }
  | {
      type: "callout";
      variant: "limitation" | "note";
      title: string;
      text: string;
    };

export type Guide = {
  slug: string;
  path: string;
  h1: string;
  summary: string;
  audience: string;
  category: GuideCategory;
  readingMinutes: number;
  image: SiteImage;
  relatedService: GuideLink;
  relatedGuideSlugs: string[];
  sources: GuideLink[];
  faqs: FAQItem[];
  toc: { id: string; label: string }[];
  blocks: GuideBlock[];
};
