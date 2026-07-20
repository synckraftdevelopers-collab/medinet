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
              <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Research</span> & Formulation Technology
            </h1>
          </div>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-[760px] relative animate-fade-in">
            Medinet&rsquo;s R&amp;D efforts focus on mastering formulation sciences. We optimize bioavailability, ensure complete physical stability, and pioneer advanced delivery systems to maximize therapeutic outcomes.
          </p>
        </div>
      </section>

      {/* R&D Overview and Stats */}
      <section className="py-20 bg-gradient-to-b from-background via-alt-bg to-white text-left border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.04),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(13,148,136,.03),transparent_35%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                CORE COMPETENCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Pioneering <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Next-Generation</span> Pharmaceutical Delivery
              </h2>
              <p className="mt-6 text-body leading-relaxed max-w-[680px] text-sm">
                Formulating bioequivalent medicines is more than copying active ingredients—it is a meticulous balancing of polymorph stability, excipient biology, and gastric transit pharmacology.
              </p>
              <p className="mt-4 text-body leading-relaxed max-w-[680px] text-sm">
                At Medinet, our R&amp;D center focuses on solid-oral modifications (like sustained-release matrices) and advanced dermatological topical formulations. Through collaborating with elite clinical investigators, we run continuous human-phase trials to lock-in comparative therapeutic benchmarks.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="utility-card p-5 group hover:border-secondary transition-all duration-300">
                  <span className="block text-2xl font-display font-bold text-heading">85%+</span>
                  <span className="text-xs text-muted font-mono mt-2 block font-bold tracking-wide uppercase">Pipeline in Phase III / Filing</span>
                </div>
                <div className="utility-card p-5 group hover:border-secondary transition-all duration-300">
                  <span className="block text-2xl font-display font-bold text-heading">Zone IVB</span>
                  <span className="text-xs text-muted font-mono mt-2 block font-bold tracking-wide uppercase">Stability Chamber Tested</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="bg-gradient-to-br from-primary via-blue-900 to-secondary rounded-[28px] shadow-2xl hover:shadow-[0_35px_70px_rgba(37,99,235,.30)] hover:-translate-y-1 transition-all duration-300 p-8 lg:p-10 relative overflow-hidden border border-white/10 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/10 p-3.5 rounded-[16px] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <FlaskConical className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">Analytical Excellence</h3>
                    <p className="text-[10px] text-white/70 font-mono mt-1 font-bold uppercase tracking-wider">LAB STANDARD · ICH COMPLIANT</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-white block text-sm">Full CTD/eCTD Formatting</span>
                      <p className="text-white/80 mt-1.5 text-xs leading-relaxed">Preparing standardized dossiers for immediate regulatory filings globally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-white block text-sm">Impurity Profile Screening</span>
                      <p className="text-white/80 mt-1.5 text-xs leading-relaxed">We verify negligible genotoxic or chemical impurities under strict USP criteria.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <span className="font-bold text-white block text-sm">Polymorphism Research</span>
                      <p className="text-white/80 mt-1.5 text-xs leading-relaxed">Isolating optimized molecular crystal habits to ensure robust storage life.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Cards */}
      <section className="py-20 bg-background border-t border-b border-border relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Research Pillars"
            title="Sectors of Innovation"
            description="Our technological frameworks span both biochemical methods and mechanical design to support top-tier formulation integrity."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              const isEven = idx % 2 === 0;
              const iconColorClass = isEven ? 'text-secondary' : 'text-accent';
              const bgColorClass = isEven ? 'bg-secondary' : 'bg-accent';
              return (
                <div key={idx} className="utility-card p-6 text-left group hover:border-secondary relative pt-8">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] rounded-b-full transition-colors duration-300 ${bgColorClass}`}></div>
                  <div className="w-14 h-14 bg-alt-bg border border-border rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                    <AreaIcon className={`w-6 h-6 ${iconColorClass}`} />
                  </div>
                  <h3 className="font-display font-bold text-heading text-lg mb-3 group-hover:text-secondary transition-colors duration-300">{area.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Directory */}
      <section className="py-20 bg-gradient-to-b from-white via-alt-bg to-background relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Product Pipeline"
            title="Formulations in Development"
            description="Our active pipelines highlight upcoming therapeutic releases. We maintain high R&amp;D transparency from clinical evaluation up to final filing phases."
            centered
          />

          <div className="max-w-4xl mx-auto utility-card p-6 md:p-8 mt-12 hover:border-secondary transition-all duration-300">
            <div className="space-y-8 text-left">
              {PIPELINE.map((pipe) => {
                const getAccentColor = (category: string) => {
                  const cat = category.toLowerCase();
                  if (cat.includes('cardio')) return '#2563EB'; // secondary
                  if (cat.includes('neuro')) return '#7C3AED';
                  if (cat.includes('gastro')) return '#0D9488'; // accent
                  if (cat.includes('derm')) return '#EC4899';
                  if (cat.includes('respir')) return '#14B8A6';
                  return '#2563EB';
                };
                const accentColor = getAccentColor(pipe.category);

                return (
                  <div key={pipe.id} className="border-b border-border pb-8 last:border-b-0 last:pb-0 relative group">
                    <div className="absolute left-[-16px] md:left-[-24px] top-1 bottom-8 w-1 rounded-full transition-colors duration-300" style={{ backgroundColor: accentColor }}></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <span className="utility-badge-blue">
                          {pipe.category}
                        </span>
                        <h4 className="font-display font-bold text-heading text-lg mt-2 group-hover:text-secondary transition-colors duration-300">
                          {pipe.name}
                        </h4>
                      </div>
                      {(() => {
                        let bg = 'bg-alt-bg', text = 'text-muted', border = 'border-border';
                        const p = pipe.phase.toLowerCase();
                        if (p.includes('filing') || p.includes('regulatory')) { bg = 'bg-secondary/10'; text = 'text-secondary'; border = 'border-secondary/20'; }
                        else if (p.includes('iii')) { bg = 'bg-success/10'; text = 'text-success'; border = 'border-success/20'; }
                        else if (p.includes('ii')) { bg = 'bg-primary/10'; text = 'text-primary'; border = 'border-primary/20'; }
                        else if (p.includes('i')) { bg = 'bg-accent/10'; text = 'text-accent'; border = 'border-accent/20'; }
                        return (
                          <span 
                            className={`inline-flex self-start sm:self-center text-xs font-mono font-bold px-3 py-1.5 rounded-full border tracking-widest uppercase ${bg} ${text} ${border}`}
                          >
                            {pipe.phase}
                          </span>
                        );
                      })()}
                    </div>

                    <p className="text-sm leading-relaxed mb-4">
                      <span className="font-bold text-muted">Target Indication: </span>
                      <span className="text-body font-medium">{pipe.indication}</span>
                    </p>

                    {/* Visual Progress Bar */}
                    <div className="w-full">
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-muted font-bold tracking-widest uppercase">Discovery & Lab Prototype</span>
                        <span className="font-bold text-heading">{pipe.progress}% Progress</span>
                      </div>
                      <div className="w-full h-2.5 bg-border rounded-full overflow-hidden relative">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out relative bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${pipe.progress}%` }}
                        >
                          {/* Glossy highlight */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
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
      <section className="py-20 bg-background border-t border-border relative overflow-hidden">
        {/* Soft medical radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Our Protocol"
            title="The Lifecycle of Formulation"
            description="We adhere to a thorough scientific protocol to take a molecule from theoretical assessment to actual therapeutic distribution."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {innovationPhases.map((step, idx) => {
              const accentColorClass = idx === 0 ? 'bg-secondary' : idx === 1 ? 'bg-accent' : idx === 2 ? 'bg-[#7C3AED]' : 'bg-success';
              return (
                <div key={idx} className="utility-card p-8 text-left relative group hover:border-secondary">
                  {/* Left Accent Border */}
                  <div className={`absolute left-[-1px] top-8 bottom-8 w-1 rounded-r-full transition-colors duration-300 ${accentColorClass}`}></div>
                  
                  {/* Horizontal Connector for Desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-[48px] right-[-32px] w-[32px] h-[2px] bg-gradient-to-r from-primary to-secondary opacity-25 z-0 pointer-events-none"></div>
                  )}

                  <span className="absolute top-6 right-6 text-4xl font-display font-black text-heading opacity-10 font-mono transition-opacity duration-300 group-hover:opacity-20">
                    {step.phase}
                  </span>
                  
                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-alt-bg flex items-center justify-center border border-border shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {idx === 0 && <Microscope className="w-5 h-5 text-secondary" />}
                      {idx === 1 && <FlaskConical className="w-5 h-5 text-secondary" />}
                      {idx === 2 && <ShieldCheck className="w-5 h-5 text-secondary" />}
                      {idx === 3 && <FileCheck className="w-5 h-5 text-secondary" />}
                    </div>
                    <span className="bg-secondary/5 border border-secondary/20 text-secondary font-bold text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full">
                      STEP {step.phase}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-heading text-lg group-hover:text-secondary transition-colors duration-300">{step.title}</h4>
                  <span className="text-[10px] font-mono text-muted block uppercase font-bold mt-1.5 tracking-widest">{step.subtitle}</span>
                  <p className="text-sm text-body leading-relaxed mt-4">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
