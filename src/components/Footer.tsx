/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppRoute } from "../hooks/useRoute";
import { THERAPEUTIC_CATEGORIES } from "../data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUpRight,
  Send,
  Globe,
  Award
} from "lucide-react";

interface FooterProps {
  navigate: (route: string, queryParams?: Record<string, string>) => void;
  showToast: (message: string, type: "success" | "error") => void;
}

export default function Footer({ navigate, showToast }: FooterProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Thank you for subscribing to our corporate newsletter!", "success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-[linear-gradient(180deg,#0B1120_0%,#13284D_55%,#1A315C_100%)] text-[#CBD5E1] font-sans border-t border-[#1e293b]">
      {/* Top Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[rgba(96,165,250,0.12)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-lg">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[rgba(37,99,235,0.12)] border border-[rgba(96,165,250,0.20)] text-[#93C5FD] text-[10px] font-mono font-medium tracking-wider uppercase mb-4">// CORPORATE NEWSLETTER</span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#FFFFFF] tracking-tight">
              Stay Informed on <span className="text-[#60A5FA]">Pharmaceutical</span> <span className="text-[#60A5FA]">Advancements</span>
            </h3>
            <p className="mt-2 text-xs text-[#CBD5E1]">
              Subscribe to receive quarterly scientific updates, new product launches, therapeutic pipelines, and regulatory compliance reports.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[rgba(255,255,255,0.08)] border border-[rgba(96,165,250,0.18)] rounded-[8px] text-[#FFFFFF] text-xs shadow-[0_8px_20px_rgba(11,31,77,.15)] focus:outline-none focus:border-[#38BDF8] focus:bg-[rgba(255,255,255,0.12)] focus:ring-4 focus:ring-[rgba(56,189,248,0.18)] placeholder:text-[#94A3B8] transition-all duration-300 ease-in-out"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#60A5FA]" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_100%)] text-[#0B1F4D] shadow-[0_12px_28px_rgba(255,255,255,0.12)] hover:bg-[linear-gradient(135deg,#DBEAFE_0%,#EFF6FF_100%)] hover:text-[#2563EB] hover:shadow-[0_18px_40px_rgba(37,99,235,.20)] hover:-translate-y-[2px] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-in-out flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group/sub"
              >
                {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <Send className="w-3.5 h-3.5 text-[#2563EB] group-hover/sub:text-[#0D9488] transition-colors duration-300 ease-in-out" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-2.5 text-left mb-6 focus:outline-none animate-none"
            >
              <img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-12 w-auto" style={{ filter: "drop-shadow(0 0 18px rgba(37,99,235,.18)) drop-shadow(0 0 40px rgba(56,189,248,.08))" }} />
              <span className="font-display font-bold text-2xl text-[#FFFFFF] tracking-tight">Medi<span className="text-[#38BDF8]">Net</span></span>
            </button>
            <p className="text-xs text-[#CBD5E1] leading-[1.8] pr-4">
              Medinet Pharmaceutical Marketing Company is a world-class marketer of high-quality, bioequivalent advanced therapeutics. Bridging research and accessibility for over 25 years.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(96,165,250,0.15)] hover:bg-[#2563EB] text-[#FFFFFF] hover:text-[#FFFFFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.30)] hover:scale-[1.05] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(96,165,250,0.15)] hover:bg-[#2563EB] text-[#FFFFFF] hover:text-[#FFFFFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.30)] hover:scale-[1.05] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(96,165,250,0.15)] hover:bg-[#2563EB] text-[#FFFFFF] hover:text-[#FFFFFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.30)] hover:scale-[1.05] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2.5 bg-[rgba(37,99,235,0.10)] p-3 rounded-[8px] border border-[rgba(96,165,250,0.20)] border-l-[4px] border-l-[#38BDF8] shadow-[0_10px_30px_rgba(11,31,77,0.20)]">
              <Award className="w-6 h-6 text-[#38BDF8] shrink-0" />
              <div className="text-[11px]">
                <span className="block font-semibold text-[#FFFFFF]">WHO-GMP Compliant</span>
                <span className="block text-[#CBD5E1]">Adhering to strict pharmaceutical standards.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-widest mb-6">
              <span className="text-[#38BDF8]">//</span> CORPORATE
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => navigate("home")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("about")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  About Profile
                </button>
              </li>
              <li>
                <button onClick={() => navigate("research-development")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  Research Focus
                </button>
              </li>
              <li>
                <button onClick={() => navigate("quality")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  Quality & Safety
                </button>
              </li>
              <li>
                <button onClick={() => navigate("careers")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  Join Our Team
                </button>
              </li>
              <li>
                <button onClick={() => navigate("news-events")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit">
                  News & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-widest mb-6">
              <span className="text-[#38BDF8]">//</span> THERAPEUTICS
            </h4>
            <ul className="space-y-3.5 text-xs">
              {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate("products", { category: cat.id })}
                    className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] block text-left w-fit"
                  >
                    {cat.name} Division
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigate("products")} className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] font-mono text-xs font-semibold flex items-center gap-1 w-fit group">
                  All Segments <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-widest mb-6">
              <span className="text-[#38BDF8]">//</span> GLOBAL SUPPORT
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#E2E8F0] font-mono">
                  Bandra-Kurla Complex (BKC), Mumbai, MH, 400051, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="tel:+912249823300" className="text-[#E2E8F0] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] font-mono inline-block w-fit">
                  +91-22-4982-3300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="mailto:corporate@medinetpharma.com" className="text-[#E2E8F0] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] break-all font-mono inline-block w-fit">
                  corporate@medinetpharma.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="text-[#E2E8F0] font-mono hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] inline-block w-fit cursor-pointer">www.medinetpharma.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Sub Footer */}
      <div className="py-8 border-t border-[rgba(96,165,250,0.15)] font-sans text-xs text-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
              <p className="mt-1 text-[#94A3B8] font-mono">ESTD 1998 | WHO-GMP Certified Operations</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/legal/privacy-policy" className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/legal/terms-conditions" className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="/legal/disclaimer" className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300">
                Disclaimer
              </a>
              <a href="/legal/cookie-policy" className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="/legal/copyright-notice" className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300">
                Copyright Notice
              </a>
            </div>
          </div>
          <div className="mt-6 text-[#94A3B8] opacity-85 text-center text-[10px] leading-relaxed max-w-4xl mx-auto border-t border-[rgba(96,165,250,0.15)] pt-4">
            Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
          </div>
        </div>
      </div>
    </footer>
  );
}
