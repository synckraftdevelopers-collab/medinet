import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, CheckCircle, ClipboardCheck, FlaskConical, Award, HeartPulse } from "lucide-react";

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

export default function Quality() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header / Quality Policy */}
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="utility-badge-blue mb-5 relative z-10 mx-auto">
              <span className="utility-dot"></span>
              Quality Policy
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Committed to Excellence in Every Product</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              At Medinet Pharmaceutical Marketing Company, quality is the foundation of everything we do. We are committed to delivering safe, effective, and high-quality pharmaceutical products that meet the expectations of healthcare professionals and patients. Our quality policy is built on continuous improvement, ethical business practices, regulatory compliance, and customer satisfaction, ensuring <strong>"Reliable Care, Every Time."</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Sections */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Quality Assurance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Quality Assurance</h2>
              <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-4">Ensuring Consistent Quality</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Our Quality Assurance (QA) system is designed to ensure that every product is developed, manufactured, and distributed in accordance with established quality standards and regulatory requirements.
              </p>
            </div>
            <div className="lg:w-2/3 bg-alt-bg rounded-3xl p-8 md:p-10 border border-border">
              <p className="text-primary font-semibold mb-6 text-lg">Our Quality Assurance focuses on:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Standardized quality management systems",
                  "Supplier and raw material evaluation",
                  "Process validation and documentation",
                  "Batch record review",
                  "Continuous quality monitoring",
                  "Risk assessment and quality improvement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Through stringent QA practices, we ensure consistency, reliability, and patient safety across our product portfolio.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Control */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Quality Control</h2>
              <h3 className="text-teal-600 font-medium tracking-wide text-lg mb-4">Precision at Every Stage</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Quality Control (QC) plays a vital role in verifying the safety, identity, purity, and effectiveness of our pharmaceutical products.
              </p>
            </div>
            <div className="lg:w-2/3 bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our Quality Control activities include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Raw material testing",
                  "In-process quality checks",
                  "Finished product testing",
                  "Packaging and labeling verification",
                  "Stability testing",
                  "Documentation and record maintenance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-teal-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Every product undergoes rigorous quality evaluation before reaching healthcare professionals and patients.
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Regulatory Compliance</h2>
              <h3 className="text-amber-600 font-medium tracking-wide text-lg mb-4">Meeting National and International Standards</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Medinet is committed to operating in full compliance with applicable pharmaceutical regulations and industry standards. We work closely with our manufacturing partners to ensure products are developed, manufactured, and marketed in accordance with regulatory requirements.
              </p>
            </div>
            <div className="lg:w-2/3 bg-orange-50/50 rounded-3xl p-8 md:p-10 border border-orange-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our commitment includes:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Compliance with applicable pharmaceutical regulations",
                  "Good Manufacturing Practice (GMP) standards",
                  "Ethical marketing practices",
                  "Product quality documentation",
                  "Continuous regulatory monitoring",
                  "Patient safety and product integrity"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Certifications</h2>
              <h3 className="text-indigo-600 font-medium tracking-wide text-lg mb-4">Quality You Can Trust</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                We collaborate with manufacturing partners that maintain recognized quality standards and regulatory certifications to ensure the consistent delivery of high-quality pharmaceutical products.
              </p>
            </div>
            <div className="lg:w-2/3 bg-indigo-50/50 rounded-3xl p-8 md:p-10 border border-indigo-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our focus is on maintaining:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Good Manufacturing Practice (GMP) compliance",
                  "ISO-certified quality management systems (where applicable)",
                  "Regulatory approvals as required",
                  "Continuous quality audits and improvement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-indigo-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-indigo-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Specific certifications may be displayed based on company and manufacturing partner approvals.
                </p>
              </div>
            </div>
          </div>

          {/* Pharmacovigilance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Pharmacovigilance</h2>
              <h3 className="text-secondary font-medium tracking-wide text-lg mb-4">Monitoring Safety Beyond the Product</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Patient safety remains our highest priority. Medinet supports pharmacovigilance practices by monitoring, documenting, and reporting adverse drug reactions in accordance with applicable regulatory guidelines.
              </p>
            </div>
            <div className="lg:w-2/3 bg-emerald-50/50 rounded-3xl p-8 md:p-10 border border-emerald-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our pharmacovigilance activities include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Adverse event reporting",
                  "Product safety monitoring",
                  "Risk assessment and evaluation",
                  "Regulatory reporting support",
                  "Continuous safety surveillance",
                  "Promotion of safe and responsible medicine use"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Through continuous monitoring and quality improvement, we remain committed to protecting patient health and maintaining confidence in every Medinet product.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Our Quality Commitment */}
      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Quality Commitment</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-8"></div>
          <p className="text-[#334155] leading-relaxed text-lg sm:text-xl">
            Quality is not just a standard—it is our promise. Every product we deliver reflects our dedication to innovation, compliance, patient safety, and excellence, reinforcing our commitment to <strong>"Reliable Care, Every Time."</strong>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
