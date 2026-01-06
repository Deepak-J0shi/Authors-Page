export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 md:px-[7vw] py-6">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 
        <span className="text-xs tracking-widest text-muted uppercase">
          © {new Date().getFullYear()} Deepak Joshi
        </span>

        <div className="flex gap-4">
          {["in", "x", "m"].map((icon) => (
            <span
              key={icon}
              className="w-9 h-9 flex items-center justify-center border border-text rounded-full text-xs hover:bg-black hover:text-white transition cursor-pointer"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
