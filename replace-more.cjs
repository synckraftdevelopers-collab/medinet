
const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /emerald-100/g, replace: 'blue-100' },
  { regex: /emerald-400/g, replace: 'blue-400' },
  { regex: /emerald-700/g, replace: 'blue-700' },
  { regex: /emerald-900/g, replace: 'blue-900' }
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

