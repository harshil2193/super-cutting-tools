
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LEFT SIDE → LOGO */}

        <div className="logo-box">
          <img src="/logo.png" alt="logo" className="logo-img" />
          <h2 className="logo-text"><span className="red">Super</span> <span className="blue">Cutting Tools</span></h2>
        </div>


        {/* HAMBURGER BUTTON */}

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>


        {/* RIGHT SIDE → MENU */}

        <div className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/" onClick={closeMenu}
            className={({isActive}) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}
            className={({isActive}) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>
            About
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}
            className={({isActive}) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>
            Products
          </NavLink>

          <NavLink to="/quality" onClick={closeMenu}
            className={({isActive}) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>
            Quality
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}
            className={({isActive}) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;

