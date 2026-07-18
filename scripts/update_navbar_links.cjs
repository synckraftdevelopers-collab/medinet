const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Catch any variations of the nav links
content = content.replace(/text-heading bg-alt-bg border border-border\/80/g, 'text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]');
content = content.replace(/text-accent bg-alt-bg border border-border\/80/g, 'text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]');
content = content.replace(/text-body hover:text-heading hover:bg-background border border-transparent/g, "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent");

fs.writeFileSync(file, content);
console.log('Fixed Navbar Links.');
