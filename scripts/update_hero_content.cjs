const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Badge and gradient background
content = content.replace(
  /<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-alt-bg border border-border text-body text-\[10px\] font-mono font-medium tracking-wider uppercase mb-6 shadow-none">/,
  '<div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04)_0%,transparent_60%)] -z-10 pointer-events-none rounded-[32px]"></div>\n                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-6 shadow-none hover:bg-[#DBEAFE] transition-colors duration-300 ease-in-out">'
);

// 2. Status Dot
content = content.replace(
  /<span className="w-1\.5 h-1\.5 rounded-full bg-primary"><\/span>/,
  '<span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>'
);

// 3. Heading
content = content.replace(
  /<h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-heading tracking-tight leading-\[1\.1\] mb-6">\s*Bridging Science and <br \/>\s*<span className="text-heading underline decoration-slate-300 decoration-4 underline-offset-4">Patient Care<\/span> Globally\s*<\/h1>/,
  `<h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#0B1F4D] tracking-tight leading-[1.1] mb-6">
                  Bridging <span className="text-[#2563EB]">Science</span> and <br />
                  <span className="text-[#2563EB] relative inline-block">
                    Patient Care
                    <span className="absolute -bottom-1.5 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#2563EB,#0D9488)]"></span>
                  </span> <span className="text-[#2563EB]">Globally</span>
                </h1>`
);

// 4. Paragraph
content = content.replace(
  /<p className="text-base sm:text-lg text-body leading-relaxed max-w-xl mb-8">/,
  '<p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-8">'
);

fs.writeFileSync(file, content);
console.log('Hero content styled successfully.');
