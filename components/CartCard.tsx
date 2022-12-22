"use client";
import Image from "next/image";

export default function CartCard({ item }: any) {
  return (
    <div className="flex border rounded max-w-2xl max-h-[130px] mx-auto my-2 p-2">
      <div className="flex items-center">
        <Image
          className="block h-full relative object-contain"
          src={item.image}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-start ml-4">
        <h3>{item.title}</h3>
        <h5>{item.price}$</h5>
        <button className="border rounded mt-auto mb-2 px-2 py-1 bg-red-300 text-white hover:bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}
