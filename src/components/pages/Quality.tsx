/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
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
  Database
} from "lucide-react";

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
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-background via-alt-bg to-white border-b border-border py-16 relative overflow-hidden">
        {/* Soft radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Zero-Defect Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Quality Assurance</span> & Safety Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl relative animate-fade-in">
            At Medinet, quality is our primary pledge. We maintain absolute compliance with WHO-GMP specifications, ensuring every pill and topical gel meets international bioequivalence, purity, and clinical criteria.
          </p>
        </div>
      </section>

      {/* Quality Policy Overview */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* QA Message */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-muted uppercase block mb-4">
                // CORPORATE QUALITY CREED
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Our Pledge: Uncompromised Integrity in Every Batch
              </h2>
              <p className="mt-6 text-body leading-relaxed text-sm">
                Medinet Pharmaceutical Marketing Company operates under a strict &ldquo;Quality First&rdquo; corporate doctrine. We believe that a drug product represents a patient&rsquo;s hope for restoration, which makes any compromise in quality an ethical failure.
              </p>
              <p className="mt-4 text-body leading-relaxed text-sm">
                To fulfill this creed, our Quality Assurance heads govern every step of our allied supply lines. From checking chemical impurity indices of raw APIs up to validating climatic logistics (such as cold-chain integrity for temperature-sensitive compounds), we secure double-audited validation parameters before releasing any batch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 utility-card p-6 border-border hover:border-secondary transition-all duration-300">
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
            </div>

            {/* Certification Badge Box */}
            <div className="lg:col-span-5 relative group">
              <div className="bg-gradient-to-br from-primary to-secondary border border-white/10 border-t-[4px] border-t-accent rounded-3xl shadow-xl p-8 lg:p-10 relative overflow-hidden text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                {/* Optional glow for animation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-white text-xl relative z-10">WHO-GMP Recertified</h3>
                <p className="text-xs text-accent font-mono mt-2 uppercase tracking-wider font-bold relative z-10">Allied Production Hubs</p>
                
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
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {qualityPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`utility-card border-l-[4px] ${pillar.accent} p-8 flex gap-5 items-start group hover:border-l-secondary`}
                >
                  <div className="w-14 h-14 rounded-xl bg-alt-bg border border-border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-[4deg] group-hover:shadow-md">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pharmacovigilance safety focus */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left relative z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Pharmacovigilance Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
            <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Drug Safety</span> & Adverse Reaction Reporting (<span className="text-accent">ADR</span>)
          </h2>
          <p className="mt-6 text-sm sm:text-base text-body leading-relaxed">
            As an enterprise pharmaceutical marketer, our responsibility to patients extends far beyond commercial launch. Under our dedicated Global Safety Program, we maintain a 24/7 adverse events log.
          </p>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed">
            In compliance with international drug safety laws (ICH E2A guidelines), healthcare practitioners, pharmacies, distributors, or patients are requested to report any suspected side effects or adverse drug reactions. Reports are reviewed by clinical toxicologists within 24 hours of submission and uploaded into therapeutic databases.
          </p>

          <div className="mt-12 utility-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 group hover:-translate-y-1">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ShieldAlert className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="inline-block bg-success/10 border border-success/20 text-success text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    24/7 Pharmacovigilance
                  </span>
                </div>
                <h4 className="font-display font-bold text-heading text-lg">Suspected Drug Side Effect?</h4>
                <p className="text-body text-sm mt-1">Submit a formal report to our Drug Safety desk immediately.</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="utility-button-primary px-6 py-3.5 shrink-0"
            >
              Report Adverse Event
              <FileWarning className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-6 bg-alt-bg border border-border rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-bold text-heading">Reviewed within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-bold text-heading">WHO-GMP Safety Process</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-bold text-heading">Global Safety Database</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
