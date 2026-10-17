import { faqHubCategories } from "@/components/faq/faqCategories";
import {
  albanyLocationFaqs,
  amsaDcvFaqs,
  bunburyLocationFaqs,
  bunkerSurveyorFaqs,
  cargoSurveyorFaqs,
  classRelatedConsultantFaqs,
  dampierLocationFaqs,
  esperanceLocationFaqs,
  faqs,
  flagStateInspectionFaqs,
  fremantleLocationFaqs,
  geraldtonLocationFaqs,
  internalAuditsFaqs,
  karrathaLocationFaqs,
  kwinanaLocationFaqs,
  marineSafetyInspectionFaqs,
  ourServicesFaqs,
  perthLocationFaqs,
  pilbaraLocationFaqs,
  portHedlandLocationFaqs,
  preAmsaInspectionFaqs,
  prePscInspectionFaqs,
  prePurchaseInspectionFaqs,
  safetyVettingFaqs,
  serviceAreasFaqs,
  technicalInspectionFaqs,
  type FAQItem,
} from "@/data/faqs";
import { getGuideFaqsByPath } from "@/data/guides";
import { normalizeFaqText, reactNodeToPlainText } from "@/lib/faq-text";

function hubFaqs(): FAQItem[] {
  return faqHubCategories.flatMap((category) =>
    category.items.map((item) => ({
      question: item.question,
      answer: normalizeFaqText(reactNodeToPlainText(item.answer)),
    })),
  );
}

const faqsByPath: Record<string, FAQItem[]> = {
  "/": faqs,
  "/our-services/": ourServicesFaqs,
  "/service-areas/": serviceAreasFaqs,
  "/faq/": hubFaqs(),
  "/marine-safety-inspection-in-australia/": marineSafetyInspectionFaqs,
  "/amsa-dcv-marine-surveyor/": amsaDcvFaqs,
  "/flag-state-inspection/": flagStateInspectionFaqs,
  "/class-related-consultant/": classRelatedConsultantFaqs,
  "/internal-audits-for-ism-isps-and-mlc/": internalAuditsFaqs,
  "/pre-purchase-inspection/": prePurchaseInspectionFaqs,
  "/pre-amsa-inspection/": preAmsaInspectionFaqs,
  "/cargo-surveyor/": cargoSurveyorFaqs,
  "/technical-inspection-and-marine-engineering-consultancy/":
    technicalInspectionFaqs,
  "/bunker-surveyor/": bunkerSurveyorFaqs,
  "/pre-psc-inspection-in-australia/": prePscInspectionFaqs,
  "/safety-vetting-inspector-in-australia/": safetyVettingFaqs,
  "/accredited-amsa-marine-surveyor-in-perth/": perthLocationFaqs,
  "/accredited-amsa-marine-surveyor-in-fremantle/": fremantleLocationFaqs,
  "/accredited-amsa-marine-surveyor-in-kwinana/": kwinanaLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-bunbury/": bunburyLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-port-hedland/": portHedlandLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-dampier/": dampierLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-albany/": albanyLocationFaqs,
  "/accredited-amsa-marine-surveyor-in-esperance/": esperanceLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-karratha/": karrathaLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-geraldton/": geraldtonLocationFaqs,
  "/accredited-amsa-maritime-surveyor-in-pilbara/": pilbaraLocationFaqs,
  ...getGuideFaqsByPath(),
};

export function getFaqsForPath(path: string): FAQItem[] | undefined {
  const items = faqsByPath[path];
  return items && items.length > 0 ? items : undefined;
}
