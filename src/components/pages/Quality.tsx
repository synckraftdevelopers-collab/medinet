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
  RotateCcw
} from "lucide-react";

export default function Quality() {
  const qualityPillars = [
    {
      title: "Quality Assurance (QA)",
      description: "QA focuses on standardizing administrative and physical workflows. We enforce strict Corrective and Preventive Actions (CAPA), maintain standard operating procedures (SOPs), perform computer-system validations (CSV), and supervise regular equipment calibration.",
      icon: FileCheck
    },
    {
      title: "Quality Control (QC)",
      description: "QC handles direct testing of material chemistry. Our allied laboratory facilities perform high-performance liquid chromatography (HPLC), dissolution profiling, sterility logging, microbial limit testing, and raw API chemical assays.",
      icon: ClipboardCheck
    },
    {
      title: "Regulatory Compliance",
      description: "We align all processes with International Council for Harmonisation (ICH) directives, ensuring perfect readiness for inspections by regional FDAs, drug controllers, and global ministries.",
      icon: ShieldCheck
    },
    {
      title: "Active Pharmacovigilance",
      description: "We track safety inputs in real-time. Our dedicated pharmacovigilance desk maintains formal Adverse Drug Reaction (ADR) logs and drafts Periodic Safety Update Reports (PSURs) to secure ongoing patient security.",
      icon: HeartPulse
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
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            Zero-Defect Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            Quality Assurance & Safety Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
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
              <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase block mb-3">
                // CORPORATE QUALITY CREED
              </span>
              <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                Our Pledge: Uncompromised Integrity in Every Batch
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                Medinet Pharmaceutical Marketing Company operates under a strict &ldquo;Quality First&rdquo; corporate doctrine. We believe that a drug product represents a patient&rsquo;s hope for restoration, which makes any compromise in quality an ethical failure.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                To fulfill this creed, our Quality Assurance heads govern every step of our allied supply lines. From checking chemical impurity indices of raw APIs up to validating climatic logistics (such as cold-chain integrity for temperature-sensitive compounds), we secure double-audited validation parameters before releasing any batch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Double Batch Testing</h4>
                    <p className="text-slate-600 text-xs mt-0.5">We test raw ingredients both at source and pre-packaging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Impeccable Traceability</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Full computerized trace index for raw materials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Badge Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-slate-400 rounded-lg shadow-sm p-8 relative overflow-hidden text-center border border-slate-900">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-display font-bold text-white text-base">WHO-GMP Recertified</h3>
                <p className="text-[10px] text-slate-600 font-mono mt-1 uppercase tracking-wider">Allied Production Hubs</p>
                
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  Our strategic partner formulation centers have successfully passed the triennial WHO-GMP recertification audits with zero critical non-conformances. This verifies our strict alignment with global pharmaceutical practices.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-900 grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div>
                    <span className="block font-bold text-white">ISO 9001</span>
                    <span className="text-[9px] text-slate-600">Standards</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white">COA</span>
                    <span className="text-[9px] text-slate-600">Verified</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white">ICH Q1-Q10</span>
                    <span className="text-[9px] text-slate-600">Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats counters banner */}
      <section className="bg-slate-900 text-white py-12 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {qualityStats.map((stat, i) => (
              <div key={i}>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white font-mono">
                  {stat.value}
                </span>
                <span className="block text-[10px] font-mono uppercase text-slate-600 mt-1 tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars Focus */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Standard Workflows"
            title="Our Quality Infrastructure"
            description="Our Quality Management System (QMS) is split into independent departments to maintain strict scientific oversight across all formulations."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg shadow-sm shadow-sm text-left flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
          <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase block mb-3">
            // PHARMACOVIGILANCE PROGRAM
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            Drug Safety & Adverse Reaction Reporting (ADR)
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            As an enterprise pharmaceutical marketer, our responsibility to patients extends far beyond commercial launch. Under our dedicated Global Safety Program, we maintain a 24/7 adverse events log.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            In compliance with international drug safety laws (ICH E2A guidelines), healthcare practitioners, pharmacies, distributors, or patients are requested to report any suspected side effects or adverse drug reactions. Reports are reviewed by clinical toxicologists within 24 hours of submission and uploaded into therapeutic databases.
          </p>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Suspected Drug Side Effect?</h4>
              <p className="text-slate-600 text-xs mt-1">Submit a formal report to our Drug Safety desk immediately.</p>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-900 text-white font-medium text-xs sm:text-sm rounded border border-slate-900 transition-colors text-center shrink-0 cursor-pointer"
            >
              Report Adverse Event (ADR)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
