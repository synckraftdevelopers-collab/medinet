/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
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
  Users,
  BadgeCheck,
  Factory,
  Building2,
  ArrowRight,
  BookOpen,
  MapPinned
} from "lucide-react";

interface BusinessPartnersProps {
  showToast: (message: string, type: "success" | "error") => void;
}

export default function BusinessPartners({ showToast }: BusinessPartnersProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    partnerType: "franchise", // franchise, manufacturing, institutional, distributor
    experience: "1-3years",
    investment: "5-10lakhs",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const verticals = [
    {
      title: "PCD Franchise & Monopolistic Distribution",
      description: "Medinet offers exclusive monopolistic distribution and Propaganda Cum Distribution (PCD) rights in unoccupied territories. We back our partners with full medical visual aids, clinical literature, doctor samples, and scientific journals to capture regional markets.",
      icon: Handshake,
      iconBg: "bg-[linear-gradient(135deg,#DBEAFE,#EFF6FF)]",
      iconColor: "text-[#2563EB]",
      accent: "bg-[#2563EB]",
      badge: "PCD",
      badgeColor: "text-[#2563EB] bg-[#EFF6FF] border-[#BFDBFE]"
    },
    {
      title: "Third-Party Contract Manufacturing",
      description: "Partner with our state-of-the-art, allied WHO-GMP, EU-GMP, and USFDA approved contract formulation plants. We manage full technology transfer, formulation scaling, raw materials tracing, stability tests, and final packaging.",
      icon: Factory,
      iconBg: "bg-[linear-gradient(135deg,#DCFCE7,#F0FDF4)]",
      iconColor: "text-[#0D9488]",
      accent: "bg-[#0D9488]",
      badge: "WHO-GMP",
      badgeColor: "text-[#0D9488] bg-[#F0FDF4] border-[#A7F3D0]"
    },
    {
      title: "Institutional Supplies Business",
      description: "We are authorized registered suppliers to major health departments, public sector undertakings, railways, defence hospitals, and extensive medical chains. We handle bulk production requirements under rigid scheduling.",
      icon: Building2,
      iconBg: "bg-[linear-gradient(135deg,#FEF3C7,#FFF8E1)]",
      iconColor: "text-[#D97706]",
      accent: "bg-[#38BDF8]",
      badge: "B2B",
      badgeColor: "text-[#D97706] bg-[#FFF8E1] border-[#FDE68A]"
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errs.email = "Invalid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.company.trim()) errs.company = "Company name is required";
    if (!formData.country.trim()) errs.country = "Country is required";
    if (!formData.message.trim()) errs.message = "Please describe your proposal or target market";

    setErrors(errs);
    return Object.keys(errs).length === 0;
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
      showToast("Partnership proposal submitted successfully! Our commercial alliances head will contact you.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        partnerType: "franchise",
        experience: "1-3years",
        investment: "5-10lakhs",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F2F7FD_55%,#FFFFFF_100%)] border-b border-[#DBEAFE] py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,.08),transparent_65%)] pointer-events-none z-0"></div>
        
        {/* Soft medical abstract decoration (opacity 5%) */}
        <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none opacity-5 z-0 hidden lg:block">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-[120%] h-auto max-w-[600px]">
            <path d="M120 40 C 20 40 20 200 120 200 C 220 200 220 360 120 360" stroke="url(#paint0_linear)" strokeWidth="60" strokeLinecap="round" />
            <path d="M280 40 C 380 40 380 200 280 200 C 180 200 180 360 280 360" stroke="url(#paint1_linear)" strokeWidth="60" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="120" y1="40" x2="120" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="280" y1="40" x2="280" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_20px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              B2B Commercial Alliances
            </span>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Corporate Partnerships</span> & <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">PCD Franchise</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-[#475569] leading-[1.9] max-w-[720px]">
              Leverage Medinet&rsquo;s global supply channels, multi-segment formulation portfolio, and thorough regulatory compliance to expand your pharmaceutical market presence.
            </p>
          </div>

          <div className="mt-10 animate-fade-in cursor-default">
            <div className="inline-flex flex-wrap items-center gap-4 sm:gap-6 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] shadow-[0_12px_35px_rgba(15,23,42,.06)] px-5 py-3.5 sm:px-6 sm:py-4 hover:-translate-y-1 transition-transform duration-[300ms]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#475569]">WHO-GMP Certified</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#475569]">18+ Countries</span>
              </div>
              <div className="hidden md:block w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#475569]">450+ Distributors</span>
              </div>
              <div className="hidden lg:block w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="flex items-center gap-2.5">
                <BadgeCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#475569]">25+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals Overview */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC,#F4F8FC,#FFFFFF)] relative overflow-hidden text-left">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_20px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Business Channels
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              Our <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Partnership</span> <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Opportunities</span>
            </h2>
            
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[760px] mx-auto">
              We coordinate our corporate activities across three specialized verticals, structured to support different commercial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {verticals.map((vert, idx) => {
              const VertIcon = vert.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 sm:p-8 rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.08)] hover:-translate-y-[8px] hover:border-[#93C5FD] hover:shadow-[0_28px_65px_rgba(37,99,235,.14)] transition-all duration-[350ms] text-left flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${vert.accent}`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-[52px] h-[52px] rounded-2xl ${vert.iconBg} flex items-center justify-center shrink-0`}>
                        <VertIcon className={`w-6 h-6 ${vert.iconColor} group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out`} />
                      </div>
                      <span className={`inline-block border ${vert.badgeColor} text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full`}>
                        {vert.badge}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-[700] text-[#0F172A] text-base">
                      {vert.title}
                    </h3>
                    <p className="mt-4 text-xs text-[#475569] leading-[1.8]">
                      {vert.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors relative cursor-pointer overflow-hidden pb-1">
                    <span className="relative inline-block">
                      Enquire About This Channel
                      {/* Underline animation */}
                      <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#1D4ED8] group-hover:w-full transition-all duration-[300ms] ease-out"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-[6px] transition-transform duration-[300ms] ease-out" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Alliances Benefits Grid */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC,#F3F7FC,#FFFFFF)] relative overflow-hidden border-t border-b border-[#E2E8F0]">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 text-left pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                Why Partner With Us?
              </span>
              <h2 className="text-3xl sm:text-[32px] font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Outstanding Support Systems</span> for <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">PCD and Distributors</span>
              </h2>
              <p className="mt-5 text-[#475569] leading-[1.8] text-sm sm:text-base">
                We do not just supply formulations—we build regional market leaders. Medinet serves as a single-point backup for your therapeutic scaling requirements.
              </p>

              <div className="mt-8 space-y-5 text-sm text-[#475569]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[9px] bg-[#DBEAFE] flex items-center justify-center shrink-0 shadow-[0_8px_18px_rgba(37,99,235,.10)]">
                    <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <span className="mt-1.5 font-medium text-[#0F172A]">Monopoly Distribution Rights</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[9px] bg-[#DCFCE7] flex items-center justify-center shrink-0 shadow-[0_8px_18px_rgba(37,99,235,.10)]">
                    <BookOpen className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <span className="mt-1.5 font-medium text-[#0F172A]">Medical Literature & Samples</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[9px] bg-[#FEF3C7] flex items-center justify-center shrink-0 shadow-[0_8px_18px_rgba(37,99,235,.10)]">
                    <MapPinned className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <span className="mt-1.5 font-medium text-[#0F172A]">Territory Protection</span>
                </div>
              </div>
            </div>

            {/* B2B Proposal Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4 pl-2">
                <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#2563EB] text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                  <ShieldCheck className="w-3 h-3" /> Verified Partner
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#16A34A] text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                  <BadgeCheck className="w-3 h-3" /> WHO-GMP
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0284C7] text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border border-[#BAE6FD]">
                  <Globe className="w-3 h-3" /> Global Distribution
                </span>
              </div>
              
              <div id="enquiry-form" className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[28px] shadow-[0_22px_60px_rgba(15,23,42,.10)] hover:-translate-y-[4px] transition-transform duration-[300ms] p-6 sm:p-8 text-left group/form relative">
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[44px] h-[44px] rounded-xl bg-[linear-gradient(135deg,#DBEAFE,#EFF6FF)] flex items-center justify-center shrink-0 group-hover/form:scale-[1.1] transition-transform duration-[300ms]">
                    <Handshake className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1 border-b-[2px] border-transparent" style={{ borderImage: "linear-gradient(to right, #2563EB, #38BDF8) 1", paddingBottom: "12px" }}>
                    <h3 className="font-display font-[700] text-[#0F172A] text-lg sm:text-xl">Partner Proposal Form</h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-0.5">Establish a robust corporate connection</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Full Name <span className="text-[#DC2626] font-bold">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Business Email <span className="text-[#DC2626] font-bold">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Phone / Whatsapp <span className="text-[#DC2626] font-bold">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Alliance Vertical Target</label>
                      <div className="relative">
                        <select
                          value={formData.partnerType}
                          onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)] focus:bg-[#FFFFFF] transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] appearance-none"
                        >
                          <option value="franchise">PCD Franchise Distributorship</option>
                          <option value="manufacturing">Third Party Contract Manufacturing</option>
                          <option value="institutional">Bulk Institutional Supply</option>
                          <option value="distributor">Regional Wholesale Distributor</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                          <svg className="w-4 h-4 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Company Name <span className="text-[#DC2626] font-bold">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Company Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-[#334155] block mb-2">Target Country / Territory <span className="text-[#DC2626] font-bold">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kenya, India, Philippines"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#334155] block mb-2">Describe Your Proposal / Target Market <span className="text-[#DC2626] font-bold">*</span></label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Include details about your current healthcare products network, doctor connections, or specific solid-oral dosing needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-[250ms] hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.12)] resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 mt-2 text-[#FFFFFF] font-medium text-sm rounded-[14px] transition-all duration-[300ms] flex items-center justify-center gap-2 cursor-pointer shadow-[0_16px_40px_rgba(29,78,216,.30)] hover:shadow-[0_16px_40px_rgba(37,99,235,.40)] hover:-translate-y-[2px] bg-[linear-gradient(90deg,#0B1F4D,#1D4ED8)] hover:bg-[linear-gradient(90deg,#1D4ED8,#2563EB)] border-none group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[rgba(37,99,235,0.25)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-[300ms]"></div>
                    
                    {submitting ? (
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Submitting Proposal...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-2">
                        Submit Partnership Enquiry
                        <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-[300ms]" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
