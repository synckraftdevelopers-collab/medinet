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
  ArrowRight
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
      icon: TrendingUp
    },
    {
      title: "Third-Party Contract Manufacturing",
      description: "Partner with our state-of-the-art, allied WHO-GMP, EU-GMP, and USFDA approved contract formulation plants. We manage full technology transfer, formulation scaling, raw materials tracing, stability tests, and final packaging.",
      icon: Boxes
    },
    {
      title: "Institutional Supplies Business",
      description: "We are authorized registered suppliers to major health departments, public sector undertakings, railways, defence hospitals, and extensive medical chains. We handle bulk production requirements under rigid scheduling.",
      icon: Briefcase
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
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            B2B Commercial Alliances
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            Corporate Partnerships & PCD Franchise
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Leverage Medinet&rsquo;s global supply channels, multi-segment formulation portfolio, and thorough regulatory compliance to expand your pharmaceutical market presence.
          </p>
        </div>
      </section>

      {/* Business Verticals Overview */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Business Channels"
            title="Our Partnership Opportunities"
            description="We coordinate our corporate activities across three specialized verticals, structured to support different commercial requirements."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {verticals.map((vert, idx) => {
              const VertIcon = vert.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-6 sm:p-8 rounded-lg shadow-sm text-left flex flex-col justify-between shadow-sm hover:border-slate-900 transition-all group"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mb-6 transition-all">
                      <VertIcon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-base">
                      {vert.title}
                    </h3>
                    <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                      {vert.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                    <span>Enquire About This Channel</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Alliances Benefits Grid */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-[11px] font-mono font-medium tracking-widest text-slate-600 uppercase block mb-3">
                // WHY PARTNER WITH US?
              </span>
              <h2 className="text-3xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                Outstanding Support Systems for PCD and Distributors
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                We do not just supply formulations—we build regional market leaders. Medinet serves as a single-point backup for your therapeutic scaling requirements.
              </p>

              <div className="mt-6 space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <span>Monopoly territorial distribution rights.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <span>Comprehensive medical lit, visual aids, and samples.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <span>Strict territorial protection to secure margins.</span>
                </div>
              </div>
            </div>

            {/* B2B Proposal Enquiry Form */}
            <div className="lg:col-span-7">
              <div id="enquiry-form" className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-8 shadow-sm text-left">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
                  <Handshake className="w-5 h-5 text-slate-900" />
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base">Partner Proposal Form</h3>
                    <p className="text-[10px] text-slate-400 font-mono">Establish a robust corporate connection</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                          errors.name ? "border-red-500" : "border-slate-250"
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                          errors.email ? "border-red-500" : "border-slate-250"
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Phone / Whatsapp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                          errors.phone ? "border-red-500" : "border-slate-250"
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.phone}</span>}
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Alliance Vertical Target</label>
                      <select
                        value={formData.partnerType}
                        onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                        className="w-full mt-1.5 px-3 py-2 bg-white border border-slate-250 rounded text-xs text-slate-900 focus:outline-none focus:border-slate-900 transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.5rem_center] bg-no-repeat"
                      >
                        <option value="franchise">PCD Franchise Distributorship</option>
                        <option value="manufacturing">Third Party Contract Manufacturing</option>
                        <option value="institutional">Bulk Institutional Supply</option>
                        <option value="distributor">Regional Wholesale Distributor</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 tracking-wider uppercase block">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Company Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                          errors.company ? "border-red-500" : "border-slate-250"
                        }`}
                      />
                      {errors.company && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.company}</span>}
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-600 tracking-wider uppercase block">Target Country / Territory *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kenya, India, Philippines"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                          errors.country ? "border-red-500" : "border-slate-250"
                        }`}
                      />
                      {errors.country && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.country}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-600 tracking-wider uppercase block">Describe Your Proposal / Target Market *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Include details about your current healthcare products network, doctor connections, or specific solid-oral dosing needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                        errors.message ? "border-red-500" : "border-slate-250"
                      }`}
                    ></textarea>
                    {errors.message && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-900 text-white font-medium text-xs sm:text-sm rounded border border-slate-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Submitting Proposal...
                      </>
                    ) : (
                      <>
                        Submit Partnership Enquiry
                      </>
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
