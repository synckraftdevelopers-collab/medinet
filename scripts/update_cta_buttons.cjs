const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Primary Button
content = content.replace(
  /className="inline-flex items-center justify-center gap-2 px-5 py-2\.5 bg-primary hover:bg-black text-white font-mono text-xs font-semibold rounded border border-primary transition-all shadow-sm active:scale-98"/,
  'className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white font-mono text-xs font-semibold rounded-[14px] border-none transition-all duration-300 ease-[ease] cursor-pointer active:scale-98 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] shadow-[0_12px_30px_rgba(37,99,235,.22)] hover:bg-[linear-gradient(135deg,#1D4ED8_0%,#0B1F4D_100%)] hover:shadow-[0_18px_40px_rgba(37,99,235,.3)] hover:-translate-y-[2px] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.15)] group/btn1"'
);

// Primary Button Arrow
content = content.replace(
  /<ArrowRight className="w-3\.5 h-3\.5" \/>/,
  '<ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[ease] group-hover/btn1:translate-x-[4px]" />'
);

// Secondary Button
content = content.replace(
  /className="inline-flex items-center justify-center gap-2 px-5 py-2\.5 bg-white hover:bg-background border border-border text-body font-mono text-xs font-semibold rounded transition-all shadow-sm active:scale-98"/,
  'className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-all duration-300 ease-[ease] active:scale-98 cursor-pointer rounded-[14px] bg-[#FFFFFF] text-[#0B1F4D] border border-[#CBD5E1] shadow-[0_8px_20px_rgba(0,0,0,.05)] hover:bg-[#EFF6FF] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_12px_24px_rgba(37,99,235,.12)] hover:-translate-y-[2px] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.1)]"'
);

fs.writeFileSync(file, content);
console.log('CTA buttons updated successfully.');
