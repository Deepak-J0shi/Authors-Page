import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sanityClient } from "../sanityClient";
import blogsHero from "../assets/deepak-blogs.jpg";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [search, setSearch] = useState("");

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
      .then((data) => setPosts(data || []))
      .catch(console.error);
  }, []);

  /* ================= FILTER ================= */
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canLoadMore = filteredPosts.length > visibleCount;

  const keywords = ["love", "nature", "memory", "journeys", "healing"];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Blogs & Essays by Deepak Joshi | Poetry, Travel & Reflection</title>
        <meta
          name="description"
          content="Read blogs and personal essays by Deepak Joshi, an Indian poet and author. Writing on love, nature, memory, travel, healing, and lived experience."
        />
        <link
          rel="canonical"
          href="https://authors-page-iota.vercel.app/blogs"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Blogs by Deepak Joshi" />
        <meta
          property="og:description"
          content="Personal essays and reflective writing exploring love, nature, memory, and human experience."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[55vh]" aria-hidden="true">
        <img
          src={blogsHero}
          alt="Writing desk and reflective atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80"></div>

        <div className="relative max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Blogs & Essays
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Personal essays, travel reflections, and contemplative writing
            exploring love, nature, memory, and lived experience.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section
        className="max-w-6xl mx-auto px-8 py-24"
        aria-label="Blog articles"
      >

        {/* SEARCH + TAGS */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <div className="flex flex-wrap gap-3">
            {keywords.map((key) => (
              <span
                key={key}
                className="border border-frame px-3 py-1 text-xs uppercase tracking-widest text-muted"
              >
                {key}
              </span>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search writings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-frame px-4 py-2 text-sm w-full md:w-64 bg-bg focus:outline-none"
            aria-label="Search blog posts"
          />
        </div>

        {/* GRID + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">

          {/* ================= LEFT: BLOG GRID ================= */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {visiblePosts.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="group border border-frame p-5 hover:bg-frame/30 transition"
                >
                  {blog.coverImage && (
                    <img
                      src={blog.coverImage}
                      alt={`Blog post titled "${blog.title}" by Deepak Joshi`}
                      className="w-full aspect-[3/4] object-cover mb-5"
                    />
                  )}

                  <h2 className="font-heading text-base mb-2 group-hover:underline underline-offset-4">
                    {blog.title}
                  </h2>

                  {blog.excerpt && (
                    <p className="text-muted text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  )}

                  <span className="block mt-4 text-xs uppercase tracking-widest">
                    Read →
                  </span>
                </Link>
              ))}
            </div>

            {/* LOAD MORE */}
            {canLoadMore && (
              <div className="flex justify-center mt-24">
                <button
                  onClick={() => setVisibleCount((c) => c + 5)}
                  className="border border-text px-8 py-2 text-sm tracking-widest hover:bg-frame/30 transition"
                >
                  Load more blogs
                </button>
              </div>
            )}
          </div>

          {/* ================= RIGHT: STICKY SIDEBAR ================= */}
          <aside
            className="hidden lg:block sticky top-28 self-start"
            aria-label="More blog posts"
          >
            <h3 className="font-heading text-lg mb-8">
              Recent Writings
            </h3>

            <div className="space-y-6">
              {posts.slice(0, 5).map((post) => (
                <Link
                  key={post._id}
                  to={`/blogs/${post.slug}`}
                  className="flex gap-4 items-start group"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={`Cover image for blog "${post.title}"`}
                      className="w-16 h-20 object-cover border border-frame"
                    />
                  )}

                  <p className="text-sm text-muted group-hover:underline underline-offset-4">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* EMPTY STATE */}
        {!visiblePosts.length && (
          <p className="text-center text-muted mt-20">
            No writings found.
          </p>
        )}
      </section>
    </>
  );
}
