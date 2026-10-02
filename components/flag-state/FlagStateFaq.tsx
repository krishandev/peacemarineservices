import FAQ from "@/components/common/FAQ";
import { flagStateInspectionFaqs } from "@/data/faqs";

export default function FlagStateFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={flagStateInspectionFaqs}
          title="Flag State Inspection FAQs"
          description="Answers about Flag State inspections, Port State Control, documentation and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
