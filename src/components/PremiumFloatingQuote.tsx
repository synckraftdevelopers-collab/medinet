import React from 'react';
import { motion, useReducedMotion, Variants } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';

const QUOTE_TEXT = "Advancing Healthcare Through Innovation, Delivering Excellence Through Quality, and Earning Trust Through Every Medicine We Create.";
const SUPPORTING_TEXT = "Every solution we develop is driven by science, inspired by care, and dedicated to improving lives through trusted pharmaceutical excellence.";

const HIGHLIGHTED_WORDS = ["Healthcare", "Innovation", "Excellence", "Quality", "Trust"];

export const PremiumFloatingQuote = () => {
  const shouldReduceMotion = useReducedMotion();
  const words = QUOTE_TEXT.split(" ");
  
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white border-b border-border">
      {/* Soft white background with subtle medical blue gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FCFF] to-white z-0 pointer-events-none" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Gentle blue radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.04),transparent_60%)] blur-3xl"></div>
        
        {/* Low-opacity medical-themed abstract circles / soft floating particles */}
        <motion.div 
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, 10, 0], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-64 h-64 border-2 border-primary/20 rounded-full"
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], x: [0, -10, 0], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 border border-secondary/20 rounded-full"
        />

        {/* Subtle animated light beam moving slowly */}
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ['-200%', '200%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-[-30deg] blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative group w-full max-w-5xl"
        >
          {/* Decorative gradient glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-[28px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Elegant glassmorphism quote card */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative bg-white/70 backdrop-blur-xl border border-white p-8 sm:p-12 md:p-16 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_25px_50px_-12px_rgba(29,78,216,0.15)] group-hover:scale-[1.02] transition-all duration-500 flex flex-col items-center text-center"
          >
            {/* Large quotation mark icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.25)] border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-500">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white/20" />
              </div>
            </div>

            {/* Breathing animation on the container of words after initial animation */}
            <motion.div
              animate={shouldReduceMotion ? {} : { scale: [1, 1.01, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="mt-8 mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-heading leading-[1.4] sm:leading-[1.5] tracking-tight">
                {words.map((word, index) => {
                  const cleanWord = word.replace(/[.,]/g, '');
                  const isHighlighted = HIGHLIGHTED_WORDS.includes(cleanWord);
                  
                  return (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className="inline-block mr-[0.25em] mb-2"
                    >
                      {isHighlighted ? (
                        <motion.span
                          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent font-black inline-block pb-1"
                        >
                          {word}
                        </motion.span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  );
                })}
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.div
              variants={wordVariants}
              className="max-w-3xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl text-body font-medium leading-relaxed">
                {SUPPORTING_TEXT}
              </p>
            </motion.div>

            {/* Subtle bottom decoration */}
            <motion.div
              variants={wordVariants}
              className="mt-12 flex items-center justify-center gap-4 text-secondary/40"
            >
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-secondary/30"></div>
              <Sparkles className="w-5 h-5" />
              <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-secondary/30"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
