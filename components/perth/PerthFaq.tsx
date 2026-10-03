import FAQ from "@/components/common/FAQ";
import { perthLocationFaqs } from "@/data/faqs";

export default function PerthFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={perthLocationFaqs}
          title="Marine Surveyor in Perth FAQs"
          description="Answers about marine surveying and inspection support in Perth, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
