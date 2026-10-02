import FAQ from "@/components/common/FAQ";
import { marineSafetyInspectionFaqs } from "@/data/faqs";

export default function MarineSafetyFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={marineSafetyInspectionFaqs}
          title="Marine Safety Inspection FAQs"
          description="Answers about marine safety inspections, inspection scope and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
