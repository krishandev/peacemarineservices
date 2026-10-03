import FAQ from "@/components/common/FAQ";
import { cargoSurveyorFaqs } from "@/data/faqs";

export default function CargoFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={cargoSurveyorFaqs}
          title="Cargo Surveyor FAQs"
          description="Answers about cargo surveys, loading and discharge attendance, quantity-related observations and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
