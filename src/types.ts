export interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
  specs: string;
  rating: number;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: number;
  qty: number;
}

export type NewProduct = Omit<Product, "id">;