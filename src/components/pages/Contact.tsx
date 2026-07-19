/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { OFFICES, FAQS } from "../../data";
import { Office } from "../../types";
import SectionHeader from "../SectionHeader";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Building,
  Navigation,
  Globe,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Globe2,
  Building2,
  Factory,
  FlaskConical,
  MapPinned,
  PhoneCall,
  Clock3,
  Headphones,
  ShieldCheck,
  MessageSquareMore,
  UserRound,
  ClipboardList,
  MessageSquareText,
  SendHorizontal,
  Shield,
  BadgeCheck,
  Headset,
  Microscope,
  Handshake,
  ShieldAlert,
  ShoppingBag,
  LifeBuoy,
  ArrowRight
} from "lucide-react";

interface ContactProps {
  showToast: (message: string, type: "success" | "error") => void;
}

export default function Contact({ showToast }: ContactProps) {
  // Map Selection State
  const [selectedOffice, setSelectedOffice] = useState<Office>(OFFICES[0]);

  // Accordion FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errs.email = "Invalid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.message.trim()) errs.message = "Message content is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fix the validation errors before submitting.", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast("Thank you! Your message has been routed to our corporate relations team.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: ""
      });
    }, 1500);
  };

  const openDirections = (office: Office) => {
    const query = encodeURIComponent(office.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_60%,#FFFFFF_100%)] border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-[18px] py-[8px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_12px_24px_rgba(37,99,235,.08)]">
            <Globe2 className="w-3 h-3 text-[#2563EB]" />
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
            Contact Our <span className="bg-[linear-gradient(180deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Global Offices</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] max-w-3xl">
            Have questions regarding wholesale sourcing, territorial licensing rights, or adverse drug event reporting? Reach out to our dedicated corporate departments globally.
          </p>
        </div>
      </section>

      {/* Offices and Interactive Map Selector */}
      <section className="py-20 bg-[#FFFFFF] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-[18px] py-[8px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_12px_24px_rgba(37,99,235,.08)]">
              <MapPinned className="w-3 h-3 text-[#2563EB]" />
              Global Coordinates
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              Our Corporate Locations
            </h2>
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-3xl mx-auto">
              Select an office coordinate card below to update the live locator map embed and view localized contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Address Cards List */}
            <div className="lg:col-span-5 space-y-4">
              {OFFICES.map((off, idx) => {
                let badgeBg = "bg-[#DBEAFE]";
                let badgeText = "text-[#2563EB]";
                let BadgeIcon = Building2;
                
                if (off.type === "Manufacturing") {
                  badgeBg = "bg-[#DCFCE7]";
                  badgeText = "text-[#0D9488]";
                  BadgeIcon = Factory;
                } else if (off.type === "Research") {
                  badgeBg = "bg-[#EDE9FE]";
                  badgeText = "text-[#7C3AED]";
                  BadgeIcon = FlaskConical;
                } else if (off.type === "Global HQ" || off.type === "Regional HQ" || off.type === "Global Office") {
                  badgeBg = "bg-[#FEF3C7]";
                  badgeText = "text-[#D97706]";
                  BadgeIcon = Globe2;
                }

                const isActive = selectedOffice.name === off.name;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedOffice(off)}
                    className={`rounded-[24px] transition-all duration-[300ms] cursor-pointer flex flex-col justify-between overflow-hidden group/card ${
                      isActive 
                        ? "bg-[linear-gradient(135deg,#0B1F4D,#1D4ED8)] border-none shadow-[0_35px_70px_rgba(29,78,216,.25)] hover:-translate-y-[8px]" 
                        : "bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_20px_50px_rgba(15,23,42,.06)] hover:border-[#93C5FD] hover:shadow-[0_35px_80px_rgba(37,99,235,.12)] hover:-translate-y-[8px]"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-[40px] h-[40px] rounded-[12px] flex items-center justify-center shrink-0 group-hover/card:scale-[1.1] transition-transform duration-[300ms] ${isActive ? 'bg-white/10' : 'bg-[#F8FAFC] border border-[#E2E8F0]'}`}>
                          <BadgeIcon className={`w-4 h-4 ${isActive ? 'text-white' : badgeText}`} />
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full text-[10px] font-mono font-[600] uppercase tracking-wide ${isActive ? 'bg-white/10 text-white' : `${badgeBg} ${badgeText}`}`}>
                          {off.type}
                        </span>
                      </div>

                      <h3 className={`font-display font-[700] text-lg sm:text-xl transition-colors ${isActive ? "text-white" : "text-[#0F172A] group-hover/card:text-[#2563EB]"}`}>
                        {off.name}
                      </h3>

                      <p className="text-sm mt-3 leading-relaxed flex items-start gap-2">
                        <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isActive ? 'text-white/80' : 'text-[#0D9488]'}`} />
                        <span className={isActive ? 'text-white/90' : 'text-[#64748B]'}>{off.address}</span>
                      </p>
                    </div>

                    <div className={`mt-2 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono p-6 border-t ${isActive ? 'border-white/10 bg-white/5' : 'border-[#E2E8F0] bg-[#F8FAFC]'}`}>
                      <div className="space-y-1.5 text-[11px] uppercase">
                        <span className="flex items-center gap-2">
                          <PhoneCall className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-[#2563EB]'}`} />
                          <span className={isActive ? 'text-white/90' : 'text-[#475569]'}>{off.phone}</span>
                        </span>
                        <span className="flex items-center gap-2 truncate max-w-[200px]">
                          <Mail className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-[#38BDF8]'}`} />
                          <span className={isActive ? 'text-white/90' : 'text-[#475569]'}>{off.email}</span>
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openDirections(off);
                        }}
                        className={`shrink-0 rounded-full px-[18px] py-[12px] flex items-center justify-center gap-1.5 font-semibold transition-all duration-[300ms] group/btn ${
                          isActive
                            ? "bg-white text-[#2563EB] hover:bg-gray-50 shadow-[0_4px_14px_rgba(255,255,255,0.2)]"
                            : "bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] hover:bg-[linear-gradient(90deg,#2563EB,#1D4ED8)] hover:text-white hover:border-transparent shadow-[0_4px_14px_rgba(37,99,235,0)] hover:shadow-[0_12px_30px_rgba(37,99,235,.25)]"
                        }`}
                      >
                        <Navigation className={`w-3.5 h-3.5 ${isActive ? '' : 'group-hover/btn:text-white'}`} />
                        Directions
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Map Frame */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase">
                  <MapPinned className="w-3 h-3 text-[#2563EB]" />
                  Current Location
                </span>
              </div>
              <div className="h-[420px] lg:h-[500px] min-h-[360px] rounded-[24px] shadow-[0_20px_45px_rgba(15,23,42,.06)] hover:shadow-[0_35px_80px_rgba(37,99,235,.12)] transition-shadow duration-[300ms] overflow-hidden border border-[#E2E8F0] bg-alt-bg">
                {selectedOffice.mapEmbedUrl ? (
                  <iframe
                    title={`Map: ${selectedOffice.name}`}
                    src={selectedOffice.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted bg-alt-bg p-8 text-center text-sm font-mono uppercase">
                    Locator Map Not Available for this Office.
                  </div>
                )}
              </div>
              
              {/* Optional Quick Info */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] shadow-[0_10px_30px_rgba(15,23,42,.04)] p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-[10px] font-mono uppercase">
                    <Clock3 className="w-3 h-3" /> Timezone
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A]">Local Time</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-[10px] font-mono uppercase">
                    <PhoneCall className="w-3 h-3" /> Business Hours
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-[10px] font-mono uppercase">
                    <Headphones className="w-3 h-3" /> Support
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A]">24/7 Desk</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-[10px] font-mono uppercase">
                    <ShieldCheck className="w-3 h-3" /> Emergency
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A]">Active Line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Communications Form */}
      <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] text-left">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,.08)] overflow-hidden transition-all duration-[300ms]">
            
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-[46px] h-[46px] rounded-xl bg-[linear-gradient(135deg,#2563EB,#38BDF8)] flex items-center justify-center shrink-0">
                  <MessageSquareMore className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-[700] text-[#0F172A] text-xl sm:text-2xl">Send Corporate Message</h3>
                  <p className="text-[10px] sm:text-xs font-mono uppercase text-[#64748B] tracking-[0.18em] mt-1">DIRECTLY ROUTED TO SPECIALIZED DEPARTMENT HEADS</p>
                </div>
              </div>

              <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#BFDBFE,transparent)] mb-8"></div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label className="text-[11px] font-mono text-[#0B1F4D] font-[600] uppercase tracking-[0.12em] block mb-2">Full Name *</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within/input:text-[#2563EB] group-focus-within/input:scale-[1.1] transition-all duration-[300ms]">
                        <UserRound className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full h-[54px] pl-11 pr-4 bg-[#F8FAFC] border rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-[300ms] hover:border-[#60A5FA] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)] ${
                          errors.name ? "border-red-500" : "border-[#CBD5E1]"
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.name}</span>}
                  </div>
                  
                  <div className="group/input">
                    <label className="text-[11px] font-mono text-[#0B1F4D] font-[600] uppercase tracking-[0.12em] block mb-2">Email Address *</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within/input:text-[#2563EB] group-focus-within/input:scale-[1.1] transition-all duration-[300ms]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full h-[54px] pl-11 pr-4 bg-[#F8FAFC] border rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-[300ms] hover:border-[#60A5FA] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)] ${
                          errors.email ? "border-red-500" : "border-[#CBD5E1]"
                        }`}
                      />
                    </div>
                    {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label className="text-[11px] font-mono text-[#0B1F4D] font-[600] uppercase tracking-[0.12em] block mb-2">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within/input:text-[#2563EB] group-focus-within/input:scale-[1.1] transition-all duration-[300ms]">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Enter contact number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full h-[54px] pl-11 pr-4 bg-[#F8FAFC] border rounded-[14px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-[300ms] hover:border-[#60A5FA] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)] ${
                          errors.phone ? "border-red-500" : "border-[#CBD5E1]"
                        }`}
                      />
                    </div>
                    {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.phone}</span>}
                  </div>
                  
                  <div className="group/input">
                    <label className="text-[11px] font-mono text-[#0B1F4D] font-[600] uppercase tracking-[0.12em] block mb-2">Subject of Inquiry</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within/input:text-[#2563EB] group-focus-within/input:scale-[1.1] transition-all duration-[300ms]">
                        <ClipboardList className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-[54px] pl-11 pr-10 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[14px] text-sm text-[#0F172A] transition-all duration-[300ms] hover:border-[#60A5FA] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)] appearance-none cursor-pointer"
                      >
                        <option value="general">General Sourcing / Wholesaling</option>
                        <option value="licensing">Territorial Rights & Franchising</option>
                        <option value="pve">Pharmacovigilance (ADR Reporting)</option>
                        <option value="contract">Contract Manufacturing Services</option>
                        <option value="careers">Careers & Human Resources</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2563EB]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group/input">
                  <label className="text-[11px] font-mono text-[#0B1F4D] font-[600] uppercase tracking-[0.12em] block mb-2">Message Content *</label>
                  <div className="relative">
                    <div className="absolute left-4 top-[18px] text-[#64748B] group-focus-within/input:text-[#2563EB] group-focus-within/input:scale-[1.1] transition-all duration-[300ms]">
                      <MessageSquareText className="w-4 h-4" />
                    </div>
                    <textarea
                      required
                      placeholder="Enter the full content of your corporate message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full min-h-[150px] pl-11 pr-4 py-[18px] bg-[#F8FAFC] border rounded-[16px] text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-[300ms] hover:border-[#60A5FA] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)] resize-y ${
                        errors.message ? "border-red-500" : "border-[#CBD5E1]"
                      }`}
                    ></textarea>
                  </div>
                  {errors.message && <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-[58px] bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-white font-[700] text-sm sm:text-base rounded-[16px] shadow-[0_18px_45px_rgba(37,99,235,.22)] transition-all duration-[300ms] flex items-center justify-center gap-2 cursor-pointer hover:bg-[linear-gradient(90deg,#2563EB,#38BDF8)] hover:-translate-y-[3px] hover:shadow-[0_24px_60px_rgba(37,99,235,.28)] active:scale-[0.98]"
                >
                  {submitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Routing Message...
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="w-5 h-5" />
                      Submit Corporate Message
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <Clock3 className="w-3.5 h-3.5 text-[#64748B]" />
                  </div>
                  Response Time 24 Hours
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-[#64748B]" />
                  </div>
                  Secure Transmission
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#64748B]" />
                  </div>
                  WHO-GMP Corporate Support
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F4D]">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center">
                    <Headset className="w-3.5 h-3.5 text-[#64748B]" />
                  </div>
                  Dedicated Team
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC,#F4F8FD,#FFFFFF)] text-left">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-[18px] py-[8px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_12px_24px_rgba(37,99,235,.08)]">
              <HelpCircle className="w-3 h-3 text-[#1D4ED8]" />
              Frequently Asked Queries
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-[800] text-[#0F172A] tracking-tight leading-tight">
              Sourcing & Regulatory Answers
            </h2>
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[720px] mx-auto">
              Review quick clarifications regarding PCD monopolies, comparative clinical bioequivalency curves, and wholesale terms.
            </p>
          </div>

          <div className="max-w-[820px] mx-auto space-y-[18px]">
            {FAQS.map((faq, idx) => {
              let FaqIcon = HelpCircle;
              if (faq.question.includes("Third Party") || faq.question.includes("Manufacturing") || faq.question.includes("manufacturing")) FaqIcon = Factory;
              else if (faq.question.includes("Bioequivalence") || faq.question.includes("clinical") || faq.question.includes("bioequivalency")) FaqIcon = Microscope;
              else if (faq.question.includes("PCD") || faq.question.includes("Franchise") || faq.question.includes("monopoly")) FaqIcon = Handshake;
              else if (faq.question.includes("ADR") || faq.question.includes("reporting") || faq.question.includes("Adverse")) FaqIcon = ShieldAlert;
              else if (faq.question.includes("Retail") || faq.question.includes("availability") || faq.question.includes("wholesale")) FaqIcon = ShoppingBag;
              
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-[18px] shadow-[0_10px_30px_rgba(15,23,42,.06)] overflow-hidden transition-all duration-[300ms] group/faq ${
                    isOpen
                      ? "bg-[linear-gradient(90deg,#EFF6FF,#FFFFFF)] border-[#2563EB] border-l-[4px] border-l-[#2563EB]"
                      : "bg-[#FFFFFF] border-[#E2E8F0] hover:bg-[#F8FBFF] hover:border-[#60A5FA] hover:shadow-[0_20px_50px_rgba(37,99,235,.12)] hover:-translate-y-[2px]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-[22px] flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-[42px] h-[42px] rounded-[12px] bg-[linear-gradient(135deg,#2563EB,#38BDF8)] flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(37,99,235,.25)] transition-transform duration-[300ms] group-hover/faq:scale-[1.1]">
                        <FaqIcon className="w-[18px] h-[18px] text-white" />
                      </div>
                      <span className="font-display font-[700] text-[#0F172A] text-sm sm:text-base leading-snug">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-[300ms] ${
                        isOpen ? "rotate-180 text-[#2563EB]" : "text-[#64748B]"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-[22px] pb-[22px] pl-[80px] text-sm sm:text-base text-[#475569] leading-[1.8] border-t border-[#E2E8F0] pt-[16px] animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Optional Support Box */}
          <div className="max-w-[820px] mx-auto mt-12 bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_45px_rgba(11,31,77,.2)]">
            <div className="flex items-center gap-5 text-white">
              <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <LifeBuoy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-[700] text-lg sm:text-xl">Still Need Assistance?</h4>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">Our regulatory and sourcing specialists are available to assist your business inquiries.</p>
              </div>
            </div>
            <button className="shrink-0 px-6 py-3 bg-white text-[#0B1F4D] font-[700] text-sm rounded-[14px] hover:bg-[#F8FAFC] transition-colors flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,.15)] group">
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
