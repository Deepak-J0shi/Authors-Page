import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["home", "blogs", "poetry", "books", "contact"];

  return (
    <header className="px-6 md:px-[7vw] py-6 border-b border-black/10">
      <div className="flex items-center justify-between">
        {/* LOGO / NAME */}
        <div className="font-heading text-sm tracking-[0.3em] uppercase">
          Deepak Joshi
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-xs tracking-widest uppercase">
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
              {item}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xs tracking-widest uppercase"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="mt-6 flex flex-col gap-4 text-xs tracking-widest uppercase md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `pb-1 ${
                  isActive
                    ? "border-b border-black w-fit"
                    : "opacity-60"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
