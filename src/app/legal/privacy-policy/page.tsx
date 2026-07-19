import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalCallout } from "../../../components/LegalLayout";

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
      <LegalSection id="information-collection" title="1. Information Collection" icon="Database">
        <p>Medinet Pharmaceutical Marketing Company respects the privacy of our partners, healthcare professionals, and website visitors. We collect only essential corporate data, including B2B contact details, professional affiliations, and IP addresses for basic analytical purposes.</p>
        <LegalCallout>Privacy and confidentiality of collected data is strictly maintained at all times.</LegalCallout>
      </LegalSection>

      <LegalSection id="use-of-data" title="2. Use of Corporate Data" icon="Building2">
        <p>The information collected is strictly utilized to facilitate pharmaceutical distribution inquiries, process quality assurance documents, and maintain effective communication regarding product pipelines and clinical trial data.</p>
      </LegalSection>

      <LegalSection id="data-security" title="3. Data Security & Compliance" icon="ShieldCheck">
        <p>We deploy enterprise-grade, HIPAA and GDPR compliant security infrastructure to protect against unauthorized access, alteration, or destruction of digital assets and partner information.</p>
        <LegalCallout>Security protocols and legal compliance frameworks undergo regular audits.</LegalCallout>
      </LegalSection>

      <LegalSection id="third-party" title="4. Third-Party Sharing" icon="Handshake">
        <p>We do not sell or lease corporate data. Information is only shared with authorized logistics partners and regulatory bodies (e.g., FDA, WHO-GMP auditors) when strictly necessary for compliance and operational delivery.</p>
      </LegalSection>

      <LegalSection id="your-rights" title="5. Your Privacy Rights" icon="BadgeCheck">
        <p>Under international privacy laws, you retain the right to request access, modification, or deletion of your records stored in our systems. For data-related inquiries, please contact our Data Protection Officer at privacy@medinetpharma.com.</p>
        <LegalCallout>You can exercise your legal privacy rights at any time.</LegalCallout>
      </LegalSection>
    </LegalLayout>
  );
}
