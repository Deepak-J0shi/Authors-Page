// src/pages/Blogs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import blogsHero from "../assets/blogs-hero.jpg";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(createdAt desc) {
          _id,
          title,
          "slug": slug.current,
          "coverImage": coverImage.asset->url,
          excerpt
        }`
      )
      .then((data) => {
        console.log("BLOGS FROM SANITY >>>", data);
        setPosts(data || []);
      })
      .catch((err) => {
        console.error("SANITY BLOG ERROR >>>", err);
        setError(err.message || "Something went wrong");
      });
  }, []);

  return (
    <section className="blogs-page">
      <h1 className="blogs-heading">Read My Blogs</h1>

      {/* Hero image */}
      <div className="blogs-hero-wrapper">
        <div className="blogs-hero-frame">
          <img
            src={blogsHero}
            alt="Reading a book"
            className="blogs-hero-image"
          />
        </div>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Error loading blogs: {error}
        </p>
      )}

      {/* Blog cards */}
      <div className="blogs-grid">
        {posts.map((blog) => (
          <Link
            key={blog._id}
            to={`/blogs/${blog.slug}`}
            className="blog-card"
          >
            <div className="blog-card-inner">
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="blog-card-image"
                />
              )}

              <h2 className="blog-title">{blog.title}</h2>

              {blog.excerpt && (
                <p className="blog-description">{blog.excerpt}</p>
              )}

              <span className="blog-cta">Read blog →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
