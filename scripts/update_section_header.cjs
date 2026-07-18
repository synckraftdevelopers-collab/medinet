const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<SectionHeader\s*badge="Therapeutic Segments"\s*title="Comprehensive Healthcare Formulations"\s*description="We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research\."\s*centered\s*\/>/;

const replacement = `<div className="relative z-10 max-w-3xl mb-12 mx-auto text-center flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_60%)] -z-10 pointer-events-none rounded-full"></div>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-[11px] font-mono font-medium tracking-wider uppercase mb-5 hover:bg-[#DBEAFE] transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
              Therapeutic Segments
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0B1F4D] tracking-tight leading-tight flex flex-col items-center">
              <span>Comprehensive <span className="text-[#2563EB]">Healthcare</span> <span className="text-[#2563EB]">Formulations</span></span>
              <span className="mt-5 block w-[180px] h-[4px] rounded-full bg-[linear-gradient(90deg,#2563EB,#0D9488)]"></span>
            </h2>
            
            <p className="mt-5 text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
              We develop and distribute highly effective medicines covering a broad array of therapeutic disciplines, backed by targeted formulation research.
            </p>
          </div>`;

content = content.replace(regex, replacement);

fs.writeFileSync(file, content);
console.log('Section header styled successfully.');
