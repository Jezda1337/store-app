"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const url = "https://fakestoreapi.com/products";

async function getData() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}
export default function Products() {
  const [list, setList] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getData().then((p) => {
      setProducts(p);
    });

    const pv: any = JSON.parse(localStorage.items);
    setList(pv);
  }, []);

  useEffect(() => {
    if (list.length != 0)
      if (localStorage.items)
        localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  return (
    <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center mt-32">
      {products.map((product: any) => (
        <ProductCard key={product.id} setList={setList} product={product} />
      ))}
    </div>
  );
}
