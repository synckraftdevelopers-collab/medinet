import { PremiumFeatureIcon } from '../PremiumFeatureIcon';
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  MapPin, 
  Handshake, 
  Factory, 
  Building2, 
  CheckCircle,
  Briefcase,
  Globe2,
  ShieldCheck,
  Send
} from "lucide-react";

interface BusinessPartnersProps {
  showToast?: (message: string, type: "success" | "error") => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function BusinessPartners({ showToast }: BusinessPartnersProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    partnerType: "Distributor",
    email: "",
    phone: "",
    stateCity: "",
    productsInterested: "",
    message: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      if(showToast) showToast("Enquiry submitted successfully!", "success");
      setFormData({
        name: "",
        company: "",
        partnerType: "Distributor",
        email: "",
        phone: "",
        stateCity: "",
        productsInterested: "",
        message: ""
      });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1200);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20 bg-white">
      
      {/* Distribution Network */}
      <section className="bg-[#0B1F4D] py-20 lg:py-28 relative overflow-hidden">
        {/* Background Global Network Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
            alt="Global Distribution Network"
            fill
            className="object-cover opacity-10 mix-blend-luminosity"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#EC4899] opacity-20" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#EC4899] opacity-20" 
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.15] relative z-10 inline-block mb-6 drop-shadow-lg">
              <motion.span 
                animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 20px rgba(236,72,153,0.6)", "0px 0px 0px rgba(236,72,153,0)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] text-transparent bg-clip-text inline-block"
              >
                Distribution Network
              </motion.span>
            </h1>
            <h3 className="text-xl font-medium text-[#F9A8D4] mb-6 drop-shadow-sm">Delivering Healthcare Across Every Region</h3>
            <p className="mt-4 text-base sm:text-lg text-[rgba(255,255,255,0.85)] leading-relaxed relative z-10">
              Medinet Pharmaceutical Marketing Company is building a strong and reliable distribution network to ensure the timely availability of quality medicines across India. We collaborate with trusted distributors, stockists, wholesalers, and healthcare partners to deliver pharmaceutical products efficiently and consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Nationwide product availability",
              "Reliable and timely supply chain management",
              "Strong partnerships with distributors and stockists",
              "Efficient order fulfillment and logistics",
              "Customer-focused service and support"
            ].map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(236,72,153,0.25)] hover:border-[#EC4899]/50 hover:-translate-y-2 transition-all duration-300 group flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EC4899]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EC4899] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#EC4899] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-semibold text-white group-hover:text-[#F9A8D4] transition-colors duration-300 mt-2">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <motion.p 
               whileHover={{ scale: 1.05 }}
               className="text-lg font-bold text-white bg-gradient-to-r from-[#EC4899] to-[#BE185D] inline-block px-8 py-4 rounded-full border border-white/20 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all cursor-pointer"
             >
               Become a Distribution Partner and grow with a company committed to quality and trust.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-br from-background to-alt-bg border-b border-border relative overflow-hidden">
        {/* Background Handshake Image */}
        <div className="absolute right-0 top-0 w-[50%] h-full z-0 opacity-[0.03] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" alt="Business Partnership" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
          
          {/* Franchise Opportunities */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(37,99,235,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <Handshake className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">
                Franchise Opportunities
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#38BDF8] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Grow Your Business with Medinet</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#2563EB] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Medinet offers rewarding franchise opportunities for entrepreneurs and pharmaceutical professionals looking to establish or expand their presence in the healthcare industry.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#2563EB]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(37,99,235,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#2563EB] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] inline-block rounded-full"></span>
                  As a Medinet franchise partner, you benefit from:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Monopoly-based business opportunities*",
                    "High-quality pharmaceutical product portfolio",
                    "Competitive pricing",
                    "Promotional and marketing support",
                    "Timely product supply",
                    "Dedicated business assistance",
                    "Long-term growth partnership"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#2563EB]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#2563EB] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#2563EB] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#2563EB] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-xs text-body mb-4">*Subject to company policies and territory availability.</p>
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] font-bold not-italic">Join our expanding franchise network</span> and contribute to delivering reliable healthcare solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Manufacturing */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B1F4D] to-[#1E40AF] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(11,31,77,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <Factory className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">
                Third-Party Manufacturing
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Trusted Manufacturing Partnerships</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#0B1F4D] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Medinet collaborates with WHO-GMP-certified manufacturing partners to deliver pharmaceutical products that meet stringent quality standards. We also offer third-party manufacturing services for organizations seeking reliable production and private-label solutions.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#0B1F4D]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(11,31,77,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E40AF]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1F4D]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#0B1F4D] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] inline-block rounded-full"></span>
                  Our third-party manufacturing services include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Tablet manufacturing",
                    "Capsule manufacturing",
                    "Injectable formulations",
                    "Ointments and topical preparations",
                    "Product packaging and labeling",
                    "Private labeling",
                    "Customized manufacturing solutions"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(11,31,77,0.15)] hover:border-[#0B1F4D]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#0B1F4D] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#0B1F4D] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#0B1F4D] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F4D] to-[#1E40AF] font-bold not-italic">Our focus is on delivering quality</span>, consistency, and regulatory compliance in every product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Business */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-20">
            <div className="lg:w-1/3 lg:sticky lg:top-32 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EC4899] to-[#0B1F4D] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(236,72,153,0.3)] mb-8 relative group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl mix-blend-overlay"></div>
                <Building2 className="w-8 h-8 text-white relative z-10" />
              </div>
              <h2 className="text-4xl font-display font-[900] text-[#0B1F4D] mb-4 drop-shadow-sm">
                Institutional Business
              </h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] font-bold tracking-wide text-xl mb-6 inline-block drop-shadow-sm">Serving Healthcare Institutions with Excellence</h3>
              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#EC4899] to-transparent mb-8"></div>
              <p className="text-[#475569] leading-[1.8] text-lg font-medium">
                Medinet partners with hospitals, clinics, healthcare institutions, government organizations, and corporate healthcare providers to supply quality pharmaceutical products tailored to institutional requirements.
              </p>
            </div>
            
