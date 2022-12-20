import { use } from "react";
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
  const products = use(getData());
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center mt-32">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
