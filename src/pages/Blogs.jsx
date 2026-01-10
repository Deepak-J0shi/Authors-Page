import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import blogsHero from "../assets/deepak-blogs.jpg";

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
      
      {/* ================= PAGE HEADER ================= */}
      <header className="text-center mb-20">
        <h1 className="font-heading text-4xl mb-6">
          Read My Blogs
        </h1>

        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          A growing collection of personal essays, travel reflections,
          and contemplative writing exploring love, nature, memory,
          and lived experience Written by Deepak Joshi.
        </p>
      </header>

      {/* ================= HERO IMAGE ================= */}
      <div className="border border-frame p-6 mb-24">
        <img
          src={blogsHero}
          alt="Writing desk and notebook"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <p className="text-center text-muted tracking-wide">
          Gathering words…
        </p>
      )}

      {/* ================= BLOG GRID ================= */}
      {!loading && visiblePosts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {visiblePosts.map((blog) => (
              <Link
                key={blog._id}
                to={`/blogs/${blog.slug}`}
                className="group border border-frame p-6 transition hover:bg-frame/30"
              >
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full aspect-[3/4] object-cover mb-6"
                  />
                )}

                <h2 className="font-heading text-lg mb-3 group-hover:underline underline-offset-4">
                  {blog.title}
                </h2>

                {blog.excerpt && (
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}

                <span className="text-xs uppercase tracking-widest text-text">
                  Read →
                </span>
              </Link>
            ))}
          </div>

          {/* ================= LOAD MORE ================= */}
          {canLoadMore && (
            <div className="flex justify-center mt-24">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="border border-text px-8 py-2 text-sm tracking-wider hover:bg-frame/30 transition"
              >
                Load more writings
              </button>
            </div>
          )}
        </>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!loading && posts.length === 0 && (
        <p className="text-center text-muted max-w-md mx-auto leading-relaxed">
          No writings published yet.  
          New essays and reflections will appear here soon.
        </p>
      )}
    </section>
  );
}
