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
  Brain,
  Banknote,
  Lightbulb,
  UserCheck,
  Users
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
      title: "Patient First",
      description: "Every decision we make is guided by our commitment to improving patient health, safety, and quality of life.",
      icon: HeartHandshake,
      accent: "border-t-primary"
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, accountability, and unwavering ethical standards.",
      icon: ShieldCheck,
      accent: "border-t-secondary"
    },
    {
      title: "Quality Excellence",
      description: "We are committed to delivering pharmaceutical products that consistently meet the highest standards of safety, efficacy, and reliability.",
      icon: Award,
      accent: "border-t-emerald-500"
    },
    {
      title: "Trust",
      description: "We build lasting relationships with healthcare professionals, distributors, business partners, and patients through consistency, reliability, and mutual respect.",
      icon: Handshake,
      accent: "border-t-blue-500"
    },
    {
      title: "Affordability",
      description: "We believe quality healthcare should be accessible to everyone by providing affordable pharmaceutical solutions without compromising excellence.",
      icon: Banknote,
      accent: "border-t-amber-500"
    },
    {
      title: "Innovation",
      description: "We continuously seek better solutions, embrace new technologies, and adapt to the changing healthcare landscape.",
      icon: Lightbulb,
      accent: "border-t-violet-500"
    },
    {
      title: "Customer Commitment",
      description: "We are dedicated to understanding and exceeding the expectations of our customers through responsive service and dependable support.",
      icon: UserCheck,
      accent: "border-t-pink-500"
    },
    {
      title: "Teamwork",
      description: "We believe collaboration, mutual respect, and shared purpose are the foundation of organizational success.",
      icon: Users,
      accent: "border-t-teal-500"
    }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-white via-background to-alt-bg border-b border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
        <motion.div variants={fadeUp} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-heading tracking-tight leading-[1.2] relative w-fit mb-8 mx-auto text-center">
            About Medinet
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: "100%" }} 
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} 
              className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 rounded-full"
            ></motion.span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-body font-sans leading-relaxed max-w-3xl mx-auto text-center">
            Founded with a vision to enhance global health, Medinet has grown from a specialized marketer to a global pharmaceutical leader with a heritage of pharmaceutical excellence.
          </p>
        </motion.div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border relative overflow-hidden">
        {/* Soft Radial Glow & Abstract Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_60%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Scientific Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.03)_2px,transparent_2px)] bg-[size:40px_40px]"></div>
          
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.01, 0.03, 0.01] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] opacity-[0.03]"
          >
            <Shield className="w-[300px] h-[300px] text-primary" />
          </motion.div>
          <motion.div 
            animate={{ rotate: 360, opacity: [0.01, 0.03, 0.01] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-5%] opacity-[0.03]"
          >
            <Brain className="w-[400px] h-[400px] text-secondary" />
          </motion.div>
          
          {/* Animated Gradient Blobs */}
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Heading Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.2]">
                Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Philosophy</span>
              </h2>
              
              {/* Animated Gradient Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-5 mb-5 origin-center"
              ></motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-slate-500 leading-relaxed text-sm max-w-xl mx-auto"
              >
                We believe that premium, life-restoring pharmaceuticals should be built upon unyielding pillars of ethics and care.
              </motion.p>
            </motion.div>

            {/* Philosophy Boxes - Kept Exact Size & Layout */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {[
                { title: "Quality", desc: "Uncompromising standards in every formulation we produce.", icon: ShieldCheck },
                { title: "Trust", desc: "Building long-term reliability with our global partners.", icon: HeartHandshake },
                { title: "Affordability", desc: "Accessible and equitable pricing for healthcare worldwide.", icon: Handshake },
                { title: "Compassion", desc: "A patient-first approach embedded in all our decisions.", icon: Heart }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.15), duration: 0.7, ease: "easeOut" }}
                  key={idx} 
                  className="relative flex items-start gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-[24px] border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(13,148,136,0.08)] hover:border-[#0D9488]/30 hover:-translate-y-[6px] transition-all duration-300 group cursor-default overflow-hidden"
                >
                  {/* Thin animated gradient strip on the top edge */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative shrink-0">
                    {/* Icon Container with Gradient & Hover Glow */}
                    <div className="absolute inset-0 bg-[#0D9488]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-150 transition-opacity duration-300 z-0"></div>
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-[1.08] group-hover:border-[#0D9488]/30 transition-all duration-300 z-10"
                    >
                      <item.icon className="w-6 h-6 text-[#0B1F4D] group-hover:text-secondary transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-display font-extrabold text-[#0B1F4D] text-sm mb-1 tracking-wide">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                To provide world-class, affordable, and innovative healthcare solutions.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeUp} className="utility-card p-8 border-t-[4px] border-t-accent group hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary group-hover:from-accent group-hover:to-secondary rounded-2xl shadow-md flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-heading text-2xl mb-4">Our Long-term Vision</h3>
              <p className="text-body leading-relaxed text-base">
                To be the most trusted pharmaceutical partner globally, recognized for quality and integrity.
              </p>
            </motion.div>
          </motion.div>

          {/* Custom Section Header: The Pillars of Medinet */}
          <div className="relative mt-24 mb-16 rounded-3xl overflow-hidden py-16 px-4">
            {/* Soft radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.04),transparent_50%)] pointer-events-none -z-10"></div>
            
            {/* Molecular network / abstract bg elements */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.02)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
              
              <motion.div 
                animate={{ y: [0, -15, 0], opacity: [0.02, 0.04, 0.02] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[15%]"
              >
                <Shield className="w-32 h-32 text-[#2563EB]" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.04, 0.02] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] right-[15%]"
              >
                <Brain className="w-40 h-40 text-[#0D9488]" />
              </motion.div>
              
              {/* Quotation-style graphic */}
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[180px] font-display font-black text-[#0B1F4D] opacity-[0.03] leading-none pointer-events-none rotate-12 select-none">
                &ldquo;
              </div>
              
              {/* Floating glowing blobs */}
              <div className="absolute top-1/4 left-1/3 w-[200px] h-[200px] bg-[#38BDF8]/5 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] bg-[#0D9488]/5 rounded-full blur-[60px]"></div>

              {/* Floating medical particles */}
              <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-[#0D9488] blur-[1px]"></motion.div>
              <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-[40%] left-[30%] w-3 h-3 rounded-full bg-[#38BDF8] blur-[1px]"></motion.div>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
              {/* Premium Glassmorphism Pill */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-[0_4px_15px_rgba(5,150,105,0.06)] mb-8 hover:border-[#0D9488]/30 transition-colors duration-300 cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#0B1F4D] uppercase">
                  CORE VALUES
                </span>
              </motion.div>

              {/* Centerpiece Heading */}
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-[900] text-[#0B1F4D] tracking-tight leading-[1.1] mb-8 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="drop-shadow-sm">The Pillars of </span>
                <motion.span 
                  className="bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-sm inline-block pb-2"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Medinet
                </motion.span>
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#0D9488] to-transparent mx-auto mb-10 origin-center"
              ></motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-[#475569] text-base md:text-[1.1rem] leading-[1.8] max-w-2xl mx-auto"
              >
                Our organizational culture is guided by clear, unyielding{" "}
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>Ethics</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0D9488] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#0D9488]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                </span>{" "}
                that dictate how we conduct business, evaluate{" "}
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>Scientific Formulations</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0D9488] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#0D9488]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                </span>
                , and interact with{" "}
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>Healthcare Practitioners</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0D9488] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#0D9488]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                </span>
                .
              </motion.div>
            </div>
          </div>

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
          {/* Custom Section Header: Executive Leadership */}
          <div className="relative mt-8 mb-20 rounded-3xl overflow-hidden py-16 px-4">
            {/* Soft radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_50%)] pointer-events-none -z-10"></div>
            
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(11,31,77,0.02)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
              
              <motion.div 
                animate={{ y: [0, -15, 0], opacity: [0.01, 0.03, 0.01] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[15%]"
              >
                <FlaskConical className="w-32 h-32 text-[#0B1F4D]" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.01, 0.03, 0.01] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] left-[15%]"
              >
                <Brain className="w-40 h-40 text-[#2563EB]" />
              </motion.div>
              
              {/* Floating glowing blobs */}
              <motion.div animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-[#2563EB]/5 rounded-full blur-[60px]"></motion.div>
              <motion.div animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-[#38BDF8]/5 rounded-full blur-[60px]"></motion.div>

              {/* Floating medical particles */}
              <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-[#0D9488] blur-[1px]"></motion.div>
              <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-[30%] left-[20%] w-3 h-3 rounded-full bg-[#38BDF8] blur-[1px]"></motion.div>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
              {/* Premium Glassmorphism Pill */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-[#0D9488]/20 shadow-[0_4px_15px_rgba(5,150,105,0.06)] mb-8 hover:border-[#0D9488]/40 transition-colors duration-300 cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#0B1F4D] uppercase">
                  EXECUTIVE LEADERSHIP
                </span>
              </motion.div>

              {/* Centerpiece Heading */}
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-[900] text-[#0B1F4D] tracking-tight leading-[1.15] mb-8 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                  hidden: {}
                }}
              >
                {/* Glowing text shadow */}
                <div className="absolute inset-0 bg-[#0B1F4D]/5 blur-[20px] rounded-full z-[-1] pointer-events-none"></div>
                
                {["Guiding", "Our", "Scientific", "Vision"].map((word, index) => {
                  const isHighlight = word === "Scientific" || word === "Vision";
                  return (
                    <motion.span 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                      }}
                      className={isHighlight 
                        ? "bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-sm inline-block mr-3 lg:mr-4 last:mr-0 pb-2" 
                        : "drop-shadow-sm inline-block mr-3 lg:mr-4 last:mr-0 pb-2"}
                    >
                      {isHighlight ? (
                        <motion.span
                          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                          style={{ backgroundSize: "200% auto" }}
                        >
                          {word}
                        </motion.span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  );
                })}
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#0D9488] to-transparent mx-auto mb-10 origin-center"
              ></motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="text-[#475569] text-base md:text-[1.1rem] leading-[1.8] max-w-2xl mx-auto"
              >
                {/* Intro to leadership text added from PDF */}
                The leadership team at Medinet Pharmaceutical Marketing Company brings together expertise in pharmaceutical marketing, healthcare management, business strategy, and organizational development. United by a shared vision of improving healthcare, our leaders are committed to building a trusted organization that prioritizes patient care, ethical practices, quality excellence, and customer satisfaction. They foster a culture of innovation, collaboration, accountability, and continuous improvement, empowering every team member to contribute to our mission of delivering reliable healthcare solutions.
              </motion.div>
            </div>
          </div>

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

      {/* Message from the CEO & Founder */}
      <section className="py-24 bg-gradient-to-b from-background via-alt-bg to-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="utility-card p-0 overflow-hidden shadow-lg border border-border/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <motion.div 
                variants={fadeLeft}
                className="lg:col-span-5 relative min-h-[400px] lg:min-h-full bg-slate-100"
              >
                <Image
                  src={LEADERSHIP[0].image}
                  alt={LEADERSHIP[0].name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                variants={fadeRight}
                className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <span className="font-serif text-3xl text-primary mt-3">&ldquo;</span>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-heading mb-2">Message from the CEO &amp; Founder</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mb-8"></div>
                
                <p className="text-body text-base lg:text-lg leading-relaxed italic mb-8">
                  &ldquo;{BRAND_INFO.ceoMessage}&rdquo;
                </p>
                
                {/* Custom Founder Information Typography */}
                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-10 mt-4 w-full">
                  {/* Premium Gradient Divider */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#0B1F4D]/15 via-[#0D9488]/30 to-transparent origin-left"
                  ></motion.div>
                  
                  {/* Background Accents & Glow */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 rounded-xl">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_60%)]"></div>
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], opacity: [0.01, 0.03, 0.01] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-[2%] top-[10%]"
                    >
                      <Brain className="w-24 h-24 text-[#0D9488]" />
                    </motion.div>
                    <div className="absolute top-0 right-0 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-[#0D9488]/20 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-[#2563EB]/20 rounded-bl-xl"></div>
                  </div>

                  <div className="flex flex-col relative z-10 w-full px-2 py-2">
                    {/* Name */}
                    <motion.h4 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="font-display font-[900] text-3xl md:text-4xl tracking-tight leading-tight mb-3 bg-gradient-to-r from-[#0B1F4D] to-[#475569] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(11,31,77,0.08)]"
                    >
                      {LEADERSHIP[0].name}
                    </motion.h4>
                    
                    {/* Designation */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="mb-5 inline-block w-fit"
                    >
                      <motion.p 
                        className="text-[11px] sm:text-xs font-mono font-bold text-[#0D9488] uppercase tracking-[0.25em] mb-1.5"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Founder &amp; Chief Executive Officer
                      </motion.p>
                      <div className="w-16 h-[2px] bg-gradient-to-r from-[#0D9488] to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      className="group cursor-default inline-block w-fit relative"
                    >
                      <p className="text-xs sm:text-[13px] font-semibold text-[#475569] tracking-[0.2em] uppercase">
                        Reliable Care,{" "}
                        <span className="bg-gradient-to-r from-[#0B1F4D] via-[#0D9488] to-[#38BDF8] bg-clip-text text-transparent">
                          Every Time.
                        </span>
                      </p>
                      <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-[#0D9488]/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-border relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.05),transparent_40%)]"></div>
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-bold tracking-widest uppercase mb-6">
                <Target className="w-3.5 h-3.5" />
                Corporate Philosophy
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15] mb-8">
                Every medicine we market represents a commitment to a healthier life.
              </h2>
              
              <div className="space-y-6 text-body text-base leading-relaxed">
                <p>
                  Our philosophy is built on four enduring principles: <strong>Quality, Trust, Affordability, and Compassion</strong>. We are committed to supporting healthcare professionals with dependable pharmaceutical solutions while ensuring patients have access to safe, effective, and affordable medicines.
                </p>
                <p>
                  Through ethical business practices, continuous innovation, responsible partnerships, and an unwavering focus on customer satisfaction, we strive to make a meaningful contribution to healthcare. Every interaction, every product, and every decision reflects our promise to deliver excellence with integrity.
                </p>
                <p className="font-semibold text-heading/90 italic border-l-4 border-secondary/50 pl-4">
                  Because for us, healthcare is not just about medicines—it is about caring for people, supporting better outcomes, and building healthier communities.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="order-1 lg:order-2 relative"
            >
              {/* Abstract Philosophy Visual */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"></div>
                
                <div className="absolute inset-4 rounded-full border border-border/60 shadow-xl overflow-hidden bg-white/50 backdrop-blur-sm flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-6 w-full h-full relative">
                    <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-50 group hover:-translate-y-1 transition-transform">
                      <ShieldCheck className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm text-heading">Quality</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-50 group hover:-translate-y-1 transition-transform">
                      <Handshake className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm text-heading">Trust</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-50 group hover:-translate-y-1 transition-transform">
                      <TrendingUp className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm text-heading">Affordability</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-50 group hover:-translate-y-1 transition-transform">
                      <Heart className="w-8 h-8 text-pink-500 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-sm text-heading">Compassion</span>
                    </div>
                    
                    {/* Connecting center node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <HeartHandshake className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-12 md:py-14 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Corporate Timeline"
            title="Our Path of Progress"
            description="Review the critical milestones that defined our transition from a local marketer to a globally trusted pharmaceutical exporter."
            centered
          />

          <div className="relative max-w-4xl mx-auto mt-10 md:mt-12">
            {/* Center spine on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-secondary/30 to-border opacity-80 -translate-x-1/2"></div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 md:space-y-8">
              {timelineMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const timelineIcons = [Rocket, Building2, Globe, Factory, Brain, Award];
                const Icon = timelineIcons[idx];

                return (
                  <motion.div
                    variants={fadeUp}
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 group ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Left/Right content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className="relative bg-white/70 backdrop-blur-xl p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(13,148,136,0.12)] hover:border-[#0D9488]/30 hover:-translate-y-[6px] transition-all duration-300 overflow-hidden cursor-default">
                        {/* Thin animated top gradient strip */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative shrink-0">
                            {/* Glow behind icon */}
                            <div className="absolute inset-0 bg-[#0D9488]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-150 transition-opacity duration-300 z-0"></div>
                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-[1.08] group-hover:border-[#0D9488]/30 transition-all duration-300 z-10">
                              <Icon className="w-5 h-5 text-[#0B1F4D] group-hover:text-secondary transition-colors duration-300" />
                            </div>
                          </div>
                          <span className="inline-block text-2xl font-display font-[900] bg-gradient-to-r from-[#0B1F4D] to-[#0D9488] bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="font-display font-extrabold text-[#0B1F4D] text-lg mb-2 tracking-wide">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-[1.6]">
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

