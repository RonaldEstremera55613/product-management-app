import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { NewProduct } from "../types";

interface ProductFormProps {
  onAdd: (product: NewProduct) => void;
}

interface FormState {
  image: string;
  name: string;
  category: string;
  description: string;
  specs: string;
  rating: string;
  price: string;
  quantity: string;
}

const emptyForm: FormState = {
  image: "",
  name: "",
  category: "",
  description: "",
  specs: "",
  rating: "",
  price: "",
  quantity: "",
};

const ProductForm: React.FC<ProductFormProps> = ({ onAdd }) => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const allFilled: boolean = Object.values(form).every(
      (v) => String(v).trim() !== ""
    );
    if (!allFilled) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    onAdd({
      image: form.image,
      name: form.name,
      category: form.category,
      description: form.description,
      specs: form.specs,
      rating: Number(form.rating),
      price: Number(form.price),
      quantity: Number(form.quantity),
    });

    setForm(emptyForm);
    setError("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      {error && <p className="error">{error}</p>}

      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="specs" placeholder="Specification" value={form.specs} onChange={handleChange} />
      <input name="rating" type="number" step="0.1" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;