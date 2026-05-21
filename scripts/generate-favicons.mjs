import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const iconPath = 'c:/Users/Ashwin/Downloads/T09_Kavach_Shield_OM/src/assets/images/trishul-shield.webp';
const publicDir = 'c:/Users/Ashwin/Downloads/T09_Kavach_Shield_OM/public';

async function generateFavicons() {
  const base = sharp(iconPath);
  const metadata = await base.metadata();
  
  // Create a gold/luxury background circle
  const size = 512;
  const radius = size / 2;
  const svgBuffer = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${radius}" cy="${radius}" r="${radius}" fill="#D4AF37" />
    </svg>
  `);

  const luxuryBase = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 212, g: 175, b: 55, alpha: 1 } // Gold
    }
  });

  // Compose with the original icon
  const iconBuffer = await base
    .resize(Math.round(size * 0.7), Math.round(size * 0.7), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const composed = await luxuryBase.composite([{ input: iconBuffer, gravity: 'center' }]).toBuffer();
  const final = sharp(composed);

  // Generate 16x16
  await final.clone().resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  // Generate 32x32
  await final.clone().resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  // Generate 180x180 (Apple)
  await final.clone().resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  // Generate 192x192 (Android)
  await final.clone().resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  // Generate 512x512 (Android)
  await final.clone().resize(size, size).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  
  // Generate ICO (contains multiple sizes)
  await sharp(composed).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

  console.log('All favicons generated successfully!');
}

generateFavicons();
