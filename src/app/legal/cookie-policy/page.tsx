import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalCallout } from "../../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Medinet Pharmaceuticals",
  description: "Understand how Medinet Pharmaceuticals uses cookies and tracking technologies to enhance your browsing experience.",
  alternates: { canonical: "/legal/cookie-policy" }
};

export default function CookiePolicyPage() {
  const sections = [
    { id: "what-are-cookies", title: "1. What Are Cookies?" },
    { id: "how-we-use", title: "2. How We Use Cookies" },
    { id: "types-of-cookies", title: "3. Types of Cookies Used" },
    { id: "managing-cookies", title: "4. Managing Cookies" }
  ];

  return (
    <LegalLayout
      title="Cookie Policy"
      currentRoute="cookies"
      sections={sections}
    >
      <LegalSection id="what-are-cookies" title="1. What Are Cookies?" icon="Cookie">
        <p>Cookies are small text files placed on your computer or mobile device when you visit our website. They are widely used by corporate websites to make them work more efficiently, as well as to provide reporting information to the site owners.</p>
        <LegalCallout>Cookies help secure session data and maintain platform compliance.</LegalCallout>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How We Use Cookies" icon="Database">
        <p>Medinet Pharmaceuticals uses cookies to understand how you interact with our content, to improve your browsing experience, and to remember your preferences (such as language or region) during future visits. We also use cookies for basic security auditing and fraud prevention.</p>
      </LegalSection>

      <LegalSection id="types-of-cookies" title="3. Types of Cookies Used" icon="ListTree">
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly. They cannot be switched off in our systems.</li>
          <li><strong>Performance Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functional Cookies:</strong> Enable the website to provide enhanced functionality and personalization (e.g., remembering your therapeutic category preferences).</li>
        </ul>
      </LegalSection>

      <LegalSection id="managing-cookies" title="4. Managing Cookies" icon="ShieldCheck">
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit the site, and some services and functionalities may not work.</p>
        <LegalCallout>Cookie management and data privacy align strictly with international regulations.</LegalCallout>
      </LegalSection>
    </LegalLayout>
  );
}
