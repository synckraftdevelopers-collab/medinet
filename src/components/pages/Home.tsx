/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PRODUCTS, THERAPEUTIC_CATEGORIES, STATS, NEWS_ITEMS, BRAND_INFO } from "../../data";
import SectionHeader from "../SectionHeader";
import {
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
      <section id="corporate-overview" className="pt-8 pb-24 lg:pt-12 bg-white border-b border-border relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-alt-bg border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase shadow-sm mb-6">
                <span className="utility-dot"></span>
                Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] relative">
                About <span className="text-secondary">Medinet</span> <br/>Pharmaceutical Marketing
              </h2>
              <p className="mt-6 text-body leading-relaxed text-base">
                Established in {BRAND_INFO.established}, {BRAND_INFO.name} has built a highly reputable position in global pharmaceutical marketing by offering premium, affordable, and bioequivalent healthcare products.
              </p>
              <p className="mt-4 text-body leading-relaxed text-base">
                We manage therapeutic formulation delivery across intensive clinical segments including Cardiology, Neurology, Gastroenterology, Dermatology, and Respiratory sciences. By bridging manufacturing excellence with robust commercial execution, we ensure quality medicines are always within patient reach.
              </p>
              
              <div className="mt-8 flex items-center gap-6">
                <button
                  onClick={() => navigate("about")}
                  className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase text-white bg-primary px-6 py-3 rounded-xl hover:bg-secondary transition-colors group/cta shadow-md hover:shadow-lg"
                >
                  CEO MESSAGE
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Feature Highlights Grid + Image Reveal */}
            <div className="relative">
              {/* Floating Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="absolute -top-8 -right-4 lg:-right-8 z-20 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(5,150,105,0.15)] border border-border flex flex-col items-center justify-center transform hover:rotate-6 transition-transform duration-300"
              >
                <span className="text-3xl font-display font-bold text-secondary">20+</span>
                <span className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mt-1 text-center">Years of<br/>Trust</span>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                {[
                  { icon: FlaskConical, title: "Scientific Integrity", desc: "Validated clinical trials & bioequivalence matches." },
                  { icon: Handshake, title: "Ethical Partnerships", desc: "WHO-GMP, USFDA, or EU-GMP specifications." },
                  { icon: BadgeCheck, title: "Quality Assurance", desc: "Traceability from raw API up to dispatch." },
                  { icon: Activity, title: "Pharmacovigilance", desc: "Proactive safety logs & clinical feedback." },
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                    key={idx} 
                    className="utility-card p-6 group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border border-border/60"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/5 to-secondary/10 group-hover:from-secondary group-hover:to-primary rounded-xl flex items-center justify-center text-secondary group-hover:text-white mb-5 shadow-sm transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-heading text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
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
      <section className="py-24 bg-[#FAFCFB] border-b border-border relative overflow-hidden">
        {/* Subtle Premium Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(5,150,105,0.03)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,150,105,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,150,105,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          {/* Floating minimal particles */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Therapeutic Segments"
            title="Comprehensive Healthcare Formulations"
            description="We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research."
            centered
          />

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

      {/* Testimonials Endorsement Section */}
      <section className="py-24 bg-background border-t border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="Medical Feedback"
              title="Trusted by Healthcare Professionals"
              description="Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals."
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                text: "We have prescription records for over 2,500 cardiovascular patients on Medivastin 20. The comparative clinical response has been absolutely identical to innovator lipid regulators with excellent compliance.",
                name: "Dr. Ketan Mehta, MD",
                title: "Consulting Cardiologist"
              },
              {
                text: "As a regional distributor in South India, logistical reliability and uncompromised batch records are critical. Medinet provides complete CTD dossiers and maintains perfect batch stability indices.",
                name: "Ramanathan Iyer",
                title: "Chief Executive"
              },
              {
                text: "Formulating products with Gabax NT has given our neurological clinic a stellar therapeutic weapon for diabetic neuropathic pain management. Patient compliance rates are extremely high.",
                name: "Dr. Sarah Al-Dossari",
                title: "Head of Neurology"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                key={idx}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full rounded-tr-3xl -z-10 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                <Quote className="w-10 h-10 text-secondary opacity-20 mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                <p className="text-sm text-body leading-relaxed italic mb-8 relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shrink-0 shadow-md">
                    <CircleUserRound className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-heading text-sm group-hover:text-secondary transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-xs text-secondary font-mono font-bold mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section */}
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
                Corporate Media
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Latest News & Events
              </h2>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate("news-events")}
              className="mt-6 sm:mt-0 px-6 py-3 bg-white border border-border text-heading font-mono text-sm font-bold rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 flex items-center gap-2 group/press hover:border-secondary hover:text-secondary hover:shadow-lg hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              VIEW ALL PRESS RELEASES <ArrowRight className="w-4 h-4 text-secondary group-hover/press:text-accent group-hover/press:translate-x-1 transition-colors duration-300" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {latestNews.map((news, idx) => {
              let badgeBg = "bg-secondary/10 border-secondary/20";
              let badgeText = "text-secondary";
              let BadgeIcon = Presentation;
              
              if (news.category === "News") {
                badgeBg = "bg-secondary/10 border-secondary/20";
                badgeText = "text-secondary";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-success/10 border-success/20";
                badgeText = "text-success";
                BadgeIcon = HeartHandshake;
              }

              return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                key={news.id}
                onClick={() => navigate("news-events", { id: news.id })}
                className="bg-white rounded-3xl border border-border p-0 h-full flex flex-col justify-between overflow-hidden group/news hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.12)] hover:border-secondary/30 cursor-pointer"
              >
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border ${badgeBg} ${badgeText} px-3 py-1.5 rounded-full font-bold`}>
                      <BadgeIcon className="w-4 h-4" />
                      {news.category}
                    </span>
                    <span className="text-xs text-muted font-mono font-bold">{news.date}</span>
                  </div>

                  <h3 className="mt-2 font-display font-bold text-heading text-xl sm:text-2xl group-hover/news:text-secondary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="px-6 sm:px-8 py-5 border-t border-border mt-auto flex justify-between items-center bg-background/50 group-hover/news:bg-secondary/5 transition-colors duration-300">
                  <span className="text-xs text-secondary font-mono font-bold group-hover/news:text-primary transition-colors">Read complete release</span>
                  <span className="flex items-center justify-center transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5 text-secondary group-hover/news:text-primary group-hover/news:translate-x-1 group-hover/news:-translate-y-1 transition-all duration-300" />
                  </span>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>


      {/* Latest Updates Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="utility-badge-green mb-4 inline-flex">
                <span className="utility-dot"></span>
                Company Updates
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Latest Updates
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "New Product Launches", icon: Sparkles, desc: "Explore our latest innovative formulations and therapeutic additions.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Medical Conferences", icon: Presentation, desc: "Join our experts at upcoming global medical symposiums and events.", color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Company Announcements", icon: Megaphone, desc: "Stay informed with the latest corporate news and business developments.", color: "text-purple-600", bg: "bg-purple-50" },
              { title: "Career Opportunities", icon: Briefcase, desc: "Discover new roles and build your career with Medinet Pharmaceuticals.", color: "text-amber-600", bg: "bg-amber-50" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => navigate("news-events")}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-emerald-200 cursor-pointer h-full"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-emerald-700 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider group-hover:text-emerald-700 transition-colors">
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Quote Section */}
      <section className="py-24 bg-white text-center border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
              &ldquo;Reliable Care, <span className="text-emerald-600">Every Time.</span>&rdquo;
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-500 font-mono text-sm sm:text-base font-medium tracking-wide">
              <span>Committed to quality.</span>
              <span className="hidden sm:block text-slate-300">•</span>
              <span>Driven by innovation.</span>
              <span className="hidden sm:block text-slate-300">•</span>
              <span>Trusted by healthcare professionals.</span>
            </div>
          </motion.div>
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-sm font-bold rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-h-[52px]"
            >
              CONTACT OFFICES
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
