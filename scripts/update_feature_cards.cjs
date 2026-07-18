const fs = require('fs');
const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update imports for Lucide React
content = content.replace(
  /(import\s*\{)([\s\S]*?)(from\s*"lucide-react";)/,
  '$1\n  FlaskConical,\n  Handshake,\n  BadgeCheck,$2$3'
);

// 2. Replace Card container class
const cardRegex = /className="bg-background border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-left"/g;
const newCardClass = 'className="bg-[#FFFFFF] border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] transition-all duration-300 text-left hover:border-[#2563EB] hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(37,99,235,.15)]"';
content = content.replace(cardRegex, newCardClass);

// 3. Replace Icon container class
const iconContainerRegex = /className="w-9 h-9 bg-primary rounded flex items-center justify-center text-white mb-4"/g;
const newIconContainerClass = 'className="w-9 h-9 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] rounded-[16px] flex items-center justify-center text-white mb-4 shadow-[0_10px_25px_rgba(37,99,235,.18)]"';
content = content.replace(iconContainerRegex, newIconContainerClass);

// 4. Replace Heading class
const titleRegex = /className="font-display font-bold text-heading text-sm mb-2"/g;
const newTitleClass = 'className="font-display font-bold text-[#0B1F4D] text-sm mb-2"';
content = content.replace(titleRegex, newTitleClass);

// 5. Replace Description class
const descRegex = /className="text-xs text-body leading-relaxed"/g;
const newDescClass = 'className="text-xs text-[#475569] leading-relaxed"';
content = content.replace(descRegex, newDescClass);

// 6. Replace specific icons
content = content.replace(/<Award className="w-4\.5 h-4\.5" \/>/g, '<FlaskConical className="w-4.5 h-4.5 text-white" />');
content = content.replace(/<Users className="w-4\.5 h-4\.5" \/>/g, '<Handshake className="w-4.5 h-4.5 text-white" />');
content = content.replace(/<Shield className="w-4\.5 h-4\.5" \/>/g, '<BadgeCheck className="w-4.5 h-4.5 text-white" />');
content = content.replace(/<Clock className="w-4\.5 h-4\.5" \/>/g, '<Activity className="w-4.5 h-4.5 text-white" />');

fs.writeFileSync(file, content);
console.log('Feature cards updated successfully.');
