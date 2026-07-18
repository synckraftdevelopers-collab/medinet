const fs = require('fs');

// 1. Update data.ts
const dataFile = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/data.ts';
let dataContent = fs.readFileSync(dataFile, 'utf8');
dataContent = dataContent.replace(/iconName: "Stomach"/, 'iconName: "Droplet"');
fs.writeFileSync(dataFile, dataContent);

// 2. Update Home.tsx
const homeFile = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let homeContent = fs.readFileSync(homeFile, 'utf8');

homeContent = homeContent.replace(/\s*Stomach,\n/, '\n'); // Remove Stomach from imports and iconMap
homeContent = homeContent.replace(/\s*Stomach,/, ''); 

fs.writeFileSync(homeFile, homeContent);
console.log('Fixed Stomach icon error.');
