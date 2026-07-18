const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '{/* Leadership Team Section */}';
const startIndex = content.indexOf(startMarker);

if (startIndex === -1) {
    console.error("Could not find start marker");
    process.exit(1);
}

const endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;

const newSection = `{/* Leadership Team Section */}
      <section className="py-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-4 shadow-[0_4px_12px_rgba(37,99,235,.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight relative w-fit mx-auto mb-3">
              Guiding Our Scientific Vision
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#2563EB,#38BDF8)] opacity-70 rounded-full"></span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] font-sans max-w-3xl mx-auto">
              Our steering committee brings together elite clinical minds, pharmaceutical licensing veterans, and regulatory compliance leaders with decadal experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader) => {
              let accentClass = "border-t-[#2563EB]";
              let badgeText = "MD";
              
              const roleLower = leader.role.toLowerCase();
              if (roleLower.includes("founder")) {
                accentClass = "border-t-[#2563EB]";
                badgeText = "MD";
              } else if (roleLower.includes("ceo") || roleLower.includes("chief")) {
                accentClass = "border-t-[#0D9488]";
                badgeText = "CEO";
              } else if (roleLower.includes("research") || roleLower.includes("r&d")) {
                accentClass = "border-t-[#38BDF8]";
                badgeText = "R&D";
              } else if (roleLower.includes("quality") || roleLower.includes("qa") || roleLower.includes("compliance")) {
                accentClass = "border-t-[#2563EB]";
                badgeText = "QA";
              }

              return (
                <div
                  key={leader.id}
                  className={\`bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] \${accentClass} rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.15)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] overflow-hidden group text-left\`}
                >
                  <div className="relative aspect-square overflow-hidden bg-alt-bg shadow-[0_8px_24px_rgba(11,31,77,.08)] z-10">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[400ms] ease-[ease] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-xs text-white leading-relaxed line-clamp-3">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-semibold text-[#2563EB] uppercase tracking-[0.08em] block">
                        {leader.role}
                      </span>
                      <span className="inline-flex items-center justify-center bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-full px-[10px] py-[6px] text-[9px] font-bold tracking-wider shrink-0 leading-none">
                        {badgeText}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[#0F172A] text-sm mt-1 line-clamp-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-[#64748B] font-mono mt-1.5 leading-[1.7]">
                      {leader.qualification}
                    </p>
                    <p className="text-xs text-[#475569] leading-[1.8] mt-3 line-clamp-2 sm:hidden block">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>`;

content = content.slice(0, startIndex) + newSection + content.slice(endIndex);

fs.writeFileSync(file, content);
console.log('Leadership section updated successfully.');
