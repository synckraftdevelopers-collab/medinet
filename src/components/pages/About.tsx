/**
 * @license
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Image from "next/image";
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
  Briefcase,
  FlaskConical,
  ShieldCheck,
  HeartHandshake,
  Handshake,
  Rocket,
  Building2,
  Globe,
  Factory,
  Brain
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
      description: <>We verify therapeutic equivalence curves on all batches, ensuring unyielding <span className="text-[#2563EB] font-semibold">Ethics</span> in every formulation.</>,
      icon: FlaskConical,
      accent: "border-t-[#2563EB]"
    },
    {
      title: "Uncompromised Quality",
      description: <>We work exclusively with <span className="text-[#2563EB] font-semibold">WHO-GMP</span> compliant facilities. Our stringent <span className="text-[#2563EB] font-semibold">Quality</span> assurance meets global standards.</>,
      icon: ShieldCheck,
      accent: "border-t-[#0D9488]"
    },
    {
      title: "Patient Accessibility",
      description: <>We believe life-saving therapeutics must remain affordable to ensure continuous <span className="text-[#2563EB] font-semibold">Accessibility</span> for all.</>,
      icon: HeartHandshake,
      accent: "border-t-[#38BDF8]"
    },
    {
      title: "Dynamic Collaboration",
      description: <>We build mutually lucrative <span className="text-[#2563EB] font-semibold">Partnership</span> models with leading <span className="text-[#2563EB] font-semibold">Healthcare</span> distributors globally.</>,
      icon: Handshake,
      accent: "border-t-[#2563EB]"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_60%,#F1F5F9_100%)] border-b border-[#E2E8F0] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mb-3">
            About Medinet Pharmaceuticals
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.85] max-w-3xl">
            Established with a deep commitment to patient care, Medinet Pharmaceutical Marketing Company serves as a vital bridge between complex formulation chemistry and accessible healthcare delivery.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy & CEO Message */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Portrait & Sign-off */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] text-[#FFFFFF] font-mono text-lg rounded flex items-center justify-center shadow-[0_10px_24px_rgba(37,99,235,.30)] z-10">
                  &ldquo;
                </div>
                <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded border border-[#DBEAFE] p-8 shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.12)] hover:-translate-y-[4px] transition-all duration-300 ease-[ease]">
                  <p className="text-[#334155] leading-[1.7] italic text-xs sm:text-sm">
                    &ldquo;{BRAND_INFO.ceoMessage}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={LEADERSHIP[1].image}
                      alt={LEADERSHIP[1].name}
                      width={44}
                      height={44}
                      className="rounded object-cover border border-border"
                    />
                    <div>
                      <h4 className="font-display font-bold text-heading text-xs">{LEADERSHIP[1].name}</h4>
                      <p className="text-[11px] text-muted font-mono">{LEADERSHIP[1].role}</p>
                      <p className="text-[10px] text-heading font-mono mt-0.5">{LEADERSHIP[1].qualification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Philosophy */}
            <div className="lg:col-span-7 text-left">
              <span className="text-[11px] font-mono font-medium tracking-widest text-[#2563EB] uppercase block mb-3">
                // CORPORATE PHILOSOPHY
              </span>
              <h2 className="text-3xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                <span className="text-[#2563EB] font-semibold">Quality</span>, <span className="text-[#2563EB] font-semibold">Ethics</span>, and Patient Efficacy
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed text-sm">
                Our organizational ethos is structured entirely around the <span className="text-[#2563EB] font-semibold">safety of the end patient</span>. By maintaining a highly selective licensing pipeline, Medinet works exclusively with active pharmaceutical ingredients (APIs) validated in certified <span className="text-[#2563EB] font-semibold">bioequivalence</span> clinical studies.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                We believe that premium, life-restoring pharmaceuticals should not carry prohibitive costs. Through optimizing distribution channels, standardizing dossiers, and leveraging economies of scale, we succeed in making modern pharmacology reachable to patients globally.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#0F172A] text-sm">Bioequivalence Certified</h4>
                    <p className="text-xs text-[#475569] mt-0.5">Matching reference innovator drug PK curves.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#0F172A] text-sm">WHO-GMP Standard</h4>
                    <p className="text-xs text-[#475569] mt-0.5">Manufactured strictly in certified plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(37,99,235,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Corporate Mission</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To discover, license, and market high-<span className="text-[#2563EB] font-semibold">Quality</span>, <span className="text-[#2563EB] font-semibold">Bioequivalent</span> formulations across key therapeutic areas, and distribute them efficiently to improve <span className="text-[#2563EB] font-semibold">Patient Care</span> worldwide. We exist to make advanced healthcare <span className="text-[#2563EB] font-semibold">Accessibility</span> a reality, maintaining ethical and continuous supply.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(56,189,248,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Long-term Vision</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To rank among the most trusted <span className="text-[#2563EB] font-semibold">Global</span> names in pharmaceutical licensing and marketing. Our <span className="text-[#2563EB] font-semibold">Vision</span> is to continuously drive <span className="text-[#2563EB] font-semibold">Innovation</span> in critical unmet segments like Oncology and CNS, maintaining zero-defect <span className="text-[#2563EB] font-semibold">Quality</span> standards and sustainable strategic partnerships across all continents.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mx-auto mb-3">
              The Pillars of Medinet
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] font-sans max-w-3xl">
              Our organizational culture is guided by clear, unyielding <span className="text-[#2563EB] font-semibold">Ethics</span> that dictate how we conduct business, evaluate scientific formulations, and interact with <span className="text-[#2563EB] font-semibold">Healthcare</span> practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div key={idx} className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] ${val.accent} p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.15)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left group`}>
                  <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-4 transition-all duration-300 group-hover:scale-[1.08]">
                    <ValueIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-[#0F172A] text-sm mb-2">{val.title}</h4>
                  <p className="text-xs text-[#475569] leading-[1.8]">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mx-auto mb-3">
              Guiding Our Scientific Vision
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] font-sans max-w-3xl mx-auto">
              Our steering committee brings together elite clinical minds, pharmaceutical licensing veterans, and regulatory compliance leaders with decadal experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader) => {
              let accentClass = "border-t-[#2563EB]";
              let badgeText = "MD";

              const roleLower = leader.role.toLowerCase();
              if (roleLower.includes("founder")) {
                accentClass = "border-t-[#2563EB]";
                badgeText = "MD";
              } else if (roleLower.includes("ceo") || roleLower.includes("chief")) {
                accentClass = "border-t-[#0D9488]";
                badgeText = "CEO";
              } else if (roleLower.includes("research") || roleLower.includes("r&d")) {
                accentClass = "border-t-[#38BDF8]";
                badgeText = "R&D";
              } else if (roleLower.includes("quality") || roleLower.includes("qa") || roleLower.includes("compliance")) {
                accentClass = "border-t-[#2563EB]";
                badgeText = "QA";
              }

              return (
                <div
                  key={leader.id}
                  className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] ${accentClass} rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.15)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] overflow-hidden group text-left`}
                >
                  <div className="relative aspect-square overflow-hidden bg-alt-bg shadow-[0_8px_24px_rgba(11,31,77,.08)] z-10">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[400ms] ease-[ease] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-xs text-white leading-relaxed line-clamp-3">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-semibold text-[#2563EB] uppercase tracking-[0.08em] block">
                        {leader.role}
                      </span>
                      <span className="inline-flex items-center justify-center bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-full px-[10px] py-[6px] text-[9px] font-bold tracking-wider shrink-0 leading-none">
                        {badgeText}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[#0F172A] text-sm mt-1 line-clamp-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-[#64748B] font-mono mt-1.5 leading-[1.7]">
                      {leader.qualification}
                    </p>
                    <p className="text-xs text-[#475569] leading-[1.8] mt-3 line-clamp-2 sm:hidden block">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_60%,#F1F5F9_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Corporate Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mx-auto mb-3">
              Our Path of Progress
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] font-sans max-w-3xl mx-auto">
              Review the critical milestones that defined our transition from a local marketer to a globally trusted pharmaceutical exporter.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center spine on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[linear-gradient(180deg,#DBEAFE,#60A5FA,#DBEAFE)] opacity-80 -translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const timelineIcons = [Rocket, Building2, Globe, Factory, Brain, Award];
                const timelineAccents = [
                  "border-l-[#2563EB]",
                  "border-l-[#0D9488]",
                  "border-l-[#38BDF8]",
                  "border-l-[#2563EB]",
                  "border-l-[#0D9488]",
                  "border-l-[#38BDF8]"
                ];
                const Icon = timelineIcons[idx];
                const accentClass = timelineAccents[idx];

                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 group ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Left/Right content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-l-[4px] ${accentClass} rounded-[20px] shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.15)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] p-6 text-left relative overflow-hidden`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-[40px] h-[40px] rounded-[12px] bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#2563EB]" />
                          </div>
                          <span className="inline-block text-lg font-display font-bold text-[#2563EB] font-mono">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-[#0F172A] text-base mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-[1.75]">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Center Indicator */}
                    <div className="hidden md:flex w-[10%] items-center justify-center relative z-10">
                      <div className="w-8 h-8 rounded-[12px] bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_10px_25px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] font-mono text-[10px] font-bold group-hover:bg-[linear-gradient(135deg,#38BDF8,#2563EB)] group-hover:scale-[1.08] transition-all duration-300">
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
