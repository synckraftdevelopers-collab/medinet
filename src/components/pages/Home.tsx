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
  ArrowUpRight,
  Pill,
  Globe,
  ShieldCheck
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
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-white to-background border-b border-border overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>

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
                <div className="absolute -inset-8 sm:-inset-16 bg-white/90 blur-2xl md:blur-3xl max-w-[760px] rounded-[32px] -z-10 pointer-events-none"></div>
                
                <span className="utility-badge-blue mb-6">
                  <span className="utility-dot"></span>
                  Enterprise Pharmaceutical Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-heading tracking-tight leading-[1.1] mb-6">
                  Bridging <span className="text-secondary">Science</span> and <br />
                  <span className="text-secondary relative inline-block">
                    Patient Care
                    <span className="absolute -bottom-1.5 left-0 w-full h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent"></span>
                  </span> <span className="text-secondary">Globally</span>
                </h1>
                <p className="text-base sm:text-lg text-body leading-relaxed max-w-xl mb-8">
                  Medinet Pharmaceutical Marketing Company drives the global commercialization of bioequivalent, advanced therapeutics, delivering trust to doctors and life-saving remedies to millions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate("products")}
                    className="utility-button-primary group/btn1 px-6 py-3"
                  >
                    EXPLORE DIRECTORY
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn1:translate-x-1" />
                  </button>
                  <button
                    onClick={() => navigate("business-partners")}
                    className="utility-button-secondary px-6 py-3"
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
                className="utility-card border-t-[4px] border-t-secondary p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-md p-2.5">
                    <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.5L4 6V11C4 16.5 7.5 21 12 23C16.5 21 20 16.5 20 11V6L12 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12.5L11 15.5L16 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5V8M10.5 6.5H13.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="19.5" r="1.5" fill="#0D9488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-heading text-lg">Guaranteed Efficacy</h3>
                    <p className="text-xs text-secondary font-mono">WHO-GMP & FDA Audit Compliance</p>
                  </div>
                </div>

                <blockquote className="text-sm italic text-body bg-alt-bg border-l-4 border-l-accent rounded-xl p-5 leading-relaxed mb-6">
                  &ldquo;Every single batch of Medinet formulations matches the rigorous bioequivalence curves of global innovator molecules.&rdquo;
                </blockquote>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 group/item">
                    <CheckCircle className="w-4.5 h-4.5 text-success shrink-0 group-hover/item:text-accent transition-colors duration-300" />
                    <span className="text-sm font-semibold text-heading">100% Bioequivalent Formulations</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <CheckCircle className="w-4.5 h-4.5 text-success shrink-0 group-hover/item:text-accent transition-colors duration-300" />
                    <span className="text-sm font-semibold text-heading">Double-Inspected Quality Control</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <CheckCircle className="w-4.5 h-4.5 text-success shrink-0 group-hover/item:text-accent transition-colors duration-300" />
                    <span className="text-sm font-semibold text-heading">Rigorous Pharmacovigilance Monitoring</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div className="group/stat">
                    <span className="block text-2xl font-display font-bold text-heading group-hover/stat:text-secondary group-hover/stat:scale-105 transition-all origin-left">10M+</span>
                    <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Patients Served</span>
                  </div>
                  <div className="group/stat">
                    <span className="block text-2xl font-display font-bold text-heading group-hover/stat:text-secondary group-hover/stat:scale-105 transition-all origin-left">18+</span>
                    <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Global Nations</span>
                  </div>
                  <div className="group/stat">
                    <span className="block text-2xl font-display font-bold text-heading group-hover/stat:text-secondary group-hover/stat:scale-105 transition-all origin-left">100%</span>
                    <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Audit Pass</span>
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
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] relative">
                About <span className="text-secondary">Medinet</span> <br/>Pharmaceutical Marketing
              </h2>
              <p className="mt-6 text-body leading-relaxed text-base">
                Established in {BRAND_INFO.established}, {BRAND_INFO.name} has built a highly reputable position in global pharmaceutical marketing by offering premium, affordable, and bioequivalent healthcare products.
              </p>
              <p className="mt-4 text-body leading-relaxed text-base">
                We manage therapeutic formulation delivery across intensive clinical segments including Cardiology, Neurology, Gastroenterology, Dermatology, and Respiratory sciences. By bridging manufacturing excellence with robust commercial execution, we ensure quality medicines are always within patient reach.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => navigate("about")}
                  className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase text-secondary hover:text-accent transition-colors group/cta"
                >
                  READ CEO MESSAGE & JOURNEY
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="utility-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-5 shadow-sm">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-heading text-base mb-2">Scientific Integrity</h3>
                <p className="text-sm text-body leading-relaxed">
                  We base all formulations on validated clinical trials, ensuring comparative bioequivalence matches original innovator drug standards.
                </p>
              </div>

              <div className="utility-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-5 shadow-sm">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-heading text-base mb-2">Ethical Partnerships</h3>
                <p className="text-sm text-body leading-relaxed">
                  Our manufacturing partners run state-of-the-art facilities compliant with WHO-GMP, USFDA, or EU-GMP specifications.
                </p>
              </div>

              <div className="utility-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-5 shadow-sm">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-heading text-base mb-2">Quality Assurance</h3>
                <p className="text-sm text-body leading-relaxed">
                  Batch traceability is maintained from raw API synthesis up to final dispatch, keeping product consistency uncompromised.
                </p>
              </div>

              <div className="utility-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-5 shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-heading text-base mb-2">Pharmacovigilance</h3>
                <p className="text-sm text-body leading-relaxed">
                  We proactively maintain safety logs and clinical feedback mechanisms to respond immediately to any drug safety queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board Section */}
      <section className="bg-[linear-gradient(135deg,#0B1F4D_0%,#163A78_45%,#1E4FA8_100%)] py-16 text-center relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.08),transparent_70%)] pointer-events-none z-0"></div>
        {/* Subtle glowing line bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#38BDF8,transparent)] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {STATS.map((stat, idx) => {
              const Icon = idx === 0 ? Award : idx === 1 ? Pill : idx === 2 ? Globe : idx === 3 ? Users : idx === 4 ? ShieldCheck : HeartHandshake;
              return (
                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] backdrop-blur-[8px] rounded-[20px] hover:-translate-y-[6px] hover:bg-[rgba(255,255,255,.05)] hover:border-[rgba(56,189,248,.35)] hover:shadow-[0_20px_50px_rgba(11,31,77,.30)] transition-all duration-[300ms] group relative cursor-default">
                  
                  {/* Vertical dividers */}
                  {idx !== 0 && <div className="hidden lg:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(56,189,248,.20)]"></div>}
                  {(idx === 1 || idx === 3 || idx === 5) && <div className="lg:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(56,189,248,.20)]"></div>}
                  {(idx === 2 || idx === 5) && <div className="hidden md:block lg:hidden absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-[rgba(56,189,248,.20)]"></div>}

                  <div className="w-8 h-8 rounded-[14px] bg-[rgba(255,255,255,.08)] flex items-center justify-center mb-4 transition-transform duration-[300ms] group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-fade-in">
                    <Icon className="w-4 h-4 text-[#38BDF8]" />
                  </div>

                  <span className="block text-3xl sm:text-4xl font-display font-[800] text-[#FFFFFF] tracking-tight drop-shadow-[0_0_18px_rgba(56,189,248,0.18)] transition-all duration-[300ms] animate-fade-in group-hover:drop-shadow-[0_0_24px_rgba(56,189,248,0.4)]">
                    {stat.value.replace('M+', '').replace('%', '').replace('+', '')}
                    {stat.value.includes('M+') ? (
                      <span className="text-[#38BDF8]">M+</span>
                    ) : stat.value.includes('+') ? (
                      <span className="text-[#38BDF8]">+</span>
                    ) : stat.value.includes('%') ? (
                      <span className="text-[#38BDF8]">%</span>
                    ) : null}
                  </span>
                  
                  <span className="mt-3 text-[10px] font-mono tracking-[3px] font-[600] text-[#BFDBFE] uppercase leading-relaxed text-center w-full block break-words max-w-[140px]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapeutic Segments Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Therapeutic Segments"
            title="Comprehensive Healthcare Formulations"
            description="We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {THERAPEUTIC_CATEGORIES.map((cat) => {
              const IconComp = iconMap[cat.iconName] || Activity;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate("products", { category: cat.id })}
                  className="utility-card p-6 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl text-white flex items-center justify-center mb-5 shadow-sm group-hover:from-accent group-hover:to-secondary transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-heading text-lg mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-body leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">VIEW FORMULATIONS</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-alt-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                Product Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Featured Formulations
              </h2>
            </div>
            <button
              onClick={() => navigate("products")}
              className="mt-6 sm:mt-0 px-5 py-2.5 bg-white border border-border text-heading rounded-xl shadow-sm font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 group/browse hover:border-secondary hover:text-secondary hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-4 h-4 text-secondary transition-transform duration-300 group-hover/browse:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="utility-card border-t-[4px] border-t-secondary p-8 flex flex-col justify-between group hover:border-t-accent"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="utility-badge-blue">
                      {product.dosageForm}
                    </span>
                    <span className="text-sm font-mono text-secondary font-bold">{product.strength}</span>
                  </div>

                  <h3 className="font-display font-bold text-heading text-xl">
                    {product.name}
                  </h3>
                  <div className="text-xs text-secondary font-mono italic mt-1 line-clamp-1">
                    {product.genericName}
                  </div>
                  <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <span className="block text-xs font-bold text-secondary font-mono uppercase tracking-wider">
                      Key Indications:
                    </span>
                    <ul className="space-y-1.5 text-sm text-body">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-2">
                          <span className="text-accent shrink-0 font-bold">•</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono"><span className="text-muted">Pack:</span> <span className="text-heading font-bold">{product.packaging}</span></span>
                  <button
                    onClick={() => navigate("products", { id: product.id })}
                    className="text-xs font-mono font-bold text-heading hover:text-secondary flex items-center gap-1.5 uppercase group/btn transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  >
                    DETAILS <ArrowRight className="w-4 h-4 text-heading group-hover/btn:text-accent group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Endorsement Section */}
      <section className="py-20 bg-background border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Medical Feedback"
            title="Trusted by Healthcare Professionals"
            description="Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="utility-card p-8 flex flex-col justify-between">
              <Quote className="w-8 h-8 text-secondary opacity-20 mb-5" />
              <p className="text-sm text-body leading-relaxed italic mb-8">
                We have prescription records for over 2,500 cardiovascular patients on Medivastin 20. The comparative clinical response has been absolutely identical to innovator lipid regulators with excellent compliance.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Dr. Ketan Mehta, MD</h4>
                  <p className="text-xs text-secondary font-mono font-bold">Consulting Cardiologist</p>
                </div>
              </div>
            </div>

            <div className="utility-card p-8 flex flex-col justify-between">
              <Quote className="w-8 h-8 text-secondary opacity-20 mb-5" />
              <p className="text-sm text-body leading-relaxed italic mb-8">
                As a regional distributor in South India, logistical reliability and uncompromised batch records are critical. Medinet provides complete CTD dossiers and maintains perfect batch stability indices.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Ramanathan Iyer</h4>
                  <p className="text-xs text-secondary font-mono font-bold">Chief Executive</p>
                </div>
              </div>
            </div>

            <div className="utility-card p-8 flex flex-col justify-between">
              <Quote className="w-8 h-8 text-secondary opacity-20 mb-5" />
              <p className="text-sm text-body leading-relaxed italic mb-8">
                Formulating products with Gabax NT has given our neurological clinic a stellar therapeutic weapon for diabetic neuropathic pain management. Patient compliance rates are extremely high.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CircleUserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Dr. Sarah Al-Dossari</h4>
                  <p className="text-xs text-secondary font-mono font-bold">Head of Neurology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section */}
      <section className="py-20 bg-alt-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                Corporate Media
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Latest News & Events
              </h2>
            </div>
            <button
              onClick={() => navigate("news-events")}
              className="mt-6 sm:mt-0 px-5 py-2.5 bg-white border border-border text-heading font-mono text-sm font-bold rounded-xl shadow-sm transition-all duration-300 flex items-center gap-2 group/press hover:border-secondary hover:text-secondary hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              VIEW ALL PRESS RELEASES <ArrowRight className="w-4 h-4 text-secondary group-hover/press:text-accent group-hover/press:translate-x-1 transition-colors duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => {
              let badgeBg = "bg-secondary/10 border-secondary/20";
              let badgeText = "text-secondary";
              let BadgeIcon = Presentation;
              
              if (news.category === "News") {
                badgeBg = "bg-secondary/10 border-secondary/20";
                badgeText = "text-secondary";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-success/10 border-success/20";
                badgeText = "text-success";
                BadgeIcon = HeartHandshake;
              }

              return (
              <div
                key={news.id}
                className="utility-card p-0 flex flex-col justify-between overflow-hidden group/news"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border ${badgeBg} ${badgeText} px-3 py-1 rounded-full font-bold`}>
                      <BadgeIcon className="w-4 h-4" />
                      {news.category}
                    </span>
                    <span className="text-xs text-muted font-mono font-bold">{news.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-heading text-xl group-hover/news:text-secondary transition-colors line-clamp-2 mt-2">
                    {news.title}
                  </h3>
                  <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="px-8 py-5 border-t border-border mt-auto flex justify-between items-center bg-background/50">
                  <span className="text-xs text-secondary font-mono font-bold group-hover/news:text-accent transition-colors">Read complete release</span>
                  <button
                    onClick={() => navigate("news-events", { id: news.id })}
                    className="flex items-center justify-center transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-secondary group-hover/news:text-accent group-hover/news:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>


      {/* Global B2B Call To Action Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-primary to-secondary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            PARTNER WITH MEDINET
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.15]">
            Scale Your <span className="text-accent">Pharmaceutical</span> Distribution <span className="text-accent">Globally</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Leverage our premium bioequivalent product portfolio, dedicated regulatory support, and flexible third-party manufacturing arrangements to boost your market dominance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("business-partners")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-alt-bg text-primary font-mono text-sm font-bold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group/primary"
            >
              PARTNER INQUIRY FORM <ArrowRight className="w-4 h-4 text-primary group-hover/primary:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-sm font-bold rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              CONTACT OFFICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
