/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { BRAND_INFO, LEADERSHIP } from "../../data";
import SectionHeader from "../SectionHeader";
import {
  Compass,
  Eye,
  Heart,
  Target,
  Shield,
  Award,
  TrendingUp,
  AwardIcon,
  CheckCircle,
  Briefcase
} from "lucide-react";

export default function About() {
  const timelineMilestones = [
    {
      year: "1998",
      title: "The Inception of Medinet",
      description: "Established as a specialized domestic marketer of formulations in Mumbai with a small core team of 10 people."
    },
    {
      year: "2005",
      title: "Therapeutic Expansion",
      description: "Launched our specialized Cardiovascular and Gastroenterology divisions, reaching over 12 states across India."
    },
    {
      year: "2012",
      title: "Global Footprint Initiative",
      description: "Signed our first international distribution agreement, opening channels in South-East Asia and East Africa."
    },
    {
      year: "2018",
      title: "Allied Manufacturing & R&D Hub",
      description: "Commissioned our allied formulation technology center in Thane, facilitating intensive bioequivalence validation."
    },
    {
      year: "2022",
      title: "CNS & Neurology Launch",
      description: "Successfully rolled out our central nervous system portfolio with premium dual-mechanism pain molecules."
    },
    {
      year: "2026",
      title: "CPHI Global Showcase",
      description: "Expanding distribution into 18+ countries and targeting advanced European regulatory registrations."
    }
  ];

  const coreValues = [
    {
      title: "Scientific Ethics",
      description: "We verify therapeutic equivalence curves on all batches. No formulation is marketed without verified bioequivalence.",
      icon: Compass
    },
    {
      title: "Uncompromised Quality",
      description: "We work exclusively with WHO-GMP compliant facilities. Our quality assurance parameters meet or exceed BP, USP, and IP guidelines.",
      icon: Shield
    },
    {
      title: "Patient Accessibility",
      description: "We believe that life-saving therapeutic solutions must remain affordable and continuously accessible.",
      icon: Heart
    },
    {
      title: "Dynamic Collaboration",
      description: "We build mutually lucrative partnerships with local distributors, healthcare chains, and contract manufacturers.",
      icon: Target
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            About Medinet Pharmaceuticals
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Established with a deep commitment to patient care, Medinet Pharmaceutical Marketing Company serves as a vital bridge between complex formulation chemistry and accessible healthcare delivery.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy & CEO Message */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Portrait & Sign-off */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 text-white font-mono text-lg rounded flex items-center justify-center shadow-none">
                  &ldquo;
                </div>
                <div className="bg-slate-50 rounded border border-slate-200 p-8 shadow-sm">
                  <p className="text-slate-600 leading-relaxed italic text-xs sm:text-sm">
                    &ldquo;{BRAND_INFO.ceoMessage}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={LEADERSHIP[1].image}
                      alt={LEADERSHIP[1].name}
                      className="w-11 h-11 rounded object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-xs">{LEADERSHIP[1].name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">{LEADERSHIP[1].role}</p>
                      <p className="text-[10px] text-slate-900 font-mono mt-0.5">{LEADERSHIP[1].qualification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Philosophy */}
            <div className="lg:col-span-7 text-left">
              <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase block mb-3">
                // CORPORATE PHILOSOPHY
              </span>
              <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                Quality, Ethics, and Patient Efficacy
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                Our organizational ethos is structured entirely around the safety of the end patient. By maintaining a highly selective licensing pipeline, Medinet works exclusively with active pharmaceutical ingredients (APIs) validated in certified bioequivalence clinical studies.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                We believe that premium, life-restoring pharmaceuticals should not carry prohibitive costs. Through optimizing distribution channels, standardizing dossiers, and leveraging economies of scale, we succeed in making modern pharmacology reachable to patients globally.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Bioequivalence Certified</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Matching reference innovator drug PK curves.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">WHO-GMP Standard</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Manufactured strictly in certified plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm shadow-sm text-left relative overflow-hidden group hover:border-slate-450 transition-all">
              <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-6">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-4">Our Corporate Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To discover, license, and market high-quality, bioequivalent formulations across key therapeutic areas, and distribute them efficiently to improve patient health outcomes worldwide. We exist to make advanced healthcare accessible, ethical, and continuous.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm shadow-sm text-left relative overflow-hidden group hover:border-slate-450 transition-all">
              <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-6">
                <Eye className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-4">Our Long-term Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To rank among the most trusted global names in pharmaceutical licensing and marketing. We aim to continuously expand our portfolio in critical unmet segments like Oncology and CNS, maintaining zero-defect quality standards and sustainable strategic partnerships across all continents.
              </p>
            </div>
          </div>

          <SectionHeader
            badge="Core Values"
            title="The Pillars of Medinet"
            description="Our organizational culture is guided by clear, unyielding ethical principles that dictate how we conduct business, evaluate scientific formulations, and interact with healthcare practitioners."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm text-left">
                  <div className="w-9 h-9 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-4">
                    <ValueIcon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Executive Leadership"
            title="Guiding Our Scientific Vision"
            description="Our steering committee brings together elite clinical minds, pharmaceutical licensing veterans, and regulatory compliance leaders with decadal experience."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.id}
                className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden shadow-sm hover:border-slate-900 transition-all duration-200 group text-left"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-xs text-white leading-relaxed line-clamp-3">
                      {leader.bio}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-semibold text-slate-600 uppercase tracking-wider block">
                    {leader.role}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-sm mt-1 line-clamp-1">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1.5 leading-relaxed">
                    {leader.qualification}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 line-clamp-2 sm:hidden block">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Corporate Timeline"
            title="Our Path of Progress"
            description="Review the critical milestones that defined our transition from a local marketer to a globally trusted pharmaceutical exporter."
            centered
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Center spine on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left/Right content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 shadow-sm hover:border-slate-450 transition-all">
                        <span className="inline-block text-lg font-display font-bold text-slate-900 font-mono mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Center Indicator */}
                    <div className="hidden md:flex w-[10%] items-center justify-center relative z-10">
                      <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 font-mono text-[10px] font-bold">
                        {idx + 1}
                      </div>
                    </div>

                    {/* Empty placeholder on opposite side */}
                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
