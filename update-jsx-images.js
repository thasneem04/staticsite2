import fs from 'fs';
import path from 'path';

const dirs = [
  path.join(process.cwd(), 'src', 'components'),
  path.join(process.cwd(), 'src', 'pages'),
  path.join(process.cwd(), 'src', 'components', 'home'),
];

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Only replace references in /images/ directory to avoid hitting logos in root or external svgs.
  const updated = content.replace(/\/images\/([a-zA-Z0-9_]+)\.(jpg|png)/g, '/images/$1.webp');
  if (content !== updated) {
    fs.writeFileSync(filePath, updated);
    console.log(`Updated ${filePath}`);
  }
};

const walk = (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
};

dirs.forEach(walk);
