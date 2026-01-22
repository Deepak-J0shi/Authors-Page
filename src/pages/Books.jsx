import { books } from "../data/books";
import { Link } from "react-router-dom";
import { useState } from "react";
import booksHero from "../assets/books-heroimage.jpg";

export default function Books() {
  const featuredBook = books[2];
  const otherBooks = books;

  const [showNotice, setShowNotice] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[60vh] flex items-center">
        <img
          src={booksHero}
          alt="Books background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />

        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* BOOK */}
            <div className="flex justify-center">
              <div className="border border-frame bg-bg p-4 max-w-[280px]">
                <img
                  src={featuredBook.image}
                  alt={featuredBook.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                Featured Book
              </p>

              <h1 className="font-heading text-4xl mb-4">
                {featuredBook.title}
              </h1>

              <p className="text-muted max-w-md leading-relaxed mb-8">
                {featuredBook.description}
              </p>

              <div className="flex gap-4">
                <Link
                  to={`/books/${featuredBook.id}`}
                  className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Read more
                </Link>

                {featuredBook.isUpcoming ? (
                  <button
                    onClick={() => setShowNotice(true)}
                    className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </button>
                ) : (
                  <a
                    href={featuredBook.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </a>
                )}
              </div>

              {showNotice && (
                <p className="mt-4 text-sm text-muted max-w-md">
                  This book is currently in the publishing process and will be
                  available on Amazon soon.
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOOKS GRID ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="font-heading text-3xl mb-16">
          Books & Publications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {otherBooks.map((book) => (
            <div
              key={book.id}
              className="border border-frame p-6 flex flex-col"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full aspect-[3/4] object-cover mb-6"
              />

              <h3 className="font-heading text-lg mb-3">
                {book.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {book.description}
              </p>

              {/* BUTTONS */}
              <div className="mt-auto flex gap-4">
                <Link
                  to={`/books/${book.id}`}
                  className="flex-1 text-center border border-text px-4 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Read more
                </Link>

                {book.isUpcoming ? (
                  <button
                    onClick={() => setShowNotice(true)}
                    className="flex-1 border border-text px-4 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </button>
                ) : (
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-text px-4 py-2 text-sm hover:bg-frame/30 transition"
                  >
                    Buy
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
