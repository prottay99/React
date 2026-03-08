import { useContext } from "react";
import { NavLink } from "react-router";
import { GlobalContext } from "../../context";

export const Header = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <header className="flex justify-between items-center py-8 container mx-auto">
      <div className="logo">
        <NavLink to="/" className="text-3xl font-bold">
          FoodRecipe
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="px-3 py-1.5 border border-gray-500 rounded-full outline-0 w-75"
        />
      </form>
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" className="hover:underline hover:text-green-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="hover:underline hover:text-green-700"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
