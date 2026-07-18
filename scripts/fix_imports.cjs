const fs = require('fs');
const file = 'c:/Users/HP/OneDrive/Desktop/MediNet/src/components/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix the motion/react import by removing the incorrectly placed icons
content = content.replace(
  /import \{\s*FlaskConical,\s*Handshake,\s*BadgeCheck,\s*motion \} from "motion\/react";/,
  'import { motion } from "motion/react";'
);

// Add the icons to the lucide-react import
content = content.replace(
  /import \{\s*ArrowRight,/,
  'import {\n  FlaskConical,\n  Handshake,\n  BadgeCheck,\n  ArrowRight,'
);

fs.writeFileSync(file, content);
console.log('Fixed imports successfully.');
