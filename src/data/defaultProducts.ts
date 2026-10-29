import type { Product } from "../types";

const defaultProducts: Product[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/laptop/200",
    name: "Laptop Pro",
    category: "Electronics",
    description: "High-performance laptop for professionals.",
    specs: "16GB RAM, 512GB SSD, Intel i7",
    rating: 4.5,
    price: 1200,
    quantity: 3,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/tshirt/200",
    name: "Cotton T-Shirt",
    category: "Clothing",
    description: "Comfortable 100% cotton t-shirt.",
    specs: "Size M, Black",
    rating: 4.2,
    price: 20,
    quantity: 10,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/book/200",
    name: "React Handbook",
    category: "Books",
    description: "Complete guide to React development.",
    specs: "Paperback, 350 pages",
    rating: 4.8,
    price: 35,
    quantity: 4,
  },
];

export default defaultProducts;