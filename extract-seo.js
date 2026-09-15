import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(pagesDir, f), 'utf8');
  console.log(`--- ${f} ---`);
  console.log('TITLE:', content.match(/title="([^"]+)"/)?.[1]);
  console.log('DESC:', content.match(/description="([^"]+)"/)?.[1]);
  console.log('H1:', content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi));
});
