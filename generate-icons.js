import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateIcons() {
  try {
    await sharp(path.join(__dirname, 'public', 'favicon.svg'))
      .resize(180, 180)
      .png()
      .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    
    console.log('Successfully generated apple-touch-icon.png');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
