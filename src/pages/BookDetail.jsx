// src/pages/BookDetail.jsx
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);
  const [showNotice, setShowNotice] = useState(false);

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

  const metaDescription =
    book.metaDescription ||
    book.longDescription?.slice(0, 160) ||
    `Learn more about the book "${book.title}" by poet Deepak Joshi.`;

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {book.metaTitle || `${book.title} | Book by Deepak Joshi`}
        </title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://authors-page-iota.vercel.app/books/${book.id}`}
        />

        <meta property="og:type" content="book" />
        <meta property="og:title" content={book.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={book.image} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: {
              "@type": "Person",
              name: "Deepak Joshi",
            },
            genre: book.genre,
            datePublished: book.year,
            publisher: {
              "@type": "Organization",
              name: book.publisher,
            },
            description: metaDescription,
            image: book.image,
            inLanguage: book.language || "English",
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <article className="relative w-full h-[70vh]">
        <div className="absolute inset-0 bg-frame/40"></div>

        <div className="relative max-w-6xl mx-auto px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* COVER */}
            <div className="flex justify-center">
              <div className="border border-frame p-4 bg-bg max-w-[260px]">
                <img
                  src={book.image}
                  alt={`Cover of the book "${book.title}" by poet Deepak Joshi`}
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
                {book.isUpcoming ? (
                  <button
                    onClick={() => setShowNotice(true)}
                    className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </button>
                ) : (
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </a>
                )}

                <Link
                  to="/books"
                  className="border border-frame px-6 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Back
                </Link>
              </div>

              {showNotice && (
                <p className="mt-4 text-sm text-muted max-w-sm">
                  This book is currently in the publishing process and will be
                  available on Amazon soon.
                </p>
              )}
            </div>

          </div>
        </div>
      </article>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-8 py-24">
        <div className="mb-20">
          <h2 className="font-heading text-2xl mb-6">
            About the Book
          </h2>
          <p className="text-muted leading-relaxed whitespace-pre-line">
            {book.longDescription}
          </p>
        </div>

        <div className="border-t border-frame pt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm text-muted">
          {book.role && <div><p className="uppercase text-xs mb-2">Role</p><p>{book.role}</p></div>}
          {book.year && <div><p className="uppercase text-xs mb-2">Year</p><p>{book.year}</p></div>}
          {book.publisher && <div><p className="uppercase text-xs mb-2">Publisher</p><p>{book.publisher}</p></div>}
          {book.genre && <div><p className="uppercase text-xs mb-2">Genre</p><p>{book.genre}</p></div>}
          {book.pages && <div><p className="uppercase text-xs mb-2">Pages</p><p>{book.pages}</p></div>}
          {book.isbn13 && <div><p className="uppercase text-xs mb-2">ISBN</p><p>{book.isbn13}</p></div>}
        </div>
      </section>
    </>
  );
}
