
const fs = require('fs');
const path = require('path');

const replacements = [
  // Hex Colors
  { regex: /#14532[Dd]/g, replace: '#0A192F' }, 
  { regex: /#166534/g, replace: '#1D4ED8' },    
  { regex: /#059669/g, replace: '#1D4ED8' },    
  { regex: /#[Ff]59[Ee]0[Bb]/g, replace: '#E11D48' }, 
  { regex: /#34[Dd]399/g, replace: '#38BDF8' }, 
  { regex: /#[Ff][Cc][Ff][Dd][Ff][Bb]/g, replace: '#F8FAFC' }, 
  { regex: /#[Ff]3[Ff]9[Ff]4/g, replace: '#F1F5F9' }, 
  { regex: /#064[Ee]3[Bb]/g, replace: '#0A192F' }, 
  { regex: /#1[Ff]2937/g, replace: '#0F172A' }, 
  { regex: /#4[Bb]5563/g, replace: '#475569' }, 
  { regex: /#9[Cc][Aa]3[Aa][Ff]/g, replace: '#94A3B8' }, 
  { regex: /#[Dd]1[Ff][Aa][Ee]5/g, replace: '#E2E8F0' }, 
  { regex: /#[Aa]7[Ff]3[Dd]0/g, replace: '#CBD5E1' }, 
  { regex: /#0[Dd]9488/g, replace: '#1D4ED8' },
  { regex: /#0[Bb]1[Ff]4[Dd]/g, replace: '#0A192F' },
  { regex: /#047857/g, replace: '#1E40AF' }, 
  { regex: /#[Ee][Cc][Ff][Dd][Ff]5/g, replace: '#EFF6FF' }, 
  { regex: /#[Ff]0[Ff][Dd][Ff]4/g, replace: '#F8FAFC' },
  // RGBAs
  { regex: /rgba\(\s*20\s*,\s*83\s*,\s*45\s*,/g, replace: 'rgba(10, 25, 47,' },
  { regex: /rgba\(\s*5\s*,\s*150\s*,\s*105\s*,/g, replace: 'rgba(29, 78, 216,' },
  { regex: /rgba\(\s*6\s*,\s*78\s*,\s*59\s*,/g, replace: 'rgba(10, 25, 47,' },
  // Tailwind classes
  { regex: /emerald-500/g, replace: 'blue-500' },
  { regex: /emerald-600/g, replace: 'blue-600' },
  { regex: /emerald-200/g, replace: 'blue-200' },
  { regex: /emerald-300/g, replace: 'blue-300' },
  { regex: /emerald-50/g, replace: 'blue-50' }
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;
  
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    changedFiles++;
  }
});

console.log('Modified ' + changedFiles + ' files.');

