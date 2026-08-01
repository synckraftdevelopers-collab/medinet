/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion";
import { PIPELINE } from "../../data";
import SectionHeader from "../SectionHeader";
import {
  FlaskConical,
  Activity,
  Award,
  Cpu,
  Layers,
  Sparkles,
  BarChart,
  ClipboardList,
  Binary,
  CheckCircle2,
  Atom,
  Pill,
  Microscope,
  Database,
  ShieldCheck,
  FileCheck,
  Brain
} from "lucide-react";

export default function ResearchDevelopment() {
  const focusAreas = [
    {
      title: "Anti-Infectives",
      description: "Providing effective antibacterial therapies to support the treatment of infectious diseases.",
      icon: FlaskConical
    },
    {
      title: "Pain Management & Anti-Inflammatory Care",
      description: "Advanced formulations to relieve pain, inflammation, and support faster recovery.",
      icon: Activity
    },
    {
      title: "Gastroenterology",
      description: "Providing effective gastrointestinal care for improved digestive health and acid-related disorders.",
      icon: Pill
    },
    {
      title: "Bone & Joint Health",
      description: "Comprehensive nutritional and therapeutic solutions for stronger bones, joints, and musculoskeletal wellness.",
      icon: Award
    },
    {
      title: "Neurology",
      description: "Supporting nerve health and neurological well-being through advanced formulations.",
      icon: Brain
    },
    {
      title: "Urology",
      description: "Targeted therapy for improved urinary health and patient comfort.",
      icon: ShieldCheck
    },
    {
      title: "Dermatology",
      description: "Specialized topical formulations for wound care and skin infection management.",
      icon: Layers
    },
    {
      title: "Nutraceuticals",
      description: "High-quality supplements designed to support general health and wellness.",
      icon: Sparkles
    }
  ];

  const innovationPhases = [
    {
      phase: "01",
      title: "Market & Therapeutic Need Assessment",
      subtitle: "Target Identification",
      description: "Evaluating global APIs for purity profiles, therapeutic efficacy gaps, polymorph stability, and territorial intellectual property boundaries.",
      icon: BarChart
    },
    {
      phase: "02",
      title: "Scientific Formulation Development",
      subtitle: "Pilot Batches",
      description: "Optimizing excipient compatibility, granulation profiles, coating durability, and dissolution factors in clean trial labs.",
      icon: FlaskConical
    },
    {
      phase: "03",
      title: "Ingredient Selection & Quality Evaluation",
      subtitle: "Raw Material Sourcing",
      description: "Stringent vetting of active pharmaceutical ingredients and excipients to guarantee absolute molecular integrity.",
      icon: Microscope
    },
    {
      phase: "04",
      title: "Stability & Compatibility Studies",
      subtitle: "Accelerated Testing",
      description: "Conducting long-term and intermediate indexing in climatic chambers following ICH zone IVB parameters.",
      icon: Database
    },
    {
      phase: "05",
      title: "Regulatory Compliance",
      subtitle: "Dossier Preparation",
      description: "Compiling full dossiers in Common Technical Document (CTD) formats for submissions to national FDA or global health ministries.",
      icon: ShieldCheck
    },
    {
      phase: "06",
      title: "Product Validation & Commercialization",
      subtitle: "Market Launch",
      description: "Final scale-up of manufacturing batches, WHO-GMP verification, and transition to global commercial distribution.",
      icon: FileCheck
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-background via-alt-bg to-white border-b border-border py-16 relative overflow-hidden">
        {/* Soft medical lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,.04),transparent_35%)] pointer-events-none"></div>
        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Scientific Excellence
          </span>
          <div className="relative">
            {/* Optional blurred medical glow behind heading */}
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04),transparent_60%)] blur-2xl rounded-full pointer-events-none"></div>
            <h1 className="relative text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Driving Innovation</span> for Better Healthcare
            </h1>
          </div>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-[760px] relative animate-fade-in">
            At Medinet Pharmaceutical Marketing Company, Research & Development is the cornerstone of our commitment to advancing healthcare. We continuously strive to introduce innovative, effective, and high-quality pharmaceutical products that address evolving medical needs. By combining scientific expertise with market insights, we focus on delivering reliable healthcare solutions that improve patient outcomes while maintaining the highest standards of quality, safety, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Premium R&D Overview and Stats */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Subtle medical gradient glow blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full blur-[120px] bg-gradient-to-br from-[#0A192F] to-transparent opacity-20"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[30%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[120px] bg-gradient-to-bl from-[#2563EB] to-[#1D4ED8] opacity-15"
          />
          <div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[50%] rounded-full blur-[120px] bg-gradient-to-tr from-[#1D4ED8] to-transparent opacity-10" />
          
          {/* Subtle Molecular / DNA SVG Pattern */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2020.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5z%22%20fill%3D%22%230B1F4D%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10 xl:gap-16">
            
            {/* Left Content (Text 55%) */}
            <div className="w-full lg:w-[55%] lg:pr-8 xl:pr-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
              >
                {/* Premium Glassmorphism Badge */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#1D4ED8]/20 shadow-[0_4px_20px_rgba(13,148,136,0.08)] mb-8 cursor-default group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D4ED8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D4ED8]"></span>
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#0A192F] uppercase group-hover:bg-gradient-to-r group-hover:from-[#0A192F] group-hover:to-[#1D4ED8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Core Competence
                  </span>
                  {/* Subtle animated border gradient */}
                  <div className="absolute inset-0 rounded-full border border-transparent bg-[linear-gradient(90deg,transparent,rgba(13,148,136,0.4),transparent)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-300 [mask-image:linear-gradient(white,white)] [mask-composite:exclude] pointer-events-none" style={{ padding: '1px' }}></div>
                </motion.div>

                {/* Heading */}
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-[900] text-[#0A192F] tracking-tight leading-[1.1] mb-8"
                >
                  Pioneering <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-transparent bg-clip-text relative inline-block">Next-Generation<motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }} className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-[#2563EB] to-transparent rounded-full origin-left"></motion.span></span><br className="hidden sm:block" /> Pharmaceutical Delivery
                </motion.h2>

                {/* Paragraphs with Fade-Up */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="text-[#475569] leading-[1.85] max-w-[700px] text-[1.05rem] sm:text-lg mb-6 font-medium"
                >
                  Formulating bioequivalent medicines is more than copying active ingredients—it is a meticulous balancing of polymorph stability, excipient biology, and gastric transit pharmacology.
                </motion.p>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="text-[#475569] leading-[1.85] max-w-[700px] text-[1.05rem] sm:text-lg font-medium"
                >
                  At Medinet, our R&amp;D center focuses on solid-oral modifications (like sustained-release matrices) and advanced dermatological topical formulations. Through collaborating with elite clinical investigators, we run continuous human-phase trials to lock-in comparative therapeutic benchmarks.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Content (Illustration + Cards 45%) */}
            <div className="w-full lg:w-[45%] relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="relative z-10 flex flex-col gap-5 sm:gap-6"
              >
                {/* Floating Medical SVG Illustration (Abstract Molecule / DNA style) */}
                <div className="absolute -top-32 -right-16 w-80 h-80 pointer-events-none z-0 opacity-40 mix-blend-multiply hidden lg:block">
                  <motion.svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full drop-shadow-xl"
                  >
                    <motion.circle cx="100" cy="100" r="80" stroke="url(#molGrad)" strokeWidth="0.5" strokeDasharray="4 8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.circle cx="100" cy="100" r="60" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 4" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
                    <circle cx="100" cy="20" r="6" fill="#2563EB" />
                    <circle cx="169" cy="60" r="9" fill="#1D4ED8" />
                    <circle cx="169" cy="140" r="4.5" fill="#38BDF8" />
                    <circle cx="100" cy="180" r="7.5" fill="#2563EB" />
                    <circle cx="31" cy="140" r="6" fill="#1D4ED8" />
                    <circle cx="31" cy="60" r="10.5" fill="#38BDF8" />
                    <path d="M100 20 L169 60 L169 140 L100 180 L31 140 L31 60 Z" stroke="#cbd5e1" strokeWidth="0.5" />
                    <path d="M100 20 L100 100 L169 140" stroke="#cbd5e1" strokeWidth="0.5" />
                    <path d="M31 60 L100 100 L100 180" stroke="#cbd5e1" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="16" fill="url(#molGrad)" />
                    <defs>
                      <linearGradient id="molGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563EB" />
                        <stop offset="1" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative z-10">
                  {/* Card 1 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="relative group bg-white/70 backdrop-blur-xl border border-slate-200/70 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-2xl group-hover:bg-[#2563EB]/15 transition-colors duration-500"></div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-[16px] bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                        <FlaskConical className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="block text-3xl font-display font-black text-[#0A192F] mb-1">85%+</span>
                    <span className="block text-[13px] font-bold text-[#475569] group-hover:text-[#2563EB] transition-colors duration-300">Pipeline in Phase III</span>
                    <span className="block text-[10px] font-mono text-[#64748B] mt-1.5 tracking-[0.1em] uppercase">/ Filing Stage</span>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="relative group bg-white/70 backdrop-blur-xl border border-slate-200/70 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1D4ED8]/5 rounded-full blur-2xl group-hover:bg-[#1D4ED8]/15 transition-colors duration-500"></div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-[16px] bg-[#1D4ED8]/10 flex items-center justify-center text-[#1D4ED8] group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="block text-3xl font-display font-black text-[#0A192F] mb-1">Zone IVB</span>
                    <span className="block text-[13px] font-bold text-[#475569] group-hover:text-[#1D4ED8] transition-colors duration-300">Stability Chamber</span>
                    <span className="block text-[10px] font-mono text-[#64748B] mt-1.5 tracking-[0.1em] uppercase">/ Tested & Verified</span>
                  </motion.div>
                </div>

                {/* Analytical Excellence Premium Card */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="relative bg-gradient-to-br from-[#0A192F] via-[#0F2D6B] to-[#0A193F] rounded-[32px] shadow-[0_30px_60px_rgba(11,31,77,0.2)] p-7 sm:p-9 overflow-hidden border border-white/10 group z-10"
                >
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-[80px] group-hover:bg-[#2563EB]/30 transition-colors duration-700 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1D4ED8]/20 rounded-full blur-[80px] group-hover:bg-[#1D4ED8]/30 transition-colors duration-700 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-[18px] group-hover:scale-110 transition-transform duration-500 shrink-0 border border-white/10 shadow-inner">
                        <ShieldCheck className="w-7 h-7 text-[#38BDF8]" />
                      </div>
                      <div>
                        <h3 className="font-display font-[800] text-white text-xl tracking-wide">Analytical Excellence</h3>
                        <p className="text-[10px] text-[#38BDF8] font-mono mt-1 font-bold uppercase tracking-[0.15em]">LAB STANDARD · ICH COMPLIANT</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: "Full CTD/eCTD Formatting", desc: "Preparing standardized dossiers for immediate regulatory filings globally." },
                        { title: "Impurity Profile Screening", desc: "We verify negligible genotoxic or chemical impurities under strict USP criteria." },
                        { title: "Polymorphism Research", desc: "Isolating optimized molecular crystal habits to ensure robust storage life." }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                        >
                          <div className="mt-0.5 shrink-0 relative">
                            <div className="absolute inset-0 bg-[#38BDF8] blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <CheckCircle2 className="w-5 h-5 text-[#38BDF8] relative z-10" />
                          </div>
                          <div>
                            <span className="font-bold text-white block text-sm tracking-wide mb-1">{item.title}</span>
                            <p className="text-[#94A3B8] text-[12px] leading-[1.6] font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Focus Areas Cards */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-t border-b border-slate-100 relative overflow-hidden">
        {/* Subtle premium background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Soft radial glow behind the heading */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] bg-[#2563EB]/5" />
          
          {/* Low-opacity blurred gradient blobs for depth */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-gradient-to-br from-[#38BDF8] to-transparent opacity-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-gradient-to-tl from-[#1D4ED8] to-transparent opacity-10" />
          
          {/* Floating molecular particles (CSS animation) */}
          <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-[#38BDF8] blur-sm"></motion.div>
          <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute bottom-[30%] right-[20%] w-4 h-4 rounded-full bg-[#1D4ED8] blur-sm"></motion.div>
          <motion.div animate={{ y: [-15, 15, -15], x: [15, -15, 15], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full bg-[#2563EB] blur-[2px]"></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Premium Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            {/* Premium Glass Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-[#2563EB]/20 shadow-[0_4px_20px_rgba(37,99,235,0.08)] mb-6 cursor-default group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#0A192F] uppercase group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#1D4ED8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Research Pillars
              </span>
              <div className="absolute inset-0 rounded-full border border-transparent bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-300 [mask-image:linear-gradient(white,white)] [mask-composite:exclude] pointer-events-none" style={{ padding: '1px' }}></div>
            </motion.div>

            {/* Premium Heading */}
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-[900] text-[#0A192F] tracking-tight leading-[1.1] mb-6 drop-shadow-sm"
            >
              Innovation &amp; <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text relative inline-block">
                Technology
                <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }} className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB] to-transparent rounded-full origin-left"></motion.span>
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-[#475569] leading-[1.85] max-w-[700px] mx-auto text-[1.1rem] sm:text-lg font-medium"
            >
              Advancing Healthcare Through Science. Innovation drives our mission to deliver reliable pharmaceutical solutions. We embrace modern pharmaceutical technologies and continuously evaluate new formulations, advanced drug delivery systems, and improved manufacturing practices to enhance product quality and therapeutic effectiveness. Our commitment to innovation enables us to respond to changing healthcare needs while supporting better treatment outcomes.
            </motion.p>
          </motion.div>

          {/* Premium 2x2 Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              const labels = ["BIOPHARMA", "FORMULATION", "VALIDATION", "STABILITY"];
              const gradients = [
                "from-[#2563EB] to-[#38BDF8]",
                "from-[#1D4ED8] to-[#38BDF8]",
                "from-[#7C3AED] to-[#A78BFA]",
                "from-[#EC4899] to-[#F472B6]"
              ];
              const textColors = [
                "text-[#2563EB]",
                "text-[#1D4ED8]",
                "text-[#7C3AED]",
                "text-[#EC4899]"
              ];
              const bgColors = [
                "bg-[#2563EB]/10",
                "bg-[#1D4ED8]/10",
                "bg-[#7C3AED]/10",
                "bg-[#EC4899]/10"
              ];
              const hoverBgs = [
                "group-hover:bg-[#2563EB]",
                "group-hover:bg-[#1D4ED8]",
                "group-hover:bg-[#7C3AED]",
                "group-hover:bg-[#EC4899]"
              ];
              const groupHoverTextColors = [
                "group-hover:text-[#2563EB]",
                "group-hover:text-[#1D4ED8]",
                "group-hover:text-[#7C3AED]",
                "group-hover:text-[#EC4899]"
              ];

              const colorIdx = idx % 4;
              return (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
                  }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  className="relative group bg-white/70 backdrop-blur-xl border border-slate-200/70 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden text-left"
                >
                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
                  
                  {/* Top Gradient Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[colorIdx]} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Corner Blur Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-transparent to-black/5 rounded-full blur-2xl group-hover:bg-blue-50/50 transition-colors duration-500 pointer-events-none -z-10"></div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 relative z-10">
                    {/* Premium Icon Container */}
                    <div className="relative">
                      {/* Pulsing glow ring */}
                      <div className="absolute inset-0 rounded-full border border-black/5 scale-110 group-hover:scale-[1.3] group-hover:border-transparent group-hover:bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className={`w-16 h-16 rounded-[20px] ${bgColors[colorIdx]} flex items-center justify-center ${textColors[colorIdx]} group-hover:text-white ${hoverBgs[colorIdx]} transition-all duration-500 relative z-10 shadow-sm`}>
                        <motion.div 
                          animate={{ y: [-2, 2, -2] }} 
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <AreaIcon className="w-8 h-8 group-hover:rotate-3 transition-transform duration-300" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Scientific Label */}
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:bg-slate-50 transition-colors duration-300">
                      {labels[colorIdx]}
                    </span>
                  </div>

                  <h3 className={`font-display font-[800] text-[#0A192F] text-2xl mb-4 ${groupHoverTextColors[colorIdx]} transition-colors duration-300 relative z-10`}>
                    {area.title}
                  </h3>
                  
                  <p className="text-[1.05rem] text-[#64748B] leading-[1.8] font-medium relative z-10 group-hover:text-[#475569] transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Animated Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${gradients[colorIdx]} group-hover:w-full transition-all duration-700 ease-out opacity-20`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pipeline Directory */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        {/* Subtle premium background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Gentle radial glow behind the section heading */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px] bg-[#2563EB]/5" />
          
          {/* Large blurred radial gradient orbs in corners (4-8% opacity) */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-gradient-to-br from-[#38BDF8] to-transparent opacity-[0.06]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-gradient-to-tl from-[#1D4ED8] to-transparent opacity-[0.06]" />
          
          {/* Soft molecular/DNA-inspired SVG pattern at 2-3% opacity */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%20fill%3D%22%232563EB%22%2F%3E%3Cpath%20d%3D%22M20%2020l10%2010M20%2020L10%2030M20%2020l10-10M20%2020L10%2010%22%20stroke%3D%22%232563EB%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E')]"></div>
          
          {/* Floating molecular particles (respects reduced motion implicitly or via transition properties) */}
          <motion.div animate={{ y: [-15, 15, -15], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-[#38BDF8] blur-[1px]"></motion.div>
          <motion.div animate={{ y: [15, -15, 15], x: [10, -10, 10], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[35%] right-[25%] w-3 h-3 rounded-full bg-[#1D4ED8] blur-[1px]"></motion.div>
          <motion.div animate={{ y: [-10, 10, -10], x: [15, -15, 15], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute top-[45%] right-[35%] w-2 h-2 rounded-full bg-[#2563EB] blur-[1px]"></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-16 mx-auto text-center relative">
            {/* Glowing accent above heading */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              viewport={{ once: true }} 
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-[#38BDF8] to-transparent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] relative inline-block">
              Pipeline Products
              {/* Subtle animated underline */}
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent origin-center"
              />
            </h2>
            <p className="mt-7 text-base sm:text-lg text-body font-sans leading-relaxed">
              Building the Future of Healthcare. Medinet continues to strengthen its product portfolio through ongoing research and development initiatives. Our development pipeline focuses on introducing innovative formulations across multiple therapeutic areas to meet the growing demands of healthcare professionals and patients.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: "Advanced Pharmaceutical Formulations",
                desc: "High-end engineered solid oral and topical therapeutics.",
                icon: Layers,
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                title: "Novel Fixed-Dose Combinations",
                desc: "Optimized multi-API dosages to boost patient compliance.",
                icon: Activity,
                color: "text-secondary",
                bg: "bg-secondary/10"
              },
              {
                title: "Specialty Therapeutic Products",
                desc: "Focused treatments for complex CNS and cardiovascular disorders.",
                icon: Atom,
                color: "text-accent",
                bg: "bg-accent/10"
              },
              {
                title: "Patient-Friendly Dosage Forms",
                desc: "Chewable tablets, effervescents, and sustained-release pellets.",
                icon: Pill,
                color: "text-[#EC4899]",
                bg: "bg-[#EC4899]/10"
              },
              {
                title: "Expanded Therapeutic Portfolio",
                desc: "Scaling into specialized metabolic and immunology care.",
                icon: Sparkles,
                color: "text-[#7C3AED]",
                bg: "bg-[#7C3AED]/10"
              }
            ].map((pipe, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="p-8 flex flex-col justify-between group hover:-translate-y-2.5 hover:scale-[1.03] transition-all duration-500 relative overflow-hidden bg-white/95 backdrop-blur-xl border border-[#2563EB]/[0.08] shadow-[0_20px_60px_rgba(11,31,77,0.08)] hover:shadow-[0_30px_70px_rgba(11,31,77,0.12)] rounded-[24px]"
              >
                {/* Thin animated gradient line across the top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent group-hover:via-[#38BDF8] group-hover:w-[150%] group-hover:-translate-x-1/4 transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pipe.bg} border border-white/50 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-500`}>
                      <pipe.icon className={`w-6 h-6 ${pipe.color}`} />
                    </div>
                    {/* Premium pill status badge */}
                    <span className="relative inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-amber-50 to-amber-100/80 text-amber-700 border border-amber-200/50 shadow-sm overflow-hidden">
                      <span className="absolute inset-0 border border-amber-300 rounded-full animate-pulse opacity-50"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                      Under Development
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-heading text-[1.1rem] leading-tight mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {pipe.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-2">
                    {pipe.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono text-muted uppercase tracking-widest bg-white/60 backdrop-blur-md py-2 px-5 rounded-full border border-slate-200 inline-block shadow-sm">
              Pipeline products are currently under development and subject to regulatory approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Excellence Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-16 mx-auto text-center relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] relative inline-block">
              Scientific Excellence
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent origin-center"
              />
            </h2>
            <p className="mt-4 text-lg text-[#1D4ED8] font-semibold">Committed to Quality, Innovation, and Integrity</p>
            <p className="mt-7 text-base sm:text-lg text-body font-sans leading-relaxed">
              Scientific excellence is at the heart of everything we do. Our R&D philosophy is built on evidence-based development, regulatory compliance, and continuous improvement to ensure every product meets the highest standards of quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Scientific integrity",
              "Quality-driven product development",
              "Continuous innovation",
              "Regulatory excellence",
              "Patient-centric healthcare solutions",
              "Ethical pharmaceutical practices"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-slate-50 p-6 rounded-[16px] border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#1D4ED8]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <span className="font-semibold text-heading">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg font-mono text-[#0A192F] font-semibold italic">
              By combining research, innovation, and quality, Medinet remains dedicated to delivering "Reliable Care, Every Time."
            </p>
          </div>
        </div>
      </section>

      {/* Innovation & Technology Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-16 mx-auto text-center relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] relative inline-block">
              Innovation & Technology
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent origin-center"
              />
            </h2>
            <p className="mt-7 text-base sm:text-lg text-body font-sans leading-relaxed">
              Medinet integrates modern manufacturing technologies and research methodologies to develop pharmaceuticals that are safer, more effective, and accessible. From advanced drug delivery systems to precision formulation techniques, technology drives our ability to bring complex therapies to market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Drug Delivery Systems (ADDS)",
                icon: FlaskConical
              },
              {
                title: "Precision Formulation & Coating Technologies",
                icon: Layers
              },
              {
                title: "High-Performance Liquid Chromatography (HPLC) Testing",
                icon: Activity
              },
              {
                title: "Stability & Bioequivalence Analysis Labs",
                icon: Microscope
              },
              {
                title: "Cleanroom Manufacturing Environments (Class 100/1000)",
                icon: ShieldCheck
              }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-5 bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-white border border-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <tech.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="font-display font-bold text-[#0A192F] text-lg">{tech.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Infographics Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-20 mx-auto text-center relative">
            {/* Subtle glow behind the heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] rounded-full blur-[80px] bg-[#38BDF8]/10 pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A192F] tracking-tight leading-[1.15] relative inline-block">
              Product Development Process
              {/* Soft animated underline using Medinet blue gradient */}
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
                className="absolute -bottom-4 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/70 to-transparent origin-center rounded-full"
              />
            </h2>
            <p className="mt-8 text-base sm:text-lg text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
              We adhere to a thorough scientific protocol to take a molecule from theoretical assessment to actual therapeutic distribution.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative"
          >
            {/* Timeline continuous line and particle */}
            <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#2563EB]/10 via-[#38BDF8]/30 to-[#2563EB]/10 rounded-full z-0 pointer-events-none overflow-hidden">
              <motion.div 
                animate={{ x: ["-10%", "110%"] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent blur-[1px]"
              />
            </div>

            {innovationPhases.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="p-6 text-left relative group hover:-translate-y-2.5 hover:scale-[1.03] transition-all duration-500 flex flex-col justify-start bg-white/95 backdrop-blur-xl border border-[#2563EB]/[0.08] shadow-[0_20px_60px_rgba(11,31,77,0.08)] hover:shadow-[0_30px_70px_rgba(11,31,77,0.12)] rounded-[24px]"
                >
                  {/* Thin animated blue-to-teal accent line on top */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB]/50 to-[#1D4ED8]/50 opacity-50 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-500 origin-left"></div>

                  {/* Glowing circular node between each step (on the timeline) */}
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute top-[45px] -right-[16px] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8] z-10 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 pointer-events-none"></div>
                  )}

                  {/* Large elegant step numbers in top right corner */}
                  <span className="absolute top-3 right-4 text-4xl font-display font-black text-[#0A192F] opacity-[0.08] font-mono group-hover:opacity-20 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none">
                    {step.phase}
                  </span>
                  
                  <div className="flex items-center gap-2 mb-6 relative z-10">
                    {/* Premium rounded-square container with soft gradient */}
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#EFF6FF] to-white border border-[#2563EB]/10 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] group-hover:scale-110 group-hover:brightness-110 transition-all duration-500">
                      <StepIcon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                  </div>
                  
                  <h4 className="font-display font-bold text-[#0A192F] text-[1.05rem] mb-2 group-hover:text-[#2563EB] transition-colors duration-300 relative z-10">{step.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mt-1 relative z-10">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
