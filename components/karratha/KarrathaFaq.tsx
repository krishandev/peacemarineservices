import FAQ from "@/components/common/FAQ";
import { karrathaLocationFaqs } from "@/data/faqs";

export default function KarrathaFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={karrathaLocationFaqs}
          title="Marine Surveyor in Karratha FAQs"
          description="Answers about marine surveying and inspection support in Karratha, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
