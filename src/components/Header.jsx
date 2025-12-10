// src/components/Header.jsx
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="nav">
      <div className="nav-logo">Deepak Joshi</div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          home
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          blogs
        </NavLink>

        <NavLink
          to="/poetry"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          poetry
        </NavLink>

        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          books
        </NavLink>

        {/* <NavLink
          to="/connect"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          connect
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
