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
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Mail
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

function Navbar({ currentRoute, navigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>(currentRoute);

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"products" | "about" | "legal" | null>(null);

  // Enquiry Modal State
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateEnquiryField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return !value.trim() ? "Full name is required" : "";
      case "email":
        return !value.trim() ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid corporate email" : "";
      case "phone":
        return !value.trim() ? "Phone number is required" : !/^\+?[0-9\s-\(\)\.]{7,15}$/.test(value) ? "Please enter a valid phone number (min 7 digits)" : "";
      case "message":
        return !value.trim() ? "Enquiry details are required" : value.trim().length < 10 ? "Please enter at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleEnquiryFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      const err = validateEnquiryField(field, value);
      setFormErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleEnquiryFieldBlur = (field: string, value: string) => {
    if (value.trim() || formErrors[field]) {
      const err = validateEnquiryField(field, value);
      setFormErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {
      name: validateEnquiryField("name", formData.name),
      email: validateEnquiryField("email", formData.email),
      phone: validateEnquiryField("phone", formData.phone),
      message: validateEnquiryField("message", formData.message),
    };
    const activeErrors = Object.fromEntries(Object.entries(errors).filter(([_, v]) => v !== ""));
    if (Object.keys(activeErrors).length > 0) {
      setFormErrors(activeErrors);
      return;
    }

    setFormErrors({});
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1200);
  };

  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Sync activeSection when currentRoute prop updates
  useEffect(() => {
    setActiveSection(currentRoute);
  }, [currentRoute]);

  // Capture previous focus before modals/drawers open and restore focus cleanly upon closing
  // Also lock body scroll when mobile menu or modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen || isEnquiryOpen) {
      document.body.style.overflow = "hidden";
      if (document.activeElement && document.activeElement !== document.body) {
        lastActiveElementRef.current = document.activeElement as HTMLElement;
      }
    } else {
      document.body.style.overflow = "";
      if (lastActiveElementRef.current) {
        const elToFocus = lastActiveElementRef.current;
        setTimeout(() => {
          try {
            if (document.contains(elToFocus)) {
              elToFocus.focus();
            } else {
              const burgerBtn = document.getElementById("mobile-burger-button");
              burgerBtn?.focus();
            }
          } catch (e) {
            // ignore if focus fails
          }
        }, 50);
      }
    }
  }, [isMobileMenuOpen, isSearchOpen, isEnquiryOpen]);

  // Handle sticky scroll effect with hysteresis and requestAnimationFrame to eliminate flickering
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled((prev) => {
            if (!prev && scrollY > 20) return true;
            if (prev && scrollY < 10) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active navigation section while scrolling
  useEffect(() => {
    let ticking = false;
    const handleScrollSection = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionIds = ["home", "about", "products", "research-development", "quality", "business-partners", "careers", "news-events", "contact", "legal", "formulations", "contact-form", "enquiry-form"];
          let found: string | null = null;
          for (const secId of sectionIds) {
            const el = document.getElementById(secId) || document.querySelector(`[data-section="${secId}"]`);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 250 && rect.bottom >= 150) {
                if (secId === "formulations") found = "products";
                else if (secId === "contact-form" || secId === "enquiry-form") found = "contact";
                else found = secId;
                break;
              }
            }
          }
          if (found && found !== activeSection) {
            setActiveSection(found);
          } else if (!found && window.scrollY < 100 && activeSection !== currentRoute) {
            setActiveSection(currentRoute);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScrollSection, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSection);
  }, [activeSection, currentRoute]);

  // Sync search input focus
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Lock body scroll with scrollbar width compensation to prevent CLS / layout shifts
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen || isEnquiryOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        const headerEl = document.querySelector("header");
        if (headerEl) headerEl.style.paddingRight = `${scrollbarWidth}px`;
      }
      if (isMobileMenuOpen) {
        document.body.style.touchAction = "none";
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.touchAction = "";
      const headerEl = document.querySelector("header");
      if (headerEl) headerEl.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.touchAction = "";
      const headerEl = document.querySelector("header");
      if (headerEl) headerEl.style.paddingRight = "";
    };
  }, [isMobileMenuOpen, isSearchOpen, isEnquiryOpen]);

  // Handle outside click to close mobile menu or active mega menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (isMobileMenuOpen && mobileDrawerRef.current && !mobileDrawerRef.current.contains(e.target as Node)) {
        const burgerBtn = document.getElementById("mobile-burger-button");
        if (burgerBtn && burgerBtn.contains(e.target as Node)) return;
        setIsMobileMenuOpen(false);
      }
      if (activeMegaMenu) {
        const prodMenu = document.getElementById("products-mega-menu");
        const legalMenu = document.getElementById("legal-mega-menu");
        const triggerBtns = document.querySelectorAll('[aria-haspopup="true"]');
        let clickedTrigger = false;
        triggerBtns.forEach((btn) => {
          if (btn.contains(e.target as Node)) clickedTrigger = true;
        });
        if (!clickedTrigger && prodMenu && !prodMenu.contains(e.target as Node) && activeMegaMenu === "products") {
          setActiveMegaMenu(null);
        }
        if (!clickedTrigger && legalMenu && !legalMenu.contains(e.target as Node) && activeMegaMenu === "legal") {
          setActiveMegaMenu(null);
        }
      }
    };
    if (isMobileMenuOpen || activeMegaMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen, activeMegaMenu]);

  // Focus trap and keyboard navigation for mobile drawer
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileDrawerRef.current) {
      return;
    }

    const drawerNode = mobileDrawerRef.current;
    const focusableElements = drawerNode.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) {
      setTimeout(() => firstElement.focus(), 50);
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    drawerNode.addEventListener("keydown", handleTabKey);
    return () => drawerNode.removeEventListener("keydown", handleTabKey);
  }, [isMobileMenuOpen]);

  // Handle global key events for modals and menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        if (isSearchOpen) setIsSearchOpen(false);
        else if (isEnquiryOpen) setIsEnquiryOpen(false);
        else if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        else if (activeMegaMenu) setActiveMegaMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, isEnquiryOpen, isMobileMenuOpen, activeMegaMenu]);

  // Mega menu hover timeout handlers
  const handleMegaMenuEnter = (menu: "products" | "about" | "legal") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuKeyDown = (e: React.KeyboardEvent, menuId: string) => {
    const menuEl = document.getElementById(menuId);
    if (!menuEl) return;
    const items = Array.from(menuEl.querySelectorAll<HTMLElement>('[role="menuitem"], button, a'));
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setActiveMegaMenu(null);
      const trigger = document.querySelector(`[aria-controls="${menuId}"]`) as HTMLElement;
      trigger?.focus();
    }
  };

  const getNavItemClass = (isActive: boolean) =>
    `px-1 lg:px-1.5 xl:px-2.5 py-1.5 text-[10px] lg:text-[11px] xl:text-xs font-mono rounded-xl transition-all duration-300 flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] select-none shrink-0 ${isActive
      ? "text-primary bg-secondary/10 border border-secondary/20 shadow-sm font-semibold scale-[1.02]"
      : "text-body font-medium hover:text-secondary hover:bg-secondary/5 border border-transparent relative after:absolute after:bottom-0 after:left-[15%] after:w-[70%] after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02]"
    }`;

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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-primary/40 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search Products Modal">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-slide-in">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Search className="w-5 h-5 text-muted shrink-0" />
              <label htmlFor="navbar-search-input" className="sr-only">Search products</label>
              <input
                id="navbar-search-input"
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
                aria-label="Close search modal"
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,.06)] border-b border-[#E2E8F0] h-[72px] md:h-[80px] lg:h-[88px]"
          : "bg-transparent h-[80px] md:h-[88px] lg:h-[96px]"
          }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 min-[1440px]:px-10 h-full w-full">
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo - Left Column (Equal flex basis for exact desktop centering) */}
            <div className="flex-1 flex items-center justify-start h-full">
              <button
                onClick={() => navigate("home")}
                className="flex items-center h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-lg hover:opacity-90 transition-opacity"
                id="navbar-logo"
                aria-label="Medinet Pharmaceuticals - Home"
              >
                <span className="text-2xl font-display font-bold text-[#2563EB] tracking-tight">Medinet</span>
              </button>
            </div>

            {/* Desktop Navigation - Center Column */}
            <nav
              aria-label="Desktop Navigation Links"
              className="hidden lg:flex flex-auto items-center justify-center gap-0.5 lg:gap-1 xl:gap-2 min-[1440px]:gap-3 h-full"
            >
              <button
                onClick={() => navigate("home")}
                aria-current={currentRoute === "home" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "home" || activeSection === "home")}
              >
                HOME
              </button>

              <button
                onClick={() => navigate("about")}
                aria-current={currentRoute === "about" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "about" || activeSection === "about")}
              >
                ABOUT
              </button>

              {/* Products Mega Menu Trigger */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMegaMenuEnter("products")}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  onClick={() => navigate("products")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                      e.preventDefault();
                      const nextState = activeMegaMenu === "products" ? null : "products";
                      setActiveMegaMenu(nextState);
                      if (nextState === "products") {
                        setTimeout(() => {
                          const firstItem = document.getElementById("products-mega-menu")?.querySelector<HTMLElement>('[role="menuitem"], button, a');
                          firstItem?.focus();
                        }, 50);
                      }
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={activeMegaMenu === "products"}
                  aria-controls="products-mega-menu"
                  aria-current={currentRoute === "products" ? "page" : undefined}
                  className={getNavItemClass(currentRoute === "products" || activeSection === "products")}
                >
                  PRODUCTS
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "products" ? "rotate-180 text-secondary" : ""}`} />
                </button>

                {/* Products Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMegaMenu === "products" && (
                    <motion.div
                      id="products-mega-menu"
                      role="menu"
                      aria-label="Products therapeutic segments"
                      onKeyDown={(e) => handleMenuKeyDown(e, "products-mega-menu")}
                      initial={{ opacity: 0, scale: 0.96, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 5 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[640px] max-w-[90vw] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-5 z-50 origin-top overflow-hidden will-change-transform"
                    >
                      {/* Background Effects */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
                      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,rgba(29, 78, 216,0.12)_0%,transparent_60%)] pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_bottom_left,rgba(29, 78, 216,0.08)_0%,transparent_60%)] pointer-events-none"></div>

                      <div className="relative z-10 grid grid-cols-2 gap-3.5">
                        <div className="col-span-2 border-b border-[#E2E8F0] pb-3 mb-1 flex">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#CBD5E1] text-[#0A192F] text-[10px] font-mono font-medium tracking-wider uppercase shadow-[0_4px_12px_rgba(29, 78, 216,.08)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                            Therapeutic Segments
                          </span>
                        </div>
                        {THERAPEUTIC_CATEGORIES.map((cat, index) => {
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
                            <motion.button
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: index * 0.025, ease: "easeOut" }}
                              key={cat.id}
                              role="menuitem"
                              tabIndex={0}
                              onClick={() => {
                                setActiveMegaMenu(null);
                                navigate("products", { category: cat.id });
                              }}
                              className="flex items-start gap-3.5 p-3.5 rounded-[14px] bg-transparent border border-transparent hover:bg-[linear-gradient(90deg,#F8FAFC,#EFF6FF)] hover:border-blue-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(29, 78, 216,.12)] text-left transition-all duration-250 ease-out cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                            >
                              <div className="w-[46px] h-[46px] rounded-[14px] bg-[linear-gradient(135deg,#EFF6FF,#E2E8F0)] border border-[#CBD5E1] text-[#1D4ED8] flex items-center justify-center shrink-0 group-hover:bg-[linear-gradient(135deg,#1D4ED8,#38BDF8)] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(29, 78, 216,0.4)] transition-all duration-250">
                                <IconComponent className="w-5 h-5 group-hover:scale-[1.08] group-hover:rotate-[4deg] transition-transform duration-250" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors duration-250">
                                  {cat.name}
                                </div>
                                <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5 font-sans">
                                  {cat.description}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: THERAPEUTIC_CATEGORIES.length * 0.025, ease: "easeOut" }}
                          className="col-span-2 mt-2 bg-[linear-gradient(90deg,#F8FAFC,#FFFFFF)] border border-[#E2E8F0] hover:border-blue-300 hover:shadow-[0_12px_35px_rgba(29, 78, 216,.12)] p-3 rounded-[18px] flex items-center justify-between shadow-[0_10px_30px_rgba(10, 25, 47,.06)] transition-all duration-300 group/search"
                        >
                          <div className="text-[11px] text-[#64748B] group-hover/search:text-blue-700 font-sans ml-2 transition-colors duration-300">
                            Looking for something specific? Search our entire portfolio.
                          </div>
                          <button
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => {
                              setActiveMegaMenu(null);
                              setIsSearchOpen(true);
                            }}
                            className="px-4 py-2 text-[11px] font-mono font-semibold text-white bg-[linear-gradient(135deg,#0A192F,#1D4ED8)] rounded-[12px] flex items-center gap-1.5 hover:bg-[linear-gradient(135deg,#1D4ED8,#38BDF8)] group-hover/search:shadow-[0_0_16px_rgba(29, 78, 216,.4)] group-hover/search:scale-[1.03] hover:scale-[1.05] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                          >
                            SEARCH NOW <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => navigate("research-development")}
                aria-current={currentRoute === "research-development" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "research-development" || activeSection === "research-development")}
              >
                R&D
              </button>

              <button
                onClick={() => navigate("quality")}
                aria-current={currentRoute === "quality" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "quality" || activeSection === "quality")}
              >
                QUALITY
              </button>

              <button
                onClick={() => navigate("business-partners")}
                aria-current={currentRoute === "business-partners" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "business-partners" || activeSection === "business-partners")}
              >
                PARTNERS
              </button>

              <button
                onClick={() => navigate("careers")}
                aria-current={currentRoute === "careers" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "careers" || activeSection === "careers")}
              >
                CAREERS
              </button>

              <button
                onClick={() => navigate("news-events")}
                aria-current={currentRoute === "news-events" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "news-events" || activeSection === "news-events")}
              >
                NEWS & EVENTS
              </button>

              <button
                onClick={() => navigate("contact")}
                aria-current={currentRoute === "contact" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "contact" || activeSection === "contact")}
              >
                CONTACT US
              </button>

              {/* Legal Mega Menu Trigger */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMegaMenuEnter("legal")}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  onClick={() => {
                    const nextState = activeMegaMenu === "legal" ? null : "legal";
                    setActiveMegaMenu(nextState);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                      e.preventDefault();
                      const nextState = activeMegaMenu === "legal" ? null : "legal";
                      setActiveMegaMenu(nextState);
                      if (nextState === "legal") {
                        setTimeout(() => {
                          const firstItem = document.getElementById("legal-mega-menu")?.querySelector<HTMLElement>('[role="menuitem"], button, a');
                          firstItem?.focus();
                        }, 50);
                      }
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={activeMegaMenu === "legal"}
                  aria-controls="legal-mega-menu"
                  className={getNavItemClass(["privacy-policy", "terms", "cookies", "disclaimer", "copyright-notice"].includes(currentRoute) || ["privacy-policy", "terms", "cookies", "disclaimer", "copyright-notice"].includes(activeSection))}
                >
                  LEGAL
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "legal" ? "rotate-180 text-secondary" : ""}`} />
                </button>

                {/* Legal Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMegaMenu === "legal" && (
                    <motion.div
                      id="legal-mega-menu"
                      role="menu"
                      aria-label="Legal Pages"
                      onKeyDown={(e) => handleMenuKeyDown(e, "legal-mega-menu")}
                      initial={{ opacity: 0, scale: 0.96, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 5 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[240px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-3 z-50 origin-top overflow-hidden will-change-transform flex flex-col gap-1"
                    >
                      {[
                        { name: "Privacy Policy", route: "privacy-policy", icon: ShieldCheck },
                        { name: "Terms & Conditions", route: "terms", icon: FileText },
                        { name: "Cookie Policy", route: "cookies", icon: Cookie },
                        { name: "Disclaimer", route: "disclaimer", icon: AlertCircle },
                        { name: "Copyright Notice", route: "copyright-notice", icon: Copyright }
                      ].map((item, index) => (
                        <motion.button
                          key={item.route}
                          role="menuitem"
                          tabIndex={0}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigate(item.route);
                          }}
                          className="flex items-center gap-3 p-2.5 rounded-[12px] text-left text-sm font-semibold text-[#0F172A] hover:text-[#1D4ED8] hover:bg-blue-50/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] group"
                        >
                          <div className="w-8 h-8 rounded-[10px] bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors duration-200">
                            <item.icon className="w-4 h-4" />
                          </div>
                          {item.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
            {/* Right Buttons - Right Column (Equal flex basis for exact desktop centering) */}
            <div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-3 xl:gap-4 h-full">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="h-[36px] lg:h-[40px] px-2 lg:px-3 rounded-xl text-body hover:text-secondary hover:bg-secondary/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] flex items-center justify-center gap-1.5 text-xs font-mono font-medium shrink-0 my-auto"
                aria-label="Search products"
                aria-haspopup="dialog"
                title="Search Products (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-body hover:text-secondary transition-colors" />
                <span className="hidden xl:inline-block font-semibold">SEARCH</span>
              </button>

              {/* Quick Contact CTA */}
              <button
                type="button"
                aria-label="Inquire Now Contact Form"
                aria-haspopup="dialog"
                aria-expanded={isEnquiryOpen}
                onClick={() => setIsEnquiryOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsEnquiryOpen(true);
                  }
                }}
                className="utility-button-primary hidden md:inline-flex h-[36px] lg:h-[40px] px-4 xl:px-5 my-auto items-center justify-center gap-1.5 shrink-0 text-xs font-mono tracking-wider font-semibold shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 rounded-xl"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                INQUIRE NOW
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                id="mobile-burger-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 lg:hidden flex items-center justify-center rounded-[12px] bg-transparent hover:bg-[#EFF6FF] border border-transparent hover:border-[#CBD5E1] text-[#0F172A] hover:text-[#1D4ED8] transition-all duration-[300ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] active:scale-[0.95] shrink-0"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden fixed inset-0 z-[9998] bg-[#0F172A]/80"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          {isMobileMenuOpen && (
            <motion.div
              key="drawer"
              ref={mobileDrawerRef}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-[#FFFFFF] z-[9999] flex flex-col overflow-hidden shadow-2xl will-change-transform"
              role="dialog"
              aria-modal="true"
              id="mobile-navigation-drawer"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[linear-gradient(90deg,#F8FAFC,#FFFFFF)] shrink-0 min-h-[76px]">
                <div className="flex flex-col -translate-y-3">
                  <span className="text-xl font-display font-bold text-[#2563EB] tracking-tight">Medinet</span>
                  <span className="text-[#64748B] text-xs font-medium font-sans pl-1">Medinet Pharmaceuticals</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 hover:bg-[#F1F5F9] active:bg-[#E2E8F0] rounded-2xl text-[#0F172A] hover:text-[#1D4ED8] hover:rotate-90 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Navigation List with Large Touch Targets and Proper Spacing */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-3.5">
                {[
                  { type: "link", label: "Home", route: "home", icon: House },
                  { type: "link", label: "About", route: "about", icon: Building2 },
                  { type: "accordion", id: "products", label: "Products", icon: Package },
                  { type: "link", label: "R&D", route: "research-development", icon: FlaskConical },
                  { type: "link", label: "Quality", route: "quality", icon: ShieldCheck },
                  { type: "link", label: "Partners", route: "business-partners", icon: Handshake },
                  { type: "link", label: "Careers", route: "careers", icon: Briefcase },
                  { type: "link", label: "News & Events", route: "news-events", icon: Newspaper },
                  { type: "link", label: "Contact", route: "contact", icon: Phone },
                  { type: "accordion", id: "legal", label: "Legal", icon: ShieldCheck }
                ].map((item, index) => {
                  if (item.type === "link") {
                    const isActive = currentRoute === item.route;
                    return (
                      <motion.button
                        key={item.route || item.label}
                        initial={{ opacity: 0, y: 10, x: 10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.02, ease: "easeOut" }}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (item.route) navigate(item.route);
                        }}
                        className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] shrink-0 font-sans ${isActive
                          ? "bg-[linear-gradient(135deg,#1D4ED8,#1E40AF)] shadow-lg shadow-blue-500/25 text-white font-bold scale-[1.01]"
                          : "bg-transparent hover:bg-[#EFF6FF] active:bg-[#E2E8F0] border border-transparent hover:border-[#CBD5E1] text-[#0F172A] font-semibold"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                            {item.icon && <item.icon className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#1D4ED8]"}`} />}
                          </motion.div>
                          <span className="text-[16px]">
                            {item.label}
                          </span>
                        </div>
                        {isActive && <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />}
                      </motion.button>
                    );
                  } else if (item.id === "products") {
                    const isActive = currentRoute === "products";
                    return (
                      <motion.div key="products-accordion" initial={{ opacity: 0, y: 10, x: 10 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.25, delay: index * 0.02, ease: "easeOut" }} className="relative shrink-0 flex flex-col font-sans">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "products" ? null : "products")}
                          className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${isActive
                            ? "bg-[linear-gradient(135deg,#1D4ED8,#1E40AF)] shadow-lg shadow-blue-500/25 text-white font-bold scale-[1.01]"
                            : "bg-transparent hover:bg-[#EFF6FF] active:bg-[#E2E8F0] border border-transparent hover:border-[#CBD5E1] text-[#0F172A] font-semibold"
                            }`}
                          aria-expanded={activeMobileAccordion === "products"}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                              <Package className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#1D4ED8]"}`} />
                            </motion.div>
                            <span className="text-[16px]">Products</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {isActive && <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />}
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileAccordion === "products" ? "rotate-180" : ""}`} />
                          </div>
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
                              <div className="flex flex-col gap-1.5 pt-2 pb-3 pl-12 pr-4">
                                <button
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("products");
                                  }}
                                  className={`w-full text-left min-h-[48px] py-3 px-4 text-[15px] transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${currentRoute === "products"
                                    ? "text-[#1D4ED8] font-bold bg-[#EFF6FF] border-l-4 border-[#1D4ED8]"
                                    : "text-[#64748B] hover:text-[#1D4ED8] hover:bg-slate-50 font-medium"
                                    }`}
                                >
                                  <span>All Products</span>
                                  {currentRoute === "products" && <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />}
                                </button>
                                {PRODUCTS.map((product) => (
                                  <button
                                    key={product.id}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      navigate("products", { id: product.id });
                                    }}
                                    className="w-full text-left min-h-[48px] py-3 px-4 text-[#64748B] hover:text-[#1D4ED8] hover:bg-slate-50 text-[15px] font-medium transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                                  >
                                    <span>{product.name}</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  } else if (item.id === "legal") {
                    const isActive = ["privacy-policy", "terms", "cookies", "disclaimer", "copyright-notice"].includes(currentRoute);
                    return (
                      <motion.div key="legal-accordion" initial={{ opacity: 0, y: 10, x: 10 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.25, delay: index * 0.02, ease: "easeOut" }} className="relative shrink-0 flex flex-col font-sans">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "legal" ? null : "legal")}
                          className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${isActive
                            ? "bg-[linear-gradient(135deg,#1D4ED8,#1E40AF)] shadow-lg shadow-blue-500/25 text-white font-bold scale-[1.01]"
                            : "bg-transparent hover:bg-[#EFF6FF] active:bg-[#E2E8F0] border border-transparent hover:border-[#CBD5E1] text-[#0F172A] font-semibold"
                            }`}
                          aria-expanded={activeMobileAccordion === "legal"}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                              <ShieldCheck className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#1D4ED8]"}`} />
                            </motion.div>
                            <span className="text-[16px]">Legal</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {isActive && <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />}
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileAccordion === "legal" ? "rotate-180" : ""}`} />
                          </div>
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
                              <div className="flex flex-col gap-1.5 pt-2 pb-3 pl-12 pr-4">
                                {[
                                  { name: "Privacy Policy", route: "privacy-policy" },
                                  { name: "Terms & Conditions", route: "terms" },
                                  { name: "Cookie Policy", route: "cookies" },
                                  { name: "Disclaimer", route: "disclaimer" },
                                  { name: "Copyright Notice", route: "copyright-notice" }
                                ].map((legal) => (
                                  <button
                                    key={legal.route}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      navigate(legal.route);
                                    }}
                                    className={`w-full text-left min-h-[48px] py-3 px-4 text-[15px] transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${currentRoute === legal.route
                                      ? "text-[#1D4ED8] font-bold bg-[#EFF6FF] border-l-4 border-[#1D4ED8]"
                                      : "text-[#64748B] hover:text-[#1D4ED8] hover:bg-slate-50 font-medium"
                                      }`}
                                  >
                                    <span>{legal.name}</span>
                                    {currentRoute === legal.route && <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />}
                                  </button>
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

              {/* Pinned Bottom CTA Section */}
              <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-[#E2E8F0] bg-slate-50/70 shrink-0 flex flex-col gap-3.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-3 min-h-[58px] bg-[#0A192F] hover:bg-[#1D4ED8] active:scale-[0.98] text-white rounded-2xl font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-lg shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8] group shrink-0"
                >
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  INQUIRE NOW
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-3 min-h-[54px] bg-white hover:bg-blue-50/50 active:bg-blue-100/50 border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] rounded-2xl font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] group shrink-0"
                >
                  <Search className="w-5 h-5 text-[#64748B] group-hover:text-[#1D4ED8] transition-colors" />
                  SEARCH PRODUCTS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isEnquiryOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 overflow-y-auto"
            role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-[24px] border border-white/40 shadow-[0_30px_60px_-15px_rgba(29, 78, 216,0.2)] overflow-hidden text-left flex flex-col mt-6 sm:mt-12 max-h-[95vh] relative"
            >
              {/* Background Decorative Graphics */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[24px]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_60%)]"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_bottom_left,rgba(29, 78, 216,0.05),transparent_60%)]"></div>
                {/* Medical molecule / floating circles pattern */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-blue-500/10 rounded-full blur-[1px]"></div>
                <div className="absolute top-20 -right-5 w-20 h-20 border border-blue-500/10 rounded-full blur-[1px]"></div>
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between p-5 sm:p-6 border-b border-slate-200/50 bg-white/50">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full mb-3 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Corporate Support
                  </span>
                  <h2 id="enquiry-modal-title" className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                    Enterprise Business Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-md leading-relaxed">
                    Connect with our pharmaceutical marketing team for product partnerships and business enquiries.
                  </p>
                </div>
                <button
                  onClick={() => setIsEnquiryOpen(false)}
                  className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm border border-slate-200/50"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              {formSuccess ? (
                <div className="relative z-10 p-8 text-center space-y-4 my-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto border border-blue-200 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  >
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-display font-extrabold text-slate-900">Enquiry Submitted!</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting MediNet. Your inquiry has been routed to our corporate sourcing team. We will respond within 24 business hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSuccess(false);
                        setIsEnquiryOpen(false);
                      }}
                      className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-mono text-xs font-bold tracking-wider rounded-xl shadow-[0_8px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_12px_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      CLOSE WINDOW
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="relative z-10 flex-1 overflow-y-auto p-5 sm:p-6 space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group/field">
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        disabled={formSubmitting}
                        aria-required="true"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => handleEnquiryFieldChange("name", e.target.value)}
                        onBlur={(e) => handleEnquiryFieldBlur("name", e.target.value)}
                        placeholder=" "
                        className={`peer w-full h-[46px] pl-11 pr-3 pt-3.5 pb-1 bg-slate-50/50 hover:bg-slate-50/80 border rounded-[16px] text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15 bg-red-50/30" : "border-slate-200"}`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "enq-name-err" : undefined}
                      />
                      <label htmlFor="enquiry-name" className="absolute left-11 top-1/2 -translate-y-1/2 text-[13px] font-mono text-slate-400 transition-all duration-300 peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-slate-500 pointer-events-none">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="absolute top-1/2 -translate-y-1/2 left-3.5 pointer-events-none">
                        <User className={`w-4 h-4 transition-all duration-300 ${formErrors.name ? "text-red-400" : "text-slate-400 group-focus-within/field:text-blue-500 group-focus-within/field:scale-110"}`} />
                      </div>
                      {formErrors.name && (
                        <span id="enq-name-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1.5 ml-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div className="relative group/field">
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        disabled={formSubmitting}
                        aria-required="true"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleEnquiryFieldChange("email", e.target.value)}
                        onBlur={(e) => handleEnquiryFieldBlur("email", e.target.value)}
                        placeholder=" "
                        className={`peer w-full h-[46px] pl-11 pr-3 pt-3.5 pb-1 bg-slate-50/50 hover:bg-slate-50/80 border rounded-[16px] text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15 bg-red-50/30" : "border-slate-200"}`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "enq-email-err" : undefined}
                      />
                      <label htmlFor="enquiry-email" className="absolute left-11 top-1/2 -translate-y-1/2 text-[13px] font-mono text-slate-400 transition-all duration-300 peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-slate-500 pointer-events-none">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="absolute top-1/2 -translate-y-1/2 left-3.5 pointer-events-none">
                        <Mail className={`w-4 h-4 transition-all duration-300 ${formErrors.email ? "text-red-400" : "text-slate-400 group-focus-within/field:text-blue-500 group-focus-within/field:scale-110"}`} />
                      </div>
                      {formErrors.email && (
                        <span id="enq-email-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1.5 ml-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group/field">
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        disabled={formSubmitting}
                        aria-required="true"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => handleEnquiryFieldChange("phone", e.target.value)}
                        onBlur={(e) => handleEnquiryFieldBlur("phone", e.target.value)}
                        placeholder=" "
                        className={`peer w-full h-[46px] pl-11 pr-3 pt-3.5 pb-1 bg-slate-50/50 hover:bg-slate-50/80 border rounded-[16px] text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15 bg-red-50/30" : "border-slate-200"}`}
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? "enq-phone-err" : undefined}
                      />
                      <label htmlFor="enquiry-phone" className="absolute left-11 top-1/2 -translate-y-1/2 text-[13px] font-mono text-slate-400 transition-all duration-300 peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-slate-500 pointer-events-none">
                        Phone/Whatsapp <span className="text-red-500">*</span>
                      </label>
                      <div className="absolute top-1/2 -translate-y-1/2 left-3.5 pointer-events-none">
                        <Phone className={`w-4 h-4 transition-all duration-300 ${formErrors.phone ? "text-red-400" : "text-slate-400 group-focus-within/field:text-blue-500 group-focus-within/field:scale-110"}`} />
                      </div>
                      {formErrors.phone && (
                        <span id="enq-phone-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1.5 ml-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div className="relative group/field">
                      <input
                        id="enquiry-company"
                        type="text"
                        disabled={formSubmitting}
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => handleEnquiryFieldChange("company", e.target.value)}
                        placeholder=" "
                        className="peer w-full h-[46px] pl-11 pr-3 pt-3.5 pb-1 bg-slate-50/50 hover:bg-slate-50/80 border border-slate-200 rounded-[16px] text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label htmlFor="enquiry-company" className="absolute left-11 top-1/2 -translate-y-1/2 text-[13px] font-mono text-slate-400 transition-all duration-300 peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-slate-500 pointer-events-none">
                        Company (Optional)
                      </label>
                      <div className="absolute top-1/2 -translate-y-1/2 left-3.5 pointer-events-none">
                        <Building2 className="w-4 h-4 text-slate-400 group-focus-within/field:text-blue-500 group-focus-within/field:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  <div className="relative group/field">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none">
                      <FileText className={`w-4 h-4 transition-all duration-300 ${formErrors.message ? "text-red-400" : "text-slate-400 group-focus-within/field:text-blue-500 group-focus-within/field:scale-110"}`} />
                    </div>
                    <textarea
                      id="enquiry-message"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      maxLength={500}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleEnquiryFieldChange("message", e.target.value)}
                      onBlur={(e) => handleEnquiryFieldBlur("message", e.target.value)}
                      placeholder=" "
                      className={`peer w-full min-h-[96px] pl-11 pr-3 pt-6 pb-2 bg-slate-50/50 hover:bg-slate-50/80 border rounded-[16px] text-sm text-slate-800 placeholder:text-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] disabled:opacity-50 disabled:cursor-not-allowed resize-y ${formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/15 bg-red-50/30" : "border-slate-200"}`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "enq-msg-err" : undefined}
                    ></textarea>
                    <label htmlFor="enquiry-message" className="absolute left-11 top-3 text-[13px] font-mono text-slate-400 transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-slate-500 pointer-events-none">
                      Enquiry Details <span className="text-red-500">*</span>
                    </label>

                    <div className={`absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold transition-colors ${formData.message.length > 450 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                      {formData.message.length}/500 chars
                    </div>

                    {formErrors.message && (
                      <span id="enq-msg-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1.5 ml-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200/50 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 mt-1">
                    <button
                      type="button"
                      disabled={formSubmitting}
                      onClick={() => setIsEnquiryOpen(false)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-mono text-xs font-bold tracking-wider rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-mono text-xs font-bold tracking-wider rounded-xl shadow-[0_8px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_12px_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 relative overflow-hidden group/submit"
                    >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/submit:translate-x-full transition-transform duration-700 ease-in-out"></div>
                      {formSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                          <span className="relative z-10">SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">SUBMIT ENQUIRY</span>
                          <ArrowRight className="w-4 h-4 group-hover/submit:translate-x-1 transition-transform relative z-10" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default React.memo(Navbar);
