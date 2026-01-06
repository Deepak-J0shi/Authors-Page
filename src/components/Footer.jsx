// src/components/Footer.jsx
import { Linkedin, Instagram, PenLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 md:px-[7vw] py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright */}
        <span className="text-xs tracking-widest text-muted uppercase">
          © {new Date().getFullYear()} Deepak Joshi
        </span>

        {/* Social Icons */}
        <div className="flex gap-4">

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/deepak-j0shi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center 
                         border border-text rounded-full 
                         hover:bg-black hover:text-white transition"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>

            <span className="absolute -top-9 left-1/2 -translate-x-1/2
                             text-[10px] tracking-widest uppercase
                             bg-black text-white px-2 py-1 rounded
                             opacity-0 group-hover:opacity-100
                             transition pointer-events-none">
              LinkedIn
            </span>
          </div>

          {/* Instagram */}
          <div className="relative group">
            <a
              href="https://www.instagram.com/noctur.ne__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center 
                         border border-text rounded-full 
                         hover:bg-black hover:text-white transition"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>

            <span className="absolute -top-9 left-1/2 -translate-x-1/2
                             text-[10px] tracking-widest uppercase
                             bg-black text-white px-2 py-1 rounded
                             opacity-0 group-hover:opacity-100
                             transition pointer-events-none">
              Instagram
            </span>
          </div>

          {/* Medium */}
          <div className="relative group">
            <a
              href="https://medium.com/@Deepak-J0shi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="w-10 h-10 flex items-center justify-center 
                         border border-text rounded-full 
                         hover:bg-black hover:text-white transition"
            >
              <PenLine size={16} strokeWidth={1.5} />
            </a>

            <span className="absolute -top-9 left-1/2 -translate-x-1/2
                             text-[10px] tracking-widest uppercase
                             bg-black text-white px-2 py-1 rounded
                             opacity-0 group-hover:opacity-100
                             transition pointer-events-none">
              Medium
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
