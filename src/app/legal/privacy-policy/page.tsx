import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Medinet Pharmaceuticals",
  description: "Learn about how Medinet Pharmaceuticals collects, uses, and protects your corporate and personal data in compliance with global healthcare privacy standards.",
  alternates: { canonical: "/legal/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "information-collection", title: "1. Information Collection" },
    { id: "use-of-data", title: "2. Use of Corporate Data" },
    { id: "data-security", title: "3. Data Security & Compliance" },
    { id: "third-party", title: "4. Third-Party Sharing" },
    { id: "your-rights", title: "5. Your Privacy Rights" }
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      currentRoute="privacy-policy"
      sections={sections}
    >
      <section id="information-collection">
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information Collection</h2>
        <p>Medinet Pharmaceutical Marketing Company respects the privacy of our partners, healthcare professionals, and website visitors. We collect only essential corporate data, including B2B contact details, professional affiliations, and IP addresses for basic analytical purposes.</p>
      </section>

      <section id="use-of-data">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">2. Use of Corporate Data</h2>
        <p>The information collected is strictly utilized to facilitate pharmaceutical distribution inquiries, process quality assurance documents, and maintain effective communication regarding product pipelines and clinical trial data.</p>
      </section>

      <section id="data-security">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">3. Data Security & Compliance</h2>
        <p>We deploy enterprise-grade, HIPAA and GDPR compliant security infrastructure to protect against unauthorized access, alteration, or destruction of digital assets and partner information.</p>
      </section>

      <section id="third-party">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">4. Third-Party Sharing</h2>
        <p>We do not sell or lease corporate data. Information is only shared with authorized logistics partners and regulatory bodies (e.g., FDA, WHO-GMP auditors) when strictly necessary for compliance and operational delivery.</p>
      </section>

      <section id="your-rights">
        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-6">5. Your Privacy Rights</h2>
        <p>Under international privacy laws, you retain the right to request access, modification, or deletion of your records stored in our systems. For data-related inquiries, please contact our Data Protection Officer at privacy@medinetpharma.com.</p>
      </section>
    </LegalLayout>
  );
}
