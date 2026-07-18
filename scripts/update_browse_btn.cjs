const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetButtonRegex = /<button\s*onClick=\{\(\) => navigate\("products"\)\}\s*className="mt-4 sm:mt-0 px-4 py-2 bg-\[#FFFFFF\] border border-\[#CBD5E1\] text-\[#0B1F4D\] hover:bg-\[#DBEAFE\] hover:border-\[#2563EB\] hover:text-\[#2563EB\] hover:shadow-\[0_10px_25px_rgba\(37,99,235,\.18\)\] font-mono text-xs font-semibold rounded-\[8px\] transition-all duration-300 flex items-center gap-1\.5 group\/browse"\s*>\s*BROWSE FULL CATALOGUE <ArrowRight className="w-3\.5 h-3\.5 transition-transform group-hover\/browse:translate-x-1" \/>\s*<\/button>/;

const newButton = `<button
              onClick={() => navigate("products")}
              className="mt-4 sm:mt-0 px-4 py-2 bg-[#FFFFFF] border border-[#CBD5E1] text-[#0B1F4D] rounded-[14px] shadow-[0_8px_20px_rgba(11,31,77,.06)] font-mono text-xs font-semibold transition-all duration-300 ease-[ease] flex items-center gap-1.5 group/browse hover:bg-[linear-gradient(135deg,#EFF6FF_0%,#DBEAFE_100%)] hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_15px_35px_rgba(37,99,235,.18)] hover:-translate-y-[2px] active:!bg-none active:!bg-[#DBEAFE] active:!text-[#0B1F4D] focus:outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(37,99,235,.15)]"
            >
              BROWSE FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] transition-all duration-300 ease-[ease] group-hover/browse:text-[#0D9488] group-hover/browse:translate-x-[6px]" />
            </button>`;

if (targetButtonRegex.test(content)) {
  content = content.replace(targetButtonRegex, newButton);
  fs.writeFileSync(file, content);
  console.log('Button updated successfully.');
} else {
  console.log('Regex did not match.');
}
