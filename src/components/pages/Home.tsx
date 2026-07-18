/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
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
              >
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-alt-bg border border-border text-body text-[10px] font-mono font-medium tracking-wider uppercase mb-6 shadow-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Enterprise Pharmaceutical Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-heading tracking-tight leading-[1.1] mb-6">
                  Bridging Science and <br />
                  <span className="text-heading underline decoration-slate-300 decoration-4 underline-offset-4">Patient Care</span> Globally
                </h1>
                <p className="text-base sm:text-lg text-body leading-relaxed max-w-xl mb-8">
                  Medinet Pharmaceutical Marketing Company drives the global commercialization of bioequivalent, advanced therapeutics, delivering trust to doctors and life-saving remedies to millions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate("products")}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-black text-white font-mono text-xs font-semibold rounded border border-primary transition-all shadow-sm active:scale-98"
                  >
                    EXPLORE DIRECTORY
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => navigate("business-partners")}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-background border border-border text-body font-mono text-xs font-semibold rounded transition-all shadow-sm active:scale-98"
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
                className="relative bg-background rounded border border-border p-8 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-heading text-base">Guaranteed Efficacy</h3>
                    <p className="text-[11px] text-body font-mono">WHO-GMP & FDA Audit Compliance</p>
                  </div>
                </div>

                <blockquote className="text-sm italic text-body border-l-2 border-primary pl-4 py-1 leading-relaxed mb-6">
                  &ldquo;Every single batch of Medinet formulations matches the rigorous bioequivalence curves of global innovator molecules.&rdquo;
                </blockquote>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-heading shrink-0" />
                    <span className="text-xs font-semibold text-body">100% Bioequivalent Formulations</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-heading shrink-0" />
                    <span className="text-xs font-semibold text-body">Double-Inspected Batching Quality Control</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-heading shrink-0" />
                    <span className="text-xs font-semibold text-body">Rigorous Pharmacovigilance Monitoring</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="block text-xl font-display font-bold text-heading">10M+</span>
                    <span className="text-[9px] text-body font-mono uppercase tracking-wider">Patients Served</span>
                  </div>
                  <div>
                    <span className="block text-xl font-display font-bold text-heading">18+</span>
                    <span className="text-[9px] text-body font-mono uppercase tracking-wider">Global Nations</span>
                  </div>
                  <div>
                    <span className="block text-xl font-display font-bold text-heading">100%</span>
                    <span className="text-[9px] text-body font-mono uppercase tracking-wider">Audit Pass</span>
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-heading hover:text-black group uppercase"
                >
                  READ CEO MESSAGE & JOURNEY
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
