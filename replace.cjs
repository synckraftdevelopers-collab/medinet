const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:/Users/HP/OneDrive/Desktop/MediNet/src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('PremiumFeatureIcon.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      if (content.includes('CheckCircle')) {
        // Find if PremiumFeatureIcon is imported
        if (!content.includes('PremiumFeatureIcon')) {
          // Add import at the top
          // Count depth from src
          const relativePath = path.relative(path.dirname(fullPath), path.join(srcDir, 'components', 'PremiumFeatureIcon'));
          const importPath = relativePath.replace(/\\/g, '/');
          const importStatement = `import { PremiumFeatureIcon } from '${importPath}';\n`;
          content = importStatement + content;
        }

        // Replace CheckCircle that are used as feature icons
        // e.g., <CheckCircle className=\"...\" />
        content = content.replace(/<CheckCircle2?\s+className=[^>]+>/g, '<PremiumFeatureIcon />');
        content = content.replace(/<CheckCircle\s*\/>/g, '<PremiumFeatureIcon />');

        // Update classes for layout
        // items-start gap-3 => items-center gap-[20px]
        content = content.replace(/flex items-start gap-3/g, 'flex items-center gap-[20px]');
        content = content.replace(/flex gap-3/g, 'flex items-center gap-[20px]');
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(srcDir);
