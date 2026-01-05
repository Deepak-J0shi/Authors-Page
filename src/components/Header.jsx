import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[7vw] py-6">
      <div className="font-heading text-lg tracking-widest">
        Deepak Joshi
      </div>

      <nav className="flex gap-7 font-heading text-sm lowercase">
        <NavLink to="/" end>home</NavLink>
        <NavLink to="/blogs">blogs</NavLink>
        <NavLink to="/poetry">poetry</NavLink>
        <NavLink to="/books">books</NavLink>
      </nav>
    </header>
  );
}
