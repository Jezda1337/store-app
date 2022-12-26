"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Snackbar from "./Snacbar";

export default function ProductsList({ products }: any) {
  const [cartItems, setCartItems] = useState<any>([]);
  const [isAdded, setAdded] = useState(false);

  return (
    <>
      {isAdded ? <Snackbar isAdded={isAdded} /> : ""}
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
