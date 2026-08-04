const fs = require('fs');
let content = fs.readFileSync('src/components/pages/About.tsx', 'utf8');
const matches = content.match(/src="[^"]+"/g);
console.log(matches);
