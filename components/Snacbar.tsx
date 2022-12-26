"use client";

export default function Snackbar({ isAdded }: { isAdded: boolean }) {
  console.log("test");
  return (
    <>
      <h1
        className={`transition-all fixed max-w-[200px] text-center right-0 z-10 bg-white top-24 border border-green-500 rounded py-2 px-2 ${
          isAdded ? "right-5" : "-right-[200px]"
        }`}
      >
        Item is added to the cart.
      </h1>
    </>
  );
}
