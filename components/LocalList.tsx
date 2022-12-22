"use client";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";

export default function LocalList() {
  const [localItems, setItems] = useState<any>([]);
  useEffect(() => {
    const ls = localStorage;
    if (!ls.cartItems) return;

    const localData = JSON.parse(ls.getItem("cartItems") as any);
    setItems(localData);
  }, []);

  return (
    <>
      {localItems.map((li: any, i: number) => (
        <CartCard item={li} key={i} />
      ))}
    </>
  );
}
