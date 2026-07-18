const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Icons
if (!content.includes('FlaskConical')) {
  content = content.replace(/Briefcase\s*\} from "lucide-react";/, 'Briefcase,\n  FlaskConical,\n  ShieldCheck,\n  HeartHandshake,\n  Handshake\n} from "lucide-react";');
}

// 2. Replace coreValues array
const newCoreValues = `const coreValues = [
    {
      title: "Scientific Ethics",
      description: <>We verify therapeutic equivalence curves on all batches, ensuring unyielding <span className="text-[#2563EB] font-semibold">Ethics</span> in every formulation.</>,
      icon: FlaskConical,
      accent: "border-t-[#2563EB]"
    },
    {
      title: "Uncompromised Quality",
      description: <>We work exclusively with <span className="text-[#2563EB] font-semibold">WHO-GMP</span> compliant facilities. Our stringent <span className="text-[#2563EB] font-semibold">Quality</span> assurance meets global standards.</>,
      icon: ShieldCheck,
      accent: "border-t-[#0D9488]"
    },
    {
      title: "Patient Accessibility",
      description: <>We believe life-saving therapeutics must remain affordable to ensure continuous <span className="text-[#2563EB] font-semibold">Accessibility</span> for all.</>,
      icon: HeartHandshake,
      accent: "border-t-[#38BDF8]"
    },
    {
      title: "Dynamic Collaboration",
      description: <>We build mutually lucrative <span className="text-[#2563EB] font-semibold">Partnership</span> models with leading <span className="text-[#2563EB] font-semibold">Healthcare</span> distributors globally.</>,
      icon: Handshake,
      accent: "border-t-[#2563EB]"
    }
  ];`;

content = content.replace(/const coreValues = \[\s*\{\s*title: "Scientific Ethics"[\s\S]*?\}\s*\];/, newCoreValues);

// 3. Replace SectionHeader
const newSectionHeader = `<div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mx-auto mb-3">
              The Pillars of Medinet
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] font-sans max-w-3xl">
              Our organizational culture is guided by clear, unyielding <span className="text-[#2563EB] font-semibold">Ethics</span> that dictate how we conduct business, evaluate scientific formulations, and interact with <span className="text-[#2563EB] font-semibold">Healthcare</span> practitioners.
            </p>
          </div>`;

content = content.replace(/<SectionHeader\s*badge="Core Values"[\s\S]*?\/>/, newSectionHeader);

// 4. Replace Map Iteration
const newMap = `{coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div key={idx} className={\`bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] \${val.accent} p-6 rounded-[24px] shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.15)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left group\`}>
                  <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-4 transition-all duration-300 group-hover:scale-[1.08]">
                    <ValueIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-[#0F172A] text-sm mb-2">{val.title}</h4>
                  <p className="text-xs text-[#475569] leading-[1.8]">{val.description}</p>
                </div>
              );
            })}`;

content = content.replace(/\{coreValues\.map\(\(val, idx\) => \{[\s\S]*?\}\)\}/, newMap);

fs.writeFileSync(file, content);
console.log('Core Values updated successfully.');
