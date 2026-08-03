import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  Presentation,
  Newspaper,
  HeartHandshake,
  CheckCircle,
  Link as LinkIcon
} from "lucide-react";

interface NewsEventsProps {
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

export default function NewsEvents({ params }: NewsEventsProps) {
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
              News & Events
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0A192F] tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Stay Updated with Medinet</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              Keep up with the latest news, important announcements, product launches, and community initiatives from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our growth and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Product Launches */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Product Launches</h2>
              <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-4">Introducing Innovative Healthcare Solutions</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet Pharmaceutical Marketing Company, we are committed to expanding our product portfolio with innovative, high-quality pharmaceutical formulations that address the evolving needs of healthcare professionals and patients.
              </p>
            </div>
            <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">Highlights:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "New Product Releases",
                  "Product Portfolio Expansion",
                  "Innovative Formulations",
                  "Therapeutic Advancements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Our product launches reflect our dedication to quality, innovation, and improved patient outcomes. Stay updated with our latest product introductions, therapeutic advancements, and upcoming healthcare solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Medical Conferences */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Medical Conferences</h2>
              <h3 className="text-teal-600 font-medium tracking-wide text-lg mb-4">Connecting Through Science and Knowledge</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Medinet actively participates in medical conferences, Continuing Medical Education (CME) programs, healthcare exhibitions, and industry events to strengthen scientific engagement and foster meaningful collaborations with healthcare professionals.
              </p>
            </div>
            <div className="lg:w-2/3 bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100/50">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">Our participation includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Medical Conferences",
                  "CME Programs",
                  "Healthcare Exhibitions",
                  "Scientific Meetings",
                  "Product Awareness Programs",
                  "Healthcare Professional Engagement Activities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-teal-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  These events provide opportunities to exchange knowledge, showcase our products, and stay aligned with the latest advancements in healthcare.
                </p>
              </div>
            </div>
          </div>

          {/* Company Announcements */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">Company Announcements</h2>
              <h3 className="text-indigo-600 font-medium tracking-wide text-lg mb-4">Stay Updated with Medinet</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                Keep up with the latest news and important announcements from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our growth and achievements.
              </p>
            </div>
            <div className="lg:w-2/3 bg-indigo-50/50 rounded-3xl p-8 md:p-10 border border-indigo-100/50">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">Here you'll find updates on:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Corporate News",
                  "Business Milestones",
                  "Strategic Partnerships",
                  "New Team Members",
                  "Awards & Recognitions",
                  "Business Expansion",
                  "Product Portfolio Updates",
                  "Career Announcements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-indigo-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSR Initiatives */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shrink-0 shadow-lg mb-6">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A192F] mb-4">CSR Initiatives</h2>
              <h3 className="text-emerald-600 font-medium tracking-wide text-lg mb-4">Caring Beyond Medicines</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet, we believe our responsibility extends beyond delivering quality medicines. Through our Corporate Social Responsibility (CSR) initiatives, we strive to make a positive impact on the communities we serve by promoting health, education, and social well-being.
              </p>
            </div>
            <div className="lg:w-2/3 bg-emerald-50/50 rounded-3xl p-8 md:p-10 border border-emerald-100/50">
              <p className="text-[#0A192F] font-semibold mb-6 text-lg">Our CSR focus areas include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Health Awareness Campaigns",
                  "Community Health Programs",
                  "Medical Camps",
                  "Public Health Education",
                  "Environmental Sustainability Initiatives",
                  "Employee Volunteering Activities",
                  "Support for Community Development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-200/50">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Through these initiatives, we remain committed to creating healthier communities and contributing to a better future.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-6">
            <LinkIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0A192F] tracking-tight mb-6">
            Stay <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">Connected</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-8"></div>
          <p className="text-[#334155] leading-relaxed text-lg sm:text-xl font-medium">
            Follow our News & Events page for the latest updates on product launches, medical conferences, company announcements, and community initiatives as Medinet continues its journey of delivering <strong>"Reliable Care, Every Time."</strong>
          </p>
        </div>
      </section>

    </motion.div>
  );
}
