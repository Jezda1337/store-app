import Image from "next/image";
export default function ProductCard({ product }: any) {
  console.log(product);
  const { title, image, price } = product;
  return (
    <>
      <div className="min-w-[300px] max-w-[300px] min-h-[300px] border rounded p-4 flex flex-col justify-between">
        <div className=" relative h-[200px]">
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
        <h2 className="text-sm">{title}</h2>
        <h3 className="text-md text-slate-900 my-4">{price}$</h3>
        <div className="">
          <button className="border rounded w-full hover:bg-blue-300">
            buy
          </button>
        </div>
      </div>
    </>
  );
}
