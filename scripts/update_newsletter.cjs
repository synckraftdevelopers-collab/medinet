const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const startPattern = '<form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">';
const endPattern = '</form>';

const startIndex = content.indexOf(startPattern);
let endIndex = content.indexOf(endPattern, startIndex);

if (startIndex === -1 || endIndex === -1) {
  throw new Error("Form not found");
}
endIndex += endPattern.length;

const newForm = `<form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[rgba(255,255,255,0.08)] border border-[rgba(96,165,250,0.18)] rounded-[8px] text-[#FFFFFF] text-xs shadow-[0_8px_20px_rgba(11,31,77,.15)] focus:outline-none focus:border-[#38BDF8] focus:bg-[rgba(255,255,255,0.12)] focus:ring-4 focus:ring-[rgba(56,189,248,0.18)] placeholder:text-[#94A3B8] transition-all duration-300 ease-in-out"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#60A5FA]" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_100%)] text-[#0B1F4D] shadow-[0_12px_28px_rgba(255,255,255,0.12)] hover:bg-[linear-gradient(135deg,#DBEAFE_0%,#EFF6FF_100%)] hover:text-[#2563EB] hover:shadow-[0_18px_40px_rgba(37,99,235,.20)] hover:-translate-y-[2px] font-mono text-xs font-semibold rounded-[8px] transition-all duration-300 ease-in-out flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 group/sub"
              >
                {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <Send className="w-3.5 h-3.5 text-[#2563EB] group-hover/sub:text-[#0D9488] transition-colors duration-300 ease-in-out" />
              </button>
            </form>`;

content = content.substring(0, startIndex) + newForm + content.substring(endIndex);

fs.writeFileSync(file, content);
console.log('Newsletter inputs updated successfully.');
