// src/pages/Blogs.jsx
import blogsHero from "../assets/blogs-hero.jpg"; // big top image
import { blogs } from "../data/blogs";

export default function Blogs() {
  return (
    <div className="blogs-page">
      {/* Big heading */}
      <h1 className="blogs-heading">Read My Blogs</h1>

      {/* Hero image */}
      <div className="blogs-hero-wrapper">
        <div className="blogs-hero-frame">
          <img src={blogsHero} alt="Reading a book" className="blogs-hero-image" />
        </div>
      </div>

      {/* Blog cards */}
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="blog-card"
          >
            <div className="blog-card-inner">
              <img src={blog.image} alt={blog.title} className="blog-card-image" />

              <h2 className="blog-title">{blog.title}</h2>

              <p className="blog-description">{blog.description}</p>

              <span className="blog-cta">Read blog →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
