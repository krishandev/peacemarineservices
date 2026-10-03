import FAQ from "@/components/common/FAQ";
import { esperanceLocationFaqs } from "@/data/faqs";

export default function EsperanceFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={esperanceLocationFaqs}
          title="Marine Surveyor in Esperance FAQs"
          description="Answers about marine surveying and inspection support in Esperance, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
