/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PRODUCTS, THERAPEUTIC_CATEGORIES, STATS, NEWS_ITEMS, BRAND_INFO } from "../../data";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import {
  Calendar,
  Quote,
  CircleUserRound,
  Newspaper,
  Presentation,
  HeartPulse,
  ShieldPlus,
  FlaskConical,
  Handshake,
  BadgeCheck,
  ArrowRight,
  Shield,
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
  CheckCircle,
  FileText,
  Users,
  Award,
  Clock,
  ArrowUpRight,
  Pill,
  Globe,
  ShieldCheck,
  Megaphone,
  Briefcase
} from "lucide-react";

interface HomeProps {
  navigate: (route: string, queryParams?: Record<string, string>) => void;
}

const iconMap: Record<string, any> = {
  HeartPulse,
  ShieldPlus,
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
};

export default function Home({ navigate }: HomeProps) {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const latestNews = NEWS_ITEMS.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#FCFDFB] via-[#F3F9F4] to-[#ECFDF5] border-b border-border overflow-hidden">
        {/* Soft Animated Gradient & Particle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(5,150,105,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,150,105,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,150,105,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Pill */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute top-[20%] right-[15%] w-16 h-16 rounded-3xl bg-gradient-to-tr from-secondary/10 to-accent/10 border border-white/40 backdrop-blur-md items-center justify-center shadow-lg"
          >
            <Pill className="w-8 h-8 text-secondary/50" />
          </motion.div>
          {/* Floating Molecule / Flask */}
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:flex absolute bottom-[25%] left-[10%] w-20 h-20 rounded-full bg-gradient-to-tr from-primary/5 to-success/10 border border-white/40 backdrop-blur-md items-center justify-center shadow-lg"
          >
            <FlaskConical className="w-10 h-10 text-success/40" />
          </motion.div>
          {/* Decorative Geometric Circles */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-secondary/5 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden md:block absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full"
          ></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Clean background overlay to hide grid for readability */}
                <div className="absolute -inset-8 sm:-inset-16 bg-white/60 blur-3xl max-w-[760px] rounded-[32px] -z-10 pointer-events-none"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase shadow-sm mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    Enterprise Pharmaceutical Marketing
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-heading tracking-tight leading-[1.1] mb-6">
                  Bridging <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Science</span> and <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-heading">Patient Care</span>
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 w-full h-2 rounded-full bg-gradient-to-r from-secondary to-accent origin-left"
                    ></motion.span>
                  </span> Globally
                </h1>
                <p className="text-base sm:text-lg text-body leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                  Medinet Pharmaceutical Marketing Company drives the global commercialization of bioequivalent, advanced therapeutics, delivering trust to doctors and life-saving remedies to millions.
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 w-full max-w-md mx-auto lg:mx-0"
                >
                  <button
                    onClick={() => navigate("products", { section: "formulations" })}
                    className="relative overflow-hidden group/btn1 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(20,83,45,0.25)] hover:shadow-[0_12px_28px_rgba(20,83,45,0.35)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary opacity-0 group-hover/btn1:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      VIEW FORMULATIONS
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn1:translate-x-1" />
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("business-partners")}
                    className="group/btn2 px-8 py-4 bg-white text-heading border border-border rounded-xl font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                  >
                    B2B PARTNERSHIPS
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Visual Card / Glassmorphism */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                style={{ perspective: 1000 }}
              >
                <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(5,150,105,0.15)] transition-all duration-500">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg p-3 transform group-hover:rotate-6 transition-transform duration-300">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-heading text-xl">Guaranteed Efficacy</h3>
                      <p className="text-xs text-secondary font-mono mt-1">WHO-GMP & FDA Compliant</p>
                    </div>
                  </div>

                  <blockquote className="text-sm italic text-body bg-white/50 border-l-4 border-l-accent rounded-xl p-5 leading-relaxed mb-6 relative z-10 shadow-sm">
                    &ldquo;Every single batch of Medinet formulations matches the rigorous bioequivalence curves of global innovator molecules.&rdquo;
                  </blockquote>

                  <div className="space-y-4 relative z-10">
                    {[
                      "100% Bioequivalent Formulations",
                      "Double-Inspected Quality Control",
                      "Rigorous Pharmacovigilance Monitoring"
                    ].map((text, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        key={i} 
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 group-hover/item:bg-success/20 transition-colors">
                          <CheckCircle className="w-3.5 h-3.5 text-success group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm font-semibold text-heading">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between relative z-10">
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold text-primary group-hover/stat:text-secondary group-hover/stat:-translate-y-1 transition-all">10M+</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Patients</span>
                    </div>
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold text-primary group-hover/stat:text-secondary group-hover/stat:-translate-y-1 transition-all">18+</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Nations</span>
                    </div>
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold text-primary group-hover/stat:text-secondary group-hover/stat:-translate-y-1 transition-all">100%</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Audit Pass</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 lg:mt-12 flex justify-center w-full"
          >
            <button
              onClick={() => {
                document.getElementById("corporate-overview")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label="Scroll to Corporate Profile section"
              className="group/scroll flex flex-col items-center gap-3 text-muted hover:text-secondary transition-colors duration-300 focus:outline-none"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80 group-hover/scroll:opacity-100 transition-opacity">Explore Medinet</span>
              <div className="w-7 h-12 rounded-full border-2 border-border/80 group-hover/scroll:border-secondary flex justify-center pt-2 p-1 transition-colors duration-300 bg-white/30 backdrop-blur-sm shadow-sm">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2.5 bg-secondary rounded-full"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section id="corporate-overview" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden border-b border-border">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none z-0"></div>

        {/* Abstract Medical Background Elements (<5% opacity) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Scientific Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.02)_2px,transparent_2px)] bg-[size:50px_50px]"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] opacity-[0.03]"
          >
            <Shield className="w-[400px] h-[400px] text-secondary" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[5%] opacity-[0.03]"
          >
            <Activity className="w-[300px] h-[300px] text-primary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Heading & Description */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Glassmorphism Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(5,150,105,0.08)] mb-8 hover:border-secondary/40 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                  Corporate Profile
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.25] mb-6 relative inline-block">
                {/* Premium Glow behind title */}
                <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full z-[-1] pointer-events-none"></div>
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Medinet Pharmaceuticals</span>
              </h2>

              {/* Animated Gradient Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 origin-center"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
                  Established in {BRAND_INFO.established}, {BRAND_INFO.name} has built a highly reputable position in global pharmaceutical marketing by offering premium, affordable, and bioequivalent healthcare products.
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                  We manage therapeutic formulation delivery across intensive clinical segments including Cardiology, Neurology, Gastroenterology, Dermatology, and Respiratory sciences. By bridging manufacturing excellence with robust commercial execution, we ensure quality medicines are always within patient reach.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Premium 4-Card Feature Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {[
              { title: "Quality Assured", desc: "Strict GMP adherence & validation.", icon: ShieldCheck },
              { title: "Research Driven", desc: "Bioequivalent therapeutic solutions.", icon: FlaskConical },
              { title: "Regulatory Compliant", desc: "Meeting global FDA & EU standards.", icon: FileText },
              { title: "Patient Focused", desc: "Improving health access worldwide.", icon: HeartPulse }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.15), duration: 0.7, ease: "easeOut" }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[24px] border border-slate-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.08)] hover:border-secondary/30 hover:-translate-y-[8px] transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden"
              >
                {/* Floating gradient blob inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl z-0 pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500"></div>
                
                <div className="relative mb-6 z-10">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="relative w-14 h-14 bg-gradient-to-br from-white to-slate-50 rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-secondary group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
                  >
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] text-secondary font-bold">✓</span>
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                </div>
                
                <h3 className="font-display font-extrabold text-[#0B1F4D] text-lg mb-2 relative z-10 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
                
                {/* Elegant corner decoration */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-slate-200 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-slate-200 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center relative z-10">
            <button
              onClick={() => navigate("about")}
              className="group relative px-8 py-3.5 bg-white border border-slate-200 text-[#0B1F4D] font-mono text-sm font-bold tracking-wide rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(5,150,105,0.12)] hover:border-secondary hover:text-secondary transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">CEO MESSAGE</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </section>

      {/* Stats Board Section */}
      <section className="bg-[linear-gradient(135deg,#14532D_0%,#163A78_45%,#1E4FA8_100%)] py-16 text-center relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,.08),transparent_70%)] pointer-events-none z-0"></div>
        {/* Subtle glowing line bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#34D399,transparent)] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {STATS.map((stat, idx) => {
              const Icon = idx === 0 ? Award : idx === 1 ? Pill : idx === 2 ? Globe : idx === 3 ? Users : idx === 4 ? ShieldCheck : HeartHandshake;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx} 
                  className="flex flex-col items-center justify-center p-6 bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] backdrop-blur-[8px] rounded-[20px] hover:-translate-y-[6px] hover:bg-[rgba(255,255,255,.05)] hover:border-[rgba(52,211,153,.35)] hover:shadow-[0_20px_50px_rgba(20,83,45,.30)] transition-all duration-[300ms] group relative cursor-default"
                >
                  {/* Vertical dividers */}
                  {idx !== 0 && <div className="hidden lg:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(52,211,153,.20)]"></div>}
                  {(idx === 1 || idx === 3 || idx === 5) && <div className="lg:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(52,211,153,.20)]"></div>}
                  {(idx === 2 || idx === 5) && <div className="hidden md:block lg:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(52,211,153,.20)]"></div>}

                  <div className="w-8 h-8 rounded-[14px] bg-[rgba(255,255,255,.08)] flex items-center justify-center mb-4 transition-transform duration-[300ms] group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-fade-in">
                    <Icon className="w-4 h-4 text-[#34D399]" />
                  </div>

                  <motion.span 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + (idx * 0.1) }}
                    className="block text-3xl sm:text-4xl font-display font-[800] text-[#FFFFFF] tracking-tight drop-shadow-[0_0_18px_rgba(52,211,153,0.18)] transition-all duration-[300ms] animate-fade-in group-hover:drop-shadow-[0_0_24px_rgba(52,211,153,0.4)]"
                  >
                    {stat.value.replace('M+', '').replace('%', '').replace('+', '')}
                    {stat.value.includes('M+') ? (
                      <span className="text-[#34D399]">M+</span>
                    ) : stat.value.includes('+') ? (
                      <span className="text-[#34D399]">+</span>
                    ) : stat.value.includes('%') ? (
                      <span className="text-[#34D399]">%</span>
                    ) : null}
                  </motion.span>
                  
                  <span className="mt-3 text-[10px] font-mono tracking-[3px] font-[600] text-[#A7F3D0] uppercase leading-relaxed text-center w-full block break-words max-w-[140px]">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapeutic Segments Section */}
      {/* Therapeutic Segments Section (Premium Enterprise Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-t border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow behind the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none z-0"></div>

        {/* Elegant Floating Medical-Inspired Abstract Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Medical Cross (ShieldPlus) */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%]"
          >
            <ShieldPlus className="w-[120px] h-[120px] text-secondary" />
          </motion.div>

          {/* Molecule/Flask */}
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0], opacity: [0.015, 0.04, 0.015] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[8%]"
          >
            <FlaskConical className="w-[160px] h-[160px] text-primary" />
          </motion.div>

          {/* Pill Outline */}
          <motion.div 
            animate={{ x: [0, -20, 0], rotate: [15, 30, 15], opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[40%] left-[85%]"
          >
            <Pill className="w-[100px] h-[100px] text-secondary" />
          </motion.div>
          
          {/* Activity/DNA-like wave */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.015, 0.04, 0.015] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[10%] left-[15%]"
          >
            <Activity className="w-[140px] h-[140px] text-primary" />
          </motion.div>
          
          {/* Subtle animated gradient blobs behind the content */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Custom Premium Section Header */}
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            {/* Premium Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(5,150,105,0.08)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                Therapeutic Segments
              </span>
            </motion.div>

            {/* Bold Premium Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.2] mb-6 max-w-4xl mx-auto"
            >
              Comprehensive <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Healthcare</span> Formulations
            </motion.h2>

            {/* Subtle Animated Underline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mb-6 origin-center"
            ></motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base md:text-lg text-slate-500 leading-[1.8] max-w-2xl mx-auto"
            >
              We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research.
            </motion.p>
            
            {/* Thin Animated Gradient Divider Below Description */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-8 origin-center"
            ></motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {THERAPEUTIC_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Activity;
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  key={cat.id}
                  onClick={() => navigate("products", { category: cat.id })}
                  className="group relative flex flex-col justify-between bg-white rounded-2xl border border-secondary/15 p-7 cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.12)] hover:-translate-y-2 hover:scale-[1.02] hover:border-secondary/40 transition-all duration-[250ms] ease-out overflow-hidden z-10"
                >
                  {/* Subtle inner gradient (White -> Soft Mint -> White) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
                  
                  {/* Premium top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/50 via-primary/60 to-secondary/50 opacity-80 group-hover:opacity-100 group-hover:from-secondary group-hover:via-accent group-hover:to-secondary transition-all duration-[250ms]"></div>

                  <div className="relative z-10">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      className="w-14 h-14 bg-gradient-to-br from-white to-emerald-50/80 border border-secondary/15 rounded-[16px] text-secondary flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(5,150,105,0.06)] group-hover:shadow-[0_8px_25px_rgba(5,150,105,0.25)] group-hover:scale-[1.08] group-hover:from-secondary group-hover:to-primary group-hover:text-white transition-all duration-[250ms] relative"
                    >
                      <div className="absolute inset-0 rounded-[16px] bg-secondary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] -z-10"></div>
                      <IconComp className="w-6 h-6 relative z-10" />
                    </motion.div>
                    
                    <h3 className="font-display font-extrabold text-slate-900 text-[19px] mb-3 group-hover:text-secondary transition-colors duration-[250ms]">
                      {cat.name}
                    </h3>
                    
                    <p className="text-[14px] text-slate-600 leading-loose line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-500 group-hover:text-secondary transition-colors duration-[250ms] relative z-10">
                    <span className="relative overflow-hidden py-1">
                      VIEW FORMULATIONS
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-[250ms] ease-out"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-[250ms] group-hover:translate-x-1.5" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-24 bg-alt-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                Product Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Featured Formulations
              </h2>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate("products")}
              className="mt-6 sm:mt-0 px-6 py-3 bg-white border border-border text-heading rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 group/browse hover:border-secondary hover:text-secondary hover:shadow-lg hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-4 h-4 text-secondary transition-transform duration-300 group-hover/browse:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {featuredProducts.map((product, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                key={product.id}
                onClick={() => navigate("products", { id: product.id })}
                className="bg-white rounded-3xl border-t-4 border-t-secondary p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-t-accent hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.12)] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="utility-badge-blue bg-alt-bg">
                      {product.dosageForm}
                    </span>
                    <span className="text-sm font-mono text-secondary font-bold">{product.strength}</span>
                  </div>

                  <h3 className="mt-3 mb-2 font-display font-bold text-heading text-xl sm:text-2xl flex items-center gap-3 group-hover:text-secondary transition-colors duration-300">
                    <Pill className="w-6 h-6 text-secondary shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                    {product.name}
                  </h3>
                  <div className="text-sm text-secondary font-mono italic mt-1 line-clamp-1">
                    {product.genericName}
                  </div>
                  <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <span className="block text-xs font-bold text-secondary font-mono uppercase tracking-wider">
                      Key Indications:
                    </span>
                    <ul className="space-y-2 text-sm text-body">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-2">
                          <span className="text-accent shrink-0 font-bold">•</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono"><span className="text-muted">Pack:</span> <span className="text-heading font-bold">{product.packaging}</span></span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-white to-slate-50 border border-emerald-200 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm group-hover:from-emerald-600 group-hover:to-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all duration-250 group/btn">
                    DETAILS <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white group-hover:translate-x-1 transition-transform duration-250" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials Endorsement Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-t border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-[radial-gradient(circle,rgba(5,150,105,0.1),transparent_70%)] blur-2xl -z-10 pointer-events-none"></div>
            
            <span className="utility-badge-green mb-4 inline-flex">
              <span className="utility-dot"></span>
              Medical Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.2] mb-4">
              Trusted by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Healthcare</span> Professionals
            </h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-6"></div>
            <p className="text-body max-w-2xl mx-auto leading-relaxed">
              Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals.
            </p>
          </motion.div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 mb-16">
            {[
              { label: "Healthcare Partners", value: "500+", icon: HeartPulse },
              { label: "Countries", value: "25+", icon: Globe },
              { label: "Satisfaction Rate", value: "98%", icon: ShieldCheck },
              { label: "Years of Trust", value: "15+", icon: Award }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-secondary mb-2 opacity-80" />
                <span className="text-2xl md:text-3xl font-display font-bold text-heading">{stat.value}</span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mt-1 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                text: "We have prescription records for over 2,500 cardiovascular patients on Medivastin 20. The comparative clinical response has been absolutely identical to innovator lipid regulators with excellent compliance.",
                name: "Dr. Ketan Mehta, MD",
                title: "Consulting Cardiologist",
                verified: true
              },
              {
                text: "As a regional distributor in South India, logistical reliability and uncompromised batch records are critical. Medinet provides complete CTD dossiers and maintains perfect batch stability indices.",
                name: "Ramanathan Iyer",
                title: "Chief Executive",
                verified: true
              },
              {
                text: "Formulating products with Gabax NT has given our neurological clinic a stellar therapeutic weapon for diabetic neuropathic pain management. Patient compliance rates are extremely high.",
                name: "Dr. Sarah Al-Dossari",
                title: "Head of Neurology",
                verified: true
              }
            ].map((testimonial, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
                key={idx}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[24px] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(5,150,105,0.08)] hover:border-secondary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Floating blob */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl -z-10"
                ></motion.div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex-1">
                  <Quote className="absolute -top-4 -left-4 w-16 h-16 text-secondary/10 -z-10 transform -scale-x-100 group-hover:scale-110 group-hover:-scale-x-110 transition-transform duration-300" />
                  <p className="text-base text-slate-700 leading-[1.8] relative z-10 mb-8 mt-2">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 relative z-10">
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-[3px] border-white shadow-md flex items-center justify-center shrink-0">
                    <CircleUserRound className="w-8 h-8 text-slate-400" />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-base">{testimonial.name}</h4>
                    <p className="text-xs text-secondary font-semibold uppercase tracking-wider mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section (Premium Enterprise Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

        {/* Abstract Medical Shapes (< 5% opacity) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0], opacity: [0.01, 0.03, 0.01] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%]"
          >
            <Shield className="w-[200px] h-[200px] text-primary" />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.015, 0.035, 0.015] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] left-[5%]"
          >
            <Droplet className="w-[150px] h-[150px] text-secondary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Two-Column Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Glassmorphism Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-6 group cursor-default hover:border-secondary/30 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 group-hover:bg-primary transition-colors"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary group-hover:bg-primary transition-colors"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-slate-700 uppercase">
                  Corporate Media
                </span>
              </div>
              
              {/* Dominant Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.2] mb-4">
                Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">News</span> & Events
              </h2>
              
              <p className="text-slate-500 text-base leading-relaxed">
                Stay updated with the latest clinical developments, corporate milestones, and social responsibility initiatives at Medinet Pharmaceuticals.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              onClick={() => navigate("news-events")}
              className="group relative px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-mono text-sm font-bold tracking-wide rounded-xl shadow-[0_8px_20px_rgba(5,150,105,0.25)] hover:shadow-[0_12px_25px_rgba(5,150,105,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              {/* Ripple Effect Background */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">VIEW ALL PRESS RELEASES</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {latestNews.map((news, idx) => {
              let badgeBg = "bg-secondary/10 border-secondary/20";
              let badgeText = "text-secondary";
              let BadgeIcon = Presentation;
              
              if (news.category === "News") {
                badgeBg = "bg-primary/10 border-primary/20";
                badgeText = "text-primary";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-emerald-100 border-emerald-200";
                badgeText = "text-emerald-700";
                BadgeIcon = HeartHandshake;
              }

              const images = [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Lab
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", // Conference
                "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"  // CSR
              ];
              const imageUrl = images[idx % images.length];

              return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                key={news.id}
                onClick={() => navigate("news-events", { id: news.id })}
                className="group relative bg-white rounded-[24px] border border-slate-100 h-full flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.08)] hover:border-secondary/30 hover:-translate-y-[10px] transition-all duration-300"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                {/* Premium Thumbnail Area */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-[#0B1F4D]/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <Image 
                    src={imageUrl} 
                    alt={news.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Pill over Image */}
                  <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider border ${badgeBg} ${badgeText} px-3 py-1.5 rounded-full font-bold bg-white/90 backdrop-blur-sm shadow-sm`}>
                    <BadgeIcon className="w-3.5 h-3.5" />
                    {news.category}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-start relative z-10 bg-white">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-2 mb-4 text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono font-semibold tracking-wide">{news.date}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-[#0B1F4D] text-lg sm:text-xl md:text-2xl leading-[1.3] group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                {/* Fixed Bottom CTA */}
                <div className="px-6 md:px-8 py-5 border-t border-slate-100 bg-slate-50/50 group-hover:bg-secondary/5 transition-colors duration-300 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-secondary relative overflow-hidden py-1">
                    READ COMPLETE RELEASE
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>


      {/* Latest Updates Section (Premium Enterprise Feature Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none z-0"></div>

        {/* Very soft floating medical abstract elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle medical pattern (grid of tiny dots) */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(5,150,105,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%]"
          >
            <Activity className="w-[120px] h-[120px] text-secondary" />
          </motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[10%]"
          >
            <Brain className="w-[160px] h-[160px] text-primary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Glassmorphism Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(5,150,105,0.08)] mb-6 hover:border-secondary/40 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                  Company Updates
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.2] mb-6">
                Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Updates</span>
              </h2>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6 origin-center"
              ></motion.div>

              <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Stay informed with our latest corporate announcements, product launches, global events, and career opportunities at Medinet.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Very soft connecting lines between cards (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0"></div>

            {[
              { title: "New Product Launches", icon: Sparkles, desc: "Explore our latest innovative formulations and therapeutic additions." },
              { title: "Medical Conferences", icon: Presentation, desc: "Join our experts at upcoming global medical symposiums and events." },
              { title: "Company Announcements", icon: Megaphone, desc: "Stay informed with the latest corporate news and business developments." },
              { title: "Career Opportunities", icon: Briefcase, desc: "Discover new roles and build your career with Medinet Pharmaceuticals." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                onClick={() => navigate("news-events")}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[24px] border border-slate-100 p-8 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.08)] hover:border-secondary/30 hover:-translate-y-[10px] transition-all duration-300 h-full z-10"
              >
                {/* Thin animated gradient strip at the top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative gradient blob behind selected cards (e.g. alternate cards) */}
                {(idx === 0 || idx === 3) && (
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl z-0 pointer-events-none"></div>
                )}
                {(idx === 1 || idx === 2) && (
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl z-0 pointer-events-none"></div>
                )}

                <div className="relative z-10">
                  {/* Premium gradient circular container for icon */}
                  <div className="relative w-14 h-14 rounded-full mb-8">
                    {/* Soft glow around the icon */}
                    <div className="absolute inset-0 bg-secondary/20 blur-md rounded-full scale-110 opacity-50 group-hover:opacity-100 group-hover:bg-primary/30 transition-all duration-300"></div>
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-secondary/40 transition-colors duration-300"
                    >
                      <item.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  <h3 className="font-display font-extrabold text-[#0B1F4D] text-xl group-hover:text-secondary transition-colors duration-300 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto relative z-10 flex items-center">
                  <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider relative overflow-hidden py-1">
                    EXPLORE
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Trust Statement Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden border-b border-border">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none z-0"></div>

        {/* Abstract Medical Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Scientific Dots Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.03)_2px,transparent_2px)] bg-[size:60px_60px]"></div>
          
          {/* Giant low-opacity quotation mark */}
          <Quote className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] text-primary opacity-[0.02] transform -scale-x-100 rotate-12" />
          
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%]"
          >
            <Activity className="w-[180px] h-[180px] text-secondary" />
          </motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[10%]"
          >
            <ShieldPlus className="w-[150px] h-[150px] text-primary" />
          </motion.div>

          {/* Soft glowing particles moving slowly */}
          <motion.div 
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-secondary blur-[2px]"
          ></motion.div>
          <motion.div 
            animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-[40%] left-[20%] w-3 h-3 rounded-full bg-primary blur-[2px]"
          ></motion.div>
        </div>

        {/* Floating gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-20 md:mb-24 relative"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.15] mb-8">
              &ldquo;Reliable Care, <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Every Time.</span>&rdquo;
            </h2>
            
            {/* Animated Gradient Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="w-32 h-1.5 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
            ></motion.div>
          </motion.div>

          {/* Subtle Horizontal Gradient Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

          {/* Premium Feature Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Committed to Quality",
                desc: "Every formulation follows strict quality standards.",
                icon: ShieldCheck
              },
              {
                title: "Driven by Innovation",
                desc: "Research-backed pharmaceutical development.",
                icon: FlaskConical
              },
              {
                title: "Trusted Worldwide",
                desc: "Healthcare professionals rely on Medinet.",
                icon: Globe
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.2, duration: 0.7, ease: "easeOut" }}
                className={`group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(37,99,235,0.05)] border border-transparent hover:border-slate-100 ${idx === 2 ? 'md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full' : ''}`}
              >
                <div className="relative mb-6">
                  {/* Soft hover glow */}
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Circular Medical Icon */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-md flex items-center justify-center z-10 group-hover:border-primary/30 transition-colors duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-[#0B1F4D] group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>
                
                <h3 className="font-display font-bold text-[#0B1F4D] text-xl mb-3 tracking-wide flex items-center justify-center gap-2">
                  <span className="text-secondary font-sans">✓</span>
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global B2B Call To Action Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-secondary to-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            PARTNER WITH MEDINET
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
            Scale Your <span className="text-accent">Pharmaceutical</span><br/>Distribution <span className="text-accent">Globally</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Leverage our premium bioequivalent product portfolio, dedicated regulatory support, and flexible third-party manufacturing arrangements to boost your market dominance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => navigate("business-partners")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-alt-bg text-primary font-mono text-sm font-bold rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] group/primary min-h-[52px]"
            >
              PARTNER INQUIRY FORM <ArrowRight className="w-5 h-5 text-primary group-hover/primary:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white/10 border border-white/20 text-white font-mono text-sm font-bold rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-h-[52px] !bg-none hover:!bg-white/20 hover:!bg-none active:!bg-white/30 active:!bg-none [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              CONTACT OFFICES
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
