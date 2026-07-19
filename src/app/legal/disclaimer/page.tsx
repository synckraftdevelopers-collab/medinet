import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalCallout } from "../../../components/LegalLayout";

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
      <LegalSection id="medical-disclaimer" title="1. Medical Disclaimer" icon="ShieldCheck">
        <p>The contents of this website, including text, graphics, images, and other materials, are intended for informational and corporate purposes only. Nothing on this site should be construed as providing medical advice, diagnosing a condition, or recommending a treatment plan.</p>
        <p className="mt-3 font-semibold text-[#0F172A]">Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        <LegalCallout>This platform provides B2B legal information, not direct medical counsel.</LegalCallout>
      </LegalSection>

      <LegalSection id="product-info" title="2. Product Information" icon="Database">
        <p>The pharmaceutical products mentioned on this website are available by prescription only through licensed healthcare professionals. Information provided about our therapeutic segments is intended primarily for B2B partners, distributors, and medical practitioners, not for end-consumer self-medication.</p>
      </LegalSection>

      <LegalSection id="liability" title="3. Limitation of Liability" icon="Scale">
        <p>While Medinet Pharmaceuticals strives to ensure that all information on this website is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.</p>
        <LegalCallout>Limitation of liability is subject to specific local legal frameworks.</LegalCallout>
      </LegalSection>

      <LegalSection id="external-links" title="4. External Links" icon="Handshake">
        <p>This website may contain links to external clinical research sites, regulatory bodies, or partner portals that are not operated by Medinet Pharmaceuticals. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
      </LegalSection>
    </LegalLayout>
  );
}
