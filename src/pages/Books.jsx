// src/pages/Books.jsx
import { books, booksBannerText } from "../data/books";

function Books() {
  return (
    <section className="books-page">
      <div className="books-banner">
        <h1>{booksBannerText}</h1>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="book-card"
          >
            <div className="book-card-inner">

              {/* Cover image */}
              <img src={book.image} alt={book.title} className="book-cover" />

              <h2 className="book-title">{book.title}</h2>
              <p className="book-description">{book.description}</p>

              <span className="book-cta">Buy / Read more →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Books;
