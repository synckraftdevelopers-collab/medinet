const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\* Global B2B Call To Action Section \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Global B2B Call To Action Section */}
      <section className="py-20 bg-[linear-gradient(135deg,#0B1F4D_0%,#102A5E_45%,#163A78_100%)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-[rgba(37,99,235,0.12)] blur-[140px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.18)] text-[#93C5FD] text-[10px] font-mono font-medium tracking-wider uppercase mb-6 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
            PARTNER WITH MEDINET
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#FFFFFF] tracking-tight leading-tight relative z-10">
            Scale Your <span className="text-[#93C5FD]">Pharmaceutical</span> Distribution <span className="text-[#93C5FD]">Globally</span>
          </h2>
          <p className="mt-6 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl mx-auto relative z-10">
            Leverage our premium bioequivalent product portfolio, dedicated regulatory support, and flexible third-party manufacturing arrangements to boost your market dominance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <button
              onClick={() => navigate("business-partners")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FFFFFF] hover:bg-[#DBEAFE] text-[#0B1F4D] hover:text-[#2563EB] hover:shadow-[0_15px_35px_rgba(255,255,255,.18)] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] hover:-translate-y-[2px] active:scale-98 group/primary"
            >
              PARTNER INQUIRY FORM <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover/primary:text-[#0D9488] transition-colors duration-300" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.22)] hover:border-[#38BDF8] text-[#FFFFFF] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] hover:-translate-y-[2px] active:scale-98"
            >
              CONTACT OFFICES
            </button>
          </div>
        </div>
      </section>`;

if (regex.test(content)) {
  content = content.replace(regex, newSection);
  fs.writeFileSync(file, content);
  console.log('CTA Section updated successfully.');
} else {
  console.log('Regex did not match.');
}
