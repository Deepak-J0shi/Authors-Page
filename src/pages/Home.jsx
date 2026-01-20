import portrait from "../assets/deepak-joshi.jpg";
import heroBg from "../assets/deepak-joshi-hero.png";
import aboutImg from "../assets/about-deepak-joshi.jpg";

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO BACKGROUND ================= */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroBg}
          alt="Himalayan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </section>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative max-w-6xl mx-auto px-8 -mt-24 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Portrait */}
          <div className="border border-frame p-4 bg-bg">
            <img
              src={portrait}
              alt="Deepak Joshi"
              className="w-full object-cover grayscale"
            />
          </div>

          {/* Intro */}
          <div>
            <h1 className="font-heading text-5xl tracking-widest leading-tight">
              DEEPAK <br /> JOSHI
            </h1>

            <p className="mt-3 text-muted uppercase tracking-wider text-sm">
              Poet · Author · Engineer
            </p>

            <p className="mt-6 text-muted max-w-md leading-relaxed">
              Writing poetry, prose, and reflective narratives shaped by
              love, memory, nature, and lived experience.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 border border-text px-6 py-2 hover:bg-frame/30 transition"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED BOOK ================= */}
      <section className="border-t border-frame bg-frame/20">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <h2 className="font-heading text-3xl mb-12">
            Featured
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Book Cover */}
            <div className="flex justify-center md:justify-start">
              <div className="border border-frame bg-bg p-3">
                <img
                  src={book3}
                  alt="I Was Never Me After You"
                  className="h-[240px] w-auto object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                Poetry Collection
              </p>

              <h3 className="font-heading text-2xl mb-4">
                I Was Never Me After You
              </h3>

              <p className="text-muted leading-relaxed mb-8">
                A collection of poems and reflections exploring love, loss,
                and the quiet transformations shaped by time.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/books/i-was-never-me-after-you"
                  className="border border-text px-5 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Read more
                </Link>

                <a
                  href="https://authors-page-iota.vercel.app/books"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-text px-5 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKS & PUBLICATIONS ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <h2 className="font-heading text-3xl mb-12">
          Books & Publications
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {[
            { img: book1, title: "Yellow Days", slug: "yellow-days" },
            { img: book2, title: "120 Amazing Poems", slug: "120-amazing-poems" },
            { img: book3, title: "I Was Never Me After You", slug: "i-was-never-me-after-you" },
          ].map((book) => (
            <Link
              key={book.slug}
              to={`/books/${book.slug}`}
              className="flex items-center gap-4 group"
            >
              <div className="border border-frame bg-bg p-1">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-14 h-20 object-cover"
                />
              </div>

              <span className="text-sm text-muted group-hover:underline underline-offset-4">
                {book.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= ABOUT THE AUTHOR ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-muted leading-relaxed">
            <p>
              Deepak Joshi is an Indian poet and author whose writing explores
              memory, inner landscapes, and emotional silence through poetry
              and reflective prose.
            </p>

            <p className="mt-6">
              Alongside literature, he works with technology and creative
              systems—bridging engineering discipline with literary intuition.
            </p>
          </div>

          <div className="border border-frame p-4 bg-bg">
            <img
              src={aboutImg}
              alt="Deepak Joshi writing"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
