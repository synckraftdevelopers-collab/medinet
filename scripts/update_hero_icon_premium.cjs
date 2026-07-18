const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /(<div className="w-14 h-14 bg-\[linear-gradient\(135deg,#0B1F4D_0%,#2563EB_100%\)\] rounded flex items-center justify-center text-white shrink-0 shadow-\[0_12px_28px_rgba\(37,99,235,\.25\)\] p-2\.5">)[\s\S]*?(<\/div>)/;

const newDiv = `$1
                    <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.5L4 6V11C4 16.5 7.5 21 12 23C16.5 21 20 16.5 20 11V6L12 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12.5L11 15.5L16 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5V8M10.5 6.5H13.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="19.5" r="1.5" fill="#0D9488"/>
                    </svg>
                  $2`;

content = content.replace(regex, newDiv);

fs.writeFileSync(file, content);
console.log('Premium quality icon injected successfully via regex.');
