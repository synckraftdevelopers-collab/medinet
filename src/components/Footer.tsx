/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppRoute, useRoute } from "../hooks/useRoute";
import { THERAPEUTIC_CATEGORIES } from "../data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Send,
  Globe,
  Award,
  Loader2,
  AlertCircle
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface FooterProps {
  navigate: (route: string, queryParams?: Record<string, string>) => void;
  showToast: (message: string, type: "success" | "error") => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

function Footer({ navigate, showToast }: FooterProps) {
  const { currentRoute } = useRoute();
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
    <footer className="bg-[#0F172A] text-white font-sans border-t border-pink-500/20 pt-16 pb-0 relative overflow-hidden">
      {/* Background Molecular Pattern Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop"
          alt="Molecular Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        {/* Top Newsletter Section */}
        <div className="max-w-[1500px] mx-auto px-6 lg:px-[80px] 2xl:px-[100px] pb-[60px] border-b border-white/10">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10">

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center xl:items-start w-full xl:w-auto text-center xl:text-left">
              <div className="w-full max-w-[650px] mx-auto xl:mx-0">
                <h3 className="text-[38px] lg:text-[54px] font-[800] text-white leading-[1.1] tracking-tight mb-6">
                  Stay Connected <br className="hidden sm:block" /> with{" "}
                  <motion.span
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-pink-500 via-[#1E3A8A] to-pink-500 text-transparent bg-clip-text bg-[length:200%_auto] inline-block"
                  >
                    Medinet
                  </motion.span>
                </h3>
                <p className="text-[18px] text-[rgba(255,255,255,0.9)] leading-[1.8] max-w-[620px] mx-auto xl:mx-0">
                  Receive the latest pharmaceutical innovations, healthcare insights, product launches, medical conferences, and corporate announcements.
                </p>
              </div>
            </motion.div>

            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full xl:w-auto flex justify-center xl:justify-end">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-[12px] w-full max-w-md sm:max-w-none" noValidate>
                <div className="relative group/input w-full sm:w-[420px] xl:w-[460px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563EB]/40 to-[#EC4899]/40 rounded-[14px] blur opacity-30 group-hover/input:opacity-60 transition duration-500"></div>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    disabled={loading}
                    autoComplete="email"
                    placeholder="Enter corporate email address"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleEmailBlur}
                    className={`relative w-full pl-[40px] pr-4 h-[46px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[12px] text-white placeholder:text-white/50 text-[14px] shadow-sm focus:outline-none focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${emailError ? "border-red-500" : isFocused ? "border-[#EC4899]/50 shadow-[inset_0_0_15px_rgba(236,72,153,0.15)]" : ""
                      }`}
                    aria-label="Email address for newsletter"
                    aria-invalid={!!emailError}
                  />
                  <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${isFocused ? 'text-[#EC4899]' : 'text-white/40'}`} />
                  {emailError && (
                    <motion.span initial={{ opacity: 0, y: -2 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-6 left-2 text-[13px] text-red-400 font-medium flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {emailError}
                    </motion.span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full sm:w-auto h-[46px] px-[20px] bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] hover:from-pink-600 hover:to-pink-500 text-white font-[600] text-[14px] rounded-[12px] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/btn shadow-[0_4px_15px_rgba(15,23,42,0.4)] hover:shadow-[0_8px_20px_rgba(236,72,153,0.35)] hover:-translate-y-[2px] overflow-hidden shrink-0 mt-2 sm:mt-0"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-[120%] group-hover/btn:translate-x-[120%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></div>
                  {loading ? (
                    <>
                      <Loader2 className="w-[16px] h-[16px] animate-spin relative z-10" />
                      <span className="relative z-10 whitespace-nowrap">SUBSCRIBING...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 whitespace-nowrap">SUBSCRIBE</span>
                      <Send className="w-[16px] h-[16px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300 relative z-10" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-[1500px] mx-auto px-6 lg:px-[80px] 2xl:px-[100px] py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-[80px] items-start">

            {/* Column 1: Company */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full">
              <h4 className="text-[16px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 uppercase tracking-[0.2em] mb-4 hidden md:block drop-shadow-md">
                Company
              </h4>

              <p className="text-[16px] text-[rgba(255,255,255,0.88)] leading-[1.8] max-w-[360px]">
                Medinet Pharmaceutical Marketing Company is dedicated to delivering reliable pharmaceutical solutions. Reliable Care, Every Time. Committed to quality. Driven by innovation. Trusted by healthcare professionals.
              </p>

              <div className="flex items-center gap-[16px] mt-2 justify-center md:justify-start w-full">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.08] hover:rotate-[5deg] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:border-[#EC4899] shrink-0 group" aria-label="LinkedIn">
                  <Linkedin className="w-[18px] h-[18px] group-hover:text-[#FCE7F3] transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.08] hover:rotate-[5deg] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:border-[#EC4899] shrink-0 group" aria-label="Twitter">
                  <Twitter className="w-[18px] h-[18px] group-hover:text-[#FCE7F3] transition-colors duration-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.08] hover:rotate-[5deg] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:border-[#EC4899] shrink-0 group" aria-label="Facebook">
                  <Facebook className="w-[18px] h-[18px] group-hover:text-[#FCE7F3] transition-colors duration-300" />
                </a>
              </div>

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 group flex items-center gap-[18px] bg-white/5 backdrop-blur-2xl p-[18px] rounded-[18px] border border-[#EC4899]/20 shadow-[0_8px_25px_rgba(0,0,0,0.2)] w-full max-w-[320px] h-[90px] transition-all duration-500 hover:bg-white/10 hover:border-[#EC4899]/50 hover:shadow-[0_15px_30px_rgba(236,72,153,0.15)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/10 to-[#2563EB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-[50px] h-[50px] rounded-[14px] bg-gradient-to-br from-[#EC4899] to-[#2563EB] p-[1.5px] flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-500">
                  <div className="w-full h-full bg-[#0B1F4D] rounded-[12.5px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                    <Award className="w-[22px] h-[22px] text-[#F9A8D4] group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
                <div className="relative z-10 text-left flex flex-col justify-center">
                  <span className="block font-bold text-white text-[15px] group-hover:text-[#FCE7F3] transition-colors duration-300 leading-none">WHO-GMP Compliant</span>
                  <span className="block text-[13px] text-[rgba(255,255,255,0.7)] mt-[6px] leading-snug">Global manufacturing standards</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2: Corporate Links */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-[16px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 uppercase tracking-[0.2em] mb-8 drop-shadow-md">
                Corporate
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-[18px] w-full">
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
                  <li key={idx} className="w-full flex justify-center md:justify-start">
                    <button onClick={() => navigate(link.route)} className="text-[15px] text-[rgba(255,255,255,0.85)] hover:text-[#EC4899] group transition-all duration-300 relative pb-0.5 flex items-center gap-[12px] focus:outline-none hover:translate-x-[4px] text-left w-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#EC4899] group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-300 shrink-0"></span>
                      <span className="transition-colors duration-300">{link.name}</span>
                      <span className="absolute bottom-0 left-5 w-0 h-[1.5px] bg-[#EC4899] transition-all duration-500 group-hover:w-[calc(100%-20px)] opacity-60"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Therapeutics */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-[16px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 uppercase tracking-[0.2em] mb-8 drop-shadow-md">
                Therapeutics
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-[18px] w-full">
                {THERAPEUTIC_CATEGORIES.slice(0, 5).map((cat) => (
                  <li key={cat.id} className="w-full flex justify-center md:justify-start">
                    <button onClick={() => navigate("products", { category: cat.id })} className="text-[15px] text-[rgba(255,255,255,0.85)] hover:text-[#EC4899] group transition-all duration-300 relative pb-0.5 flex items-center gap-[12px] focus:outline-none hover:translate-x-[4px] text-left w-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#EC4899] group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-300 shrink-0"></span>
                      <span className="transition-colors duration-300">{cat.name} Division</span>
                      <span className="absolute bottom-0 left-5 w-0 h-[1.5px] bg-[#EC4899] transition-all duration-500 group-hover:w-[calc(100%-20px)] opacity-60"></span>
                    </button>
                  </li>
                ))}
                <li className="pt-[16px] w-full flex justify-center md:justify-start">
                  <button
                    onClick={() => navigate("products")}
                    className="group relative inline-flex items-center gap-[10px] pl-[20px] pr-[6px] h-[46px] rounded-full focus:outline-none transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(236,72,153,0.4)] overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] group-hover:from-pink-600 group-hover:to-pink-500 transition-colors duration-300"></div>

                    <span className="relative z-10 text-[14px] font-[600] text-[#FFFFFF] tracking-[0.5px]">
                      VIEW ALL SEGMENTS
                    </span>
                    <div className="relative z-10 w-[34px] h-[34px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-[1.05] group-hover:bg-white/30">
                      <ArrowRight className="w-[18px] h-[18px] text-white" />
                    </div>
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Column 4: Global Support */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h4 className="text-[16px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 uppercase tracking-[0.2em] mb-8 drop-shadow-md">
                Global Support
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-[20px] w-full">
                <li className="flex items-start gap-[16px] group w-full justify-center md:justify-start">
                  <div className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-[1.08] group-hover:rotate-[5deg] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:border-[#EC4899]">
                    <MapPin className="w-[20px] h-[20px] text-[#F9A8D4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[15px] text-[rgba(255,255,255,0.85)] group-hover:text-[#FCE7F3] transition-colors duration-300 leading-[1.6] text-left pt-[10px] max-w-[200px]">
                    Bandra-Kurla Complex (BKC), Mumbai, 400051, India
                  </span>
                </li>
                <li className="flex items-start gap-[16px] group w-full justify-center md:justify-start">
                  <div className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-[1.08] group-hover:rotate-[5deg] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:border-[#EC4899]">
                    <Phone className="w-[20px] h-[20px] text-[#F9A8D4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <a href="tel:+912249823300" className="text-[15px] text-[rgba(255,255,255,0.85)] group-hover:text-[#FCE7F3] transition-colors duration-300 relative pb-0.5 text-left pt-[10px]">
                    +91-22-4982-3300
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EC4899] transition-all duration-500 group-hover:w-full opacity-60"></span>
                  </a>
                </li>
                <li className="flex items-start gap-[16px] group w-full justify-center md:justify-start">
                  <div className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-[1.08] group-hover:rotate-[5deg] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:border-[#EC4899]">
                    <Mail className="w-[20px] h-[20px] text-[#F9A8D4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <a href="mailto:corporate@medinetpharma.com" className="text-[15px] text-[rgba(255,255,255,0.85)] group-hover:text-[#FCE7F3] transition-colors duration-300 relative pb-0.5 break-all text-left pt-[10px]">
                    corporate@medinetpharma.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EC4899] transition-all duration-500 group-hover:w-full opacity-60"></span>
                  </a>
                </li>
                <li className="flex items-start gap-[16px] group w-full justify-center md:justify-start">
                  <div className="w-[44px] h-[44px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-[1.08] group-hover:rotate-[5deg] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:border-[#EC4899]">
                    <Globe className="w-[20px] h-[20px] text-[#F9A8D4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[15px] text-[rgba(255,255,255,0.85)] group-hover:text-[#FCE7F3] transition-colors duration-300 relative pb-0.5 cursor-pointer text-left pt-[10px]">
                    www.medinetpharma.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EC4899] transition-all duration-500 group-hover:w-full opacity-60"></span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Legal Sub Footer */}
        <div className="bg-[#0B1221] border-t border-white/5 py-[40px] relative z-10">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-[80px] 2xl:px-[100px]">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 w-full">
              <div className="text-center lg:text-left flex flex-col gap-[8px]">
                <p className="text-[14px] text-white/90">&copy; {new Date().getFullYear()} Medinet Pharmaceutical Marketing Company. All rights reserved.</p>
                <p className="text-[13px] text-[#F9A8D4] font-mono tracking-[0.08em] uppercase font-bold opacity-80">ESTD 1998 | WHO-GMP Certified Operations</p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                {[
                  { name: "Privacy Policy", route: "privacy-policy" },
                  { name: "Terms & Conditions", route: "terms" },
                  { name: "Cookie Policy", route: "cookies" },
                  { name: "Disclaimer", route: "disclaimer" },
                  { name: "Copyright Notice", route: "copyright-notice" }
                ].map((legal, i) => {
                  const isActive = currentRoute === legal.route;
                  return (
                    <button key={i} onClick={() => navigate(legal.route)} className={`group relative px-3.5 py-1.5 rounded-full transition-colors duration-200 active:scale-95 flex items-center justify-center ${isActive ? "bg-[#2563EB]" : "bg-transparent hover:bg-white/5"}`} style={{ WebkitTapHighlightColor: 'transparent' }}>
                      <span className={`relative z-10 text-[13px] font-medium transition-colors duration-200 tracking-wide block ${isActive ? "text-[#FFFFFF]" : "text-[#CBD5E1] group-hover:text-[#FFFFFF]"}`}>
                        {legal.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="text-center mt-10 pt-8 border-t border-white/10 flex justify-center w-full">
              <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-[1.8] max-w-6xl text-center">
                Disclaimer: The information provided on this website is for corporate marketing, business-to-business (B2B) partnership discussions, and educational purposes only. It should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment. Medinet formulations are prescription-only medicines, distributed exclusively via registered pharmaceutical supply chain networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
