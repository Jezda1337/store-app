import Link from "next/link";

export default function Header() {
  return (
    <header className="min-h-[48px] flex items-center bg-blue-400">
      <div className="max-w-5xl mx-auto w-full">
        <nav className="flex justify-between items-center w-5xl">
          <h1 className="text-white text-2xl">
            Store<span className="text-teal-900">App</span>
          </h1>
          <ul className="flex text-white">
            <li>
              <Link className="mr-4" href={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
