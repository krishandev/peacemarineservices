import FAQ from "@/components/common/FAQ";
import { albanyLocationFaqs } from "@/data/faqs";

export default function AlbanyFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={albanyLocationFaqs}
          title="Marine Surveyor in Albany FAQs"
          description="Answers about marine surveying and inspection support in Albany, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
