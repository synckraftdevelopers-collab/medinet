/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface ContactProps {
  showToast: (message: string, type: "success" | "error") => void;
  params?: Record<string, string>;
}

export default function Contact({ showToast, params }: ContactProps) {
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
  const [formSuccess, setFormSuccess] = useState(false);

  // Refs for async cleanup and accessibility focus management
  const submitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const successHeadingRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        successHeadingRef.current?.focus();
      }, 50);
    }
  }, [formSuccess]);

  useEffect(() => {
    if (params?.subject) {
      setFormData((prev) => ({ ...prev, subject: params.subject }));
    }
    if (params?.section || params?.scrollTo) {
      const targetId = params.section || params.scrollTo;
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [params]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const validateContactField = (field: string, rawValue: string) => {
    const value = rawValue.trim();
    switch (field) {
      case "name":
        return !value ? "Full name is required" : value.length < 2 ? "Please enter at least 2 characters" : value.length > 60 ? "Name cannot exceed 60 characters" : "";
      case "email":
        return !value ? "Email address is required" : !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "Please enter a valid corporate email" : "";
      case "phone":
        return !value ? "Phone number is required" : !/^\+?[0-9\s-\(\)\.]{7,20}$/.test(value) ? "Please enter a valid phone number (7-20 digits)" : "";
      case "message":
        return !value ? "Message content is required" : value.length < 10 ? "Please enter at least 10 characters" : value.length > 1000 ? "Message cannot exceed 1000 characters" : "";
      default:
        return "";
    }
  };

  const handleContactFieldChange = (field: string, value: string) => {
    // Prevent invalid characters where appropriate for phone number
    if (field === "phone" && value !== "" && !/^[0-9\s\+\-\(\)\.]*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const err = validateContactField(field, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (!err) {
          delete next[field];
        } else {
          next[field] = err;
        }
        return next;
      });
    }
  };

  const handleContactFieldBlur = (field: string, value: string) => {
    const trimmed = value.trim();
    if (trimmed !== value) {
      setFormData((prev) => ({ ...prev, [field]: trimmed }));
    }
    if (trimmed || errors[field]) {
      const err = validateContactField(field, trimmed);
      setErrors((prev) => {
        const next = { ...prev };
        if (!err) {
          delete next[field];
        } else {
          next[field] = err;
        }
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {
      name: validateContactField("name", formData.name),
      email: validateContactField("email", formData.email),
      phone: validateContactField("phone", formData.phone),
      message: validateContactField("message", formData.message),
    };
    const activeErrors = Object.fromEntries(Object.entries(errs).filter(([_, v]) => v !== ""));
    setErrors(activeErrors);
    return { isValid: Object.keys(activeErrors).length === 0, activeErrors };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };
    setFormData(trimmedData);

    const { isValid, activeErrors } = validate();
    if (!isValid) {
      showToast("Please fix the validation errors before submitting.", "error");
      const firstInvalidField = Object.keys(activeErrors)[0];
      if (firstInvalidField) {
        setTimeout(() => {
          document.getElementById(`contact-${firstInvalidField}`)?.focus();
        }, 10);
      }
      return;
    }

    setSubmitting(true);
    submitTimerRef.current = setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      showToast("Thank you! Your message has been routed to our corporate relations team.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: ""
      });
      setErrors({});
    }, 1200);
  };

  const openDirections = (office: Office) => {
    const query = encodeURIComponent(office.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white border-b border-border">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
          <span className="utility-badge-blue mb-5">
            <Globe2 className="w-3 h-3 text-primary" />
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
            Contact Our <span className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">Global Offices</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Have questions regarding wholesale sourcing, territorial licensing rights, or adverse drug event reporting? Reach out to our dedicated corporate departments globally.
          </p>
        </div>
      </section>

      {/* Offices and Interactive Map Selector */}
      <section className="py-20 bg-background text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Global Coordinates"
            title="Our Corporate Locations"
            description="Select an office coordinate card below to update the live locator map embed and view localized contacts."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-12">
            {/* Address Cards List */}
            <div className="lg:col-span-5 space-y-4">
              {OFFICES.map((off, idx) => {
                let badgeBg = "bg-primary/10";
                let badgeText = "text-primary";
                let BadgeIcon = Building2;

                if (off.type === "Manufacturing") {
                  badgeBg = "bg-success/10";
                  badgeText = "text-success";
                  BadgeIcon = Factory;
                } else if (off.type === "Research") {
                  badgeBg = "bg-purple-100 dark:bg-purple-900/20";
                  badgeText = "text-purple-600 dark:text-purple-400";
                  BadgeIcon = FlaskConical;
                } else if (off.type === "Global HQ" || off.type === "Regional HQ" || off.type === "Global Office") {
                  badgeBg = "bg-accent/10";
                  badgeText = "text-accent";
                  BadgeIcon = Globe2;
                }

                const isActive = selectedOffice.name === off.name;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedOffice(off)}
                    className={`rounded-[24px] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group/card ${isActive
                        ? "bg-gradient-to-br from-heading to-primary border-none shadow-lg hover:-translate-y-2"
                        : "bg-white border border-border shadow-sm hover:border-secondary hover:shadow-md hover:-translate-y-2"
                      }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform duration-300 ${isActive ? 'bg-white/10' : 'bg-alt-bg border border-border'}`}>
                          <BadgeIcon className={`w-4 h-4 ${isActive ? 'text-white' : badgeText}`} />
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest ${isActive ? 'bg-white/10 text-white' : `${badgeBg} ${badgeText}`}`}>
                          {off.type}
                        </span>
                      </div>

                      <h3 className={`font-display font-bold text-lg sm:text-xl transition-colors ${isActive ? "text-white" : "text-heading group-hover/card:text-primary"}`}>
                        {off.name}
                      </h3>

                      <p className="text-sm mt-3 leading-relaxed flex items-start gap-2">
                        <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isActive ? 'text-white/80' : 'text-accent'}`} />
                        <span className={isActive ? 'text-white/90' : 'text-body'}>{off.address}</span>
                      </p>
                    </div>

                    <div className={`mt-2 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono p-6 border-t ${isActive ? 'border-white/10 bg-white/5' : 'border-border bg-alt-bg'}`}>
                      <div className="space-y-1.5 text-[11px] uppercase font-bold tracking-wider">
                        <span className="flex items-center gap-2">
                          <PhoneCall className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-primary'}`} />
                          <span className={isActive ? 'text-white/90' : 'text-body'}>{off.phone}</span>
                        </span>
                        <span className="flex items-center gap-2 truncate max-w-[200px]">
                          <Mail className={`w-3.5 h-3.5 ${isActive ? 'text-white/80' : 'text-secondary'}`} />
                          <span className={isActive ? 'text-white/90' : 'text-body'}>{off.email}</span>
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openDirections(off);
                        }}
                        aria-label={`Get directions to ${off.name} office in Google Maps`}
                        className={`shrink-0 rounded-full px-[18px] py-[12px] flex items-center justify-center gap-1.5 font-bold transition-all duration-300 group/btn ${isActive
                            ? "bg-white text-primary hover:bg-gray-50 shadow-sm"
                            : "utility-button-primary"
                          }`}
                      >
                        <Navigation className={`w-3.5 h-3.5 ${isActive ? '' : 'text-white'}`} />
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
                <span className="utility-badge-blue">
                  <MapPinned className="w-3 h-3 text-primary" />
                  Current Location
                </span>
              </div>
              <div className="h-[420px] lg:h-[500px] min-h-[360px] rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border bg-alt-bg">
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
                  <div className="w-full h-full flex items-center justify-center text-muted bg-alt-bg p-8 text-center text-sm font-mono font-bold tracking-widest uppercase">
                    Locator Map Not Available for this Office.
                  </div>
                )}
              </div>

              {/* Optional Quick Info */}
              <div className="utility-card p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Clock3 className="w-3 h-3" /> Timezone
                  </div>
                  <span className="text-xs font-bold text-heading">Local Time</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono font-bold tracking-widest uppercase">
                    <PhoneCall className="w-3 h-3" /> Business Hours
                  </div>
                  <span className="text-xs font-bold text-heading">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Headphones className="w-3 h-3" /> Support
                  </div>
                  <span className="text-xs font-bold text-heading">24/7 Desk</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono font-bold tracking-widest uppercase">
                    <ShieldCheck className="w-3 h-3" /> Emergency
                  </div>
                  <span className="text-xs font-bold text-heading">Active Line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Communications Form */}
      <section id="contact-form" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white text-left">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="utility-card overflow-hidden transition-all duration-300 shadow-md">

            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <MessageSquareMore className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-heading text-xl sm:text-2xl">Send Corporate Message</h3>
                  <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase text-muted tracking-widest mt-1">DIRECTLY ROUTED TO SPECIALIZED DEPARTMENT HEADS</p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

              {formSuccess ? (
                <div
                  ref={successHeadingRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="p-10 bg-green-50/50 border border-green-200 rounded-card text-center space-y-4 my-6 animate-fade-in focus:outline-none"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-300">
                    <CheckCircle2 className="w-9 h-9 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-heading">Message Sent Successfully!</h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for contacting MediNet. Your inquiry has been routed to our corporate relations team. A regional representative will reach out within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSuccess(false);
                        setTimeout(() => firstInputRef.current?.focus(), 50);
                      }}
                      className="utility-button-primary px-8 py-3"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="group/input">
                      <label htmlFor="contact-name" className="text-[10px] font-mono text-muted font-bold uppercase tracking-widest block mb-2">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within/input:text-primary group-focus-within/input:scale-110 transition-all duration-300">
                          <UserRound className="w-4 h-4" />
                        </div>
                        <input
                          ref={firstInputRef}
                          id="contact-name"
                          type="text"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="name"
                          maxLength={60}
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleContactFieldChange("name", e.target.value)}
                          onBlur={(e) => handleContactFieldBlur("name", e.target.value)}
                          className={`utility-input pl-11 h-[54px] ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "cnt-name-err" : undefined}
                        />
                      </div>
                      <div className="min-h-[20px] pt-1 flex items-start">
                        {errors.name ? (
                          <span id="cnt-name-err" role="alert" className="text-[11px] text-red-500 font-mono font-medium flex items-center gap-1 animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.name}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="contact-email" className="text-[10px] font-mono text-muted font-bold uppercase tracking-widest block mb-2">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within/input:text-primary group-focus-within/input:scale-110 transition-all duration-300">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="email"
                          maxLength={100}
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => handleContactFieldChange("email", e.target.value)}
                          onBlur={(e) => handleContactFieldBlur("email", e.target.value)}
                          className={`utility-input pl-11 h-[54px] ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "cnt-email-err" : undefined}
                        />
                      </div>
                      <div className="min-h-[20px] pt-1 flex items-start">
                        {errors.email ? (
                          <span id="cnt-email-err" role="alert" className="text-[11px] text-red-500 font-mono font-medium flex items-center gap-1 animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.email}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="group/input">
                      <label htmlFor="contact-phone" className="text-[10px] font-mono text-muted font-bold uppercase tracking-widest block mb-2">Phone Number <span className="text-red-500" aria-hidden="true">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within/input:text-primary group-focus-within/input:scale-110 transition-all duration-300">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          disabled={submitting}
                          aria-required="true"
                          autoComplete="tel"
                          maxLength={20}
                          placeholder="Enter contact number"
                          value={formData.phone}
                          onChange={(e) => handleContactFieldChange("phone", e.target.value)}
                          onBlur={(e) => handleContactFieldBlur("phone", e.target.value)}
                          className={`utility-input pl-11 h-[54px] ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "cnt-phone-err" : undefined}
                        />
                      </div>
                      <div className="min-h-[20px] pt-1 flex items-start">
                        {errors.phone ? (
                          <span id="cnt-phone-err" role="alert" className="text-[11px] text-red-500 font-mono font-medium flex items-center gap-1 animate-fade-in">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.phone}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="contact-subject" className="text-[10px] font-mono text-muted font-bold uppercase tracking-widest block mb-2">Subject of Inquiry</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within/input:text-primary group-focus-within/input:scale-110 transition-all duration-300">
                          <ClipboardList className="w-4 h-4" />
                        </div>
                        <select
                          id="contact-subject"
                          aria-label="Subject of Inquiry"
                          disabled={submitting}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="utility-input pl-11 h-[54px] appearance-none pr-10"
                        >
                          <option value="general">General Sourcing / Wholesaling</option>
                          <option value="licensing">Territorial Rights & Franchising</option>
                          <option value="pve">Pharmacovigilance (ADR Reporting)</option>
                          <option value="contract">Contract Manufacturing Services</option>
                          <option value="careers">Careers & Human Resources</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="min-h-[20px] pt-1"></div>
                    </div>
                  </div>

                  <div className="group/input">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="contact-message" className="text-[10px] font-mono text-muted font-bold uppercase tracking-widest">Message Content <span className="text-red-500" aria-hidden="true">*</span></label>
                      <span className={`text-[10px] font-mono ${formData.message.length > 900 ? "text-amber-500 font-bold" : "text-muted"}`}>
                        {formData.message.length}/1000 chars
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-[18px] text-muted group-focus-within/input:text-primary group-focus-within/input:scale-110 transition-all duration-300">
                        <MessageSquareText className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        required
                        disabled={submitting}
                        aria-required="true"
                        maxLength={1000}
                        placeholder="Enter the full content of your corporate message here..."
                        value={formData.message}
                        onChange={(e) => handleContactFieldChange("message", e.target.value)}
                        onBlur={(e) => handleContactFieldBlur("message", e.target.value)}
                        className={`utility-input pl-11 min-h-[150px] py-[18px] resize-y ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "cnt-msg-err" : undefined}
                      ></textarea>
                    </div>
                    <div className="min-h-[20px] pt-1 flex items-start">
                      {errors.message ? (
                        <span id="cnt-msg-err" role="alert" className="text-[11px] text-red-500 font-mono font-medium flex items-center gap-1 animate-fade-in">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.message}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full utility-button-primary h-[58px] text-sm sm:text-base font-bold flex items-center justify-center gap-2 mt-2 transition-all duration-300 ${submitting ? "opacity-80 cursor-not-allowed" : ""}`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendHorizontal className="w-5 h-5 shrink-0" />
                        Submit Corporate Message
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 bg-alt-bg border border-border rounded-[16px] p-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider uppercase text-heading">
                  <div className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center">
                    <Clock3 className="w-3.5 h-3.5 text-muted" />
                  </div>
                  Response Time 24 Hours
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider uppercase text-heading">
                  <div className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-muted" />
                  </div>
                  Secure Transmission
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider uppercase text-heading">
                  <div className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center">
                    <BadgeCheck className="w-3.5 h-3.5 text-muted" />
                  </div>
                  WHO-GMP Corporate Support
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider uppercase text-heading">
                  <div className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center">
                    <Headset className="w-3.5 h-3.5 text-muted" />
                  </div>
                  Dedicated Team
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white text-left">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge="Frequently Asked Queries"
            title="Sourcing & Regulatory Answers"
            description="Review quick clarifications regarding PCD monopolies, comparative clinical bioequivalency curves, and wholesale terms."
            centered
          />

          <div className="max-w-[820px] mx-auto space-y-4 mt-12">
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
                  className={`border rounded-[18px] overflow-hidden transition-all duration-300 group/faq ${isOpen
                      ? "bg-gradient-to-r from-primary/5 to-white border-primary border-l-[4px] shadow-md"
                      : "bg-white border-border hover:bg-alt-bg hover:border-secondary hover:shadow-sm hover:-translate-y-[2px]"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-btn-${idx}`}
                    className="w-full p-[22px] flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover/faq:scale-110">
                        <FaqIcon className="w-[18px] h-[18px] text-white" />
                      </div>
                      <span className="font-display font-bold text-heading text-sm sm:text-base leading-snug">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted"
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      className="px-[22px] pb-[22px] pl-[78px] text-sm sm:text-base text-body leading-relaxed border-t border-border/50 pt-4 animate-fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Optional Support Box */}
          <div className="max-w-[820px] mx-auto mt-12 bg-gradient-to-br from-heading to-primary rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-5 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <LifeBuoy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg sm:text-xl">Still Need Assistance?</h4>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">Our regulatory and sourcing specialists are available to assist your business inquiries.</p>
              </div>
            </div>
            <button
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label="Scroll to Contact Our Team form"
              className="shrink-0 px-6 py-3 bg-white text-heading font-bold text-sm rounded-[14px] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm group"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
