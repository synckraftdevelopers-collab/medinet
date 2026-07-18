const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Isolate the section
const startPattern = '{/* Featured Products Showcase */}';
const endPattern = '{/* Testimonials Endorsement Section */}';

const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex === -1 || endIndex === -1) {
  throw new Error("Section not found");
}

let sectionContent = content.substring(startIndex, endIndex);

// 1. Section Background
sectionContent = sectionContent.replace(
  /className="py-20 bg-white border-b border-border"/,
  'className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0]"'
);

// 2. Card Container
sectionContent = sectionContent.replace(
  /className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left flex flex-col justify-between shadow-sm hover:border-primary transition-all duration-200 group relative"/g,
  'className="bg-[#FFFFFF] border border-[#CBD5E1] border-t-4 border-t-[#2563EB] p-6 rounded-[24px] shadow-[0_20px_50px_rgba(11,31,77,.10)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between group relative hover:border-[#2563EB] hover:border-t-[#0D9488] hover:-translate-y-[6px] hover:shadow-[0_30px_70px_rgba(37,99,235,.18)]"'
);

// 3. Badges
sectionContent = sectionContent.replace(
  /className="text-\[10px\] font-mono bg-alt-bg text-body border border-border px-2 py-0\.5 rounded font-semibold uppercase"/g,
  'className="text-[10px] font-mono bg-[#DBEAFE] text-[#1D4ED8] border border-[#93C5FD] px-2 py-0.5 rounded-[10px] font-semibold uppercase"'
);

// 4. Product Name
sectionContent = sectionContent.replace(
  /className="font-display font-bold text-heading text-lg group-hover:text-heading transition-colors"/g,
  'className="font-display font-bold text-[#081F3A] text-lg"'
);

// 5. Generic Name
sectionContent = sectionContent.replace(
  /className="text-xs text-body font-mono italic mt-1 line-clamp-1"/g,
  'className="text-xs text-[#2563EB] font-mono italic mt-1 line-clamp-1 opacity-100"'
);

// 6. Description
sectionContent = sectionContent.replace(
  /className="mt-3\.5 text-sm text-body leading-relaxed line-clamp-3"/g,
  'className="mt-3.5 text-sm text-[#334155] leading-relaxed line-clamp-3"'
);

// 7. Dosage
sectionContent = sectionContent.replace(
  /className="text-xs font-mono text-muted">\{product\.strength\}<\/span>/g,
  'className="text-xs font-mono text-[#2563EB] font-semibold">{product.strength}</span>'
);

// 8. Key Indications
sectionContent = sectionContent.replace(
  /className="block text-\[10px\] font-semibold text-muted font-mono uppercase tracking-wider"/g,
  'className="block text-[10px] font-semibold text-[#2563EB] font-mono uppercase tracking-wider"'
);

sectionContent = sectionContent.replace(
  /className="space-y-1 text-xs text-body"/g,
  'className="space-y-1 text-xs text-[#334155]"'
);

sectionContent = sectionContent.replace(
  /className="text-heading shrink-0">•<\/span>/g,
  'className="text-[#0D9488] shrink-0">•</span>'
);

// 9. Divider
sectionContent = sectionContent.replace(
  /className="mt-6 pt-4 border-t border-border flex items-center justify-between"/g,
  'className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between"'
);

// 10. Pack Info
sectionContent = sectionContent.replace(
  /<span className="text-xs text-muted font-mono">\s*Pack: \{product\.packaging\}\s*<\/span>/g,
  '<span className="text-xs font-mono"><span className="text-[#64748B]">Pack:</span> <span className="text-[#334155]">{product.packaging}</span></span>'
);

// 11. Details Link
sectionContent = sectionContent.replace(
  /<button\s*onClick=\{\(\) => navigate\("products", \{ id: product\.id \}\)\}\s*className="text-xs font-mono font-semibold text-heading hover:text-black flex items-center gap-1 uppercase"\s*>\s*DETAILS <ArrowUpRight className="w-3\.5 h-3\.5" \/>\s*<\/button>/g,
  `<button
                    onClick={() => navigate("products", { id: product.id })}
                    className="text-[11px] font-mono font-semibold text-[#0B1F4D] hover:text-[#2563EB] flex items-center gap-1 uppercase group/btn transition-colors duration-300 relative after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  >
                    DETAILS <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D] group-hover/btn:text-[#0D9488] group-hover/btn:translate-x-[6px] transition-all duration-300" />
                  </button>`
);

// 12. Browse Button
sectionContent = sectionContent.replace(
  /<button\s*onClick=\{\(\) => navigate\("products"\)\}\s*className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-border hover:bg-background text-body font-mono text-xs font-semibold rounded transition-all shadow-sm flex items-center gap-1\.5"\s*>\s*BROWSE FULL CATALOGUE <ArrowRight className="w-3\.5 h-3\.5" \/>\s*<\/button>/,
  `<button
              onClick={() => navigate("products")}
              className="mt-4 sm:mt-0 px-4 py-2 bg-[#FFFFFF] border border-[#CBD5E1] text-[#0B1F4D] hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_10px_25px_rgba(37,99,235,.18)] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 flex items-center gap-1.5 group/browse"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/browse:translate-x-1" />
            </button>`
);

// Combine back
content = content.substring(0, startIndex) + sectionContent + content.substring(endIndex);

fs.writeFileSync(file, content);
console.log('Featured Formulations updated successfully with original matchers.');
