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
  Atom
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
      icon: Cpu
    },
    {
      title: "Analytical Method Validation",
      description: "Implementing ultra-high performance liquid chromatography (UHPLC) and gas chromatography method validations under ICH Q2 guidelines.",
      icon: Binary
    },
    {
      title: "Global Stability Logging",
      description: "Conducting long-term, intermediate, and accelerated stability indexing in state-of-the-art climatic chambers following ICH zone IVB parameters.",
      icon: Layers
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
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            Scientific Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            Research & Formulation Technology
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Medinet&rsquo;s R&amp;D efforts focus on mastering formulation sciences. We optimize bioavailability, ensure complete physical stability, and pioneer advanced delivery systems to maximize therapeutic outcomes.
          </p>
        </div>
      </section>

      {/* R&D Overview and Stats */}
      <section className="py-20 bg-white text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase block mb-3">
                // CORE COMPETENCE
              </span>
              <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                Pioneering Next-Generation Pharmaceutical Delivery
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                Formulating bioequivalent medicines is more than copying active ingredients—it is a meticulous balancing of polymorph stability, excipient biology, and gastric transit pharmacology.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                At Medinet, our R&amp;D center focuses on solid-oral modifications (like sustained-release matrices) and advanced dermatological topical formulations. Through collaborating with elite clinical investigators, we run continuous human-phase trials to lock-in comparative therapeutic benchmarks.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border border-slate-200 p-4 rounded-lg shadow-sm bg-slate-50">
                  <span className="block text-2xl font-display font-bold text-slate-900">85%+</span>
                  <span className="text-xs text-slate-600 font-mono mt-1 block">Pipeline in Phase III / Filing</span>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg shadow-sm bg-slate-50">
                  <span className="block text-2xl font-display font-bold text-slate-900">Zone IVB</span>
                  <span className="text-xs text-slate-600 font-mono mt-1 block">Stability Chamber Tested</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="bg-slate-900 text-slate-400 rounded-lg shadow-sm p-8 relative overflow-hidden border border-slate-900">
                <div className="flex items-center gap-3 mb-6">
                  <Atom className="w-6 h-6 text-white shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-white text-sm">Analytical Excellence</h3>
                    <p className="text-[10px] text-slate-600 font-mono">LAB STANDARD: ICH COMPLIANT</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 bg-slate-900 border border-slate-900 rounded flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Full CTD/eCTD Formatting</span>
                      <p className="text-slate-600 mt-0.5 text-xs">Preparing standardized dossiers for immediate regulatory filings globally.</p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-slate-900 border border-slate-900 rounded flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Impurity Profile Screening</span>
                      <p className="text-slate-600 mt-0.5 text-xs">We verify negligible genotoxic or chemical impurities under strict USP criteria.</p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-slate-900 border border-slate-900 rounded flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Polymorphism Research</span>
                      <p className="text-slate-600 mt-0.5 text-xs">Isolating optimized molecular crystal habits to ensure robust storage life.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Cards */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Research Pillars"
            title="Sectors of Innovation"
            description="Our technological frameworks span both biochemical methods and mechanical design to support top-tier formulation integrity."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm text-left shadow-sm">
                  <div className="w-9 h-9 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-4">
                    <AreaIcon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-sm mb-2">{area.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Pipeline"
            title="Formulations in Development"
            description="Our active pipelines highlight upcoming therapeutic releases. We maintain high R&amp;D transparency from clinical evaluation up to final filing phases."
            centered
          />

          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm p-6 md:p-8 shadow-sm">
            <div className="space-y-6 text-left">
              {PIPELINE.map((pipe) => (
                <div key={pipe.id} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[9px] font-mono bg-slate-100 text-slate-900 border border-slate-200 px-2 py-0.5 rounded font-bold uppercase">
                        {pipe.category}
                      </span>
                      <h4 className="font-display font-bold text-slate-900 text-base mt-1.5">
                        {pipe.name}
                      </h4>
                    </div>
                    <span className="inline-flex self-start sm:self-center text-xs font-mono font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                      {pipe.phase}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    <span className="font-semibold text-slate-600">Target Indication: </span>
                    {pipe.indication}
                  </p>

                  {/* Visual Progress Bar */}
                  <div className="w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                      <span>Discovery & Lab Prototype</span>
                      <span className="font-bold text-slate-900">{pipe.progress}% Progress</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-150 rounded overflow-hidden">
                      <div
                        className="h-full bg-slate-900 rounded transition-all duration-1000"
                        style={{ width: `${pipe.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Infographics Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Protocol"
            title="The Lifecycle of Formulation"
            description="We adhere to a thorough scientific protocol to take a molecule from theoretical assessment to actual therapeutic distribution."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationPhases.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm text-left relative shadow-sm group">
                <span className="absolute top-4 right-4 text-2xl font-display font-black text-slate-150 group-hover:text-slate-250 font-mono transition-colors">
                  {step.phase}
                </span>
                <div className="w-8 h-8 rounded bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-xs font-mono mb-4">
                  S{idx + 1}
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm">{step.title}</h4>
                <span className="text-[10px] font-mono text-slate-600 block uppercase font-semibold mt-0.5">{step.subtitle}</span>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
