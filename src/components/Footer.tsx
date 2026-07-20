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
    <footer className="bg-gradient-to-b from-footer to-primary text-muted font-sans border-t border-primary-hover/20">
      {/* Top Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-lg">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-badge bg-secondary/10 border border-secondary/20 text-highlight text-[10px] font-mono font-medium tracking-wider uppercase mb-4">// CORPORATE NEWSLETTER</span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">
              Stay Informed on <span className="text-highlight">Pharmaceutical</span> <span className="text-highlight">Advancements</span>
            </h3>
            <p className="mt-2 text-xs text-muted">
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
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-secondary/20 rounded-input text-white text-xs shadow-card focus:outline-none focus:border-highlight focus:bg-white/10 focus:ring-2 focus:ring-highlight/30 placeholder:text-muted transition-all duration-300"
                  aria-label="Email address for newsletter"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-white text-primary hover:bg-alt-bg hover:text-secondary font-mono text-xs font-semibold rounded-btn transition-all duration-300 flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group/sub shadow-btn hover:shadow-card hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-white"
              >
                {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <Send className="w-3.5 h-3.5 text-secondary group-hover/sub:text-accent transition-colors duration-300" />
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
              className="flex items-center gap-2.5 text-left mb-6 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-white rounded-lg p-1 -ml-1 transition-all"
              aria-label="Go to Medinet Home"
            >
              <img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-12 w-auto" style={{ filter: "drop-shadow(0 0 18px rgba(37,99,235,.18)) drop-shadow(0 0 40px rgba(56,189,248,.08))" }} />
              <span className="font-display font-bold text-2xl text-white tracking-tight">Medi<span className="text-highlight">Net</span></span>
            </button>
            <p className="text-xs text-muted leading-relaxed pr-4">
              Medinet Pharmaceutical Marketing Company is a world-class marketer of high-quality, bioequivalent advanced therapeutics. Bridging research and accessibility for over 25 years.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-secondary/20 hover:bg-secondary text-white hover:shadow-card hover:scale-105 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-secondary/20 hover:bg-secondary text-white hover:shadow-card hover:scale-105 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-white"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-secondary/20 hover:bg-secondary text-white hover:shadow-card hover:scale-105 flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2.5 bg-secondary/10 p-3 rounded-card border border-secondary/20 border-l-[4px] border-l-highlight shadow-card">
              <Award className="w-6 h-6 text-highlight shrink-0" />
              <div className="text-[11px]">
                <span className="block font-semibold text-white">WHO-GMP Compliant</span>
                <span className="block text-muted">Adhering to strict pharmaceutical standards.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-6">
              <span className="text-highlight">//</span> CORPORATE
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => navigate("home")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("about")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  About Profile
                </button>
              </li>
              <li>
                <button onClick={() => navigate("research-development")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  Research Focus
                </button>
              </li>
              <li>
                <button onClick={() => navigate("quality")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  Quality & Safety
                </button>
              </li>
              <li>
                <button onClick={() => navigate("careers")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  Join Our Team
                </button>
              </li>
              <li>
                <button onClick={() => navigate("news-events")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-1 w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  News & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-6">
              <span className="text-highlight">//</span> THERAPEUTICS
            </h4>
            <ul className="space-y-3.5 text-xs">
              {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate("products", { category: cat.id })}
                    className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 block text-left w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1"
                  >
                    {cat.name} Division
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigate("products")} className="text-muted hover:text-highlight transition-all duration-300 hover:translate-x-1 font-mono text-xs font-semibold flex items-center gap-1 w-fit group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  All Segments <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-widest mb-6">
              <span className="text-highlight">//</span> GLOBAL SUPPORT
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/90 font-mono">
                  Bandra-Kurla Complex (BKC), Mumbai, MH, 400051, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-highlight shrink-0" />
                <a href="tel:+912249823300" className="text-white/90 hover:text-highlight transition-all duration-300 hover:translate-x-1 font-mono inline-block w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  +91-22-4982-3300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-highlight shrink-0" />
                <a href="mailto:corporate@medinetpharma.com" className="text-white/90 hover:text-highlight transition-all duration-300 hover:translate-x-1 break-all font-mono inline-block w-fit focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                  corporate@medinetpharma.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-highlight shrink-0" />
                <span className="text-white/90 font-mono hover:text-highlight transition-all duration-300 hover:translate-x-1 inline-block w-fit cursor-pointer">www.medinetpharma.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Sub Footer */}
      <div className="py-8 border-t border-white/5 font-sans text-xs text-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
              <p className="mt-1 text-muted/70 font-mono">ESTD 1998 | WHO-GMP Certified Operations</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/legal/privacy-policy" className="text-muted hover:text-highlight transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                Privacy Policy
              </a>
              <a href="/legal/terms-conditions" className="text-muted hover:text-highlight transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                Terms & Conditions
              </a>
              <a href="/legal/disclaimer" className="text-muted hover:text-highlight transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                Disclaimer
              </a>
              <a href="/legal/cookie-policy" className="text-muted hover:text-highlight transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                Cookie Policy
              </a>
              <a href="/legal/copyright-notice" className="text-muted hover:text-highlight transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-footer focus-visible:ring-highlight rounded px-1 -ml-1">
                Copyright Notice
              </a>
            </div>
          </div>
          <div className="mt-6 text-muted/60 text-center text-[10px] leading-relaxed max-w-4xl mx-auto border-t border-white/5 pt-4">
            Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
          </div>
        </div>
      </div>
    </footer>
  );
}
