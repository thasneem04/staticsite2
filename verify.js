import fs from 'fs';
['dist/index.html', 'dist/about.html'].forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  console.log('--- ' + file + ' ---');
  
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) 
                 || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"/i);
  const canonMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)
                  || html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i);
                  
  console.log('TITLE:', titleMatch ? titleMatch[1] : 'NOT FOUND');
  console.log('DESC:', descMatch ? descMatch[1] : 'NOT FOUND');
  console.log('CANONICAL:', canonMatch ? canonMatch[1] : 'NOT FOUND');
});
