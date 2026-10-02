import FAQ from "@/components/common/FAQ";
import { preAmsaInspectionFaqs } from "@/data/faqs";

export default function PreAmsaFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={preAmsaInspectionFaqs}
          title="Pre-AMSA Inspection FAQs"
          description="Answers about Pre-AMSA inspection support, how it differs from official AMSA activity, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
