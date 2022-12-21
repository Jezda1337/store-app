"use client";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function ProductsList({ products }: any) {
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    const ls = localStorage;
    if (!ls.cartItems) ls.setItem("cartItems", JSON.stringify([]));
  }, []);

  useEffect(() => {
    const ls = localStorage;
    if (cartItems.length !== 0)
      if (ls.cartItems) ls.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <div className="max-w-5xl mt-32 flex justify-center flex-wrap gap-2 mx-auto flex-1">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            setCartItems={setCartItems}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
