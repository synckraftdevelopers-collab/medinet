/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
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
  FileCheck
} from "lucide-react";

export default function ResearchDevelopment() {
  const focusAreas = [
    {
      title: "Bioequivalence Mapping",
      description: "We conduct intensive comparative in-vitro and in-vivo dissolution studies against originator reference standards to ensure our products deliver identical pharmacokinetic matches.",
      icon: FlaskConical
    },
    {
      title: "Novel Drug Delivery Systems (NDDS)",
      description: "Developing sustained-release granules, gastro-retentive systems, and micro-emulsions to lower dosage frequency and improve compliance.",
      icon: Pill
    },
    {
      title: "Analytical Method Validation",
      description: "Implementing ultra-high performance liquid chromatography (UHPLC) and gas chromatography method validations under ICH Q2 guidelines.",
      icon: Microscope
    },
    {
      title: "Global Stability Logging",
      description: "Conducting long-term, intermediate, and accelerated stability indexing in state-of-the-art climatic chambers following ICH zone IVB parameters.",
      icon: Database
    }
  ];

  const innovationPhases = [
    {
      phase: "01",
      title: "Active Molecule Screening",
      subtitle: "Target Identification",
      description: "Evaluating global APIs for purity profiles, therapeutic efficacy gaps, polymorph stability, and territorial intellectual property boundaries."
    },
    {
      phase: "02",
      title: "Formulation Prototyping",
      subtitle: "Pilot Batches",
      description: "Optimizing excipient compatibility, granulation profiles, coating durability, and dissolution factors in clean trial labs."
    },
    {
      phase: "03",
      title: "Bioequivalence Validation",
      subtitle: "Comparative PK Studies",
      description: "Verifying standard pharmacokinetic coefficients (Cmax, Tmax, AUC) in human volunteers in accredited clinical pharmacology units."
    },
    {
      phase: "04",
      title: "Dossier Filing & Launch",
      subtitle: "Regulatory CTD Dossiers",
      description: "Compiling full dossiers in Common Technical Document (CTD) formats for submissions to national FDA or global health ministries."
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F8FE_45%,#FFFFFF_100%)] border-b border-[#DBEAFE] py-16 relative overflow-hidden">
        {/* Soft medical lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,.04),transparent_35%)] pointer-events-none"></div>
        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(37,99,235,.02))] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF)] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_8px_20px_rgba(37,99,235,.08)] hover:shadow-[0_8px_25px_rgba(37,99,235,.15)] hover:scale-[1.02] transition-all duration-300 ease-[ease]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            Scientific Excellence
          </span>
          <div className="relative">
            {/* Optional blurred medical glow behind heading */}
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04),transparent_60%)] blur-2xl rounded-full pointer-events-none"></div>
            <h1 className="relative text-4xl sm:text-5xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight animate-fade-in">
              <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Research</span> & Formulation Technology
            </h1>
          </div>
          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.85] max-w-[760px] relative animate-fade-in">
            Medinet&rsquo;s R&amp;D efforts focus on mastering formulation sciences. We optimize bioavailability, ensure complete physical stability, and pioneer advanced delivery systems to maximize therapeutic outcomes.
          </p>
        </div>
      </section>

      {/* R&D Overview and Stats */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_50%,#FFFFFF_100%)] text-left border-b border-[#DBEAFE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.04),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(13,148,136,.03),transparent_35%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF)] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-3 shadow-[0_8px_18px_rgba(37,99,235,.08)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                CORE COMPETENCE
              </span>
              <h2 className="text-3xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight">
                Pioneering <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Next-Generation</span> Pharmaceutical Delivery
              </h2>
              <p className="mt-6 text-[#475569] leading-[1.9] max-w-[680px] text-sm">
                Formulating bioequivalent medicines is more than copying active ingredients—it is a meticulous balancing of polymorph stability, excipient biology, and gastric transit pharmacology.
              </p>
              <p className="mt-4 text-[#475569] leading-[1.9] max-w-[680px] text-sm">
                At Medinet, our R&amp;D center focuses on solid-oral modifications (like sustained-release matrices) and advanced dermatological topical formulations. Through collaborating with elite clinical investigators, we run continuous human-phase trials to lock-in comparative therapeutic benchmarks.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[linear-gradient(180deg,#FFFFFF,#F8FAFC)] border border-[#DBEAFE] p-4 rounded-[22px] shadow-[0_15px_35px_rgba(11,31,77,.08)] hover:-translate-y-[5px] hover:border-[#2563EB] hover:shadow-[0_24px_50px_rgba(37,99,235,.15)] transition-all duration-300 group">
                  <span className="block text-2xl font-display font-bold text-[#0B1F4D]">85%+</span>
                  <span className="text-xs text-[#64748B] font-mono mt-1 block">Pipeline in Phase III / Filing</span>
                </div>
                <div className="bg-[linear-gradient(180deg,#FFFFFF,#F8FAFC)] border border-[#DBEAFE] p-4 rounded-[22px] shadow-[0_15px_35px_rgba(11,31,77,.08)] hover:-translate-y-[5px] hover:border-[#2563EB] hover:shadow-[0_24px_50px_rgba(37,99,235,.15)] transition-all duration-300 group">
                  <span className="block text-2xl font-display font-bold text-[#0B1F4D]">Zone IVB</span>
                  <span className="text-xs text-[#64748B] font-mono mt-1 block">Stability Chamber Tested</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="bg-[linear-gradient(135deg,#0B1F4D,#163B7A,#2563EB)] rounded-[28px] shadow-[0_28px_60px_rgba(11,31,77,.30)] hover:shadow-[0_35px_70px_rgba(37,99,235,.30)] hover:-translate-y-[4px] transition-all duration-300 p-8 relative overflow-hidden border border-[rgba(255,255,255,0.1)] group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[rgba(255,255,255,0.12)] p-[14px] rounded-[16px] group-hover:scale-[1.08] transition-transform duration-300 shrink-0">
                    <FlaskConical className="w-6 h-6 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#FFFFFF] text-sm">Analytical Excellence</h3>
                    <p className="text-[10px] text-[rgba(255,255,255,0.70)] font-mono mt-1">LAB STANDARD · ICH COMPLIANT</p>
                  </div>
                </div>

                <div className="space-y-[32px] mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#34D399] mt-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-[#FFFFFF] block text-sm">Full CTD/eCTD Formatting</span>
                      <p className="text-[rgba(255,255,255,0.75)] mt-1.5 text-xs leading-[1.7]">Preparing standardized dossiers for immediate regulatory filings globally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#34D399] mt-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-[#FFFFFF] block text-sm">Impurity Profile Screening</span>
                      <p className="text-[rgba(255,255,255,0.75)] mt-1.5 text-xs leading-[1.7]">We verify negligible genotoxic or chemical impurities under strict USP criteria.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#34D399] mt-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-[#FFFFFF] block text-sm">Polymorphism Research</span>
                      <p className="text-[rgba(255,255,255,0.75)] mt-1.5 text-xs leading-[1.7]">Isolating optimized molecular crystal habits to ensure robust storage life.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Cards */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] border-t border-b border-[#DBEAFE] relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[11px] font-mono font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Research Pillars
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0B1F4D] tracking-tight leading-tight">
              Sectors of <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Innovation</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans leading-[1.8]">
              Our technological frameworks span both biochemical methods and mechanical design to support top-tier formulation integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              const iconColor = idx % 2 === 0 ? '#2563EB' : '#0D9488';
              return (
                <div key={idx} className="bg-[linear-gradient(180deg,#FFFFFF,#FBFDFF)] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(15,23,42,.07)] hover:-translate-y-[8px] hover:border-[#2563EB] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)] transition-all duration-[300ms] text-left group overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] rounded-b-full transition-colors duration-[300ms]" style={{ backgroundColor: iconColor }}></div>
                  <div className="w-[56px] h-[56px] bg-[linear-gradient(135deg,#EFF6FF,#DBEAFE)] border border-[#BFDBFE] rounded-[16px] flex items-center justify-center mb-4 transition-transform duration-[300ms] group-hover:scale-[1.08] group-hover:rotate-[5deg]">
                    <AreaIcon className="w-6 h-6" style={{ color: iconColor }} />
                  </div>
                  <h3 className="font-display font-bold text-[#0B1F4D] text-sm mb-2 group-hover:text-[#2563EB] transition-colors duration-[300ms]">{area.title}</h3>
                  <p className="text-xs text-[#475569] leading-[1.75]">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Directory */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F5F9FF_55%,#FFFFFF_100%)] relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[11px] font-mono font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Product Pipeline
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0B1F4D] tracking-tight leading-tight">
              Formulations in <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Development</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans leading-[1.8]">
              Our active pipelines highlight upcoming therapeutic releases. We maintain high R&amp;D transparency from clinical evaluation up to final filing phases.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[linear-gradient(180deg,#FFFFFF,#FBFDFF)] border border-[#E2E8F0] rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,.08)] hover:shadow-[0_35px_70px_rgba(37,99,235,.12)] hover:-translate-y-[4px] hover:border-[#2563EB] transition-all duration-[300ms] p-6 md:p-8">
            <div className="space-y-6 text-left">
              {PIPELINE.map((pipe) => {
                const getAccentColor = (category: string) => {
                  const cat = category.toLowerCase();
                  if (cat.includes('cardio')) return '#2563EB';
                  if (cat.includes('neuro')) return '#7C3AED';
                  if (cat.includes('gastro')) return '#0D9488';
                  if (cat.includes('derm')) return '#EC4899';
                  if (cat.includes('respir')) return '#14B8A6';
                  return '#2563EB';
                };
                const accentColor = getAccentColor(pipe.category);

                return (
                  <div key={pipe.id} className="border-b border-[#E2E8F0] pb-6 last:border-b-0 last:pb-0 relative group">
                    <div className="absolute left-[-16px] md:left-[-20px] top-1 bottom-7 w-[4px] rounded-full transition-colors duration-[300ms]" style={{ backgroundColor: accentColor }}></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[9px] font-mono bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                          {pipe.category}
                        </span>
                        <h4 className="font-display font-bold text-[#0B1F4D] text-base mt-1.5 group-hover:text-[#2563EB] transition-colors duration-[300ms]">
                          {pipe.name}
                        </h4>
                      </div>
                      {(() => {
                        let bg = '#F1F5F9', text = '#475569', border = '#E2E8F0';
                        const p = pipe.phase.toLowerCase();
                        if (p.includes('filing') || p.includes('regulatory')) { bg = '#E0F2FE'; text = '#0369A1'; border = '#7DD3FC'; }
                        else if (p.includes('iii')) { bg = '#DCFCE7'; text = '#15803D'; border = '#86EFAC'; }
                        else if (p.includes('ii')) { bg = '#DBEAFE'; text = '#1D4ED8'; border = '#93C5FD'; }
                        else if (p.includes('i')) { bg = '#FEF3C7'; text = '#92400E'; border = '#FCD34D'; }
                        return (
                          <span 
                            className="inline-flex self-start sm:self-center text-xs font-mono font-bold px-2.5 py-1 rounded-full border tracking-wide"
                            style={{ backgroundColor: bg, color: text, borderColor: border }}
                          >
                            {pipe.phase}
                          </span>
                        );
                      })()}
                    </div>

                    <p className="text-xs leading-relaxed mb-3">
                      <span className="font-semibold text-[#64748B]">Target Indication: </span>
                      <span className="text-[#334155]">{pipe.indication}</span>
                    </p>

                    {/* Visual Progress Bar */}
                    <div className="w-full">
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className="text-[#64748B]">Discovery & Lab Prototype</span>
                        <span className="font-bold text-[#0B1F4D]">{pipe.progress}% Progress</span>
                      </div>
                      <div className="w-full h-[10px] bg-[#E2E8F0] rounded-full overflow-hidden relative">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: `${pipe.progress}%`,
                            background: 'linear-gradient(90deg, #2563EB, #38BDF8)'
                          }}
                        >
                          {/* Glossy highlight */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.3),transparent)] rounded-t-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Infographics Section */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC_0%,#F5F9FF_55%,#FFFFFF_100%)] border-t border-[#DBEAFE] relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[11px] font-mono font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Our Protocol
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0B1F4D] tracking-tight leading-tight">
              The <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Lifecycle</span> of Formulation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans leading-[1.8]">
              We adhere to a thorough scientific protocol to take a molecule from theoretical assessment to actual therapeutic distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationPhases.map((step, idx) => {
              const accentColor = idx === 0 ? '#2563EB' : idx === 1 ? '#0D9488' : idx === 2 ? '#7C3AED' : '#16A34A';
              return (
                <div key={idx} className="bg-[linear-gradient(180deg,#FFFFFF,#FBFDFF)] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.08)] hover:-translate-y-[6px] hover:border-[#2563EB] hover:shadow-[0_30px_70px_rgba(37,99,235,.15)] transition-all duration-[300ms] text-left relative group">
                  {/* Left Accent Border */}
                  <div className="absolute left-[-1px] top-8 bottom-8 w-[4px] rounded-r-full transition-colors duration-[300ms]" style={{ backgroundColor: accentColor }}></div>
                  
                  {/* Horizontal Connector for Desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-[40px] right-[-24px] w-[24px] h-[2px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-25 z-0 pointer-events-none"></div>
                  )}

                  <span className="absolute top-4 right-5 text-3xl font-display font-black text-[#0B1F4D] opacity-[0.85] font-mono transition-colors duration-[300ms]">
                    {step.phase}
                  </span>
                  
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center border border-[#BFDBFE] shrink-0">
                      {idx === 0 && <Microscope className="w-4 h-4 text-[#2563EB]" />}
                      {idx === 1 && <FlaskConical className="w-4 h-4 text-[#2563EB]" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4 text-[#2563EB]" />}
                      {idx === 3 && <FileCheck className="w-4 h-4 text-[#2563EB]" />}
                    </div>
                    <span className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-bold text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full">
                      STEP {step.phase}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-[#0B1F4D] text-sm group-hover:text-[#2563EB] transition-colors duration-[300ms]">{step.title}</h4>
                  <span className="text-[10px] font-mono text-[#64748B] block uppercase font-semibold mt-1 tracking-[2px]">{step.subtitle}</span>
                  <p className="text-xs text-[#475569] leading-relaxed mt-3">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
