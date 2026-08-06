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
              className="absolute inset-0 bg-gradient-to-br from-[#0B1F4D] via-[#EC4899] to-[#0B1F4D] opacity-[0.45]"
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
                <g key={`connection-${idx}`}>
                  {/* Base Line */}
                  <motion.path
                    d={`M ${hqX} ${hqY} Q ${midX} ${midY} ${cx} ${cy}`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 + (idx * 0.1) }}
                    className="hover:opacity-100 hover:stroke-[2.5px] transition-all duration-300 cursor-pointer pointer-events-auto drop-shadow-sm"
                  />
                  {/* Animated Particle traveling along the line */}
                  <motion.path
                    d={`M ${hqX} ${hqY} Q ${midX} ${midY} ${cx} ${cy}`}
                    fill="none"
                    stroke="#F472B6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.02, pathOffset: 0, opacity: 0 }}
                    whileInView={{ pathOffset: 1, opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: idx * 0.4 }}
                    style={{ filter: 'drop-shadow(0 0 6px #F472B6)' }}
                  />
                </g>
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
                <div className={`relative flex items-center justify-center ${country.isHQ ? 'w-6 h-6' : 'w-3 h-3'}`}>
                  {country.isHQ && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75" style={{ animationDuration: '1.5s' }}></span>
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-40 animate-pulse blur-sm"></span>
                    </>
                  )}
                  {!country.isHQ && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB2777] opacity-60" style={{ animationDuration: '2.5s' }}></span>
                  )}
                  <div className={`rounded-full shadow-[0_0_12px_rgba(236,72,153,0.9)] transition-transform duration-300 group-hover:scale-[1.8] ${country.isHQ ? 'w-4 h-4 bg-white border-[2.5px] border-[#EC4899] z-10' : 'w-2 h-2 bg-[#EC4899]'}`}></div>
                </div>

                {/* Country Name Label */}
                <div className={`absolute top-full mt-2 md:mt-3 px-2.5 py-1 bg-white/95 backdrop-blur-md shadow-lg rounded-md text-[10px] sm:text-xs font-mono font-bold whitespace-nowrap opacity-0 md:opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ${country.isHQ ? 'text-[#EC4899] opacity-100 border border-[#EC4899]/50 bg-pink-50/95 ring-2 ring-pink-500/20' : 'text-[#0B1F4D] border border-slate-200'}`}>
                  {country.name}
                  {country.isHQ && <span className="ml-1.5 text-[#0B1F4D]">(HQ)</span>}
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
              className="relative group h-full"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                className="bg-white/80 backdrop-blur-xl rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)] hover:border-pink-200 transition-all duration-500 text-center flex flex-col items-center h-full relative z-10 overflow-hidden"
              >
                {/* Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-gradient-to-br group-hover:from-pink-50 group-hover:to-pink-100 group-hover:scale-110 group-hover:border-pink-300 transition-all duration-500">
                  <div className="absolute inset-0 bg-pink-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <stat.icon className="w-7 h-7 text-[#EC4899] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl text-[#0B1F4D] mb-3 tracking-tight group-hover:text-[#EC4899] transition-colors duration-300">
                  {stat.count}
                </h3>
                <p className="text-xs font-mono font-bold tracking-[0.15em] text-[#475569] uppercase group-hover:text-[#0B1F4D] transition-colors duration-300">
                  {stat.title}
                </p>
              </motion.div>
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
          <motion.p 
            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="font-display font-extrabold text-sm md:text-lg tracking-[0.1em] uppercase text-center bg-clip-text text-transparent drop-shadow-sm"
            style={{
              backgroundImage: 'linear-gradient(110deg, #0B1F4D 35%, #F9A8D4 50%, #0B1F4D 65%)',
              backgroundSize: '200% auto',
            }}
          >
            One Vision. Global Reach. Better Health for All.
          </motion.p>
          <div className="hidden md:block h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#0B1F4D]/20 to-[#EC4899]/40"></div>
        </motion.div>
      </div>
    </section>
  );
}
