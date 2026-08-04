import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Plus } from 'lucide-react';

interface PremiumFeatureIconProps {
  icon?: React.ElementType;
}

export const PremiumFeatureIcon: React.FC<PremiumFeatureIconProps> = ({ icon: Icon = ShieldCheck }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.6 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.08,
        rotate: 6,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative shrink-0 w-[56px] h-[56px] rounded-[18px] flex items-center justify-center group cursor-default"
      style={{
        background: "linear-gradient(135deg, rgba(11,31,77,0.85) 0%, rgba(37,99,235,0.85) 100%)",
        border: "1.5px solid rgba(236,72,153,0.3)",
        boxShadow: "0 0 15px rgba(37,99,235,0.3), 0 0 20px rgba(236,72,153,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {/* Soft Pink radial glow */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#EC4899] rounded-full blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        {/* Navy glow */}
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#0B1F4D] rounded-full blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Very subtle medical plus symbols pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <div className="grid grid-cols-2 gap-2">
            <Plus className="w-3 h-3 text-white" />
            <Plus className="w-3 h-3 text-white" />
            <Plus className="w-3 h-3 text-white" />
            <Plus className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Small floating particles - simplified with CSS for performance */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute bottom-2 right-3 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-75" />
        <div className="absolute top-4 right-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-150" />
      </div>

      {/* Glow pulse animation when active */}
      <motion.div 
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(37,99,235,0)", 
            "0 0 20px 2px rgba(37,99,235,0.2)", 
            "0 0 0 0 rgba(37,99,235,0)"
          ] 
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[18px] pointer-events-none"
      />

      {/* The Icon itself */}
      <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="w-[28px] h-[28px] text-white" strokeWidth={1.75} />
      </div>
    </motion.div>
  );
};
