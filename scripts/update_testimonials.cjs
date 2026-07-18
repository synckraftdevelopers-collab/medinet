const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Imports
content = content.replace(/import\s*\{\s*HeartPulse,/, 'import {\n  Quote,\n  CircleUserRound,\n  HeartPulse,');

// Isolate the section
const startPattern = '{/* Testimonials Endorsement Section */}';
const endPattern = 'export default function Home';

const startIndex = content.indexOf(startPattern);
let endIndex = content.indexOf(endPattern);
if (endIndex === -1) endIndex = content.length; // fallback

if (startIndex === -1) {
  throw new Error("Section not found");
}

let sectionContent = content.substring(startIndex, endIndex);

// 2. Section Background
sectionContent = sectionContent.replace(
  /<section className="py-20 bg-background border-t border-b border-border">/,
  '<section className="py-20 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">'
);

// 3. SectionHeader Replacement
const sectionHeaderRegex = /<SectionHeader\s*badge="Medical Feedback"\s*title="Trusted by Healthcare Professionals"\s*description="Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals\."\s*centered\s*\/>/;

const newSectionHeader = `<div className="max-w-3xl mb-12 mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-mono font-medium tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
              Medical Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#081F3A] tracking-tight leading-tight flex flex-col items-center">
              <span>Trusted by <span className="text-[#2563EB]">Healthcare</span> <span className="text-[#2563EB]">Professionals</span></span>
            </h2>
            <p className="mt-5 text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Leading clinicians, institutional pharmacists, and global distributors share their experiences in partnering with Medinet Pharmaceuticals.
            </p>
          </div>`;
sectionContent = sectionContent.replace(sectionHeaderRegex, newSectionHeader);

// 4. Card Container
const cardRegex = /<div className="bg-white border border-border p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left flex flex-col justify-between">/g;
const newCard = '<div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between hover:border-[#2563EB] hover:shadow-[0_28px_60px_rgba(37,99,235,.16)] hover:-translate-y-[5px]">';
sectionContent = sectionContent.replace(cardRegex, newCard);

// 5. Testimonial Text & Quotes
sectionContent = sectionContent.replace(
  /<p className="text-xs text-body leading-relaxed italic mb-6">/g,
  '<Quote className="w-8 h-8 text-[#2563EB] opacity-[0.15] mb-3" />\n              <p className="text-xs text-[#475569] leading-relaxed italic mb-6">'
);

sectionContent = sectionContent.replace(/&ldquo;/g, '');
sectionContent = sectionContent.replace(/&rdquo;/g, '');

// 6. Profile Icon Container
const profileIconRegex = /<div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-mono font-bold text-xs">\s*(DK|RI|SA)\s*<\/div>/g;
const newProfileIcon = `<div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#0B1F4D,#2563EB)] text-white flex items-center justify-center shrink-0">
                  <CircleUserRound className="w-6 h-6" />
                </div>`;
sectionContent = sectionContent.replace(profileIconRegex, newProfileIcon);

// 7. Doctor Name
sectionContent = sectionContent.replace(
  /<h4 className="font-display font-bold text-heading text-sm">/g,
  '<h4 className="font-display font-bold text-[#081F3A] text-sm">'
);

// 8. Designation
sectionContent = sectionContent.replace(
  /<p className="text-\[11px\] text-muted font-mono">/g,
  '<p className="text-[11px] text-[#2563EB] font-mono font-medium">'
);

// Combine back
content = content.substring(0, startIndex) + sectionContent + content.substring(endIndex);

fs.writeFileSync(file, content);
console.log('Testimonials section updated successfully.');
