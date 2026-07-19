"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppRoute } from "../hooks/useRoute";
import { motion } from "motion/react";
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
  Copyright
} from "lucide-react";

interface LegalLayoutProps {
  title: string;
  currentRoute: AppRoute;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}

export default function LegalLayout({ title, currentRoute, sections, children }: LegalLayoutProps) {
  // Mock navigate function that redirects to root hash router
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

  let PageIcon = ShieldCheck;
  if (currentRoute === "terms") PageIcon = FileText;
  else if (currentRoute === "disclaimer") PageIcon = Scale;
  else if (currentRoute === "cookies") PageIcon = Cookie;
  else if (currentRoute === "copyright-notice") PageIcon = BadgeCheck;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F8FAFC,#F4F8FD,#FFFFFF)] relative overflow-hidden flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900 font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main className="flex-1 pt-28 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-mono text-[#64748B] mb-12">
            <a href="/" className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
              HOME
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>LEGAL</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0F172A] font-semibold">{title.toUpperCase()}</span>
          </div>

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 flex items-center gap-5"
          >
            <div className="w-[52px] h-[52px] bg-[linear-gradient(135deg,#2563EB,#38BDF8)] rounded-[16px] shadow-[0_12px_24px_rgba(37,99,235,.20)] flex items-center justify-center shrink-0">
              <PageIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-[800] text-[#0F172A] tracking-tight">
              {title}
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sticky Sidebar (Table of Contents) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:col-span-3 lg:sticky lg:top-32"
            >
              <div className="bg-[rgba(255,255,255,.90)] backdrop-blur-[18px] border border-[#E2E8F0] rounded-[24px] shadow-[0_18px_40px_rgba(15,23,42,.08)] p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <ListTree className="w-5 h-5 text-[#2563EB]" />
                  <h4 className="text-[15px] font-[700] text-[#0F172A] uppercase tracking-wide">
                    Table of Contents
                  </h4>
                </div>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="flex items-center gap-[10px] text-[14px] text-[#475569] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-[12px] p-[10px] transition-all duration-[300ms] group hover:translate-x-[4px]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] group-hover:bg-[#2563EB] transition-colors duration-[300ms]"></div>
                        <span className="font-medium">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Main Content Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-9 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[28px] p-8 md:p-[48px] shadow-[0_25px_60px_rgba(15,23,42,.08)] w-full max-w-[900px]"
            >
              <div className="flex flex-col gap-[48px] text-[#475569] leading-[2] text-[17px] max-w-[72ch]">
                {children}
              </div>
            </motion.div>
          </div>

          {/* Bottom Information Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 max-w-[1240px] mx-auto bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_45px_rgba(11,31,77,.2)] relative z-10"
          >
            <div className="flex items-center gap-5 text-white">
              <div className="w-[54px] h-[54px] rounded-[16px] bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <LifeBuoy className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-display font-[700] text-xl sm:text-2xl">Need Assistance?</h4>
                <p className="text-[15px] text-white/80 mt-1.5 leading-relaxed">Our legal team is available to help clarify our policies and agreements.</p>
              </div>
            </div>
            <a href="mailto:corporate@medinetpharma.com" className="shrink-0 px-8 py-3.5 bg-white text-[#0B1F4D] font-[700] text-[15px] rounded-[16px] hover:bg-[#2563EB] hover:text-white transition-all duration-[300ms] flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,.15)] group hover:-translate-y-1">
              Contact Legal Team
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-[300ms] group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </main>

      <Footer navigate={navigate} showToast={showToast} />
    </div>
  );
}

// Reusable Sub-components for Legal Pages
export function LegalSection({ id, title, icon, children }: { id: string; title: string; icon: string; children: React.ReactNode }) {
  let Icon = ShieldCheck;
  if (icon === "Database") Icon = Database;
  else if (icon === "Building2") Icon = Building2;
  else if (icon === "Handshake") Icon = Handshake;
  else if (icon === "BadgeCheck") Icon = BadgeCheck;
  else if (icon === "Cookie") Icon = Cookie;
  else if (icon === "Scale") Icon = Scale;
  else if (icon === "Copyright") Icon = Copyright;
  else if (icon === "ListTree") Icon = ListTree;

  return (
    <section id={id} className="animate-fade-in group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[linear-gradient(135deg,#2563EB,#38BDF8)] shadow-[0_10px_24px_rgba(37,99,235,.20)] flex items-center justify-center shrink-0 transition-transform duration-[300ms] group-hover:scale-[1.05]">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-[28px] font-display font-[700] text-[#0F172A] tracking-tight">{title}</h2>
      </div>
      <div className="w-full h-px bg-[#EFF6FF] mb-6"></div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 bg-[#EFF6FF] border-l-[4px] border-[#2563EB] p-4 rounded-r-[12px] flex gap-3 items-start">
      <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
      <div className="text-[15px] text-[#0F172A] font-medium leading-[1.6]">
        {children}
      </div>
    </div>
  );
}
