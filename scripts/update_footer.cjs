const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Footer bg
content = content.replace(
  /<footer className="bg-footer text-muted font-sans border-t border-primary">/,
  '<footer className="bg-[linear-gradient(180deg,#0B1120_0%,#101C36_45%,#13284D_100%)] text-[#CBD5E1] font-sans border-t border-[#1e293b]">'
);

// 2. Newsletter Badge
content = content.replace(
  /<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-primary border border-primary text-muted text-\[10px\] font-mono font-medium tracking-wider uppercase mb-4">\s*\/\/ CORPORATE NEWSLETTER\s*<\/span>/,
  '<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[rgba(37,99,235,0.12)] border border-[rgba(96,165,250,0.20)] text-[#93C5FD] text-[10px] font-mono font-medium tracking-wider uppercase mb-4">// CORPORATE NEWSLETTER</span>'
);

// 3. Newsletter Heading
content = content.replace(
  /<h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">\s*Stay Informed on Pharmaceutical Advancements\s*<\/h3>/,
  '<h3 className="text-xl sm:text-2xl font-display font-medium text-[#FFFFFF] tracking-tight">\n              Stay Informed on <span className="text-[#60A5FA]">Pharmaceutical</span> <span className="text-[#60A5FA]">Advancements</span>\n            </h3>'
);

// 4. Newsletter Paragraph
content = content.replace(
  /<p className="mt-2 text-xs text-muted">/,
  '<p className="mt-2 text-xs text-[#CBD5E1]">'
);

// 5. Newsletter Input
content = content.replace(
  /className="w-full pl-10 pr-4 py-2\.5 bg-primary border border-primary rounded text-white text-xs focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary\/15 placeholder:text-body transition-all"/,
  'className="w-full pl-10 pr-4 py-2.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[8px] text-white text-xs focus:outline-none focus:border-[#38BDF8] focus:ring-4 focus:ring-[rgba(56,189,248,0.15)] placeholder:text-[#94A3B8] transition-all"'
);

// 6. Subscribe Button
content = content.replace(
  /className="px-5 py-2\.5 bg-white hover:bg-alt-bg text-heading font-mono text-xs font-semibold rounded transition-all flex items-center justify-center gap-1\.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0"/,
  'className="px-5 py-2.5 bg-[#FFFFFF] hover:bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)] text-[#0B1F4D] hover:text-[#2563EB] hover:shadow-[0_15px_35px_rgba(255,255,255,0.15)] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group"'
);
content = content.replace(
  /<Send className="w-3\.5 h-3\.5" \/>/,
  '<Send className="w-3.5 h-3.5 text-[#2563EB] group-hover:text-[#0D9488] transition-colors" />'
);

// 7. Divider
content = content.replace(
  /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-primary">/,
  '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[rgba(96,165,250,0.12)]">'
);

// 8. Logo
content = content.replace(
  /className="h-12 w-auto"/,
  'className="h-12 w-auto drop-shadow-[0_0_20px_rgba(37,99,235,0.18)]"'
);

// 9. Section Titles
content = content.replace(
  /<h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">\s*\/\/ CORPORATE\s*<\/h4>/,
  '<h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider mb-6">\n              <span className="text-[#38BDF8]">//</span> CORPORATE\n            </h4>'
);
content = content.replace(
  /<h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">\s*\/\/ THERAPEUTICS\s*<\/h4>/,
  '<h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider mb-6">\n              <span className="text-[#38BDF8]">//</span> THERAPEUTICS\n            </h4>'
);
content = content.replace(
  /<h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-6">\s*\/\/ GLOBAL SUPPORT\s*<\/h4>/,
  '<h4 className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider mb-6">\n              <span className="text-[#38BDF8]">//</span> GLOBAL SUPPORT\n            </h4>'
);

// 10. Links
const linkRegex = /className="hover:text-highlight transition-colors flex items-center gap-1 group"/g;
content = content.replace(linkRegex, 'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors duration-300 flex items-center gap-1 group relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#60A5FA] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"');

content = content.replace(
  /className="hover:text-highlight transition-colors block text-left"/g,
  'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors duration-300 block text-left relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#60A5FA] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"'
);

