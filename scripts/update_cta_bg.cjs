const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update Section Background
content = content.replace(
  /bg-\[linear-gradient\(135deg,#0B1F4D_0%,#102A5E_45%,#163A78_100%\)\]/,
  'bg-[linear-gradient(135deg,#0B1F4D_0%,#12326B_50%,#1B4D96_100%)]'
);

// 2. Remove Grid
content = content.replace(
  /\s*<div className="absolute inset-0 bg-\[linear-gradient\(to_right,rgba\(255,255,255,0\.04\)_1px,transparent_1px\),linear-gradient\(to_bottom,rgba\(255,255,255,0\.04\)_1px,transparent_1px\)\] bg-\[size:3\.5rem_3\.5rem\]"><\/div>/,
  ''
);

// 3. Update Glow
content = content.replace(
  /<div className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-full max-w-\[600px\] aspect-square bg-\[rgba\(37,99,235,0\.12\)\] blur-\[140px\] rounded-full pointer-events-none"><\/div>/,
  '<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-[rgba(59,130,246,0.12)] blur-[180px] rounded-full pointer-events-none"></div>'
);

fs.writeFileSync(file, content);
console.log('CTA background and glow updated successfully.');
