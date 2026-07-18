const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<motion\.div\s*initial=\{\{\s*opacity:\s*0,\s*y:\s*15\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*transition=\{\{\s*duration:\s*0\.5\s*\}\}\s*>/;

const newMotionDiv = `<motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Clean background overlay to hide grid for readability */}
                <div className="absolute -inset-8 sm:-inset-16 bg-[rgba(255,255,255,0.96)] blur-2xl md:blur-3xl max-w-[760px] rounded-[32px] -z-10 pointer-events-none"></div>`;

content = content.replace(regex, newMotionDiv);

fs.writeFileSync(file, content);
console.log('Hero background overlay updated via regex.');
