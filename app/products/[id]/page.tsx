import Image from "next/image";
import { use } from "react";

async function getProduct(id: number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

export default function Product({ params }: any) {
  const product = use(getProduct(params.id));
  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="relative max-w-[500px] w-full h-[500px]">
          <Image
            src={product.image}
            alt="product"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
}
