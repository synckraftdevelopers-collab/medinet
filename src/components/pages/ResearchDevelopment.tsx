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
            title="Innovation & Technology"
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
            title="Pipeline Products"
            description="Our active pipelines highlight upcoming therapeutic releases. We maintain high R&amp;D transparency from clinical evaluation up to final filing phases."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              <div key={idx} className="utility-card p-6 flex flex-col justify-between group hover:border-secondary transition-all duration-300 shadow-sm relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${pipe.bg}`}></div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${pipe.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <pipe.icon className={`w-6 h-6 ${pipe.color}`} />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-700 border border-amber-200">
                      Under Development
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-heading text-lg mb-3 group-hover:text-primary transition-colors">
                    {pipe.title}
                  </h4>
                  <p className="text-sm text-body leading-relaxed mb-6">
                    {pipe.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono text-muted uppercase tracking-widest bg-alt-bg py-2 px-4 rounded-full border border-border inline-block">
              Pipeline products are currently under development and subject to regulatory approvals.
            </p>
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
            title="Product Development Process"
            description="We adhere to a thorough scientific protocol to take a molecule from theoretical assessment to actual therapeutic distribution."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-12">
            {innovationPhases.map((step, idx) => {
              const accentColorClass = idx % 2 === 0 ? 'bg-secondary' : 'bg-primary';
              const StepIcon = step.icon;
              return (
                <div key={idx} className="utility-card p-6 text-left relative group hover:border-secondary flex flex-col justify-start">
                  {/* Left Accent Border */}
                  <div className={`absolute left-[-1px] top-6 bottom-6 w-1 rounded-r-full transition-colors duration-300 ${accentColorClass}`}></div>
                  
                  {/* Horizontal Connector for Desktop */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-[44px] right-[-24px] w-[24px] h-[2px] bg-gradient-to-r from-primary to-secondary opacity-25 z-0 pointer-events-none"></div>
                  )}

                  <span className="absolute top-4 right-4 text-3xl font-display font-black text-heading opacity-10 font-mono transition-opacity duration-300 group-hover:opacity-20">
                    {step.phase}
                  </span>
                  
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-alt-bg flex items-center justify-center border border-border shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <StepIcon className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                  
                  <h4 className="font-display font-bold text-heading text-sm mb-1.5 group-hover:text-secondary transition-colors duration-300">{step.title}</h4>
                  <p className="text-xs text-body leading-relaxed mt-2">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
