import FAQ from "@/components/common/FAQ";
import { bunburyLocationFaqs } from "@/data/faqs";

export default function BunburyFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={bunburyLocationFaqs}
          title="Marine Surveyor in Bunbury FAQs"
          description="Answers about marine surveying and inspection support in Bunbury, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
