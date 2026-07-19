import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalCallout } from "../../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Copyright Notice | Medinet Pharmaceuticals",
  description: "Intellectual property rights and copyright information for Medinet Pharmaceuticals.",
  alternates: { canonical: "/legal/copyright-notice" }
};

export default function CopyrightNoticePage() {
  const sections = [
    { id: "ownership", title: "1. Ownership of Content" },
    { id: "authorized-use", title: "2. Authorized Use" },
    { id: "trademarks", title: "3. Trademarks" },
    { id: "infringement", title: "4. Reporting Infringement" }
  ];

  return (
    <LegalLayout
      title="Copyright Notice"
      currentRoute="copyright-notice"
      sections={sections}
    >
      <LegalSection id="ownership" title="1. Ownership of Content" icon="Database">
        <p>All content present on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Medinet Pharmaceutical Marketing Company or its content suppliers and is protected by international copyright laws.</p>
        <LegalCallout>Copyright ownership covers all intellectual property displayed.</LegalCallout>
      </LegalSection>

      <LegalSection id="authorized-use" title="2. Authorized Use" icon="ShieldCheck">
        <p>You may view, download, and print contents from the website subject to the following conditions: (a) the content may be used solely for information purposes of a personal, non-commercial nature; (b) the content may not be modified or altered in any way; and (c) you may not remove any copyright or other proprietary notices contained in the content.</p>
      </LegalSection>

      <LegalSection id="trademarks" title="3. Trademarks" icon="Copyright">
        <p>Medinet, the Medinet logo, and all related product and service names, design marks, and slogans are the trademarks or service marks of Medinet Pharmaceuticals. All other marks are the property of their respective companies. No trademark or service mark license is granted in connection with the materials contained on this website.</p>
        <LegalCallout>Trademarks and registered marks are protected by corporate law.</LegalCallout>
      </LegalSection>

      <LegalSection id="infringement" title="4. Reporting Infringement" icon="Handshake">
        <p>If you believe that any content on our website infringes upon your copyright, please notify us immediately by contacting our legal department at legal@medinetpharma.com with detailed information regarding the alleged infringement.</p>
      </LegalSection>
    </LegalLayout>
  );
}
