const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Read products.ts to get the list of products
const productsPath = path.join(__dirname, '../src/data/products.ts');
const productsContent = fs.readFileSync(productsPath, 'utf-8');
const productsMatch = productsContent.match(/products: Product\[\] = (\[[\s\S]*?\]);/);
const products = JSON.parse(productsMatch[1]);

// Create directories if they don't exist
const sourceDir = path.join(__dirname, '../product-images-source');
const outputDir = path.join(__dirname, '../public/images/drinks');

if (!fs.existsSync(sourceDir)) {
  fs.mkdirSync(sourceDir, { recursive: true });
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate a report of missing images
function generateReport() {
  console.log('\nProduct Image Status Report:');
  console.log('============================');
  
  products.forEach(product => {
    const imageName = path.basename(product.image);
    const sourcePath = path.join(sourceDir, imageName);
    const outputPath = path.join(outputDir, imageName);
    
    if (fs.existsSync(sourcePath)) {
      console.log(`✅ ${product.title}: Source image available`);
    } else {
      console.log(`❌ ${product.title}: Missing source image - Please add: ${imageName}`);
    }
  });

  console.log('\nInstructions:');
  console.log('1. Add your product images to the "product-images-source" folder');
  console.log('2. Image names should match the filenames in products.ts');
  console.log('3. Run this script again to process the images');
}

// Process images from source to output
async function processImages() {
  console.log('\nProcessing images...');
  
  for (const product of products) {
    const imageName = path.basename(product.image);
    const sourcePath = path.join(sourceDir, imageName);
    const outputPath = path.join(outputDir, imageName);
    
    if (fs.existsSync(sourcePath)) {
      try {
        await sharp(sourcePath)
          .resize(800, 800, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .jpeg({
            quality: 90,
            mozjpeg: true
          })
          .toFile(outputPath);
        
        console.log(`✅ Processed: ${product.title}`);
      } catch (error) {
        console.error(`❌ Error processing ${product.title}:`, error.message);
      }
    }
  }
}

// Run the script
async function main() {
  console.log('Product Image Manager');
  console.log('====================');
  
  generateReport();
  
  if (fs.readdirSync(sourceDir).length > 0) {
    await processImages();
  }
}

main().catch(console.error); 