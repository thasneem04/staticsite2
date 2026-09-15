import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const updated = content.replace(/<img(?!([^>]*loading="lazy"))/g, '<img loading="lazy"');
      if (content !== updated) {
        fs.writeFileSync(fullPath, updated);
        console.log('Updated lazy ' + fullPath);
      }
    }
  }
};

walk(path.join(process.cwd(), 'src'));
