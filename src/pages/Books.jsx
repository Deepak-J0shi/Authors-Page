import { books, booksBannerText } from "../data/books";

export default function Books() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">

      {/* ================= BANNER ================= */}
      <header className="border border-frame px-10 py-8 text-center mb-16">
        <h1 className="font-heading text-3xl mb-3">
          {booksBannerText}
        </h1>

        <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
          A glimpse into my published work, collaborative anthologies,
          and ongoing poetry projects inspired by real experiences.
        </p>
      </header>

      {/* ================= BOOKS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {books.map((book) => (
          <a
            key={book.id}
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-frame p-8 transition hover:bg-frame/30 hover:translate-y-[-4px]"
          >

            {/* COVER */}
            <div className="mb-8 overflow-hidden">
              <img
                src={book.image}
                alt={`${book.title} poetry book cover`}
                className="w-full aspect-[3/4] object-cover transition group-hover:scale-[1.02]"
              />
            </div>

            {/* TITLE */}
            <h2 className="font-heading text-lg text-center mb-3">
              {book.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted text-center leading-relaxed mb-6">
              {book.description}
            </p>

            {/* CTA */}
            <span className="block text-xs tracking-widest uppercase text-center opacity-70 group-hover:opacity-100 transition">
              Buy / Read more →
            </span>
          </a>
        ))}

      </div>

      {/* ================= FOOT NOTE ================= */}
      <p className="text-muted text-sm text-center max-w-xl mx-auto mt-24 leading-relaxed">
        More work is currently in progress.  
      </p>

    </section>
  );
}
