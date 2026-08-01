/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  ShieldCheck,
  CheckCircle,
  FileCheck,
  ClipboardCheck,
  HeartPulse,
  Activity,
  Award,
  BookOpen,
  BarChart,
  Layers,
  ThermometerSnowflake,
  RotateCcw,
  Fingerprint,
  FlaskConical,
  ShieldAlert,
  FileWarning,
  Clock,
  Database,
  Eye,
  Heart
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Quality() {
  const qualityPillars = [
    {
      title: "Quality Assurance",
      description: "Our Quality Assurance (QA) system is designed to ensure that every product is developed, manufactured, and distributed in accordance with established quality standards and regulatory requirements.",
      icon: ClipboardCheck,
      iconColor: "text-secondary",
      accent: "border-l-secondary",
      badge: "Ensuring Consistent Quality"
    },
    {
      title: "Quality Control",
      description: "Quality Control (QC) plays a vital role in verifying the safety, identity, purity, and effectiveness of our pharmaceutical products. Every product undergoes rigorous quality evaluation.",
      icon: FlaskConical,
      iconColor: "text-accent",
      accent: "border-l-accent",
      badge: "Precision at Every Stage"
    },
    {
      title: "Regulatory Compliance",
      description: "Medinet is committed to operating in full compliance with applicable pharmaceutical regulations and industry standards. We work closely with our manufacturing partners to ensure products are developed in accordance with regulatory requirements.",
      icon: ShieldCheck,
      iconColor: "text-secondary",
      accent: "border-l-secondary",
      badge: "Meeting Standards"
    },
    {
      title: "Pharmacovigilance",
      description: "Patient safety remains our highest priority. Medinet supports pharmacovigilance practices by monitoring, documenting, and reporting adverse drug reactions in accordance with applicable regulatory guidelines.",
      icon: HeartPulse,
      iconColor: "text-success",
      accent: "border-l-success",
      badge: "Monitoring Safety"
    }
  ];

  const qualityStats = [
    { value: "100%", label: "WHO-GMP Certified Manufacturing" },
    { value: "0", label: "Critical Audit Observations" },
    { value: "24/7", label: "Pharmacovigilance Support" },
    { value: "100%", label: "End-to-End Batch Traceability" }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle blurred radial glows: Top Left (Blue) and Bottom Right (Teal) at 5% opacity */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#0D9488] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side */}
            <motion.div variants={fadeUp} className="text-left relative lg:col-span-7">
              {/* Floating glow behind heading */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] bg-gradient-to-tr from-[#2563EB]/10 to-[#38BDF8]/10 pointer-events-none"
              />
              
              <span className="utility-badge-blue mb-5 relative z-10">
                <span className="utility-dot"></span>
                Zero-Defect Standards
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0B1F4D] tracking-tight leading-[1.15] relative z-10 inline-block mb-2">
                <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Quality Assurance</span>
                <br className="hidden sm:block" />
                <span className="text-[#0B1F4D]"> &amp; Safety Policy</span>
                
                {/* Subtle animated underline */}
                <motion.span 
                  initial={{ scaleX: 0 }} 
                  whileInView={{ scaleX: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} 
                  className="absolute -bottom-3 left-0 w-3/4 h-[3px] bg-gradient-to-r from-[#2563EB]/60 to-transparent origin-left rounded-full"
                />
              </h1>
              
              <p className="mt-8 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl relative z-10">
                At Medinet Pharmaceutical Marketing Company, quality is the foundation of everything we do. We are committed to delivering safe, effective, and high-quality pharmaceutical products that meet the expectations of healthcare professionals and patients. Our quality policy is built on continuous improvement, ethical business practices, regulatory compliance, and customer satisfaction, ensuring &ldquo;Reliable Care, Every Time.&rdquo;
              </p>

              {/* Three premium feature badges */}
              <div className="mt-10 flex flex-wrap gap-3 relative z-10">
                {["WHO-GMP Certified", "Quality Tested", "Global Standards"].map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wide bg-white border border-[#2563EB]/10 text-[#0B1F4D] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mr-2"></div>
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:col-span-5"
            >
              {/* Premium Glass Card */}
              <div className="bg-white/[0.92] backdrop-blur-xl border border-[#2563EB]/[0.08] shadow-[0_20px_60px_rgba(11,31,77,0.08)] rounded-[24px] p-8 sm:p-10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(11,31,77,0.12)]">
                
                {/* Thin animated gradient line across the top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-50 group-hover:opacity-100 group-hover:via-[#38BDF8] group-hover:scale-x-110 transition-all duration-700"></div>

                <div className="flex flex-col gap-6">
                  {[
                    { title: "WHO-GMP Compliance", icon: ShieldCheck, color: "from-[#0B1F4D] to-[#2563EB]" },
                    { title: "ISO Quality Standards", icon: Award, color: "from-[#2563EB] to-[#38BDF8]" },
                    { title: "Product Safety", icon: HeartPulse, color: "from-[#0D9488] to-[#14B8A6]" },
                    { title: "Batch Traceability", icon: Fingerprint, color: "from-[#2563EB] to-[#0D9488]" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-5 group/item">
                        {/* Premium icons inside circular gradient containers */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-500`}>
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                          {/* Icons gently pulse */}
                          <Icon strokeWidth={2.5} className="w-7 h-7 text-white animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_2px_8px_rgba(11,31,77,0.25)] relative z-10" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-[#0B1F4D] text-[1.05rem] leading-tight group-hover/item:text-[#2563EB] transition-colors duration-300">{item.title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Policy Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] text-left relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-[0.04]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-[#0D9488] opacity-[0.04]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            {/* QA Message - Left Side */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-[1.15] relative inline-block mb-6">
                <span className="text-[#0B1F4D]">Our </span>
                <span className="bg-gradient-to-r from-[#2563EB] to-[#0D9488] text-transparent bg-clip-text">Quality Commitment</span>
                <motion.span 
                  initial={{ scaleX: 0 }} 
                  whileInView={{ scaleX: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
                  className="absolute -bottom-3 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#2563EB]/70 to-transparent origin-left rounded-full"
                />
              </h2>
              
              <p className="mt-8 text-[#334155] leading-[1.8] text-sm sm:text-base max-w-[650px]">
                Quality is not just a standard—it is our promise. Every product we deliver reflects our dedication to innovation, compliance, patient safety, and excellence, reinforcing our commitment to &ldquo;Reliable Care, Every Time.&rdquo;
              </p>

              {/* Bottom Feature Box - Premium Glass Card */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.94] backdrop-blur-xl border border-[#2563EB]/[0.08] shadow-[0_20px_60px_rgba(11,31,77,0.08)] rounded-[24px] p-8 group hover:shadow-[0_30px_70px_rgba(11,31,77,0.12)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-500">
                    <ShieldCheck strokeWidth={2.5} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F4D] text-[1.05rem] mb-1">Double Batch Testing</h4>
                    <p className="text-[#64748B] text-sm leading-[1.6]">We test raw ingredients both at source and pre-packaging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-all duration-500">
                    <Fingerprint strokeWidth={2.5} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F4D] text-[1.05rem] mb-1">Impeccable Traceability</h4>
                    <p className="text-[#64748B] text-sm leading-[1.6]">Full computerized trace index for raw materials.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certification Badge Box - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative group"
            >
              {/* Decorative blobs behind the card */}
              <motion.div animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#059669] to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />
              <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#10B981] to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />
              
              {/* Floating glowing particles */}
              <motion.div animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 right-8 w-2 h-2 rounded-full bg-[#6EE7B7] shadow-[0_0_8px_#6EE7B7]" />
              <motion.div animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 -left-4 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />

              <div className="bg-gradient-to-br from-[#064E3B] via-[#059669] to-[#10B981] rounded-[28px] shadow-[0_30px_80px_rgba(6,78,59,0.25)] p-8 lg:p-10 relative overflow-hidden text-center hover:-translate-y-2 hover:shadow-[0_40px_90px_rgba(6,78,59,0.35)] transition-all duration-500 border border-white/20">
                
                {/* Subtle glass overlay & Animated light reflection */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]"></div>
                <div className="absolute top-0 -left-[100%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] transition-transform duration-[1500ms] group-hover:translate-x-[400%]"></div>

                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <Award strokeWidth={2.5} className="w-10 h-10 text-white drop-shadow-md" />
                </div>

                <h3 className="font-display font-bold text-white text-[1.4rem] tracking-tight relative z-10">Global Certifications</h3>
                <p className="text-[11px] text-[#6EE7B7] font-mono mt-2 uppercase tracking-[0.15em] font-bold relative z-10">WHO-GMP &amp; ISO 9001</p>

                <p className="mt-6 text-sm leading-[1.7] text-white/80 relative z-10 max-w-sm mx-auto">
                  Our strategic partner formulation centers have successfully passed the triennial WHO-GMP recertification audits with zero critical non-conformances. This verifies our strict alignment with global pharmaceutical practices.
                </p>

                <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-3 relative z-10">
                  {/* Premium Pill Badges */}
                  <div className="bg-white/20 border border-white/15 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default backdrop-blur-md">
                    <CheckCircle strokeWidth={3} className="w-3.5 h-3.5 text-[#6EE7B7]" />
                    <span className="font-bold text-white text-xs tracking-wide">ISO 9001</span>
                  </div>
                  <div className="bg-white/20 border border-white/15 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default backdrop-blur-md">
                    <ShieldCheck strokeWidth={3} className="w-3.5 h-3.5 text-[#6EE7B7]" />
                    <span className="font-bold text-white text-xs tracking-wide">FDA Verified</span>
                  </div>
                  <div className="bg-white/20 border border-white/15 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default backdrop-blur-md">
                    <FileCheck strokeWidth={3} className="w-3.5 h-3.5 text-[#6EE7B7]" />
                    <span className="font-bold text-white text-xs tracking-wide">ICH Q1</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats counters banner */}
      <section className="bg-gradient-to-r from-[#0D9488] via-[#155E75] to-[#2563EB] py-20 relative overflow-hidden group/stats">
        {/* Soft radial glow behind the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none"></div>
        {/* Subtle glass overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[0.02] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {qualityStats.map((stat, i) => {
              const StatIcon = [Award, CheckCircle, HeartPulse, Fingerprint][i];
              return (
                <div key={i} className="relative group/statcard">
                  {/* Thin translucent white lines (dividers) */}
                  {i !== 0 && <div className="hidden lg:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-[rgba(255,255,255,0.12)] opacity-60 group-hover/stats:opacity-100 transition-opacity duration-500"></div>}
                  {(i === 1 || i === 3) && <div className="hidden sm:block lg:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-[rgba(255,255,255,0.12)] opacity-60 group-hover/stats:opacity-100 transition-opacity duration-500"></div>}
                  
                  {/* Subtle glass-style container */}
                  <div className="bg-white/[0.06] border border-white/10 rounded-[20px] backdrop-blur-lg p-6 sm:p-8 flex flex-col items-center hover:-translate-y-[6px] hover:bg-white/[0.09] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300">
                    
                    {/* Small translucent circular container for icon */}
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover/statcard:scale-110 transition-transform duration-300">
                      <StatIcon className="w-6 h-6 text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative w-full drop-shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    >
                      <span className="block text-4xl sm:text-5xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#E0F2FE] font-mono relative">
                        {/* Subtle shimmer effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite_ease-in-out]"></span>
                        {stat.value.includes('+') ? (
                          <>
                            {stat.value.replace('+', '')}
                            <span className="text-[#34D399] drop-shadow-none">+</span>
                          </>
                        ) : stat.value}
                      </span>
                    </motion.div>

                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                      className="block text-[13px] sm:text-[15px] font-sans font-semibold text-white/[0.85] mt-3 tracking-wide leading-snug"
                    >
                      {stat.label.split(' ').map((word, wIdx) => {
                        const isHighlighted = ["WHO-GMP", "Audit", "Pharmacovigilance", "Traceability"].some(hw => word.includes(hw));
                        return (
                          <React.Fragment key={wIdx}>
                            {isHighlighted ? <span className="text-[#38BDF8]">{word}</span> : word}
                            {' '}
                          </React.Fragment>
                        );
                      })}
                    </motion.span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Pillars Focus */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-slate-100 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Soft blurred radial glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#0D9488] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16 relative">
            {/* Slow floating glow behind heading */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] rounded-full blur-[90px] bg-gradient-to-r from-[#2563EB]/15 to-[#0D9488]/15 pointer-events-none"
            />

            {/* Premium glassmorphism pill badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.75] backdrop-blur-lg border border-[#2563EB]/15 shadow-sm mb-6 relative z-10 hover:bg-white/[0.9] transition-colors"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#2563EB] opacity-60 animate-ping"></span>
                <ShieldCheck strokeWidth={2.5} className="relative w-4 h-4 text-[#2563EB]" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0B1F4D] uppercase">Standard Workflows</span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.15] relative z-10 inline-block"
            >
              <span className="text-[#0B1F4D]">Our </span>
              <span className="bg-gradient-to-r from-[#0B1F4D] via-[#2563EB] to-[#0D9488] text-transparent bg-clip-text">Quality Infrastructure</span>
              
              {/* Animated gradient underline */}
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} 
                className="absolute -bottom-4 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent origin-left rounded-full"
              />
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-[#475569] leading-[1.8] text-base sm:text-lg max-w-[700px] relative z-10"
            >
              Our <span className="font-semibold text-[#2563EB]">Quality Management System (QMS)</span> is split into independent departments to maintain strict <span className="font-semibold text-[#2563EB]">scientific oversight</span> across all formulations.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {qualityPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  variants={fadeUp}
                  key={idx}
                  className={`utility-card border-l-[4px] ${pillar.accent} p-8 flex gap-5 items-start group hover:border-l-secondary hover-lift`}
                >
                  <div className="w-14 h-14 rounded-xl bg-alt-bg border border-border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-[8deg] group-hover:shadow-md">
                    <PillarIcon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="font-display font-bold text-heading text-lg group-hover:text-secondary transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      {pillar.badge && (
                        <span className="utility-badge-blue">
                          {pillar.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-body leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pharmacovigilance safety focus */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#0D9488] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-col items-center text-center mb-16 relative">
            {/* Slow floating glow behind heading */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] rounded-full blur-[90px] bg-gradient-to-r from-[#2563EB]/15 to-[#0D9488]/15 pointer-events-none"
            />

            {/* Premium glassmorphism pill badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.75] backdrop-blur-lg border border-[#2563EB]/[0.12] shadow-sm mb-6 relative z-10 hover:bg-white/[0.9] transition-colors"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#2563EB] opacity-60 animate-ping"></span>
                <ShieldCheck strokeWidth={2.5} className="relative w-4 h-4 text-[#2563EB]" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0B1F4D] uppercase">Safety Standards</span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.15] relative z-10 inline-block pb-4"
            >
              <span className="bg-gradient-to-r from-[#0B1F4D] via-[#2563EB] to-[#0D9488] text-transparent bg-clip-text">Pharmacovigilance</span>
              
              {/* Animated gradient underline */}
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} 
                className="absolute bottom-0 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent origin-left rounded-full"
              />
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-[#475569] leading-[1.8] text-base sm:text-lg max-w-[750px] relative z-10 mx-auto"
            >
              As an enterprise pharmaceutical marketer, our responsibility to patients extends far beyond commercial launch. Under our dedicated Global Safety Program, we maintain a 24/7 adverse events log.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Adverse Event Reporting", icon: FileWarning },
              { title: "Product Safety Monitoring", icon: ShieldAlert },
              { title: "Risk Assessment", icon: Activity },
              { title: "Regulatory Reporting Support", icon: FileCheck },
              { title: "Continuous Safety Surveillance", icon: Eye },
              { title: "Promotion of Safe Medicine Use", icon: Heart }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative bg-white/[0.94] backdrop-blur-xl rounded-[24px] border border-[#2563EB]/[0.08] shadow-[0_20px_50px_rgba(11,31,77,0.08)] p-6 flex items-center gap-5 group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(11,31,77,0.12)] transition-all duration-500 overflow-hidden"
              >
                {/* Thin blue-to-teal gradient accent line at the top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB] to-[#0D9488] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#0D9488] flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(37,99,235,0.2)] group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-500">
                  <item.icon strokeWidth={2.5} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#0B1F4D] text-lg leading-tight group-hover:text-[#2563EB] transition-colors duration-300">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Information Panel */}
          <div className="mt-12 utility-card p-8 md:p-10 bg-gradient-to-br from-background via-white to-alt-bg border-l-[6px] border-l-secondary flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="flex-1">
              <h4 className="font-display font-bold text-heading text-2xl mb-3">Our Commitment to Patient Safety</h4>
              <p className="text-body leading-relaxed text-sm md:text-base">
                In compliance with international drug safety laws (ICH E2A guidelines), healthcare practitioners, pharmacies, distributors, or patients are requested to report any suspected side effects or adverse drug reactions. Reports are reviewed by clinical toxicologists within 24 hours of submission and uploaded into therapeutic databases. We prioritize patient wellbeing above all commercial metrics.
              </p>
            </div>
            <a
              href="#contact?subject=pve&section=contact-form"
              role="button"
              className="utility-button-primary px-8 py-4 shrink-0 min-h-[56px] cursor-pointer group/btn shadow-lg hover:shadow-xl"
            >
              Report Adverse Event
              <FileWarning className="w-5 h-5 text-white group-hover/btn:scale-110 group-hover/btn:-rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
