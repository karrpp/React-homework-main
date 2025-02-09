export interface Product {
  id: string;
  name: string;
  cost: number;
  image: string;
  quantity: number;
  limit: number;
}

export type ProductList = Product[];

export const DEFAULT_PRODUCTS: ProductList = [
  { id: "milk", name: "우유", cost: 1880, image: "src/cart-item-1.png", quantity: 2, limit: 10 },
  { id: "bean-sprouts", name: "콩나물", cost: 1280, image: "src/cart-item-2.png", quantity: 4, limit: 8 },
  { id: "tofu", name: "두부", cost: 2280, image: "src/cart-item-3.png", quantity: 3, limit: 15 },
];
