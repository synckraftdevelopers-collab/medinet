import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  Cookie, 
  Copyright, 
  Scale,
  CheckCircle
} from "lucide-react";

interface LegalPageProps {
  type?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LegalPage({ type }: LegalPageProps) {

  // Dynamic Content based on route
  const getPageConfig = () => {
    switch (type) {
      case "privacy-policy":
        return {
          title: "Privacy Policy",
          badge: "Your Privacy Matters",
          icon: ShieldCheck,
          color: "from-[#2563EB] to-[#1D4ED8]",
          textColor: "text-[#2563EB]",
          bgTheme: "bg-alt-bg",
          borderTheme: "border-border",
          content: (
            <>
              <p className="text-[#475569] leading-relaxed mb-6">
                At Medinet Pharmaceutical Marketing Company, we are committed to protecting your privacy and safeguarding the personal information you share with us. We collect and process information responsibly to improve our services, respond to enquiries, and provide a secure browsing experience.
              </p>
              <p className="text-primary font-semibold mb-4">Our Privacy Policy explains:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Information we collect",
                  "How we use your information",
                  "Data protection and security measures",
                  "Information sharing practices",
                  "Your rights regarding personal data",
                  "Contact details for privacy-related enquiries"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#475569] leading-relaxed font-medium">
                We are committed to handling your information in accordance with applicable data protection laws and industry best practices.
              </p>
            </>
          )
        };
      case "terms":
        return {
          title: "Terms & Conditions",
          badge: "Website Usage Guidelines",
          icon: FileText,
          color: "from-indigo-500 to-purple-600",
          textColor: "text-indigo-600",
          bgTheme: "bg-indigo-50/50",
          borderTheme: "border-indigo-100/50",
          content: (
            <>
              <p className="text-[#475569] leading-relaxed mb-6">
                By accessing and using the Medinet website, you agree to comply with our Terms & Conditions. These terms govern the use of our website, services, and content.
              </p>
              <p className="text-primary font-semibold mb-4">The Terms & Conditions cover:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Acceptable use of the website",
                  "User responsibilities",
                  "Intellectual property rights",
                  "Accuracy of information",
                  "Limitation of liability",
                  "Third-party links",
                  "Changes to website content and policies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#475569] leading-relaxed font-medium">
                Please review these terms carefully before using our website.
              </p>
            </>
          )
        };
      case "disclaimer":
        return {
          title: "Disclaimer",
          badge: "Important Information",
          icon: AlertTriangle,
          color: "from-amber-500 to-orange-600",
          textColor: "text-amber-600",
          bgTheme: "bg-orange-50/50",
          borderTheme: "border-orange-100/50",
          content: (
            <>
              <p className="text-[#475569] leading-relaxed mb-6">
                The information provided on this website is intended for general informational purposes only and should not be considered as medical advice, diagnosis, or treatment recommendations.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Product information is provided for healthcare professionals and business purposes.",
                  "Always consult a qualified healthcare professional before using any medication.",
                  "Product availability may vary by region.",
                  "Medinet reserves the right to update product information and website content without prior notice."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#475569] leading-relaxed font-medium">
                While we strive to ensure the accuracy of the information presented, Medinet does not guarantee that all content is complete, current, or free from errors.
              </p>
            </>
          )
        };
      case "cookies":
        return {
          title: "Cookie Policy",
          badge: "Enhancing Your Browsing Experience",
          icon: Cookie,
          color: "from-teal-500 to-teal-700",
          textColor: "text-teal-600",
          bgTheme: "bg-teal-50/50",
          borderTheme: "border-teal-100/50",
          content: (
            <>
              <p className="text-[#475569] leading-relaxed mb-6">
                Our website uses cookies and similar technologies to improve functionality, enhance user experience, analyze website traffic, and personalize content.
              </p>
              <p className="text-primary font-semibold mb-4">Our Cookie Policy explains:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "What cookies are",
                  "Types of cookies we use",
                  "Why we use cookies",
                  "How cookies improve your browsing experience",
                  "Managing or disabling cookies through your browser settings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#475569] leading-relaxed font-medium">
                By continuing to use our website, you consent to the use of cookies in accordance with our Cookie Policy.
              </p>
            </>
          )
        };
      case "copyright-notice":
        return {
          title: "Copyright Notice",
          badge: "Intellectual Property Rights",
          icon: Copyright,
          color: "from-slate-600 to-slate-800",
          textColor: "text-body",
          bgTheme: "bg-alt-bg",
          borderTheme: "border-border",
          content: (
            <>
              <p className="text-primary font-bold mb-4">
                © Medinet Pharmaceutical Marketing Company. All Rights Reserved.
              </p>
              <p className="text-[#475569] leading-relaxed mb-4">
                All content on this website, including text, images, graphics, logos, product information, designs, icons, documents, and other materials, is the intellectual property of Medinet Pharmaceutical Marketing Company unless otherwise stated.
              </p>
              <p className="text-[#475569] leading-relaxed mb-4">
                No part of this website may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission from Medinet Pharmaceutical Marketing Company.
              </p>
              <p className="text-[#475569] leading-relaxed font-medium">
                Unauthorized use of website content may violate applicable copyright, trademark, and intellectual property laws.
              </p>
            </>
          )
        };
      default:
        return null;
    }
  };

  const config = getPageConfig();

  if (!config) {
    return (
      <div className="pt-32 pb-20 text-center bg-white min-h-[50vh] flex items-center justify-center">
        <div className="p-12 bg-alt-bg rounded-2xl border border-border">
          <h2 className="text-2xl font-bold text-primary">Document Not Found</h2>
          <p className="text-[#475569] mt-2">Please select a valid legal document from the menu.</p>
        </div>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20 bg-white min-h-screen flex flex-col">
      
      {/* Page Header */}
      <section className={`bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b ${config.borderTheme} py-20 lg:py-28 relative overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-gradient-to-br ${config.color} opacity-5`} />
          <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-gradient-to-br ${config.color} opacity-5`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto flex flex-col items-center">
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg mb-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>

            <span className="utility-badge-blue mb-5 relative z-10">
              <span className="utility-dot"></span>
              {config.badge}
            </span>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6`}>
              {config.title}
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10 max-w-2xl">
              Medinet Pharmaceutical Marketing Company is committed to providing clear, transparent, and accurate information regarding our policies and guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className={`${config.bgTheme} p-8 sm:p-12 rounded-3xl border ${config.borderTheme} shadow-sm`}>
            {config.content}
          </motion.div>
        </div>
      </section>

      {/* Legal Commitment (Footer Note) */}
      <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] text-center border-t border-border relative overflow-hidden mt-auto">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary tracking-tight mb-4">
            Legal Commitment
          </h2>
          <p className="text-[#475569] leading-relaxed text-lg mb-6">
            At Medinet Pharmaceutical Marketing Company, we are committed to maintaining transparency, protecting user privacy, respecting intellectual property rights, and ensuring compliance with all applicable legal and regulatory requirements.
          </p>
          <p className="text-[#2563EB] font-bold text-xl">
            Reliable Care, Every Time.
          </p>
        </div>
      </section>

    </motion.div>
  );
}