content = content.replace(
  /className="text-white hover:underline font-mono text-xs font-semibold transition-colors flex items-center gap-1"/,
  'className="text-[#CBD5E1] hover:text-[#60A5FA] font-mono text-xs font-semibold transition-colors flex items-center gap-1 group relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#60A5FA] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"'
);

content = content.replace(
  /<p className="text-xs text-muted leading-relaxed pr-4">/,
  '<p className="text-xs text-[#CBD5E1] leading-relaxed pr-4">'
);

// 11. Social Icons
const socialRegex = /className="w-8 h-8 rounded bg-primary hover:bg-white text-muted hover:text-heading flex items-center justify-center transition-all border border-primary"/g;
content = content.replace(socialRegex, 'className="w-8 h-8 rounded-[8px] bg-[rgba(255,255,255,0.06)] hover:bg-[#2563EB] text-white hover:text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.18)] flex items-center justify-center transition-all duration-300 border border-[rgba(255,255,255,0.12)] hover:border-[#2563EB]"');

// 12. WHO-GMP Card
content = content.replace(
  /className="mt-8 flex items-center gap-2\.5 bg-primary\/50 p-3 rounded border border-primary"/,
  'className="mt-8 flex items-center gap-2.5 bg-[rgba(37,99,235,0.08)] p-3 rounded-[8px] border border-[rgba(96,165,250,0.15)]"'
);
content = content.replace(
  /<Award className="w-6 h-6 text-muted shrink-0" \/>/,
  '<Award className="w-6 h-6 text-[#38BDF8] shrink-0" />'
);
content = content.replace(
  /<span className="block text-body">Adhering to strict pharmaceutical standards\.<\/span>/,
  '<span className="block text-[#CBD5E1]">Adhering to strict pharmaceutical standards.</span>'
);

// 13. Contact Icons & Links
content = content.replace(
  /<MapPin className="w-4 h-4 text-muted shrink-0 mt-0\.5" \/>/,
  '<MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />'
);
content = content.replace(
  /<Phone className="w-4 h-4 text-muted shrink-0" \/>/,
  '<Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />'
);
content = content.replace(
  /<Mail className="w-4 h-4 text-muted shrink-0" \/>/,
  '<Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />'
);
content = content.replace(
  /<Globe className="w-4 h-4 text-muted shrink-0" \/>/,
  '<Globe className="w-4 h-4 text-[#38BDF8] shrink-0" />'
);
content = content.replace(
  /<span className="leading-relaxed text-muted font-mono">/,
  '<span className="leading-relaxed text-[#CBD5E1] font-mono">'
);
content = content.replace(
  /className="hover:text-highlight transition-colors font-mono"/,
  'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors font-mono relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#60A5FA] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"'
);
content = content.replace(
  /className="hover:text-highlight transition-colors break-all font-mono"/,
  'className="text-[#CBD5E1] hover:text-[#60A5FA] transition-colors break-all font-mono relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#60A5FA] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"'
);
content = content.replace(
  /<span className="text-muted font-mono">www\.medinetpharma\.com<\/span>/,
  '<span className="text-[#CBD5E1] font-mono">www.medinetpharma.com</span>'
);

// Fix Subfooter
content = content.replace(
  /className="bg-footer text-body py-8 border-t border-primary font-sans text-xs"/,
  'className="py-8 border-t border-[#1e293b] font-sans text-xs text-[#94A3B8]"'
);
content = content.replace(
  /className="mt-1 text-body font-mono"/,
  'className="mt-1 text-[#94A3B8] font-mono"'
);
content = content.replace(
  /className="mt-6 text-body text-center text-\[10px\] leading-relaxed max-w-4xl mx-auto border-t border-primary pt-4"/,
  'className="mt-6 text-[#64748B] text-center text-[10px] leading-relaxed max-w-4xl mx-auto border-t border-[#1e293b] pt-4"'
);

// Legal Links styling
const legalLinkRegex = /className="hover:text-muted transition-colors"/g;
content = content.replace(legalLinkRegex, 'className="hover:text-white transition-colors relative w-fit after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"');

fs.writeFileSync(file, content);
console.log('Footer updated successfully.');
