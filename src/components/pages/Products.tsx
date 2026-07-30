/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { PRODUCTS, THERAPEUTIC_CATEGORIES } from "../../data";
import { Product } from "../../types";
import SectionHeader from "../SectionHeader";
import {
  Search,
  Filter,
  Download,
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
  AlertCircle
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

    if (params.section || params.scrollTo) {
      const targetId = params.section || params.scrollTo;
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [params]);

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,.04),transparent_35%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
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
              Explore our comprehensive collection of therapeutic formulations. Every product is audited, verified, bioequivalent, and licensed for wholesale export.
            </p>
          </div>
          <button
            onClick={handleCatalogDownload}
            disabled={isDownloading}
            className="utility-button-primary md:self-end px-6 py-3.5 mx-auto md:mx-0 w-full sm:w-auto flex justify-center"
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
        </motion.div>
      </section>

      {/* Directory Grid */}
      <section id="formulations" className="py-12 scroll-mt-24 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_50%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-3 text-left bg-gradient-to-b from-white to-background border border-border p-6 rounded-3xl shadow-sm">
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
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-xl border-l-[4px] ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-md border-transparent"
                      : "bg-transparent text-body border-transparent hover:bg-secondary/5 hover:text-secondary hover:border-l-secondary"
                  }`}
                >
                  <span>All Formulations</span>
                  <span className={`rounded-full px-2.5 py-1 font-bold text-[10px] transition-colors duration-300 ${
                    selectedCategory === "all"
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
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-xl border-l-[4px] ${
                        selectedCategory === cat.id
                          ? "bg-gradient-to-br from-primary to-secondary text-white shadow-md border-transparent"
                          : "bg-transparent text-body border-transparent hover:bg-secondary/5 hover:text-secondary hover:border-l-secondary"
                      }`}
                    >
                      <span className="line-clamp-1 pr-2">{cat.name}</span>
                      <span className={`rounded-full px-2.5 py-1 font-bold text-[10px] transition-colors duration-300 ${
                        selectedCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-alt-bg text-muted group-hover:bg-secondary/10 group-hover:text-secondary"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-left bg-gradient-to-b from-background to-alt-bg p-5 rounded-[20px] border border-secondary/10 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-mono font-bold text-heading text-xs tracking-widest mb-2">// LICENSING NOTICE</h4>
                  <p className="text-[11px] text-body leading-relaxed">
                    Medinet formulations are marketed to corporate licensed entities only. We do not distribute to patients directly.
                  </p>
                </div>
              </div>
            </aside>

            {/* Products Listing Area */}
            <main className="lg:col-span-9">
              {/* Search Control */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div className="relative w-full sm:max-w-md">
                  <input
                    type="text"
                    placeholder="Search brand, formula or key ingredient..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-border focus:border-secondary focus:ring-[4px] focus:ring-secondary/10 rounded-xl text-sm focus:outline-none text-heading transition-all placeholder:text-muted shadow-sm"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                </div>
                <div className="text-xs font-mono text-muted self-end sm:self-center">
                  // Showing <span className="text-secondary font-bold">{filteredProducts.length}</span> of <span className="text-secondary font-bold">{PRODUCTS.length}</span> formulations
                </div>
              </div>

              {/* Grid of Product Cards */}
              {filteredProducts.length > 0 ? (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {filteredProducts.map((p) => (
                    <motion.div
                      variants={fadeUp}
                      key={p.id}
                      className="utility-card p-6 sm:p-7 h-full flex flex-col justify-between group cursor-pointer hover:border-secondary/30 hover:-translate-y-[6px] transition-all duration-300 shadow-sm hover:shadow-[0_24px_48px_-12px_rgba(20,83,45,0.18)]"
                      onClick={() => setSelectedProduct(p)}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="utility-badge-blue">
                            {p.dosageForm}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-muted">{p.strength}</span>
                        </div>

                        <h3 className="mt-3 mb-1.5 font-display font-bold text-heading text-lg sm:text-xl group-hover:text-secondary transition-colors duration-300 flex items-center gap-2.5">
                          {getDosageIcon(p.dosageForm)}
                          {p.name}
                        </h3>
                        <p className="text-[11px] text-muted font-mono italic mt-1 line-clamp-1">
                          {p.genericName}
                        </p>
                        <p className="mt-3 text-sm text-body leading-relaxed line-clamp-3">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs font-mono">
                        <span className="text-muted">{p.packaging}</span>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-white to-slate-50 border border-emerald-200 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm group-hover:from-emerald-600 group-hover:to-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition-all duration-250 group/btn">
                            DETAILS <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white group-hover:translate-x-1 transition-transform duration-250" />
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

      {/* New Launches Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Innovation Pipeline"
            title="Recent New Launches"
            description="Discover our newest therapeutic formulations recently introduced to the market."
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "MediGastro XR", form: "Extended Release Tablets", category: "Gastroenterology" },
              { name: "NeuroPlus Forte", form: "Dual-Action Capsules", category: "Neurology" },
              { name: "CardioProtect CR", form: "Controlled Release", category: "Cardiology" }
            ].map((launch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="utility-card p-6 border-t-[3px] border-t-emerald-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] transition-all duration-300 group cursor-pointer"
              >
                <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
                  {launch.category}
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                  {launch.name}
                </h3>
                <p className="text-sm font-mono text-slate-500">{launch.form}</p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">Available Now</span>
                  <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-slate-50 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Market Leaders"
            title="Featured Brands"
            description="Our flagship brands trusted by millions of patients globally."
            centered
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {[
              "MedZole-D", "CardioLife", "NeuroSync", "GastroHeal", "Immunex", "OsteoCare"
            ].map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                className="px-8 py-5 bg-white rounded-2xl border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="font-display font-bold text-xl text-slate-700">{brand}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Product Catalogue CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 shadow-lg">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Download Full Product Catalogue
            </h2>
            <p className="text-emerald-100/90 mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Get detailed insights into our complete range of formulations, therapeutic segments, and packaging specifications in our latest corporate catalogue.
            </p>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setIsDownloading(true); setTimeout(() => setIsDownloading(false), 2000); }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-900 rounded-xl font-bold font-mono text-sm tracking-wider shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 group"
            >
              {isDownloading ? (
                <>DOWNLOADING... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>DOWNLOAD PDF <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm overflow-y-auto animate-fade-in">
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
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm overflow-y-auto animate-fade-in">
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
              <form onSubmit={handleEnquirySubmit} className="flex-1 overflow-y-auto p-6 space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prod-enq-name" className="text-xs font-mono font-medium text-body block mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-name"
                      type="text"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleProductFieldChange("name", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("name", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="Dr. Jane Doe"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? "prod-name-err" : undefined}
                    />
                    {formErrors.name && (
                      <span id="prod-name-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="prod-enq-email" className="text-xs font-mono font-medium text-body block mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-email"
                      type="email"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleProductFieldChange("email", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("email", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="sourcing@pharma-corp.com"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? "prod-email-err" : undefined}
                    />
                    {formErrors.email && (
                      <span id="prod-email-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prod-enq-phone" className="text-xs font-mono font-medium text-body block mb-1.5">Phone/Whatsapp <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-phone"
                      type="tel"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => handleProductFieldChange("phone", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("phone", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="+1 (555) 000-0000"
                      aria-invalid={!!formErrors.phone}
                      aria-describedby={formErrors.phone ? "prod-phone-err" : undefined}
                    />
                    {formErrors.phone && (
                      <span id="prod-phone-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="prod-enq-category" className="text-xs font-mono font-medium text-body block mb-1.5">Target Category</label>
                    <select
                      id="prod-enq-category"
                      disabled={formSubmitting}
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-border rounded-input text-sm text-heading appearance-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat"
                    >
                      <option value="commercial">Commercial Supply (Wholesale)</option>
                      <option value="licensing">Territorial Licensing & Rights</option>
                      <option value="clinical">Clinical Trials Sourcing</option>
                      <option value="sample">Analytical/Evaluation Sample</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prod-enq-company" className="text-xs font-mono font-medium text-body block mb-1.5">Company Name <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-company"
                      type="text"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => handleProductFieldChange("company", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("company", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.company ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="BioPharma Distribution Ltd."
                      aria-invalid={!!formErrors.company}
                      aria-describedby={formErrors.company ? "prod-comp-err" : undefined}
                    />
                    {formErrors.company && (
                      <span id="prod-comp-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.company}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="prod-enq-country" className="text-xs font-mono font-medium text-body block mb-1.5">Country of Operations <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="prod-enq-country"
                      type="text"
                      required
                      disabled={formSubmitting}
                      aria-required="true"
                      autoComplete="country-name"
                      value={formData.country}
                      onChange={(e) => handleProductFieldChange("country", e.target.value)}
                      onBlur={(e) => handleProductFieldBlur("country", e.target.value)}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${formErrors.country ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                      placeholder="United States, Germany, etc."
                      aria-invalid={!!formErrors.country}
                      aria-describedby={formErrors.country ? "prod-ctry-err" : undefined}
                    />
                    {formErrors.country && (
                      <span id="prod-ctry-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {formErrors.country}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="prod-enq-message" className="text-xs font-mono font-medium text-body">Target Message / Sourcing Specifications <span className="text-red-500" aria-hidden="true">*</span></label>
                    <span className={`text-[10px] font-mono ${formData.message.length > 450 ? "text-amber-500 font-bold" : "text-muted"}`}>
                      {formData.message.length}/500 chars
                    </span>
                  </div>
                  <textarea
                    id="prod-enq-message"
                    required
                    disabled={formSubmitting}
                    aria-required="true"
                    maxLength={500}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleProductFieldChange("message", e.target.value)}
                    onBlur={(e) => handleProductFieldBlur("message", e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-input text-sm text-heading placeholder:text-muted focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-y ${formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-border"}`}
                    placeholder="Provide specific dosage forms, packaging preferences, and target volume..."
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? "prod-msg-err" : undefined}
                  ></textarea>
                  {formErrors.message && (
                    <span id="prod-msg-err" className="text-[11px] text-red-500 font-mono font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {formErrors.message}
                    </span>
                  )}
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
