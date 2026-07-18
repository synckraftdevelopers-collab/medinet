const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Container and Glow
const regexColSpan = /<div className="lg:col-span-5">/;
const newColSpan = `<div className="lg:col-span-5 relative z-10">
              <div className="absolute top-[-20%] -left-10 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.03)_0%,transparent_70%)] -z-10 pointer-events-none"></div>`;
content = content.replace(regexColSpan, newColSpan);

// 2. Corporate Profile Badge
const regexBadge = /<span className="text-\[11px\] font-mono font-medium tracking-widest text-body uppercase block mb-3">\s*\/\/ CORPORATE PROFILE\s*<\/span>/;
const newBadge = `<span className="inline-flex items-center px-3 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-mono font-medium tracking-widest uppercase mb-4">
                <span className="text-[#0D9488] mr-1.5">//</span> <span className="text-[#2563EB]">CORPORATE PROFILE</span>
              </span>`;
content = content.replace(regexBadge, newBadge);

// 3. Heading and Left Accent Line
const regexHeading = /<h2 className="text-3xl sm:text-4xl font-display font-medium text-heading tracking-tight leading-tight">\s*About Medinet Pharmaceutical Marketing\s*<\/h2>/;
const newHeading = `<h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight relative pl-6">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[80px] rounded-full bg-[linear-gradient(to_bottom,#2563EB,#0D9488)]"></span>
                About <span className="text-[#2563EB]">Medinet</span> <span className="text-[#2563EB]">Pharmaceutical</span> Marketing
              </h2>`;
content = content.replace(regexHeading, newHeading);

// 4. Paragraphs
const regexPara1 = /<p className="mt-6 text-body leading-relaxed text-sm">/g;
const newPara1 = `<p className="mt-6 text-[#475569] leading-relaxed text-sm">`;
content = content.replace(regexPara1, newPara1);

const regexPara2 = /<p className="mt-4 text-body leading-relaxed text-sm">/g;
const newPara2 = `<p className="mt-4 text-[#475569] leading-relaxed text-sm">`;
content = content.replace(regexPara2, newPara2);

fs.writeFileSync(file, content);
console.log('About section styled successfully.');
