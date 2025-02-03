import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Vodka Premium",
    price: 15000,
    image: "/images/drinks/vodka.jpg",
    category: "con-alcohol",
    subcategory: "vodka"
  },
  {
    id: 2,
    title: "Scotch Whisky",
    price: 45000,
    image: "/images/drinks/whiskey.jpg",
    category: "con-alcohol",
    subcategory: "whisky"
  },
  {
    id: 3,
    title: "Pack Cerveza Artesanal",
    price: 8500,
    image: "/images/drinks/craft-beer.jpg",
    category: "con-alcohol",
    subcategory: "cerveza"
  },
  {
    id: 4,
    title: "Vino Tinto",
    price: 12000,
    image: "/images/drinks/red-wine.jpg",
    category: "con-alcohol",
    subcategory: "vino"
  },
  {
    id: 5,
    title: "Agua con Gas",
    price: 1200,
    image: "/images/drinks/sparkling-water.jpg",
    category: "sin-alcohol",
    subcategory: "agua"
  },
  {
    id: 6,
    title: "Pack Gaseosas",
    price: 3500,
    image: "/images/drinks/cola.jpg",
    category: "sin-alcohol",
    subcategory: "gaseosas"
  },
  {
    id: 7,
    title: "Jugo Natural",
    price: 2500,
    image: "/images/drinks/orange-juice.jpg",
    category: "sin-alcohol",
    subcategory: "jugos"
  },
  {
    id: 8,
    title: "Pack Energizantes",
    price: 5500,
    image: "/images/drinks/energy-drink.jpg",
    category: "sin-alcohol",
    subcategory: "energizantes"
  },
  {
    id: 9,
    title: "Pack Fiesta",
    price: 65000,
    image: "/images/drinks/party-pack.jpg",
    category: "combos",
    subcategory: "combo",
    description: "2x Vodka, 4x Cerveza, 2x Gaseosa"
  },
  {
    id: 10,
    title: "Pack Sin Alcohol",
    price: 15000,
    image: "/images/drinks/na-bundle.jpg",
    category: "combos",
    subcategory: "combo",
    description: "4x Gaseosa, 2x Jugo, 2x Agua"
  },
  {
    id: 11,
    title: "Mix Premium",
    price: 120000,
    image: "/images/drinks/premium-mix.jpg",
    category: "combos",
    subcategory: "combo",
    description: "1x Whisky, 1x Vodka, 1x Vino, 4x Energizante"
  }
]; 