/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { JOBS } from "../../data";
import { Job } from "../../types";
import SectionHeader from "../SectionHeader";
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  Upload,
  User,
  Mail,
  Phone,
  FileText,
  X,
  CheckCircle,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  Globe,
  Plus,
  ShieldCheck,
  ClipboardCheck,
  FlaskConical,
  Clock3,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Lock,
  Building2
} from "lucide-react";

interface CareersProps {
  showToast: (message: string, type: "success" | "error") => void;
}

export default function Careers({ showToast }: CareersProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  // Apply Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: ""
  });
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const benefits = [
    {
      title: "Health & Wellbeing",
      description: "Comprehensive medical insurance policies for employees and dependent family members, plus routine health camps.",
      icon: HeartHandshake,
      iconBg: "bg-[linear-gradient(135deg,#DBEAFE,#EFF6FF)]",
      iconColor: "text-[#2563EB]",
      accent: "bg-[#2563EB]",
      badge: "Employee Care",
      badgeColor: "text-[#2563EB] bg-[#EFF6FF] border-[#BFDBFE]"
    },
    {
      title: "Scientific Training",
      description: "Continuous corporate sponsorships for pharma certifications, regulatory seminars, and global research conventions.",
      icon: GraduationCap,
      iconBg: "bg-[linear-gradient(135deg,#DCFCE7,#F0FDF4)]",
      iconColor: "text-[#0D9488]",
      accent: "bg-[#0D9488]",
      badge: "Learning",
      badgeColor: "text-[#0D9488] bg-[#F0FDF4] border-[#A7F3D0]"
    },
    {
      title: "Career Growth",
      description: "Fast-track performance evaluation plans allowing rapid transitions from junior executive to divisional heads.",
      icon: TrendingUp,
      iconBg: "bg-[linear-gradient(135deg,#FEF3C7,#FFF8E1)]",
      iconColor: "text-[#D97706]",
      accent: "bg-[#38BDF8]",
      badge: "Promotion",
      badgeColor: "text-[#D97706] bg-[#FFF8E1] border-[#FDE68A]"
    },
    {
      title: "Work-Life Synergy",
      description: "Flexible regional marketing timings, comprehensive maternal/paternal leave plans, and collaborative office layouts.",
      icon: BriefcaseBusiness,
      iconBg: "bg-[linear-gradient(135deg,#EDE9FE,#F5F3FF)]",
      iconColor: "text-[#7C3AED]",
      accent: "bg-[#8B5CF6]",
      badge: "Flexible",
      badgeColor: "text-[#7C3AED] bg-[#F5F3FF] border-[#DDD6FE]"
    }
  ];

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsApplying(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("Resume size exceeds maximum limit of 5MB.", "error");
        return;
      }
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      });
      showToast("Resume uploaded successfully!", "success");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("Resume size exceeds maximum limit of 5MB.", "error");
        return;
      }
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      });
      showToast("Resume uploaded successfully!", "success");
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errs.email = "Invalid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.experience.trim()) errs.experience = "Work experience detail is required";
    if (!uploadedFile) errs.file = "Please upload your resume (PDF/DOCX)";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please fill all required fields and upload your resume.", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      showToast("Application submitted successfully! Our HR team will evaluate your CV.", "success");
      
      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: ""
      });
      setUploadedFile(null);
      setIsApplying(false);
      setSelectedJob(null);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F7FC_55%,#FFFFFF_100%)] border-b border-[#E2E8F0]">
        {/* Soft radial glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Optional Decoration: Soft blurred circle behind heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[rgba(37,99,235,0.05)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_22px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Join Our Team
            </span>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight [text-shadow:0_2px_8px_rgba(15,23,42,0.06)]">
              <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Careers</span> at <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Medinet</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-[#475569] leading-[1.8] max-w-[760px]">
              At Medinet, we believe our people are our strongest formulation. We provide a workspace that cherishes scientific integrity, ethical dedication, and continuous professional progression.
            </p>
          </div>

          {/* Optional Small Badges Below Description */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span className="text-[11px] font-semibold text-[#0F172A]">WHO-GMP Certified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default">
              <TrendingUp className="w-4 h-4 text-[#0D9488]" />
              <span className="text-[11px] font-semibold text-[#0F172A]">Career Growth</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default">
              <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-[11px] font-semibold text-[#0F172A]">Learning Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Work Culture & Benefits */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC,#F4F8FC,#FFFFFF)] relative overflow-hidden text-left border-b border-[#E2E8F0]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_20px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Medinet Life
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              A <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Rewarding</span> <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Work Environment</span>
            </h2>
            
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[760px] mx-auto">
              We support our researchers, quality validation experts, and field representatives with industry-leading corporate parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((ben, idx) => {
              const BenIcon = ben.icon;
              return (
                <div key={idx} className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 sm:p-8 rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.08)] hover:-translate-y-[8px] hover:border-[#93C5FD] hover:shadow-[0_28px_65px_rgba(37,99,235,.14)] transition-all duration-[350ms] text-left relative overflow-hidden group">
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-full ${ben.accent}`}></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-[52px] h-[52px] rounded-2xl ${ben.iconBg} flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(37,99,235,.10)] group-hover:shadow-[0_0_15px_rgba(37,99,235,.20)] transition-shadow duration-[300ms]`}>
                      <BenIcon className={`w-6 h-6 ${ben.iconColor} group-hover:scale-[1.08] group-hover:rotate-[3deg] transition-transform duration-[300ms] ease-out`} />
                    </div>
                    <span className={`inline-block border ${ben.badgeColor} text-[9px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded-full`}>
                      {ben.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-[700] text-[#0F172A] text-sm sm:text-base mb-2">{ben.title}</h3>
                  <p className="text-xs text-[#475569] leading-[1.8]">{ben.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-[linear-gradient(180deg,#F8FAFC,#F4F8FC,#FFFFFF)] relative overflow-hidden border-t border-b border-[#E2E8F0]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_18px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Active Positions
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
              Explore <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Open</span> <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Opportunities</span>
            </h2>
            
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[700px] mx-auto">
              We are actively sourcing talented professionals who share our commitment to patient care and strict global compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {JOBS.map((job) => {
              // Determine styles based on department
              let Icon = Building2;
              let iconBg = "bg-[#F1F5F9]";
              let iconColor = "text-[#64748B]";
              let accent = "bg-[#64748B]";
              let badgeColor = "text-[#64748B] bg-[#F8FAFC] border-[#E2E8F0]";

              if (job.department === "Quality Assurance") {
                Icon = ShieldCheck;
                iconBg = "bg-[#DBEAFE]";
                iconColor = "text-[#2563EB]";
                accent = "bg-[#2563EB]";
                badgeColor = "text-[#2563EB] bg-[#EFF6FF] border-[#BFDBFE]";
              } else if (job.department === "Sales & Marketing") {
                Icon = BriefcaseBusiness;
                iconBg = "bg-[#DCFCE7]";
                iconColor = "text-[#0D9488]";
                accent = "bg-[#0D9488]";
                badgeColor = "text-[#0D9488] bg-[#F0FDF4] border-[#A7F3D0]";
              } else if (job.department === "Medical & Regulatory") {
                Icon = ClipboardCheck;
                iconBg = "bg-[#EDE9FE]";
                iconColor = "text-[#7C3AED]";
                accent = "bg-[#7C3AED]";
                badgeColor = "text-[#7C3AED] bg-[#F5F3FF] border-[#DDD6FE]";
              } else if (job.department === "Research & Development") {
                Icon = FlaskConical;
                iconBg = "bg-[#FEF3C7]";
                iconColor = "text-[#D97706]";
                accent = "bg-[#D97706]";
                badgeColor = "text-[#D97706] bg-[#FFF8E1] border-[#FDE68A]";
              }

              return (
                <div
                  key={job.id}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.08)] hover:-translate-y-[8px] hover:border-[#93C5FD] hover:shadow-[0_28px_65px_rgba(37,99,235,.14)] transition-all duration-[350ms] ease-out p-6 sm:p-8 text-left relative overflow-hidden group flex flex-col justify-between"
                >
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-full ${accent}`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-[52px] h-[52px] rounded-2xl ${iconBg} flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(37,99,235,.12)] group-hover:shadow-[0_0_15px_rgba(37,99,235,.20)] transition-shadow duration-[300ms]`}>
                        <Icon className={`w-6 h-6 ${iconColor} group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out`} />
                      </div>
                      
                      {/* Optional Status Badges */}
                      {job.department === "Quality Assurance" && (
                        <span className="inline-block border border-[#BBF7D0] bg-[#F0FDF4] text-[#16A34A] text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full">
                          Urgent Hiring
                        </span>
                      )}
                      {job.department === "Research & Development" && (
                        <span className="inline-block border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB] text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                      {job.department === "Sales & Marketing" && (
                        <span className="inline-block border border-[#FDE68A] bg-[#FFF8E1] text-[#D97706] text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                      {job.department === "Medical & Regulatory" && (
                        <span className="inline-block border border-[#DDD6FE] bg-[#F5F3FF] text-[#7C3AED] text-[9px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full">
                          Remote Eligible
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-block border ${badgeColor} text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full`}>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B] uppercase">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B] uppercase">
                        <Clock3 className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-display font-[700] text-[#0F172A] text-lg sm:text-xl leading-tight">
                      {job.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#64748B] mt-2 uppercase">
                      <CalendarDays className="w-3.5 h-3.5" />
                      Experience: {job.experience} Required
                    </div>

                    <p className="mt-4 text-[#475569] leading-[1.8] text-sm">
                      {job.description}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      <ul className="space-y-2 text-sm text-[#475569]">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] text-[#94A3B8] font-medium font-mono uppercase tracking-wide">
                      <Lock className="w-3.5 h-3.5" />
                      Secure Opportunity
                    </span>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="px-5 py-2.5 bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-white font-medium text-xs sm:text-sm rounded-[12px] shadow-[0_14px_35px_rgba(37,99,235,.25)] hover:bg-[linear-gradient(90deg,#2563EB,#38BDF8)] hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(37,99,235,.35)] transition-all duration-[300ms] cursor-pointer group/btn flex items-center gap-2 border-none"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-[300ms]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>      {/* Application Form Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-xl bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-xl border border-border overflow-hidden text-left my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border bg-background">
              <div>
                <span className="text-[10px] font-mono font-medium text-body uppercase tracking-widest block">
                  // APPLICATION PORTAL
                </span>
                <h2 className="text-lg font-display font-bold text-heading mt-1">
                  Apply: {selectedJob.title}
                </h2>
                <p className="text-[10px] text-muted mt-0.5 font-mono uppercase">{selectedJob.department} | {selectedJob.location}</p>
              </div>
              <button
                onClick={() => {
                  setIsApplying(false);
                  setSelectedJob(null);
                  removeFile();
                }}
                className="p-1 hover:bg-alt-bg/50 text-body hover:text-heading rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
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
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-primary transition-all ${
                      errors.email ? "border-red-500" : "border-slate-255"
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
                    placeholder="+91-XXXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-slate-955 transition-all ${
                      errors.phone ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.phone}</span>}
                </div>
                <div>
                  <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Total Work Experience *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 5 years in QC wet lab"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-primary transition-all ${
                      errors.experience ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.experience && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.experience}</span>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-body uppercase tracking-wider block">Message / Cover Letter Note</label>
                <textarea
                  rows={3}
                  placeholder="Summarize your key qualifications or motivation to join Medinet..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mt-1.5 px-3 py-2 bg-white border border-slate-250 rounded text-xs text-heading placeholder:text-muted focus:outline-none focus:border-slate-955 transition-all"
                ></textarea>
              </div>

              {/* Resume Upload Box */}
              <div>
                <label className="text-[10px] font-mono text-body uppercase tracking-wider block mb-2">
                  Upload Resume (PDF or DOCX, max 5MB) *
                </label>

                {uploadedFile ? (
                  <div className="flex items-center justify-between p-3 border border-border rounded bg-background">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-heading shrink-0" />
                      <div>
                        <span className="block text-heading font-semibold text-xs truncate max-w-[240px] sm:max-w-xs">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[9px] text-muted font-mono block">
                          Size: {uploadedFile.size}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-alt-bg/50 text-body hover:text-red-600 rounded transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed border-border hover:border-primary hover:bg-background rounded p-6 text-center cursor-pointer transition-all ${
                      errors.file ? "border-red-400 bg-red-50/5" : ""
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-6 h-6 text-slate-450 mx-auto mb-2" />
                    <span className="block text-xs font-semibold text-body">
                      Drag &amp; drop your resume here, or <span className="text-heading hover:underline">browse</span>
                    </span>
                    <span className="block text-[9px] text-muted mt-1 font-mono">
                      Accepts PDF, DOCX up to 5MB
                    </span>
                  </div>
                )}
                {errors.file && <span className="text-[10px] text-red-500 font-semibold mt-1.5 block">{errors.file}</span>}
              </div>

              {/* Form Footer */}
              <div className="pt-4 border-t border-border flex items-center justify-end gap-3 bg-white">
                <button
                  type="button"
                  onClick={() => {
                    setIsApplying(false);
                    setSelectedJob(null);
                    removeFile();
                  }}
                  className="px-4 py-2 border border-slate-250 text-slate-650 hover:bg-background font-medium text-xs sm:text-sm rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-primary hover:bg-primary text-white font-medium text-xs sm:text-sm rounded border border-primary transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Submitting CV...
                    </>
                  ) : (
                    <>
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
