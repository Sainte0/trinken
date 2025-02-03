const fs = require('fs');
const csv = require('csv-parse/sync');
const path = require('path');

// Read the CSV file
const csvContent = fs.readFileSync('stock_bebidas.csv', 'utf-8')
  // Remove extra commas and spaces at line ends
  .replace(/,\s*$/gm, '')
  // Remove any BOM characters that might exist
  .replace(/^\uFEFF/, '');

// Parse CSV
const records = csv.parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true
});

// Helper function to determine subcategory
function getSubcategory(productName) {
  const name = productName.toLowerCase();
  if (name.includes('vodka')) return 'vodka';
  if (name.includes('gin')) return 'gin';
  if (name.includes('whisky')) return 'whisky';
  if (name.includes('ron')) return 'ron';
  if (name.includes('tequila')) return 'tequila';
  if (name.includes('licor')) return 'licor';
  if (name.includes('fernet')) return 'aperitivo';
  if (['aperol', 'campari', 'gancia', 'cynar'].some(ap => name.includes(ap))) return 'aperitivo';
  return 'aperitivo'; // default category
}

// Helper function to generate image path
function getImagePath(productName) {
  const baseName = productName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
  return `/images/drinks/${baseName}.jpg`;
}

// Generate products array from CSV
const productsArray = records.map((record, index) => ({
  id: index + 1,
  title: record.Producto,
  price: Math.round(parseFloat(record['Precio(ARS)'].replace('N/D', '0'))),
  image: getImagePath(record.Producto),
  category: 'con-alcohol', // All products are alcoholic in your CSV
  subcategory: getSubcategory(record.Producto),
  stock: parseInt(record.Stock) // Get stock directly from CSV
}));

// Generate products.ts content
const productsContent = `import { Product } from '@/types/product';

export const products: Product[] = ${JSON.stringify(productsArray, null, 2)};`;

// Write to products.ts
const productsPath = path.join(__dirname, '../src/data/products.ts');
fs.writeFileSync(productsPath, productsContent);

console.log('Products file updated successfully!');
console.log(`Generated ${productsArray.length} products`); 