import React from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  categoryFilter: string;
  onView: (product: Product) => void;
  onAddToCart: (id: number) => void;
  onChangeQty: (id: number, delta: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  categoryFilter,
  onView,
  onAddToCart,
  onChangeQty,
}) => {
  const filtered: Product[] =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  const overallTotal: number = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <div>
      <h2>Product List</h2>
      <div className="card-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={onView}
            onAddToCart={onAddToCart}
            onChangeQty={onChangeQty}
          />
        ))}
      </div>
      <h3 className="grand-total">
        Overall Total: ${overallTotal.toFixed(2)}
      </h3>
    </div>
  );
};

export default ProductList;