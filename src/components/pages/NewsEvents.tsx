import { PremiumFeatureIcon } from '../PremiumFeatureIcon';
import React from "react";
import Image from "next/image";
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
      <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] border-b border-border py-20 lg:py-28 relative overflow-hidden">
        {/* Background Press Release Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop"
            alt="Press Release"
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
              News & Events
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] relative z-10 inline-block mb-6">
              Stay Updated with{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
              >
                Medinet
              </motion.span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed relative z-10">
              Keep up with the{" "}
              <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                latest news
              </motion.span>
              ,{" "}
              <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#2563EB,#BE185D,#2563EB)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                important announcements
              </motion.span>
              ,{" "}
              <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                product launches
              </motion.span>
              , and{" "}
              <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#2563EB,#BE185D,#2563EB)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                community initiatives
              </motion.span>{" "}
              from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our{" "}
              <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                growth and achievements
              </motion.span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white border-b border-border relative overflow-hidden">
        {/* Background Product Launch Image */}
        <div className="absolute left-0 top-0 w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop" alt="Product Launch" fill className="object-cover" />
        </div>
        {/* Background Medical Conference Image */}
        <div className="absolute right-0 top-[33%] w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop" alt="Medical Conference" fill className="object-cover" />
        </div>
        {/* Background CSR Image */}
        <div className="absolute right-0 bottom-0 w-[50%] h-[25%] z-0 opacity-[0.03] pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop" alt="CSR Initiatives" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">

          {/* Product Launches */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shrink-0 shadow-lg mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Product{" "}
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
                >
                  Launches
                </motion.span>
              </h2>
              <h3 className="text-[#2563EB] font-medium tracking-wide text-lg mb-4">Introducing Innovative Healthcare Solutions</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet Pharmaceutical Marketing Company, we are committed to expanding our product portfolio with innovative, high-quality pharmaceutical formulations that address the evolving needs of healthcare professionals and patients.
              </p>
            </div>
            <div className="lg:w-2/3 bg-alt-bg rounded-3xl p-8 md:p-10 border border-border">
              <p className="text-primary font-semibold mb-6 text-lg">Highlights:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "New Product Releases",
                  "Product Portfolio Expansion",
                  "Innovative Formulations",
                  "Therapeutic Advancements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-[20px] bg-white p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <PremiumFeatureIcon />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[#475569] leading-relaxed text-lg font-medium">
                  Our product launches reflect our dedication to quality, innovation, and improved patient outcomes. Stay updated with our latest product introductions, therapeutic advancements, and upcoming healthcare solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Medical Conferences */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6"
              >
                <Presentation className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Medical{" "}
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
                >
                  Conferences
                </motion.span>
              </h2>
              <h3 className="font-medium tracking-wide text-lg mb-4">
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
                >
                  Connecting Through Science and Knowledge
                </motion.span>
              </h3>
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-1 rounded-full bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] mb-6"
              ></motion.div>
              <p className="text-[#475569] leading-relaxed">
                Medinet actively participates in{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  medical conferences
                </motion.span>
                ,{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  Continuing Medical Education (CME) programs
                </motion.span>
                ,{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  healthcare exhibitions
                </motion.span>
                , and{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  industry events
                </motion.span>{" "}
                to strengthen{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  scientific engagement
                </motion.span>{" "}
                and foster{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  meaningful collaborations
                </motion.span>{" "}
                with healthcare professionals.
              </p>
            </div>
            <div className="lg:w-2/3 bg-pink-50/50 rounded-3xl p-8 md:p-10 border border-pink-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our participation includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Medical Conferences",
                  "CME Programs",
                  "Healthcare Exhibitions",
                  "Scientific Meetings",
                  "Product Awareness Programs",
                  "Healthcare Professional Engagement Activities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-[20px] bg-white p-4 rounded-xl border border-teal-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <PremiumFeatureIcon />
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
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6"
              >
                <Newspaper className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Company{" "}
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
                >
                  Announcements
                </motion.span>
              </h2>
              <h3 className="font-medium tracking-wide text-lg mb-4">
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text inline-block drop-shadow-sm"
                >
                  Stay Updated with Medinet
                </motion.span>
              </h3>
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-1 rounded-full bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] mb-6"
              ></motion.div>
              <p className="text-[#475569] leading-relaxed">
                Keep up with the{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  latest news
                </motion.span>
                {" "}and{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  important announcements
                </motion.span>{" "}
                from Medinet Pharmaceutical Marketing Company. We are committed to keeping our customers, partners, and stakeholders informed about our{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  growth and achievements
                </motion.span>
                .
              </p>
            </div>
            <div className="lg:w-2/3 bg-pink-50/50 rounded-3xl p-8 md:p-10 border border-pink-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Here you'll find updates on:</p>
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
                  <div key={idx} className="flex items-center gap-[20px] bg-white p-4 rounded-xl border border-indigo-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <PremiumFeatureIcon />
                    <span className="text-[#475569] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSR Initiatives */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 rounded-2xl bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(236,72,153,0.3)] mb-6"
              >
                <HeartHandshake className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">CSR Initiatives</h2>
              <h3 className="text-secondary font-medium tracking-wide text-lg mb-4">Caring Beyond Medicines</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mb-6"></div>
              <p className="text-[#475569] leading-relaxed">
                At Medinet, we believe our responsibility extends beyond delivering quality medicines. Through our{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  Corporate Social Responsibility (CSR)
                </motion.span>{" "}
                initiatives, we strive to make a{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#EC4899,#9D174D,#EC4899)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  positive impact
                </motion.span>{" "}
                on the communities we serve by promoting{" "}
                <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} className="bg-[linear-gradient(to_right,#9D174D,#EC4899,#BE185D,#9D174D)] bg-[length:200%_auto] text-transparent bg-clip-text font-semibold drop-shadow-sm">
                  health, education, and social well-being
                </motion.span>
                .
              </p>
            </div>
            <div className="lg:w-2/3 bg-emerald-50/50 rounded-3xl p-8 md:p-10 border border-emerald-100/50">
              <p className="text-primary font-semibold mb-6 text-lg">Our CSR focus areas include:</p>
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
                  <div key={idx} className="flex items-center gap-[20px] bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                    <PremiumFeatureIcon />
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
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full blur-[150px] bg-[#2563EB] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg mx-auto mb-6">
            <LinkIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight mb-6 flex flex-wrap justify-center gap-x-3">
            <span>Stay</span>
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="bg-[linear-gradient(to_right,#EC4899,#0B1F4D,#BE185D,#0B1F4D)] bg-[length:200%_auto] text-transparent bg-clip-text"
            >
              Connected
            </motion.span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-8"></div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.03, delayChildren: 0.6 }
              }
            }}
            className="text-[#334155] leading-[1.8] text-lg sm:text-xl font-medium max-w-[800px] mx-auto mb-12"
          >
            {[
              { text: "Follow our " },
              { text: "News & Events", highlight: true },
              { text: " page for the latest updates on " },
              { text: "Product Launches", highlight: true },
              { text: ", " },
              { text: "Medical Conferences", highlight: true },
              { text: ", company announcements, and community initiatives as Medinet continues its journey of delivering " },
              { text: '"Reliable Care, Every Time."', highlight: true }
            ].map((segment, idx) => (
              <React.Fragment key={idx}>
                {segment.text.split(" ").map((word, wIdx) => {
                  if (!word) return null;
                  return (
                    <motion.span 
                      key={`${idx}-${wIdx}`}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="inline-block mr-[6px]"
                    >
                      {segment.highlight ? (
                        <motion.span
                          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                          className="bg-[linear-gradient(to_right,#BE185D,#2563EB,#BE185D)] bg-[length:200%_auto] text-transparent bg-clip-text font-bold inline-block"
                        >
                          {word}
                        </motion.span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  );
                })}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
