import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ["home", "blogs", "poetry", "books", "contact"];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur border-b border-black/10"
        role="banner"
      >
        <div className="px-6 md:px-[7vw] py-9 flex items-center justify-between">

          {/* Brand / Author Name */}
          <Link
            to="/"
            aria-label="Deepak Joshi — Home"
            className="font-heading text-sm tracking-[0.3em] uppercase hover:opacity-80 transition"
          >
            Deepak Joshi
          </Link>

          {/* Primary Navigation */}
          <nav
            className="hidden md:flex gap-10 text-xs tracking-widest uppercase"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  `relative pb-1 transition ${
                    isActive
                      ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-black"
                      : "opacity-60 hover:opacity-100"
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xs tracking-widest uppercase"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav
            id="mobile-navigation"
            className="md:hidden px-6 pb-6 flex flex-col gap-4 text-xs tracking-widest uppercase"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "home" ? "/" : `/${item}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `w-fit pb-1 ${
                    isActive ? "border-b border-black" : "opacity-60"
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[88px]" />
    </>
  );
}
