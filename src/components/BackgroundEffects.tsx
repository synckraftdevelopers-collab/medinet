import React from "react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Soft Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(29, 78, 216,0.04)_0%,transparent_50%)]"></div>
      
      {/* Blurred Glowing Blobs (Bokeh) - Optimized for Performance */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.15, 0.25, 0.15],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(29, 78, 216,0.1)_0%,transparent_70%)] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] rounded-full"
      />

      {/* Floating Medical Plus (+) Icons */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`plus-${i}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            y: [0, -50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 25 + i * 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 2
          }}
          className="hidden md:block absolute text-secondary/10"
          style={{
            left: `${15 + i * 30}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      ))}

      {/* Floating Tiny Dots / Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{ 
            y: [0, -100, 0],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15 + i * 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i
          }}
          className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-success/20"
          style={{
            left: `${5 + i * 15}%`,
            bottom: `${-(10 + i * 2)}%`,
          }}
        />
      ))}

      {/* DNA-Inspired Line Graphics (Subtle Paths) */}
      <motion.svg
        animate={{ y: [0, 10, 0], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-[30%] right-[10%] w-64 h-64 text-secondary opacity-5"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M 20 0 Q 50 25 20 50 T 20 100" />
        <path d="M 80 0 Q 50 25 80 50 T 80 100" />
        <line x1="26" y1="12" x2="74" y2="12" />
        <line x1="38" y1="25" x2="62" y2="25" />
        <line x1="38" y1="75" x2="62" y2="75" />
        <line x1="26" y1="88" x2="74" y2="88" />
      </motion.svg>

      {/* Hexagon Outlines (Molecules) */}
      <motion.svg
        animate={{ rotate: 360, opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="hidden lg:block absolute bottom-[20%] left-[15%] w-48 h-48 text-primary opacity-5"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
        <circle cx="50" cy="50" r="20" strokeDasharray="4 4" />
      </motion.svg>
    </div>
  );
};

export default React.memo(BackgroundEffects);
