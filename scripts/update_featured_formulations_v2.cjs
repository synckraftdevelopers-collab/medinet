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
  /className="py-20 bg-\[#F8FAFC\] border-b border-\[#E2E8F0\]"/,
  'className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0]"'
);

// 2. Card Container
sectionContent = sectionContent.replace(
  /className="bg-\[#FFFFFF\] border border-\[#E2E8F0\] p-6 rounded-\[24px\] shadow-\[0_20px_45px_rgba\(11,31,77,\.08\)\] transition-all duration-300 ease-\[ease\] text-left flex flex-col justify-between group relative hover:border-\[#2563EB\] hover:-translate-y-\[4px\] hover:shadow-\[0_28px_60px_rgba\(37,99,235,\.15\)\]"/g,
  'className="bg-[#FFFFFF] border border-[#CBD5E1] border-t-4 border-t-[#2563EB] p-6 rounded-[24px] shadow-[0_20px_50px_rgba(11,31,77,.10)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between group relative hover:border-[#2563EB] hover:border-t-[#0D9488] hover:-translate-y-[6px] hover:shadow-[0_30px_70px_rgba(37,99,235,.18)]"'
);

// 3. Badges
sectionContent = sectionContent.replace(
  /className="text-\[10px\] font-mono bg-\[#EFF6FF\] text-\[#2563EB\] border border-\[#BFDBFE\] px-2 py-0\.5 rounded-\[10px\] font-semibold uppercase"/g,
  'className="text-[10px] font-mono bg-[#DBEAFE] text-[#1D4ED8] border border-[#93C5FD] px-2 py-0.5 rounded-[10px] font-semibold uppercase"'
);

// 4. Product Name
sectionContent = sectionContent.replace(
  /className="font-display font-bold text-\[#0B1F4D\] text-lg"/g,
  'className="font-display font-bold text-[#081F3A] text-lg"'
);

// 5. Description
sectionContent = sectionContent.replace(
  /className="mt-3\.5 text-sm text-\[#475569\] leading-relaxed line-clamp-3"/g,
  'className="mt-3.5 text-sm text-[#334155] leading-relaxed line-clamp-3"'
);

// 6. Divider
sectionContent = sectionContent.replace(
  /className="mt-6 pt-4 border-t border-\[#E2E8F0\] flex items-center justify-between"/g,
  'className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between"'
);

// 7. Pack Info
sectionContent = sectionContent.replace(
  /<span className="text-\[#94A3B8\]">Pack:<\/span> <span className="text-\[#475569\]">\{product\.packaging\}<\/span>/g,
  '<span className="text-[#64748B]">Pack:</span> <span className="text-[#334155]">{product.packaging}</span>'
);

// 8. Browse Button
sectionContent = sectionContent.replace(
  /hover:bg-\[#EFF6FF\] hover:border-\[#2563EB\] hover:text-\[#2563EB\] hover:shadow-\[0_10px_25px_rgba\(37,99,235,\.12\)\]/g,
  'hover:bg-[#DBEAFE] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_10px_25px_rgba(37,99,235,.18)]'
);

// Combine back
content = content.substring(0, startIndex) + sectionContent + content.substring(endIndex);

fs.writeFileSync(file, content);
console.log('Featured Formulations tweaked successfully.');
