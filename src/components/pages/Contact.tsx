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
  HelpCircle
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
      <section className="bg-background border-b border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-alt-bg border border-border text-body text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-heading tracking-tight leading-tight">
            Contact Our Global Offices
          </h1>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Have questions regarding wholesale sourcing, territorial licensing rights, or adverse drug event reporting? Reach out to our dedicated corporate departments globally.
          </p>
        </div>
      </section>

      {/* Offices and Interactive Map Selector */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Global Coordinates"
            title="Our Corporate Locations"
            description="Select an office coordinate card below to update the live locator map embed and view localized contacts."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Address Cards List */}
            <div className="lg:col-span-5 space-y-4">
              {OFFICES.map((off, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedOffice(off)}
                  className={`border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left cursor-pointer transition-all flex flex-col justify-between ${
                    selectedOffice.name === off.name
                      ? "bg-primary text-muted border-primary shadow-sm"
                      : "bg-white border-border hover:border-primary text-body"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        selectedOffice.name === off.name
                          ? "bg-white/10 text-white"
                          : "bg-alt-bg text-slate-850 border border-border"
                      }`}>
                        {off.type}
                      </span>
                    </div>

                    <h3 className={`font-display font-bold text-base ${
                      selectedOffice.name === off.name ? "text-white" : "text-heading"
                    }`}>
                      {off.name}
                    </h3>

                    <p className="text-xs mt-3 leading-relaxed flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40 sm:border-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <div className="space-y-1 text-[10px] uppercase text-muted">
                      <span className="block">Ph: {off.phone}</span>
                      <span className="block truncate max-w-[200px]">{off.email}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDirections(off);
                      }}
                      className={`px-3 py-1.5 rounded flex items-center justify-center gap-1 font-semibold border transition-all ${
                        selectedOffice.name === off.name
                          ? "bg-white hover:bg-alt-bg border-transparent text-heading"
                          : "bg-white hover:bg-background border-border text-body shadow-sm"
                      }`}
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Interactive Map Frame */}
            <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[360px] rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm overflow-hidden border border-border shadow-sm bg-alt-bg">
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
          </div>
        </div>
      </section>

      {/* Corporate Communications Form */}
      <section className="py-20 bg-background border-t border-b border-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
              <MessageSquare className="w-5 h-5 text-heading" />
              <div>
                <h3 className="font-display font-bold text-heading text-base">Send Corporate Message</h3>
                <p className="text-[10px] font-mono uppercase text-muted">// Directly routed to specialized department heads</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-primary transition-all ${
                      errors.name ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.name}</span>}
                </div>
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-primary transition-all ${
                      errors.email ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter contact number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-slate-955 transition-all ${
                      errors.phone ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.phone}</span>}
                </div>
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Subject of Inquiry</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full mt-1.5 px-3 py-2 bg-white border border-slate-250 rounded text-xs text-slate-850 focus:outline-none focus:border-primary transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat"
                  >
                    <option value="general">General Sourcing / Wholesaling</option>
                    <option value="licensing">Territorial Rights & Franchising</option>
                    <option value="pve">Pharmacovigilance (ADR Reporting)</option>
                    <option value="contract">Contract Manufacturing Services</option>
                    <option value="careers">Careers & Human Resources</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Message Content *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Enter the full content of your corporate message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-805 focus:outline-none focus:border-primary transition-all ${
                    errors.message ? "border-red-500" : "border-slate-250"
                  }`}
                ></textarea>
                {errors.message && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 bg-primary hover:bg-primary text-white font-medium text-xs sm:text-sm rounded border border-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Routing Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Corporate Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Frequently Asked Queries"
            title="Sourcing & Regulatory Answers"
            description="Review quick clarifications regarding PCD monopolies, comparative clinical bioequivalency curves, and wholesale terms."
            centered
          />

          <div className="space-y-3 mt-8">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm overflow-hidden bg-background"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left font-display font-bold text-heading hover:text-heading transition-colors focus:outline-none"
                >
                  <span className="text-sm">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? "rotate-180 text-heading" : ""
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 text-xs text-slate-650 leading-relaxed border-t border-border pt-4 bg-white animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
