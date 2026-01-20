// src/pages/BookDetail.jsx
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <p className="text-muted">Book not found.</p>
        <Link
          to="/books"
          className="inline-block mt-6 border border-text px-6 py-2 text-sm"
        >
          Back to books
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full h-[55vh]">
        {/* soft background */}
        <div className="absolute inset-0 bg-frame/40"></div>

        <div className="relative max-w-6xl mx-auto px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* BOOK COVER */}
            <div className="flex justify-center">
              <div className="border border-frame p-4 bg-bg max-w-[260px]">
                <img
                  src={book.image}
                  alt={`${book.title} book cover`}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-3">
                {book.genre}
              </p>

              <h1 className="font-heading text-4xl md:text-5xl mb-4">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="text-muted mb-6">
                  {book.subtitle}
                </p>
              )}

              <div className="flex gap-4 mt-6">
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Buy
                </a>

                <Link
                  to="/books"
                  className="border border-frame px-6 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Back
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-8 py-24">

        {/* DESCRIPTION */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl mb-6">
            About the Book
          </h2>

          <p className="text-muted leading-relaxed">
            {book.longDescription}
          </p>
        </div>

        {/* META INFO */}
        <div className="border-t border-frame pt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm text-muted">

          <div>
            <p className="uppercase tracking-widest text-xs mb-2">Role</p>
            <p>{book.role}</p>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs mb-2">Year</p>
            <p>{book.year}</p>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs mb-2">Publisher</p>
            <p>{book.publisher}</p>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs mb-2">Genre</p>
            <p>{book.genre}</p>
          </div>

        </div>
      </section>
    </>
  );
}
