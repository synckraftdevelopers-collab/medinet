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
      title: "Quality Assurance (QA)",
      description: "QA focuses on standardizing administrative and physical workflows. We enforce strict Corrective and Preventive Actions (CAPA), maintain standard operating procedures (SOPs), perform computer-system validations (CSV), and supervise regular equipment calibration.",
      icon: ClipboardCheck,
      iconColor: "text-secondary",
      accent: "border-l-secondary",
      badge: "Certified"
    },
    {
      title: "Quality Control (QC)",
      description: "QC handles direct testing of material chemistry. Our allied laboratory facilities perform high-performance liquid chromatography (HPLC), dissolution profiling, sterility logging, microbial limit testing, and raw API chemical assays.",
      icon: FlaskConical,
      iconColor: "text-accent",
      accent: "border-l-accent",
      badge: "Validated"
    },
    {
      title: "Regulatory Compliance",
      description: "We align all processes with International Council for Harmonisation (ICH) directives, ensuring perfect readiness for inspections by regional FDAs, drug controllers, and global ministries.",
      icon: ShieldCheck,
      iconColor: "text-secondary",
      accent: "border-l-secondary",
      badge: "ICH Ready"
    },
    {
      title: "Active Pharmacovigilance",
      description: "We track safety inputs in real-time. Our dedicated pharmacovigilance desk maintains formal Adverse Drug Reaction (ADR) logs and drafts Periodic Safety Update Reports (PSURs) to secure ongoing patient security.",
      icon: HeartPulse,
      iconColor: "text-success",
      accent: "border-l-success",
      badge: "24/7 Monitoring"
    }
  ];

  const qualityStats = [
    { value: "100%", label: "WHO-GMP Allied Sites" },
    { value: "0", label: "Critical Audit Observations" },
    { value: "24/7", label: "Pharmacovigilance Help Desk" },
    { value: "100%", label: "Batch API Traceability" }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-background via-alt-bg to-white border-b border-border py-16 relative overflow-hidden">
        {/* Soft radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
        <motion.div variants={fadeUp} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Zero-Defect Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Quality Assurance</span> & Safety Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl relative">
            At Medinet, quality is our primary pledge. We maintain absolute compliance with WHO-GMP specifications, ensuring every pill and topical gel meets international bioequivalence, purity, and clinical criteria.
          </p>
        </motion.div>
      </section>

      {/* Quality Policy Overview */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* QA Message */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Our Quality Commitment
              </h2>
              <p className="mt-6 text-body leading-relaxed text-sm">
                Medinet Pharmaceutical Marketing Company operates under a strict &ldquo;Quality First&rdquo; corporate doctrine. We believe that a drug product represents a patient&rsquo;s hope for restoration, which makes any compromise in quality an ethical failure.
              </p>
              <p className="mt-4 text-body leading-relaxed text-sm">
                To fulfill this creed, our Quality Assurance heads govern every step of our allied supply lines. From checking chemical impurity indices of raw APIs up to validating climatic logistics (such as cold-chain integrity for temperature-sensitive compounds), we secure double-audited validation parameters before releasing any batch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 utility-card p-6 border-border hover:border-secondary transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading text-sm">Double Batch Testing</h4>
                    <p className="text-body text-xs mt-1 leading-relaxed">We test raw ingredients both at source and pre-packaging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Fingerprint className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading text-sm">Impeccable Traceability</h4>
                    <p className="text-body text-xs mt-1 leading-relaxed">Full computerized trace index for raw materials.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certification Badge Box */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative group"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-secondary uppercase block mb-4 lg:hidden">
                // CERTIFICATIONS
              </span>
              <div className="bg-gradient-to-br from-primary to-secondary border border-white/10 border-t-[4px] border-t-accent rounded-3xl shadow-xl p-8 lg:p-10 relative overflow-hidden text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                {/* Optional glow for animation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display font-bold text-white text-xl relative z-10">Global Certifications</h3>
                <p className="text-xs text-accent font-mono mt-2 uppercase tracking-wider font-bold relative z-10">WHO-GMP & ISO 9001</p>

                <p className="mt-5 text-sm leading-relaxed text-white/80 relative z-10">
                  Our strategic partner formulation centers have successfully passed the triennial WHO-GMP recertification audits with zero critical non-conformances. This verifies our strict alignment with global pharmaceutical practices.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center text-xs font-mono relative z-10">
                  {/* Badges */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                    <span className="block font-bold text-white">ISO 9001</span>
                    <span className="text-[10px] text-accent mt-1 block font-bold">Standards</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                    <span className="block font-bold text-white">FDA</span>
                    <span className="text-[10px] text-accent mt-1 block font-bold">Verified</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                    <span className="block font-bold text-white">ICH Q1</span>
                    <span className="text-[10px] text-accent mt-1 block font-bold">Compliant</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats counters banner */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 relative overflow-hidden group/stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {qualityStats.map((stat, i) => (
              <div key={i} className="px-4 hover:scale-[1.04] transition-transform duration-[300ms] cursor-default relative">
                {i !== 0 && <div className="hidden lg:block absolute left-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>}
                {(i === 1 || i === 3) && <div className="lg:hidden absolute left-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>}
                <span className="block text-3xl sm:text-4xl font-display font-bold text-white font-mono group-hover/stats:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
                  {stat.value}
                </span>
                <span className="block text-[11px] font-mono font-bold uppercase text-white/80 mt-2 tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars Focus */}
      <section className="py-20 bg-background border-b border-border relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Standard Workflows"
            title="Our Quality Infrastructure"
            description="Our Quality Management System (QMS) is split into independent departments to maintain strict scientific oversight across all formulations."
            centered
          />

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
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <SectionHeader
            badge="Safety Standards"
            title="Pharmacovigilance"
            description="As an enterprise pharmaceutical marketer, our responsibility to patients extends far beyond commercial launch. Under our dedicated Global Safety Program, we maintain a 24/7 adverse events log."
            centered
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Adverse Event Reporting", icon: FileWarning, color: "text-rose-600", bg: "bg-rose-50" },
              { title: "Product Safety Monitoring", icon: ShieldAlert, color: "text-secondary", bg: "bg-secondary/10" },
              { title: "Risk Assessment", icon: Activity, color: "text-amber-600", bg: "bg-amber-50" },
              { title: "Regulatory Reporting Support", icon: FileCheck, color: "text-primary", bg: "bg-primary/10" },
              { title: "Continuous Safety Surveillance", icon: Eye, color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Promotion of Safe Medicine Use", icon: Heart, color: "text-accent", bg: "bg-accent/10" }
            ].map((item, idx) => (
              <div key={idx} className="utility-card p-6 flex items-start gap-5 group hover:border-secondary hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-lg group-hover:text-secondary transition-colors duration-300 mb-1">{item.title}</h4>
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
