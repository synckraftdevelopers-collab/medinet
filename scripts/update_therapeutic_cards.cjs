const fs = require('fs');

// 1. Update data.ts
const dataFile = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/data.ts';
let dataContent = fs.readFileSync(dataFile, 'utf8');
dataContent = dataContent.replace(/iconName: "Activity"/, 'iconName: "HeartPulse"');
dataContent = dataContent.replace(/iconName: "Droplet"/, 'iconName: "Stomach"');
dataContent = dataContent.replace(/iconName: "ShieldAlert"/, 'iconName: "ShieldPlus"');
fs.writeFileSync(dataFile, dataContent);

// 2. Update Home.tsx
const homeFile = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let homeContent = fs.readFileSync(homeFile, 'utf8');

// Add to imports
homeContent = homeContent.replace(
  /import \{\s*FlaskConical,/,
  'import {\n  HeartPulse,\n  Stomach,\n  ShieldPlus,\n  FlaskConical,'
);

// Add to iconMap
homeContent = homeContent.replace(
  /const iconMap: Record<string, any> = \{/,
  'const iconMap: Record<string, any> = {\n  HeartPulse,\n  Stomach,\n  ShieldPlus,'
);

// Card Class
const cardRegex = /className="bg-white border border-border hover:border-primary hover:shadow-sm p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left cursor-pointer transition-all duration-200 group flex flex-col justify-between"/g;
const newCardClass = 'className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left cursor-pointer group flex flex-col justify-between hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.18)]"';
homeContent = homeContent.replace(cardRegex, newCardClass);

// Icon Container
const iconRegex = /className="w-9 h-9 rounded bg-alt-bg text-body flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all"/g;
const newIconClass = 'className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] text-white flex items-center justify-center mb-4 shadow-[0_12px_28px_rgba(37,99,235,.2)]"';
homeContent = homeContent.replace(iconRegex, newIconClass);

// Title
const titleRegex = /className="font-display font-bold text-heading text-base group-hover:text-heading transition-colors"/g;
const newTitleClass = 'className="font-display font-bold text-[#0B1F4D] text-base"';
homeContent = homeContent.replace(titleRegex, newTitleClass);

// Description
const descRegex = /className="mt-2 text-xs text-body leading-relaxed line-clamp-3"/g;
const newDescClass = 'className="mt-2 text-xs text-[#475569] leading-relaxed line-clamp-3"';
homeContent = homeContent.replace(descRegex, newDescClass);

// CTA
const ctaRegex = /<div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-\[11px\] font-mono font-semibold text-muted group-hover:text-heading transition-colors">\s*<span>VIEW FORMULATIONS<\/span>\s*<ArrowRight className="w-3\.5 h-3\.5 group-hover:translate-x-0\.5 transition-transform" \/>\s*<\/div>/g;
const newCta = `<div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-semibold text-[#2563EB] group-hover:text-[#0D9488] transition-colors duration-300">
                    <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2563EB] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">VIEW FORMULATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:text-[#0D9488] group-hover:translate-x-[6px] transition-all duration-300" />
                  </div>`;
homeContent = homeContent.replace(ctaRegex, newCta);

fs.writeFileSync(homeFile, homeContent);
console.log('Therapeutic cards updated successfully.');
