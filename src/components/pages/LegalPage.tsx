/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AppRoute } from "../../hooks/useRoute";
import { 
  ShieldAlert, Eye, FileText, Cookie, Heart, ChevronRight,
  Database, Building2, ShieldCheck, Handshake, BadgeCheck, ListTree, LifeBuoy, ArrowRight, Info, Scale, Copyright
} from "lucide-react";
import { motion } from "motion/react";

interface LegalPageProps {
  type: "privacy-policy" | "terms" | "disclaimer" | "cookies" | "copyright-notice";
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

      case "copyright-notice":
        return {
          title: "Copyright Notice",
          icon: BadgeCheck,
          badge: "Intellectual Property",
          date: "Last Updated: June 15, 2026",
          sections: [
            {
              heading: "1. Ownership of Content",
              text: "All content present on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Medinet Pharmaceutical Marketing Company or its content suppliers and is protected by international copyright laws."
            },
            {
              heading: "2. Authorized Use",
              text: "You may view, download, and print contents from the website subject to the following conditions: (a) the content may be used solely for information purposes of a personal, non-commercial nature; (b) the content may not be modified or altered in any way; and (c) you may not remove any copyright or other proprietary notices contained in the content."
            },
            {
              heading: "3. Trademarks",
              text: "Medinet, the Medinet logo, and all related product and service names, design marks, and slogans are the trademarks or service marks of Medinet Pharmaceuticals. All other marks are the property of their respective companies. No trademark or service mark license is granted in connection with the materials contained on this website."
            },
            {
              heading: "4. Reporting Infringement",
              text: "If you believe that any content on our website infringes upon your copyright, please notify us immediately by contacting our legal department at legal@medinetpharma.com with detailed information regarding the alleged infringement."
            }
          ]
        };
    }
  };

  const data = renderContent();
  const PageIcon = data.icon;

  return (
    <div className="w-full relative overflow-hidden text-left font-sans bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] font-mono text-muted mb-12 uppercase tracking-wider font-bold">
          <a href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
            HOME
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>LEGAL</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-heading font-bold">{data.title}</span>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex items-center gap-5"
        >
          <div className="w-[52px] h-[52px] bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-md flex items-center justify-center shrink-0">
            <PageIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-heading tracking-tight">
            {data.title}
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Sidebar (Table of Contents) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:col-span-3 lg:sticky lg:top-32"
          >
            <div className="bg-white/90 backdrop-blur-md border border-border rounded-3xl shadow-sm p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <ListTree className="w-5 h-5 text-primary" />
                <h4 className="text-[15px] font-bold text-heading uppercase tracking-wide">
                  Table of Contents
                </h4>
              </div>
              <ul className="space-y-1">
                {data.sections.map((section, idx) => (
                  <li key={idx}>
                    <a 
                      href={`#section-${idx}`} 
                      className="flex items-center gap-3 text-sm text-body hover:text-primary hover:bg-primary/5 rounded-xl p-2.5 transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-300"></div>
                      <span className="font-semibold">{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-9 utility-card p-8 md:p-12 w-full max-w-[900px]"
          >
            <div className="flex flex-col gap-[48px] text-body leading-loose text-base max-w-[72ch]">
              {data.sections.map((sec, idx) => {
                let SecIcon = ShieldCheck;
                if (sec.heading.includes("Collection") || sec.heading.includes("Product") || sec.heading.includes("Use of Cookies")) SecIcon = Database;
                else if (sec.heading.includes("Use") || sec.heading.includes("Governing Law")) SecIcon = Building2;
                else if (sec.heading.includes("Third-Party") || sec.heading.includes("External") || sec.heading.includes("Acceptance")) SecIcon = Handshake;
                else if (sec.heading.includes("Rights") || sec.heading.includes("Trademarks")) SecIcon = BadgeCheck;
                else if (sec.heading.includes("Cookies")) SecIcon = Cookie;
                else if (sec.heading.includes("Liability") || sec.heading.includes("Disclaimer")) SecIcon = Scale;
                else if (sec.heading.includes("Intellectual") || sec.heading.includes("Copyright")) SecIcon = Copyright;

                const hasCallout = sec.text.match(/privacy|security|compliance|legal|cookies|copyright/i);

                return (
                  <section id={`section-${idx}`} key={idx} className="animate-fade-in group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <SecIcon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-heading tracking-tight">{sec.heading}</h2>
                    </div>
                    <div className="w-full h-px bg-primary/10 mb-6"></div>
                    <div className="space-y-4">
                      <p>{sec.text}</p>
                      {hasCallout && (
                        <div className="my-6 bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl flex gap-3 items-start">
                          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div className="text-sm text-heading font-semibold leading-relaxed">
                            This section contains important information regarding corporate {sec.text.match(/privacy|security|compliance|legal|cookies|copyright/i)?.[0].toLowerCase()} policies.
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Information Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-[1240px] mx-auto bg-gradient-to-br from-heading to-primary rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg relative z-10"
        >
          <div className="flex items-center gap-5 text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <LifeBuoy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl sm:text-2xl">Need Assistance?</h4>
              <p className="text-sm text-white/80 mt-1.5 leading-relaxed">Our legal team is available to help clarify our policies and agreements.</p>
            </div>
          </div>
          <a href="mailto:corporate@medinetpharma.com" className="shrink-0 px-8 py-3.5 bg-white text-heading font-bold text-sm rounded-2xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-sm group hover:-translate-y-1">
            Contact Legal Team
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
