/**
 * @license
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white via-background to-alt-bg border-b border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
        <motion.div variants={fadeUp} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
          <span className="utility-badge-blue mb-4">
            <span className="utility-dot"></span>
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-heading tracking-tight leading-[1.15] relative w-fit mb-4 mx-auto lg:mx-0">
            About Medinet Pharmaceuticals
            <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-70 rounded-full"></motion.span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-body font-sans leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Established with a deep commitment to patient care, Medinet Pharmaceutical Marketing Company serves as a vital bridge between complex formulation chemistry and accessible healthcare delivery.
          </p>
        </motion.div>
      </section>

      {/* Corporate Philosophy & CEO Message */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Portrait & Sign-off */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
              <div className="relative">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} viewport={{ once: true }} className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-secondary to-primary text-white font-serif text-2xl rounded-xl flex items-center justify-center shadow-md z-10">
                  &ldquo;
                </motion.div>
                <div className="utility-card p-8 hover-lift">
                  <p className="text-body leading-relaxed italic text-sm">
                    &ldquo;{BRAND_INFO.ceoMessage}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={LEADERSHIP[1].image}
                        alt={LEADERSHIP[1].name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover border border-border shadow-sm"
                      />
                      <div>
                        <h4 className="font-display font-bold text-heading text-sm">{LEADERSHIP[1].name}</h4>
                        <p className="text-[11px] font-mono text-secondary uppercase tracking-widest">{LEADERSHIP[1].role}</p>
                        <p className="text-[10px] text-muted font-mono mt-0.5">{LEADERSHIP[1].qualification}</p>
                      </div>
                    </div>
                    {/* Signature Area */}
                    <div className="text-right">
                      <div className="font-serif italic text-xl text-slate-400 opacity-80 -rotate-3 select-none">
                        J. Doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Corporate Philosophy */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-xs font-mono font-medium tracking-widest text-secondary uppercase block mb-3">
                // CORPORATE PHILOSOPHY
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Our Core Philosophy
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm max-w-2xl">
                We believe that premium, life-restoring pharmaceuticals should be built upon unyielding pillars of ethics and care.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl lg:max-w-none text-left">
                {[
                  { title: "Quality", desc: "Uncompromising standards in every formulation we produce.", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
                  { title: "Trust", desc: "Building long-term reliability with our global partners.", icon: HeartHandshake, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { title: "Affordability", desc: "Accessible and equitable pricing for healthcare worldwide.", icon: Handshake, color: "text-purple-600", bg: "bg-purple-50" },
                  { title: "Compassion", desc: "A patient-first approach embedded in all our decisions.", icon: Heart, color: "text-rose-600", bg: "bg-rose-50" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <motion.div variants={fadeUp} className="utility-card p-8 border-t-[4px] border-t-secondary group hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-2xl shadow-md flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-heading text-2xl mb-4">Our Corporate Mission</h3>
              <p className="text-body leading-relaxed text-base">
                To discover, license, and market high-<span className="text-secondary font-semibold">Quality</span>, <span className="text-secondary font-semibold">Bioequivalent</span> formulations across key therapeutic areas, and distribute them efficiently to improve <span className="text-secondary font-semibold">Patient Care</span> worldwide. We exist to make advanced healthcare <span className="text-secondary font-semibold">Accessibility</span> a reality, maintaining ethical and continuous supply.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeUp} className="utility-card p-8 border-t-[4px] border-t-accent group hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-2xl shadow-md flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-heading text-2xl mb-4">Our Long-term Vision</h3>
              <p className="text-body leading-relaxed text-base">
                To rank among the most trusted <span className="text-secondary font-semibold">Global</span> names in pharmaceutical licensing and marketing. Our <span className="text-secondary font-semibold">Vision</span> is to continuously drive <span className="text-secondary font-semibold">Innovation</span> in critical unmet segments like Oncology and CNS, maintaining zero-defect <span className="text-secondary font-semibold">Quality</span> standards and sustainable strategic partnerships across all continents.
              </p>
            </motion.div>
          </motion.div>

          <SectionHeader
            badge="Core Values"
            title="The Pillars of Medinet"
            description="Our organizational culture is guided by clear, unyielding Ethics that dictate how we conduct business, evaluate scientific formulations, and interact with Healthcare practitioners."
            centered
          />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <motion.div variants={fadeUp} key={idx} className={`utility-card p-6 border-t-[4px] ${val.accent} group hover-lift`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-xl shadow-sm flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-heading text-lg mb-3">{val.title}</h4>
                  <p className="text-sm text-body leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white border-b border-border relative overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
          {/* Subtle Grid / DNA Line Hint */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* Floating Blobs for Depth */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          {/* Low Opacity Floating Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-[0.03]"></div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <SectionHeader
            badge="Executive Leadership"
            title="Guiding Our Scientific Vision"
            description="Our steering committee brings together elite clinical minds, pharmaceutical licensing veterans, and regulatory compliance leaders with decadal experience."
            centered
          />

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {LEADERSHIP.map((leader) => {
              let accentGradient = "from-secondary to-primary";
              let badgeText = "MD";

              const roleLower = leader.role.toLowerCase();
              if (roleLower.includes("founder")) {
                accentGradient = "from-secondary to-primary";
                badgeText = "MD";
              } else if (roleLower.includes("ceo") || roleLower.includes("chief")) {
                accentGradient = "from-primary to-blue-600";
                badgeText = "CEO";
              } else if (roleLower.includes("research") || roleLower.includes("r&d")) {
                accentGradient = "from-accent to-secondary";
                badgeText = "R&D";
              } else if (roleLower.includes("quality") || roleLower.includes("qa") || roleLower.includes("compliance")) {
                accentGradient = "from-emerald-500 to-secondary";
                badgeText = "QA";
              }

              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  key={leader.id}
                  className="group relative bg-white rounded-[24px] border border-border/60 p-6 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(5,150,105,0.12)] hover:-translate-y-2 hover:scale-[1.02] hover:border-secondary/30 transition-all duration-500 ease-out cursor-pointer"
                >
                  {/* Subtle top accent border glow on hover */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${accentGradient} rounded-b-full opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-500 ease-out`}></div>
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 mx-auto mb-6 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-border/50 to-border/10 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_30px_rgba(5,150,105,0.2)] group-hover:border-secondary/10 transition-all duration-500">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    {/* Floating badge effect */}
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${accentGradient} text-white text-[10px] font-bold tracking-[0.1em] shadow-md group-hover:shadow-[0_0_15px_rgba(5,150,105,0.4)] transition-all duration-300 transform group-hover:-translate-y-1`}>
                      {badgeText}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center flex-grow flex flex-col justify-start">
                    <span className="text-[11px] font-mono font-bold text-secondary uppercase tracking-[0.15em] block mb-2 opacity-90">
                      {leader.role}
                    </span>
                    <h3 className="font-display font-extrabold text-heading text-xl mb-1.5 text-slate-900 group-hover:text-secondary transition-colors duration-300 line-clamp-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
                      {leader.qualification}
                    </p>
                    
                    {/* Bio */}
                    <div className="mt-auto pt-4 border-t border-border/40 overflow-hidden">
                      <p className="text-[13px] text-body leading-relaxed line-clamp-3 transition-all duration-300">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
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

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
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
                  <motion.div
                    variants={fadeUp}
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 group ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Left/Right content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className={`utility-card border-l-[4px] ${accentClass} p-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(5,150,105,0.15)] transition-all duration-300`}>
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-secondary group-hover:rotate-12 transition-transform duration-300" />
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
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary shadow-[0_0_15px_rgba(5,150,105,0.4)] flex items-center justify-center text-white font-mono text-sm font-bold group-hover:from-accent group-hover:to-secondary group-hover:scale-125 transition-all duration-500 border-4 border-background">
                        {idx + 1}
                      </div>
                    </div>

                    {/* Empty placeholder on opposite side */}
                    <div className="hidden md:block w-[45%]"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

