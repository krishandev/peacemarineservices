import FAQ from "@/components/common/FAQ";
import { geraldtonLocationFaqs } from "@/data/faqs";

export default function GeraldtonFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={geraldtonLocationFaqs}
          title="Marine Surveyor in Geraldton FAQs"
          description="Answers about marine surveying and inspection support in Geraldton, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
