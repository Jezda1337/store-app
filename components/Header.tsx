import NavLink from "../components/NavLink";

export default function Header() {
  return (
    <header className="min-h-[48px] flex items-center bg-blue-400">
      <div className="max-w-5xl mx-auto w-full">
        <nav className="flex justify-between items-center w-5xl">
          <NavLink href="/">
            <h3 className="text-white text-2xl">
              Store<span className="text-teal-900">App</span>
            </h3>
          </NavLink>
          <ul className="flex text-white">
            <li className="mr-4">
              <NavLink href={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink href={"/cart"}>Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
