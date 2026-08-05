import { PremiumFeatureIcon } from '../PremiumFeatureIcon';
import React from "react";
import Image from "next/image";
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
        {/* Background GMP Lab Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop"
            alt="GMP Laboratory"
            fill
            className="object-cover opacity-15"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="utility-badge-blue mb-5 relative z-10 mx-auto">
              <span className="utility-dot"></span>
              Quality Policy
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-[900] tracking-tight leading-[1.15] relative z-10 inline-block mb-6 drop-shadow-sm pb-2">
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 20px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#EC4899] relative inline-block"
              >
                Committed to
              </motion.span>
              {" "}
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(11,31,77,0)", "0px 0px 20px rgba(11,31,77,0.4)", "0px 0px 0px rgba(11,31,77,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="text-[#0B1F4D] relative inline-block"
              >
                Excellence
              </motion.span>
              {" "}
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 20px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="text-[#EC4899] relative inline-block"
              >
                in Every Product
              </motion.span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              At Medinet Pharmaceutical Marketing Company, quality is the foundation of everything we do. We are committed to delivering safe, effective, and high-quality pharmaceutical products that meet the expectations of healthcare professionals and patients. Our quality policy is built on continuous improvement, ethical business practices, regulatory compliance, and customer satisfaction, ensuring 
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(11,31,77,0)", "0px 0px 15px rgba(11,31,77,0.4)", "0px 0px 0px rgba(11,31,77,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F4D] to-[#EC4899] font-bold ml-1 relative inline-block"
              >
                "Reliable Care, Every Time."
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Sections */}
      <section className="py-20 bg-blue-50/50 border-b border-border relative overflow-hidden">
        {/* Background Quality Testing Image */}
        <div className="absolute right-0 top-0 w-[50%] h-full z-0 opacity-[0.03] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop" alt="Quality Testing" fill className="object-cover" />
        </div>
        {/* Background Scientists Image */}
        <div className="absolute left-0 bottom-0 w-[50%] h-[50%] z-0 opacity-[0.03] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop" alt="Scientists Working" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* Quality Assurance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B1F4D] to-[#EC4899] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(236,72,153,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <ShieldCheck className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">Quality <br className="hidden lg:block"/> Assurance</h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Ensuring Consistent Quality</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#EC4899] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Our Quality Assurance (QA) system is designed to ensure that every product is developed, manufactured, and distributed in accordance with established quality standards and regulatory requirements.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] to-[#EC4899] rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#EC4899]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(11,31,77,0.08)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1F4D]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#0B1F4D] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] inline-block rounded-full"></span>
                  Our Quality Assurance focuses on:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Standardized quality management systems",
                    "Supplier and raw material evaluation",
                    "Process validation and documentation",
                    "Batch record review",
                    "Continuous quality monitoring",
                    "Risk assessment and quality improvement"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(236,72,153,0.12)] hover:border-[#EC4899]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#EC4899]/10 transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#0B1F4D] group-hover/item:text-[#EC4899] transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#0B1F4D] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F4D] to-[#EC4899] font-bold not-italic">Through stringent QA practices</span>, we ensure consistency, reliability, and patient safety across our product portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Control */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B1F4D] to-[#1E40AF] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(11,31,77,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <FlaskConical className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">Quality <br className="hidden lg:block"/> Control</h2>
              <h3 className="text-[#1E40AF] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Precision at Every Stage</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#0B1F4D] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Quality Control (QC) plays a vital role in verifying the safety, identity, purity, and effectiveness of our pharmaceutical products.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#0B1F4D]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(11,31,77,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E40AF]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1F4D]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#0B1F4D] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] inline-block rounded-full"></span>
                  Our Quality Control activities include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Raw material testing",
                    "In-process quality checks",
                    "Finished product testing",
                    "Packaging and labeling verification",
                    "Stability testing",
                    "Documentation and record maintenance"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(11,31,77,0.15)] hover:border-[#0B1F4D]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#0B1F4D] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#0B1F4D] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#0B1F4D] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] font-bold not-italic">Every product undergoes</span> rigorous quality evaluation before reaching healthcare professionals and patients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#BE185D] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(236,72,153,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <ClipboardCheck className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#EC4899] mb-4 drop-shadow-sm">Regulatory <br className="hidden lg:block"/> Compliance</h2>
              <h3 className="text-[#DB2777] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Meeting National & International Standards</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#EC4899] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Medinet is committed to operating in full compliance with applicable pharmaceutical regulations and industry standards. We work closely with our manufacturing partners to ensure products are developed, manufactured, and marketed in accordance with regulatory requirements.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-[#DB2777] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#EC4899]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(236,72,153,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#DB2777]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#EC4899] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#EC4899] to-[#BE185D] inline-block rounded-full"></span>
                  Our commitment includes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Compliance with applicable pharmaceutical regulations",
                    "Good Manufacturing Practice (GMP) standards",
                    "Ethical marketing practices",
                    "Product quality documentation",
                    "Continuous regulatory monitoring",
                    "Patient safety and product integrity"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-[#EC4899]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#EC4899]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#EC4899] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#EC4899] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#EC4899] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#9333ea] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(99,102,241,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <Award className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">
                <motion.span 
                  animate={{ textShadow: ["0px 0px 0px rgba(99,102,241,0)", "0px 0px 20px rgba(99,102,241,0.4)", "0px 0px 0px rgba(99,102,241,0)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#0B1F4D] relative inline-block"
                >
                  Certifications
                </motion.span>
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#9333ea] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Quality You Can Trust</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#6366f1] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                We collaborate with manufacturing partners that maintain recognized quality standards and regulatory certifications to ensure the consistent delivery of high-quality pharmaceutical products.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#9333ea] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#6366f1]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(99,102,241,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9333ea]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6366f1]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#0B1F4D] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#6366f1] to-[#9333ea] inline-block rounded-full"></span>
                  Our focus is on maintaining:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Good Manufacturing Practice (GMP) compliance",
                    "ISO-certified quality management systems (where applicable)",
                    "Regulatory approvals as required",
                    "Continuous quality audits and improvement"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] hover:border-[#6366f1]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#6366f1]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#6366f1] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#6366f1] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#6366f1] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#9333ea] font-bold not-italic">Specific certifications</span> may be displayed based on company and manufacturing partner approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pharmacovigilance */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#BE185D] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(236,72,153,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <HeartPulse className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">
                Pharmacovigilance
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Monitoring Safety Beyond the Product</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#EC4899] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Patient safety remains our highest priority. Medinet supports pharmacovigilance practices by monitoring, documenting, and reporting adverse drug reactions in accordance with applicable regulatory guidelines.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-[#DB2777] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#EC4899]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(236,72,153,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#DB2777]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#EC4899] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#EC4899] to-[#BE185D] inline-block rounded-full"></span>
                  Our pharmacovigilance activities include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Adverse event reporting",
                    "Product safety monitoring",
                    "Risk assessment and evaluation",
                    "Regulatory reporting support",
                    "Continuous safety surveillance",
                    "Promotion of safe and responsible medicine use"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-[#EC4899]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#EC4899]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#EC4899] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#EC4899] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#EC4899] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777] font-bold not-italic">Through continuous monitoring</span> and quality improvement, we remain committed to protecting patient health and maintaining confidence in every Medinet product.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Our Quality Commitment */}
      <section className="py-24 bg-white border-b border-border relative overflow-hidden">
        {/* Background Certificates Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop"
            alt="Certificates and Quality"
            fill
            className="object-cover opacity-[0.03]"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
          {/* Animated floating background orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
              x: [-50, 50, -50],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[40%] h-[60%] rounded-full blur-[120px] bg-[#0B1F4D]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.08, 0.12, 0.08],
              x: [50, -50, 50],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[30%] h-[50%] rounded-full blur-[100px] bg-[#EC4899]" 
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0B1F4D] tracking-tight mb-8 drop-shadow-sm">
            Our{' '}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
              className="bg-gradient-to-r from-[#0B1F4D] via-[#EC4899] to-[#0B1F4D] text-transparent bg-clip-text drop-shadow-sm inline-block"
            >
              Quality Commitment
            </motion.span>
          </h2>
          <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-[#0B1F4D] to-[#EC4899] mx-auto mb-10 relative overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "200%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-white/50 w-1/3 blur-[2px]"
             />
          </div>
          <p className="text-[#334155] leading-relaxed text-xl sm:text-2xl font-medium">
            Quality is not just a standard—it is our promise. Every product we deliver reflects our dedication to innovation, compliance, patient safety, and excellence, reinforcing our commitment to{' '}
            <motion.strong 
              animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 15px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] font-bold inline-block"
            >
              "Reliable Care, Every Time."
            </motion.strong>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
