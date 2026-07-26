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
  Building2,
  Loader2,
  AlertCircle
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
  const [formSuccess, setFormSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const benefits = [
    {
      title: "Health & Wellbeing",
      description: "Comprehensive medical insurance policies for employees and dependent family members, plus routine health camps.",
      icon: HeartHandshake,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      accent: "bg-primary",
      badge: "Employee Care",
      badgeColor: "text-primary bg-primary/5 border-primary/20"
    },
    {
      title: "Scientific Training",
      description: "Continuous corporate sponsorships for pharma certifications, regulatory seminars, and global research conventions.",
      icon: GraduationCap,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      accent: "bg-accent",
      badge: "Learning",
      badgeColor: "text-accent bg-accent/5 border-accent/20"
    },
    {
      title: "Career Growth",
      description: "Fast-track performance evaluation plans allowing rapid transitions from junior executive to divisional heads.",
      icon: TrendingUp,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      accent: "bg-secondary",
      badge: "Promotion",
      badgeColor: "text-secondary bg-secondary/5 border-secondary/20"
    },
    {
      title: "Work-Life Synergy",
      description: "Flexible regional marketing timings, comprehensive maternal/paternal leave plans, and collaborative office layouts.",
      icon: BriefcaseBusiness,
      iconBg: "bg-[#7C3AED]/10",
      iconColor: "text-[#7C3AED]",
      accent: "bg-[#7C3AED]",
      badge: "Flexible",
      badgeColor: "text-[#7C3AED] bg-[#7C3AED]/5 border-[#7C3AED]/20"
    }
  ];

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setFormSuccess(false);
    setErrors({});
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

  const validateCareerField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return !value.trim() ? "Full name is required" : "";
      case "email":
        return !value.trim() ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address" : "";
      case "phone":
        return !value.trim() ? "Phone number is required" : !/^\+?[0-9\s-\(\)\.]{7,15}$/.test(value) ? "Please enter a valid phone number" : "";
      case "experience":
        return !value.trim() ? "Work experience detail is required" : "";
      default:
        return "";
    }
  };

  const handleCareerFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const err = validateCareerField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleCareerFieldBlur = (field: string, value: string) => {
    if (value.trim() || errors[field]) {
      const err = validateCareerField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {
      name: validateCareerField("name", formData.name),
      email: validateCareerField("email", formData.email),
      phone: validateCareerField("phone", formData.phone),
      experience: validateCareerField("experience", formData.experience),
    };
    if (!uploadedFile) errs.file = "Please upload your resume (PDF/DOCX)";

    const activeErrors = Object.fromEntries(Object.entries(errs).filter(([_, v]) => v !== ""));
    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
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
      setFormSuccess(true);
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
    }, 1200);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white border-b border-border">
        {/* Soft radial glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.05)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Optional Decoration: Soft blurred circle behind heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[rgba(37,99,235,0.05)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <div className="animate-fade-in">
            <span className="utility-badge-blue mb-5">
              <span className="utility-dot"></span>
              Join Our Team
            </span>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Careers</span> at <span className="bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">Medinet</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-body leading-relaxed max-w-[760px]">
              At Medinet, we believe our people are our strongest formulation. We provide a workspace that cherishes scientific integrity, ethical dedication, and continuous professional progression.
            </p>
          </div>

          {/* Optional Small Badges Below Description */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-heading">WHO-GMP Certified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-heading">Career Growth</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default">
              <GraduationCap className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold text-heading">Learning Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Work Culture & Benefits */}
      <section className="py-20 bg-gradient-to-b from-background via-alt-bg to-white relative overflow-hidden text-left border-b border-border">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Medinet Life"
            title="A Culture of Clinical Excellence"
            description="We support our researchers, quality validation experts, and field representatives with industry-leading corporate parameters."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((ben, idx) => {
              const BenIcon = ben.icon;
              return (
                <div key={idx} className="utility-card p-6 sm:p-8 text-left relative overflow-hidden group hover:border-secondary transition-all duration-300">
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-full ${ben.accent}`}></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-[52px] h-[52px] rounded-2xl ${ben.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      <BenIcon className={`w-6 h-6 ${ben.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out`} />
                    </div>
                    <span className={`inline-block border ${ben.badgeColor} text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full`}>
                      {ben.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-heading text-lg mb-3">{ben.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{ben.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-background relative overflow-hidden border-t border-b border-border">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <SectionHeader
            badge="Active Positions"
            title="Explore Open Opportunities"
            description="We are actively sourcing talented professionals who share our commitment to patient care and strict global compliance."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
            {JOBS.map((job) => {
              // Determine styles based on department
              let Icon = Building2;
              let iconBg = "bg-alt-bg";
              let iconColor = "text-muted";
              let accent = "bg-muted";
              let badgeColor = "text-muted bg-background border-border";

              if (job.department === "Quality Assurance") {
                Icon = ShieldCheck;
                iconBg = "bg-primary/10";
                iconColor = "text-primary";
                accent = "bg-primary";
                badgeColor = "text-primary bg-primary/5 border-primary/20";
              } else if (job.department === "Sales & Marketing") {
                Icon = BriefcaseBusiness;
                iconBg = "bg-accent/10";
                iconColor = "text-accent";
                accent = "bg-accent";
                badgeColor = "text-accent bg-accent/5 border-accent/20";
              } else if (job.department === "Medical & Regulatory") {
                Icon = ClipboardCheck;
                iconBg = "bg-secondary/10";
                iconColor = "text-secondary";
                accent = "bg-secondary";
                badgeColor = "text-secondary bg-secondary/5 border-secondary/20";
              } else if (job.department === "Research & Development") {
                Icon = FlaskConical;
                iconBg = "bg-[#D97706]/10";
                iconColor = "text-[#D97706]";
                accent = "bg-[#D97706]";
                badgeColor = "text-[#D97706] bg-[#FFF8E1] border-[#FDE68A]";
              }

              return (
                <div
                  key={job.id}
                  className="utility-card p-6 sm:p-8 text-left relative overflow-hidden group flex flex-col justify-between hover:border-secondary transition-all duration-300"
                >
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-full ${accent}`}></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-[52px] h-[52px] rounded-2xl ${iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <Icon className={`w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform duration-300 ease-out`} />
                      </div>
                      
                      {/* Optional Status Badges */}
                      {job.department === "Quality Assurance" && (
                        <span className="inline-block border border-success/20 bg-success/10 text-success text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          Urgent Hiring
                        </span>
                      )}
                      {job.department === "Research & Development" && (
                        <span className="inline-block border border-primary/20 bg-primary/10 text-primary text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      {job.department === "Sales & Marketing" && (
                        <span className="inline-block border border-accent/20 bg-accent/10 text-accent text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                      {job.department === "Medical & Regulatory" && (
                        <span className="inline-block border border-secondary/20 bg-secondary/10 text-secondary text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          Remote Eligible
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className={`inline-block border ${badgeColor} text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full`}>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-muted uppercase tracking-wider">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-muted uppercase tracking-wider">
                        <Clock3 className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-heading text-lg sm:text-xl leading-tight">
                      {job.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-muted mt-3 uppercase tracking-wider">
                      <CalendarDays className="w-4 h-4" />
                      Experience: {job.experience} Required
                    </div>

                    <p className="mt-5 text-body leading-relaxed text-sm">
                      {job.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      <ul className="space-y-3 text-sm text-body">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-muted font-bold font-mono uppercase tracking-widest">
                      <Lock className="w-4 h-4" />
                      Secure Opportunity
                    </span>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="utility-button-primary"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
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
          <div className="w-full max-w-xl bg-white rounded-[24px] shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden text-left my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-border bg-alt-bg">
              <div>
                <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block">
                  // APPLICATION PORTAL
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-heading mt-2">
                  Apply: {selectedJob.title}
                </h2>
                <p className="text-xs text-body mt-1.5 font-mono uppercase font-semibold">{selectedJob.department} | {selectedJob.location}</p>
              </div>
              <button
                onClick={() => {
                  setIsApplying(false);
                  setSelectedJob(null);
                  removeFile();
                }}
                className="p-2 bg-white hover:bg-background border border-border text-body hover:text-primary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            {formSuccess ? (
              <div className="p-8 text-center space-y-4 my-auto animate-fade-in">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-medium text-heading">Application Received!</h3>
                <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
                  Your CV and details for <strong className="text-body font-semibold">{selectedJob?.title}</strong> have been submitted to our talent acquisition team. We will contact you if your qualifications match our current requirements.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSuccess(false);
                      setIsApplying(false);
                      setSelectedJob(null);
                    }}
                    className="utility-button-primary px-6 py-2.5"
                  >
                    CLOSE WINDOW
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormSuccess(false)}
                    className="utility-button-secondary px-6 py-2.5"
                  >
                    APPLY FOR ANOTHER ROLE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="career-name" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="career-name"
                      type="text"
                      required
                      disabled={submitting}
                      aria-required="true"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleCareerFieldChange("name", e.target.value)}
                      onBlur={(e) => handleCareerFieldBlur("name", e.target.value)}
                      className={`utility-input mt-1.5 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "car-name-err" : undefined}
                    />
                    {errors.name && (
                      <span id="car-name-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="career-email" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="career-email"
                      type="email"
                      required
                      disabled={submitting}
                      aria-required="true"
                      autoComplete="email"
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={(e) => handleCareerFieldChange("email", e.target.value)}
                      onBlur={(e) => handleCareerFieldBlur("email", e.target.value)}
                      className={`utility-input mt-1.5 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "car-email-err" : undefined}
                    />
                    {errors.email && (
                      <span id="car-email-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="career-phone" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-1.5">Phone Number <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="career-phone"
                      type="tel"
                      required
                      disabled={submitting}
                      aria-required="true"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleCareerFieldChange("phone", e.target.value)}
                      onBlur={(e) => handleCareerFieldBlur("phone", e.target.value)}
                      className={`utility-input mt-1.5 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "car-phone-err" : undefined}
                    />
                    {errors.phone && (
                      <span id="car-phone-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="career-experience" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-1.5">Total Work Experience <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="career-experience"
                      type="text"
                      required
                      disabled={submitting}
                      aria-required="true"
                      placeholder="e.g., 5 years in QC wet lab"
                      value={formData.experience}
                      onChange={(e) => handleCareerFieldChange("experience", e.target.value)}
                      onBlur={(e) => handleCareerFieldBlur("experience", e.target.value)}
                      className={`utility-input mt-1.5 ${errors.experience ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                      aria-invalid={!!errors.experience}
                      aria-describedby={errors.experience ? "car-exp-err" : undefined}
                    />
                    {errors.experience && (
                      <span id="car-exp-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.experience}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="career-message" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">Message / Cover Letter Note</label>
                    <span className={`text-[10px] font-mono ${formData.message.length > 700 ? "text-amber-500 font-bold" : "text-muted"}`}>
                      {formData.message.length}/800 chars
                    </span>
                  </div>
                  <textarea
                    id="career-message"
                    rows={4}
                    disabled={submitting}
                    maxLength={800}
                    placeholder="Summarize your key qualifications or motivation to join Medinet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="utility-input mt-1.5 resize-y"
                  ></textarea>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label htmlFor="career-resume" className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest block mb-2">
                    Upload Resume (PDF or DOCX, max 5MB) <span className="text-red-500" aria-hidden="true">*</span>
                  </label>

                  {uploadedFile ? (
                    <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-alt-bg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-border">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="block text-heading font-bold text-sm truncate max-w-[200px] sm:max-w-[300px]">
                            {uploadedFile.name}
                          </span>
                          <span className="text-[10px] text-muted font-mono font-bold block mt-1">
                            SIZE: {uploadedFile.size}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled={submitting}
                        onClick={removeFile}
                        className="p-2 bg-white hover:bg-background border border-border text-body hover:text-red-500 rounded-lg transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => !submitting && fileInputRef.current?.click()}
                      className={`border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 rounded-[16px] p-8 text-center cursor-pointer transition-all duration-300 ${errors.file ? "border-red-400 bg-red-50/5" : "bg-alt-bg"} ${submitting ? "opacity-50 pointer-events-none" : ""}`}
                    >
                      <input
                        id="career-resume"
                        ref={fileInputRef}
                        type="file"
                        disabled={submitting}
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-border shadow-sm">
                        <Upload className="w-5 h-5 text-primary" />
                      </div>
                      <span className="block text-sm font-bold text-heading">
                        Drag &amp; drop your resume here, or <span className="text-primary hover:underline">browse</span>
                      </span>
                      <span className="block text-[10px] font-bold text-muted mt-2 font-mono uppercase tracking-widest">
                        Accepts PDF, DOCX up to 5MB
                      </span>
                    </div>
                  )}
                  {errors.file && (
                    <span className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.file}
                    </span>
                  )}
                </div>

                {/* Form Footer */}
                <div className="pt-6 mt-4 border-t border-border flex flex-col sm:flex-row items-center justify-end gap-3 bg-white">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => {
                      setIsApplying(false);
                      setSelectedJob(null);
                      removeFile();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 border border-border text-body font-bold hover:bg-background hover:text-heading text-xs sm:text-sm rounded-[12px] transition-colors uppercase tracking-wider font-mono disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto utility-button-primary flex items-center justify-center gap-2 min-w-[180px]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting CV...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
