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
  AlertCircle
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
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen || isEnquiryOpen) {
      if (document.activeElement && document.activeElement !== document.body) {
        lastActiveElementRef.current = document.activeElement as HTMLElement;
      }
    } else if (lastActiveElementRef.current) {
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
    `px-2 xl:px-3 py-1.5 text-xs font-mono rounded-xl transition-all duration-300 flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] select-none shrink-0 ${
      isActive
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
                      className="w-full text-left flex items-start gap-3 p-3 hover:bg-emerald-50/50 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-100">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-heading text-sm group-hover:text-emerald-600 flex items-center gap-2">
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
                          className="flex items-center gap-3 p-2.5 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm border border-border hover:border-emerald-100 hover:bg-background/50 text-left transition-all"
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
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
                className="flex items-center h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] rounded-lg hover:opacity-90 transition-opacity"
                id="navbar-logo"
                aria-label="Medinet Pharmaceuticals - Home"
              >
                <Image
                  src="/logo.svg"
                  alt="Medinet Pharmaceuticals Logo"
                  width={260}
                  height={64}
                  priority
                  className="block my-auto w-auto object-contain h-8 sm:h-10 md:h-[44px] lg:h-[40px] xl:h-[48px] min-[1440px]:h-[56px] transition-all duration-300"
                />
              </button>
            </div>

            {/* Desktop Navigation - Center Column */}
            <nav
              aria-label="Desktop Navigation Links"
              className="hidden lg:flex flex-none items-center justify-center gap-1 xl:gap-2 min-[1440px]:gap-4 h-full"
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
                {activeMegaMenu === "products" && (
                  <div
                    id="products-mega-menu"
                    role="menu"
                    aria-label="Products therapeutic segments"
                    onKeyDown={(e) => handleMenuKeyDown(e, "products-mega-menu")}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[640px] max-w-[90vw] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-5 grid grid-cols-2 gap-3.5 animate-fade-in z-50 origin-top"
                  >
                    <div className="col-span-2 border-b border-[#D1FAE5] pb-3 mb-1 flex">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#ECFDF5] border border-[#A7F3D0] text-[#14532D] text-[10px] font-mono font-medium tracking-wider uppercase shadow-[0_4px_12px_rgba(5,150,105,.08)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
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
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => {
                            setActiveMegaMenu(null);
                            navigate("products", { category: cat.id });
                          }}
                          className="flex items-start gap-3.5 p-3.5 rounded-[14px] bg-transparent border border-transparent hover:bg-[linear-gradient(90deg,#F0FDF4,#ECFDF5)] hover:border-[#A7F3D0] hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] text-left transition-all duration-300 ease-out cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                        >
                          <div className="w-[46px] h-[46px] rounded-[14px] bg-[linear-gradient(135deg,#ECFDF5,#D1FAE5)] border border-[#A7F3D0] text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[linear-gradient(135deg,#059669,#34D399)] group-hover:text-white transition-all duration-300">
                            <IconComponent className="w-5 h-5 group-hover:rotate-[5deg] transition-transform duration-300" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors duration-300">
                              {cat.name}
                            </div>
                            <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5 font-sans">
                              {cat.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                    <div className="col-span-2 mt-2 bg-[linear-gradient(90deg,#F8FAFC,#FFFFFF)] border border-[#D1FAE5] p-3 rounded-[18px] flex items-center justify-between shadow-[0_10px_30px_rgba(20,83,45,.06)]">
                      <div className="text-[11px] text-[#64748B] font-sans ml-2">
                        Looking for something specific? Search our entire portfolio.
                      </div>
                      <button
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => {
                          setActiveMegaMenu(null);
                          setIsSearchOpen(true);
                        }}
                        className="px-4 py-2 text-[11px] font-mono font-semibold text-white bg-[linear-gradient(135deg,#14532D,#059669)] rounded-[12px] flex items-center gap-1.5 hover:bg-[linear-gradient(135deg,#059669,#34D399)] hover:shadow-[0_12px_28px_rgba(5,150,105,.30)] hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        SEARCH NOW <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                )}
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
                NEWS
              </button>

              <button
                onClick={() => navigate("contact")}
                aria-current={currentRoute === "contact" ? "page" : undefined}
                className={getNavItemClass(currentRoute === "contact" || activeSection === "contact")}
              >
                CONTACT
              </button>

              {/* Legal Dropdown in Navigation with Equal Spacing */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMegaMenuEnter("legal")}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
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
                  aria-current={currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright") ? "page" : undefined}
                  className={getNavItemClass(currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright") || activeSection === "legal")}
                >
                  LEGAL
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "legal" ? "rotate-180 text-secondary" : ""}`} />
                </button>

                {activeMegaMenu === "legal" && (
                  <div
                    id="legal-mega-menu"
                    role="menu"
                    aria-label="Legal documents and policies"
                    onKeyDown={(e) => handleMenuKeyDown(e, "legal-mega-menu")}
                    className="absolute right-0 top-full mt-0 pt-2 w-[420px] max-w-[90vw] bg-[rgba(255,255,255,.96)] backdrop-blur-[18px] rounded-[28px] border border-[rgba(5,150,105,.12)] shadow-[0_30px_80px_rgba(15,23,42,.16)] p-5 animate-fade-in origin-top z-50 flex flex-col scale-100 transition-all duration-[250ms]"
                  >
                    {/* Top Header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E2E8F0] px-2">
                      <div className="w-10 h-10 rounded-[12px] bg-[linear-gradient(135deg,#F8FAFC,#F1F5F9)] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                        <Scale className="w-5 h-5 text-[#14532D]" />
                      </div>
                      <div>
                        <h4 className="font-display font-[700] text-[#0F172A] text-[15px]">Legal & Compliance</h4>
                        <p className="text-[#64748B] text-[11px] font-medium mt-0.5">Policies, Security & Corporate Information</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <a
                        href="/legal/privacy-policy"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setActiveMegaMenu(null)}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                            setActiveMegaMenu(null);
                            navigate("privacy-policy");
                          }
                        }}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#ECFDF5,#F0FDF4)] hover:border hover:border-[#A7F3D0] hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] hover:translate-x-1 active:bg-[linear-gradient(135deg,#059669,#047857)] active:text-white border border-transparent transition-all duration-300 ease-out group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#059669,#34D399)] shadow-[0_10px_24px_rgba(5,150,105,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <ShieldCheck className="w-[22px] h-[22px] text-white group-active/item:text-[#059669]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Privacy Policy</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Protecting your information</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#059669] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/terms-conditions"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setActiveMegaMenu(null)}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                            setActiveMegaMenu(null);
                            navigate("terms");
                          }
                        }}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#ECFDF5,#F0FDF4)] hover:border hover:border-[#A7F3D0] hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] hover:translate-x-1 active:bg-[linear-gradient(135deg,#059669,#047857)] active:text-white border border-transparent transition-all duration-300 ease-out group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#0D9488,#2DD4BF)] shadow-[0_10px_24px_rgba(13,148,136,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <FileText className="w-[22px] h-[22px] text-white group-active/item:text-[#059669]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Terms & Conditions</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Usage guidelines</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#059669] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/disclaimer"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setActiveMegaMenu(null)}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                            setActiveMegaMenu(null);
                            navigate("disclaimer");
                          }
                        }}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#ECFDF5,#F0FDF4)] hover:border hover:border-[#A7F3D0] hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] hover:translate-x-1 active:bg-[linear-gradient(135deg,#059669,#047857)] active:text-white border border-transparent transition-all duration-300 ease-out group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#F59E0B,#FBBF24)] shadow-[0_10px_24px_rgba(245,158,11,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <Scale className="w-[22px] h-[22px] text-white group-active/item:text-[#059669]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Disclaimer</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Legal information</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#059669] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/cookie-policy"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setActiveMegaMenu(null)}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                            setActiveMegaMenu(null);
                            navigate("cookies");
                          }
                        }}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#ECFDF5,#F0FDF4)] hover:border hover:border-[#A7F3D0] hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] hover:translate-x-1 active:bg-[linear-gradient(135deg,#059669,#047857)] active:text-white border border-transparent transition-all duration-300 ease-out group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#8B5CF6,#A78BFA)] shadow-[0_10px_24px_rgba(139,92,246,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <Cookie className="w-[22px] h-[22px] text-white group-active/item:text-[#059669]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Cookie Policy</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Tracking preferences</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#059669] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>

                      <a
                        href="/legal/copyright-notice"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setActiveMegaMenu(null)}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                            setActiveMegaMenu(null);
                            navigate("copyright-notice");
                          }
                        }}
                        className="flex items-center justify-between h-[76px] p-4 rounded-[18px] bg-transparent hover:bg-[linear-gradient(90deg,#ECFDF5,#F0FDF4)] hover:border hover:border-[#A7F3D0] hover:shadow-[0_8px_24px_rgba(5,150,105,.08)] hover:translate-x-1 active:bg-[linear-gradient(135deg,#059669,#047857)] active:text-white border border-transparent transition-all duration-300 ease-out group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
                      >
                        <div className="flex items-center gap-[18px]">
                          <div className="w-[54px] h-[54px] rounded-[16px] bg-[linear-gradient(135deg,#059669,#10B981)] shadow-[0_10px_24px_rgba(5,150,105,.22)] flex items-center justify-center shrink-0 group-hover/item:scale-[1.1] group-hover/item:rotate-[4deg] group-active/item:bg-white transition-all duration-[300ms]">
                            <BadgeCheck className="w-[22px] h-[22px] text-white group-active/item:text-[#059669]" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[18px] font-[700] text-[#0F172A] group-active/item:text-white transition-colors duration-[300ms]">Copyright Notice</span>
                            <span className="text-[13px] font-[500] text-[#64748B] group-active/item:text-white/80 transition-colors duration-[300ms]">Ownership & licensing</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/item:text-[#059669] group-hover/item:translate-x-[4px] group-active/item:text-white transition-all duration-[300ms]" />
                      </a>
                    </div>

                    {/* Bottom Area */}
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC] rounded-b-[24px] -mx-5 -mb-5 p-[18px] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[13px] font-[500] text-[#0F172A]">
                        <Info className="w-[18px] h-[18px] text-[#059669]" />
                        Need legal assistance?
                      </div>
                      <a href="mailto:corporate@medinetpharma.com" className="px-4 py-2 bg-[#14532D] hover:bg-[#059669] text-white text-xs font-[600] rounded-full transition-colors duration-[300ms] shadow-[0_4px_12px_rgba(20,83,45,.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]">
                        Contact Legal Team
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            {/* Right Buttons - Right Column (Equal flex basis for exact desktop centering) */}
            <div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-3 xl:gap-4 h-full">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="h-[36px] lg:h-[40px] px-2 lg:px-3 rounded-xl text-body hover:text-secondary hover:bg-secondary/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] flex items-center justify-center gap-1.5 text-xs font-mono font-medium shrink-0 my-auto"
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
                className="utility-button-primary hidden md:inline-flex h-[36px] lg:h-[40px] px-4 xl:px-5 my-auto items-center justify-center gap-1.5 shrink-0 text-xs font-mono tracking-wider font-semibold shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-2 rounded-xl"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                INQUIRE NOW
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                id="mobile-burger-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 lg:hidden flex items-center justify-center rounded-[12px] bg-transparent hover:bg-[#ECFDF5] border border-transparent hover:border-[#A7F3D0] text-[#0F172A] hover:text-[#059669] transition-all duration-[300ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] active:scale-[0.95] shrink-0"
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
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="lg:hidden fixed inset-0 z-[9998] bg-[#0F172A]/70 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          {isMobileMenuOpen && (
            <motion.div
              key="drawer"
              ref={mobileDrawerRef}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-[#FFFFFF] z-[9999] flex flex-col overflow-hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              id="mobile-navigation-drawer"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-[linear-gradient(90deg,#F8FAFC,#FFFFFF)] shrink-0 min-h-[76px]">
                <div className="flex flex-col">
                  <Image src="/logo.svg" alt="Medinet Logo" width={180} height={44} className="h-8 w-auto object-contain object-left mb-1" />
                  <span className="text-[#64748B] text-xs font-medium font-sans">Medinet Pharmaceuticals</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 hover:bg-[#F1F5F9] active:bg-[#E2E8F0] rounded-2xl text-[#0F172A] hover:text-[#059669] hover:rotate-90 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
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
                  { type: "link", label: "News", route: "news-events", icon: Newspaper },
                  { type: "link", label: "Contact", route: "contact", icon: Phone },
                  { type: "accordion", id: "legal", label: "Legal", icon: Scale }
                ].map((item, index) => {
                  if (item.type === "link") {
                    const isActive = currentRoute === item.route;
                    return (
                      <motion.button
                        key={item.route || item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.03 }}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (item.route) navigate(item.route);
                        }}
                        className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] shrink-0 font-sans ${
                          isActive
                            ? "bg-[linear-gradient(135deg,#059669,#047857)] shadow-lg shadow-emerald-500/25 text-white font-bold scale-[1.01]"
                            : "bg-transparent hover:bg-[#ECFDF5] active:bg-[#D1FAE5] border border-transparent hover:border-[#A7F3D0] text-[#0F172A] font-semibold"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                            {item.icon && <item.icon className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#059669]"}`} />}
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
                      <motion.div key="products-accordion" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: index * 0.03 }} className="relative shrink-0 flex flex-col font-sans">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "products" ? null : "products")}
                          className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] ${
                            isActive
                              ? "bg-[linear-gradient(135deg,#059669,#047857)] shadow-lg shadow-emerald-500/25 text-white font-bold scale-[1.01]"
                              : "bg-transparent hover:bg-[#ECFDF5] active:bg-[#D1FAE5] border border-transparent hover:border-[#A7F3D0] text-[#0F172A] font-semibold"
                          }`}
                          aria-expanded={activeMobileAccordion === "products"}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                              <Package className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#059669]"}`} />
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
                                  className={`w-full text-left min-h-[48px] py-3 px-4 text-[15px] transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] ${
                                    currentRoute === "products"
                                      ? "text-[#059669] font-bold bg-[#ECFDF5] border-l-4 border-[#059669]"
                                      : "text-[#64748B] hover:text-[#059669] hover:bg-slate-50 font-medium"
                                  }`}
                                >
                                  <span>All Products</span>
                                  {currentRoute === "products" && <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />}
                                </button>
                                {PRODUCTS.map((product) => (
                                  <button
                                    key={product.id}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      navigate("products", { id: product.id });
                                    }}
                                    className="w-full text-left min-h-[48px] py-3 px-4 text-[#64748B] hover:text-[#059669] hover:bg-slate-50 text-[15px] font-medium transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669]"
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
                    const isActive = currentRoute.startsWith("privacy") || currentRoute.startsWith("terms") || currentRoute.startsWith("disclaimer") || currentRoute.startsWith("cookie") || currentRoute.startsWith("copyright");
                    return (
                      <motion.div key="legal-accordion" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: index * 0.03 }} className="relative shrink-0 flex flex-col font-sans">
                        <button
                          onClick={() => setActiveMobileAccordion(activeMobileAccordion === "legal" ? null : "legal")}
                          className={`w-full flex items-center justify-between px-5 min-h-[60px] rounded-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] ${
                            isActive
                              ? "bg-[linear-gradient(135deg,#059669,#047857)] shadow-lg shadow-emerald-500/25 text-white font-bold scale-[1.01]"
                              : "bg-transparent hover:bg-[#ECFDF5] active:bg-[#D1FAE5] border border-transparent hover:border-[#A7F3D0] text-[#0F172A] font-semibold"
                          }`}
                          aria-expanded={activeMobileAccordion === "legal"}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 + 0.05 }}>
                              <Scale className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#059669]"}`} />
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
                                  { label: "Privacy Policy", route: "/legal/privacy-policy", key: "privacy" },
                                  { label: "Terms & Conditions", route: "/legal/terms-conditions", key: "terms" },
                                  { label: "Disclaimer", route: "/legal/disclaimer", key: "disclaimer" },
                                  { label: "Cookie Policy", route: "/legal/cookie-policy", key: "cookie" },
                                  { label: "Copyright Notice", route: "/legal/copyright-notice", key: "copyright" }
                                ].map((lItem) => {
                                  const isSubActive = currentRoute.includes(lItem.key);
                                  return (
                                    <a
                                      key={lItem.route}
                                      href={lItem.route}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`min-h-[48px] py-3 px-4 text-[15px] transition-all duration-200 rounded-xl flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] block ${
                                        isSubActive
                                          ? "text-[#059669] font-bold bg-[#ECFDF5] border-l-4 border-[#059669]"
                                          : "text-[#64748B] hover:text-[#059669] hover:bg-slate-50 font-medium"
                                      }`}
                                    >
                                      <span>{lItem.label}</span>
                                      {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />}
                                    </a>
                                  );
                                })}
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
                  className="w-full flex items-center justify-center gap-3 min-h-[58px] bg-[#14532D] hover:bg-[#059669] active:scale-[0.98] text-white rounded-2xl font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-lg shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#059669] group shrink-0"
                >
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  INQUIRE NOW
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-3 min-h-[54px] bg-white hover:bg-emerald-50/50 active:bg-emerald-100/50 border border-[#E2E8F0] hover:border-[#A7F3D0] text-[#0F172A] rounded-2xl font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] group shrink-0"
                >
                  <Search className="w-5 h-5 text-[#64748B] group-hover:text-[#059669] transition-colors" />
                  SEARCH PRODUCTS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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
              {formSuccess ? (
                <div className="p-8 text-center space-y-4 my-auto animate-fade-in">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-heading">Enquiry Submitted Successfully!</h3>
                  <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting MediNet. Your inquiry has been routed to our corporate sourcing team. We will respond within 24 business hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSuccess(false);
                        setIsEnquiryOpen(false);
                      }}
                      className="px-6 py-2.5 bg-primary text-white font-mono text-xs font-medium rounded-btn shadow-btn hover:bg-black transition-all"
                    >
                      CLOSE WINDOW
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormSuccess(false)}
                      className="px-6 py-2.5 border border-border bg-surface hover:bg-alt-bg text-heading font-mono text-xs font-medium rounded-btn transition-all"
                    >
                      SEND ANOTHER
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-name" className="text-xs font-mono font-medium text-body block mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
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
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                        placeholder="John Doe"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "enq-name-err" : undefined}
                      />
                      {formErrors.name && (
                        <span id="enq-name-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className="text-xs font-mono font-medium text-body block mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
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
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                        placeholder="corporate@example.com"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "enq-email-err" : undefined}
                      />
                      {formErrors.email && (
                        <span id="enq-email-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-phone" className="text-xs font-mono font-medium text-body block mb-1.5">Phone/Whatsapp <span className="text-red-500" aria-hidden="true">*</span></label>
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
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                        placeholder="+1 (555) 000-0000"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? "enq-phone-err" : undefined}
                      />
                      {formErrors.phone && (
                        <span id="enq-phone-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {formErrors.phone}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="enquiry-company" className="text-xs font-mono font-medium text-body block mb-1.5">Company (Optional)</label>
                      <input
                        id="enquiry-company"
                        type="text"
                        disabled={formSubmitting}
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => handleEnquiryFieldChange("company", e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Company Name Ltd."
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="enquiry-message" className="text-xs font-mono font-medium text-body">Enquiry Details <span className="text-red-500" aria-hidden="true">*</span></label>
                      <span className={`text-[10px] font-mono ${formData.message.length > 450 ? "text-amber-500 font-bold" : "text-muted"}`}>
                        {formData.message.length}/500 chars
                      </span>
                    </div>
                    <textarea
                      id="enquiry-message"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      maxLength={500}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleEnquiryFieldChange("message", e.target.value)}
                      onBlur={(e) => handleEnquiryFieldBlur("message", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-y ${formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="Please provide specifics regarding product sourcing, dosage forms, or target quantities..."
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "enq-msg-err" : undefined}
                    ></textarea>
                    {formErrors.message && (
                      <span id="enq-msg-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border flex items-center justify-end gap-3 bg-white mt-4">
                    <button
                      type="button"
                      disabled={formSubmitting}
                      onClick={() => setIsEnquiryOpen(false)}
                      className="px-4 py-2.5 border border-border text-body hover:bg-background font-mono text-xs font-medium rounded-btn shadow-sm hover:border-secondary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-mono text-xs font-medium rounded-btn shadow-btn hover:shadow-card-hover transition-all duration-200 flex items-center justify-center gap-2 min-w-[150px] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                      {formSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
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
              )}
            </div>
          </div>
        )}
    </>
  );
}

export default React.memo(Navbar);
