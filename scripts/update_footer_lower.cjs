const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Footer bg
content = content.replace(
  /bg-\[linear-gradient\(180deg,#0B1120_0%,#101C36_45%,#13284D_100%\)\]/,
  'bg-[linear-gradient(180deg,#0B1120_0%,#13284D_55%,#1A315C_100%)]'
);

// 2. Logo glow and company name
const oldLogo = '<img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-12 w-auto drop-shadow-[0_0_20px_rgba(37,99,235,0.18)]" />';
const newLogo = '<img src="/logo-dark.svg" alt="Medinet Pharmaceuticals Logo" className="h-12 w-auto" style={{ filter: "drop-shadow(0 0 18px rgba(37,99,235,.18)) drop-shadow(0 0 40px rgba(56,189,248,.08))" }} />\n              <span className="font-display font-bold text-2xl text-[#FFFFFF] tracking-tight">Medi<span className="text-[#38BDF8]">Net</span></span>';
content = content.replace(oldLogo, newLogo);

// 3. Description
content = content.replace(
  /<p className="text-xs text-\[#CBD5E1\] leading-relaxed pr-4">/,
  '<p className="text-xs text-[#CBD5E1] leading-[1.8] pr-4">'
);

// 4. Social Icons
const oldSocial = /className="w-8 h-8 rounded-\[8px\] bg-\[rgba\(255,255,255,0\.06\)\] hover:bg-\[#2563EB\] text-white hover:text-white hover:shadow-\[0_10px_25px_rgba\(37,99,235,0\.18\)\] flex items-center justify-center transition-all duration-300 border border-\[rgba\(255,255,255,0\.12\)\] hover:border-\[#2563EB\]"/g;
const newSocial = 'className="w-8 h-8 rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(96,165,250,0.15)] hover:bg-[#2563EB] text-[#FFFFFF] hover:text-[#FFFFFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.30)] hover:scale-[1.05] flex items-center justify-center transition-all duration-300"';
content = content.replace(oldSocial, newSocial);

// 5. WHO-GMP Card
const oldGMPCard = /<div className="mt-8 flex items-center gap-2\.5 bg-\[rgba\(37,99,235,0\.08\)\] p-3 rounded-\[8px\] border border-\[rgba\(96,165,250,0\.15\)\]">/;
const newGMPCard = '<div className="mt-8 flex items-center gap-2.5 bg-[rgba(37,99,235,0.10)] p-3 rounded-[8px] border border-[rgba(96,165,250,0.20)] border-l-[4px] border-l-[#38BDF8] shadow-[0_10px_30px_rgba(11,31,77,0.20)]">';
content = content.replace(oldGMPCard, newGMPCard);

content = content.replace(
  /<span className="block font-semibold text-white">WHO-GMP Compliant<\/span>/,
  '<span className="block font-semibold text-[#FFFFFF]">WHO-GMP Compliant</span>'
);

// 6. Section Titles
content = content.replace(
  /uppercase tracking-wider mb-6/g,
  'uppercase tracking-widest mb-6'
);

// 7. Links (Remove underline animation, use translateX)
const linkRegex1 = /className="text-\[#CBD5E1\] hover:text-\[#60A5FA\] transition-colors duration-300 flex items-center gap-1 group relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-\[#60A5FA\] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(linkRegex1, 'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] flex items-center gap-1 w-fit"');

const linkRegex2 = /className="text-\[#CBD5E1\] hover:text-\[#60A5FA\] transition-colors duration-300 block text-left relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-\[#60A5FA\] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(linkRegex2, 'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] block text-left w-fit"');

const linkRegex3 = /className="text-\[#CBD5E1\] hover:text-\[#60A5FA\] font-mono text-xs font-semibold transition-colors flex items-center gap-1 group relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-\[#60A5FA\] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(linkRegex3, 'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] font-mono text-xs font-semibold flex items-center gap-1 w-fit group"');

// 8. Contact Icons
content = content.replace(
  /<span className="leading-relaxed text-\[#CBD5E1\] font-mono">/g,
  '<span className="leading-relaxed text-[#E2E8F0] font-mono">'
);

const contactLinkRegex = /className="text-\[#CBD5E1\] hover:text-\[#60A5FA\] transition-colors font-mono relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-\[#60A5FA\] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(contactLinkRegex, 'className="text-[#E2E8F0] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] font-mono inline-block w-fit"');

const contactLinkRegex2 = /className="text-\[#CBD5E1\] hover:text-\[#60A5FA\] transition-colors break-all font-mono relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-\[#60A5FA\] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(contactLinkRegex2, 'className="text-[#E2E8F0] hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] break-all font-mono inline-block w-fit"');

content = content.replace(
  /<span className="text-\[#CBD5E1\] font-mono">www\.medinetpharma\.com<\/span>/,
  '<span className="text-[#E2E8F0] font-mono hover:text-[#60A5FA] transition-all duration-300 hover:translate-x-[4px] inline-block w-fit cursor-pointer">www.medinetpharma.com</span>'
);

// 9. Bottom Footer
content = content.replace(
  /className="py-8 border-t border-\[#1e293b\] font-sans text-xs text-\[#94A3B8\]"/,
  'className="py-8 border-t border-[rgba(96,165,250,0.15)] font-sans text-xs text-[#CBD5E1]"'
);

const legalLinksRegex = /className="hover:text-white transition-colors relative w-fit after:absolute after:-bottom-\[2px\] after:left-0 after:h-\[1px\] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"/g;
content = content.replace(legalLinksRegex, 'className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors duration-300"');

// 10. Disclaimer
content = content.replace(
  /className="mt-6 text-\[#64748B\] text-center text-\[10px\] leading-relaxed max-w-4xl mx-auto border-t border-\[#1e293b\] pt-4"/,
  'className="mt-6 text-[#94A3B8] opacity-85 text-center text-[10px] leading-relaxed max-w-4xl mx-auto border-t border-[rgba(96,165,250,0.15)] pt-4"'
);

fs.writeFileSync(file, content);
console.log('Footer lower section updated successfully.');
