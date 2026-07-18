const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/About.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldMissionCard = `<div className="bg-white border border-border p-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left relative overflow-hidden group hover:border-slate-450 transition-all">
              <div className="w-10 h-10 bg-alt-bg rounded flex items-center justify-center text-heading mb-6">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-bold text-heading text-xl mb-4">Our Corporate Mission</h3>
              <p className="text-body leading-relaxed text-sm">
                To discover, license, and market high-quality, bioequivalent formulations across key therapeutic areas, and distribute them efficiently to improve patient health outcomes worldwide. We exist to make advanced healthcare accessible, ethical, and continuous.
              </p>
            </div>`;

const newMissionCard = `<div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(37,99,235,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Corporate Mission</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To discover, license, and market high-<span className="text-[#2563EB] font-semibold">Quality</span>, <span className="text-[#2563EB] font-semibold">Bioequivalent</span> formulations across key therapeutic areas, and distribute them efficiently to improve <span className="text-[#2563EB] font-semibold">Patient Care</span> worldwide. We exist to make advanced healthcare <span className="text-[#2563EB] font-semibold">Accessibility</span> a reality, maintaining ethical and continuous supply.
              </p>
            </div>`;

const oldVisionCard = `<div className="bg-white border border-border p-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left relative overflow-hidden group hover:border-slate-450 transition-all">
              <div className="w-10 h-10 bg-alt-bg rounded flex items-center justify-center text-heading mb-6">
                <Eye className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-bold text-heading text-xl mb-4">Our Long-term Vision</h3>
              <p className="text-body leading-relaxed text-sm">
                To rank among the most trusted global names in pharmaceutical licensing and marketing. We aim to continuously expand our portfolio in critical unmet segments like Oncology and CNS, maintaining zero-defect quality standards and sustainable strategic partnerships across all continents.
              </p>
            </div>`;

const newVisionCard = `<div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] border border-[#DBEAFE] border-t-[3px] border-t-[rgba(56,189,248,0.80)] p-8 rounded-card shadow-[0_18px_40px_rgba(11,31,77,.08)] hover:border-[#60A5FA] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)] hover:-translate-y-[6px] transition-all duration-300 ease-[ease] text-left relative overflow-hidden group">
              <div className="w-14 h-14 bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] group-hover:bg-[linear-gradient(135deg,#38BDF8_0%,#2563EB_100%)] rounded-[16px] shadow-[0_12px_30px_rgba(37,99,235,.30)] flex items-center justify-center text-[#FFFFFF] mb-6 transition-all duration-300 group-hover:scale-[1.08]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-[#0F172A] text-xl mb-4">Our Long-term Vision</h3>
              <p className="text-[#475569] leading-[1.8] text-sm">
                To rank among the most trusted <span className="text-[#2563EB] font-semibold">Global</span> names in pharmaceutical licensing and marketing. Our <span className="text-[#2563EB] font-semibold">Vision</span> is to continuously drive <span className="text-[#2563EB] font-semibold">Innovation</span> in critical unmet segments like Oncology and CNS, maintaining zero-defect <span className="text-[#2563EB] font-semibold">Quality</span> standards and sustainable strategic partnerships across all continents.
              </p>
            </div>`;

if (content.includes(oldMissionCard)) {
    content = content.replace(oldMissionCard, newMissionCard);
} else {
    console.error("Mission card not found. The string might not match.");
}

if (content.includes(oldVisionCard)) {
    content = content.replace(oldVisionCard, newVisionCard);
} else {
    console.error("Vision card not found. The string might not match.");
}

fs.writeFileSync(file, content);
console.log('Mission and Vision cards updated successfully.');
