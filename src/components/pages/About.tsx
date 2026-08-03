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
      accent: "border-t-blue-500"
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

      {/* Company Profile Section */}
      <section className="py-20 bg-white border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent_50%)] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-primary uppercase">
                  Company Profile
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.2] mb-6">
                Who <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We Are</span>
              </h2>
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-transparent mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-[#0A192F] font-bold">Medinet Pharmaceutical Marketing Company</strong> is a quality-driven pharmaceutical marketing organization committed to improving lives by making safe, effective, and affordable medicines accessible to patients across India.
                </p>
                <p>
                  We work closely with trusted manufacturing partners and healthcare professionals to deliver pharmaceutical products that meet stringent quality standards while addressing the evolving healthcare needs of society. Our commitment extends beyond marketing medicines—we strive to support better patient care through ethical practices, reliable service, and lasting partnerships.
                </p>
                <p>
                  Driven by innovation, integrity, and customer satisfaction, Medinet continues to build trust among doctors, distributors, pharmacies, hospitals, and patients by consistently delivering healthcare solutions that improve treatment outcomes and enhance quality of life.
                </p>
                <p className="font-semibold text-primary italic pt-4 border-t border-slate-100">
                  "Reliable Care, Everytime" is not just our tagline—it is the promise that guides every product we offer and every relationship we build.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(29,78,216,0.1)] border border-slate-100">
                <div className="absolute inset-0 bg-primary/5 z-10 mix-blend-multiply pointer-events-none"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=1000"
                  alt="Medinet Company Profile"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-slate-50 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(29,78,216,0.1)] border border-slate-200">
                <div className="absolute inset-0 bg-secondary/10 z-10 mix-blend-multiply pointer-events-none"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                  alt="Medinet Journey"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-secondary uppercase">
                  Our History
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.2] mb-6">
                Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Journey</span>
              </h2>
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-secondary to-transparent mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Medinet Pharmaceutical Marketing Company was established with a simple yet meaningful vision—to make quality healthcare more accessible and affordable while maintaining the highest standards of ethics and professionalism. 
                </p>
                <p>
                  What began as a commitment to supporting healthcare professionals has evolved into a growing pharmaceutical marketing company focused on delivering trusted healthcare solutions. Through dedication, continuous learning, and customer-centric service, we have steadily expanded our product portfolio and strengthened our presence in the pharmaceutical industry.
                </p>
                <p>
                  As we move forward, our journey continues to be driven by innovation, quality, patient wellbeing, and the trust of our healthcare partners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-primary uppercase">
                  Our Purpose
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0A192F] tracking-tight leading-[1.2] mb-6">
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mission</span>
              </h2>
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-transparent mb-8"></div>
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                We are driven by a steadfast commitment to improve patient health and well-being through innovative, accessible, and high-quality healthcare solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:w-2/3"
            >
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Deliver safe, effective, and affordable pharmaceutical solutions that improve patient health and well-being.",
                  "Advance healthcare through continuous research, innovation, and scientific excellence.",
                  "Maintain the highest standards of quality, safety, and regulatory compliance across all operations.",
                  "Uphold integrity, transparency, and ethical business practices in everything we do.",
                  "Foster a culture of continuous learning, innovation, and rewarding career growth for our employees.",
                  "Build trusted partnerships with healthcare professionals, distributors, and stakeholders to enhance patient care.",
                  "Embrace advanced technologies and sustainable practices to drive long-term growth and operational excellence.",
                  "Create lasting value for patients, healthcare professionals, employees, and communities through responsible and innovative healthcare solutions."
                ].map((point, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[15px] md:text-base font-medium">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Custom Section Header: The Pillars of Medinet */}
          <div className="relative mt-0 mb-16 rounded-3xl overflow-hidden py-16 px-4">
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
                <Brain className="w-40 h-40 text-[#1D4ED8]" />
              </motion.div>
              
              {/* Quotation-style graphic */}
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[180px] font-display font-black text-[#0A192F] opacity-[0.03] leading-none pointer-events-none rotate-12 select-none">
                &ldquo;
              </div>
              
              {/* Floating glowing blobs */}
              <div className="absolute top-1/4 left-1/3 w-[200px] h-[200px] bg-[#38BDF8]/5 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] bg-[#1D4ED8]/5 rounded-full blur-[60px]"></div>

              {/* Floating medical particles */}
              <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-[#1D4ED8] blur-[1px]"></motion.div>
              <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-[40%] left-[30%] w-3 h-3 rounded-full bg-[#38BDF8] blur-[1px]"></motion.div>
            </div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
              {/* Premium Glassmorphism Pill */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-[0_4px_15px_rgba(29, 78, 216,0.06)] mb-8 hover:border-[#1D4ED8]/30 transition-colors duration-300 cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D4ED8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D4ED8]"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#0A192F] uppercase">
                  CORE VALUES
                </span>
              </motion.div>

              {/* Centerpiece Heading */}
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-[900] text-[#0A192F] tracking-tight leading-[1.1] mb-8 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="drop-shadow-sm">The Pillars of </span>
                <motion.span 
                  className="bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-sm inline-block pb-2"
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
                className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent mx-auto mb-10 origin-center"
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
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>Ethics</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#1D4ED8]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                </span>{" "}
                that dictate how we conduct business, evaluate{" "}
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>Scientific Formulations</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#1D4ED8]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                </span>
                , and interact with{" "}
                <span className="relative inline-block font-medium bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent group cursor-default">
                  <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>Healthcare Practitioners</motion.span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute inset-0 bg-[#1D4ED8]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
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
                    className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#0A192F]/15 via-[#1D4ED8]/30 to-transparent origin-left"
                  ></motion.div>
                  
                  {/* Background Accents & Glow */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 rounded-xl">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_60%)]"></div>
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], opacity: [0.01, 0.03, 0.01] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-[2%] top-[10%]"
                    >
                      <Brain className="w-24 h-24 text-[#1D4ED8]" />
                    </motion.div>
                    <div className="absolute top-0 right-0 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-[#1D4ED8]/20 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-[#2563EB]/20 rounded-bl-xl"></div>
                  </div>

                  <div className="flex flex-col relative z-10 w-full px-2 py-2">
                    {/* Name */}
                    <motion.h4 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="font-display font-[900] text-3xl md:text-4xl tracking-tight leading-tight mb-3 bg-gradient-to-r from-[#0A192F] to-[#475569] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(11,31,77,0.08)]"
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
                        className="text-[11px] sm:text-xs font-mono font-bold text-[#1D4ED8] uppercase tracking-[0.25em] mb-1.5"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Founder &amp; Chief Executive Officer
                      </motion.p>
                      <div className="w-16 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-transparent rounded-full"></div>
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
                        <span className="bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent">
                          Every Time.
                        </span>
                      </p>
                      <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-[#1D4ED8]/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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
                      <TrendingUp className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
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


    </motion.div>
  );
}

