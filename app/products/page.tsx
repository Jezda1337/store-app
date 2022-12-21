import { use } from "react";
import ProductsList from "../../components/ProductsList";
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
  return <ProductsList products={products} />;
}
