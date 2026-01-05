// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-[7vw] py-6">
      <div className="flex justify-end items-center gap-4">
        <div className="flex gap-3">
          <span className="w-10 h-10 flex items-center justify-center border border-text rounded-full">
            in
          </span>
          <span className="w-10 h-10 flex items-center justify-center border border-text rounded-full">
            x
          </span>
          <span className="w-10 h-10 flex items-center justify-center border border-text rounded-full">
            m
          </span>
        </div>

        <span className="text-sm text-muted">
          © {new Date().getFullYear()} Deepak Joshi
        </span>
      </div>
    </footer>
  );
}
