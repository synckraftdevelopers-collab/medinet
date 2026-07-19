/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
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
  Droplet
} from "lucide-react";

interface ProductsProps {
  params: Record<string, string>;
  showToast: (message: string, type: "success" | "error") => void;
}

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes('tablet') || f.includes('capsule')) return <Pill className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
  if (f.includes('gel')) return <Droplets className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
  if (f.includes('cream') || f.includes('ointment')) return <BadgePlus className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
  if (f.includes('inject') || f.includes('vial') || f.includes('syring')) return <Syringe className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
  if (f.includes('syrup') || f.includes('drop') || f.includes('suspension')) return <Droplet className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
  return <Pill className="w-[16px] h-[16px] text-[#2563EB] shrink-0" />;
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

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.message.trim()) errors.message = "Message or therapeutic target is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
      setIsEnquiryOpen(false);
      setEnquiryProduct(null);
    }, 1500);
  };

  const openProductEnquiry = (product: Product) => {
    setEnquiryProduct(product);
    setFormData((prev) => ({
      ...prev,
      message: `We are interested in sourcing ${product.name} (${product.strength}) for distribution/marketing in our territory. Please provide licensing and pricing details.`,
    }));
    setIsEnquiryOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F8FE_45%,#FFFFFF_100%)] border-b border-[#DBEAFE] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,.04),transparent_35%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(37,99,235,.02))] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF)] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_8px_20px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Formulation Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight">
              <span className="bg-[linear-gradient(90deg,#0B1F4D,#2563EB)] text-transparent bg-clip-text">Products</span> Directory
            </h1>
            <p className="mt-3 text-[#475569] leading-[1.8] max-w-[720px] text-xs sm:text-sm">
              Explore our comprehensive collection of therapeutic formulations. Every product is audited, verified, bioequivalent, and licensed for wholesale export.
            </p>
          </div>
          <button
            onClick={handleCatalogDownload}
            disabled={isDownloading}
            className="md:self-end px-5 py-2.5 bg-[linear-gradient(135deg,#0B1F4D,#1D4ED8)] disabled:opacity-75 text-white font-mono text-xs font-semibold rounded-[16px] shadow-[0_14px_35px_rgba(29,78,216,.22)] hover:bg-[linear-gradient(135deg,#2563EB,#38BDF8)] hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,.30)] transition-all duration-300 ease-[ease] flex items-center justify-center gap-3 shrink-0 border-none group"
          >
            {isDownloading ? (
              <>
                <div className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.18)] flex items-center justify-center shrink-0">
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                </div>
                GENERATING PDF...
              </>
            ) : (
              <>
                <div className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.18)] flex items-center justify-center shrink-0 group-hover:rotate-[8deg] transition-transform duration-300">
                  <FileText className="w-3.5 h-3.5 text-white" />
                </div>
                DOWNLOAD CATALOGUE PDF
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-[6px] transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_50%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-3 text-left bg-[linear-gradient(180deg,#FFFFFF,#F8FAFC)] border border-[#DCE7F5] p-5 rounded-[28px] shadow-[0_20px_45px_rgba(11,31,77,.08)]">
              <div className="flex items-center gap-3 border-b border-[#DCE7F5] pb-4 mb-5">
                <Filter className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-mono font-semibold text-[#0B1F4D] text-xs uppercase tracking-[0.1em]">
                  // Filter Segments
                </h3>
              </div>

              {/* Category buttons list */}
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-[12px] border-l-[4px] ${
                    selectedCategory === "all"
                      ? "bg-[linear-gradient(135deg,#0B1F4D,#1D4ED8)] text-[#FFFFFF] shadow-[0_10px_24px_rgba(37,99,235,.28)] border-transparent"
                      : "bg-transparent text-[#334155] border-transparent hover:bg-[#EFF6FF] hover:text-[#2563EB] hover:border-l-[#2563EB]"
                  }`}
                >
                  <span>All Formulations</span>
                  <span className={`rounded-full px-[10px] py-[4px] font-semibold text-[10px] transition-colors duration-300 ${
                    selectedCategory === "all"
                      ? "bg-[rgba(255,255,255,0.18)] text-[#FFFFFF]"
                      : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB]"
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
                      className={`w-full text-left px-3 py-2 text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer group rounded-[12px] border-l-[4px] ${
                        selectedCategory === cat.id
                          ? "bg-[linear-gradient(135deg,#0B1F4D,#1D4ED8)] text-[#FFFFFF] shadow-[0_10px_24px_rgba(37,99,235,.28)] border-transparent"
                          : "bg-transparent text-[#334155] border-transparent hover:bg-[#EFF6FF] hover:text-[#2563EB] hover:border-l-[#2563EB]"
                      }`}
                    >
                      <span className="line-clamp-1 pr-2">{cat.name}</span>
                      <span className={`rounded-full px-[10px] py-[4px] font-semibold text-[10px] transition-colors duration-300 ${
                        selectedCategory === cat.id
                          ? "bg-[rgba(255,255,255,0.18)] text-[#FFFFFF]"
                          : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB]"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#DCE7F5]">
                <div className="text-left bg-[linear-gradient(180deg,#F8FAFC,#F1F5F9)] p-5 rounded-[20px] border border-[#DBEAFE] hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(13,148,136,.10)] transition-all duration-300">
                  <div className="w-[44px] h-[44px] bg-[rgba(13,148,136,0.10)] rounded-[12px] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <h4 className="font-mono font-bold text-[#0B1F4D] text-xs tracking-wider mb-2">// LICENSING NOTICE</h4>
                  <p className="text-[10px] text-[#64748B] leading-[1.7]">
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
                    className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] border border-[#DBEAFE] focus:border-[#2563EB] focus:ring-[4px] focus:ring-[rgba(37,99,235,.10)] rounded-[16px] text-xs focus:outline-none text-[#0B1F4D] transition-all placeholder:text-[#94A3B8] shadow-[0_10px_24px_rgba(11,31,77,.05)]"
                  />
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="text-[10px] font-mono text-[#64748B] self-end sm:self-center">
                  // Showing <span className="text-[#2563EB] font-bold">{filteredProducts.length}</span> of <span className="text-[#2563EB] font-bold">{PRODUCTS.length}</span> formulations
                </div>
              </div>

              {/* Grid of Product Cards */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      className="bg-[linear-gradient(180deg,#FFFFFF,#FDFEFF)] border border-[#E2E8F0] p-5 rounded-[22px] shadow-[0_16px_35px_rgba(15,23,42,.06)] hover:-translate-y-[8px] hover:border-[#BFDBFE] hover:shadow-[0_28px_55px_rgba(37,99,235,.15)] transition-all duration-[350ms] ease-[ease] text-left flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <span className="text-[9px] font-mono font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-2 py-0.5 rounded-full uppercase transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(37,99,235,.2)]">
                            {p.dosageForm}
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-[#64748B]">{p.strength}</span>
                        </div>

                        <h3 className="font-display font-bold text-[#0B1F4D] text-base group-hover:text-[#2563EB] transition-colors duration-300 flex items-center gap-1.5">
                          {getDosageIcon(p.dosageForm)}
                          {p.name}
                        </h3>
                        <p className="text-[10px] text-[#64748B] font-mono italic mt-1 line-clamp-1">
                          {p.genericName}
                        </p>
                        <p className="text-xs text-[#475569] leading-[1.75] mt-3 line-clamp-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#94A3B8]">{p.packaging}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedProduct(p)}
                            className="text-xs font-bold text-[#0B1F4D] group-hover:text-[#2563EB] transition-colors duration-300 cursor-pointer flex items-center gap-1"
                          >
                            Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-[6px] transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm bg-background/20">
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
                </div>
              )}
            </main>
          </div>
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
                  className="px-4 py-2 border border-border text-body hover:bg-alt-bg font-mono text-xs font-medium rounded transition-all"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    openProductEnquiry(selectedProduct);
                  }}
                  className="px-5 py-2 bg-primary hover:bg-slate-850 text-white font-mono text-xs font-semibold rounded transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
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
            <form onSubmit={handleEnquirySubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono font-medium text-body">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.name ? "border-red-500" : "border-border"}`}
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
                    className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.email ? "border-red-500" : "border-border"}`}
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
                    className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.phone ? "border-red-500" : "border-border"}`}
                  />
                  {formErrors.phone && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.phone}</span>}
                </div>
                <div>
                  <label className="text-xs font-mono font-medium text-body">Target Category</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full mt-1.5 px-3 py-2 bg-white border border-border rounded text-xs appearance-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.5rem_center] bg-no-repeat"
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
                  <label className="text-xs font-mono font-medium text-body">Company Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.company ? "border-red-500" : "border-border"}`}
                  />
                  {formErrors.company && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.company}</span>}
                </div>
                <div>
                  <label className="text-xs font-mono font-medium text-body">Country of Operations <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.country ? "border-red-500" : "border-border"}`}
                  />
                  {formErrors.country && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.country}</span>}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-medium text-body">Target Message / Sourcing Specifications <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full mt-1.5 px-3 py-2 border rounded text-xs focus:border-secondary focus:ring-4 focus:ring-secondary/15 focus:outline-none transition-all ${formErrors.message ? "border-red-500" : "border-border"}`}
                ></textarea>
                {formErrors.message && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{formErrors.message}</span>}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-border flex items-center justify-end gap-3 bg-white">
                <button
                  type="button"
                  onClick={() => {
                    setIsEnquiryOpen(false);
                    setEnquiryProduct(null);
                  }}
                  className="px-4 py-2 border border-border text-body hover:bg-background font-mono text-xs font-medium rounded transition-all"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-5 py-2 bg-primary hover:bg-slate-850 text-white font-mono text-xs font-semibold rounded transition-all flex items-center gap-1.5"
                >
                  {formSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
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
          </div>
        </div>
      )}
    </div>
  );
}
