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
  Heart,
  TrendingUp,
  Brain,
  Coffee,
  Globe,
  Plus
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
      icon: Heart
    },
    {
      title: "Scientific Training",
      description: "Continuous corporate sponsorships for pharma certifications, regulatory seminars, and global research conventions.",
      icon: Brain
    },
    {
      title: "Career Growth",
      description: "Fast-track performance evaluation plans allowing rapid transitions from junior executive to divisional heads.",
      icon: TrendingUp
    },
    {
      title: "Work-Life Synergy",
      description: "Flexible regional marketing timings, comprehensive maternal/paternal leave plans, and collaborative office layouts.",
      icon: Coffee
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
      <section className="bg-slate-50 border-b border-slate-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight leading-tight">
            Careers at Medinet
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            At Medinet, we believe our people are our strongest formulation. We provide a workspace that cherishes scientific integrity, ethical dedication, and continuous professional progression.
          </p>
        </div>
      </section>

      {/* Careers Work Culture & Benefits */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Medinet Life"
            title="A Rewarding Work Environment"
            description="We support our researchers, quality validation experts, and field representatives with industry-leading corporate parameters."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((ben, idx) => {
              const BenIcon = ben.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm shadow-sm text-left">
                  <div className="w-9 h-9 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-4">
                    <BenIcon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-sm mb-2">{ben.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ben.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Active Positions"
            title="Explore Open Opportunities"
            description="We are actively sourcing talented professionals who share our commitment to patient care and strict global compliance."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-8 text-left shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono mb-4 text-slate-600">
                    <span className="bg-slate-100 text-slate-900 border border-slate-200 px-2 py-0.5 rounded font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-base">
                    {job.title}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                    EXP: {job.experience} REQUIRED
                  </p>
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <span className="block text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                      // CANDIDATE REQUIREMENTS:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 shrink-0">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Secure Opportunity</span>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-900 text-white font-medium text-xs sm:text-sm rounded border border-slate-900 transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Application Form Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-xl bg-white rounded-lg shadow-sm shadow-xl border border-slate-200 overflow-hidden text-left my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono font-medium text-slate-600 uppercase tracking-widest block">
                  // APPLICATION PORTAL
                </span>
                <h2 className="text-lg font-display font-bold text-slate-900 mt-1">
                  Apply: {selectedJob.title}
                </h2>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono uppercase">{selectedJob.department} | {selectedJob.location}</p>
              </div>
              <button
                onClick={() => {
                  setIsApplying(false);
                  setSelectedJob(null);
                  removeFile();
                }}
                className="p-1 hover:bg-slate-100/50 text-slate-600 hover:text-slate-900 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
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
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                      errors.email ? "border-red-500" : "border-slate-255"
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-XXXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-955 transition-all ${
                      errors.phone ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.phone}</span>}
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Total Work Experience *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 5 years in QC wet lab"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 bg-white border rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-all ${
                      errors.experience ? "border-red-500" : "border-slate-250"
                    }`}
                  />
                  {errors.experience && <span className="text-[10px] text-red-500 font-semibold mt-0.5 block">{errors.experience}</span>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block">Message / Cover Letter Note</label>
                <textarea
                  rows={3}
                  placeholder="Summarize your key qualifications or motivation to join Medinet..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mt-1.5 px-3 py-2 bg-white border border-slate-250 rounded text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-955 transition-all"
                ></textarea>
              </div>

              {/* Resume Upload Box */}
              <div>
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block mb-2">
                  Upload Resume (PDF or DOCX, max 5MB) *
                </label>

                {uploadedFile ? (
                  <div className="flex items-center justify-between p-3 border border-slate-200 rounded bg-slate-50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-slate-900 shrink-0" />
                      <div>
                        <span className="block text-slate-900 font-semibold text-xs truncate max-w-[240px] sm:max-w-xs">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono block">
                          Size: {uploadedFile.size}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-slate-100/50 text-slate-600 hover:text-red-600 rounded transition-colors cursor-pointer"
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
                    className={`border-2 border-dashed border-slate-200 hover:border-slate-900 hover:bg-slate-50 rounded p-6 text-center cursor-pointer transition-all ${
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
                    <span className="block text-xs font-semibold text-slate-600">
                      Drag &amp; drop your resume here, or <span className="text-slate-900 hover:underline">browse</span>
                    </span>
                    <span className="block text-[9px] text-slate-400 mt-1 font-mono">
                      Accepts PDF, DOCX up to 5MB
                    </span>
                  </div>
                )}
                {errors.file && <span className="text-[10px] text-red-500 font-semibold mt-1.5 block">{errors.file}</span>}
              </div>

              {/* Form Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3 bg-white">
                <button
                  type="button"
                  onClick={() => {
                    setIsApplying(false);
                    setSelectedJob(null);
                    removeFile();
                  }}
                  className="px-4 py-2 border border-slate-250 text-slate-650 hover:bg-slate-50 font-medium text-xs sm:text-sm rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-slate-900 hover:bg-slate-900 text-white font-medium text-xs sm:text-sm rounded border border-slate-900 transition-colors flex items-center gap-2 cursor-pointer"
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
