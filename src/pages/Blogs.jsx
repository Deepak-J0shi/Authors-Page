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
      })
      .catch(() => setLoading(false));
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const canLoadMore = posts.length > visibleCount;

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      {/* Page title */}
      <h1 className="font-heading text-4xl text-center mb-12">
        Read My Blogs
      </h1>

      {/* Hero image */}
      <div className="border border-frame p-6 mb-10">
        <img
          src={blogsHero}
          alt="Writing desk"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Intro line */}
      <p className="text-center text-muted max-w-xl mx-auto mb-20">
        A collection of reflections, fragments, and quiet thoughts
        written over time.
      </p>

      {/* Loading */}
      {loading && (
        <p className="text-center text-muted">Loading blogs…</p>
      )}

      {/* Blog grid */}
      {!loading && visiblePosts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    className="w-full aspect-[3/4] object-cover mb-6"
                  />
                )}

                <h2 className="font-heading text-lg mb-3">
                  {blog.title}
                </h2>

                {blog.excerpt && (
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}

                <span className="text-sm">Read blog →</span>
              </Link>
            ))}
          </div>

          {/* Load more */}
          {canLoadMore && (
            <div className="flex justify-center mt-20">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="border border-text px-6 py-2 text-sm hover:bg-frame/30 transition"
              >
                Load more blogs
              </button>
            </div>
          )}
        </>
      )}

      {/* Empty state */}
      {!loading && posts.length === 0 && (
        <p className="text-center text-muted">
          No blogs yet. Check back soon.
        </p>
      )}
    </section>
  );
}
