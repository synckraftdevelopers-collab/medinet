/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { PRODUCTS, THERAPEUTIC_CATEGORIES } from "../../data";
import { Product } from "../../types";
import SectionHeader from "../SectionHeader";
import {
  Search,
  Filter,
  Mail,
  X,
  FileText,
  Activity,
  ArrowRight,
  Info,
  CheckCircle,
  HelpCircle,
  Briefcase,
  Layers,
  ChevronRight,
  ShieldCheck,
  Pill,
  Droplets,
  BadgePlus,
  Syringe,
  Droplet,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Package
} from "lucide-react";

interface ProductsProps {
  params: Record<string, string>;
  showToast: (message: string, type: "success" | "error") => void;
}

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes('tablet') || f.includes('capsule')) return <Pill className="w-5 h-5 text-secondary shrink-0" />;
  if (f.includes('gel')) return <Droplets className="w-5 h-5 text-secondary shrink-0" />;
  if (f.includes('cream') || f.includes('ointment')) return <BadgePlus className="w-5 h-5 text-secondary shrink-0" />;
  if (f.includes('inject') || f.includes('vial') || f.includes('syring')) return <Syringe className="w-5 h-5 text-secondary shrink-0" />;
  if (f.includes('syrup') || f.includes('drop') || f.includes('suspension')) return <Droplet className="w-5 h-5 text-secondary shrink-0" />;
  return <Pill className="w-5 h-5 text-secondary shrink-0" />;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Products({ params, showToast }: ProductsProps) {
  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Enquiry Form State
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
    quantity: "commercial", // sample, clinical, commercial
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Catalog Download State
  const [isDownloading, setIsDownloading] = useState(false);

  // Handle incoming query params (e.g. from global search or nav)
  useEffect(() => {
    if (params.category) {
      setSelectedCategory(params.category);
    } else {
      setSelectedCategory("all");
    }

    if (params.search) {
      setSearchQuery(params.search);
    } else {
      setSearchQuery("");
    }

    if (params.id) {
      const prod = PRODUCTS.find((p) => p.id === params.id);
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, [params]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct || isEnquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct, isEnquiryOpen]);

  // Filter products dynamically
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle catalog download with jsPDF
  const handleCatalogDownload = () => {
    setIsDownloading(true);

    setTimeout(async () => {
      try {
        // Dynamically import to avoid SSR issues if this were a server component, though it's client here
        const { default: jsPDF } = await import("jspdf");
        const { default: autoTable } = await import("jspdf-autotable");

        const doc = new jsPDF("landscape");

        // Add Header
        doc.setFontSize(22);
        doc.setTextColor(15, 23, 42); // slate-900
        doc.text("Medinet Formulations Catalogue", 14, 22);

        doc.setFontSize(11);
        doc.setTextColor(100, 116, 139); // slate-500
        doc.text("Comprehensive collection of therapeutic formulations. Audited and verified.", 14, 30);

        // Prepare table data
        const tableColumn = ["Product Name", "Generic Name", "Category", "Form", "Strength", "Packaging"];
        const tableRows: any[] = [];

        PRODUCTS.forEach(product => {
          const categoryName = THERAPEUTIC_CATEGORIES.find(c => c.id === product.category)?.name || product.category;

          const productData = [
            product.name,
            product.genericName,
            categoryName,
            product.dosageForm,
            product.strength,
            product.packaging
          ];
          tableRows.push(productData);
        });

        // Add table
        autoTable(doc, {
          startY: 40,
          head: [tableColumn],
          body: tableRows,
          theme: 'grid',
          headStyles: { fillColor: [15, 23, 42], textColor: 255, fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [248, 250, 252] }, // slate-50
          styles: { fontSize: 9, cellPadding: 4, textColor: [51, 65, 85] }, // slate-700
          columnStyles: {
            0: { fontStyle: 'bold', textColor: [15, 23, 42], cellWidth: 40 },
            1: { fontStyle: 'italic', cellWidth: 60 },
            2: { cellWidth: 45 },
            3: { cellWidth: 30 },
            4: { cellWidth: 30 },
            5: { cellWidth: 60 }
          },
          margin: { top: 40, right: 14, bottom: 20, left: 14 }
        });

        // Save the PDF
        doc.save("Medinet_Catalogue_Products.pdf");

        showToast("Medinet Formulations Catalogue PDF successfully generated and downloaded!", "success");
      } catch (error) {
        console.error("Error generating PDF:", error);
        showToast("Failed to generate PDF catalogue. Please try again.", "error");
      } finally {
        setIsDownloading(false);
      }
    }, 100);
  };

  const validateProductField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return !value.trim() ? "Full name is required" : "";
      case "email":
        return !value.trim() ? "Email address is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid corporate email" : "";
      case "phone":
        return !value.trim() ? "Phone number is required" : !/^\+?[0-9\s-\(\)\.]{7,15}$/.test(value) ? "Please enter a valid phone number" : "";
      case "company":
        return !value.trim() ? "Company name is required" : "";
      case "country":
        return !value.trim() ? "Country is required" : "";
      case "message":
        return !value.trim() ? "Sourcing specifications are required" : "";
      default:
        return "";
    }
  };

  const handleProductFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      const err = validateProductField(field, value);
      setFormErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleProductFieldBlur = (field: string, value: string) => {
    if (value.trim() || formErrors[field]) {
      const err = validateProductField(field, value);
      setFormErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {
      name: validateProductField("name", formData.name),
      email: validateProductField("email", formData.email),
      phone: validateProductField("phone", formData.phone),
      company: validateProductField("company", formData.company),
      country: validateProductField("country", formData.country),
      message: validateProductField("message", formData.message),
    };
    const activeErrors = Object.fromEntries(Object.entries(errors).filter(([_, v]) => v !== ""));
    setFormErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please correct the form errors before submitting.", "error");
      return;
    }

    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      showToast("Inquiry submitted successfully! A licensing head will contact you shortly.", "success");

      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        message: "",
        quantity: "commercial",
      });
    }, 1200);
  };

  const openProductEnquiry = (product: Product) => {
    setEnquiryProduct(product);
    setFormSuccess(false);
    setFormErrors({});
    setFormData((prev) => ({
      ...prev,
      message: `We are interested in sourcing ${product.name} (${product.strength}) for distribution/marketing in our territory. Please provide licensing and pricing details.`,
    }));
    setIsEnquiryOpen(true);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-background via-alt-bg to-white border-b border-border py-16 relative overflow-hidden">
        {/* Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format&fit=crop"
            alt="Pharmaceutical Formulations"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,.04),transparent_35%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none z-0"></div>
        <motion.div variants={fadeUp} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="utility-badge-blue mb-4">
              <span className="utility-dot"></span>
              Formulation Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight mx-auto md:mx-0">
              <span className="bg-gradient-to-r from-heading to-secondary text-transparent bg-clip-text">Products</span> Directory
            </h1>
            <p className="mt-4 text-body leading-relaxed max-w-[720px] text-sm sm:text-base mx-auto md:mx-0">
              Explore our comprehensive collection of therapeutic formulations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#0B1F4D] font-bold">Every product</span> is audited, verified, bioequivalent, and licensed for wholesale export.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:self-end mx-auto md:mx-0 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("formulations")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 bg-white text-heading border border-border rounded-xl font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center justify-center gap-2"
            >
              VIEW PRODUCT CATALOGUE
            </button>
            <button
              onClick={handleCatalogDownload}
              disabled={isDownloading}
              className="utility-button-primary px-6 py-3.5 flex justify-center w-full sm:w-auto"
            >
              {isDownloading ? (
                <>
                  <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  </div>
                  GENERATING PDF...
                </>
              ) : (
                <>
                  <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:rotate-[8deg] transition-transform duration-300">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  DOWNLOAD CATALOGUE PDF
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-[6px] transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Directory Grid */}
      <section id="formulations" className="py-12 scroll-mt-24 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_50%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block lg:col-span-3 text-left bg-gradient-to-b from-white to-background border border-border p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <Filter className="w-5 h-5 text-secondary" />
                <h3 className="font-mono font-bold text-heading text-xs uppercase tracking-widest">
                  // Filter Segments
                </h3>
              </div>

              {/* Category buttons list */}
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-xl border-l-[4px] ${selectedCategory === "all"
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-md border-transparent"
                      : "bg-transparent text-body border-transparent hover:bg-secondary/5 hover:text-secondary hover:border-l-secondary"
                    }`}
                >
                  <span>All Formulations</span>
                  <span className={`rounded-full px-2.5 py-1 font-bold text-[10px] transition-colors duration-300 ${selectedCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-alt-bg text-muted group-hover:bg-secondary/10 group-hover:text-secondary"
                    }`}>
                    {PRODUCTS.length}
                  </span>
                </button>

                {THERAPEUTIC_CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-xl border-l-[4px] ${selectedCategory === cat.id
                          ? "bg-gradient-to-br from-primary to-secondary text-white shadow-md border-transparent"
                          : "bg-transparent text-body border-transparent hover:bg-secondary/5 hover:text-secondary hover:border-l-secondary"
                        }`}
                    >
                      <span className="line-clamp-1 pr-2">{cat.name}</span>
                      <span className={`rounded-full px-2.5 py-1 font-bold text-[10px] transition-colors duration-300 ${selectedCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-alt-bg text-muted group-hover:bg-secondary/10 group-hover:text-secondary"
                        }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>


            </aside>

            {/* Products Listing Area */}
            <main className="lg:col-span-9">
              {/* Search Control */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div className="flex items-stretch gap-3 w-full sm:max-w-md relative">
                  {/* Search Bar - 80-85% width on mobile */}
                  <div className="relative flex-[4] sm:flex-1">
                    <input
                      type="text"
                      placeholder="Search brand, formula or key ingredient..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-full min-h-[44px] pl-11 pr-4 py-3 bg-white border border-border focus:border-secondary focus:ring-[4px] focus:ring-secondary/10 rounded-xl text-sm focus:outline-none text-heading transition-all placeholder:text-muted shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                  </div>
                  
                  {/* Mobile Dropdown Button (Hidden on lg) */}
                  <div className="relative flex-[1] lg:hidden">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="w-full h-full min-h-[44px] bg-white border border-border focus:border-secondary focus:ring-[4px] focus:ring-secondary/10 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <Filter className="w-4 h-4 text-secondary" />
                      <ChevronDown className="w-3 h-3 text-secondary" />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileDropdownOpen && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setIsMobileDropdownOpen(false)}></div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute right-0 top-[calc(100%+8px)] w-[240px] max-h-[50vh] overflow-y-auto bg-white border border-border rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-50 p-2"
                          >
                            <button
                              onClick={() => { setSelectedCategory("all"); setIsMobileDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer rounded-lg ${selectedCategory === "all" ? "bg-secondary/10 text-secondary" : "text-body hover:bg-secondary/5 hover:text-secondary"}`}
                            >
                              <span>All Formulations</span>
                              <span className="text-[10px] text-muted">{PRODUCTS.length}</span>
                            </button>
                            {THERAPEUTIC_CATEGORIES.map((cat) => {
                              const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                              return (
                                <button
                                  key={cat.id}
                                  onClick={() => { setSelectedCategory(cat.id); setIsMobileDropdownOpen(false); }}
                                  className={`w-full text-left px-3 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer rounded-lg ${selectedCategory === cat.id ? "bg-secondary/10 text-secondary" : "text-body hover:bg-secondary/5 hover:text-secondary"}`}
                                >
                                  <span className="line-clamp-1 pr-2">{cat.name}</span>
                                  <span className="text-[10px] text-muted">{count}</span>
                                </button>
                              );
                            })}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Grid of Product Cards */}
              {filteredProducts.length > 0 ? (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {filteredProducts.map((p) => (
                    <motion.div
                      variants={fadeUp}
                      key={p.id}
                      className="utility-card p-6 sm:p-7 h-full flex flex-col group cursor-pointer hover:border-secondary/30 hover:-translate-y-[6px] transition-all duration-300 shadow-sm hover:shadow-[0_24px_48px_-12px_rgba(10, 25, 47,0.18)] overflow-hidden"
                      onClick={() => setSelectedProduct(p)}
                    >
                      {/* Original Product Packshot */}
                      <div className="relative h-[200px] sm:h-[220px] bg-white -mt-6 -mx-6 sm:-mt-7 sm:-mx-7 mb-5 shrink-0 border-b border-border/40 z-0 flex items-center justify-center rounded-t-[20px] overflow-hidden">
                        <div className="relative w-full h-full p-4 sm:p-5">
                          <Image
                            src={p.image || `/products/${p.name}.png`}
                            alt={`${p.name} packaging`}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col z-10">
                        <div className="flex items-start justify-between min-h-[44px] mb-4">
                          <span className="utility-badge-blue whitespace-normal text-left inline-block">
                            {p.dosageForm}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-muted shrink-0 mt-1.5 ml-3 text-right">{p.strength}</span>
                        </div>

                        <h3 className="mb-1.5 font-display font-bold text-heading text-lg sm:text-xl group-hover:text-secondary transition-colors duration-300 flex items-start gap-2.5 h-[56px]">
                          <span className="mt-1 shrink-0">{getDosageIcon(p.dosageForm)}</span>
                          <span className="line-clamp-2 leading-snug" title={p.name}>{p.name}</span>
                        </h3>
                        <p className="text-[11px] text-muted font-mono italic mt-1 line-clamp-1 h-[16px]">
                          {p.genericName}
                        </p>
                        <p className="mt-3 text-sm text-body leading-[1.6] line-clamp-3 h-[68px]">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-5 border-t border-border flex flex-col gap-3 text-xs font-mono shrink-0">
                        <div className="flex items-center gap-2 text-muted">
                          <Package className="w-3.5 h-3.5 shrink-0" />
                          <span className="line-clamp-2">{p.packaging}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openProductEnquiry(p);
                            }}
                            className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 h-9 bg-gradient-to-r from-secondary to-primary text-white border border-transparent rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-250 z-20 relative px-1"
                          >
                            ENQUIRY <Mail className="w-3.5 h-3.5 shrink-0" />
                          </button>
                          <span className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 h-9 bg-gradient-to-r from-white to-slate-50 border border-blue-200 rounded-full text-[10px] font-bold text-heading uppercase tracking-wider shadow-sm group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all duration-250 group/btn px-1">
                            DETAILS <ArrowRight className="w-3.5 h-3.5 shrink-0 text-secondary group-hover:text-white group-hover:translate-x-1 transition-transform duration-250" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center py-16 border border-dashed border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm bg-background/20">
                  <HelpCircle className="w-10 h-10 text-slate-350 mx-auto mb-4" />
                  <p className="text-body font-mono text-xs font-semibold">No formulations found matching filters</p>
                  <p className="text-muted text-[10px] mt-1">Try relaxing your search terms or choosing &ldquo;All Formulations&rdquo;.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="mt-4 px-3.5 py-1.5 bg-alt-bg hover:bg-alt-bg border border-border text-body font-mono text-[10px] font-semibold rounded transition-colors"
                  >
                    RESET FILTERS
                  </button>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Premium New Launches Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-[#F8FCFF] border-b border-border overflow-hidden">
        {/* Background Medicine Packaging Image */}
        <div className="absolute right-0 top-0 w-[50%] h-full z-0 opacity-[0.05] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop" alt="Medicine Packaging" fill className="object-cover" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Central Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.04),transparent_70%)]"></div>

          {/* Animated Background Icons */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[5%]"
          >
            <Activity className="w-40 h-40 text-[#2563EB]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[5%]"
          >
            <Pill className="w-48 h-48 text-secondary" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Custom Header Area */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            {/* Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-secondary/20 shadow-[0_4px_15px_rgba(13,148,136,0.06)] mb-6 hover:border-secondary/40 transition-colors duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary uppercase">
                Innovation in Every Step
              </span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-[900] text-primary tracking-tight leading-tight mb-6"
            >
              New{" "}
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
                className="bg-gradient-to-r from-[#9D174D] via-[#EC4899] to-[#F9A8D4] bg-clip-text text-transparent inline-block drop-shadow-sm pb-1"
              >
                Launches
              </motion.span>
            </motion.h2>

            {/* Animated Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#EC4899] to-transparent mb-8 origin-center"
            ></motion.div>

            {/* Description */}
            <div className="space-y-6 text-[#475569] text-base md:text-[1.1rem] leading-[1.8] max-w-2xl mx-auto font-medium">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Medinet continues to expand its pharmaceutical portfolio with innovative formulations developed to meet evolving healthcare needs. Our commitment to research, quality, and patient-focused care ensures that every new product delivers value to healthcare professionals and patients alike.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-5 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent border-l-[3px] border-secondary"
              >
                <motion.strong 
                  animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 15px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="font-bold text-[#0A192F] inline-block tracking-wide"
                >
                  Stay tuned for our latest product launches and therapeutic advancements.
                </motion.strong>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {[
              { name: "MediGastro XR", form: "Extended Release Tablets", category: "Gastroenterology" },
              { name: "NeuroPlus Forte", form: "Dual-Action Capsules", category: "Neurology" },
              { name: "CardioProtect CR", form: "Controlled Release", category: "Cardiology" }
            ].map((launch, idx) => (
              <motion.div
                variants={fadeUp}
                key={idx}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[24px] p-6 lg:p-8 flex flex-col justify-between border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.12)] hover:border-secondary/30 hover:-translate-y-[8px] transition-all duration-300 overflow-hidden cursor-pointer h-full"
              >
                {/* Thin Animated Top Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Subtle Background Pill Icon */}
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 pointer-events-none">
                  <Pill className="w-32 h-32 text-primary" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      {launch.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 px-2 py-0.5 rounded text-[9px] font-bold tracking-widest border border-rose-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                      NEW
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-[800] text-2xl text-primary mb-3 group-hover:bg-gradient-to-r group-hover:from-[#0A192F] group-hover:to-[#1D4ED8] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 pr-4">
                    {launch.name}
                  </h3>
                  <p className="text-xs font-mono text-[#475569] tracking-wider uppercase font-semibold">
                    {launch.form}
                  </p>
                </div>

                {/* Footer / CTA */}
                <div className="relative z-10 mt-8 pt-5 border-t border-border/60 flex items-center justify-between group/btn shrink-0">
                  <div className="relative">
                    <span className="text-[11px] font-bold text-primary tracking-widest uppercase inline-block">
                      Available Now
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-alt-bg border border-border flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-[#475569] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Featured Brands Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-[#F8FAFC] border-b border-border overflow-hidden">
        {/* Background Research Image */}
        <div className="absolute left-0 top-0 w-[50%] h-full z-0 opacity-[0.05] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop" alt="Research and Development" fill className="object-cover" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Radial Glow behind heading */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.03),transparent_70%)]"></div>

          {/* Radial glow behind center cards */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.03),transparent_60%)]"></div>

          {/* Molecular/DNA Background Elements */}
          <div className="absolute top-[10%] left-[5%] opacity-[0.03]">
            <Activity className="w-64 h-64 text-primary" />
          </div>
          <div className="absolute bottom-[10%] right-[5%] opacity-[0.02]">
            <Layers className="w-80 h-80 text-secondary" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Custom Header Area */}
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-16">
            {/* Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#2563EB]/20 shadow-[0_4px_15px_rgba(37,99,235,0.06)] mb-6 hover:border-[#2563EB]/40 transition-colors duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary uppercase">
                Market Leaders
              </span>
            </motion.div>

            {/* Premium Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-[900] text-primary tracking-tight leading-tight mb-6"
            >
              Featured <span className="bg-gradient-to-r from-[#0A192F] via-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent">Brands</span>
            </motion.h2>

            {/* Animated Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mb-6 origin-center"
            ></motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#475569] text-base md:text-lg leading-relaxed max-w-xl mx-auto font-medium"
            >
              Our flagship brands are trusted by millions of patients globally, setting the standard for clinical excellence and reliability.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-stretch"
          >
            {[
              { name: "PROENZY DT", label: "Premium Brand", icon: Pill },
              { name: "PROENZY PLUS", label: "Premium Brand", icon: ShieldCheck },
              { name: "AFIDOL P", label: "Premium Brand", icon: BadgePlus },
              { name: "AFIDOL SP", label: "Premium Brand", icon: Activity },
              { name: "ETORIVON P", label: "Premium Brand", icon: Pill },
              { name: "NEURISE NT", label: "Premium Brand", icon: ShieldCheck },
              { name: "OSTEONEU D3", label: "Premium Brand", icon: BadgePlus },
              { name: "OSTEONEU PLUS", label: "Premium Brand", icon: Activity },
              { name: "TRAFIDOL P", label: "Premium Brand", icon: Pill },
              { name: "ZEFRAX 500", label: "Premium Brand", icon: ShieldCheck },
              { name: "XPRAZ-D", label: "Premium Brand", icon: BadgePlus },
              { name: "CLAVINET 625", label: "Premium Brand", icon: Activity },
              { name: "SILALPHA", label: "Premium Brand", icon: Pill },
              { name: "METVION-P Ointment", label: "Premium Brand", icon: ShieldCheck },
              { name: "DUOCEF-S", label: "Premium Brand", icon: BadgePlus },
              { name: "ZEFTRON", label: "Premium Brand", icon: Activity },
              { name: "ZEFRAX-IV", label: "Premium Brand", icon: Pill }
            ].map((brand, idx) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group relative bg-white/70 backdrop-blur-xl rounded-[22px] p-5 flex flex-col items-center text-center border border-border/60 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(11,31,77,0.08)] hover:border-[#2563EB]/30 hover:-translate-y-[6px] transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Animated Gradient Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A192F] via-[#2563EB] to-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                  {/* Original Product Packshot */}
                  <div className="relative h-[160px] bg-white -mt-5 -mx-5 mb-4 shrink-0 border-b border-border/40 z-10 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full p-1 sm:p-2">
                      <Image
                        src={`/products/${encodeURIComponent(brand.name)}.png`}
                        alt={`${brand.name} packaging`}
                        fill
                        className="object-contain scale-[4.5] group-hover:scale-[5] transition-transform duration-500 origin-center drop-shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Circular Placeholder Logo */}
                  <div className="relative mb-5 mt-2 z-20">
                    {/* Soft Glow */}
                    <div className="absolute inset-0 bg-[#2563EB]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-150 transition-all duration-500 z-0"></div>

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-border shadow-sm flex items-center justify-center z-10 group-hover:border-[#2563EB]/40 transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6 text-[#475569] group-hover:text-[#2563EB] transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Brand Name */}
                  <h3 className="font-display font-[800] text-lg text-primary mb-1.5 group-hover:bg-gradient-to-r group-hover:from-[#0A192F] group-hover:to-[#2563EB] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-1">
                    {brand.name}
                  </h3>

                  {/* Category Label */}
                  <span className="text-[9px] font-mono font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                    {brand.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium Download Product Catalogue CTA */}


      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-xl border border-border overflow-hidden text-left max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-border bg-background">
              <div>
                <span className="text-[10px] font-mono font-bold bg-alt-bg text-heading border border-border px-2.5 py-1 rounded uppercase tracking-wider">
                  {selectedProduct.dosageForm} Division
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-medium text-heading mt-2.5">
                  {selectedProduct.name}
                </h2>
                <p className="text-xs sm:text-sm font-mono italic text-slate-550 mt-1">
                  {selectedProduct.genericName}
                </p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 hover:bg-alt-bg/50 text-muted hover:text-body rounded transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div
              className="p-6 space-y-6 overflow-y-auto flex-1 scroll-smooth overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Info Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-background p-4 rounded border border-border text-xs">
                <div>
                  <span className="block text-muted uppercase font-mono tracking-wider mb-0.5">Strength</span>
                  <span className="font-semibold text-heading text-xs">{selectedProduct.strength}</span>
                </div>
                <div>
                  <span className="block text-muted uppercase font-mono tracking-wider mb-0.5">Packaging</span>
                  <span className="font-semibold text-heading text-xs">{selectedProduct.packaging}</span>
                </div>
                <div>
                  <span className="block text-muted uppercase font-mono tracking-wider mb-0.5">Segment</span>
                  <span className="font-semibold text-heading text-xs capitalize">{selectedProduct.category}</span>
                </div>
                <div>
                  <span className="block text-muted uppercase font-mono tracking-wider mb-0.5">Regulatory Status</span>
                  <span className="font-semibold text-heading text-xs font-mono">// BIOEQUIVALENT</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono font-bold text-body uppercase tracking-wider mb-2">// PHARMACOLOGY OVERVIEW</h4>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Indications */}
              <div>
                <h4 className="text-xs font-mono font-bold text-body uppercase tracking-wider mb-3">// THERAPEUTIC INDICATIONS</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-body">
                  {selectedProduct.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2 bg-background p-2.5 rounded border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border flex items-center justify-between gap-4 bg-background">
              <span className="text-[10px] font-mono text-muted">ESTD 1998 | B2B Commercial Only</span>
              <div className="flex gap-2.5">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="utility-button-secondary px-5 py-2.5"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    openProductEnquiry(selectedProduct);
                  }}
                  className="utility-button-primary px-6 py-2.5"
                >
                  <Mail className="w-4 h-4" />
                  SUBMIT INQUIRY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Inquiry Form Drawer/Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xl bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-xl border border-border overflow-hidden text-left max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border bg-background">
              <div>
                <span className="text-[10px] font-mono font-medium text-body uppercase tracking-widest block">
                  // B2B PRODUCT ENQUIRY
                </span>
                <h2 className="text-lg sm:text-xl font-display font-medium text-heading mt-1">
                  Enquire: {enquiryProduct ? enquiryProduct.name : "Bulk Licensing"}
                </h2>
                {enquiryProduct && (
                  <p className="text-xs text-muted font-mono italic mt-0.5">{enquiryProduct.genericName}</p>
                )}
              </div>
              <button
                onClick={() => {
                  setIsEnquiryOpen(false);
                  setEnquiryProduct(null);
                }}
                className="p-1.5 hover:bg-alt-bg/50 text-muted hover:text-body rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Content */}
            {formSuccess ? (
              <div className="p-8 text-center space-y-4 my-auto animate-fade-in">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-medium text-heading">B2B Inquiry Submitted!</h3>
                <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
                  Your sourcing inquiry for <strong className="text-body font-semibold">{enquiryProduct?.name}</strong> has been received. Our licensing head will contact you shortly with dossier availability and pricing.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSuccess(false);
                      setIsEnquiryOpen(false);
                      setEnquiryProduct(null);
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
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleEnquirySubmit}
                className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth overscroll-contain"
                style={{ WebkitOverflowScrolling: "touch" }}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prod-enq-name" className="text-xs font-mono font-medium text-body block mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-name"
                      type="text"
                      required
                      disabled={formSubmitting}
                      value={formData.name}
                      onChange={(e) => handleProductFieldChange("name", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("name", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.name ? "border-red-500 focus:border-red-500" : "border-border"}`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="prod-enq-company" className="text-xs font-mono font-medium text-body block mb-1.5">Organization / Hospital / Clinic <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-company"
                      type="text"
                      required
                      disabled={formSubmitting}
                      value={formData.company}
                      onChange={(e) => handleProductFieldChange("company", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("company", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.company ? "border-red-500 focus:border-red-500" : "border-border"}`}
                      placeholder="Medinet Hospital"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prod-enq-email" className="text-xs font-mono font-medium text-body block mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-email"
                      type="email"
                      required
                      disabled={formSubmitting}
                      value={formData.email}
                      onChange={(e) => handleProductFieldChange("email", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("email", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.email ? "border-red-500 focus:border-red-500" : "border-border"}`}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="prod-enq-phone" className="text-xs font-mono font-medium text-body block mb-1.5">Contact Number <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-phone"
                      type="tel"
                      required
                      disabled={formSubmitting}
                      value={formData.phone}
                      onChange={(e) => handleProductFieldChange("phone", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("phone", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.phone ? "border-red-500 focus:border-red-500" : "border-border"}`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="prod-enq-product" className="text-xs font-mono font-medium text-body block mb-1.5">Product of Interest</label>
                  <input
                    id="prod-enq-product"
                    type="text"
                    disabled={formSubmitting}
                    value={enquiryProduct ? enquiryProduct.name : ""}
                    readOnly={!!enquiryProduct}
                    className="w-full px-3.5 py-2.5 bg-alt-bg border border-border rounded-input text-sm text-heading focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="E.g., ZEFRAX 500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="prod-enq-message" className="text-xs font-mono font-medium text-body">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                    <span className={`text-[10px] font-mono ${formData.message.length > 450 ? "text-amber-500 font-bold" : "text-muted"}`}>
                      {formData.message.length}/500 chars
                    </span>
                  </div>
                  <textarea
                    id="prod-enq-message"
                    required
                    disabled={formSubmitting}
                    maxLength={500}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleProductFieldChange("message", e.target.value)}
                    onBlur={(e) => handleProductFieldBlur("message", e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-y ${formErrors.message ? "border-red-500 focus:border-red-500" : "border-border"}`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Footer */}
                <div className="pt-5 border-t border-border flex items-center justify-end gap-3 bg-white">
                  <button
                    type="button"
                    disabled={formSubmitting}
                    onClick={() => {
                      setIsEnquiryOpen(false);
                      setEnquiryProduct(null);
                    }}
                    className="utility-button-secondary px-5 py-2.5"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="utility-button-primary px-6 py-2.5 flex items-center justify-center gap-2 min-w-[180px]"
                  >
                    {formSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        SUBMIT B2B INQUIRY
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
