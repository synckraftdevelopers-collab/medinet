const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

const fixedPart = `      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(37,99,235,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Corporate Mission</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To discover, license, and market high-<span className="text-[#2563EB] font-semibold">Quality</span>, <span className="text-[#2563EB] font-semibold">Bioequivalent</span> formulations across key therapeutic areas, and distribute them efficiently to improve <span className="text-[#2563EB] font-semibold">Patient Care</span> worldwide. We exist to make advanced healthcare <span className="text-[#2563EB] font-semibold">Accessibility</span> a reality, maintaining ethical and continuous supply.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(56,189,248,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Long-term Vision</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To rank among the most trusted <span className="text-[#2563EB] font-semibold">Global</span> names in pharmaceutical licensing and marketing. Our <span className="text-[#2563EB] font-semibold">Vision</span> is to continuously drive <span className="text-[#2563EB] font-semibold">Innovation</span> in critical unmet segments like Oncology and CNS, maintaining zero-defect <span className="text-[#2563EB] font-semibold">Quality</span> standards and sustainable strategic partnerships across all continents.
              </p>
            </div>
          </div>

          <SectionHeader
            badge="Core Values"
            title="The Pillars of Medinet"
            description="Our organizational culture is guided by clear, unyielding ethical principles that dictate how we conduct business, evaluate scientific formulations, and interact with healthcare practitioners."
            centered
          />`;

const searchString = '      </section>\r\n            description="Our organizational culture is guided by clear, unyielding ethical principles that dictate how we conduct business, evaluate scientific formulations, and interact with healthcare practitioners."\r\n            centered\r\n          />';
const searchStringLF = searchString.replace(/\r\n/g, '\n');

if (content.includes(searchString)) {
    content = content.replace(searchString, fixedPart);
    console.log('Restored About.tsx successfully (CRLF).');
} else if (content.includes(searchStringLF)) {
    content = content.replace(searchStringLF, fixedPart);
    console.log('Restored About.tsx successfully (LF).');
} else {
    console.log('Could not find the target string to replace.');
    
    // Fallback logic
    const lines = content.split('\n');
    const idx = lines.findIndex(l => l.includes('description="Our organizational culture'));
    if (idx > -1) {
        lines.splice(idx - 1, 4, fixedPart);
        content = lines.join('\n');
        console.log('Restored using fallback line splicing.');
    }
}

fs.writeFileSync(file, content);
