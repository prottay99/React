import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="bg-gray-300">
      <nav className="flex items-center justify-between h-20 max-w-7xl w-full px-5 mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-2xl">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </NavLink>
        <ul className="nav flex gap-5">
          <li>
            <NavLink to="/" className="text-lg font-medium hover:text-red-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="text-xl font-medium hover:text-red-900"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
