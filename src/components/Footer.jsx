import { Linkedin, Instagram, PenLine, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="border-t border-black/10 bg-bg"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="max-w-md">
            <h3 className="font-heading text-xs tracking-widest uppercase mb-4">
              Open for collaboration
            </h3>

            <p className="text-muted text-sm leading-relaxed mb-4">
              I’m open to collaborations, publications, interviews, and creative
              projects. If my work resonates with you, feel free to reach out.
            </p>

            <a
              href="mailto:joshideepak2334@gmail.com"
              aria-label="Email Deepak Joshi"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              joshideepak2334@gmail.com
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 md:items-end">

            {/* NAVIGATION */}
            <nav
              className="flex gap-6 text-xs tracking-widest uppercase"
              aria-label="Footer navigation"
            >
              <Link to="/blogs" className="opacity-60 hover:opacity-100">Blogs</Link>
              <Link to="/poetry" className="opacity-60 hover:opacity-100">Poetry</Link>
              <Link to="/books" className="opacity-60 hover:opacity-100">Books</Link>
              <Link to="/contact" className="opacity-60 hover:opacity-100">Contact</Link>

              <a
                href="https://portfolio-main-tan-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
              >
                Tech
              </a>
            </nav>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-2 md:items-end">
              <span className="text-xs tracking-widest uppercase text-muted">
                Follow my work
              </span>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/deepak-j0shi/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Deepak Joshi on LinkedIn"
                  className="w-8 h-8 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <Linkedin size={13} strokeWidth={1.5} />
                </a>

                <a
                  href="https://www.instagram.com/noctur.ne__"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Deepak Joshi on Instagram"
                  className="w-8 h-8 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <Instagram size={13} strokeWidth={1.5} />
                </a>

                <a
                  href="https://medium.com/@Deepak-J0shi"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Deepak Joshi on Medium"
                  className="w-8 h-8 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <PenLine size={13} strokeWidth={1.5} />
                </a>

                <a
                  href="https://portfolio-main-tan-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Deepak Joshi Technical Portfolio"
                  className="w-8 h-8 flex items-center justify-center border border-text rounded-full hover:bg-black hover:text-white transition"
                >
                  <Globe size={13} strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-frame my-6"></div>

        {/* ================= BOTTOM ================= */}
        <p className="text-xs tracking-widest text-muted uppercase text-center md:text-left">
          © {new Date().getFullYear()} Deepak Joshi · All rights reserved
        </p>

      </div>
    </footer>
  );
}