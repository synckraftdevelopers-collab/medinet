"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppRoute } from "../hooks/useRoute";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[#FCFCFD] flex flex-col justify-between selection:bg-teal-100 selection:text-teal-900 font-sans">
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-8">
            <a href="/" className="hover:text-slate-900 transition-colors">HOME</a>
            <ChevronRight className="w-3 h-3" />
            <span>LEGAL</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-semibold">{title.toUpperCase()}</span>
          </div>

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">
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
              className="hidden lg:block lg:col-span-3 sticky top-32"
            >
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 shadow-sm">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  // Table of Contents
                </h4>
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-sm text-slate-600 hover:text-teal-600 transition-colors font-medium block"
                      >
                        {section.title}
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
              className="lg:col-span-9 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm w-full max-w-[900px]"
            >
              <div className="flex flex-col gap-8 text-slate-600 leading-relaxed">
                {children}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer navigate={navigate} showToast={showToast} />
    </div>
  );
}
