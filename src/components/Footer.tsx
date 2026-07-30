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
  Award,
  Loader2,
  AlertCircle
} from "lucide-react";
import { motion, Variants } from "framer-motion";

interface FooterProps {
  navigate: (route: string, queryParams?: Record<string, string>) => void;
  showToast: (message: string, type: "success" | "error") => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

function Footer({ navigate, showToast }: FooterProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const validateEmail = (val: string) => {
    if (!val.trim()) return "Email address is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid corporate email address";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailError) setEmailError(validateEmail(val));
  };

  const handleEmailBlur = () => {
    setIsFocused(false);
    if (email.trim()) setEmailError(validateEmail(email));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) {
      setEmailError(err);
      showToast(err, "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Thank you for subscribing to our corporate newsletter!", "success");
      setEmail("");
      setEmailError("");
    }, 1200);
  };

  return (
    <footer className="bg-primary text-muted font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Newsletter Section */}
      <div className="relative z-10 border-b border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
                Stay Informed on <span className="text-secondary">Advancements</span>
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Subscribe to receive quarterly scientific updates, new product launches, therapeutic pipelines, and regulatory compliance reports.
              </p>
            </motion.div>
            
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2" noValidate>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative flex-1 w-full">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      disabled={loading}
                      autoComplete="email"
                      placeholder="Enter your corporate email address"
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={handleEmailBlur}
                      className={`w-full pl-12 pr-4 h-14 bg-white/5 border rounded-xl text-white text-sm shadow-sm focus:outline-none focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                        emailError ? "border-red-500 focus:border-red-500" : isFocused ? "border-secondary ring-2 ring-secondary/20" : "border-white/10 hover:border-white/20"
                      }`}
                      aria-label="Email address for newsletter"
                      aria-invalid={!!emailError}
                    />
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-secondary' : 'text-white/40'}`} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-14 px-8 bg-white text-primary hover:bg-secondary hover:text-white font-mono text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group/sub shadow-lg hover:shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SUBSCRIBING...
                      </>
                    ) : (
                      <>
                        SUBSCRIBE
                        <Send className="w-4 h-4 group-hover/sub:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
                {emailError && (
                  <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-red-400 font-mono font-medium flex items-center gap-1.5 pl-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {emailError}
                  </motion.span>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Brand Info */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4 flex flex-col gap-8 lg:pr-8">
            <button
              onClick={() => navigate("home")}
              className="text-left focus:outline-none group/logo w-fit"
              aria-label="Go to Medinet Home"
            >
              <img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-14 w-auto drop-shadow-md group-hover/logo:scale-105 transition-transform duration-500 origin-left" />
            </button>
            
            <p className="text-sm text-white/70 leading-relaxed">
              Medinet Pharmaceutical Marketing Company is a world-class marketer of high-quality, bioequivalent advanced therapeutics. Bridging research and accessibility for over 25 years.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(5,150,105,0.4)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(5,150,105,0.4)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(5,150,105,0.4)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full transition-colors hover:border-secondary/30">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm">WHO-GMP Compliant</span>
                <span className="block text-xs text-white/50 mt-0.5">Global manufacturing standards</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Corporate Links */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-8">Corporate</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Home", route: "home" },
                { name: "About Profile", route: "about" },
                { name: "Research Focus", route: "research-development" },
                { name: "Quality & Safety", route: "quality" },
                { name: "Join Our Team", route: "careers" },
                { name: "News & Events", route: "news-events" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button onClick={() => navigate(link.route)} className="text-sm text-white/70 hover:text-white transition-colors duration-300 group flex items-center relative w-fit pb-1 focus:outline-none">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Therapeutics */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-8">Therapeutics</h4>
            <ul className="flex flex-col gap-4">
              {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => navigate("products", { category: cat.id })} className="text-sm text-white/70 hover:text-white transition-colors duration-300 group flex items-center relative w-fit pb-1 focus:outline-none text-left">
                    {cat.name} Division
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button onClick={() => navigate("products")} className="text-sm font-bold text-secondary hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5 group focus:outline-none">
                  View All Segments <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Details */}
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-8">Global Support</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                </div>
                <span className="text-sm text-white/70 leading-relaxed">
                  Bandra-Kurla Complex (BKC), Mumbai, MH, 400051, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                </div>
                <a href="tel:+912249823300" className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group pb-1">
                  +91-22-4982-3300
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                </div>
                <a href="mailto:corporate@medinetpharma.com" className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group pb-1 break-all">
                  corporate@medinetpharma.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5 text-secondary" />
                </div>
                <span className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group pb-1 cursor-pointer">
                  www.medinetpharma.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Legal Sub Footer */}
      <div className="relative z-10 bg-black/20 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left flex flex-col gap-1">
              <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
              <p className="text-[10px] text-white/40 font-mono tracking-wider uppercase">ESTD 1998 | WHO-GMP Certified Operations</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              {[
                { name: "Privacy Policy", route: "/legal/privacy-policy" },
                { name: "Terms & Conditions", route: "/legal/terms-conditions" },
                { name: "Cookie Policy", route: "/legal/cookie-policy" },
                { name: "Disclaimer", route: "/legal/disclaimer" }
              ].map((legal, i) => (
                <a key={i} href={legal.route} className="text-xs text-white/50 hover:text-white transition-colors duration-300 relative group pb-0.5">
                  {legal.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
          </div>
          
          {/* Subtle separator for disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/30 leading-relaxed max-w-5xl mx-auto">
              Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
