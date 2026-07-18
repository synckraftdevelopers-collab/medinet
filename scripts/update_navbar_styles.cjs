const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Header Container
content = content.replace(/bg-white\/95 backdrop-blur-md shadow-sm border-b border-border h-\[72px\] md:h-\[80px\] lg:h-\[88px\]/, 'bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,.04)] border-b border-[#E2E8F0] h-[72px] md:h-[80px] lg:h-[88px]');
content = content.replace(/bg-background\/95 backdrop-blur-md shadow-sm border-b border-border h-\[72px\] md:h-\[80px\] lg:h-\[88px\]/, 'bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,.04)] border-b border-[#E2E8F0] h-[72px] md:h-[80px] lg:h-[88px]');

// 2. Navigation Links
content = content.replace(/text-accent bg-alt-bg border border-border\/80/g, 'text-[#0B1F4D] bg-[#EAF2FF] border border-[#BFDBFE] rounded-[12px] shadow-[0_4px_12px_rgba(37,99,235,.08)]');
content = content.replace(/text-heading hover:text-highlight hover:bg-background border border-transparent/g, "text-[#334155] hover:text-[#2563EB] relative after:absolute after:bottom-[2px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center hover:scale-[1.02] transition-all duration-300 border border-transparent");

// 3. Dropdowns (Mega Menu)
content = content.replace(/absolute left-1\/2 -translate-x-1\/2 top-full w-\[640px\][^"]+/, 'absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-5 grid grid-cols-2 gap-3 animate-fade-in mt-1');
content = content.replace(/className="flex items-start gap-2\.5 p-2 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm hover:bg-background text-left transition-all group"/g, 'className="flex items-start gap-2.5 p-2 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"');
content = content.replace(/text-xs font-semibold text-heading group-hover:text-heading/g, 'text-xs font-semibold text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300');
content = content.replace(/bg-alt-bg text-body flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white/g, 'bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white');

// Search portfolio inside Mega Menu
content = content.replace(/col-span-2 mt-2 bg-background border border-border\/60 p-2\.5 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm flex items-center justify-between/g, 'col-span-2 mt-2 bg-[#F8FAFC] border border-[#E2E8F0] p-2.5 rounded-[12px] flex items-center justify-between');
content = content.replace(/text-\[11px\] text-body font-sans/g, 'text-[11px] text-[#64748B] font-sans');
content = content.replace(/text-\[11px\] font-mono font-semibold text-heading flex items-center gap-1 hover:text-black/g, 'text-[11px] font-mono font-semibold text-[#334155] flex items-center gap-1 hover:text-[#2563EB] transition-colors duration-300');
content = content.replace(/text-\[11px\] font-mono font-semibold text-heading flex items-center gap-1 hover:text-highlight/g, 'text-[11px] font-mono font-semibold text-[#334155] flex items-center gap-1 hover:text-[#2563EB] transition-colors duration-300');

// 4. Dropdowns (Legal)
content = content.replace(/absolute right-0 top-full w-\[300px\][^"]+/, 'absolute right-0 top-full w-[300px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,.08)] p-3 animate-fade-in mt-1 flex flex-col gap-1 z-50');
content = content.replace(/className="flex items-center gap-3 p-2\.5 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm hover:bg-background text-left transition-all group"/g, 'className="flex items-center gap-3 p-2.5 rounded-[12px] hover:bg-[#F8FAFC] text-left transition-all duration-300 group"');
content = content.replace(/text-sm font-medium text-heading group-hover:text-heading/g, 'text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors duration-300');

// 5. Search Icon
content = content.replace(/className="p-2 hover:bg-alt-bg rounded text-body hover:text-heading transition-colors focus:outline-none"/g, 'className="p-2 rounded text-[#334155] hover:text-[#2563EB] hover:bg-[#F8FAFC] transition-colors duration-300 focus:outline-none"');

// 6. Mobile Burger Menu Button
content = content.replace(/className="p-2\.5 hover:bg-alt-bg rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm text-body hover:text-heading transition-colors lg:hidden focus:outline-none"/g, 'className="p-2.5 hover:bg-[#F8FAFC] rounded-[12px] text-[#334155] hover:text-[#2563EB] transition-colors duration-300 lg:hidden focus:outline-none"');

// 7. Inquire Now Button
content = content.replace(/className="relative hidden md:inline-flex items-center gap-1\.5 px-3 lg:px-2 min-\[1440px\]:px-3 py-1\.5 bg-primary hover:bg-black text-white font-mono text-\[11px\] font-medium rounded border border-primary transition-all shadow-sm active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 shrink-0"/g, 
  'className="relative hidden md:inline-flex items-center gap-1.5 px-3 lg:px-2 min-[1440px]:px-3 py-1.5 text-white font-mono text-[11px] font-medium rounded-[12px] border-none cursor-pointer focus:outline-none shrink-0 bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] shadow-[0_12px_24px_rgba(37,99,235,.18)] hover:bg-[linear-gradient(135deg,#1D4ED8_0%,#0B1F4D_100%)] hover:-translate-y-[2px] transition-all duration-300"');

fs.writeFileSync(file, content);
console.log('Navbar update complete.');
