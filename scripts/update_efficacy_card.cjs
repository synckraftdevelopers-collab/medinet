const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Card Container
content = content.replace(
  /className="relative bg-background rounded border border-border p-8 shadow-sm overflow-hidden"/,
  'className="relative bg-[#FFFFFF] rounded-[24px] border border-[#E2E8F0] border-t-4 border-t-[#2563EB] p-8 shadow-[0_24px_48px_rgba(11,31,77,.08)] hover:shadow-[0_30px_60px_rgba(11,31,77,.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group"'
);

// 2. Icon Container
content = content.replace(
  /className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white shrink-0"/,
  'className="w-10 h-10 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded flex items-center justify-center text-white shrink-0 shadow-[0_12px_28px_rgba(37,99,235,.25)]"'
);

// 3 & 4. Heading and Subtitle
content = content.replace(
  /<h3 className="font-display font-bold text-heading text-base">Guaranteed Efficacy<\/h3>\s*<p className="text-\[11px\] text-body font-mono">WHO-GMP & FDA Audit Compliance<\/p>/,
  '<h3 className="font-display font-bold text-[#0B1F4D] text-base">Guaranteed Efficacy</h3>\n                    <p className="text-[11px] text-[#2563EB] font-mono">WHO-GMP & FDA Audit Compliance</p>'
);

// 5. Quotation
content = content.replace(
  /className="text-sm italic text-body border-l-2 border-primary pl-4 py-1 leading-relaxed mb-6"/,
  'className="text-sm italic text-[#475569] bg-[#F8FAFC] border-l-4 border-l-[#0D9488] rounded-[12px] p-[20px] leading-relaxed mb-6"'
);

// 6. Checklist
content = content.replace(
  /<div className="flex items-center gap-2\.5">\s*<CheckCircle className="w-4 h-4 text-heading shrink-0" \/>\s*<span className="text-xs font-semibold text-body">([^<]+)<\/span>\s*<\/div>/g,
  '<div className="flex items-center gap-2.5 group/item cursor-default">\n                    <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 group-hover/item:text-[#0D9488] transition-colors duration-300" />\n                    <span className="text-xs font-semibold text-[#334155] group-hover/item:text-[#0B1F4D] transition-colors duration-300">$1</span>\n                  </div>'
);

// 7. Divider
content = content.replace(
  /className="mt-8 pt-6 border-t border-border flex items-center justify-between"/,
  'className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between"'
);

// 8. Statistics
content = content.replace(
  /<div>\s*<span className="block text-xl font-display font-bold text-heading">([^<]+)<\/span>\s*<span className="text-\[9px\] text-body font-mono uppercase tracking-wider">([^<]+)<\/span>\s*<\/div>/g,
  '<div className="group/stat cursor-default">\n                    <span className="block text-xl font-display font-bold text-[#0B1F4D] group-hover/stat:text-[#2563EB] group-hover/stat:scale-[1.05] transition-all duration-300 transform origin-left">$1</span>\n                    <span className="text-[9px] text-[#64748B] font-mono uppercase tracking-wider">$2</span>\n                  </div>'
);

fs.writeFileSync(file, content);
console.log('Efficacy card updated successfully.');
