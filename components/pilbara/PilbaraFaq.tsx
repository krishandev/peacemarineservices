import FAQ from "@/components/common/FAQ";
import { pilbaraLocationFaqs } from "@/data/faqs";

export default function PilbaraFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={pilbaraLocationFaqs}
          title="Marine Surveyor in the Pilbara FAQs"
          description="Answers about marine surveying and inspection support across the Pilbara, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
