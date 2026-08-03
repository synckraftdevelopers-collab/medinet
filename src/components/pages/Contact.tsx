import React, { useState } from "react";
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
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#1D4ED8] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="utility-badge-blue mb-5 relative z-10 mx-auto">
              <span className="utility-dot"></span>
              Contact Us
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A192F] tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Get in Touch with Medinet</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              We're here to assist you with product enquiries, business partnerships, career opportunities, and general information. Our team is committed to providing prompt and professional support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Corporate Office */}
            <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Corporate Office</h3>
              <p className="text-[#475569] font-medium mb-4">Medinet Pharmaceutical Marketing Company</p>
              <div className="flex items-start gap-3 mt-4 text-[#475569]">
                <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>(Add your complete corporate office address here.)</span>
              </div>
            </motion.div>

            {/* Regional Offices */}
            <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Regional Offices</h3>
              <p className="text-[#475569] font-medium mb-6">Our Growing Presence</p>
              <p className="text-[#475569] text-sm mb-4">Medinet is continuously expanding its reach to serve healthcare professionals and business partners across multiple regions.</p>
              
              <div className="space-y-4">
                {["Coimbatore", "Dharmapuri", "Bengaluru"].map((city, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[#475569]">
                    <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#0A192F]">{city}</strong>
                      <span className="italic text-slate-400 block mt-1">(Add address, contact & email)</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Contact Details</h3>
              <p className="text-[#475569] font-medium mb-6">We're Just a Call or Email Away</p>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-[#0A192F] mb-2">General Enquiries</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Phone className="w-4 h-4 text-[#2563EB]" /> +91 XXXXX XXXXX</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1"><Mail className="w-4 h-4 text-[#2563EB]" /> info@medinetpharma.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A192F] mb-2">Sales & Marketing</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Mail className="w-4 h-4 text-[#2563EB]" /> sales@medinetpharma.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A192F] mb-2">Business Partnerships & Careers</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Mail className="w-4 h-4 text-[#2563EB]" /> business@medinetpharma.com</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1"><Mail className="w-4 h-4 text-[#2563EB]" /> careers@medinetpharma.com</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A192F] mb-2">Working Hours</h4>
                  <p className="flex items-center gap-2 text-[#475569] text-sm"><Clock className="w-4 h-4 text-[#2563EB]" /> Monday – Saturday</p>
                  <p className="flex items-center gap-2 text-[#475569] text-sm mt-1 pl-6">9:00 AM – 6:00 PM (IST)</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="utility-badge-blue mb-5">
                <span className="utility-dot"></span>
                Enquiry Form
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A192F] tracking-tight leading-tight mb-6">
                Send Us a <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Message</span>
              </h2>
              <p className="text-[#475569] leading-relaxed text-lg mb-8">
                Have a question or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
              </p>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-6">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4">Let's Connect</h3>
                <p className="text-[#475569] leading-relaxed">
                  Whether you're a healthcare professional, distributor, business partner, job seeker, or customer, we'd love to hear from you. Reach out to us for any enquiries, and we'll be happy to assist you.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="font-bold text-[#2563EB] text-lg">
                    Reliable Care, Every Time.
                  </p>
                </div>
              </div>

              {/* Legal Note */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#2563EB] shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0A192F]">Legal & Privacy Policy</h4>
                  <p className="text-sm text-[#475569] mt-1">Your Privacy Matters. We ensure that your data is securely handled.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(11,31,77,0.06)] border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-6 border-b border-slate-100 pb-4">Enquiry Form</h3>
                  
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
                      <label className="block text-sm font-semibold text-[#0A192F] mb-2">Company / Organization (Optional)</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleFieldChange("company", e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                        placeholder="Your Company"
                      />
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
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A192F] mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => handleFieldChange("subject", e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A192F] mb-3">Enquiry Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Product Enquiry", 
                        "Business Partnership", 
                        "Career", 
                        "Customer Support", 
                        "General Enquiry"
                      ].map((type) => (
                        <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
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
                        Submit Enquiry
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

      {/* Locate Us */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-6">
            <Map className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0A192F] tracking-tight mb-4">
            Locate Us
          </h2>
          <p className="text-[#475569] leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            Visit Our Office. Find us easily using the interactive map below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto text-left mb-12">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0A192F]">Google Maps integration</h4>
                  <p className="text-sm text-[#475569] mt-1">Easily find us on Google Maps</p>
                </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <Navigation className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0A192F]">Directions to our Corporate Office</h4>
                  <p className="text-sm text-[#475569] mt-1">Get precise navigation to our HQ.</p>
                </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <Building2 className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0A192F]">Parking & Accessibility</h4>
                  <p className="text-sm text-[#475569] mt-1">Visitor parking available on-site.</p>
                </div>
             </div>
          </div>
          
          <div className="w-full h-80 bg-slate-100 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 max-w-5xl mx-auto relative overflow-hidden group shadow-inner">
             <Map className="w-16 h-16 mb-4 opacity-50" />
             <p className="font-medium">Interactive Map Placeholder</p>
             <p className="text-sm">(Map integration goes here)</p>
             <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
             </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
