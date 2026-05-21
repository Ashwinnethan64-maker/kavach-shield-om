import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = 'c:/Users/Ashwin/Downloads/T09_Kavach_Shield_OM/src/assets/images';

const imagesToOptimize = [
  { name: 'professional-lifestyle.webp', mobileWidth: 480 },
  { name: 'shungite-macro.webp', mobileWidth: 480 },
  { name: 'om-shield-phone.webp', mobileWidth: 480 },
];

async function optimize() {
  for (const img of imagesToOptimize) {
    const inputPath = path.join(imageDir, img.name);
    const ext = path.extname(img.name);
    const baseName = path.basename(img.name, ext);
    const outputPathMobile = path.join(imageDir, `${baseName}-mobile.webp`);

    console.log(`Optimizing ${img.name}...`);
    
    // Create mobile version
    await sharp(inputPath)
      .resize(img.mobileWidth)
      .webp({ quality: 65, effort: 6 })
      .toFile(outputPathMobile);
      
    console.log(`Created mobile version: ${baseName}-mobile.webp`);
  }
}

optimize().catch(console.error);
