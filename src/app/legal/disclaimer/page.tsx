import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Medinet Pharmaceuticals",
  description: "Important legal and medical disclaimers regarding the use of Medinet Pharmaceuticals products, information, and corporate website.",
  alternates: { canonical: "/legal/disclaimer" }
};

export default function DisclaimerPage() {
  const sections = [
    { id: "medical-disclaimer", title: "1. Medical Disclaimer" },
    { id: "product-info", title: "2. Product Information" },
    { id: "liability", title: "3. Limitation of Liability" },
    { id: "external-links", title: "4. External Links" }
  ];

  return (
    <LegalLayout
      title="Disclaimer"
      currentRoute="disclaimer"
      sections={sections}
    >
      <section id="medical-disclaimer">
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Medical Disclaimer</h2>
        <p>The contents of this website, including text, graphics, images, and other materials, are intended for informational and corporate purposes only. Nothing on this site should be construed as providing medical advice, diagnosing a condition, or recommending a treatment plan.</p>
        <p className="mt-3 font-semibold text-slate-900">Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
      </section>

      <section id="product-info">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">2. Product Information</h2>
        <p>The pharmaceutical products mentioned on this website are available by prescription only through licensed healthcare professionals. Information provided about our therapeutic segments is intended primarily for B2B partners, distributors, and medical practitioners, not for end-consumer self-medication.</p>
      </section>

      <section id="liability">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">3. Limitation of Liability</h2>
        <p>While Medinet Pharmaceuticals strives to ensure that all information on this website is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.</p>
      </section>

      <section id="external-links">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">4. External Links</h2>
        <p>This website may contain links to external clinical research sites, regulatory bodies, or partner portals that are not operated by Medinet Pharmaceuticals. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
      </section>
    </LegalLayout>
  );
}
