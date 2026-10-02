import FAQ from "@/components/common/FAQ";
import { amsaDcvFaqs } from "@/data/faqs";

export default function AmsaDcvFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={amsaDcvFaqs}
          title="AMSA DCV Marine Survey FAQs"
          description="Answers about Domestic Commercial Vessel surveys, inspection scope and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
