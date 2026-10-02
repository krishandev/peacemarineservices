import FAQ from "@/components/common/FAQ";
import { classRelatedConsultantFaqs } from "@/data/faqs";

export default function ClassConsultantFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={classRelatedConsultantFaqs}
          title="Class Related Consultancy FAQs"
          description="Answers about class-related marine consultancy, survey preparation and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
