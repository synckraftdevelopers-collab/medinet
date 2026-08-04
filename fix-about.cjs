const fs = require('fs');

const targetPath = 'src/components/pages/About.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// Fix Image
content = content.replace('src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=1000"', 'src="/company_profile.png"');
content = content.replace('src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"', 'src="/company_profile.png"');

// Fix Header Text
const originalHeader = `<h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-heading tracking-tight leading-[1.2] relative w-fit mb-8 mx-auto text-center">
            About Medinet
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 rounded-full"
            ></motion.span>
          </h1>`;

const newHeader = `<h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.2] relative w-fit mb-8 mx-auto text-center flex flex-wrap justify-center gap-3 sm:gap-4 group">
            <span className="text-[#0B1F4D] relative">About</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#EC4899] bg-clip-text text-transparent drop-shadow-sm">
                Medinet
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2563EB] to-[#EC4899] rounded-full"
              ></motion.span>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[6px] bg-[#EC4899] blur-[6px] rounded-full"
              ></motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="absolute -bottom-1 sm:-bottom-2 -right-3 sm:-right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#EC4899] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"
              ></motion.span>
            </span>
          </h1>`;

if (content.includes(originalHeader)) {
    content = content.replace(originalHeader, newHeader);
    console.log('Header replaced successfully.');
} else {
    console.log('Header not found for replacement.');
}

fs.writeFileSync(targetPath, content, 'utf8');
