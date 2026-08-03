import React, { useState } from "react";
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
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#1D4ED8] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A192F] tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Distribution Network</span>
            </h1>
            <h3 className="text-xl font-medium text-[#2563EB] mb-6">Delivering Healthcare Across Every Region</h3>
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
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
              <motion.div variants={fadeUp} key={idx} className="bg-white/80 backdrop-blur-sm border border-[#2563EB]/10 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <p className="font-semibold text-[#0A192F] mt-2">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-lg font-bold text-[#0A192F] bg-gradient-to-r from-[#2563EB]/10 to-[#38BDF8]/10 inline-block px-8 py-4 rounded-full border border-[#2563EB]/20">
               Become a Distribution Partner and grow with a company committed to quality and trust.
             </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Franchise Opportunities */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Franchise Opportunities</h2>
              <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-4">Grow Your Business with Medinet</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Medinet offers rewarding franchise opportunities for entrepreneurs and pharmaceutical professionals looking to establish or expand their presence in the healthcare industry.
              </p>
            </div>
            <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">As a Medinet franchise partner, you benefit from:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Monopoly-based business opportunities*",
                  "High-quality pharmaceutical product portfolio",
                  "Competitive pricing",
                  "Promotional and marketing support",
                  "Timely product supply",
                  "Dedicated business assistance",
                  "Long-term growth partnership"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-4">*Subject to company policies and territory availability.</p>
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Join our expanding franchise network and contribute to delivering reliable healthcare solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Manufacturing */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Third-Party Manufacturing</h2>
              <h3 className="text-teal-600 font-medium tracking-wide text-lg mb-4">Trusted Manufacturing Partnerships</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Medinet collaborates with WHO-GMP-certified manufacturing partners to deliver pharmaceutical products that meet stringent quality standards. We also offer third-party manufacturing services for organizations seeking reliable production and private-label solutions.
              </p>
            </div>
            <div className="lg:w-2/3 bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100/50">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">Our third-party manufacturing services include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Tablet manufacturing",
                  "Capsule manufacturing",
                  "Injectable formulations",
                  "Ointments and topical preparations",
                  "Product packaging and labeling",
                  "Private labeling",
                  "Customized manufacturing solutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-teal-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Our focus is on delivering quality, consistency, and regulatory compliance in every product.
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Business */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Institutional Business</h2>
              <h3 className="text-amber-600 font-medium tracking-wide text-lg mb-4">Serving Healthcare Institutions with Excellence</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Medinet partners with hospitals, clinics, healthcare institutions, government organizations, and corporate healthcare providers to supply quality pharmaceutical products tailored to institutional requirements.
              </p>
            </div>
            <div className="lg:w-2/3 bg-orange-50/50 rounded-3xl p-8 md:p-10 border border-orange-100/50">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">We offer:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Institutional supply programs",
                  "Bulk product procurement",
                  "Customized business solutions",
                  "Reliable product availability",
                  "Professional customer support",
                  "Long-term healthcare partnerships"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-orange-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Our goal is to support healthcare institutions with dependable pharmaceutical solutions that contribute to improved patient care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Business Enquiry Form */}
      <section id="enquiry" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="utility-badge-blue mb-5">
                <span className="utility-dot"></span>
                Business Enquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A192F] tracking-tight leading-tight mb-6">
                Let's Build a <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Successful Partnership</span>
              </h2>
              <p className="text-[#475569] leading-relaxed text-lg mb-8">
                Whether you are a distributor, franchise partner, healthcare institution, or business organization, Medinet welcomes the opportunity to collaborate and grow together.
              </p>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4">Why Partner with Medinet?</h3>
                <p className="text-[#475569] leading-relaxed">
                  Choosing Medinet means partnering with a company that values quality, integrity, innovation, and long-term relationships. We are committed to supporting our partners through reliable products, ethical business practices, responsive customer service, and sustainable growth opportunities.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="font-bold text-[#2563EB]">
                    Together, let's advance healthcare with confidence—because at Medinet, it's <em>"Reliable Care, Every Time."</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(11,31,77,0.06)] border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-6 border-b border-slate-100 pb-4">Business Enquiry Form</h3>
                  
                  {formSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Thank you! Your enquiry has been sent successfully.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Organization / Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => handleFieldChange("company", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A192F] mb-3">Business Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Distributor", 
                        "Stockist", 
                        "Franchise Partner", 
                        "Hospital / Healthcare Institution", 
                        "Third-Party Manufacturing", 
                        "Other"
                      ].map((type) => (
                        <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                          <input 
                            type="radio" 
                            name="partnerType" 
                            value={type} 
                            checked={formData.partnerType === type}
                            onChange={(e) => handleFieldChange("partnerType", e.target.value)}
                            className="w-4 h-4 text-[#2563EB] focus:ring-[#2563EB]"
                          />
                          <span className="text-sm font-medium text-[#475569]">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => handleFieldChange("phone", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">State / City</label>
                      <input 
                        type="text" 
                        required
                        value={formData.stateCity}
                        onChange={(e) => handleFieldChange("stateCity", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="Maharashtra, Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Products or Services of Interest</label>
                      <input 
                        type="text" 
                        required
                        value={formData.productsInterested}
                        onChange={(e) => handleFieldChange("productsInterested", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="E.g., Tablets, PCD Franchise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A192F] mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange("message", e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1e40af] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
