import React from "react";
import type { Product } from "../types";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (id: number) => void;
  onChangeQty: (id: number, delta: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
  onChangeQty,
}) => {
  const subtotal: number = product.price * product.quantity;

  return (
    <div className="detail">
      <button onClick={onBack}>← Back</button>
      <img src={product.image} alt={product.name} width={250} />
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Specs:</strong> {product.specs}</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>

      <div className="actions">
        <button onClick={() => onChangeQty(product.id, -1)}>−</button>
        <button onClick={() => onChangeQty(product.id, 1)}>+</button>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;