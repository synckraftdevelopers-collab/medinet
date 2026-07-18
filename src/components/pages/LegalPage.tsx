/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AppRoute } from "../../hooks/useRoute";
import { ShieldAlert, Eye, FileText, Cookie, Heart } from "lucide-react";

interface LegalPageProps {
  type: "privacy-policy" | "terms" | "disclaimer" | "cookies";
}

export default function LegalPage({ type }: LegalPageProps) {
  const renderContent = () => {
    switch (type) {
      case "privacy-policy":
        return {
          title: "Privacy Policy",
          icon: Eye,
          badge: "Information Integrity",
          date: "Last Updated: June 15, 2026",
          sections: [
            {
              heading: "1. Scope of Policy",
              text: "This Privacy Policy dictates the collection, processing, and storage of corporate and contact data by Medinet Pharmaceutical Marketing Company. We prioritize securing the commercial contact files, inquiry details, and corporate emails of our distributors, manufacturers, and partners in complete compliance with the General Data Protection Regulation (GDPR) and local pharmaceutical security acts."
            },
            {
              heading: "2. Information We Collect",
              text: "We collect direct B2B identifiers including: full name, business email address, corporate phone numbers, registered country, license identifiers (where required for drug wholesale sourcing), and specific therapeutic areas of focus. We do not collect direct medical profiles of individual end-users."
            },
            {
              heading: "3. Purposes of Processing",
              text: "All collected datasets are handled exclusively to process wholesale sourcing inquiries, territorial licensing proposals, contract formulation logistics, drug safety pharmacovigilance reports, and career recruitment applications. We never monetize or rent commercial contacts to third-party marketing brokers."
            },
            {
              heading: "4. Pharmacovigilance Exception",
              text: "In the event of an Adverse Drug Reaction (ADR) report, Medinet is legally bound under WHO and national drug safety regulations to log details of the clinical episode (such as age, gender, reaction description, and generic drug dosage). This data is compiled in anonymous formats and routed to national health departments to secure active drug monitoring."
            },
            {
              heading: "5. Data Erasure and Rights",
              text: "B2B contact records are persisted as long as necessary to maintain licensing agreements or corporate communications. Partners can request full access, correction, or permanent deletion of their business contacts by mailing corporate@medinetpharma.com."
            }
          ]
        };

      case "terms":
        return {
          title: "Terms of Use",
          icon: FileText,
          badge: "B2B Standard Terms",
          date: "Last Updated: June 15, 2026",
          sections: [
            {
              heading: "1. Corporate Scope",
              text: "This website serves as a business-to-business (B2B) communications channel for Medinet Pharmaceutical Marketing Company. By utilizing this platform, you certify that you are representing a registered commercial entity, pharmacy, health institution, or licensed drug distributor."
            },
            {
              heading: "2. Prescription Only Limitations",
              text: "The formulation portfolio, strength indicators, and therapeutic segments represented here are strictly prescription-only medicines (Rx formulations). Medinet does not distribute, prescribe, or sell medications directly to end-consumer patients. All commercial supply arrangements require valid territorial drug licenses and WHO-GMP clearances."
            },
            {
              heading: "3. Intellect Property",
              text: "The brand names, trademarked logos (including Medivastin, Cardipril, Gabax, Neuroprotect), molecular descriptions, and clinical monographs displayed on this website are the intellectual property of Medinet or licensed manufacturing partners. Unauthorized copying, scraper scraping, or modification is prohibited."
            },
            {
              heading: "4. Licensing Territory Boundaries",
              text: "Product availability, packaging design, and dosage strengths vary between countries based on local FDA registrations and licensing boundaries. A product display on this portal does not guarantee export rights or authorization in every territory until formal agreements are ratified."
            }
          ]
        };

      case "disclaimer":
        return {
          title: "Corporate Disclaimer",
          icon: ShieldAlert,
          badge: "Regulatory Notice",
          date: "Last Updated: June 15, 2026",
          sections: [
            {
              heading: "1. Not Medical Advice",
              text: "The information on this portal is provided for commercial, marketing, educational, and scientific licensing purposes only. It is NOT intended as a substitute for professional medical advice, clinical diagnosis, or patient treatment. Patients must always consult with registered clinicians before initiating or adjusting any therapy."
            },
            {
              heading: "2. Accuracy of Monographs",
              text: "While our scientific teams verify that product monographs, generic compositions, and indications align with active USP, BP, and IP dossiers, Medinet makes no absolute warranties regarding the error-free status of web descriptions. Actual physical labeling and pack inserts should serve as the authoritative standard of instruction."
            },
            {
              heading: "3. No Direct Selling",
              text: "Any attempt by individual consumers to purchase or enquire about purchasing prescription drugs directly from Medinet will be declined. We maintain strict compliance with legal pharmaceutical supply chains and distribute exclusively via licensed wholesale routes."
            }
          ]
        };

      case "cookies":
        return {
          title: "Cookie Policy",
          icon: Cookie,
          badge: "Platform Stability",
          date: "Last Updated: June 15, 2026",
          sections: [
            {
              heading: "1. Use of Cookies",
              text: "Medinet uses essential cookies to ensure platform stability, secure form submissions, and maintain user-selected categories across sessions. We do not engage in persistent profiling or cross-site commercial ad tracking."
            },
            {
              heading: "2. Technical Cookie Selection",
              text: "Essential cookies manage active selections during product category browsing, filter criteria in searches, and prevent Cross-Site Request Forgery (CSRF) in our B2B form submission channels."
            },
            {
              heading: "3. Opt-out Controls",
              text: "Most web browsers automatically accept standard cookies. You can disable them in your browser preferences; however, doing so might degrade interactive features like global search filtering and proposal submission."
            }
          ]
        };
    }
  };

  const data = renderContent();
  const PageIcon = data.icon;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            {data.badge}
          </span>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
              <PageIcon className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                {data.title}
              </h1>
              <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">{data.date} | ESTD 1998</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 prose prose-slate max-w-none text-slate-600 text-xs sm:text-sm leading-relaxed">
            {data.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3.5 border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-lg font-display font-bold text-slate-900 tracking-tight leading-snug">
                  {sec.heading}
                </h2>
                <p className="font-sans leading-relaxed text-slate-600">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-lg shadow-sm p-6 flex items-start gap-4">
            <Heart className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase font-mono tracking-wider">Patient Care Priority</h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Medinet Pharmaceutical Marketing Company remains fully dedicated to transparent regulatory operations. If you have questions regarding our compliance practices, please contact our legal desk at <a href="mailto:corporate@medinetpharma.com" className="text-slate-900 hover:underline font-semibold">corporate@medinetpharma.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
