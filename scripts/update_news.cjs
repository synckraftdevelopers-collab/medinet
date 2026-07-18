const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Imports
content = content.replace(/import\s*\{\s*HeartPulse,/, 'import {\n  Newspaper,\n  Presentation,\n  HeartPulse,');

// Find section bounds
const startPattern = '{/* Latest Corporate Updates Section */}';
const endPattern = '{/* Global B2B Call To Action Section */}';

const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex === -1 || endIndex === -1) {
  throw new Error("Section not found");
}

let sectionContent = content.substring(startIndex, endIndex);

// Background
sectionContent = sectionContent.replace(
  /<section className="py-20 bg-white border-b border-border">/,
  '<section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">'
);

// View All Button
const btnRegex = /<button\s*onClick=\{\(\) => navigate\("news-events"\)\}\s*className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-border hover:bg-background text-body font-mono text-xs font-semibold rounded transition-all shadow-sm flex items-center gap-1\.5"\s*>\s*VIEW ALL PRESS RELEASES <ArrowRight className="w-3\.5 h-3\.5" \/>\s*<\/button>/;
const newBtn = `<button
              onClick={() => navigate("news-events")}
              className="mt-4 sm:mt-0 px-4 py-2 bg-[#FFFFFF] border border-[#CBD5E1] text-[#0B1F4D] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-[ease] flex items-center gap-1.5 group/press hover:bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_12px_28px_rgba(37,99,235,.18)]"
            >
              VIEW ALL PRESS RELEASES <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover/press:text-[#0D9488] transition-colors duration-300" />
            </button>`;
sectionContent = sectionContent.replace(btnRegex, newBtn);

// Cards
const gridRegex = /<div className="grid grid-cols-1 md:grid-cols-3 gap-6">[\s\S]*?<\/section>/;
const newGrid = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => {
              let badgeBg = "bg-[#DBEAFE]";
              let badgeText = "text-[#1D4ED8]";
              let BadgeIcon = Presentation;
              
              if (news.category === "News") {
                badgeBg = "bg-[#EFF6FF]";
                badgeText = "text-[#2563EB]";
                BadgeIcon = Newspaper;
              } else if (news.category === "CSR") {
                badgeBg = "bg-[#DCFCE7]";
                badgeText = "text-[#16A34A]";
                BadgeIcon = HeartHandshake;
              }

              return (
              <div
                key={news.id}
                className="bg-[#FFFFFF] border border-[#CBD5E1] border-t-4 border-t-transparent rounded-[24px] shadow-[0_20px_45px_rgba(11,31,77,.08)] transition-all duration-300 ease-[ease] text-left flex flex-col justify-between overflow-hidden hover:border-[#2563EB] hover:border-t-[#2563EB] hover:shadow-[0_30px_70px_rgba(37,99,235,.18)] hover:-translate-y-[6px] group/news"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className={\`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider \${badgeBg} \${badgeText} px-2.5 py-1 rounded-[10px] font-semibold\`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {news.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">{news.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-[#081F3A] text-lg group-hover/news:text-[#2563EB] transition-colors line-clamp-2 mt-2">
                    {news.title}
                  </h3>
                  <p className="mt-3.5 text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="px-6 py-4 border-t border-[#E2E8F0] mt-auto flex justify-between items-center bg-[#F8FAFC]">
                  <span className="text-[11px] text-[#2563EB] font-mono font-semibold group-hover/news:text-[#0D9488] transition-colors">Read complete release</span>
                  <button
                    onClick={() => navigate("news-events", { id: news.id })}
                    className="flex items-center justify-center transition-transform duration-300 ease-[ease]"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#2563EB] group-hover/news:text-[#0D9488] group-hover/news:translate-x-[6px] transition-all duration-300" />
                  </button>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
`;

sectionContent = sectionContent.replace(gridRegex, newGrid);

content = content.substring(0, startIndex) + sectionContent + content.substring(endIndex);

fs.writeFileSync(file, content);
console.log("News section styled safely and successfully");
