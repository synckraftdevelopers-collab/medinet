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
      iconColor: "text-[#2563EB]",
      accent: "border-l-[#2563EB]",
      badge: "Certified"
    },
    {
      title: "Quality Control (QC)",
      description: "QC handles direct testing of material chemistry. Our allied laboratory facilities perform high-performance liquid chromatography (HPLC), dissolution profiling, sterility logging, microbial limit testing, and raw API chemical assays.",
      icon: FlaskConical,
      iconColor: "text-[#0D9488]",
      accent: "border-l-[#0D9488]",
      badge: "Validated"
    },
    {
      title: "Regulatory Compliance",
      description: "We align all processes with International Council for Harmonisation (ICH) directives, ensuring perfect readiness for inspections by regional FDAs, drug controllers, and global ministries.",
      icon: ShieldCheck,
      iconColor: "text-[#7C3AED]",
      accent: "border-l-[#7C3AED]",
      badge: "ICH Ready"
    },
    {
      title: "Active Pharmacovigilance",
      description: "We track safety inputs in real-time. Our dedicated pharmacovigilance desk maintains formal Adverse Drug Reaction (ADR) logs and drafts Periodic Safety Update Reports (PSURs) to secure ongoing patient security.",
      icon: HeartPulse,
      iconColor: "text-[#16A34A]",
      accent: "border-l-[#16A34A]",
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
      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] border-b border-[#DBEAFE] py-16 relative overflow-hidden">
        {/* Soft radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_8px_18px_rgba(37,99,235,.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            Zero-Defect Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
            <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Quality Assurance</span> & Safety Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] max-w-3xl relative animate-fade-in">
            At Medinet, quality is our primary pledge. We maintain absolute compliance with WHO-GMP specifications, ensuring every pill and topical gel meets international bioequivalence, purity, and clinical criteria.
          </p>
        </div>
      </section>

      {/* Quality Policy Overview */}
      <section className="py-20 bg-[#FFFFFF] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* QA Message */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono font-medium tracking-widest text-[#64748B] uppercase block mb-3">
                // CORPORATE QUALITY CREED
              </span>
              <h2 className="text-3xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight">
                Our Pledge: Uncompromised Integrity in Every Batch
              </h2>
              <p className="mt-6 text-[#475569] leading-[1.8] text-sm">
                Medinet Pharmaceutical Marketing Company operates under a strict &ldquo;Quality First&rdquo; corporate doctrine. We believe that a drug product represents a patient&rsquo;s hope for restoration, which makes any compromise in quality an ethical failure.
              </p>
              <p className="mt-4 text-[#475569] leading-[1.8] text-sm">
                To fulfill this creed, our Quality Assurance heads govern every step of our allied supply lines. From checking chemical impurity indices of raw APIs up to validating climatic logistics (such as cold-chain integrity for temperature-sensitive compounds), we secure double-audited validation parameters before releasing any batch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FFFFFF] border border-[#DCE8F5] p-6 rounded-[20px] shadow-[0_15px_40px_rgba(15,23,42,.06)] hover:-translate-y-[4px] hover:border-[#2563EB] transition-all duration-[300ms]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1F4D] text-xs sm:text-sm">Double Batch Testing</h4>
                    <p className="text-[#475569] text-xs mt-0.5 leading-relaxed">We test raw ingredients both at source and pre-packaging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Fingerprint className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1F4D] text-xs sm:text-sm">Impeccable Traceability</h4>
                    <p className="text-[#475569] text-xs mt-0.5 leading-relaxed">Full computerized trace index for raw materials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Badge Box */}
            <div className="lg:col-span-5 relative group">
              <div className="bg-[linear-gradient(180deg,#16356F,#102A5F)] border border-[rgba(255,255,255,.08)] border-t-[3px] border-t-[#38BDF8] rounded-[26px] shadow-[0_35px_80px_rgba(11,31,77,.35)] p-8 relative overflow-hidden text-center hover:-translate-y-[4px] hover:shadow-[0_45px_90px_rgba(37,99,235,.20)] transition-all duration-[300ms]">
                {/* Optional glow for animation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[300ms] pointer-events-none"></div>

                <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,.08)] flex items-center justify-center mx-auto mb-5 relative z-10">
                  <Award className="w-8 h-8 text-[#FFFFFF]" />
                </div>
                
                <h3 className="font-display font-bold text-[#FFFFFF] text-base relative z-10">WHO-GMP Recertified</h3>
                <p className="text-[10px] text-[#93C5FD] font-mono mt-1.5 uppercase tracking-wider relative z-10">Allied Production Hubs</p>
                
                <p className="mt-4 text-xs leading-relaxed text-[rgba(255,255,255,.82)] relative z-10">
                  Our strategic partner formulation centers have successfully passed the triennial WHO-GMP recertification audits with zero critical non-conformances. This verifies our strict alignment with global pharmaceutical practices.
                </p>

                <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,.08)] grid grid-cols-3 gap-2 text-center text-[11px] font-mono relative z-10">
                  {/* Badges */}
                  <div className="bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.12)] rounded-[14px] p-2 hover:bg-[rgba(56,189,248,.15)] hover:border-[rgba(56,189,248,.3)] transition-all duration-[300ms] group/badge cursor-default">
                    <span className="block font-bold text-[#FFFFFF] group-hover/badge:text-[#38BDF8] group-hover/badge:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all">ISO 9001</span>
                    <span className="text-[9px] text-[#93C5FD] mt-0.5 block">Standards</span>
                  </div>
                  <div className="bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.12)] rounded-[14px] p-2 hover:bg-[rgba(56,189,248,.15)] hover:border-[rgba(56,189,248,.3)] transition-all duration-[300ms] group/badge cursor-default">
                    <span className="block font-bold text-[#FFFFFF] group-hover/badge:text-[#38BDF8] group-hover/badge:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all">FDA</span>
                    <span className="text-[9px] text-[#93C5FD] mt-0.5 block">Verified</span>
                  </div>
                  <div className="bg-[rgba(255,255,255,.08)] border border-[rgba(255,255,255,.12)] rounded-[14px] p-2 hover:bg-[rgba(56,189,248,.15)] hover:border-[rgba(56,189,248,.3)] transition-all duration-[300ms] group/badge cursor-default">
                    <span className="block font-bold text-[#FFFFFF] group-hover/badge:text-[#38BDF8] group-hover/badge:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all">ICH Q1-Q1B</span>
                    <span className="text-[9px] text-[#93C5FD] mt-0.5 block">Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats counters banner */}
      <section className="bg-[linear-gradient(90deg,#0B1F4D,#16356F,#1E3A8A)] py-12 relative overflow-hidden group/stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {qualityStats.map((stat, i) => (
              <div key={i} className="px-4 hover:scale-[1.04] transition-transform duration-[300ms] cursor-default relative">
                {i !== 0 && <div className="hidden lg:block absolute left-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[rgba(255,255,255,0.1)]"></div>}
                {(i === 1 || i === 3) && <div className="lg:hidden absolute left-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[rgba(255,255,255,0.1)]"></div>}
                <span className="block text-2xl sm:text-3xl font-display font-bold text-[#FFFFFF] font-mono group-hover/stats:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-[300ms]">
                  {stat.value}
                </span>
                <span className="block text-[10px] font-mono uppercase text-[#93C5FD] mt-1.5 tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars Focus */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] border-b border-[#DBEAFE] relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Standard Workflows
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              Our <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Quality Infrastructure</span>
            </h2>
            
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-2xl mx-auto">
              Our Quality Management System (QMS) is split into independent departments to maintain strict scientific oversight across all formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[linear-gradient(180deg,#FFFFFF,#FBFDFF)] border border-[#DCE8F5] border-l-[4px] ${pillar.accent} rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.08)] hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_30px_70px_rgba(37,99,235,.15)] transition-all duration-[300ms] text-left p-6 sm:p-8 flex gap-5 items-start relative group overflow-hidden`}
                >
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 transition-transform duration-[300ms] group-hover:rotate-[4deg] group-hover:shadow-[0_0_15px_rgba(37,99,235,.2)]">
                    <PillarIcon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-display font-[700] text-[#0B1F4D] text-base group-hover:text-[#2563EB] transition-colors duration-[300ms]">
                        {pillar.title}
                      </h3>
                      {pillar.badge && (
                        <span className="inline-block shrink-0 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[9px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded-full">
                          {pillar.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-[#475569] leading-relaxed">
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
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F5F9FF_60%,#FFFFFF_100%)] relative overflow-hidden">
        {/* Subtle radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left relative z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            Pharmacovigilance Program
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
            <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Drug Safety</span> & Adverse Reaction Reporting (<span className="text-[#0D9488]">ADR</span>)
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#475569] leading-[1.9]">
            As an enterprise pharmaceutical marketer, our responsibility to patients extends far beyond commercial launch. Under our dedicated Global Safety Program, we maintain a 24/7 adverse events log.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-[1.9]">
            In compliance with international drug safety laws (ICH E2A guidelines), healthcare practitioners, pharmacies, distributors, or patients are requested to report any suspected side effects or adverse drug reactions. Reports are reviewed by clinical toxicologists within 24 hours of submission and uploaded into therapeutic databases.
          </p>

          <div className="mt-10 bg-[linear-gradient(180deg,#FFFFFF,#FBFDFF)] border border-[#DCE8F5] rounded-[26px] shadow-[0_20px_50px_rgba(15,23,42,.08)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group hover:-translate-y-[2px] transition-transform duration-[300ms]">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-[56px] h-[56px] rounded-[18px] bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 group-hover:scale-[1.05] transition-transform duration-[300ms]">
                <ShieldAlert className="w-7 h-7 text-[#2563EB]" />
              </div>
              <div>
                <div className="mb-1">
                  <span className="inline-block bg-[#ECFDF5] border border-[#BBF7D0] text-[#15803D] text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full">
                    24/7 Pharmacovigilance
                  </span>
                </div>
                <h4 className="font-display font-[700] text-[#0B1F4D] text-base sm:text-lg">Suspected Drug Side Effect?</h4>
                <p className="text-[#475569] text-xs sm:text-sm mt-1">Submit a formal report to our Drug Safety desk immediately.</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[linear-gradient(135deg,#16356F,#2563EB)] hover:bg-[linear-gradient(135deg,#1E40AF,#38BDF8)] text-white font-medium text-sm rounded-[16px] shadow-[0_15px_40px_rgba(37,99,235,.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,.25)] hover:-translate-y-[3px] transition-all duration-[300ms] shrink-0 cursor-pointer group/btn focus:outline-none focus:ring-4 focus:ring-[rgba(56,189,248,.2)]"
            >
              Report Adverse Event
              <FileWarning className="w-4 h-4 text-white group-hover/btn:scale-[1.1] transition-transform duration-[300ms]" />
            </a>
          </div>

          <div className="mt-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[16px] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-xs font-semibold text-[#0B1F4D]">Reviewed within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-xs font-semibold text-[#0B1F4D]">WHO-GMP Safety Process</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="text-xs font-semibold text-[#0B1F4D]">Global Safety Database</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
