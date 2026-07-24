/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { AppRoute } from "../hooks/useRoute";
import { PRODUCTS, THERAPEUTIC_CATEGORIES } from "../data";
import { Product } from "../types";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
  ArrowRight,
  PhoneCall,
  Download,
  ShieldCheck,
  FileText,
  Cookie,
  Scale,
  Copyright,
  BadgeCheck,
  Info,
  HeartPulse,
  Pill,
  ShieldPlus,
  Leaf,
  House,
  Building2,
  Package,
  FlaskConical,
  Handshake,
  Briefcase,
  Newspaper,
  Phone
} from "lucide-react";

interface NavbarProps {
  currentRoute: AppRoute;
  navigate: (route: string, queryParams?: Record<string, string>) => void;
}

const iconMap: Record<string, any> = {
  Activity,
  Brain,
  Droplet,
  Sparkles,
  ShieldAlert,
  Wind,
  Bone,
  HeartHandshake,
};

export default function Navbar({ currentRoute, navigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"products" | "about" | "legal" | null>(null);

  // Enquiry Modal State
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.message.trim()) errors.message = "Please provide enquiry details";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setIsEnquiryOpen(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      alert("Thank you! Your enquiry has been submitted successfully. We will get back to you soon.");
    }, 1500);
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync search input focus
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle global key events for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.genericName.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate("products", { search: searchQuery });
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const selectSearchResult = (product: Product) => {
    setIsSearchOpen(false);
    navigate("products", { id: product.id });
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-primary/40 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-slide-in">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Search className="w-5 h-5 text-muted shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products by brand name or generic API..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full text-heading placeholder:text-muted focus:outline-none text-base"
              />
              <span className="hidden md:inline-flex text-[10px] font-mono bg-alt-bg px-1.5 py-0.5 rounded text-muted border border-border">
                ESC
              </span>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 bg-alt-bg/50 hover:bg-alt-bg text-muted hover:text-body rounded-card shadow-sm hover:shadow-md transition-all duration-300 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </form>

            <div className="max-h-[380px] overflow-y-auto p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  <p className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-2 px-2">
                    Found {searchResults.length} Formulations
                  </p>
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => selectSearchResult(product)}
                      className="w-full text-left flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-heading text-sm group-hover:text-blue-600 flex items-center gap-2">
                          {product.name}
                          <span className="text-xs font-normal text-muted font-mono">
                            {product.strength}
                          </span>
                        </div>
                        <div className="text-xs text-body font-mono italic mt-0.5">
                          {product.genericName}
                        </div>
                        <div className="text-xs text-muted mt-1 line-clamp-1">
                          {product.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="text-center py-10 px-4">
                  <p className="text-body text-sm">No formulations found for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-muted text-xs mt-1">Try searching for ingredients like Atorvastatin, Ramipril, Gabapentin.</p>
                </div>
              ) : (
                <div className="py-6 px-2">
                  <p className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-3">
                    Therapeutic Segments
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {THERAPEUTIC_CATEGORIES.map((cat) => {
                      const IconComponent = iconMap[cat.iconName] || Activity;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setIsSearchOpen(false);
                            navigate("products", { category: cat.id });
                          }}
                          className="flex items-center gap-3 p-2.5 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm border border-border hover:border-blue-100 hover:bg-background/50 text-left transition-all"
                        >
                          <div className="w-8 h-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm bg-background flex items-center justify-center text-body">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-heading">{cat.name}</div>
                            <div className="text-xs text-muted line-clamp-1">{cat.description}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,.04)] border-b border-[#E2E8F0] h-[72px] md:h-[80px] lg:h-[88px]"
            : "bg-transparent h-[80px] md:h-[88px] lg:h-[96px]"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px] min-[1440px]:px-[32px] h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => navigate("home")}
                className="flex items-center text-left focus:outline-none hover:opacity-90 transition-opacity"
                id="navbar-logo"
              >
                <Image 
                  src="/logo.svg" 
                  alt="Medinet Pharmaceuticals Logo" 
                  width={260} 
                  height={64}
                  priority
                  className="w-auto object-contain h-10 md:h-[44px] lg:h-[48px] min-[1440px]:h-[56px]" 
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-center min-w-0 gap-[24px] xl:gap-[32px] min-[1440px]:gap-[36px]">
              <button
                onClick={() => navigate("home")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "home" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                HOME
              </button>

              {/* About dropdown triggers route page directly or via submenus */}
              <button
                onClick={() => navigate("about")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all flex items-center gap-1 ${currentRoute === "about" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                ABOUT
              </button>

              {/* Products Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("products")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => navigate("products")}
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all flex items-center gap-1 ${currentRoute === "products" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                    }`}
                >
                  PRODUCTS
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "products" ? "rotate-180" : ""}`} />
                </button>

                {/* Products Mega Menu Dropdown */}
                {activeMegaMenu === "products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-5 grid grid-cols-2 gap-3 animate-fade-in mt-1">
                    <div className="col-span-2 border-b border-[#DBEAFE] pb-3 mb-2 flex">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase shadow-[0_4px_12px_rgba(37,99,235,.08)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                        Therapeutic Segments
                      </span>
                    </div>
                    {THERAPEUTIC_CATEGORIES.map((cat) => {
                      let IconComponent = Activity;
                      if (cat.name.includes("Cardio")) IconComponent = HeartPulse;
                      else if (cat.name.includes("Neuro")) IconComponent = Brain;
                      else if (cat.name.includes("Gastro")) IconComponent = Pill;
                      else if (cat.name.includes("Derma")) IconComponent = Sparkles;
                      else if (cat.name.includes("Anti-infect") || cat.name.includes("Antibiotic")) IconComponent = ShieldPlus;
                      else if (cat.name.includes("Respir")) IconComponent = Wind;
                      else if (cat.name.includes("Ortho") || cat.name.includes("Pain")) IconComponent = Bone;
                      else if (cat.name.includes("Nutra") || cat.name.includes("Wellness")) IconComponent = Leaf;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigate("products", { category: cat.id });
                          }}
                          className="flex items-start gap-3 p-[14px] rounded-[14px] bg-transparent border border-transparent hover:bg-[linear-gradient(90deg,#F8FBFF,#EFF6FF)] hover:border-[#BFDBFE] hover:translate-x-[6px] hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(37,99,235,.10)] text-left transition-all duration-300 ease-[ease] cursor-pointer group"
                        >
                          <div className="w-[46px] h-[46px] rounded-[14px] bg-[linear-gradient(135deg,#EFF6FF,#DBEAFE)] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[linear-gradient(135deg,#2563EB,#38BDF8)] group-hover:text-white transition-all duration-300">
                            <IconComponent className="w-5 h-5 group-hover:rotate-[5deg] transition-transform duration-300" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300">
                              {cat.name}
                            </div>
                            <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5 font-sans">
                              {cat.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                    <div className="col-span-2 mt-3 bg-[linear-gradient(90deg,#F8FAFC,#FFFFFF)] border border-[#DBEAFE] p-3 rounded-[18px] flex items-center justify-between shadow-[0_10px_30px_rgba(11,31,77,.06)]">
                      <div className="text-[11px] text-[#64748B] font-sans ml-2">
                        Looking for something specific? Search our entire portfolio.
                      </div>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          setIsSearchOpen(true);
                        }}
                        className="px-4 py-2 text-[11px] font-mono font-semibold text-white bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] rounded-[12px] flex items-center gap-1.5 hover:bg-[linear-gradient(135deg,#2563EB,#38BDF8)] hover:shadow-[0_12px_28px_rgba(37,99,235,.30)] hover:scale-[1.03] transition-all duration-300"
                      >
                        SEARCH NOW <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate("research-development")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "research-development" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                R&D
              </button>

              <button
                onClick={() => navigate("quality")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "quality" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                QUALITY
              </button>

              <button
                onClick={() => navigate("business-partners")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "business-partners" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                PARTNERS
              </button>

              <button
                onClick={() => navigate("careers")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "careers" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                CAREERS
              </button>

              <button
                onClick={() => navigate("news-events")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "news-events" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                NEWS
              </button>

              <button
                onClick={() => navigate("contact")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "contact" ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
              >
                CONTACT
              </button>
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center justify-end shrink-0 gap-3 xl:gap-5 min-[1440px]:gap-6">
              {/* Legal Dropdown */}
              <div
                className="hidden lg:block relative"
                onMouseEnter={() => setActiveMegaMenu("legal")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all flex items-center gap-1 ${
                    currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright") ? "text-primary bg-secondary/10 border border-secondary/20 rounded-xl shadow-sm" : "text-body hover:text-secondary relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] border border-transparent"
                  }`}
                >
                  LEGAL
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "legal" ? "rotate-180" : ""}`} />
                </button>

                {activeMegaMenu === "legal" && (
                  <div className="absolute right-0 top-[calc(100%+8px)] w-[420px] bg-[rgba(255,255,255,.96)] backdrop-blur-[18px] rounded-[28px] border border-[rgba(37,99,235,.12)] shadow-[0_30px_80px_rgba(15,23,42,.16)] p-5 animate-fade-in origin-top z-50 flex flex-col scale-100 transition-all duration-[250ms]">
                    
                    {/* Top Header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E2E8F0] px-2">
                      <div className="w-10 h-10 rounded-[12px] bg-[linear-gradient(135deg,#F8FAFC,#F1F5F9)] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                        <Scale className="w-5 h-5 text-[#0B1F4D]" />
                      </div>
                      <div>
                        <h4 className="font-display font-[700] text-[#0F172A] text-[15px]">Legal & Compliance</h4>
                        <p className="text-[#64748B] text-[11px] font-medium mt-0.5">Policies, Security & Corporate Information</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <a
                        href="/legal/privacy-policy"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#EFF6FF,#F8FBFF)] hover:border hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(37,99,235,.10)] hover:translate-x-[6px] active:bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] active:text-white border border-transparent transition-all duration-[300ms] group/item"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#2563EB,#38BDF8)] shadow-[0_10px_24px_rgba(37,99,235,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <ShieldCheck className="w-[22px] h-[22px] text-white group-active/item:text-[#2563EB]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Privacy Policy</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Protecting your information</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>
                      
                      <a
                        href="/legal/terms-conditions"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#EFF6FF,#F8FBFF)] hover:border hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(37,99,235,.10)] hover:translate-x-[6px] active:bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] active:text-white border border-transparent transition-all duration-[300ms] group/item"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#0D9488,#2DD4BF)] shadow-[0_10px_24px_rgba(13,148,136,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <FileText className="w-[22px] h-[22px] text-white group-active/item:text-[#2563EB]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Terms & Conditions</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Usage guidelines</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/disclaimer"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#EFF6FF,#F8FBFF)] hover:border hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(37,99,235,.10)] hover:translate-x-[6px] active:bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] active:text-white border border-transparent transition-all duration-[300ms] group/item"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#F59E0B,#FBBF24)] shadow-[0_10px_24px_rgba(245,158,11,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <Scale className="w-[22px] h-[22px] text-white group-active/item:text-[#2563EB]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Disclaimer</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Legal information</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/cookie-policy"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#EFF6FF,#F8FBFF)] hover:border hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(37,99,235,.10)] hover:translate-x-[6px] active:bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] active:text-white border border-transparent transition-all duration-[300ms] group/item"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#8B5CF6,#A78BFA)] shadow-[0_10px_24px_rgba(139,92,246,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <Cookie className="w-[22px] h-[22px] text-white group-active/item:text-[#2563EB]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Cookie Policy</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Tracking preferences</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/copyright-notice"
                        onClick={() => setActiveMegaMenu(null)}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#EFF6FF,#F8FBFF)] hover:border hover:border-[#BFDBFE] hover:shadow-[0_12px_28px_rgba(37,99,235,.10)] hover:translate-x-[6px] active:bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] active:text-white border border-transparent transition-all duration-[300ms] group/item"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#2563EB,#0EA5E9)] shadow-[0_10px_24px_rgba(37,99,235,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <BadgeCheck className="w-[22px] h-[22px] text-white group-active/item:text-[#2563EB]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Copyright Notice</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Ownership & licensing</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#2563EB] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>
                    </div>
                    
                    {/* Bottom Area */}
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC] rounded-b-[24px] -mx-5 -mb-5 p-[18px] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[13px] font-[500] text-[#0F172A]">
                        <Info className="w-[18px] h-[18px] text-[#2563EB]" />
                        Need legal assistance?
                      </div>
                      <a href="mailto:corporate@medinetpharma.com" className="px-4 py-2 bg-[#0B1F4D] hover:bg-[#2563EB] text-white text-xs font-[600] rounded-full transition-colors duration-[300ms] shadow-[0_4px_12px_rgba(11,31,77,.15)]">
                        Contact Legal Team
                      </a>
                    </div>

                  </div>
                )}
              </div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded text-[#334155] hover:text-[#2563EB] hover:bg-[#F8FAFC] transition-colors duration-300 focus:outline-none"
                aria-label="Search"
                title="Search Products (Ctrl+K)"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Quick Contact CTA */}
              <button
                type="button"
                aria-label="Inquire Now"
                aria-haspopup="dialog"
                aria-expanded={isEnquiryOpen}
                onClick={() => setIsEnquiryOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsEnquiryOpen(true);
                  }
                }}
                className="utility-button-primary hidden md:inline-flex py-2 px-4"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                INQUIRE NOW
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 lg:hidden flex items-center justify-center rounded-[12px] bg-transparent hover:bg-[#EFF6FF] border border-transparent hover:border-[#BFDBFE] text-[#0F172A] hover:text-[#2563EB] transition-all duration-[300ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] active:scale-[0.95]"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-[9998] bg-[#0F172A]/45 backdrop-blur-[12px]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          {isMobileMenuOpen && (
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 h-[100vh] w-[320px] bg-[#FFFFFF] z-[9999] flex flex-col overflow-hidden shadow-[0_25px_80px_rgba(15,23,42,.25)] border-l border-[#E2E8F0]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Top of Drawer */}
              <div className="flex items-center justify-between p-4 shrink-0">
                <div className="flex flex-col">
                  <img src="/logo.svg" alt="Medinet Logo" className="h-8 w-auto object-contain object-left mb-1" />
                  <span className="text-[#64748B] text-xs font-medium font-sans">Medinet Pharmaceuticals</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-[#F1F5F9] rounded-full text-[#0F172A] transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="h-px w-full bg-[#E2E8F0] shrink-0" />
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-[16px]">
                {[
                  { type: "link", label: "Home", route: "home", icon: House },
                  { type: "link", label: "About", route: "about", icon: Building2 },
                  { type: "accordion", id: "products", label: "Products", icon: Package },
                  { type: "link", label: "R&D", route: "research-development", icon: FlaskConical },
                  { type: "link", label: "Quality", route: "quality", icon: ShieldCheck },
                  { type: "link", label: "Partners", route: "business-partners", icon: Handshake },
                  { type: "link", label: "Careers", route: "careers", icon: Briefcase },
                  { type: "link", label: "News", route: "news-events", icon: Newspaper },
                  { type: "link", label: "Contact", route: "contact", icon: Phone },
                  { type: "accordion", id: "legal", label: "Legal", icon: Scale }
                ].map((item, index) => {
                  if (item.type === "link") {
                    const isActive = currentRoute === item.route;
                    return (
                      <motion.button
                        key={item.route || item.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (item.route) navigate(item.route);
                        }}
                        className={`w-full flex items-center gap-3 px-[16px] h-[56px] rounded-[14px] transition-all duration-[250ms] group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shrink-0 ${
                          isActive
                            ? "bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_10px_30px_rgba(37,99,235,.25)] text-white"
                            : "bg-transparent hover:bg-[#EFF6FF] border border-transparent hover:border-[#BFDBFE] text-[#0F172A]"
                        }`}
                      >
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.04 + 0.1 }}>
                          {item.icon && <item.icon className={`w-5 h-5 transition-transform duration-[250ms] group-hover:scale-110 ${isActive ? "text-white" : "text-[#2563EB]"}`} />}
                        </motion.div>
                        <span className="font-semibold text-[15px]">
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  } else if (item.id === "products") {
                    const isActive = currentRoute === "products";
                    return (
                      <motion.div key="products-accordion" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="relative shrink-0 flex flex-col">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "products" ? null : "products")}
                          className={`w-full flex items-center justify-between px-[16px] h-[56px] rounded-[14px] transition-all duration-[250ms] group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                            isActive
                                ? "bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_10px_30px_rgba(37,99,235,.25)] text-white"
                                : "bg-transparent hover:bg-[#EFF6FF] border border-transparent hover:border-[#BFDBFE] text-[#0F172A]"
                          }`}
                          aria-expanded={activeMobileAccordion === "products"}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.04 + 0.1 }}>
                              <Package className={`w-5 h-5 transition-transform duration-[250ms] group-hover:scale-110 ${isActive ? "text-white" : "text-[#2563EB]"}`} />
                            </motion.div>
                            <span className="font-semibold text-[15px]">Products</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === "products" ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {activeMobileAccordion === "products" && (
                            <motion.div
                              key="products-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-2 pt-3 pb-1 pl-[48px] pr-4">
                                <button
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("products");
                                  }}
                                  className="text-left py-1 text-[#64748B] hover:text-[#2563EB] text-[15px] font-medium transition-colors"
                                >
                                  All Products
                                </button>
                                {PRODUCTS.map((product) => (
                                  <button
                                    key={product.id}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      navigate("products", { id: product.id });
                                    }}
                                    className="text-left py-1 text-[#64748B] hover:text-[#2563EB] text-[15px] font-medium transition-colors"
                                  >
                                    {product.name}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  } else if (item.id === "legal") {
                    const isActive = currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright");
                    return (
                      <motion.div key="legal-accordion" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="relative shrink-0 flex flex-col">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "legal" ? null : "legal")}
                          className={`w-full flex items-center justify-between px-[16px] h-[56px] rounded-[14px] transition-all duration-[250ms] group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                            isActive
                                ? "bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_10px_30px_rgba(37,99,235,.25)] text-white"
                                : "bg-transparent hover:bg-[#EFF6FF] border border-transparent hover:border-[#BFDBFE] text-[#0F172A]"
                          }`}
                          aria-expanded={activeMobileAccordion === "legal"}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.04 + 0.1 }}>
                              <Scale className={`w-5 h-5 transition-transform duration-[250ms] group-hover:scale-110 ${isActive ? "text-white" : "text-[#2563EB]"}`} />
                            </motion.div>
                            <span className="font-semibold text-[15px]">Legal</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileAccordion === "legal" ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {activeMobileAccordion === "legal" && (
                            <motion.div
                              key="legal-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-2 pt-3 pb-1 pl-[48px] pr-4">
                                {[
                                  { label: "Privacy Policy", route: "/legal/privacy-policy" },
                                  { label: "Terms & Conditions", route: "/legal/terms-conditions" },
                                  { label: "Disclaimer", route: "/legal/disclaimer" },
                                  { label: "Cookie Policy", route: "/legal/cookie-policy" },
                                  { label: "Copyright Notice", route: "/legal/copyright-notice" }
                                ].map((lItem) => (
                                  <a
                                    key={lItem.route}
                                    href={lItem.route}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-1 text-[#64748B] hover:text-[#2563EB] text-[15px] font-medium transition-colors block"
                                  >
                                    {lItem.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                })}
              </div>
              
              {/* Pinned Bottom CTA */}
              <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-[#E2E8F0] bg-white shrink-0 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 h-[56px] bg-[#0B1F4D] hover:bg-[#2563EB] text-white rounded-[14px] font-semibold text-[15px] transition-all duration-[300ms] shadow-[0_10px_20px_rgba(11,31,77,.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 group shrink-0"
                >
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-[300ms]" />
                  Inquire Now
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 h-[56px] bg-transparent hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#BFDBFE] text-[#0F172A] rounded-[14px] font-semibold text-[15px] transition-all duration-[300ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 group shrink-0"
                >
                  <Search className="w-5 h-5 text-[#64748B] group-hover:text-[#2563EB] transition-colors" />
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Enquiry Modal */}
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm overflow-y-auto animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
            <div className="w-full max-w-lg bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-2xl border border-border overflow-hidden text-left flex flex-col mt-16 max-h-[85vh]">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-border bg-background">
                <div>
                  <span className="text-[10px] font-mono font-medium text-body uppercase tracking-widest block">
                    // QUICK CONTACT
                  </span>
                  <h2 id="enquiry-modal-title" className="text-lg font-display font-medium text-heading mt-1">
                    Submit an Enquiry
                  </h2>
                </div>
                <button
                  onClick={() => setIsEnquiryOpen(false)}
                  className="p-1.5 hover:bg-alt-bg/50 text-muted hover:text-body rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleEnquirySubmit} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-medium text-body">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full mt-1.5 px-3 py-2 border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.name ? "border-red-500" : "border-border"}`}
                    />
                    {formErrors.name && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.name}</span>}
                  </div>
                  <div>
                    <label className="text-xs font-mono font-medium text-body">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full mt-1.5 px-3 py-2 border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.email ? "border-red-500" : "border-border"}`}
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-medium text-body">Phone/Whatsapp <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full mt-1.5 px-3 py-2 border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.phone ? "border-red-500" : "border-border"}`}
                    />
                    {formErrors.phone && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="text-xs font-mono font-medium text-body">Company (Optional)</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full mt-1.5 px-3 py-2 border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-medium text-body">Enquiry Details <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-sm focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.message ? "border-red-500" : "border-border"}`}
                    placeholder="Please let us know how we can help you..."
                  ></textarea>
                  {formErrors.message && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.message}</span>}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-border flex items-center justify-end gap-3 bg-white mt-4">
                  <button
                    type="button"
                    onClick={() => setIsEnquiryOpen(false)}
                    className="px-4 py-2 border border-border text-body hover:bg-background font-mono text-xs font-medium rounded-btn shadow-btn hover:shadow-btn-hover transition-all duration-300 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="px-5 py-2 bg-primary hover:bg-black text-white font-mono text-xs font-medium rounded-btn shadow-btn hover:shadow-btn-hover transition-all duration-300 shadow-sm transition-all flex items-center justify-center gap-1.5 min-w-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
                  >
                    {formSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        SUBMIT ENQUIRY
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
