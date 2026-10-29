import React from "react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  onAddToCart: (id: number) => void;
  onChangeQty: (id: number, delta: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onView,
  onAddToCart,
  onChangeQty,
}) => {
  const subtotal: number = product.price * product.quantity;
  const lowStock: boolean = product.quantity < 5;

  return (
    <div className={`card ${lowStock ? "low-stock" : ""}`}>
      <img src={product.image} alt={product.name} width={120} />
      <h4>{product.name}</h4>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Qty: {product.quantity}</p>
      <p>
        <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
      </p>

      {lowStock && <p className="warning">⚠ Low Stock</p>}

      <div className="actions">
        <button onClick={() => onChangeQty(product.id, -1)}>−</button>
        <button onClick={() => onChangeQty(product.id, 1)}>+</button>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
        <button onClick={() => onView(product)}>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;