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
      description: <>We verify therapeutic equivalence curves on all batches, ensuring unyielding <span className="text-secondary font-semibold">Ethics</span> in every formulation.</>,
      icon: FlaskConical,
      accent: "border-t-secondary"
    },
    {
      title: "Uncompromised Quality",
      description: <>We work exclusively with <span className="text-secondary font-semibold">WHO-GMP</span> compliant facilities. Our stringent <span className="text-secondary font-semibold">Quality</span> assurance meets global standards.</>,
      icon: ShieldCheck,
      accent: "border-t-primary"
    },
    {
      title: "Patient Accessibility",
      description: <>We believe life-saving therapeutics must remain affordable to ensure continuous <span className="text-secondary font-semibold">Accessibility</span> for all.</>,
      icon: HeartHandshake,
      accent: "border-t-accent"
    },
    {
      title: "Dynamic Collaboration",
      description: <>We build mutually lucrative <span className="text-secondary font-semibold">Partnership</span> models with leading <span className="text-secondary font-semibold">Healthcare</span> distributors globally.</>,
      icon: Handshake,
      accent: "border-t-secondary"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white via-background to-alt-bg border-b border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-heading tracking-tight leading-[1.15] relative w-fit mb-4">
            About Medinet Pharmaceuticals
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent opacity-70 rounded-full"></span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-body font-sans leading-relaxed max-w-3xl">
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
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-secondary to-primary text-white font-serif text-2xl rounded-xl flex items-center justify-center shadow-md z-10">
                  &ldquo;
                </div>
                <div className="utility-card p-8">
                  <p className="text-body leading-relaxed italic text-sm">
                    &ldquo;{BRAND_INFO.ceoMessage}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={LEADERSHIP[1].image}
                      alt={LEADERSHIP[1].name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-border shadow-sm"
                    />
                    <div>
                      <h4 className="font-display font-bold text-heading text-sm">{LEADERSHIP[1].name}</h4>
                      <p className="text-xs text-muted font-mono">{LEADERSHIP[1].role}</p>
                      <p className="text-[10px] text-heading font-mono mt-0.5">{LEADERSHIP[1].qualification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Philosophy */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-mono font-medium tracking-widest text-secondary uppercase block mb-3">
                // CORPORATE PHILOSOPHY
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                <span className="text-secondary">Quality</span>, <span className="text-secondary">Ethics</span>, and Patient Efficacy
              </h2>
              <p className="mt-6 text-body leading-relaxed text-base">
                Our organizational ethos is structured entirely around the <span className="text-secondary font-semibold">safety of the end patient</span>. By maintaining a highly selective licensing pipeline, Medinet works exclusively with active pharmaceutical ingredients (APIs) validated in certified <span className="text-secondary font-semibold">bioequivalence</span> clinical studies.
              </p>
              <p className="mt-4 text-body leading-relaxed text-base">
                We believe that premium, life-restoring pharmaceuticals should not carry prohibitive costs. Through optimizing distribution channels, standardizing dossiers, and leveraging economies of scale, we succeed in making modern pharmacology reachable to patients globally.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-alt-bg/50 p-4 rounded-card border border-border/50">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-heading text-sm">Bioequivalence Certified</h4>
                    <p className="text-xs text-muted mt-1 leading-relaxed">Matching reference innovator drug PK curves.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-alt-bg/50 p-4 rounded-card border border-border/50">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-heading text-sm">WHO-GMP Standard</h4>
                    <p className="text-xs text-muted mt-1 leading-relaxed">Manufactured strictly in certified plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="utility-card p-8 border-t-[4px] border-t-secondary group">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-2xl shadow-md flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-heading text-2xl mb-4">Our Corporate Mission</h3>
              <p className="text-body leading-relaxed text-base">
                To discover, license, and market high-<span className="text-secondary font-semibold">Quality</span>, <span className="text-secondary font-semibold">Bioequivalent</span> formulations across key therapeutic areas, and distribute them efficiently to improve <span className="text-secondary font-semibold">Patient Care</span> worldwide. We exist to make advanced healthcare <span className="text-secondary font-semibold">Accessibility</span> a reality, maintaining ethical and continuous supply.
              </p>
            </div>

            {/* Vision Card */}
            <div className="utility-card p-8 border-t-[4px] border-t-accent group">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-2xl shadow-md flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-heading text-2xl mb-4">Our Long-term Vision</h3>
              <p className="text-body leading-relaxed text-base">
                To rank among the most trusted <span className="text-secondary font-semibold">Global</span> names in pharmaceutical licensing and marketing. Our <span className="text-secondary font-semibold">Vision</span> is to continuously drive <span className="text-secondary font-semibold">Innovation</span> in critical unmet segments like Oncology and CNS, maintaining zero-defect <span className="text-secondary font-semibold">Quality</span> standards and sustainable strategic partnerships across all continents.
              </p>
            </div>
          </div>

          <SectionHeader
            badge="Core Values"
            title="The Pillars of Medinet"
            description="Our organizational culture is guided by clear, unyielding Ethics that dictate how we conduct business, evaluate scientific formulations, and interact with Healthcare practitioners."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div key={idx} className={`utility-card p-6 border-t-[4px] ${val.accent} group`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-xl shadow-sm flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-105">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-heading text-lg mb-3">{val.title}</h4>
                  <p className="text-sm text-body leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Executive Leadership"
            title="Guiding Our Scientific Vision"
            description="Our steering committee brings together elite clinical minds, pharmaceutical licensing veterans, and regulatory compliance leaders with decadal experience."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {LEADERSHIP.map((leader) => {
              let accentClass = "border-t-secondary";
              let badgeText = "MD";

              const roleLower = leader.role.toLowerCase();
              if (roleLower.includes("founder")) {
                accentClass = "border-t-secondary";
                badgeText = "MD";
              } else if (roleLower.includes("ceo") || roleLower.includes("chief")) {
                accentClass = "border-t-primary";
                badgeText = "CEO";
              } else if (roleLower.includes("research") || roleLower.includes("r&d")) {
                accentClass = "border-t-accent";
                badgeText = "R&D";
              } else if (roleLower.includes("quality") || roleLower.includes("qa") || roleLower.includes("compliance")) {
                accentClass = "border-t-secondary";
                badgeText = "QA";
              }

              return (
                <div
                  key={leader.id}
                  className={`utility-card border-t-[4px] ${accentClass} group overflow-hidden`}
                >
                  <div className="relative aspect-square overflow-hidden bg-alt-bg z-10 border-b border-border/30">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-xs text-white leading-relaxed line-clamp-4">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">
                        {leader.role}
                      </span>
                      <span className="utility-badge-blue">
                        {badgeText}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-heading text-lg mt-1 line-clamp-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-muted font-mono mt-1.5 leading-relaxed">
                      {leader.qualification}
                    </p>
                    <p className="text-sm text-body leading-relaxed mt-4 line-clamp-3 sm:hidden block">
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
      <section className="py-20 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Corporate Timeline"
            title="Our Path of Progress"
            description="Review the critical milestones that defined our transition from a local marketer to a globally trusted pharmaceutical exporter."
            centered
          />

          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Center spine on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-secondary/30 to-border opacity-80 -translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const timelineIcons = [Rocket, Building2, Globe, Factory, Brain, Award];
                const timelineAccents = [
                  "border-l-secondary",
                  "border-l-primary",
                  "border-l-accent",
                  "border-l-secondary",
                  "border-l-primary",
                  "border-l-accent"
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
                      <div className={`utility-card border-l-[4px] ${accentClass} p-8 group-hover:-translate-y-1`}>
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                          <span className="inline-block text-xl font-display font-bold text-secondary font-mono">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-heading text-lg mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-body leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Center Indicator */}
                    <div className="hidden md:flex w-[10%] items-center justify-center relative z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary shadow-md flex items-center justify-center text-white font-mono text-sm font-bold group-hover:from-accent group-hover:to-secondary group-hover:scale-110 transition-all duration-300">
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