            <div className="lg:w-2/3 relative group">
              {/* Creative glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-[#EC4899]/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_40px_rgba(236,72,153,0.12)] overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B1F4D]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <p className="text-[#0B1F4D] font-bold mb-8 text-xl relative z-10 flex items-center gap-4">
                  <span className="w-10 h-[3px] bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] inline-block rounded-full"></span>
                  We offer:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {[
                    "Institutional supply programs",
                    "Bulk product procurement",
                    "Customized business solutions",
                    "Reliable product availability",
                    "Professional customer support",
                    "Long-term healthcare partnerships"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-[18px] bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-[#EC4899]/30 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#EC4899]/5 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#EC4899] transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-[#EC4899] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-[#334155] font-semibold leading-tight group-hover/item:text-[#EC4899] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-border relative z-10">
                  <p className="text-[#475569] leading-relaxed text-lg font-medium italic">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#0B1F4D] font-bold not-italic">Our goal is to support healthcare institutions</span> with dependable pharmaceutical solutions that contribute to improved patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Business Enquiry Form */}
      <section id="enquiry" className="py-20 lg:py-28 bg-[#0B1F4D] relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#EC4899] opacity-20" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#EC4899] opacity-15" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F9A8D4] text-sm font-bold tracking-wide mb-6 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"></span>
                Business Enquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-[900] text-white tracking-tight leading-tight mb-6 drop-shadow-md">
                Let's Build a <motion.span 
                  animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 20px rgba(236,72,153,0.6)", "0px 0px 0px rgba(236,72,153,0)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] text-transparent bg-clip-text inline-block"
                >Successful Partnership</motion.span>
              </h2>
              <p className="text-[rgba(255,255,255,0.85)] leading-relaxed text-lg mb-8">
                Whether you are a distributor, franchise partner, healthcare institution, or business organization, Medinet welcomes the opportunity to collaborate and grow together.
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(236,72,153,0.15)] hover:border-[#EC4899]/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-[3px] bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] inline-block rounded-full"></span>
                  Why Partner with Medinet?
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                  Choosing Medinet means partnering with a company that values quality, integrity, innovation, and long-term relationships. We are committed to supporting our partners through reliable products, ethical business practices, responsive customer service, and sustainable growth opportunities.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-bold text-[#F9A8D4]">
                    Together, let's advance healthcare with confidence—because at Medinet, it's <em className="text-white">"Reliable Care, Every Time."</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-[900] text-white mb-6 border-b border-white/10 pb-4">Business Enquiry Form</h3>
                  
                  {formSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Thank you! Your enquiry has been sent successfully.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Organization / Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => handleFieldChange("company", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-3">Business Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Distributor", 
                        "Stockist", 
                        "Franchise Partner", 
                        "Hospital / Healthcare Institution", 
                        "Third-Party Manufacturing", 
                        "Other"
                      ].map((type) => (
                        <label key={type} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.partnerType === type ? 'bg-[#EC4899]/20 border-[#EC4899]' : 'border-white/10 hover:bg-white/10'}`}>
                          <input 
                            type="radio" 
                            name="partnerType" 
                            value={type} 
                            checked={formData.partnerType === type}
                            onChange={(e) => handleFieldChange("partnerType", e.target.value)}
                            className="w-4 h-4 text-[#EC4899] focus:ring-[#EC4899] bg-transparent border-white/30"
                          />
                          <span className={`text-sm font-medium ${formData.partnerType === type ? 'text-white' : 'text-[rgba(255,255,255,0.7)]'}`}>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => handleFieldChange("phone", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">State / City</label>
                      <input 
                        type="text" 
                        required
                        value={formData.stateCity}
                        onChange={(e) => handleFieldChange("stateCity", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="Maharashtra, Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Products or Services of Interest</label>
                      <input 
                        type="text" 
                        required
                        value={formData.productsInterested}
                        onChange={(e) => handleFieldChange("productsInterested", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all"
                        placeholder="E.g., Tablets, PCD Franchise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[rgba(255,255,255,0.85)] mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange("message", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50 focus:border-[#EC4899] transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white font-[900] py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Submit Business Enquiry
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
