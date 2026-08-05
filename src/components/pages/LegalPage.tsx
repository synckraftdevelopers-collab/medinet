import { PremiumFeatureIcon } from '../PremiumFeatureIcon';
import React from "react";
import Image from "next/image";
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
          heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
          contentImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
          icon: ShieldCheck,
          color: "from-[#2563EB] to-[#1D4ED8]",
          textColor: "text-[#2563EB]",
          bgTheme: "bg-alt-bg",
          borderTheme: "border-border",
          content: (
            <>
              <p className="text-[#334155] leading-relaxed mb-6">
                At Medinet Pharmaceutical Marketing Company, we are committed to protecting your privacy and safeguarding the personal information you share with us. We collect and process information responsibly to improve our services, respond to enquiries, and provide a secure browsing experience.
              </p>
              <p className="text-[#0F172A] font-semibold mb-4">Our Privacy Policy explains:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Information we collect",
                  "How we use your information",
                  "Data protection and security measures",
                  "Information sharing practices",
                  "Your rights regarding personal data",
                  "Contact details for privacy-related enquiries"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[20px] text-[#334155]">
                    <PremiumFeatureIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#334155] leading-relaxed font-medium">
                We are committed to handling your information in accordance with applicable data protection laws and industry best practices.
              </p>
            </>
          )
        };
      case "terms":
        return {
          title: "Terms & Conditions",
          badge: "Website Usage Guidelines",
          heroImage: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2000&auto=format&fit=crop",
          contentImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
          icon: FileText,
          color: "from-indigo-500 to-purple-600",
          textColor: "text-indigo-600",
          bgTheme: "bg-indigo-50/50",
          borderTheme: "border-indigo-100/50",
          content: (
            <>
              <p className="text-[#334155] leading-relaxed mb-6">
                By accessing and using the Medinet website, you agree to comply with our Terms & Conditions. These terms govern the use of our website, services, and content.
              </p>
              <p className="text-[#0F172A] font-semibold mb-4">The Terms & Conditions cover:</p>
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
                  <li key={idx} className="flex items-center gap-[20px] text-[#334155]">
                    <PremiumFeatureIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#334155] leading-relaxed font-medium">
                Please review these terms carefully before using our website.
              </p>
            </>
          )
        };
      case "disclaimer":
        return {
          title: "Disclaimer",
          badge: "Important Information",
          heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
          contentImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
          icon: AlertTriangle,
          color: "from-amber-500 to-orange-600",
          textColor: "text-amber-600",
          bgTheme: "bg-orange-50/50",
          borderTheme: "border-orange-100/50",
          content: (
            <>
              <p className="text-[#334155] leading-relaxed mb-6">
                The information provided on this website is intended for general informational purposes only and should not be considered as medical advice, diagnosis, or treatment recommendations.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Product information is provided for healthcare professionals and business purposes.",
                  "Always consult a qualified healthcare professional before using any medication.",
                  "Product availability may vary by region.",
                  "Medinet reserves the right to update product information and website content without prior notice."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[20px] text-[#334155]">
                    <PremiumFeatureIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#334155] leading-relaxed font-medium">
                While we strive to ensure the accuracy of the information presented, Medinet does not guarantee that all content is complete, current, or free from errors.
              </p>
            </>
          )
        };
      case "cookies":
        return {
          title: "Cookie Policy",
          badge: "Enhancing Your Browsing Experience",
          heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
          contentImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
          icon: Cookie,
          color: "from-teal-500 to-teal-700",
          textColor: "text-teal-600",
          bgTheme: "bg-teal-50/50",
          borderTheme: "border-teal-100/50",
          content: (
            <>
              <p className="text-[#334155] leading-relaxed mb-6">
                Our website uses cookies and similar technologies to improve functionality, enhance user experience, analyze website traffic, and personalize content.
              </p>
              <p className="text-[#0F172A] font-semibold mb-4">Our Cookie Policy explains:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "What cookies are",
                  "Types of cookies we use",
                  "Why we use cookies",
                  "How cookies improve your browsing experience",
                  "Managing or disabling cookies through your browser settings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[20px] text-[#334155]">
                    <PremiumFeatureIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#334155] leading-relaxed font-medium">
                By continuing to use our website, you consent to the use of cookies in accordance with our Cookie Policy.
              </p>
            </>
          )
        };
      case "copyright-notice":
        return {
          title: "Copyright Notice",
          badge: "Intellectual Property Rights",
          heroImage: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2000&auto=format&fit=crop",
          contentImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
          icon: Copyright,
          color: "from-slate-600 to-slate-800",
          textColor: "text-body",
          bgTheme: "bg-alt-bg",
          borderTheme: "border-border",
          content: (
            <>
              <p className="text-[#0F172A] font-bold mb-4">
                © Medinet Pharmaceutical Marketing Company. All Rights Reserved.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                All content on this website, including text, images, graphics, logos, product information, designs, icons, documents, and other materials, is the intellectual property of Medinet Pharmaceutical Marketing Company unless otherwise stated.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                No part of this website may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written permission from Medinet Pharmaceutical Marketing Company.
              </p>
              <p className="text-[#334155] leading-relaxed font-medium">
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
          <h2 className="text-2xl font-bold text-[#0F172A]">Document Not Found</h2>
          <p className="text-[#334155] mt-2">Please select a valid legal document from the menu.</p>
        </div>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-[80px] bg-white flex flex-col flex-1 w-full relative">
      
      {/* Page Header */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-6">
        <motion.div 
          variants={fadeUp} 
          className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(11,31,77,0.15)] flex flex-col items-center justify-center text-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={config.heroImage} 
              alt={config.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
          
          {/* Dark Navy Overlay (45%) */}
          <div className="absolute inset-0 bg-[#0B1F4D]/45 z-10" />
          
          {/* Animated Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-[20%] w-32 h-32 bg-[#38BDF8] rounded-full blur-[80px] z-10"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-[10%] w-40 h-40 bg-[#0D9488] rounded-full blur-[90px] z-10"
          />

          <div className="relative z-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center max-w-3xl mx-auto h-full">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg mb-4 sm:mb-6 border border-white/20`}>
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
              {config.badge}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-2 sm:mb-4 drop-shadow-lg">
              {config.title}
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              Medinet Pharmaceutical Marketing Company is committed to providing clear, transparent, and accurate information regarding our policies and guidelines.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pt-8 pb-16 bg-white w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Container */}
          <motion.div 
            variants={fadeUp} 
            className={`w-full ${config.bgTheme} p-8 sm:p-12 lg:p-16 rounded-[24px] border ${config.borderTheme} shadow-sm`}
          >
            {config.content}
          </motion.div>
        </div>
      </section>

      {/* Legal Commitment (Footer Note) */}
      <section className="relative w-full py-20 mt-auto overflow-hidden bg-[#0B1F4D]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#EC4899] blur-[150px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#38BDF8] blur-[150px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative p-8 sm:p-12 rounded-[32px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
          >
            {/* Inner Border Glow on Hover */}
            <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Floating Icon */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#EC4899] to-[#38BDF8] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-tr from-[#EC4899] to-[#38BDF8] p-[2px]">
                <div className="w-full h-full rounded-2xl bg-[#0B1F4D] flex items-center justify-center">
                  <Scale className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight mb-6">
              Legal Commitment
            </h2>
            
            <p className="text-blue-100/80 leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto font-light mb-8">
              At Medinet Pharmaceutical Marketing Company, we are strictly committed to maintaining transparency, protecting user privacy, respecting intellectual property rights, and ensuring full compliance with all applicable legal and regulatory requirements.
            </p>

            {/* Glowing Gradient Text */}
            <div className="inline-block relative">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#38BDF8] animate-gradient-x bg-[length:200%_auto]">
                Reliable Care, Every Time.
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-[#EC4899] to-[#38BDF8]" />
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
