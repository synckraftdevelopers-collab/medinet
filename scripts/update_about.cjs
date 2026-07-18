const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Page Header Section
content = content.replace(
  /<section className="bg-background border-b border-border py-16 relative overflow-hidden">/,
  '<section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_60%,#F1F5F9_100%)] border-b border-[#E2E8F0] py-16 relative overflow-hidden">'
);

// 2. Grid Background
content = content.replace(
  /<div className="absolute inset-0 bg-\[linear-gradient\(to_right,#e2e8f0_1px,transparent_1px\),linear-gradient\(to_bottom,#e2e8f0_1px,transparent_1px\)\] bg-\[size:3rem_3rem\] opacity-30"><\/div>/,
  '<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>'
);

// 3. Small Label
content = content.replace(
  /<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-alt-bg border border-border text-body text-\[10px\] font-mono font-medium tracking-wider uppercase mb-4">/,
  '<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">'
);
content = content.replace(
  /<span className="w-1\.5 h-1\.5 rounded-full bg-primary"><\/span>/,
  '<span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>'
);

// 4. Main Heading
content = content.replace(
  /<h1 className="text-4xl sm:text-5xl font-display font-medium text-heading tracking-tight leading-tight">\s*About Medinet Pharmaceuticals\s*<\/h1>/,
  '<h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative inline-block mb-3">\n            About Medinet Pharmaceuticals\n            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>\n          </h1>'
);

// 5. Paragraph Text
content = content.replace(
  /<p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl">/,
  '<p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.85] max-w-3xl">'
);

// 6. Left Quote Card
content = content.replace(
  /<div className="bg-background rounded border border-border p-8 shadow-sm">/,
  '<div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] rounded border border-[#DBEAFE] p-8 shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.12)] hover:-translate-y-[4px] transition-all duration-300 ease-[ease]">'
);

// 7. Quote Icon
content = content.replace(
  /<div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white font-mono text-lg rounded flex items-center justify-center shadow-none">/,
  '<div className="absolute -top-3 -left-3 w-8 h-8 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] text-[#FFFFFF] font-mono text-lg rounded flex items-center justify-center shadow-[0_10px_24px_rgba(37,99,235,.30)] z-10">'
);

// 8. Quote Text
content = content.replace(
  /<p className="text-body leading-relaxed italic text-xs sm:text-sm">/,
  '<p className="text-[#334155] leading-[1.7] italic text-xs sm:text-sm">'
);

// 9. Right Content
content = content.replace(
  /<span className="text-\[11px\] font-mono font-medium tracking-widest text-body uppercase block mb-3">/,
  '<span className="text-[11px] font-mono font-medium tracking-widest text-[#2563EB] uppercase block mb-3">'
);
content = content.replace(
  /<h2 className="text-3xl font-display font-medium text-heading tracking-tight leading-tight">\s*Quality, Ethics, and Patient Efficacy\s*<\/h2>/,
  '<h2 className="text-3xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">\n                <span className="text-[#2563EB] font-semibold">Quality</span>, <span className="text-[#2563EB] font-semibold">Ethics</span>, and Patient Efficacy\n              </h2>'
);
content = content.replace(
  /<p className="mt-6 text-body leading-relaxed text-sm">/,
  '<p className="mt-6 text-[#475569] leading-relaxed text-sm">'
);
content = content.replace(
  /<p className="mt-4 text-body leading-relaxed text-sm">/,
  '<p className="mt-4 text-[#475569] leading-relaxed text-sm">'
);

// Right Content Highlights
content = content.replace(
  /safety of the end patient/,
  '<span className="text-[#2563EB] font-semibold">safety of the end patient</span>'
);
content = content.replace(
  /certified bioequivalence clinical studies/,
  'certified <span className="text-[#2563EB] font-semibold">bioequivalence</span> clinical studies'
);

// Bullets underneath the Right Content (changing to match the new body/heading text)
content = content.replace(
  /<h4 className="font-semibold text-heading text-sm">Bioequivalence Certified<\/h4>/,
  '<h4 className="font-semibold text-[#0F172A] text-sm">Bioequivalence Certified</h4>'
);
content = content.replace(
  /<p className="text-xs text-body mt-0\.5">Matching reference innovator drug PK curves\.<\/p>/,
  '<p className="text-xs text-[#475569] mt-0.5">Matching reference innovator drug PK curves.</p>'
);
content = content.replace(
  /<h4 className="font-semibold text-heading text-sm">WHO-GMP Standard<\/h4>/,
  '<h4 className="font-semibold text-[#0F172A] text-sm">WHO-GMP Standard</h4>'
);
content = content.replace(
  /<p className="text-xs text-body mt-0\.5">Manufactured strictly in certified plants\.<\/p>/,
  '<p className="text-xs text-[#475569] mt-0.5">Manufactured strictly in certified plants.</p>'
);

fs.writeFileSync(file, content);
console.log('About Medinet section updated successfully.');
