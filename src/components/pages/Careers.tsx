import { PremiumFeatureIcon } from '../PremiumFeatureIcon';
import React, { useState, useRef } from "react";
import Image from "next/image";
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
  FileText,
  ShieldCheck,
  Globe,
  TrendingUp,
  Sparkles
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

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const paragraphContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.6 }
  }
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.8 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
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
        if (showToast) showToast("File size exceeds maximum limit of 5MB.", "error");
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
        {/* Background Team Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Team Collaboration"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-secondary opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center">
              <span className="utility-badge-blue mb-5 relative z-10">
                <span className="utility-dot"></span>
                Why Join Us
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-wide leading-[1.15] relative z-10 inline-block mb-6 cursor-default"
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ textShadow: "0px 0px 15px rgba(37,99,235,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {["Build", "a"].map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                  </motion.span>
                ))}
                
                <motion.span 
                  variants={wordVariants} 
                  className="inline-block mr-[0.25em] bg-gradient-to-r from-[#1E3A8A] to-pink-500 text-transparent bg-clip-text relative"
                >
                  Career
                  <Sparkles className="absolute -top-6 -right-5 w-6 h-6 text-pink-400 opacity-60 animate-pulse" />
                </motion.span>
                
                {["That", "Makes", "a"].map((word, i) => (
                  <motion.span key={i + 2} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                  </motion.span>
                ))}
                
                <motion.span 
                  variants={wordVariants} 
                  className="inline-block bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text relative pr-2"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Difference
                  <motion.div 
                    className="absolute -right-6 -top-2 text-pink-500"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <HeartPulse className="w-8 h-8" />
                  </motion.div>
                </motion.span>
              </motion.div>
            </motion.h1>
            
            <motion.div 
              className="mt-4 text-base sm:text-lg text-[#334155] opacity-90 hover:opacity-100 transition-opacity duration-300 leading-[1.8] relative z-10 cursor-default"
              variants={paragraphContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "At Medinet Pharmaceutical Marketing Company, we believe our people are our greatest strength.",
                "We are committed to creating a workplace that encourages innovation, continuous learning, teamwork, and professional growth.",
                "If you're passionate about improving healthcare and making a meaningful impact, Medinet is the place to build your career."
              ].map((sentence, idx) => (
                <motion.span key={idx} variants={lineVariants} className="inline-block mr-1">
                  {sentence}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div 
            variants={cardContainerVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left"
          >
            {[
              {
                text: <>
                  <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">Meaningful</span> career in the pharmaceutical industry
                </>,
                icon: Briefcase
              },
              {
                text: <>
                  Professional <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">growth</span> and <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">learning</span> opportunities
                </>,
                icon: TrendingUp
              },
              {
                text: <>
                  <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">Ethical</span> and transparent work culture
                </>,
                icon: ShieldCheck
              },
              {
                text: <>
                  <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">Performance-driven</span> environment
                </>,
                icon: Star
              },
              {
                text: <>
                  Supportive <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">leadership</span> and teamwork
                </>,
                icon: Users
              },
              {
                text: <>
                  Opportunity to contribute to better <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">patient care</span>
                </>,
                icon: HeartPulse
              },
              {
                text: <>
                  <span className="text-[#2563EB] font-semibold group-hover:text-pink-600 transition-colors">Equal opportunity</span> employer
                </>,
                icon: Globe
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
              <motion.div 
                variants={cardVariants} 
                key={idx} 
                className="relative bg-white p-5 rounded-2xl border border-border flex items-start gap-4 group hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(236,72,153,0.15)] transition-all duration-300 overflow-hidden z-10"
              >
                {/* Subtle animated pink gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-r from-pink-500 to-[#1E3A8A] z-[-1]" />
                
                <div className="shrink-0 relative">
                  {/* Pink Glow Behind Icon */}
                  <div className="absolute inset-0 bg-pink-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full scale-150" />
                  
                  {/* Navy Blue Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center relative z-10 transform group-hover:rotate-[5deg] group-hover:scale-110 transition-all duration-500 shadow-md group-hover:shadow-pink-500/30">
                    <Icon className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="mt-[2px] relative z-10">
                  <span className="text-[#475569] group-hover:text-[#0F172A] font-medium leading-relaxed transition-colors duration-300">{item.text}</span>
                </div>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* Life at Medinet & New Age Workplace */}
      <section className="py-20 bg-white border-b border-border relative overflow-hidden">
        {/* Background Employees Working Image */}
        <div className="absolute right-0 top-0 w-[50%] h-full z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop" alt="Employees Working" fill className="object-cover" />
        </div>
        {/* Background Modern Office Image */}
        <div className="absolute left-0 bottom-0 w-[50%] h-[50%] z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" alt="Modern Office" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">

          {/* Life at Medinet */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={cardContainerVariants} 
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            <motion.div variants={fadeUp} className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center shrink-0 shadow-lg mb-6 relative group cursor-default"
                animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 10px 15px -3px rgba(0,0,0,0.1)", "0px 10px 25px -3px rgba(236,72,153,0.3)", "0px 10px 15px -3px rgba(0,0,0,0.1)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-pink-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
                <HeartPulse className="w-8 h-8 text-white group-hover:text-pink-200 transition-colors relative z-10" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Life at Medinet</h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#1E3A8A] font-semibold tracking-wide text-lg mb-4">Where Passion Meets Purpose</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-[#1E3A8A] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Life at Medinet is built on collaboration, respect, and a shared commitment to excellence. We foster a positive work environment where every employee is encouraged to innovate, grow, and contribute to our mission of delivering quality healthcare solutions.
              </p>
            </motion.div>
            <div className="lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <p className="text-primary font-bold mb-8 text-xl">Our workplace promotes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Teamwork and collaboration",
                  "Continuous learning and skill development",
                  "Employee recognition and appreciation",
                  "Open communication and mutual respect",
                  "Work-life balance",
                  "A culture of integrity and accountability"
                ].map((item, idx) => (
                  <motion.div 
                    variants={cardVariants}
                    key={idx} 
                    className="group flex items-center gap-4 bg-alt-bg p-4 rounded-xl border border-border hover:bg-white hover:border-pink-200 hover:shadow-[0_8px_25px_rgba(236,72,153,0.12)] transition-all duration-300"
                  >
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors" />
                      </div>
                    </div>
                    <span className="text-[#475569] group-hover:text-[#0F172A] font-medium transition-colors duration-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-[#0F172A] leading-relaxed text-lg font-bold text-center">
                  Together, we work towards one goal—<span className="text-pink-600">Reliable Care, Every Time.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* New Age Workplace */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={cardContainerVariants} 
            className="flex flex-col lg:flex-row-reverse gap-12 items-start mt-24"
          >
            <motion.div variants={fadeUp} className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center shrink-0 shadow-lg mb-6 relative group cursor-default"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-pink-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
                <MonitorSmartphone className="w-8 h-8 text-white group-hover:text-pink-200 transition-colors relative z-10" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">New Age Workplace</h2>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#1E3A8A] font-semibold tracking-wide text-lg mb-4">Empowering Every Employee</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-[#1E3A8A] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet Pharmaceuticals, we believe that a progressive workplace inspires innovation, collaboration, and growth. Our New Age Workplace is built on trust, technology, transparency, and a people-first culture that empowers every employee to achieve their full potential.
              </p>
            </motion.div>
            <div className="lg:w-2/3 bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <p className="text-primary font-bold mb-8 text-xl">What Makes Our Workplace Different?</p>
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
                  <motion.div 
                    variants={cardVariants}
                    key={idx} 
                    className="group flex items-start gap-5 bg-alt-bg p-5 rounded-2xl border border-border hover:bg-white hover:border-pink-200 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative shrink-0 mt-1">
                      <div className="absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-300">
                        <Star className="w-6 h-6 text-white group-hover:text-pink-200 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[#0F172A] font-bold block mb-1.5 group-hover:text-pink-600 transition-colors">{item.title}</span>
                      <span className="text-[#475569] text-sm leading-relaxed block">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 right-1/4 w-[40%] h-[40%] rounded-full blur-[150px] bg-pink-500 opacity-5" />
          <div className="absolute bottom-0 left-1/4 w-[40%] h-[40%] rounded-full blur-[150px] bg-[#1E3A8A] opacity-10" />
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardContainerVariants}
        >
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-[#1E3A8A] to-pink-500 text-transparent bg-clip-text">Promise</span>
          </motion.h2>
          
          <motion.div variants={fadeUp} className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#1E3A8A] to-pink-500 mx-auto mb-10"></motion.div>
          
          <motion.div 
            variants={fadeUp}
            className="text-[#334155] leading-[2.2] text-lg sm:text-xl font-medium max-w-3xl mx-auto"
          >
            <div>
              At Medinet Pharmaceuticals, we don't just offer jobs—we build{" "}
              <span className="relative inline-block group cursor-default">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-pink-500 font-bold transition-all duration-300">
                  careers
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#1E3A8A] to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>{" "}
              in a workplace where{" "}
              <span className="text-[#0F172A] font-bold relative group cursor-default">
                talent is nurtured
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1E3A8A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
              ,{" "}
              <span className="text-[#0F172A] font-bold relative group cursor-default">
                ideas are valued
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1E3A8A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
              , and every individual has the opportunity to make a{" "}
              <motion.span 
                className="relative inline-block cursor-default"
                animate={{ textShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 15px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#1E3A8A] font-extrabold relative z-10">
                  meaningful impact
                </span>
                <Sparkles className="absolute -top-4 -right-4 w-5 h-5 text-pink-500 opacity-80 animate-pulse z-0" />
              </motion.span>{" "}
              on patients' lives and the future of healthcare.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-border">
        {/* Background Corporate Environment Image */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" alt="Corporate Environment" fill className="object-cover" />
        </div>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardContainerVariants}
        >
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-4">
              Current <span className="bg-gradient-to-r from-pink-500 to-[#1E3A8A] text-transparent bg-clip-text">Openings</span>
            </h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#1E3A8A] font-bold tracking-wide text-lg mb-6">Explore Career Opportunities</h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-[#1E3A8A] mx-auto mb-6"></div>
            <p className="text-[#475569] leading-relaxed text-lg">
              We are always looking for talented and motivated individuals to join our growing team. Current opportunities may include:
            </p>
          </motion.div>

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
            ].map((role, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  variants={cardVariants}
                  key={idx} 
                  className="relative group cursor-default hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full scale-105 ${
                    isEven ? "bg-pink-500" : "bg-[#1E3A8A]"
                  }`} />
                  <div className={`relative bg-white border border-border font-semibold px-6 py-3 rounded-full shadow-sm transition-colors duration-300 text-[#0F172A] ${
                    isEven 
                      ? "group-hover:border-pink-400 group-hover:text-pink-600" 
                      : "group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                  }`}>
                    {role}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 max-w-4xl mx-auto border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.06)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-[#1E3A8A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h4 className="font-bold text-[#0F172A] text-xl mb-2 group-hover:text-pink-600 transition-colors">Can't find a suitable role?</h4>
              <p className="text-[#475569]">Submit your resume, and we'll contact you when a relevant opportunity becomes available.</p>
            </div>
            <a 
              href="#apply" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative z-10 shrink-0 bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_10px_20px_rgba(15,23,42,0.2)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all overflow-hidden group/btn"
            >
              <span className="relative z-10">Submit Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-[#1E3A8A] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Apply Now Form */}
      <section id="apply" className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainerVariants}
        >
          <motion.div variants={fadeUp} className="text-center mb-16 relative">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight leading-tight mb-4">
              Apply <span className="bg-gradient-to-r from-pink-500 to-[#1E3A8A] text-transparent bg-clip-text">Now</span>
            </h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-pink-500 font-bold tracking-wide text-lg mb-6">Take the Next Step in Your Career</h3>
            <p className="text-[#475569] leading-relaxed text-lg max-w-2xl mx-auto">
              Ready to build a rewarding career with Medinet? We welcome passionate individuals who are eager to contribute to the healthcare industry and grow with us.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl mx-auto relative group">
            {/* Unique glowing backdrop for the form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-[#1E3A8A]/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
            
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-border relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
              <form onSubmit={handleSubmit} className="space-y-6">

                {formSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3 mb-6">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Application submitted successfully! Our HR team will reach out to you.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all shadow-sm hover:border-pink-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all shadow-sm hover:border-pink-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleFieldChange("phone", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all shadow-sm hover:border-pink-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Position Applying For</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => handleFieldChange("position", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all appearance-none shadow-sm hover:border-pink-200"
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
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Current Location</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => handleFieldChange("location", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all shadow-sm hover:border-pink-200"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Years of Experience</label>
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => handleFieldChange("experience", e.target.value)}
                      className="w-full bg-alt-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all shadow-sm hover:border-pink-200"
                      placeholder="e.g. 5 Years"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Upload Resume (PDF/DOC)</label>
                    <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, "resume")} />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-between bg-alt-bg border border-border border-dashed rounded-xl px-4 py-3 cursor-pointer hover:bg-pink-50 hover:border-pink-300 transition-colors shadow-sm group/file"
                    >
                      <span className="text-[#475569] text-sm truncate group-hover/file:text-pink-700 transition-colors">
                        {uploadedFile ? uploadedFile.name : "Choose File..."}
                      </span>
                      <Upload className="w-5 h-5 text-[#1E3A8A] group-hover/file:text-pink-500 transition-colors" />
                    </div>
                    {uploadedFile && <p className="text-xs text-pink-600 mt-2 font-medium">Selected: {uploadedFile.size}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Cover Letter (Optional)</label>
                    <input type="file" ref={coverLetterInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, "cover")} />
                    <div
                      onClick={() => coverLetterInputRef.current?.click()}
                      className="w-full flex items-center justify-between bg-alt-bg border border-border border-dashed rounded-xl px-4 py-3 cursor-pointer hover:bg-pink-50 hover:border-pink-300 transition-colors shadow-sm group/file"
                    >
                      <span className="text-[#475569] text-sm truncate group-hover/file:text-pink-700 transition-colors">
                        {uploadedCoverLetter ? uploadedCoverLetter.name : "Choose File..."}
                      </span>
                      <FileText className="w-5 h-5 text-[#1E3A8A] group-hover/file:text-pink-500 transition-colors" />
                    </div>
                    {uploadedCoverLetter && <p className="text-xs text-pink-600 mt-2 font-medium">Selected: {uploadedCoverLetter.size}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-6 bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] hover:from-pink-600 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.3)] transition-all duration-500 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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
                      Submit Application
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Join the Medinet Family */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-border text-center">
        {/* Background Corporate Environment 2 Image */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop" alt="Diversity and Inclusion" fill className="object-cover" />
        </div>
        
        {/* Glowing floating orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#1E3A8A]/20 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div 
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardContainerVariants}
        >
          <motion.div variants={fadeUp} className="relative inline-block mb-8">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], boxShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 40px rgba(236,72,153,0.6)", "0px 0px 0px rgba(236,72,153,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] flex items-center justify-center relative z-10 shadow-xl"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight mb-6">
            Join the <span className="bg-gradient-to-r from-pink-500 to-[#1E3A8A] text-transparent bg-clip-text">Medinet Family</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-[#334155] leading-relaxed text-lg sm:text-xl font-medium mb-12 max-w-3xl mx-auto">
            At Medinet Pharmaceutical Marketing Company, we're more than a workplace—we're a team driven by a shared purpose: improving healthcare through quality, innovation, and trust. If you're ready to make a difference, we'd love to hear from you.
          </motion.p>
          
          <motion.div variants={fadeUp} className="relative group inline-block w-full max-w-3xl">
            {/* Glowing animated background that intensifies on hover */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 to-[#1E3A8A] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative bg-white px-8 py-10 sm:py-12 rounded-2xl ring-1 ring-border shadow-2xl overflow-hidden">
              {/* Subtle inner gradient decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E3A8A]/10 rounded-full blur-3xl" />
              
              <p className="text-[#0F172A] font-bold text-xl sm:text-2xl leading-relaxed relative z-10">
                Start your journey with Medinet today — because together, we deliver <br className="hidden sm:block mt-2" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#1E3A8A] font-extrabold text-3xl sm:text-4xl mt-3 inline-block drop-shadow-sm">
                  "Reliable Care, Every Time."
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </motion.div>
  );
}
