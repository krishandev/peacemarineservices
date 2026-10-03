import FAQ from "@/components/common/FAQ";
import { safetyVettingFaqs } from "@/data/faqs";

export default function SafetyVettingFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={safetyVettingFaqs}
          title="Safety Vetting Inspection FAQs"
          description="Answers about safety vetting and pre-vetting inspection support, how it differs from official inspections, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
