import FAQ from "@/components/common/FAQ";
import { prePscInspectionFaqs } from "@/data/faqs";

export default function PrePscFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={prePscInspectionFaqs}
          title="Pre-PSC Inspection FAQs"
          description="Answers about Pre-PSC inspection support, how it differs from official Port State Control, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
