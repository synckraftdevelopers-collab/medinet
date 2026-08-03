/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PRODUCTS, THERAPEUTIC_CATEGORIES, NEWS_ITEMS, BRAND_INFO } from "../../data";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import {
  Calendar,
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
  ShieldCheck,
  Megaphone,
  Briefcase
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
  const featuredProducts = PRODUCTS.slice(0, 4);
  const latestNews = NEWS_ITEMS.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EFF6FF] border-b border-border overflow-hidden">
        {/* Soft Animated Gradient & Particle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(29, 78, 216,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29, 78, 216,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29, 78, 216,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Pill */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute top-[20%] right-[15%] w-16 h-16 rounded-3xl bg-gradient-to-tr from-secondary/10 to-accent/10 border border-white/40 backdrop-blur-md items-center justify-center shadow-lg"
          >
            <Pill className="w-8 h-8 text-secondary/50" />
          </motion.div>
          {/* Floating Molecule / Flask */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:flex absolute bottom-[25%] left-[10%] w-20 h-20 rounded-full bg-gradient-to-tr from-primary/5 to-success/10 border border-white/40 backdrop-blur-md items-center justify-center shadow-lg"
          >
            <FlaskConical className="w-10 h-10 text-success/40" />
          </motion.div>
          {/* Decorative Geometric Circles */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-secondary/5 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden md:block absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full"
          ></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Clean background overlay to hide grid for readability */}
                <div className="absolute -inset-8 sm:-inset-16 bg-white/60 blur-3xl max-w-[760px] rounded-[32px] -z-10 pointer-events-none"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase shadow-sm mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    {BRAND_INFO.shortName}
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-6">
                  <span className="text-heading">Reliable Care,</span> <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm">Every Time.</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 w-full h-2 rounded-full bg-gradient-to-r from-secondary to-accent origin-left"
                    ></motion.span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-body font-semibold mb-2">
                  Delivering trusted pharmaceutical solutions through quality, innovation, and ethical marketing.
                </p>
                <p className="text-base sm:text-lg text-body leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                  At Medinet Pharmaceutical Marketing Company, we are committed to improving lives by providing high-quality, affordable, and innovative pharmaceutical products. With a strong focus on excellence and integrity, we strive to be a trusted partner for healthcare professionals and patients across India.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 w-full max-w-md mx-auto lg:mx-0"
                >
                  <button
                    onClick={() => navigate("products", { section: "formulations" })}
                    className="relative overflow-hidden group/btn1 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(10, 25, 47,0.25)] hover:shadow-[0_12px_28px_rgba(10, 25, 47,0.35)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary opacity-0 group-hover/btn1:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      EXPLORE OUR PRODUCTS
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn1:translate-x-1" />
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("contact")}
                    className="group/btn2 px-8 py-4 bg-white text-heading border border-border rounded-xl font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                  >
                    CONTACT US
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Visual Card / Glassmorphism */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                style={{ perspective: 1000 }}
              >
                <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(29, 78, 216,0.15)] transition-all duration-500">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg p-3 transform group-hover:rotate-6 transition-transform duration-300">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-heading text-xl">Guaranteed Efficacy</h3>
                      <p className="text-xs font-mono mt-1 font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent tracking-wide">WHO-GMP & FDA Compliant</p>
                    </div>
                  </div>

                  <blockquote className="text-sm italic text-body bg-white/50 border-l-4 border-l-accent rounded-xl p-5 leading-relaxed mb-6 relative z-10 shadow-sm">
                    &ldquo;Every single batch of Medinet formulations matches the rigorous bioequivalence curves of global innovator molecules.&rdquo;
                  </blockquote>

                  <div className="space-y-4 relative z-10">
                    {[
                      "100% Bioequivalent Formulations",
                      "Double-Inspected Quality Control",
                      "Rigorous Pharmacovigilance Monitoring"
                    ].map((text, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        key={i}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 group-hover/item:bg-success/20 transition-colors">
                          <CheckCircle className="w-3.5 h-3.5 text-success group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm font-semibold text-heading">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between relative z-10">
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover/stat:-translate-y-1 transition-transform">10M+</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Patients</span>
                    </div>
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover/stat:-translate-y-1 transition-transform">18+</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Nations</span>
                    </div>
                    <div className="group/stat">
                      <span className="block text-2xl font-display font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover/stat:-translate-y-1 transition-transform">100%</span>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-wider font-semibold">Audit Pass</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 lg:mt-12 flex justify-center w-full"
          >
            <button
              onClick={() => {
                document.getElementById("corporate-overview")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label="Scroll to Corporate Profile section"
              className="group/scroll flex flex-col items-center gap-3 text-muted hover:text-secondary transition-colors duration-300 focus:outline-none"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80 group-hover/scroll:opacity-100 transition-opacity">Explore Medinet</span>
              <div className="w-7 h-12 rounded-full border-2 border-border/80 group-hover/scroll:border-secondary flex justify-center pt-2 p-1 transition-colors duration-300 bg-white/30 backdrop-blur-sm shadow-sm">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2.5 bg-secondary rounded-full"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section id="corporate-overview" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden border-b border-border">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none z-0"></div>

        {/* Abstract Medical Background Elements (<5% opacity) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Scientific Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.02)_2px,transparent_2px)] bg-[size:50px_50px]"></div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] opacity-[0.03]"
          >
            <Shield className="w-[400px] h-[400px] text-secondary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[5%] opacity-[0.03]"
          >
            <Activity className="w-[300px] h-[300px] text-primary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading & Description */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >


              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.25] mb-6 relative inline-block">
                <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full z-[-1] pointer-events-none"></div>
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Medinet</span>
              </h2>

              {/* Animated Gradient Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 origin-center"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-body text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
                  {BRAND_INFO.name} is dedicated to delivering reliable pharmaceutical solutions that support <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">better healthcare outcomes</span>. Guided by our tagline, "<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-bold">{BRAND_INFO.tagline.replace(/\.$/, '')}</span>," we combine <span className="font-semibold text-primary">scientific excellence</span>, <span className="font-semibold text-primary">ethical business practices</span>, and a customer-centric approach to meet the evolving needs of healthcare professionals and patients.
                </p>
                <p className="text-body text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                  Our growing portfolio spans multiple therapeutic segments, reflecting our commitment to <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold">quality, innovation, and accessibility</span>.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Premium 4-Card Feature Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {[
              { title: "Quality Assured", desc: "Strict GMP adherence & validation.", icon: ShieldCheck },
              { title: "Research Driven", desc: "Bioequivalent therapeutic solutions.", icon: FlaskConical },
              { title: "Regulatory Compliant", desc: "Meeting global FDA & EU standards.", icon: FileText },
              { title: "Patient Focused", desc: "Improving health access worldwide.", icon: HeartPulse }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.15), duration: 0.7, ease: "easeOut" }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[24px] border border-border p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(29, 78, 216,0.08)] hover:border-secondary/30 hover:-translate-y-[8px] transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden"
              >
                {/* Floating gradient blob inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl z-0 pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500"></div>

                <div className="relative mb-6 z-10">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="relative w-14 h-14 bg-gradient-to-br from-white to-slate-50 rounded-full border border-border shadow-sm flex items-center justify-center text-secondary group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
                  >
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] text-secondary font-bold">✓</span>
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                </div>

                <h3 className="font-display font-extrabold text-primary text-lg mb-2 relative z-10 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-body leading-relaxed relative z-10">
                  {feature.desc}
                </p>

                {/* Elegant corner decoration */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-border rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-border rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center relative z-10">
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={() => navigate("about")}
              className="group relative px-8 py-3.5 bg-white border border-border text-primary font-mono text-sm font-bold tracking-wide rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(236,72,153,0.15)] hover:border-[#EC4899] transition-all duration-300 hover:-translate-y-1 active:-translate-y-0 active:shadow-[0_2px_8px_rgba(236,72,153,0.1)] flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#EC4899] opacity-0 group-active:opacity-10 transition-opacity duration-150"></div>
              <span className="relative z-10 group-hover:text-animated-pink-navy transition-all duration-300">CEO MESSAGE</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-[#EC4899] group-hover:translate-x-1.5 transition-all duration-300" />
            </motion.button>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-border">
        {/* Soft Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Glassmorphism Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(29, 78, 216,0.08)] mb-6 hover:border-secondary/40 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.2] mb-6">
                Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Medinet?</span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6 origin-center"
              ></motion.div>

              <p className="text-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We are dedicated to providing the <span className="text-animated-pink-navy font-bold">highest standards of healthcare</span> through our <span className="text-animated-pink-navy font-bold">comprehensive and reliable pharmaceutical solutions</span>.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality-driven pharmaceutical products", icon: ShieldCheck },
              { title: "Ethical marketing practices", icon: Handshake },
              { title: "Customer-focused healthcare solutions", icon: HeartHandshake },
              { title: "Diverse therapeutic portfolio", icon: Pill },
              { title: "Commitment to innovation", icon: FlaskConical },
              { title: "Strong business partnerships", icon: Briefcase },
              { title: "Reliable supply and distribution", icon: Globe },
              { title: "Dedicated support for healthcare professionals", icon: Users }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5, ease: "easeOut" }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-2xl border border-border p-6 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(29, 78, 216,0.08)] hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-border shadow-sm flex items-center justify-center shrink-0 group-hover:border-secondary/30 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-secondary group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                </div>
                <div className="flex-1 pt-1 flex items-center">
                  <h3 className="font-display font-bold text-primary text-[15px] leading-snug group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Therapeutic Segments Section */}
      {/* Therapeutic Segments Section (Premium Enterprise Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-t border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow behind the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none z-0"></div>

        {/* Elegant Floating Medical-Inspired Abstract Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Medical Cross (ShieldPlus) */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%]"
          >
            <ShieldPlus className="w-[120px] h-[120px] text-secondary" />
          </motion.div>

          {/* Molecule/Flask */}
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0], opacity: [0.015, 0.04, 0.015] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[8%]"
          >
            <FlaskConical className="w-[160px] h-[160px] text-primary" />
          </motion.div>

          {/* Pill Outline */}
          <motion.div
            animate={{ x: [0, -20, 0], rotate: [15, 30, 15], opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[40%] left-[85%]"
          >
            <Pill className="w-[100px] h-[100px] text-secondary" />
          </motion.div>

          {/* Activity/DNA-like wave */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.015, 0.04, 0.015] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[10%] left-[15%]"
          >
            <Activity className="w-[140px] h-[140px] text-primary" />
          </motion.div>

          {/* Subtle animated gradient blobs behind the content */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Custom Premium Section Header */}
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            {/* Premium Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(29, 78, 216,0.08)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                Therapeutic Segments
              </span>
            </motion.div>

            {/* Bold Premium Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.2] mb-6 max-w-4xl mx-auto"
            >
              Healthcare Solutions Across <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Multiple Specialties</span>
            </motion.h2>

            {/* Subtle Animated Underline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mb-6 origin-center"
            ></motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base md:text-lg text-body leading-[1.8] max-w-2xl mx-auto"
            >
              We develop and distribute <span className="text-animated-pink-navy font-bold">highly effective medicines</span> covering a broad array of therapeutic disciplines, backed by <span className="text-animated-pink-navy font-bold">targeted formulation research</span>.
            </motion.p>

            {/* Thin Animated Gradient Divider Below Description */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-8 origin-center"
            ></motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {THERAPEUTIC_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Activity;
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  key={cat.id}
                  onClick={() => navigate("products", { category: cat.id })}
                  className="group relative flex flex-col justify-between bg-white rounded-2xl border border-secondary/15 p-7 cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(29, 78, 216,0.12)] hover:-translate-y-2 hover:scale-[1.02] hover:border-secondary/40 transition-all duration-[250ms] ease-out overflow-hidden z-10"
                >
                  {/* Subtle inner gradient (White -> Soft Mint -> White) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

                  {/* Premium top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/50 via-primary/60 to-secondary/50 opacity-80 group-hover:opacity-100 group-hover:from-secondary group-hover:via-accent group-hover:to-secondary transition-all duration-[250ms]"></div>

                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      className="w-14 h-14 bg-gradient-to-br from-white to-blue-50/80 border border-secondary/15 rounded-[16px] text-secondary flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(29, 78, 216,0.06)] group-hover:shadow-[0_8px_25px_rgba(29, 78, 216,0.25)] group-hover:scale-[1.08] group-hover:from-secondary group-hover:to-primary group-hover:text-white transition-all duration-[250ms] relative"
                    >
                      <div className="absolute inset-0 rounded-[16px] bg-secondary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] -z-10"></div>
                      <IconComp className="w-6 h-6 relative z-10" />
                    </motion.div>

                    <h3 className="font-display font-extrabold text-heading text-[19px] mb-3 group-hover:text-secondary transition-colors duration-[250ms]">
                      {cat.name}
                    </h3>

                    <p className="text-[14px] text-body leading-loose line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-body group-hover:text-secondary transition-colors duration-[250ms] relative z-10">
                    <span className="relative overflow-hidden py-1">
                      VIEW FORMULATIONS
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-[250ms] ease-out"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-[250ms] group-hover:translate-x-1.5" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-24 bg-alt-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="utility-badge-blue mb-4">
                <span className="utility-dot"></span>
                Trusted Brands
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
                Featured Products
              </h2>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate("products")}
              className="mt-6 sm:mt-0 px-6 py-3 bg-white border border-border text-heading rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 group/browse hover:border-secondary hover:text-secondary hover:shadow-lg hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-4 h-4 text-secondary transition-transform duration-300 group-hover/browse:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
            {featuredProducts.map((product, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                key={product.id}
                onClick={() => navigate("products", { id: product.id })}
                className="bg-white rounded-3xl border-t-4 border-t-secondary p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-t-accent hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(29, 78, 216,0.12)] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="utility-badge-blue bg-alt-bg">
                      {product.dosageForm}
                    </span>
                    <span className="text-sm font-mono text-secondary font-bold">{product.strength}</span>
                  </div>

                  <h3 className="mt-3 mb-2 font-display font-bold text-heading text-xl sm:text-2xl flex items-center gap-3 group-hover:text-secondary transition-colors duration-300">
                    <Pill className="w-6 h-6 text-secondary shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                    {product.name}
                  </h3>
                  <div className="text-sm text-secondary font-mono italic mt-1 line-clamp-1">
                    {product.genericName}
                  </div>
                  <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <span className="block text-xs font-bold text-secondary font-mono uppercase tracking-wider">
                      Key Indications:
                    </span>
                    <ul className="space-y-2 text-sm text-body">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-2">
                          <span className="text-accent shrink-0 font-bold">•</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono"><span className="text-muted">Pack:</span> <span className="text-heading font-bold">{product.packaging}</span></span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-white to-slate-50 border border-blue-200 rounded-full text-xs font-bold text-heading uppercase tracking-wider shadow-sm group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all duration-250 group/btn">
                    DETAILS <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:text-white group-hover:translate-x-1 transition-transform duration-250" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Corporate Updates Section (Premium Enterprise Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

        {/* Abstract Medical Shapes (< 5% opacity) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0], opacity: [0.01, 0.03, 0.01] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%]"
          >
            <Shield className="w-[200px] h-[200px] text-primary" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.015, 0.035, 0.015] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] left-[5%]"
          >
            <Droplet className="w-[150px] h-[150px] text-secondary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Two-Column Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Glassmorphism Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-border/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-6 group cursor-default hover:border-secondary/30 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 group-hover:bg-primary transition-colors"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary group-hover:bg-primary transition-colors"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-body uppercase">
                  Corporate Media
                </span>
              </div>

              {/* Dominant Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.2] mb-4">
                Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">News</span> & Events
              </h2>

              <p className="text-body text-base leading-relaxed">
                Stay updated with the latest <span className="text-animated-pink-navy font-bold">clinical developments</span>, <span className="text-animated-pink-navy font-bold">corporate milestones</span>, and <span className="text-animated-pink-navy font-bold">social responsibility initiatives</span> at Medinet Pharmaceuticals.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              onClick={() => navigate("news-events")}
              className="group relative px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-mono text-sm font-bold tracking-wide rounded-xl shadow-[0_8px_20px_rgba(29, 78, 216,0.25)] hover:shadow-[0_12px_25px_rgba(29, 78, 216,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              {/* Ripple Effect Background */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">VIEW ALL PRESS RELEASES</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {latestNews.map((news, idx) => {
              let badgeBg = "bg-secondary/10 border-secondary/20";
              let badgeText = "text-secondary";
              let BadgeIcon = Presentation;

              if (news.category === "News") {
                badgeBg = "bg-primary/10 border-primary/20";
                badgeText = "text-primary";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-blue-100 border-blue-200";
                badgeText = "text-blue-700";
                BadgeIcon = HeartHandshake;
              }

              const images = [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Lab
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", // Conference
                "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"  // CSR
              ];
              const imageUrl = images[idx % images.length];

              return (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                  key={news.id}
                  onClick={() => navigate("news-events", { id: news.id })}
                  className="group relative bg-white rounded-[24px] border border-border h-full flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(29, 78, 216,0.08)] hover:border-secondary/30 hover:-translate-y-[10px] transition-all duration-300"
                >
                  {/* Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                  {/* Premium Thumbnail Area */}
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <Image
                      src={imageUrl}
                      alt={news.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Category Pill over Image */}
                    <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider border ${badgeBg} ${badgeText} px-3 py-1.5 rounded-full font-bold bg-white/90 backdrop-blur-sm shadow-sm`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {news.category}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-start relative z-10 bg-white">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-2 mb-4 text-body">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono font-semibold tracking-wide">{news.date}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-primary text-lg sm:text-xl md:text-2xl leading-[1.3] group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>

                  {/* Fixed Bottom CTA */}
                  <div className="px-6 md:px-8 py-5 border-t border-border bg-alt-bg/50 group-hover:bg-secondary/5 transition-colors duration-300 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-secondary relative overflow-hidden py-1">
                      READ COMPLETE RELEASE
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-border flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Latest Updates Section (Premium Enterprise Feature Showcase) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none z-0"></div>

        {/* Very soft floating medical abstract elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle medical pattern (grid of tiny dots) */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(29, 78, 216,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%]"
          >
            <Activity className="w-[120px] h-[120px] text-secondary" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[10%]"
          >
            <Brain className="w-[160px] h-[160px] text-primary" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Glassmorphism Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(29, 78, 216,0.08)] mb-6 hover:border-secondary/40 transition-colors duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                  Company Updates
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.2] mb-6">
                Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Updates</span>
              </h2>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6 origin-center"
              ></motion.div>

              <p className="text-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Stay informed with our latest <span className="text-animated-pink-navy font-bold">corporate announcements</span>, <span className="text-animated-pink-navy font-bold">product launches</span>, <span className="text-animated-pink-navy font-bold">global events</span>, and <span className="text-animated-pink-navy font-bold">career opportunities</span> at Medinet.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Very soft connecting lines between cards (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0"></div>

            {[
              { title: "New Product Launches", icon: Sparkles, desc: "Explore our latest innovative formulations and therapeutic additions." },
              { title: "Medical Conferences", icon: Presentation, desc: "Join our experts at upcoming global medical symposiums and events." },
              { title: "Company Announcements", icon: Megaphone, desc: "Stay informed with the latest corporate news and business developments." },
              { title: "Career Opportunities", icon: Briefcase, desc: "Discover new roles and build your career with Medinet Pharmaceuticals." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                onClick={() => navigate("news-events")}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[24px] border border-border p-8 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(29, 78, 216,0.08)] hover:border-secondary/30 hover:-translate-y-[10px] transition-all duration-300 h-full z-10"
              >
                {/* Thin animated gradient strip at the top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative gradient blob behind selected cards (e.g. alternate cards) */}
                {(idx === 0 || idx === 3) && (
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl z-0 pointer-events-none"></div>
                )}
                {(idx === 1 || idx === 2) && (
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl z-0 pointer-events-none"></div>
                )}

                <div className="relative z-10">
                  {/* Premium gradient circular container for icon */}
                  <div className="relative w-14 h-14 rounded-full mb-8">
                    {/* Soft glow around the icon */}
                    <div className="absolute inset-0 bg-secondary/20 blur-md rounded-full scale-110 opacity-50 group-hover:opacity-100 group-hover:bg-primary/30 transition-all duration-300"></div>
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 border border-border rounded-full flex items-center justify-center shadow-sm group-hover:border-secondary/40 transition-colors duration-300"
                    >
                      <item.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  <h3 className="font-display font-extrabold text-primary text-xl group-hover:text-animated-pink-navy transition-all duration-300 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto relative z-10 flex items-center">
                  <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider relative overflow-hidden py-1">
                    EXPLORE
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Trust Statement Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden border-b border-border">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none z-0"></div>

        {/* Abstract Medical Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Scientific Dots Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.03)_2px,transparent_2px)] bg-[size:60px_60px]"></div>

          {/* Giant low-opacity quotation mark */}
          <Quote className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] text-primary opacity-[0.02] transform -scale-x-100 rotate-12" />

          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%]"
          >
            <Activity className="w-[180px] h-[180px] text-secondary" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] right-[10%]"
          >
            <ShieldPlus className="w-[150px] h-[150px] text-primary" />
          </motion.div>

          {/* Soft glowing particles moving slowly */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-secondary blur-[2px]"
          ></motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[40%] left-[20%] w-3 h-3 rounded-full bg-primary blur-[2px]"
          ></motion.div>
        </div>

        {/* Floating gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Hero Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-20 md:mb-24 relative"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary tracking-tight leading-[1.15] mb-8">
              &ldquo;Reliable Care, <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Every Time.</span>&rdquo;
            </h2>

            {/* Animated Gradient Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="w-32 h-1.5 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto origin-center"
            ></motion.div>
          </motion.div>

          {/* Subtle Horizontal Gradient Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

          {/* Premium Feature Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Committed to Quality",
                desc: "Every formulation follows strict quality standards.",
                icon: ShieldCheck
              },
              {
                title: "Driven by Innovation",
                desc: "Research-backed pharmaceutical development.",
                icon: FlaskConical
              },
              {
                title: "Trusted Worldwide",
                desc: "Healthcare professionals rely on Medinet.",
                icon: Globe
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.2, duration: 0.7, ease: "easeOut" }}
                className={`group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(37,99,235,0.05)] border border-transparent hover:border-border ${idx === 2 ? 'md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full' : ''}`}
              >
                <div className="relative mb-6">
                  {/* Soft hover glow */}
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Circular Medical Icon */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-50 border border-border shadow-md flex items-center justify-center z-10 group-hover:border-primary/30 transition-colors duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>

                <h3 className="font-display font-bold text-primary text-xl mb-3 tracking-wide flex items-center justify-center gap-2">
                  <span className="text-secondary font-sans">✓</span>
                  {feature.title}
                </h3>

                <p className="text-body text-sm leading-relaxed max-w-sm mx-auto">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-white border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Stay Connected with Medinet"
            badge="Latest Updates"
            description="Keep up with the latest news and important announcements from Medinet Pharmaceutical Marketing Company."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "New Product Launches", icon: Pill },
              { title: "Medical Conferences & Events", icon: Presentation },
              { title: "Company Announcements", icon: Megaphone },
              { title: "Career Opportunities", icon: Briefcase }
            ].map((update, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer flex flex-col items-center text-center"
                onClick={() => navigate("news-events")}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-secondary mb-4 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <update.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {update.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global B2B Call To Action Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-secondary to-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Call to Action
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
            Partner with <span className="text-accent">Medinet</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Whether you're a healthcare professional, distributor, business partner, or aspiring employee, Medinet is committed to building lasting relationships and delivering healthcare solutions you can trust.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch sm:items-center w-full max-w-4xl mx-auto">
            <button
              onClick={() => navigate("products")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-alt-bg text-primary font-mono text-sm font-bold rounded-xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] group/primary min-h-[52px]"
            >
              EXPLORE PRODUCTS <ArrowRight className="w-4 h-4 text-primary group-hover/primary:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate("business-partners")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white/10 border border-white/20 text-white font-mono text-sm font-bold rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-h-[52px] !bg-none hover:!bg-white/20 hover:!bg-none active:!bg-white/30 active:!bg-none [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              BECOME A PARTNER
            </button>
            <button
              onClick={() => navigate("careers")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white/10 border border-white/20 text-white font-mono text-sm font-bold rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-h-[52px] !bg-none hover:!bg-white/20 hover:!bg-none active:!bg-white/30 active:!bg-none [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              CAREERS
            </button>
            <button
              onClick={() => navigate("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white/10 border border-white/20 text-white font-mono text-sm font-bold rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-h-[52px] !bg-none hover:!bg-white/20 hover:!bg-none active:!bg-white/30 active:!bg-none [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              CONTACT US
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
