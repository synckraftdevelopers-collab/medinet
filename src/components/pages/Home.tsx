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
                    <Image src="/logo.svg" alt="Medinet Logo" width={36} height={36} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display='none'; if(e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.classList.remove('hidden'); }} />
                    <Shield className="w-6 h-6 hidden" />
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
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono font-medium tracking-widest text-body uppercase block mb-3">
                // CORPORATE PROFILE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-heading tracking-tight leading-tight">
                About Medinet Pharmaceutical Marketing
              </h2>
              <p className="mt-6 text-body leading-relaxed text-sm">
                Established in {BRAND_INFO.established}, {BRAND_INFO.name} has built a highly reputable position in global pharmaceutical marketing by offering premium, affordable, and bioequivalent healthcare products.
              </p>
              <p className="mt-4 text-body leading-relaxed text-sm">
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
              <div className="bg-background border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left">
                <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-white mb-4">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-bold text-heading text-sm mb-2">Scientific Integrity</h3>
                <p className="text-xs text-body leading-relaxed">
                  We base all formulations on validated clinical trials, ensuring comparative bioequivalence matches original innovator drug standards.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left">
                <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-white mb-4">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-bold text-heading text-sm mb-2">Ethical Partnerships</h3>
                <p className="text-xs text-body leading-relaxed">
                  Our manufacturing partners run state-of-the-art facilities compliant with WHO-GMP, USFDA, or EU-GMP specifications.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left">
                <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-white mb-4">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-bold text-heading text-sm mb-2">Quality Assurance</h3>
                <p className="text-xs text-body leading-relaxed">
                  Batch traceability is maintained from raw API synthesis up to final dispatch, keeping product consistency uncompromised.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left">
                <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-white mb-4">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-bold text-heading text-sm mb-2">Pharmacovigilance</h3>
                <p className="text-xs text-body leading-relaxed">
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
          <SectionHeader
            badge="Therapeutic Segments"
            title="Comprehensive Healthcare Formulations"
            description="We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THERAPEUTIC_CATEGORIES.map((cat) => {
              const IconComp = iconMap[cat.iconName] || Activity;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate("products", { category: cat.id })}
                  className="bg-white border border-border hover:border-primary hover:shadow-sm p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-alt-bg text-body flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-display font-bold text-heading text-base group-hover:text-heading transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs text-body leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono font-semibold text-muted group-hover:text-heading transition-colors">
                    <span>VIEW FORMULATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-white border-b border-border">
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
              className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-border hover:bg-background text-body font-mono text-xs font-semibold rounded transition-all shadow-sm flex items-center gap-1.5"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left flex flex-col justify-between shadow-sm hover:border-primary transition-all duration-200 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono bg-alt-bg text-body border border-border px-2 py-0.5 rounded font-semibold uppercase">
                      {product.dosageForm}
                    </span>
                    <span className="text-xs font-mono text-muted">{product.strength}</span>
                  </div>

                  <h3 className="font-display font-bold text-heading text-lg group-hover:text-heading transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-xs text-body font-mono italic mt-1 line-clamp-1">
                    {product.genericName}
                  </div>
                  <p className="mt-3.5 text-sm text-body leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <span className="block text-[10px] font-semibold text-muted font-mono uppercase tracking-wider">
                      Key Indications:
                    </span>
                    <ul className="space-y-1 text-xs text-body">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-1">
                          <span className="text-heading shrink-0">•</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted font-mono">
                    Pack: {product.packaging}
                  </span>
                  <button
                    onClick={() => navigate("products", { id: product.id })}
                    className="text-xs font-mono font-semibold text-heading hover:text-black flex items-center gap-1 uppercase"
                  >
                    DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left flex flex-col justify-between">
              <p className="text-xs text-body leading-relaxed italic mb-6">
                &ldquo;We have prescription records for over 2,500 cardiovascular patients on Medivastin 20. The comparative clinical response has been absolutely identical to innovator lipid regulators with excellent compliance.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-mono font-bold text-xs">
                  DK
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Dr. Ketan Mehta, MD</h4>
                  <p className="text-[11px] text-muted font-mono">Consulting Cardiologist, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left flex flex-col justify-between">
              <p className="text-xs text-body leading-relaxed italic mb-6">
                &ldquo;As a regional distributor in South India, logistical reliability and uncompromised batch records are critical. Medinet provides complete CTD dossiers and maintains perfect batch stability indices.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-mono font-bold text-xs">
                  RI
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Ramanathan Iyer</h4>
                  <p className="text-[11px] text-muted font-mono">Chief Executive, South Dist. Hub</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left flex flex-col justify-between">
              <p className="text-xs text-body leading-relaxed italic mb-6">
                &ldquo;Formulating products with Gabax NT has given our neurological clinic a stellar therapeutic weapon for diabetic neuropathic pain management. Patient compliance rates are extremely high.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-mono font-bold text-xs">
                  SA
                </div>
                <div>
                  <h4 className="font-display font-bold text-heading text-sm">Dr. Sarah Al-Dossari</h4>
                  <p className="text-[11px] text-muted font-mono">Head of Neurology Unit, Clinical Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section */}
      <section className="py-20 bg-white border-b border-border">
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
              className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-border hover:bg-background text-body font-mono text-xs font-semibold rounded transition-all shadow-sm flex items-center gap-1.5"
            >
              VIEW ALL PRESS RELEASES <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left flex flex-col justify-between overflow-hidden shadow-sm hover:border-primary transition-all duration-200 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-mono uppercase tracking-wider bg-alt-bg text-body border border-border px-2 py-0.5 rounded font-semibold">
                      {news.category}
                    </span>
                    <span className="text-xs text-muted font-mono">{news.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-heading text-base group-hover:text-heading transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="mt-3 text-xs text-body leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="p-5 pt-0 border-t border-border mt-4 flex justify-between items-center bg-background/50">
                  <span className="text-[11px] text-muted font-mono">Read complete release</span>
                  <button
                    onClick={() => navigate("news-events", { id: news.id })}
                    className="w-7 h-7 rounded border border-border text-body hover:text-heading hover:border-primary flex items-center justify-center transition-all bg-white shadow-none"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global B2B Call To Action Section */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-25"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary border border-primary text-muted text-[10px] font-mono font-medium tracking-wider uppercase mb-6">
            // PARTNER WITH MEDINET
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Scale Your Pharmaceutical Distribution Globally
          </h2>
          <p className="mt-6 text-xs sm:text-sm text-muted leading-relaxed max-w-xl mx-auto">
            Leverage our premium bioequivalent product portfolio, dedicated regulatory support, and flexible third-party manufacturing arrangements to boost your market dominance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("business-partners")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-alt-bg text-heading font-mono text-xs font-semibold rounded transition-all shadow-sm active:scale-98"
            >
              PARTNER INQUIRY FORM <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-slate-850 border border-slate-800 text-white font-mono text-xs font-semibold rounded transition-all active:scale-98"
            >
              CONTACT OFFICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
