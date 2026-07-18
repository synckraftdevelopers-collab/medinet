const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/BusinessPartners.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Container
content = content.replace(/className="[^"]*rounded-card shadow-card[^"]*p-6 sm:p-8[^"]*text-left"/g, 'className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] p-6 sm:p-8 text-left transition-all duration-300"');

// 2. Header
content = content.replace(/border-b border-border pb-4 mb-6/g, 'border-b-2 border-[#2563EB] pb-4 mb-6');
content = content.replace(/<Handshake className="w-5 h-5 text-[^"]+" \/>/, '<Handshake className="w-5 h-5 text-[#0B1F4D]" />');
content = content.replace(/<h3 className="font-display font-bold text-[^"]+ text-base">Partner Proposal Form<\/h3>/, '<h3 className="font-display font-bold text-[#0B1F4D] text-base">Partner Proposal Form</h3>');
content = content.replace(/<p className="text-\[10px\] text-[^"]+ font-mono">Establish a robust corporate connection<\/p>/, '<p className="text-[10px] text-[#64748B] font-mono">Establish a robust corporate connection</p>');

// 3. Labels
content = content.replace(/className="text-\[10px\] font-mono text-[^ ]+ (uppercase tracking-wider|tracking-wider uppercase) block"/g, 'className="text-[10px] font-mono text-[#334155] uppercase tracking-wider block"');
content = content.replace(/ \*<\/label>/g, ' <span className="text-[#DC2626] font-bold">*</span></label>');

// 4. Inputs & Textarea
content = content.replace(/className=\{`w-full mt-1\.5 px-3 py-2 bg-[^ ]+ border rounded text-xs text-[^ ]+ placeholder:text-[^ ]+ focus:outline-none focus:border-[^ ]+ transition-all \$\{\s*errors\.([a-zA-Z]+) \? "[^"]+" : "[^"]+"\s*\}`\}/g, 
(match, field) => {
    return `className={\`w-full mt-1.5 px-3 py-2 bg-[#F8FAFC] border rounded-[12px] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none transition-all duration-300 hover:border-[#93C5FD] hover:bg-[#FFFFFF] focus:bg-[#FFFFFF] \${errors.${field} ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-4 focus:ring-[rgba(220,38,38,.15)]" : "border-[#CBD5E1] focus:border-[#2563EB] focus:ring-4 focus:ring-[rgba(37,99,235,.15)]"}\`}`;
});

// 5. Select
content = content.replace(/className="w-full mt-1\.5 px-3 py-2 bg-[^"]+appearance-none bg-\[url[^"]+"/g, 
`className="w-full mt-1.5 px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[rgba(37,99,235,.15)] focus:bg-[#FFFFFF] transition-all duration-300 hover:border-[#93C5FD] hover:bg-[#FFFFFF] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_0.5rem_center] bg-no-repeat"`);

// 6. Submit Button
content = content.replace(/className="w-full py-2\.5 bg-[^"]+ flex items-center justify-center gap-2 cursor-pointer"/,
`className="w-full py-2.5 text-white font-medium text-xs sm:text-sm rounded-[12px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_12px_30px_rgba(37,99,235,.25)] hover:shadow-[0_16px_40px_rgba(37,99,235,.35)] hover:-translate-y-[2px] bg-[linear-gradient(135deg,#0B1F4D_0%,#2563EB_100%)] hover:bg-[linear-gradient(135deg,#1D4ED8_0%,#0B1F4D_100%)] border-none"`);

fs.writeFileSync(file, content);
console.log('Update complete.');
