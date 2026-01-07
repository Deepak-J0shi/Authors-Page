// src/pages/Books.jsx
import { books, booksBannerText } from "../data/books";

export default function Books() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      {/* Banner */}
      <div className="border border-frame px-10 py-6 text-center mb-24">
        <h1 className="font-heading text-3xl">
          {booksBannerText}
        </h1>
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-frame p-8 transition hover:bg-frame/30 hover:translate-y-[-4px]"
          >
            {/* Cover */}
            <div className="mb-8">
              <img
                src={book.image}
                alt={book.title}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="font-heading text-lg text-center mb-4">
              {book.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-muted text-center leading-relaxed mb-6">
              {book.description}
            </p>

            {/* CTA */}
            <span className="block text-sm text-center">
              Buy →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
