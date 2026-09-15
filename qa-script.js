import fs from 'fs';
import path from 'path';

const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html', '404.html'];
const dist = path.join(process.cwd(), 'dist');

let allGood = true;

for (const file of files) {
  const filePath = path.join(dist, file);
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING: ${file}`);
    allGood = false;
    continue;
  }
  
  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`\n--- ${file} ---`);
  
  // Extract tags
  const title = html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1];
  const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i)?.[1] || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"/i)?.[1];
  const canon = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  
  const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i)?.[1];
  const ogDesc = html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"/i)?.[1];
  const ogImage = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i)?.[1];
  
  const twCard = html.match(/<meta[^>]*name="twitter:card"[^>]*content="([^"]+)"/i)?.[1];
  
  console.log(`TITLE: ${title}`);
  console.log(`DESC: ${desc}`);
  console.log(`CANONICAL: ${canon}`);
  console.log(`OG TITLE: ${ogTitle}`);
  console.log(`OG DESC: ${ogDesc}`);
  console.log(`OG IMAGE: ${ogImage}`);
  console.log(`TWITTER CARD: ${twCard}`);
  
  // JSON-LD
  const scriptRegex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  let match;
  let jsonCount = 0;
  while ((match = scriptRegex.exec(html)) !== null) {
    jsonCount++;
    try {
      const parsed = JSON.parse(match[1]);
      console.log(`JSON-LD ${jsonCount}: VALID`);
    } catch (e) {
      console.error(`JSON-LD ${jsonCount}: INVALID SYNTAX`);
      allGood = false;
    }
  }
}

console.log(`\nOVERALL: ${allGood ? 'PASS' : 'FAIL'}`);
