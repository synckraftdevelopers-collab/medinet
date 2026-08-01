/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  Handshake,
  TrendingUp,
  Boxes,
  Briefcase,
  FileCheck,
  CheckCircle,
  Clock,
  MapPin,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  Globe,
  Globe2,
  Users,
  BadgeCheck,
  Award,
  Factory,
  Building2,
  ArrowRight,
  BookOpen,
  MapPinned,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  ActivitySquare,
  Cross,
  Syringe,
  Microscope,
  Pill,
  Rocket,
  HeartHandshake
} from "lucide-react";

interface BusinessPartnersProps {
  showToast: (message: string, type: "success" | "error") => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function BusinessPartners({ showToast }: BusinessPartnersProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnerType: "Distributor", // Distributor, Stockist, Franchise Partner, Hospital, Third Party Manufacturing, Other
    state: "",
    city: "",
    productsInterested: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const verticals = [
    {
      title: "Franchise Opportunities (PCD Pharma)",
      description: "Medinet offers extensive support for PCD (Propaganda Cum Distribution) franchise partners, including exclusive territorial rights, promotional materials, and continuous product training.",
      icon: Handshake,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      accent: "bg-primary",
      badge: "PCD",
      badgeColor: "text-primary bg-primary/5 border-primary/20"
    },
    {
      title: "Third-Party Manufacturing",
      description: "Leveraging our state-of-the-art facilities, we provide reliable, high-volume contract manufacturing for domestic and international pharmaceutical companies.",
      icon: Factory,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      accent: "bg-accent",
      badge: "WHO-GMP",
      badgeColor: "text-accent bg-accent/5 border-accent/20"
    },
    {
      title: "Institutional & Government Business",
      description: "We are an approved vendor for various government hospitals and institutional health programs, ensuring a consistent supply of essential medicines at accessible prices.",
      icon: Building2,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      accent: "bg-secondary",
      badge: "B2B",
      badgeColor: "text-secondary bg-secondary/5 border-secondary/20"
    },
    {
      title: "Global Export Partnerships",
      description: "With a growing presence in unregulated and semi-regulated markets, we actively seek distribution partners across Southeast Asia, Africa, and Latin America.",
      icon: Globe2,
      iconBg: "bg-[#7C3AED]/10",
      iconColor: "text-[#7C3AED]",
      accent: "bg-[#7C3AED]",
      badge: "GLOBAL",
      badgeColor: "text-[#7C3AED] bg-[#7C3AED]/5 border-[#7C3AED]/20"
    }
  ];

  const PARTNER_LOGOS = [
    { name: "Global Pharma", icon: ActivitySquare },
    { name: "EuroMed Alliance", icon: Cross },
    { name: "MediTech Supplies", icon: Microscope },
    { name: "HealthCare Plus", icon: Stethoscope },
    { name: "BioGen Research", icon: Syringe },
    { name: "Lifeline Formulations", icon: Pill }
  ];

  const validatePartnerField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return !value.trim() ? "Full name is required" : "";
      case "email":
        return !value.trim() ? "Business email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid business email" : "";
      case "phone":
        return !value.trim() ? "Phone / Whatsapp is required" : !/^\+?[0-9\s-\(\)\.]{7,15}$/.test(value) ? "Please enter a valid phone number" : "";
      case "company":
        return !value.trim() ? "Organization name is required" : "";
      case "state":
        return !value.trim() ? "State is required" : "";
      case "city":
        return !value.trim() ? "City is required" : "";
      case "productsInterested":
        return !value.trim() ? "Products / Services are required" : "";
      case "message":
        return !value.trim() ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handlePartnerFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const err = validatePartnerField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handlePartnerFieldBlur = (field: string, value: string) => {
    if (value.trim() || errors[field]) {
      const err = validatePartnerField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {
      name: validatePartnerField("name", formData.name),
      email: validatePartnerField("email", formData.email),
      phone: validatePartnerField("phone", formData.phone),
      company: validatePartnerField("company", formData.company),
      state: validatePartnerField("state", formData.state),
      city: validatePartnerField("city", formData.city),
      productsInterested: validatePartnerField("productsInterested", formData.productsInterested),
      message: validatePartnerField("message", formData.message),
    };

    const activeErrors = Object.fromEntries(Object.entries(errs).filter(([_, v]) => v !== ""));
    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fill all required fields correctly.", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      showToast("Partnership proposal submitted successfully! Our commercial alliances head will contact you.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        state: "",
        city: "",
        productsInterested: "",
        partnerType: "Distributor",
        message: ""
      });
    }, 1200);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#EEF6FF] to-[#E8F8F7]">
        <motion.div variants={fadeUp} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(37,99,235,0.06)] mb-8 relative z-10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated border glow (inset shadow overlay) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
              
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#2563EB] opacity-50 animate-ping"></span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] relative z-10" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0A192F] uppercase relative z-10">B2B Commercial Alliances</span>
            </motion.div>
          </div>

          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-display font-extrabold tracking-tight leading-[1.1] mt-2 mx-auto lg:mx-0 relative inline-block pb-5 text-[#0F172A]"
            >
              <span className="text-[#0A192F]">Corporate Partnerships</span> <br className="hidden lg:block"/>
              &amp; <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#2563EB] text-transparent bg-clip-text bg-[length:200%_auto]"
              >PCD Franchise</motion.span>
              
              {/* Thin glowing animated underline */}
              <motion.span 
                initial={{ scaleX: 0, opacity: 0 }} 
                whileInView={{ scaleX: 1, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }} 
                className="absolute bottom-0 left-0 lg:w-[65%] w-full h-[2px] bg-gradient-to-r from-[#2563EB] via-[#10B981] to-transparent origin-left rounded-full shadow-[0_0_12px_rgba(37,99,235,0.5)]"
              />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-base sm:text-[1.1rem] text-[#334155] leading-relaxed max-w-[700px] mx-auto lg:mx-0"
            >
              Leverage Medinet&rsquo;s global supply channels, multi-segment formulation portfolio, and thorough regulatory compliance to expand your pharmaceutical market presence.
            </motion.p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-5 relative z-10"
          >
            {[
              { icon: ShieldCheck, text: "WHO-GMP Certified" },
              { icon: Globe2, text: "18+ Countries" },
              { icon: Users, text: "450+ Distributors" },
              { icon: Award, text: "25+ Years Experience" }
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="group relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-[#2563EB]/10 rounded-full px-5 py-3 hover:-translate-y-[5px] hover:scale-[1.04] hover:shadow-[0_15px_30px_rgba(37,99,235,0.12)] transition-all duration-500 ease-out cursor-default overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
                
                <div className="bg-[#EEF6FF] rounded-full p-1.5 group-hover:bg-[#2563EB]/10 transition-colors duration-300">
                  <badge.icon className="w-[18px] h-[18px] text-[#2563EB] group-hover:rotate-[8deg] transition-transform duration-300" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] sm:text-[14.5px] font-semibold text-[#0F172A] relative z-10">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Business Verticals Overview */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#EEF7FF_0%,#F8FBFF_30%,#E8FDF6_70%,#F7FFFC_100%)] text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div variants={fadeUp} className="flex flex-col items-center mb-16">
            {/* Glassmorphism Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative group inline-flex rounded-full p-[1.5px] mb-8 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#16A34A] bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] opacity-70 group-hover:opacity-100 blur-[2px] group-hover:blur-[4px] transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#16A34A] bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]"></div>
              
              <div className="relative bg-white/70 backdrop-blur-xl rounded-full px-6 py-2.5 flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0A192F] uppercase">Business Channels</span>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] relative inline-block pb-4 text-[#0A192F]"
            >
              Our <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#16A34A] text-transparent bg-clip-text bg-[length:200%_auto]"
              >Partnership</motion.span> Opportunities
              
              {/* Glowing Underline */}
              <motion.span 
                initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent rounded-full shadow-[0_0_15px_rgba(13,148,136,0.6)]"
              />
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-base sm:text-[1.1rem] text-[#334155] leading-relaxed max-w-[700px] mx-auto"
            >
              We coordinate our corporate activities across three specialized verticals, structured to support different commercial requirements.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 text-left">
            {verticals.map((vert, idx) => {
              const VertIcon = vert.icon;
              return (
                <motion.div variants={fadeUp} key={idx} className="relative group flex flex-col h-full">
                  {/* Premium Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8] to-[#16A34A] rounded-[28px] opacity-20 group-hover:opacity-40 transition-all duration-[600ms] blur-[15px] group-hover:-translate-y-2.5 group-hover:scale-[1.03]"></div>
                  
                  {/* Gradient Border Wrapper */}
                  <div className="relative flex-1 flex flex-col bg-gradient-to-br from-[#38BDF8] to-[#16A34A] rounded-[28px] p-[1px] transition-all duration-[600ms] ease-out group-hover:-translate-y-2.5 group-hover:scale-[1.03] group-hover:shadow-[0_25px_50px_rgba(37,99,235,0.15)]">
                    
                    {/* Inner Glass Card */}
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[27px] flex-1 p-8 flex flex-col justify-between">
                      
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          {/* Premium Icon Container */}
                          <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#16A34A] flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(13,148,136,0.3)] group-hover:shadow-[0_12px_25px_rgba(22,163,74,0.4)] transition-all duration-500 overflow-hidden relative">
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <VertIcon strokeWidth={2.5} className="w-6 h-6 text-white relative z-10 group-hover:rotate-[8deg] transition-transform duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                          </div>
                          
                          {/* Glass Badge */}
                          <span className="inline-block bg-white/80 backdrop-blur-md border border-[#1D4ED8]/20 shadow-sm text-[#1D4ED8] text-[10px] font-mono font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                            {vert.badge}
                          </span>
                        </div>
                        
                        <h3 className="font-display font-extrabold text-[#0A192F] text-xl sm:text-2xl leading-tight group-hover:text-[#1D4ED8] transition-colors duration-300">
                          {vert.title}
                        </h3>
                        <p className="mt-5 text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                          {vert.description}
                        </p>
                      </div>
                      


                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#1D4ED8] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex flex-col items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.75] backdrop-blur-lg border border-[#2563EB]/10 shadow-sm mb-6 relative z-10"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#2563EB] opacity-60 animate-ping"></span>
                <MapPin strokeWidth={2.5} className="relative w-4 h-4 text-[#2563EB]" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0A192F] uppercase">Global Reach</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.15] relative z-10 inline-block pb-4"
            >
              <span className="bg-gradient-to-r from-[#0A192F] via-[#2563EB] to-[#1D4ED8] text-transparent bg-clip-text">Distribution Network</span>
              <motion.span 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} 
                className="absolute bottom-0 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent origin-left rounded-full"
              />
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-[#475569] leading-[1.8] text-base sm:text-lg max-w-[750px] relative z-10 mx-auto"
            >
              Medinet Pharmaceutical Marketing Company is building a strong and reliable distribution network to ensure our products reach patients and healthcare professionals efficiently. Our commitment to accessibility drives us to partner with trusted distributors.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 relative max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 text-left">
              
              {/* Left Feature Panel */}
              <div className="flex-1 relative z-10 space-y-4 w-full">
                {[
                  { title: "Nationwide product availability", icon: MapPin, desc: "Ensuring our healthcare solutions are accessible everywhere." },
                  { title: "Reliable and timely supply chain management", icon: Boxes, desc: "Consistent product delivery without delays." },
                  { title: "Strong partnerships with distributors and stockists", icon: Globe, desc: "Building mutually beneficial long-term relationships." },
                  { title: "Efficient order fulfillment and logistics", icon: Rocket, desc: "Fast and secure delivery through optimized supply channels." },
                  { title: "Customer-focused service and support", icon: HeartHandshake, desc: "Dedicated support team for our distribution partners." }
                ].map((item, idx) => (
                  <div key={idx} className="relative bg-white/[0.94] backdrop-blur-xl rounded-[24px] border border-[#1D4ED8]/[0.08] shadow-[0_10px_40px_rgba(29, 78, 216,0.05)] p-5 flex items-start gap-4 group hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29, 78, 216,0.1)] transition-all duration-300 overflow-hidden">
                    {/* Left accent line */}
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#1D4ED8] to-[#10B981] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                    
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D4ED8]/10 to-[#10B981]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#1D4ED8] group-hover:to-[#10B981] transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.1)]">
                      <item.icon strokeWidth={2} className="w-6 h-6 text-[#1D4ED8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-[#0A192F] text-[15px] sm:text-base group-hover:text-[#1D4ED8] transition-colors">{item.title}</h4>
                        <span className="w-2 h-2 shrink-0 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse ml-2"></span>
                      </div>
                      <p className="text-[13px] sm:text-sm text-[#475569] leading-[1.6]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Map Visualization */}
              <div className="flex-1 w-full lg:w-auto relative z-10 h-[450px] flex items-center justify-center bg-white/[0.6] backdrop-blur-xl rounded-[32px] border border-[#2563EB]/10 shadow-[0_20px_60px_rgba(11,31,77,0.08)] p-6 overflow-hidden">
                {/* Central Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-1.5 rounded-full shadow-[0_6px_15px_rgba(37,99,235,0.3)] z-50">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-white">Pan India Distribution</span>
                </div>

                {/* Abstract Stylized Network Map */}
                <div className="relative w-full h-full max-w-[320px] mx-auto">
                  {/* Connection Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 400" preserveAspectRatio="xMidYMid meet">
                    <motion.path d="M 160 180 L 160 70" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}/>
                    <motion.path d="M 160 180 L 80 160" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}/>
                    <motion.path d="M 160 180 L 250 180" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}/>
                    <motion.path d="M 160 180 L 140 320" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}/>
                    <defs>
                      <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Pulsing Hubs */}
                  {[
                    { id: 'north', label: 'North Hub', x: '50%', y: '17.5%' },
                    { id: 'west', label: 'West Hub', x: '25%', y: '40%' },
                    { id: 'east', label: 'East Hub', x: '78%', y: '45%' },
                    { id: 'central', label: 'Central Hub', x: '50%', y: '45%' },
                    { id: 'south', label: 'South Hub', x: '43.75%', y: '80%' },
                  ].map((hub) => (
                    <div key={hub.id} className="absolute flex flex-col items-center group/hub cursor-default" style={{ left: hub.x, top: hub.y, transform: 'translate(-50%, -50%)' }}>
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-10 h-10 rounded-full bg-[#2563EB]/20 animate-ping"></span>
                        <div className="relative w-5 h-5 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.7)] group-hover/hub:scale-125 transition-transform duration-300"></div>
                      </div>
                      <span className="mt-3 text-[11px] font-bold text-[#0A192F] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#2563EB]/10 shadow-sm whitespace-nowrap opacity-90 group-hover/hub:opacity-100 group-hover:-translate-y-1 transition-all duration-300">{hub.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Row */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { value: "450+", label: "Distributors" },
                { value: "28", label: "States Covered" },
                { value: "1000+", label: "Healthcare Partners" },
                { value: "24/7", label: "Logistics Support" },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white/[0.94] backdrop-blur-xl rounded-[24px] border border-[#2563EB]/[0.08] shadow-[0_20px_60px_rgba(11,31,77,0.08)] p-6 sm:p-8 text-center hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(11,31,77,0.12)] transition-all duration-500">
                  <h4 className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-transparent bg-clip-text mb-3">{stat.value}</h4>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0A192F] uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-full px-8 py-4 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 group"
              >
                Become a Distribution Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Alliances Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-background via-alt-bg to-white relative overflow-hidden border-t border-b border-border">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start overflow-hidden">
            <motion.div variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 text-left pt-2">
              <span className="utility-badge-blue mb-5">
                <span className="utility-dot"></span>
                Why Partner With Us?
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-heading tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-heading to-primary text-transparent bg-clip-text">Advance Healthcare</span> <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">With Confidence</span>
              </h2>
              <p className="mt-5 text-body leading-relaxed text-sm sm:text-base">
                Choosing Medinet means partnering with a company that values quality, integrity, innovation, and long-term relationships. Together, let's advance healthcare with confidence—because at Medinet, it's &ldquo;Reliable Care, Every Time.&rdquo;
              </p>

              <div className="mt-8 space-y-5 text-sm text-body">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="mt-2 font-bold text-heading">Monopoly Distribution Rights</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 shadow-sm">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <span className="mt-2 font-bold text-heading">Medical Literature & Samples</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPinned className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="mt-2 font-bold text-heading">Territory Protection</span>
                </div>
              </div>
            </motion.div>

            {/* B2B Proposal Enquiry Form */}
            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4 pl-2">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-primary/20">
                  <ShieldCheck className="w-3 h-3" /> Verified Partner
                </span>
                <span className="inline-flex items-center gap-1.5 bg-success/10 text-success text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-success/20">
                  <BadgeCheck className="w-3 h-3" /> WHO-GMP
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-secondary/20">
                  <Globe className="w-3 h-3" /> Global Distribution
                </span>
              </div>
              
              <div id="enquiry-form" className="utility-card p-6 sm:p-8 text-left group/form relative border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover/form:scale-110 transition-transform duration-300">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pb-3 border-b-2 border-border relative">
                    {/* Animated gradient bottom border on hover */}
                    <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover/form:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <h3 className="font-display font-bold text-heading text-lg sm:text-xl">Partner Proposal Form</h3>
                    <p className="text-xs text-muted font-mono font-semibold uppercase tracking-wider mt-1">Establish a robust corporate connection</p>
                  </div>
                </div>

                {formSuccess ? (
                  <div className="p-10 bg-green-50/50 border border-green-200 rounded-card text-center space-y-4 my-6 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-300">
                      <CheckCircle2 className="w-9 h-9 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-heading">Proposal Submitted Successfully!</h3>
                    <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                      Thank you for your interest in partnering with MediNet. Our commercial alliances head will review your company credentials and reach out within 24–48 business hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setFormSuccess(false)}
                        className="utility-button-primary px-8 py-3 h-12"
                      >
                        SUBMIT ANOTHER PROPOSAL
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                      {/* Name */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-name" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-name"
                          type="text"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handlePartnerFieldChange("name", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("name", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "prt-name-err" : undefined}
                        />
                        {errors.name && (
                          <span id="prt-name-err" className="absolute left-0 bottom-0 text-[11px] text-red-500 font-mono font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-email" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Business Email <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-email"
                          type="email"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="email"
                          placeholder="corporate@example.com"
                          value={formData.email}
                          onChange={(e) => handlePartnerFieldChange("email", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("email", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "prt-email-err" : undefined}
                        />
                        {errors.email && (
                          <span id="prt-email-err" className="absolute left-0 bottom-0 text-[11px] text-red-500 font-mono font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-phone" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Phone / Whatsapp <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-phone"
                          type="tel"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => handlePartnerFieldChange("phone", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("phone", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "prt-phone-err" : undefined}
                        />
                        {errors.phone && (
                          <span id="prt-phone-err" className="absolute left-0 bottom-0 text-[11px] text-red-500 font-mono font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Alliance Type Dropdown */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-type" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Partnership Type</label>
                        <div className="relative">
                          <select
                            id="partner-type"
                            disabled={submitting}
                            value={formData.partnerType}
                            onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                            className="utility-input h-12 appearance-none pr-10 bg-white"
                          >
                            <option value="Distributor">Distributor</option>
                            <option value="Stockist">Stockist</option>
                            <option value="Franchise Partner">Franchise Partner</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Third Party Manufacturing">Third Party Manufacturing</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-company" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Company Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-company"
                          type="text"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="organization"
                          placeholder="Your Organization"
                          value={formData.company}
                          onChange={(e) => handlePartnerFieldChange("company", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("company", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.company ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? "prt-comp-err" : undefined}
                        />
                        {errors.company && (
                          <span id="prt-comp-err" className="absolute left-0 bottom-0 text-[11px] text-red-500 font-mono font-medium flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.company}
                          </span>
                        )}
                      </div>

                      {/* State */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-state" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">State <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-state"
                          type="text"
                          required
                          disabled={submitting}
                          value={formData.state}
                          onChange={(e) => handlePartnerFieldChange("state", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("state", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.state ? "border-red-500 focus:border-red-500" : ""}`}
                          placeholder="e.g. Maharashtra"
                        />
                      </div>

                      {/* City */}
                      <div className="relative pb-6">
                        <label htmlFor="partner-city" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">City <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-city"
                          type="text"
                          required
                          disabled={submitting}
                          value={formData.city}
                          onChange={(e) => handlePartnerFieldChange("city", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("city", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.city ? "border-red-500 focus:border-red-500" : ""}`}
                          placeholder="e.g. Mumbai"
                        />
                      </div>

                      {/* Products / Services Interested */}
                      <div className="relative pb-6 sm:col-span-2">
                        <label htmlFor="partner-products" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Products / Services Interested <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input
                          id="partner-products"
                          type="text"
                          required
                          disabled={submitting}
                          value={formData.productsInterested}
                          onChange={(e) => handlePartnerFieldChange("productsInterested", e.target.value)}
                          onBlur={(e) => handlePartnerFieldBlur("productsInterested", e.target.value)}
                          className={`utility-input h-12 placeholder:text-slate-400 ${errors.productsInterested ? "border-red-500 focus:border-red-500" : ""}`}
                          placeholder="e.g. Anti-Infectives, Third-Party Manufacturing"
                        />
                      </div>
                    </div>

                    {/* Textarea */}
                    <div className="relative pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="partner-message" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                        <span className={`text-[10px] font-mono ${formData.message.length > 900 ? "text-amber-500 font-bold" : "text-muted"}`}>
                          {formData.message.length}/1000 chars
                        </span>
                      </div>
                      <textarea
                        id="partner-message"
                        required
                        disabled={submitting}
                        rows={5}
                        maxLength={1000}
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={(e) => handlePartnerFieldChange("message", e.target.value)}
                        onBlur={(e) => handlePartnerFieldBlur("message", e.target.value)}
                        className={`utility-input resize-y placeholder:text-slate-400 min-h-[120px] ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full utility-button-primary h-[52px] text-sm font-bold flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting Proposal...
                        </>
                      ) : (
                        <>
                          Submit Partnership Enquiry
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
