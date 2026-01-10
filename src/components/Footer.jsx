// src/components/Footer.jsx
import { Linkedin, Instagram, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 md:px-[7vw] py-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="max-w-md">
            <h3 className="font-heading text-sm tracking-widest uppercase mb-4">
              Open for collaboration
            </h3>

            <p className="text-muted text-sm leading-relaxed mb-4">
              I’m open to collaborations, publications, interviews, and creative
              projects. If my work resonates with you, feel free to reach out.
            </p>

            <a
              href="mailto:joshideepak2334@gmail.com"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              joshideepak2334@gmail.com
            </a>
              <p className="text-xs tracking-widest text-muted uppercase">
            © {new Date().getFullYear()} Deepak Joshi · All rights reserved
          </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 md:items-end">

            {/* NAV LINKS */}
            <nav className="flex gap-8 text-xs tracking-widest uppercase">
              <Link to="/blogs" className="opacity-60 hover:opacity-100">Blogs</Link>
              <Link to="/poetry" className="opacity-60 hover:opacity-100">Poetry</Link>
              <Link to="/books" className="opacity-60 hover:opacity-100">Books</Link>
              <Link to="/contact" className="opacity-60 hover:opacity-100">Contact</Link>
            </nav>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3 md:items-end">
              <span className="text-xs tracking-widest uppercase text-muted">
                Follow my work
              </span>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/deepak-j0shi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <Linkedin size={15} strokeWidth={1.5} />
                </a>

                <a
                  href="https://www.instagram.com/noctur.ne__"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <Instagram size={15} strokeWidth={1.5} />
                </a>

                <a
                  href="https://medium.com/@Deepak-J0shi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                  className="w-9 h-9 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <PenLine size={15} strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>
        </div>

      

      </div>
    </footer>
  );
}
