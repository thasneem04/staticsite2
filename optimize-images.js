import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');

async function optimize() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const input = path.join(dir, file);
      const output = path.join(dir, `${base}.webp`);
      
      try {
        console.log(`Optimizing ${file}...`);
        await sharp(input)
          .webp({ quality: 80 })
          .toFile(output);
        console.log(`✓ Saved ${base}.webp`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    }
  }
}

optimize().then(() => console.log('Done optimizing images!'));
