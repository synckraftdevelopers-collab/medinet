import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  MonitorSmartphone,
  Star,
  Users,
  Award,
  Upload,
  Send,
  CheckCircle,
  FileText
} from "lucide-react";

interface CareersProps {
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

export default function Careers({ showToast }: CareersProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    experience: "",
    message: "" // mapped to cover letter visually if they want to type, or we can use file upload
  });

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [uploadedCoverLetter, setUploadedCoverLetter] = useState<{ name: string; size: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "resume" | "cover") => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        if(showToast) showToast("File size exceeds maximum limit of 5MB.", "error");
        return;
      }
      const fileData = {
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      };
      if (type === "resume") {
        setUploadedFile(fileData);
      } else {
        setUploadedCoverLetter(fileData);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      if (showToast) showToast("Please upload your resume.", "error");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      if (showToast) showToast("Application submitted successfully!", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        location: "",
        experience: "",
        message: ""
      });
      setUploadedFile(null);
      setUploadedCoverLetter(null);
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-20 bg-white">
      
      {/* Why Join Us */}
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-5" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="utility-badge-blue mb-5 relative z-10 mx-auto">
              <span className="utility-dot"></span>
              Why Join Us
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Build a Career That Makes a Difference</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              At Medinet Pharmaceutical Marketing Company, we believe our people are our greatest strength. We are committed to creating a workplace that encourages innovation, continuous learning, teamwork, and professional growth. If you're passionate about improving healthcare and making a meaningful impact, Medinet is the place to build your career.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {[
              "Meaningful career in the pharmaceutical industry",
              "Professional growth and learning opportunities",
              "Ethical and transparent work culture",
              "Performance-driven environment",
              "Supportive leadership and teamwork",
              "Opportunity to contribute to better patient care",
              "Equal opportunity employer"
            ].map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-[#475569] font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at Medinet & New Age Workplace */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Life at Medinet */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Life at Medinet</h2>
              <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-4">Where Passion Meets Purpose</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Life at Medinet is built on collaboration, respect, and a shared commitment to excellence. We foster a positive work environment where every employee is encouraged to innovate, grow, and contribute to our mission of delivering quality healthcare solutions.
              </p>
            </div>
            <div className="lg:w-2/3 bg-alt-bg rounded-3xl p-8 md:p-10 border border-border">
              <p className="text-primary font-semibold mb-6 text-lg">Our workplace promotes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Teamwork and collaboration",
                  "Continuous learning and skill development",
                  "Employee recognition and appreciation",
                  "Open communication and mutual respect",
                  "Work-life balance",
                  "A culture of integrity and accountability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[#475569] leading-relaxed text-lg font-bold text-center">
                  Together, we work towards one goal—Reliable Care, Every Time.
                </p>
              </div>
            </div>
          </div>

          {/* New Age Workplace */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <MonitorSmartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">New Age Workplace</h2>
              <h3 className="text-teal-600 font-medium tracking-wide text-lg mb-4">Empowering Every Employee</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet Pharmaceuticals, we believe that a progressive workplace inspires innovation, collaboration, and growth. Our New Age Workplace is built on trust, technology, transparency, and a people-first culture that empowers every employee to achieve their full potential.
              </p>
            </div>
            <div className="lg:w-2/3 bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">What Makes Our Workplace Different?</p>
              <div className="space-y-4">
                {[
                  { title: "Employee-Centric Culture", desc: "We value every individual and foster a supportive, respectful, and inclusive work environment." },
                  { title: "Technology-Driven Operations", desc: "Digital HR processes, streamlined workflows, and modern tools enhance productivity and efficiency." },
                  { title: "Continuous Learning & Development", desc: "Regular training, mentorship, and career advancement opportunities help employees grow professionally." },
                  { title: "Open Communication", desc: "Transparent leadership and an open-door policy encourage collaboration and innovation." },
                  { title: "Performance Recognition", desc: "We celebrate achievements and reward excellence through recognition and growth opportunities." },
                  { title: "Work-Life Balance", desc: "We promote employee well-being with flexible, supportive practices that encourage a healthy work environment." },
                  { title: "Innovation & Collaboration", desc: "Employees are encouraged to share ideas, solve challenges creatively, and contribute to the company's success." },
                  { title: "Ethical & Purpose-Driven Workplace", desc: "Guided by integrity, patient care, quality, and affordability, every employee contributes to improving healthcare outcomes." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-primary font-bold block mb-1">{item.title}</span>
                      <span className="text-[#475569] text-sm leading-relaxed block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Promise</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-8"></div>
          <p className="text-[#334155] leading-relaxed text-lg sm:text-xl font-medium">
            At Medinet Pharmaceuticals, we don't just offer jobs—we build careers in a workplace where talent is nurtured, ideas are valued, and every individual has the opportunity to make a meaningful impact on patients' lives and the future of healthcare.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-4">
              Current Openings
            </h2>
            <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-6">Explore Career Opportunities</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              We are always looking for talented and motivated individuals to join our growing team. Current opportunities may include:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "Medical Sales Representative (MSR)",
              "Area Business Manager (ABM)",
              "Regional Sales Manager (RSM)",
              "Product Manager",
              "Human Resources",
              "Marketing Executive",
              "Administration",
              "Finance & Accounts",
              "Regulatory Affairs",
              "Quality Assurance"
            ].map((role, idx) => (
              <span key={idx} className="bg-alt-bg border border-border text-primary font-medium px-5 py-2.5 rounded-full hover:bg-[#2563EB]/5 hover:border-[#2563EB]/30 transition-colors cursor-default">
                {role}
              </span>
            ))}
          </div>

          <div className="bg-background rounded-3xl p-8 max-w-4xl mx-auto border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-sm">
            <div>
              <h4 className="font-bold text-primary text-xl mb-2">Can't find a suitable role?</h4>
              <p className="text-[#475569]">Submit your resume, and we'll contact you when a relevant opportunity becomes available.</p>
            </div>
            <a href="#apply" className="shrink-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all">
              View Current Openings
            </a>
          </div>
        </div>
      </section>

      {/* Apply Now Form */}
      <section id="apply" className="py-20 lg:py-28 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight leading-tight mb-4">
              Apply <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Now</span>
            </h2>
            <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-6">Take the Next Step in Your Career</h3>
            <p className="text-[#475569] leading-relaxed text-lg max-w-2xl mx-auto">
              Ready to build a rewarding career with Medinet? We welcome passionate individuals who are eager to contribute to the healthcare industry and grow with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(11,31,77,0.06)] border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {formSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3 mb-6">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Application submitted successfully! Our HR team will reach out to you.</span>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Position Applying For</label>
                  <select 
                    required
                    value={formData.position}
                    onChange={(e) => handleFieldChange("position", e.target.value)}
                    className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all appearance-none"
                  >
                    <option value="" disabled>Select Position</option>
                    <option value="Medical Sales Representative (MSR)">Medical Sales Representative (MSR)</option>
                    <option value="Area Business Manager (ABM)">Area Business Manager (ABM)</option>
                    <option value="Regional Sales Manager (RSM)">Regional Sales Manager (RSM)</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Marketing Executive">Marketing Executive</option>
                    <option value="Administration">Administration</option>
                    <option value="Finance & Accounts">Finance & Accounts</option>
                    <option value="Regulatory Affairs">Regulatory Affairs</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Current Location</label>
                  <input 
                    type="text" 
                    required
                    value={formData.location}
                    onChange={(e) => handleFieldChange("location", e.target.value)}
                    className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Years of Experience</label>
                  <input 
                    type="text" 
                    required
                    value={formData.experience}
                    onChange={(e) => handleFieldChange("experience", e.target.value)}
                    className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB] transition-all"
                    placeholder="e.g. 5 Years"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Upload Resume (PDF/DOC)</label>
                  <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, "resume")} />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-between bg-alt-bg border border-border border-dashed rounded-xl px-4 py-3 cursor-pointer hover:bg-background transition-colors"
                  >
                    <span className="text-[#475569] text-sm truncate">
                      {uploadedFile ? uploadedFile.name : "Choose File..."}
                    </span>
                    <Upload className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  {uploadedFile && <p className="text-xs text-[#2563EB] mt-2 font-medium">Selected: {uploadedFile.size}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Cover Letter (Optional)</label>
                  <input type="file" ref={coverLetterInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, "cover")} />
                  <div 
                    onClick={() => coverLetterInputRef.current?.click()}
                    className="w-full flex items-center justify-between bg-alt-bg border border-border border-dashed rounded-xl px-4 py-3 cursor-pointer hover:bg-background transition-colors"
                  >
                    <span className="text-[#475569] text-sm truncate">
                      {uploadedCoverLetter ? uploadedCoverLetter.name : "Choose File..."}
                    </span>
                    <FileText className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  {uploadedCoverLetter && <p className="text-xs text-[#2563EB] mt-2 font-medium">Selected: {uploadedCoverLetter.size}</p>}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full mt-6 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1e40af] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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
                    Apply Now
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Join the Medinet Family */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-8">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-6">
            Join the Medinet Family
          </h2>
          <p className="text-[#334155] leading-relaxed text-lg sm:text-xl font-medium mb-8">
            At Medinet Pharmaceutical Marketing Company, we're more than a workplace—we're a team driven by a shared purpose: improving healthcare through quality, innovation, and trust. If you're ready to make a difference, we'd love to hear from you.
          </p>
          <p className="text-[#2563EB] font-bold text-xl">
            Start your journey with Medinet today — because together, we deliver "Reliable Care, Every Time."
          </p>
        </div>
      </section>

    </motion.div>
  );
}
