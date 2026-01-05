// src/pages/Books.jsx
import { books, booksBannerText } from "../data/books";

export default function Books() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="border border-frame py-6 text-center mb-16">
        <h1 className="font-heading text-3xl">
          {booksBannerText}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-12">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-frame p-6 text-center hover:bg-frame/30 transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="mb-6 mx-auto"
            />

            <h2 className="font-heading mb-2">
              {book.title}
            </h2>

            <p className="text-muted text-sm mb-4">
              {book.description}
            </p>

            <span className="text-sm">Buy / Read more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
