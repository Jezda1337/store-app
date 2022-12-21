"use client";
import Image from "next/image";
import Link from "next/link";

async function getProduct(id: number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
export default function ProductCard({ product, setCartItems, setAdded }: any) {
  const { title, image, price, id } = product;

  async function buyProduct() {
    const product = await getProduct(id);
    setCartItems((pv: any) => [...pv, product]);
    setAdded(true);
  }

  return (
    <>
      <div className="min-w-[300px] max-w-[300px] min-h-[300px] border rounded p-4 flex flex-col justify-between">
        <div>
          <div className="relative h-[200px]">
            <Image
              className="object-contain w-full h-full  m-auto"
              src={image}
              alt="product"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <Link href={`/products/${id}`}>
            <h2 className="text-sm mt-2">{title}</h2>
          </Link>
        </div>
        <div className="mt-2">
          <h3 className="text-lg text-slate-900 my-4">{price}$</h3>
          <button
            className="border rounded w-full hover:bg-blue-300"
            onClick={buyProduct}
          >
            buy
          </button>
        </div>
      </div>
    </>
  );
}
