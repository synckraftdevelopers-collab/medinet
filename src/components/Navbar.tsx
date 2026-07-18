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
  Copyright
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
                className="p-1.5 hover:bg-background text-muted hover:text-body rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shrink-0 transition-colors"
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
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "home" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                HOME
              </button>

              {/* About dropdown triggers route page directly or via submenus */}
              <button
                onClick={() => navigate("about")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all flex items-center gap-1 ${currentRoute === "about" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
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
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all flex items-center gap-1 ${currentRoute === "products" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                    }`}
                >
                  PRODUCTS
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "products" ? "rotate-180" : ""}`} />
                </button>

                {/* Products Mega Menu Dropdown */}
                {activeMegaMenu === "products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-5 grid grid-cols-2 gap-3 animate-fade-in mt-1">
                    <div className="col-span-2 border-b border-border pb-2 mb-1">
                      <div className="text-[10px] font-mono font-semibold uppercase text-muted tracking-wider">
                        Therapeutic Segments
                      </div>
                    </div>
                    {THERAPEUTIC_CATEGORIES.map((cat) => {
                      const IconComponent = iconMap[cat.iconName] || Activity;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigate("products", { category: cat.id });
                          }}
                          className="flex items-start gap-2.5 p-2 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                              {cat.name}
                            </div>
                            <div className="text-[11px] text-body line-clamp-1 mt-0.5 font-sans">
                              {cat.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                    <div className="col-span-2 mt-2 bg-[#F8FAFC] border border-[#E2E8F0] p-2.5 rounded-[12px] flex items-center justify-between">
                      <div className="text-[11px] text-[#64748B] font-sans">
                        Looking for something specific? Search our entire portfolio.
                      </div>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          setIsSearchOpen(true);
                        }}
                        className="text-[11px] font-mono font-semibold text-[#334155] flex items-center gap-1 hover:text-[#2563EB] transition-colors duration-300"
                      >
                        SEARCH NOW <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate("research-development")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "research-development" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                R&D
              </button>

              <button
                onClick={() => navigate("quality")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "quality" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                QUALITY
              </button>

              <button
                onClick={() => navigate("business-partners")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "business-partners" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                PARTNERS
              </button>

              <button
                onClick={() => navigate("careers")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "careers" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                CAREERS
              </button>

              <button
                onClick={() => navigate("news-events")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "news-events" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
              >
                NEWS
              </button>

              <button
                onClick={() => navigate("contact")}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded transition-all ${currentRoute === "contact" ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
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
                    currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright") ? "text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]" : "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent"
                  }`}
                >
                  LEGAL
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "legal" ? "rotate-180" : ""}`} />
                </button>

                {activeMegaMenu === "legal" && (
                  <div className="absolute right-0 top-full w-[300px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-3 animate-fade-in mt-1 flex flex-col gap-1 z-50">
                    <a
                      href="/legal/privacy-policy"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                        Privacy Policy
                      </div>
                    </a>
                    
                    <a
                      href="/legal/terms-conditions"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                        Terms & Conditions
                      </div>
                    </a>

                    <a
                      href="/legal/disclaimer"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                        Disclaimer
                      </div>
                    </a>

                    <a
                      href="/legal/cookie-policy"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <Cookie className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                        Cookie Policy
                      </div>
                    </a>

                    <a
                      href="/legal/copyright-notice"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <Copyright className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300">
                        Copyright Notice
                      </div>
                    </a>
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
                className="relative hidden md:inline-flex items-center gap-1.5 px-3 lg:px-2 min-[1440px]:px-3 py-1.5 text-white font-mono text-[11px] font-medium rounded-[12px] border-none cursor-pointer focus:outline-none shrink-0 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] shadow-[0_12px_24px_rgba(37,99,235,.18)] hover:bg-[linear-gradient(135deg,#1D4ED8_0%,#0B1F4D_100%)] hover:-translate-y-[2px] transition-all duration-300"
              >
                <span className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px]" aria-hidden="true"></span>
                <PhoneCall className="w-3.5 h-3.5" />
                INQUIRE NOW
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 hover:bg-[#F8FAFC] rounded-[12px] text-[#334155] hover:text-[#2563EB] transition-colors duration-300 lg:hidden focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden fixed inset-0 bg-primary/40 backdrop-blur-sm z-[9998]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />
              {/* Drawer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="lg:hidden fixed top-0 left-0 h-[100vh] w-[90%] max-w-[380px] bg-white shadow-2xl z-[9999] flex flex-col overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
                  <div className="flex items-center gap-2.5">
                    <img src="/logo.svg" alt="Medinet Logo" className="h-8 w-auto" />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-alt-bg rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 text-body hover:text-heading transition-colors focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Scrollable Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                  {[
                    { label: "HOME", route: "home" },
                    { label: "ABOUT US", route: "about" },
                    { label: "PRODUCTS DIRECTORY", route: "products" },
                    { label: "RESEARCH & DEVELOPMENT", route: "research-development" },
                    { label: "QUALITY ASSURANCE", route: "quality" },
                    { label: "PARTNERS & DISTRIBUTION", route: "business-partners" },
                    { label: "CAREERS & OPENINGS", route: "careers" },
                    { label: "NEWS & EVENTS", route: "news-events" },
                    { label: "CONTACT & SUPPORT", route: "contact" }
                  ].map((item) => (
                    <button
                      key={item.route}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate(item.route);
                      }}
                      className="w-full text-left p-4 min-h-[48px] rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 text-xs font-mono font-medium text-body hover:bg-alt-bg hover:text-heading block transition-colors active:bg-alt-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Legal Accordion */}
                  <div className="pt-1">
                    <button
                      onClick={() => setActiveMobileAccordion(activeMobileAccordion === "legal" ? null : "legal")}
                      className="w-full flex items-center justify-between p-4 min-h-[48px] rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 text-xs font-mono font-medium text-body hover:bg-alt-bg hover:text-heading transition-colors active:bg-alt-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                      aria-expanded={activeMobileAccordion === "legal"}
                    >
                      LEGAL
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileAccordion === "legal" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeMobileAccordion === "legal" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 py-2 mb-2 space-y-1 bg-background rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 mt-1 border border-border">
                            {[
                              { label: "Privacy Policy", route: "/legal/privacy-policy", icon: ShieldCheck },
                              { label: "Terms & Conditions", route: "/legal/terms-conditions", icon: FileText },
                              { label: "Disclaimer", route: "/legal/disclaimer", icon: Scale },
                              { label: "Cookie Policy", route: "/legal/cookie-policy", icon: Cookie },
                              { label: "Copyright Notice", route: "/legal/copyright-notice", icon: Copyright }
                            ].map((item) => (
                              <a
                                key={item.route}
                                href={item.route}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-3 min-h-[48px] rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 text-sm font-medium text-body hover:bg-alt-bg hover:text-heading transition-colors active:bg-alt-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                              >
                                <item.icon className="w-4 h-4 shrink-0" />
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Pinned Bottom CTA */}
                <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-border bg-white shrink-0">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("contact");
                    }}
                    className="w-full p-4 min-h-[48px] bg-primary hover:bg-black active:scale-[0.98] text-white rounded-btn shadow-btn hover:shadow-btn-hover transition-all duration-300 text-xs font-mono font-medium text-center transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </motion.div>
            </>
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
