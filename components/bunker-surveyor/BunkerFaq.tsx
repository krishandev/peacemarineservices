import FAQ from "@/components/common/FAQ";
import { bunkerSurveyorFaqs } from "@/data/faqs";

export default function BunkerFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={bunkerSurveyorFaqs}
          title="Bunker Surveyor FAQs"
          description="Answers about bunker surveys, fuel quantity, sampling, Bunker Delivery Notes and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
