import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handlebuttonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handlebuttonToggle}>
              {show ? <RxCross1 /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
