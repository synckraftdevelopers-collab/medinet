import type { Metadata } from "next";
import LegalLayout from "../../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Medinet Pharmaceuticals",
  description: "Read the terms and conditions governing the use of Medinet Pharmaceuticals' website, services, and B2B engagement protocols.",
  alternates: { canonical: "/legal/terms-conditions" }
};

export default function TermsConditionsPage() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "medical-disclaimer", title: "2. No Medical Advice" },
    { id: "intellectual-property", title: "3. Intellectual Property" },
    { id: "limitation", title: "4. Limitation of Liability" },
    { id: "jurisdiction", title: "5. Governing Law" }
  ];

  return (
    <LegalLayout
      title="Terms & Conditions"
      currentRoute="terms"
      sections={sections}
    >
      <section id="acceptance">
        <h2 className="text-xl font-bold text-heading mb-3">1. Acceptance of Terms</h2>
        <p>By accessing the Medinet Pharmaceutical Marketing Company website, you agree to be bound by these corporate Terms and Conditions. These terms govern all B2B interactions, partnership inquiries, and general use of our digital platforms.</p>
      </section>

      <section id="medical-disclaimer">
        <h2 className="text-xl font-bold text-heading mb-3 mt-6">2. No Medical Advice</h2>
        <p>The content provided on this platform is for corporate, educational, and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.</p>
      </section>

      <section id="intellectual-property">
        <h2 className="text-xl font-bold text-heading mb-3 mt-6">3. Intellectual Property</h2>
        <p>All trademarks, formulations, patents, text, graphics, and logos displayed on this site are the exclusive property of Medinet Pharmaceuticals unless otherwise noted. Unauthorized reproduction, distribution, or commercial use is strictly prohibited under international copyright laws.</p>
      </section>

      <section id="limitation">
        <h2 className="text-xl font-bold text-heading mb-3 mt-6">4. Limitation of Liability</h2>
        <p>Medinet Pharmaceuticals shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including but not limited to reliance on any information obtained through the platform.</p>
      </section>

      <section id="jurisdiction">
        <h2 className="text-xl font-bold text-heading mb-3 mt-6">5. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>
      </section>
    </LegalLayout>
  );
}
