import { NavLink } from "react-router";
import "../../App.css";

const Header = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_item active_link" : "nav_item"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink className="nav_item" to="/movies" caseSensitive>
          Movies
        </NavLink>
        <NavLink className="nav_item" to="/contact" viewTransition>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
