export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: 'con-alcohol' | 'sin-alcohol' | 'combos';
  subcategory: 'vodka' | 'whisky' | 'cerveza' | 'vino' | 'gaseosas' | 'jugos' | 'agua' | 'energizantes' | 'combo';
  description?: string;
} 