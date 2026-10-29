import React, { useState } from "react";
import type { ChangeEvent } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import defaultProducts from "./data/defaultProducts";
import type { Product, CartItem, NewProduct } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const addProduct = (newProduct: NewProduct): void => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  const addToCart = (id: number): void => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
    setCart((prev) => {
      const exists = prev.find((c) => c.id === id);
      if (exists) {
        return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const changeQuantity = (id: number, delta: number): void => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity + delta >= 0
          ? { ...p, quantity: p.quantity + delta }
          : p
      )
    );
  };

  if (selectedProduct) {
    return (
      <div className="app">
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onChangeQty={changeQuantity}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Product Management App</h1>

      <div className="layout-split">
        {/* Left Column: Add Product Form */}
        <ProductForm onAdd={addProduct} />

        {/* Right Column: Product List & Filter */}
        <div className="main-content">
          <div className="filter-bar">
            <label>Filter by Category: </label>
            <select
              value={categoryFilter}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setCategoryFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>animal</option>
            </select>
          </div>

          <ProductList
            products={products}
            categoryFilter={categoryFilter}
            onView={(p: Product) => setSelectedProduct(p)}
            onAddToCart={addToCart}
            onChangeQty={changeQuantity}
          />
        </div>
      </div>

      <Cart products={products} cart={cart} />
    </div>
  );
};

export default App;