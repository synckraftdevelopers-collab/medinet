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
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      accent: "bg-primary",
      badge: "PCD",
      badgeColor: "text-primary bg-primary/5 border-primary/20"
    },
    {
      title: "Third-Party Contract Manufacturing",
      description: "Partner with our state-of-the-art, allied WHO-GMP, EU-GMP, and USFDA approved contract formulation plants. We manage full technology transfer, formulation scaling, raw materials tracing, stability tests, and final packaging.",
      icon: Factory,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      accent: "bg-accent",
      badge: "WHO-GMP",
      badgeColor: "text-accent bg-accent/5 border-accent/20"
    },
    {
      title: "Institutional Supplies Business",
      description: "We are authorized registered suppliers to major health departments, public sector undertakings, railways, defence hospitals, and extensive medical chains. We handle bulk production requirements under rigid scheduling.",
      icon: Building2,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      accent: "bg-secondary",
      badge: "B2B",
      badgeColor: "text-secondary bg-secondary/5 border-secondary/20"
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
      <section className="bg-gradient-to-b from-background via-alt-bg to-white border-b border-border py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle radial medical glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_65%)] pointer-events-none z-0"></div>
        
        {/* Soft medical abstract decoration (opacity 5%) */}
        <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none opacity-5 z-0 hidden lg:block">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-[120%] h-auto max-w-[600px]">
            <path d="M120 40 C 20 40 20 200 120 200 C 220 200 220 360 120 360" stroke="url(#paint0_linear)" strokeWidth="60" strokeLinecap="round" />
            <path d="M280 40 C 380 40 380 200 280 200 C 180 200 180 360 280 360" stroke="url(#paint1_linear)" strokeWidth="60" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="120" y1="40" x2="120" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" className="text-secondary" />
                <stop offset="1" stopColor="currentColor" className="text-primary" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="280" y1="40" x2="280" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" className="text-secondary" />
                <stop offset="1" stopColor="currentColor" className="text-primary" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <div className="animate-fade-in">
            <span className="utility-badge-blue mb-5">
              <span className="utility-dot"></span>
              B2B Commercial Alliances
            </span>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-heading to-primary text-transparent bg-clip-text">Corporate Partnerships</span> & <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">PCD Franchise</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-body leading-relaxed max-w-[720px]">
              Leverage Medinet&rsquo;s global supply channels, multi-segment formulation portfolio, and thorough regulatory compliance to expand your pharmaceutical market presence.
            </p>
          </div>

          <div className="mt-10 animate-fade-in cursor-default">
            <div className="inline-flex flex-wrap items-center gap-4 sm:gap-6 bg-white border border-border rounded-full shadow-sm px-6 py-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-heading">WHO-GMP Certified</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-border"></div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-heading">18+ Countries</span>
              </div>
              <div className="hidden md:block w-[1px] h-4 bg-border"></div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-heading">450+ Distributors</span>
              </div>
              <div className="hidden lg:block w-[1px] h-4 bg-border"></div>
              <div className="flex items-center gap-2.5">
                <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-heading">25+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals Overview */}
      <section className="py-20 bg-background relative overflow-hidden text-left">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Business Channels"
            title="Our Partnership Opportunities"
            description="We coordinate our corporate activities across three specialized verticals, structured to support different commercial requirements."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {verticals.map((vert, idx) => {
              const VertIcon = vert.icon;
              return (
                <div
                  key={idx}
                  className="utility-card p-6 sm:p-8 text-left flex flex-col justify-between group relative overflow-hidden hover:border-secondary transition-all duration-300"
                >
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${vert.accent}`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-[52px] h-[52px] rounded-2xl ${vert.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <VertIcon className={`w-6 h-6 ${vert.iconColor} group-hover:scale-110 transition-transform duration-300 ease-out`} />
                      </div>
                      <span className={`inline-block border ${vert.badgeColor} text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full`}>
                        {vert.badge}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-bold text-heading text-lg">
                      {vert.title}
                    </h3>
                    <p className="mt-4 text-sm text-body leading-relaxed">
                      {vert.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors cursor-pointer">
                    <span>Enquire About This Channel</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Alliances Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-background via-alt-bg to-white relative overflow-hidden border-t border-b border-border">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 text-left pt-2">
              <span className="utility-badge-blue mb-5">
                <span className="utility-dot"></span>
                Why Partner With Us?
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-heading tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-heading to-primary text-transparent bg-clip-text">Outstanding Support Systems</span> for <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">PCD and Distributors</span>
              </h2>
              <p className="mt-5 text-body leading-relaxed text-sm sm:text-base">
                We do not just supply formulations—we build regional market leaders. Medinet serves as a single-point backup for your therapeutic scaling requirements.
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
            </div>

            {/* B2B Proposal Enquiry Form */}
            <div className="lg:col-span-7">
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="utility-input"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Business Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="utility-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Phone / Whatsapp <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="utility-input"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Alliance Vertical Target</label>
                      <div className="relative">
                        <select
                          value={formData.partnerType}
                          onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                          className="utility-input appearance-none pr-10"
                        >
                          <option value="franchise">PCD Franchise Distributorship</option>
                          <option value="manufacturing">Third Party Contract Manufacturing</option>
                          <option value="institutional">Bulk Institutional Supply</option>
                          <option value="distributor">Regional Wholesale Distributor</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Company Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Company Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="utility-input"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Target Country / Territory <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kenya, India, Philippines"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="utility-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">Describe Your Proposal / Target Market <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Include details about your current healthcare products network, doctor connections, or specific solid-oral dosing needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="utility-input resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full utility-button-primary mt-4 py-3.5 text-sm"
                  >
                    {submitting ? (
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Submitting Proposal...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-2">
                        Submit Partnership Enquiry
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
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
