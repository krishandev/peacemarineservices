import FAQ from "@/components/common/FAQ";
import { technicalInspectionFaqs } from "@/data/faqs";

export default function TechFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={technicalInspectionFaqs}
          title="Technical Inspection & Engineering Consultancy FAQs"
          description="Answers about technical vessel inspection, marine engineering consultancy and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
