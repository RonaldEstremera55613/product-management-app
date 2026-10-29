import React from "react";
import type { Product, CartItem } from "../types";

interface CartProps {
  products: Product[];
  cart: CartItem[];
}

const Cart: React.FC<CartProps> = ({ products, cart }) => {
  const cartTotal: number = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;
              return (
                <li key={item.id}>
                  {product.name} × {item.qty} = $
                  {(product.price * item.qty).toFixed(2)}
                </li>
              );
            })}
          </ul>
          <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;