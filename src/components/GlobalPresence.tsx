import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Handshake, Pill } from "lucide-react";
import Image from "next/image";

const COUNTRIES = [
  { name: "India", x: 70, y: 45, isHQ: true },
  { name: "USA", x: 20, y: 35 },
  { name: "Canada", x: 22, y: 25 },
  { name: "Mexico", x: 18, y: 45 },
  { name: "Brazil", x: 32, y: 65 },
  { name: "UK", x: 48, y: 28 },
  { name: "Germany", x: 52, y: 30 },
  { name: "France", x: 50, y: 32 },
  { name: "Spain", x: 48, y: 36 },
  { name: "UAE", x: 63, y: 44 },
  { name: "South Africa", x: 55, y: 75 },
  { name: "Russia", x: 75, y: 20 },
  { name: "China", x: 78, y: 38 },
  { name: "Japan", x: 88, y: 35 },
  { name: "South Korea", x: 84, y: 36 },
  { name: "Vietnam", x: 79, y: 48 },
  { name: "Australia", x: 85, y: 75 },
];

const STATS = [
  { title: "Countries", count: "18+", icon: Globe },
  { title: "Products", count: "200+", icon: Pill },
  { title: "Patients Impacted", count: "10M+", icon: Users },
  { title: "Business Partners", count: "150+", icon: Handshake },
];

export function GlobalPresence() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-border">
      {/* Background Soft Radial Glow - Pink & Navy mixed (Moved up to avoid staining cards) */}
      <div className="absolute top-[30%] left-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.04),transparent_70%)] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] right-1/4 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(11,31,77,0.03),transparent_70%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pink-50/50 backdrop-blur-md border border-[#EC4899]/20 shadow-[0_2px_10px_rgba(236,72,153,0.05)] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] bg-gradient-to-r from-[#0B1F4D] to-[#EC4899] bg-clip-text text-transparent uppercase">
              Global Presence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0B1F4D] tracking-tight leading-[1.2] mb-6"
          >
            Delivering Health <span className="bg-gradient-to-r from-[#0B1F4D] via-[#EC4899] to-[#DB2777] bg-clip-text text-transparent">Worldwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#475569] text-base md:text-lg leading-relaxed font-medium"
          >
            Trusted by millions. Reaching beyond borders.
          </motion.p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[2.2/1] lg:aspect-[2.5/1] mb-16 md:mb-24">
          {/* Base World Map Image - using gradient mask for Pink-Navy blend */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#0B1F4D] via-[#EC4899] to-[#0B1F4D] opacity-[0.25]"
              style={{
                WebkitMaskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
                maskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center'
              }}
            ></div>
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {COUNTRIES.filter(c => !c.isHQ).map((country, idx) => {
              const hqX = 700;
              const hqY = 225;
              const cx = country.x * 10;
              const cy = country.y * 5;
              const midX = (hqX + cx) / 2;
              const midY = Math.min(hqY, cy) - (Math.abs(hqX - cx) * 0.15); // Dynamic curve height

              return (
                <motion.path
                  key={`line-${idx}`}
                  d={`M ${hqX} ${hqY} Q ${midX} ${midY} ${cx} ${cy}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 + (idx * 0.1) }}
                  className="hover:opacity-100 hover:stroke-[2px] transition-opacity duration-300 cursor-pointer pointer-events-auto"
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B1F4D" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#DB2777" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Country Points */}
          <div className="absolute inset-0 z-20">
            {COUNTRIES.map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.05) }}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${country.x}%`, top: `${country.y}%` }}
              >
                {/* Glowing Dot */}
                <div className={`relative flex items-center justify-center ${country.isHQ ? 'w-5 h-5' : 'w-2.5 h-2.5'}`}>
                  {country.isHQ && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                  )}
                  {!country.isHQ && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB2777] opacity-40" style={{ animationDuration: '3s' }}></span>
                  )}
                  <div className={`rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-transform duration-300 group-hover:scale-150 ${country.isHQ ? 'w-3 h-3 bg-[#0B1F4D] border-[1.5px] border-[#EC4899]' : 'w-1.5 h-1.5 bg-[#EC4899]'}`}></div>
                </div>

                {/* Country Name Label */}
                <div className={`absolute top-full mt-2 md:mt-3 px-2 py-0.5 bg-white/90 backdrop-blur-sm shadow-sm rounded text-[9px] sm:text-[10px] font-mono font-bold whitespace-nowrap opacity-0 md:opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${country.isHQ ? 'text-[#EC4899] opacity-100 border border-[#EC4899]/30 bg-pink-50/90' : 'text-[#0B1F4D] border border-slate-100'}`}>
                  {country.name}
                  {country.isHQ && <span className="ml-1 text-[#0B1F4D]">(HQ)</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-30">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(11,31,77,0.08)] hover:-translate-y-2 hover:border-slate-200 transition-all duration-300 text-center flex flex-col items-center relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 shadow-sm group-hover:bg-white group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-[#EC4899]" />
              </div>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-[#0B1F4D] mb-2 tracking-tight">
                {stat.count}
              </h3>
              <p className="text-[11px] font-mono font-bold tracking-wider text-[#475569] uppercase">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 flex items-center justify-center gap-6"
        >
          <div className="hidden md:block h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#0B1F4D]/20 to-[#EC4899]/40"></div>
          <p 
            className="font-display font-extrabold text-sm md:text-lg tracking-[0.1em] uppercase text-center bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #0B1F4D 0%, #EC4899 35%, #F472B6 50%, #EC4899 65%, #0B1F4D 100%)',
              backgroundSize: '200% auto',
              animation: 'gradient-x 4s linear infinite'
            }}
          >
            One Vision. Global Reach. Better Health for All.
          </p>
          <div className="hidden md:block h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#0B1F4D]/20 to-[#EC4899]/40"></div>
        </motion.div>
      </div>
    </section>
  );
}
