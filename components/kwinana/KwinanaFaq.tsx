import FAQ from "@/components/common/FAQ";
import { kwinanaLocationFaqs } from "@/data/faqs";

export default function KwinanaFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={kwinanaLocationFaqs}
          title="Marine Surveyor in Kwinana FAQs"
          description="Answers about marine surveying and inspection support in Kwinana, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
