import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Map,
  Navigation
} from "lucide-react";

interface ContactProps {
  showToast?: (message: string, type: "success" | "error") => void;
  params?: Record<string, string>;
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

export default function Contact({ showToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    enquiryType: "General Enquiry",
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
        email: "",
        phone: "",
        subject: "",
        enquiryType: "General Enquiry",
        message: ""
      });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1200);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20 bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border py-20 lg:py-28 relative overflow-hidden">
        {/* Background Meeting Room Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
            alt="Meeting Room"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="utility-badge-blue mb-5 relative z-10 mx-auto">
              <span className="utility-dot"></span>
              Contact Us
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              Get in Touch with{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
              >
                Medinet
              </motion.span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              We're here to assist you with product enquiries, business partnerships, career opportunities, and general information. Our team is committed to providing prompt and professional support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-border relative overflow-hidden">
        {/* Background Corporate Office Image */}
        <div className="absolute right-0 top-0 w-[50%] h-full z-0 opacity-[0.03] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" alt="Corporate Office Building" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Corporate Office */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(236,72,153,0.15)" }}
              className="bg-white border border-indigo-50 hover:border-pink-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#BE185D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(236,72,153,0.25)] mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <Building2 className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-[#2563EB] transition-colors duration-300">Corporate Office</h3>
              <p className="text-[#475569] font-medium mb-4">Medinet Pharmaceutical Marketing Company</p>
              <div className="flex items-start gap-3 mt-4 text-[#475569]">
                <MapPin className="w-5 h-5 text-[#BE185D] shrink-0 mt-0.5 group-hover:animate-bounce" />
                <a href="https://maps.google.com/?q=Medinet+Pharmaceutical+Marketing+Company,+Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors hover:underline decoration-[#2563EB]/30 underline-offset-4">
                  123 Healthcare Avenue, Mumbai, Maharashtra 400001
                </a>
              </div>
            </motion.div>

            {/* Regional Offices */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(236,72,153,0.15)" }}
              className="bg-white border border-indigo-50 hover:border-pink-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#BE185D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#2563EB,#BE185D,#2563EB)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(37,99,235,0.25)] mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-[#2563EB] transition-colors duration-300">Regional Offices</h3>
              <p className="text-[#BE185D] font-medium mb-6">Our Growing Presence</p>
              <p className="text-[#475569] text-sm mb-4">Medinet is continuously expanding its reach to serve healthcare professionals and business partners across multiple regions.</p>
              
              <div className="space-y-4">
                {["Coimbatore", "Dharmapuri", "Bengaluru"].map((city, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[#475569] group/item hover:bg-pink-50/50 p-2 -mx-2 rounded-lg transition-colors">
                    <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5 group-hover/item:text-[#BE185D] transition-colors" />
                    <div className="text-sm">
                      <strong className="block text-primary">{city}</strong>
                      <span className="italic text-muted block mt-1">Regional Branch, {city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              variants={fadeUp} 
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(236,72,153,0.15)" }}
              className="bg-white border border-indigo-50 hover:border-pink-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#BE185D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(236,72,153,0.25)] mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-[#2563EB] transition-colors duration-300">Contact Details</h3>
              <p className="text-[#BE185D] font-medium mb-6">We're Just a Call or Email Away</p>
              
              <div className="space-y-5">
                <div className="group/item hover:bg-pink-50/50 p-2 -mx-2 rounded-lg transition-colors">
                  <h4 className="text-sm font-bold text-primary mb-2">General Enquiries</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Phone className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> +91 98765 43210</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1"><MessageSquare className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> +91 98765 43211 (WhatsApp)</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1"><Mail className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> contact@medinetpharma.com</p>
                </div>
                <div className="group/item hover:bg-pink-50/50 p-2 -mx-2 rounded-lg transition-colors">
                  <h4 className="text-sm font-bold text-primary mb-2">Sales & Marketing</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Mail className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> sales@medinetpharma.com</p>
                </div>
                <div className="group/item hover:bg-pink-50/50 p-2 -mx-2 rounded-lg transition-colors">
                  <h4 className="text-sm font-bold text-primary mb-2">Business Partnerships & Careers</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Mail className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> business@medinetpharma.com</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1"><Mail className="w-4 h-4 text-[#2563EB] group-hover/item:text-[#BE185D] transition-colors" /> careers@medinetpharma.com</p>
                </div>
                <div className="pt-4 border-t border-indigo-50 group-hover:border-pink-100 transition-colors">
                  <h4 className="text-sm font-bold text-primary mb-2">Working Hours</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Clock className="w-4 h-4 text-[#2563EB]" /> Monday – Saturday</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1 pl-6">9:00 AM – 6:00 PM (IST)</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-20 lg:py-28 bg-background relative overflow-hidden">
        {/* Background Customer Support Image */}
        <div className="absolute left-0 bottom-0 w-[50%] h-[75%] z-0 opacity-[0.03] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1600&auto=format&fit=crop" alt="Customer Support" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="utility-badge-blue mb-5">
                <span className="utility-dot"></span>
                Enquiry Form
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight leading-tight mb-6">
                Send Us a <motion.span 
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#EC4899,#F472B6,#BE185D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]"
                >
                  Message
                </motion.span>
              </h2>
              <p className="text-[#475569] leading-relaxed text-lg mb-8">
                Have a question or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
              </p>
              
              <div className="relative group mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2563EB]/40 to-[#38BDF8]/40 blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#38BDF8] drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-[#475569] leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Whether you're a healthcare professional, distributor, business partner, job seeker, or customer, we'd love to hear from you. Reach out to us for any enquiries, and we'll be happy to assist you.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-bold text-[#2563EB] text-lg group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-all duration-300">
                      Reliable Care, <span className="bg-gradient-to-r from-pink-500 to-rose-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">Every Time.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Note */}
              <div className="bg-alt-bg p-6 rounded-2xl border border-border flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#2563EB] shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Legal & Privacy Policy</h4>
                  <p className="text-sm text-[#475569] mt-1">Your Privacy Matters. We ensure that your data is securely handled.</p>
                </div>
              </div>
            </div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }} 
              className="lg:col-span-7 relative group"
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-[#2563EB]/40 to-[#38BDF8]/40 blur-2xl rounded-[3rem]"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(11,31,77,0.06)] border border-border relative z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-4">Enquiry Form</h3>
                  
                  {formSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Thank you! Your enquiry has been sent successfully.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                        className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Company / Organization (Optional)</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleFieldChange("company", e.target.value)}
                        className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => handleFieldChange("phone", e.target.value)}
                        className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => handleFieldChange("subject", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">Enquiry Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Product Enquiry", 
                        "Business Partnership", 
                        "Career", 
                        "Customer Support", 
                        "General Enquiry"
                      ].map((type) => (
                        <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-border cursor-pointer hover:bg-alt-bg transition-colors">
                          <input 
                            type="radio" 
                            name="enquiryType" 
                            value={type} 
                            checked={formData.enquiryType === type}
                            onChange={(e) => handleFieldChange("enquiryType", e.target.value)}
                            className="w-4 h-4 text-[#2563EB] focus:ring-[#2563EB]"
                          />
                          <span className="text-sm font-medium text-[#475569]">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleFieldChange("message", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit" 
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" } }}
                    className="w-full bg-[linear-gradient(to_right,#1E3A8A,#EC4899,#1E3A8A)] bg-[length:200%_auto] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.4)] transition-shadow duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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
                        Submit Enquiry
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locate Us */}
      <section className="py-20 bg-slate-50 border-t border-border relative overflow-hidden">
        {/* Background Reception Image */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop" alt="Reception Area" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              boxShadow: ["0 10px 25px -5px rgba(30,58,138,0.4)", "0 15px 35px -5px rgba(236,72,153,0.5)", "0 10px 25px -5px rgba(30,58,138,0.4)"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-2xl bg-[linear-gradient(to_right,#1E3A8A,#EC4899,#1E3A8A)] bg-[length:200%_auto] flex items-center justify-center mx-auto mb-6 relative group cursor-pointer"
          >
            <Map className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-4">
            Locate Us
          </h2>
          <p className="text-[#475569] leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            Visit Our Office. Find us easily using the interactive map below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto text-left mb-12">
             {/* Card 1 (Navy Blue) */}
             <motion.div 
               whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(30,58,138,0.4)" }}
               className="bg-white p-6 rounded-2xl border border-border hover:border-[#1E3A8A]/30 flex items-start gap-4 group transition-colors duration-300 relative overflow-hidden cursor-default"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:bg-[#1E3A8A] transition-colors duration-300 z-10 border border-blue-100 group-hover:border-transparent">
                  <MapPin className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-primary group-hover:text-[#1E3A8A] transition-colors duration-300">Google Maps integration</h4>
                  <p className="text-sm text-[#475569] mt-1">Easily find us on Google Maps</p>
                </div>
             </motion.div>

             {/* Card 2 (Pink) */}
             <motion.div 
               whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(236,72,153,0.4)" }}
               className="bg-white p-6 rounded-2xl border border-border hover:border-[#EC4899]/30 flex items-start gap-4 group transition-colors duration-300 relative overflow-hidden cursor-default"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-pink-50/50 flex items-center justify-center shrink-0 group-hover:bg-[#EC4899] transition-colors duration-300 z-10 border border-pink-100 group-hover:border-transparent">
                  <Navigation className="w-6 h-6 text-[#EC4899] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-primary group-hover:text-[#EC4899] transition-colors duration-300">Directions to our Corporate Office</h4>
                  <p className="text-sm text-[#475569] mt-1">Get precise navigation to our HQ.</p>
                </div>
             </motion.div>

             {/* Card 3 (Navy Blue) */}
             <motion.div 
               whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(30,58,138,0.4)" }}
               className="bg-white p-6 rounded-2xl border border-border hover:border-[#1E3A8A]/30 flex items-start gap-4 group transition-colors duration-300 relative overflow-hidden cursor-default"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:bg-[#1E3A8A] transition-colors duration-300 z-10 border border-blue-100 group-hover:border-transparent">
                  <Building2 className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-primary group-hover:text-[#1E3A8A] transition-colors duration-300">Parking & Accessibility</h4>
                  <p className="text-sm text-[#475569] mt-1">Visitor parking available on-site.</p>
                </div>
             </motion.div>
          </div>
          
          <div className="w-full h-[400px] bg-background rounded-[2rem] border border-border max-w-5xl mx-auto relative overflow-hidden shadow-sm group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.16905545233!2d72.82574044999999!3d19.10657905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714151234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
