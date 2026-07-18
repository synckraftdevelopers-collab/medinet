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
    <footer className="bg-footer text-muted font-sans border-t border-primary">
      {/* Top Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-lg">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary border border-primary text-muted text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
              // CORPORATE NEWSLETTER
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">
              Stay Informed on Pharmaceutical Advancements
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
                  className="w-full pl-10 pr-4 py-2.5 bg-primary border border-primary rounded text-white text-xs focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 placeholder:text-body transition-all"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-body" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 bg-white hover:bg-alt-bg text-heading font-mono text-xs font-semibold rounded transition-all flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
              >
                {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <Send className="w-3.5 h-3.5" />
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
              <img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-12 w-auto" />
            </button>
            <p className="text-xs text-muted leading-relaxed pr-4">
              Medinet Pharmaceutical Marketing Company is a world-class marketer of high-quality, bioequivalent advanced therapeutics. Bridging research and accessibility for over 25 years.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-primary hover:bg-white text-muted hover:text-heading flex items-center justify-center transition-all border border-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-primary hover:bg-white text-muted hover:text-heading flex items-center justify-center transition-all border border-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-primary hover:bg-white text-muted hover:text-heading flex items-center justify-center transition-all border border-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2.5 bg-primary/50 p-3 rounded border border-primary">
              <Award className="w-6 h-6 text-muted shrink-0" />
              <div className="text-[11px]">
                <span className="block font-semibold text-white">WHO-GMP Compliant</span>
                <span className="block text-body">Adhering to strict pharmaceutical standards.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">
              // CORPORATE
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => navigate("home")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("about")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  About Profile
                </button>
              </li>
              <li>
                <button onClick={() => navigate("research-development")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  Research Focus
                </button>
              </li>
              <li>
                <button onClick={() => navigate("quality")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  Quality & Safety
                </button>
              </li>
              <li>
                <button onClick={() => navigate("careers")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  Join Our Team
                </button>
              </li>
              <li>
                <button onClick={() => navigate("news-events")} className="hover:text-highlight transition-colors flex items-center gap-1 group">
                  News & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">
              // THERAPEUTICS
            </h4>
            <ul className="space-y-3.5 text-xs">
              {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate("products", { category: cat.id })}
                    className="hover:text-highlight transition-colors block text-left"
                  >
                    {cat.name} Division
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigate("products")} className="text-white hover:underline font-mono text-xs font-semibold transition-colors flex items-center gap-1">
                  All Segments <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">
              // GLOBAL SUPPORT
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                <span className="leading-relaxed text-muted font-mono">
                  Bandra-Kurla Complex (BKC), Mumbai, MH, 400051, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted shrink-0" />
                <a href="tel:+912249823300" className="hover:text-highlight transition-colors font-mono">
                  +91-22-4982-3300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted shrink-0" />
                <a href="mailto:corporate@medinetpharma.com" className="hover:text-highlight transition-colors break-all font-mono">
                  corporate@medinetpharma.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-muted shrink-0" />
                <span className="text-muted font-mono">www.medinetpharma.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Sub Footer */}
      <div className="bg-footer text-body py-8 border-t border-primary font-sans text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
              <p className="mt-1 text-body font-mono">ESTD 1998 | WHO-GMP Certified Operations</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/legal/privacy-policy" className="hover:text-muted transition-colors">
                Privacy Policy
              </a>
              <a href="/legal/terms-conditions" className="hover:text-muted transition-colors">
                Terms & Conditions
              </a>
              <a href="/legal/disclaimer" className="hover:text-muted transition-colors">
                Disclaimer
              </a>
              <a href="/legal/cookie-policy" className="hover:text-muted transition-colors">
                Cookie Policy
              </a>
              <a href="/legal/copyright-notice" className="hover:text-muted transition-colors">
                Copyright Notice
              </a>
            </div>
          </div>
          <div className="mt-6 text-body text-center text-[10px] leading-relaxed max-w-4xl mx-auto border-t border-primary pt-4">
            Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
          </div>
        </div>
      </div>
    </footer>
  );
}
