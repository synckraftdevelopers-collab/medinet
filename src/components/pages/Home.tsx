/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { PRODUCTS, THERAPEUTIC_CATEGORIES, STATS, NEWS_ITEMS, BRAND_INFO } from "../../data";
import SectionHeader from "../SectionHeader";
import {
  Quote,
  CircleUserRound,
  Newspaper,
  Presentation,
  HeartPulse,
  ShieldPlus,
  FlaskConical,
  Handshake,
  BadgeCheck,
  ArrowRight,
  Shield,
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
  CheckCircle,
  FileText,
  Users,
  Award,
  Clock,
  ArrowUpRight
} from "lucide-react";

interface HomeProps {
  navigate: (route: string, queryParams?: Record<string, string>) => void;
}

const iconMap: Record<string, any> = {
  HeartPulse,
  ShieldPlus,
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
};

export default function Home({ navigate }: HomeProps) {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const latestNews = NEWS_ITEMS.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white border-b border-border overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Clean background overlay to hide grid for readability */}
                <div className="absolute -inset-8 sm:-inset-16 bg-[rgba(255,255,255,0.96)] blur-2xl md:blur-3xl max-w-[760px] rounded-[32px] -z-10 pointer-events-none"></div>
                <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] -z-10 pointer-events-none rounded-[32px]"></div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-6 shadow-none hover:bg-[#DBEAFE] transition-colors duration-300 ease-in-out">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Enterprise Pharmaceutical Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#0B1F4D] tracking-tight leading-[1.1] mb-6">
                  Bridging <span className="text-[#2563EB]">Science</span> and <br />
                  <span className="text-[#2563EB] relative inline-block">
                    Patient Care
                    <span className="absolute -bottom-1.5 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#2563EB,#0D9488)]"></span>
                  </span> <span className="text-[#2563EB]">Globally</span>
                </h1>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-8">
                  Medinet Pharmaceutical Marketing Company drives the global commercialization of bioequivalent, advanced therapeutics, delivering trust to doctors and life-saving remedies to millions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate("products")}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white font-mono text-xs font-semibold rounded-[14px] border-none transition-all duration-300 ease-[ease] cursor-pointer active:scale-98 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] shadow-[0_12px_30px_rgba(37,99,235,.22)] hover:bg-[linear-gradient(135deg,#1D4ED8_0%,#0B1F4D_100%)] hover:shadow-[0_18px_40px_rgba(37,99,235,.3)] hover:-translate-y-[2px] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.15)] group/btn1"
                  >
                    EXPLORE DIRECTORY
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[ease] group-hover/btn1:translate-x-[4px]" />
                  </button>
                  <button
                    onClick={() => navigate("business-partners")}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-all duration-300 ease-[ease] active:scale-98 cursor-pointer rounded-[14px] bg-[#FFFFFF] text-[#0B1F4D] border border-[#CBD5E1] shadow-[0_8px_20px_rgba(0,0,0,.05)] hover:bg-[#EFF6FF] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_12px_24px_rgba(37,99,235,.12)] hover:-translate-y-[2px] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.1)]"
                  >
                    B2B PARTNERSHIPS
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual Card / Graphic */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative bg-[#FFFFFF] rounded-[24px] border border-[#E2E8F0] border-t-4 border-t-[#2563EB] p-8 shadow-[0_24px_48px_rgba(11,31,77,.08)] hover:shadow-[0_30px_60px_rgba(11,31,77,.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded flex items-center justify-center text-white shrink-0 shadow-[0_12px_28px_rgba(37,99,235,.25)] p-2.5">
                    <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.5L4 6V11C4 16.5 7.5 21 12 23C16.5 21 20 16.5 20 11V6L12 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12.5L11 15.5L16 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5V8M10.5 6.5H13.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="19.5" r="1.5" fill="#0D9488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0B1F4D] text-base">Guaranteed Efficacy</h3>
                    <p className="text-[11px] text-[#2563EB] font-mono">WHO-GMP & FDA Audit Compliance</p>
                  </div>
                </div>

                <blockquote className="text-sm italic text-[#475569] bg-[#F8FAFC] border-l-4 border-l-[#0D9488] rounded-[12px] p-[20px] leading-relaxed mb-6">
                  &ldquo;Every single batch of Medinet formulations matches the rigorous bioequivalence curves of global innovator molecules.&rdquo;
                </blockquote>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-2.5 group/item cursor-default">
                    <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 group-hover/item:text-[#0D9488] transition-colors duration-300" />
                    <span className="text-xs font-semibold text-[#334155] group-hover/item:text-[#0B1F4D] transition-colors duration-300">100% Bioequivalent Formulations</span>
                  </div>
                  <div className="flex items-center gap-2.5 group/item cursor-default">
                    <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 group-hover/item:text-[#0D9488] transition-colors duration-300" />
                    <span className="text-xs font-semibold text-[#334155] group-hover/item:text-[#0B1F4D] transition-colors duration-300">Double-Inspected Batching Quality Control</span>
                  </div>
                  <div className="flex items-center gap-2.5 group/item cursor-default">
                    <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 group-hover/item:text-[#0D9488] transition-colors duration-300" />
                    <span className="text-xs font-semibold text-[#334155] group-hover/item:text-[#0B1F4D] transition-colors duration-300">Rigorous Pharmacovigilance Monitoring</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="group/stat cursor-default">
                    <span className="block text-xl font-display font-bold text-[#0B1F4D] group-hover/stat:text-[#2563EB] group-hover/stat:scale-[1.05] transition-all duration-300 transform origin-left">10M+</span>
                    <span className="text-[9px] text-[#64748B] font-mono uppercase tracking-wider">Patients Served</span>
                  </div>
                  <div className="group/stat cursor-default">
                    <span className="block text-xl font-display font-bold text-[#0B1F4D] group-hover/stat:text-[#2563EB] group-hover/stat:scale-[1.05] transition-all duration-300 transform origin-left">18+</span>
                    <span className="text-[9px] text-[#64748B] font-mono uppercase tracking-wider">Global Nations</span>
                  </div>
                  <div className="group/stat cursor-default">
                    <span className="block text-xl font-display font-bold text-[#0B1F4D] group-hover/stat:text-[#2563EB] group-hover/stat:scale-[1.05] transition-all duration-300 transform origin-left">100%</span>
                    <span className="text-[9px] text-[#64748B] font-mono uppercase tracking-wider">Audit Pass</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative z-10">
              <div className="absolute top-[-20%] -left-10 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.03)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
              <span className="inline-flex items-center px-3 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-mono font-medium tracking-widest uppercase mb-4">
                <span className="text-[#0D9488] mr-1.5">//</span> <span className="text-[#2563EB]">CORPORATE PROFILE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight relative pl-6">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[80px] rounded-full bg-[linear-gradient(to_bottom,#2563EB,#0D9488)]"></span>
                About <span className="text-[#2563EB]">Medinet</span> <span className="text-[#2563EB]">Pharmaceutical</span> Marketing
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed text-sm">
                Established in {BRAND_INFO.established}, {BRAND_INFO.name} has built a highly reputable position in global pharmaceutical marketing by offering premium, affordable, and bioequivalent healthcare products.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                We manage therapeutic formulation delivery across intensive clinical segments including Cardiology, Neurology, Gastroenterology, Dermatology, and Respiratory sciences. By bridging manufacturing excellence with robust commercial execution, we ensure quality medicines are always within patient reach.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => navigate("about")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase bg-transparent text-[#0B1F4D] hover:text-[#2563EB] transition-all duration-300 ease-[ease] relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-[ease] after:origin-left hover:scale-[1.02] transform origin-left focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,.15)] group/cta"
                >
                  READ CEO MESSAGE & JOURNEY
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D] group-hover/cta:text-[#0D9488] transition-all duration-300 ease-[ease] group-hover/cta:translate-x-[6px]" />
                </button>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] transition-all duration-300 text-left hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)]">
                <div className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] flex items-center justify-center text-white mb-4 shadow-[0_10px_25px_rgba(37,99,235,.18)]">
                  <FlaskConical className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#0B1F4D] text-sm mb-2">Scientific Integrity</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  We base all formulations on validated clinical trials, ensuring comparative bioequivalence matches original innovator drug standards.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] transition-all duration-300 text-left hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)]">
                <div className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] flex items-center justify-center text-white mb-4 shadow-[0_10px_25px_rgba(37,99,235,.18)]">
                  <Handshake className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#0B1F4D] text-sm mb-2">Ethical Partnerships</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Our manufacturing partners run state-of-the-art facilities compliant with WHO-GMP, USFDA, or EU-GMP specifications.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] transition-all duration-300 text-left hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)]">
                <div className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] flex items-center justify-center text-white mb-4 shadow-[0_10px_25px_rgba(37,99,235,.18)]">
                  <BadgeCheck className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#0B1F4D] text-sm mb-2">Quality Assurance</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Batch traceability is maintained from raw API synthesis up to final dispatch, keeping product consistency uncompromised.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] transition-all duration-300 text-left hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)]">
                <div className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] flex items-center justify-center text-white mb-4 shadow-[0_10px_25px_rgba(37,99,235,.18)]">
                  <Activity className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#0B1F4D] text-sm mb-2">Pharmacovigilance</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  We proactively maintain safety logs and clinical feedback mechanisms to respond immediately to any drug safety queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board Section */}
      <section className="bg-primary py-12 text-white text-center relative overflow-hidden border-b border-primary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="block text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-[10px] font-mono tracking-wider text-muted uppercase max-w-[140px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Segments Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-3xl mb-12 mx-auto text-center flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_60%)] -z-10 pointer-events-none rounded-full"></div>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-mono font-medium tracking-wider uppercase mb-5 hover:bg-[#DBEAFE] transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
              Therapeutic Segments
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight flex flex-col items-center">
              <span>Comprehensive <span className="text-[#2563EB]">Healthcare</span> <span className="text-[#2563EB]">Formulations</span></span>
              <span className="mt-5 block w-[180px] h-[4px] rounded-full bg-[linear-gradient(90deg,#2563EB,#0D9488)]"></span>
            </h2>
            
            <p className="mt-5 text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THERAPEUTIC_CATEGORIES.map((cat) => {
              const IconComp = iconMap[cat.iconName] || Activity;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate("products", { category: cat.id })}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left cursor-pointer group flex flex-col justify-between hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.18)]"
                >
                  <div>
                    <div className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] text-white flex items-center justify-center mb-4 shadow-[0_12px_28px_rgba(37,99,235,.2)]">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-display font-bold text-[#0B1F4D] text-base">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#475569] leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-semibold text-[#2563EB] group-hover:text-[#0D9488] transition-colors duration-300">
                    <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">VIEW FORMULATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:text-[#0D9488] group-hover:translate-x-[6px] transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-alt-bg border border-border text-body text-[10px] font-mono font-medium tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Product Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-heading tracking-tight leading-tight">
                Featured Formulations
              </h2>
            </div>
            <button
              onClick={() => navigate("products")}
              className="mt-4 sm:mt-0 px-4 py-2 bg-[#FFFFFF] border border-[#CBD5E1] text-[#0B1F4D] rounded-[14px] shadow-[0_8px_20px_rgba(11,31,77,.06)] font-mono text-xs font-semibold transition-all duration-300 ease-[ease] flex items-center gap-1.5 group/browse hover:bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_15px_35px_rgba(37,99,235,.18)] hover:-translate-y-[2px] active:!bg-none active:!bg-[#DBEAFE] active:!text-[#0B1F4D] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.15)]"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] transition-all duration-300 ease-[ease] group-hover/browse:text-[#0D9488] group-hover/browse:translate-x-[6px]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FFFFFF] border border-[#CBD5E1] border-t-4 border-t-[#2563EB] p-6 rounded-[24px] shadow-[0_20px_50px_rgba(11,31,77,.10)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between group relative hover:border-[#2563EB] hover:border-t-[#0D9488] hover:-translate-y-[6px] hover:shadow-[0_30px_70px_rgba(37,99,235,.18)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono bg-[#DBEAFE] text-[#1D4ED8] border border-[#93C5FD] px-2 py-0.5 rounded-[10px] font-semibold uppercase">
                      {product.dosageForm}
                    </span>
                    <span className="text-xs font-mono text-[#2563EB] font-semibold">{product.strength}</span>
                  </div>

                  <h3 className="font-display font-bold text-[#081F3A] text-lg">
                    {product.name}
                  </h3>
                  <div className="text-xs text-[#2563EB] font-mono italic mt-1 line-clamp-1 opacity-100">
                    {product.genericName}
                  </div>
                  <p className="mt-3.5 text-sm text-[#334155] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <span className="block text-[10px] font-semibold text-[#2563EB] font-mono uppercase tracking-wider">
                      Key Indications:
                    </span>
                    <ul className="space-y-1 text-xs text-[#334155]">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-1">
                          <span className="text-[#0D9488] shrink-0">•</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between">
                  <span className="text-xs font-mono"><span className="text-[#64748B]">Pack:</span> <span className="text-[#334155]">{product.packaging}</span></span>
                  <button
                    onClick={() => navigate("products", { id: product.id })}
                    className="text-[11px] font-mono font-semibold text-[#0B1F4D] hover:text-[#2563EB] flex items-center gap-1 uppercase group/btn transition-colors duration-300 relative after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  >
                    DETAILS <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D] group-hover/btn:text-[#0D9488] group-hover/btn:translate-x-[6px] transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Endorsement Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-mono font-medium tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
              Medical Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#081F3A] tracking-tight leading-tight flex flex-col items-center">
              <span>Trusted by <span className="text-[#2563EB]">Healthcare</span> <span className="text-[#2563EB]">Professionals</span></span>
            </h2>
            <p className="mt-5 text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between hover:border-[#2563EB] hover:shadow-[0_28px_60px_rgba(37,99,235,.16)] hover:-translate-y-[5px]">
              <Quote className="w-8 h-8 text-[#2563EB] opacity-[0.15] mb-3" />
              <p className="text-xs text-[#475569] leading-relaxed italic mb-6">
                We have prescription records for over 2,500 cardiovascular patients on Medivastin 20. The comparative clinical response has been absolutely identical to innovator lipid regulators with excellent compliance.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] text-white flex items-center justify-center shrink-0">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#081F3A] text-sm">Dr. Ketan Mehta, MD</h4>
                  <p className="text-[11px] text-[#2563EB] font-mono font-medium">Consulting Cardiologist, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between hover:border-[#2563EB] hover:shadow-[0_28px_60px_rgba(37,99,235,.16)] hover:-translate-y-[5px]">
              <Quote className="w-8 h-8 text-[#2563EB] opacity-[0.15] mb-3" />
              <p className="text-xs text-[#475569] leading-relaxed italic mb-6">
                As a regional distributor in South India, logistical reliability and uncompromised batch records are critical. Medinet provides complete CTD dossiers and maintains perfect batch stability indices.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] text-white flex items-center justify-center shrink-0">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#081F3A] text-sm">Ramanathan Iyer</h4>
                  <p className="text-[11px] text-[#2563EB] font-mono font-medium">Chief Executive, South Dist. Hub</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between hover:border-[#2563EB] hover:shadow-[0_28px_60px_rgba(37,99,235,.16)] hover:-translate-y-[5px]">
              <Quote className="w-8 h-8 text-[#2563EB] opacity-[0.15] mb-3" />
              <p className="text-xs text-[#475569] leading-relaxed italic mb-6">
                Formulating products with Gabax NT has given our neurological clinic a stellar therapeutic weapon for diabetic neuropathic pain management. Patient compliance rates are extremely high.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] text-white flex items-center justify-center shrink-0">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#081F3A] text-sm">Dr. Sarah Al-Dossari</h4>
                  <p className="text-[11px] text-[#2563EB] font-mono font-medium">Head of Neurology Unit, Clinical Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-alt-bg border border-border text-body text-[10px] font-mono font-medium tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Corporate Media
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-heading tracking-tight leading-tight">
                Latest News & Events
              </h2>
            </div>
            <button
              onClick={() => navigate("news-events")}
              className="mt-4 sm:mt-0 px-4 py-2 bg-[#FFFFFF] border border-[#CBD5E1] text-[#0B1F4D] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] flex items-center gap-1.5 group/press hover:bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_12px_28px_rgba(37,99,235,.18)]"
            >
              VIEW ALL PRESS RELEASES <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover/press:text-[#0D9488] transition-colors duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => {
              let badgeBg = "bg-[#DBEAFE]";
              let badgeText = "text-[#1D4ED8]";
              let BadgeIcon = Presentation;
              
              if (news.category === "News") {
                badgeBg = "bg-[#EFF6FF]";
                badgeText = "text-[#2563EB]";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-[#DCFCE7]";
                badgeText = "text-[#16A34A]";
                BadgeIcon = HeartHandshake;
              }

              return (
              <div
                key={news.id}
                className="bg-[#FFFFFF] border border-[#CBD5E1] border-t-4 border-t-transparent rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between overflow-hidden hover:border-[#2563EB] hover:border-t-[#2563EB] hover:shadow-[0_30px_70px_rgba(37,99,235,.18)] hover:-translate-y-[6px] group/news"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider ${badgeBg} ${badgeText} px-2.5 py-1 rounded-[10px] font-semibold`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {news.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">{news.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-[#081F3A] text-lg group-hover/news:text-[#2563EB] transition-colors line-clamp-2 mt-2">
                    {news.title}
                  </h3>
                  <p className="mt-3.5 text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="px-6 py-4 border-t border-[#E2E8F0] mt-auto flex justify-between items-center bg-[#F8FAFC]">
                  <span className="text-[11px] text-[#2563EB] font-mono font-semibold group-hover/news:text-[#0D9488] transition-colors">Read complete release</span>
                  <button
                    onClick={() => navigate("news-events", { id: news.id })}
                    className="flex items-center justify-center transition-transform duration-300 ease-[ease]"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#2563EB] group-hover/news:text-[#0D9488] group-hover/news:translate-x-[6px] transition-all duration-300" />
                  </button>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>


      {/* Global B2B Call To Action Section */}
      <section className="py-20 bg-[linear-gradient(135deg,#0B1F4D_0%,#12326B_50%,#1B4D96_100%)] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-[rgba(59,130,246,0.12)] blur-[180px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.18)] text-[#93C5FD] text-[10px] font-mono font-medium tracking-wider uppercase mb-6 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
            PARTNER WITH MEDINET
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#FFFFFF] tracking-tight leading-tight relative z-10">
            Scale Your <span className="text-[#93C5FD]">Pharmaceutical</span> Distribution <span className="text-[#93C5FD]">Globally</span>
          </h2>
          <p className="mt-6 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl mx-auto relative z-10">
            Leverage our premium bioequivalent product portfolio, dedicated regulatory support, and flexible third-party manufacturing arrangements to boost your market dominance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <button
              onClick={() => navigate("business-partners")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FFFFFF] hover:bg-[#DBEAFE] text-[#0B1F4D] hover:text-[#2563EB] hover:shadow-[0_15px_35px_rgba(255,255,255,.18)] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] hover:-translate-y-[2px] active:scale-98 group/primary"
            >
              PARTNER INQUIRY FORM <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover/primary:text-[#0D9488] transition-colors duration-300" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.22)] hover:border-[#38BDF8] text-[#FFFFFF] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] hover:-translate-y-[2px] active:scale-98"
            >
              CONTACT OFFICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
