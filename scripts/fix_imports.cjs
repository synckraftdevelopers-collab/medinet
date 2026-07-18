const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix Imports
content = content.replace(/\bHeartPulse,/, 'Newspaper,\n  Presentation,\n  HeartPulse,');

fs.writeFileSync(file, content);
console.log("Imports fixed successfully");
