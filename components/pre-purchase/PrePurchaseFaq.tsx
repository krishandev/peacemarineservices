import FAQ from "@/components/common/FAQ";
import { prePurchaseInspectionFaqs } from "@/data/faqs";

export default function PrePurchaseFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={prePurchaseInspectionFaqs}
          title="Pre-Purchase Inspection FAQs"
          description="Answers about pre-purchase vessel inspections, inspection scope and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
