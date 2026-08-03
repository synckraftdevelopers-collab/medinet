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
    <footer className="bg-primary text-muted font-sans border-t border-white/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Newsletter Section */}
      <div className="relative z-10 border-b border-white/20 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-center lg:text-left">
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6 max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Premium Floating Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse relative z-10"></div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-200 uppercase relative z-10">Global Updates</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-4 relative">
                Stay Informed on{" "}
                <motion.span 
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-[#38BDF8] via-[#38BDF8] to-[#38BDF8] text-transparent bg-clip-text bg-[length:200%_auto] inline-block"
                >
                  Advancements
                </motion.span>
                <div className="absolute -bottom-3 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[2px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] opacity-70"></div>
              </h3>
              
              <p className="text-[14px] sm:text-[15px] text-gray-300/90 leading-relaxed max-w-md mx-auto lg:mx-0 mt-5">
                Subscribe to receive quarterly scientific updates, new product launches, therapeutic pipelines, and regulatory compliance reports.
              </p>
            </motion.div>
            
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6 w-full max-w-[360px] sm:max-w-[380px] mx-auto lg:max-w-[420px] lg:mx-0">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2" noValidate>
                <div className="flex flex-col sm:flex-row items-center gap-3">
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
                      className={`w-full pl-11 pr-4 h-12 bg-white/10 border rounded-xl text-white placeholder:text-gray-400 text-sm shadow-sm focus:outline-none focus:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                        emailError ? "border-red-500 focus:border-red-500" : isFocused ? "border-secondary ring-2 ring-secondary/20" : "border-white/20 hover:border-white/30"
                      }`}
                      aria-label="Email address for newsletter"
                      aria-invalid={!!emailError}
                    />
                    <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${isFocused ? 'text-secondary' : 'text-gray-300'}`} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-6 bg-white text-primary hover:bg-secondary hover:text-white font-mono text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group/sub shadow-lg hover:shadow-[0_0_20px_rgba(29, 78, 216,0.4)] hover:-translate-y-0.5 w-full sm:w-auto"
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
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4 flex flex-col items-center md:items-start gap-8 lg:pr-8 text-center md:text-left">
            <button
              onClick={() => navigate("home")}
              className="focus:outline-none group/logo w-fit"
              aria-label="Go to Medinet Home"
            >
              <span className="text-3xl font-display font-bold text-white tracking-tight drop-shadow-md group-hover/logo:scale-105 transition-transform duration-500 origin-center md:origin-left">Medinet</span>
            </button>
            
            <p className="text-sm text-gray-200 leading-relaxed">
              Medinet Pharmaceutical Marketing Company is dedicated to delivering reliable pharmaceutical solutions. Reliable Care, Every Time. Committed to quality. Driven by innovation. Trusted by healthcare professionals.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(29, 78, 216,0.6)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 brightness-125" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(29, 78, 216,0.6)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="Twitter">
                <Twitter className="w-4 h-4 brightness-125" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(29, 78, 216,0.6)] flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shrink-0" aria-label="Facebook">
                <Facebook className="w-4 h-4 brightness-125" />
              </a>
            </div>

            <div className="group flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-full transition-all duration-500 hover:bg-white/10 hover:border-[#38BDF8]/40 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/10 to-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#38BDF8] p-[1.5px] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all duration-500">
                <div className="w-full h-full bg-primary/80 backdrop-blur-sm rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                  <Award className="w-6 h-6 text-[#38BDF8] group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              
              <div className="relative z-10">
                <span className="block font-extrabold text-white text-[15px] group-hover:text-[#38BDF8] transition-colors duration-300">WHO-GMP Compliant</span>
                <span className="block text-[13px] text-gray-300 mt-1 leading-tight">Global manufacturing standards</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Corporate Links */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.2em] mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Corporate</span>
              <span className="absolute -bottom-2.5 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-6 h-[2px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] opacity-60"></span>
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {[
                { name: "Home", route: "home" },
                { name: "About Us", route: "about" },
                { name: "Products", route: "products" },
                { name: "R&D", route: "research-development" },
                { name: "Quality", route: "quality" },
                { name: "Partners", route: "business-partners" },
                { name: "Careers", route: "careers" },
                { name: "News & Events", route: "news-events" },
                { name: "Contact Us", route: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button onClick={() => navigate(link.route)} className="text-[13.5px] text-gray-300 group transition-all duration-300 relative pb-1 flex items-center gap-2.5 focus:outline-none w-fit text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 shrink-0"></span>
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:to-[#38BDF8] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                      {link.name}
                    </span>
                    <span className="absolute bottom-0 left-4 w-0 h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Therapeutics */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.2em] mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Therapeutics</span>
              <span className="absolute -bottom-2.5 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-6 h-[2px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] opacity-60"></span>
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => navigate("products", { category: cat.id })} className="text-[13.5px] text-gray-300 group transition-all duration-300 relative pb-1 flex items-center gap-2.5 focus:outline-none w-fit text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300 shrink-0"></span>
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:to-[#38BDF8] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                      {cat.name} Division
                    </span>
                    <span className="absolute bottom-0 left-4 w-0 h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button 
                  onClick={() => navigate("products")} 
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#38BDF8]/30 transition-all duration-300 focus:outline-none"
                >
                  <span className="text-sm font-bold bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-transparent bg-clip-text group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300">
                    View All Segments
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#38BDF8]/20 flex items-center justify-center group-hover:from-[#38BDF8] group-hover:to-[#38BDF8] transition-colors duration-300">
                    <ArrowUpRight className="w-3 h-3 text-[#38BDF8] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Details */}
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.2em] mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Global Support</span>
              <span className="absolute -bottom-2.5 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-6 h-[2px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] opacity-60"></span>
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-6">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-secondary brightness-125" />
                </div>
                <span className="text-sm text-gray-200 leading-relaxed text-center md:text-left">
                  Bandra-Kurla Complex (BKC), Mumbai, MH, 400051, India
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-secondary brightness-125" />
                </div>
                <a href="tel:+912249823300" className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300 relative pb-1">
                  +91-22-4982-3300
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-secondary brightness-125" />
                </div>
                <a href="mailto:corporate@medinetpharma.com" className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300 relative pb-1 break-all text-center md:text-left">
                  corporate@medinetpharma.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Globe className="w-3.5 h-3.5 text-secondary brightness-125" />
                </div>
                <span className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300 relative pb-1 cursor-pointer">
                  www.medinetpharma.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Legal Sub Footer */}
      <div className="relative z-10 bg-black/20 border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-300">&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
              <p className="text-xs text-gray-400 font-mono tracking-wider uppercase">ESTD 1998 | WHO-GMP Certified Operations</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              {[
                { name: "Privacy Policy", route: "privacy-policy" },
                { name: "Terms & Conditions", route: "terms" },
                { name: "Cookie Policy", route: "cookies" },
                { name: "Disclaimer", route: "disclaimer" },
                { name: "Copyright Notice", route: "copyright-notice" }
              ].map((legal, i) => (
                <button key={i} onClick={() => navigate(legal.route)} className="text-[13px] font-medium text-gray-400 group transition-all duration-300 relative pb-1 flex items-center gap-2 focus:outline-none">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300"></span>
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:to-[#38BDF8] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    {legal.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            
          </div>
          
          {/* Subtle separator for disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-xs text-gray-300 leading-loose max-w-7xl mx-auto">
              Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
