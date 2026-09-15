import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error("Please run 'npm run build' first.");
  process.exit(1);
}

const routes = [
  '/', '/about', '/services', '/projects', '/contact', '/404',
  '/ar', '/ar/about', '/ar/services', '/ar/projects', '/ar/contact'
];
const app = express();

const originalIndex = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

// Serve static assets EXCEPT index.html manually
app.use(express.static(distPath, { index: false }));

// Fallback for SPA always serves the original empty index
app.use((req, res) => {
  res.send(originalIndex);
});

const PORT = 3000;
const server = app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT} for prerendering...`);
  
  try {
    const browser = await puppeteer.launch({ headless: true });
    
    for (const route of routes) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#root > *');
      
      const html = await page.content();
      
      let filePath;
      if (route === '/') {
        filePath = path.join(distPath, 'index.html');
      } else if (route.startsWith('/ar')) {
        // e.g. /ar -> ar/index.html, /ar/about -> ar/about/index.html
        const cleanRoute = route.slice(1); // removes leading slash
        filePath = path.join(distPath, cleanRoute, 'index.html');
        
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      } else {
        // e.g. /about -> about.html
        const cleanRoute = route.slice(1);
        filePath = path.join(distPath, `${cleanRoute}.html`);
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`Prerendered ${route} -> ${filePath.replace(distPath, '')}`);
      
      await page.close();
    }
    
    await browser.close();
    console.log('Prerendering complete!');
  } catch (error) {
    console.error('Error during prerendering:', error);
  } finally {
    server.close();
    process.exit(0);
  }
});
