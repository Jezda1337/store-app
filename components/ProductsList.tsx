"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Snackbar from "./Snacbar";

export default function ProductsList({ products }: any) {
  const [cartItems, setCartItems] = useState<any>([]);
  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    const ls = localStorage;
    if (!ls.cartItems) ls.setItem("cartItems", JSON.stringify([]));
    setCartItems(JSON.parse(ls.cartItems));
  }, []);

  useEffect(() => {
    const ls = localStorage;
    if (cartItems.length !== 0)
      if (ls.cartItems) ls.setItem("cartItems", JSON.stringify(cartItems));

    if (isAdded) setTimeout(() => setAdded(false), 1000);
  }, [cartItems]);

  return (
    <>
      <Snackbar isAdded={isAdded} />
      <div className="max-w-5xl pt-32 flex justify-center flex-wrap gap-2 mx-auto flex-1">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            setCartItems={setCartItems}
            product={product}
            setAdded={setAdded}
          />
        ))}
      </div>
    </>
  );
}
