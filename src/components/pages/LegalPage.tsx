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
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

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
          badge: "Your Privacy Matters",
          date: "Last Updated: June 15, 2026",
          preamble: "At Medinet Pharmaceutical Marketing Company, we are committed to protecting your privacy and safeguarding the personal information you share with us. We collect and process information responsibly to improve our services, respond to enquiries, and provide a secure browsing experience.",
          sections: [
            {
              heading: "Our Privacy Policy explains:",
              list: [
                "Information we collect",
                "How we use your information",
                "Data protection and security measures",
                "Information sharing practices",
                "Your rights regarding personal data",
                "Contact details for privacy-related enquiries"
              ],
              text: "We are committed to handling your information in accordance with applicable data protection laws and industry best practices."
            }
          ]
        };

      case "terms":
        return {
          title: "Terms & Conditions",
          icon: FileText,
          badge: "Website Usage Guidelines",
          date: "Last Updated: June 15, 2026",
          preamble: "By accessing and using the Medinet website, you agree to comply with our Terms & Conditions. These terms govern the use of our website, services, and content.",
          sections: [
            {
              heading: "The Terms & Conditions cover:",
              list: [
                "Acceptable use of the website",
                "User responsibilities",
                "Intellectual property rights",
                "Accuracy of information",
                "Limitation of liability",
                "Third-party links",
                "Changes to website content and policies"
              ],
              text: "Please review these terms carefully before using our website."
            }
          ]
        };

      case "disclaimer":
        return {
          title: "Disclaimer",
          icon: ShieldAlert,
          badge: "Important Information",
          date: "Last Updated: June 15, 2026",
          preamble: "The information provided on this website is intended for general informational purposes only and should not be considered as medical advice, diagnosis, or treatment recommendations.",
          sections: [
            {
              heading: "Key Points:",
              list: [
                "Product information is provided for healthcare professionals and business purposes.",
                "Always consult a qualified healthcare professional before using any medication.",
                "Product availability may vary by region.",
                "Medinet reserves the right to update product information and website content without prior notice."
              ],
              text: "While we strive to ensure the accuracy of the information presented, Medinet does not guarantee that all content is complete, current, or free from errors."
            }
          ]
        };

      case "cookies":
        return {
          title: "Cookie Policy",
          icon: Cookie,
          badge: "Enhancing Your Browsing Experience",
          date: "Last Updated: June 15, 2026",
          preamble: "Our website uses cookies and similar technologies to improve functionality, enhance user experience, analyze website traffic, and personalize content.",
          sections: [
            {
              heading: "Our Cookie Policy explains:",
              list: [
                "What cookies are",
                "Types of cookies we use",
                "Why we use cookies",
                "How cookies improve your browsing experience",
                "Managing or disabling cookies through your browser settings"
              ],
              text: "By continuing to use our website, you consent to the use of cookies in accordance with our Cookie Policy."
            }
          ]
        };

      case "copyright-notice":
        return {
          title: "Copyright Notice",
          icon: BadgeCheck,
          badge: "Intellectual Property Rights",
          date: "Last Updated: June 15, 2026",
          preamble: "© Medinet Pharmaceutical Marketing Company. All Rights Reserved.",
          sections: [
            {
              heading: "Ownership of Content",
              text: "All content on this website, including text, images, graphics, logos, product information, designs, icons, documents, and other materials, is the intellectual property of Medinet Pharmaceutical Marketing Company unless otherwise stated."
            },
            {
              heading: "Use Restrictions",
              text: "No part of this website may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission from Medinet Pharmaceutical Marketing Company.\n\nUnauthorized use of website content may violate applicable copyright, trademark, and intellectual property laws."
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 relative z-10">
        
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
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
            variants={fadeUp}
            initial="hidden"
            animate="visible"
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

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-9 utility-card p-8 md:p-12 w-full max-w-[900px]"
          >
            <div className="flex flex-col gap-[48px] text-body leading-loose text-base max-w-[72ch]">
              {/* @ts-ignore - Support for optional preamble */}
              {data.preamble && (
                <motion.div variants={fadeUp} className="text-[17px] leading-relaxed text-heading font-medium pb-2 border-b border-primary/10">
                  {/* @ts-ignore */}
                  {data.preamble}
                </motion.div>
              )}
              {data.sections.map((sec, idx) => {
                let SecIcon = ShieldCheck;
                if (sec.heading.includes("Collection") || sec.heading.includes("Product") || sec.heading.includes("Use of Cookies") || sec.heading.includes("Ownership")) SecIcon = Database;
                else if (sec.heading.includes("Use") || sec.heading.includes("Governing Law")) SecIcon = Building2;
                else if (sec.heading.includes("Third-Party") || sec.heading.includes("External") || sec.heading.includes("Acceptance")) SecIcon = Handshake;
                else if (sec.heading.includes("Rights") || sec.heading.includes("Trademarks") || sec.heading.includes("Key Points")) SecIcon = BadgeCheck;
                else if (sec.heading.includes("Cookies")) SecIcon = Cookie;
                else if (sec.heading.includes("Liability") || sec.heading.includes("Disclaimer")) SecIcon = Scale;
                else if (sec.heading.includes("Intellectual") || sec.heading.includes("Copyright")) SecIcon = Copyright;

                // @ts-ignore - Support for optional text
                const textContent = sec.text || "";
                const hasCallout = textContent.match(/privacy|security|compliance|legal|cookies|copyright/i);

                return (
                  <motion.section variants={fadeUp} id={`section-${idx}`} key={idx} className="group hover-lift transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <SecIcon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-heading tracking-tight">{sec.heading}</h2>
                    </div>
                    <div className="w-full h-px bg-primary/10 mb-6"></div>
                    <div className="space-y-4">
                      {/* @ts-ignore */}
                      {sec.list && sec.list.length > 0 && (
                        <ul className="space-y-3 mb-6">
                          {/* @ts-ignore */}
                          {sec.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                              <span className="text-[15px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {textContent && (
                        <p className="whitespace-pre-wrap">{textContent}</p>
                      )}
                      {hasCallout && (
                        <div className="my-6 bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl flex gap-3 items-start">
                          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div className="text-sm text-heading font-semibold leading-relaxed">
                            This section contains important information regarding corporate {textContent.match(/privacy|security|compliance|legal|cookies|copyright/i)?.[0].toLowerCase()} policies.
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Information Card */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 max-w-[1240px] mx-auto bg-gradient-to-br from-heading to-primary rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg relative z-10 hover-lift transition-all duration-300"
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
