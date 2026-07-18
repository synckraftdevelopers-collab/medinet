const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="inline-flex items-center gap-1\.5 text-xs font-mono font-semibold text-heading hover:text-black group uppercase"/,
  'className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase bg-transparent text-[#0B1F4D] hover:text-[#2563EB] transition-all duration-300 ease-[ease] relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-[ease] after:origin-left hover:scale-[1.02] transform origin-left focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,.15)] group/cta"'
);

content = content.replace(
  /<ArrowRight className="w-3\.5 h-3\.5 group-hover:translate-x-0\.5 transition-transform" \/>/,
  '<ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D] group-hover/cta:text-[#0D9488] transition-all duration-300 ease-[ease] group-hover/cta:translate-x-[6px]" />'
);

fs.writeFileSync(file, content);
console.log('CEO CTA updated.');
