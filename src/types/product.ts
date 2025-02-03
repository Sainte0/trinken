export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: 'con-alcohol' | 'sin-alcohol' | 'combos';
  subcategory: 'vodka' | 'whisky' | 'cerveza' | 'vino' | 'gaseosas' | 'jugos' | 'agua' | 'energizantes' | 'combo-con-alcohol' | 'combo-sin-alcohol' | 'gin' | 'ron' | 'aperitivo' | 'licor' | 'tequila';
  description?: string;
  stock: number;
  items?: string[];  // List of items included in the combo
} 