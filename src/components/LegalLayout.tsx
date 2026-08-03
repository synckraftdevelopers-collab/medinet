"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppRoute } from "../hooks/useRoute";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Scale,
  Cookie,
  BadgeCheck,
  ListTree,
  LifeBuoy,
  ArrowRight,
  Info,
  Database,
  Building2,
  Handshake,
  Copyright,
  ChevronDown
} from "lucide-react";

interface LegalLayoutProps {
  title: string;
  currentRoute: AppRoute;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}

export default function LegalLayout({ title, currentRoute, sections, children }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navigate = (route: string, queryParams?: Record<string, string>) => {
    let url = `/#${route}`;
    if (queryParams) {
      const searchStr = new URLSearchParams(queryParams).toString();
      if (searchStr) url += `?${searchStr}`;
    }
    window.location.href = url;
  };

  const showToast = (message: string, type: "success" | "error") => {
    alert(`${type.toUpperCase()}: ${message}`);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  let PageIcon = ShieldCheck;
  if (currentRoute === "terms") PageIcon = FileText;
  else if (currentRoute === "disclaimer") PageIcon = Scale;
  else if (currentRoute === "cookies") PageIcon = Cookie;
  else if (currentRoute === "copyright-notice") PageIcon = BadgeCheck;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsTocOpen(false);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_40%,#FFFFFF_100%)] relative overflow-x-hidden flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900 font-sans">
      <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_top_right,rgba(29, 78, 216,0.04)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.03)_0%,transparent_65%)] pointer-events-none z-0" />

      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main className="flex-1 pt-24 pb-16 relative z-10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[12px] font-mono text-body mb-6 uppercase tracking-widest font-bold"
          >
            <a href="/" className="hover:text-secondary transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-muted" />
            <span>Legal</span>
            <ChevronRight className="w-3 h-3 text-muted" />
            <span className="text-heading">{title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-5"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[58px] h-[58px] bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-[0_12px_28px_rgba(29, 78, 216,0.22)] flex items-center justify-center shrink-0"
            >
              <PageIcon className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-secondary/25 bg-secondary/5 text-secondary text-[10px] font-mono font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Legal Document
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold text-heading tracking-tight leading-tight">
                {title}
              </h1>
            </div>
          </motion.div>

          {/* Mobile TOC */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full flex items-center justify-between px-5 py-4 bg-white border border-border rounded-2xl shadow-sm hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <ListTree className="w-4 h-4 text-secondary" />
                <span className="text-[13px] font-bold text-heading uppercase tracking-wider font-mono">Table of Contents</span>
              </div>
              <motion.div animate={{ rotate: isTocOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className="w-5 h-5 text-body" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isTocOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border border-border border-t-0 rounded-b-2xl px-4 py-3 flex flex-col gap-1">
                    {sections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 text-[13px] font-semibold ${
                          activeSection === sec.id
                            ? "text-secondary bg-secondary/5 border-l-[3px] border-secondary pl-2.5"
                            : "text-body hover:text-secondary hover:bg-secondary/5"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${activeSection === sec.id ? "bg-secondary" : "bg-slate-300"}`} />
                        {sec.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Two-Column Layout 30/70 */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-6 xl:gap-8 items-start">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block lg:sticky lg:top-24 self-start"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-border/80 rounded-3xl shadow-[0_8px_32px_rgba(15,23,42,0.07)] p-4 xl:p-5 overflow-hidden">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <ListTree className="w-4 h-4 text-secondary" />
                  </div>
                  <h4 className="text-[12px] font-mono font-extrabold text-heading uppercase tracking-[0.12em]">Table of Contents</h4>
                </div>

                <nav className="flex flex-col gap-0.5">
                  {sections.map((sec, idx) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <motion.button
                        key={sec.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                        onClick={() => scrollToSection(sec.id)}
                        className={`relative flex items-center gap-3 w-full text-left px-3 py-2 rounded-xl transition-all duration-250 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                          isActive ? "text-secondary font-bold" : "text-body hover:text-secondary font-semibold"
                        }`}
                        style={{ backgroundColor: isActive ? "rgba(29, 78, 216,0.07)" : undefined }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="toc-active-bar"
                            className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full bg-secondary"
                          />
                        )}
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-250 ${isActive ? "bg-secondary" : "bg-slate-300 group-hover:bg-secondary/50"}`} />
                        <span className="text-[12px] leading-snug">{sec.title}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-[11px] text-muted font-mono">Last updated: July 2025</p>
                  <p className="text-[11px] text-muted font-mono mt-0.5">Medinet Pharmaceuticals</p>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full min-w-0"
            >
              <div className="bg-white border border-border/80 rounded-3xl shadow-[0_8px_40px_rgba(15,23,42,0.07)] p-6 sm:p-8 xl:p-10">
                <div className="flex flex-col gap-8 text-body leading-[1.75] text-[15px]">
                  {children}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 bg-gradient-to-br from-slate-900 via-primary to-secondary rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(29, 78, 216,0.18)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29, 78, 216,0.25),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />

            <div className="flex items-center gap-5 text-white relative z-10">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[56px] h-[56px] rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20"
              >
                <LifeBuoy className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h4 className="text-white font-display font-extrabold text-xl sm:text-2xl mb-1">Need Legal Assistance?</h4>
                <p className="text-[14px] text-white/90 leading-relaxed max-w-md">Our legal team is available to help clarify our policies and agreements.</p>
              </div>
            </div>

            <a
              href="mailto:corporate@medinetpharma.com"
              className="relative z-10 shrink-0 px-8 py-4 bg-white hover:bg-secondary hover:text-white text-heading font-bold text-[14px] rounded-2xl transition-all duration-300 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(29, 78, 216,0.3)] hover:-translate-y-1 group/cta"
            >
              Contact Legal Team
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </main>

      <Footer navigate={navigate} showToast={showToast} />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck, Database, Building2, Handshake, BadgeCheck,
  Cookie, Scale, Copyright, FileText, ListTree
};

export function LegalSection({
  id,
  title,
  icon,
  children,
  index = 0
}: {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  index?: number;
}) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group scroll-mt-36"
    >
      <div className="flex items-start gap-3 mb-4">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          className="w-[40px] h-[40px] rounded-[12px] bg-gradient-to-br from-primary to-secondary shadow-[0_8px_20px_rgba(29, 78, 216,0.22)] flex items-center justify-center shrink-0 group-hover:scale-[1.08] group-hover:shadow-[0_12px_28px_rgba(29, 78, 216,0.3)] transition-all duration-300"
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        <div className="pt-1">
          <h2 className="text-[20px] sm:text-[22px] font-display font-extrabold text-heading tracking-tight leading-tight group-hover:text-secondary transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-secondary/25 via-primary/15 to-transparent mb-5 rounded-full" />

      <div className="space-y-3 sm:pl-[52px]">
        {children}
      </div>
    </motion.section>
  );
}

export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="my-4 bg-gradient-to-r from-secondary/5 via-blue-50/60 to-transparent border-l-[3px] border-secondary p-4 sm:p-5 rounded-r-2xl flex gap-3.5 items-start cursor-default"
    >
      <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
      <div className="text-[14px] sm:text-[15px] text-heading font-semibold leading-[1.65]">
        {children}
      </div>
    </motion.div>
  );
}
