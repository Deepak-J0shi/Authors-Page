// src/pages/Blogs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import blogsHero from "../assets/blogs-hero.jpg";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

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
        setPosts(data || []);
        setLoading(false);
      });
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="font-heading text-4xl text-center mb-14">
        Read My Blogs
      </h1>

      <div className="border border-frame p-6 mb-20">
        <img src={blogsHero} alt="" className="w-full" />
      </div>

      {!loading && (
        <div className="grid grid-cols-3 gap-12">
          {visiblePosts.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog.slug}`}
              className="border border-frame p-6 hover:bg-frame/30 transition"
            >
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="mb-6"
                />
              )}

              <h2 className="font-heading text-lg mb-3">
                {blog.title}
              </h2>

              {blog.excerpt && (
                <p className="text-muted text-sm mb-4">
                  {blog.excerpt}
                </p>
              )}

              <span className="text-sm">Read blog →</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
