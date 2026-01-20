import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import poetryHero from "../assets/poetry-hero.jpg";

export default function Poetry() {
  const [poems, setPoems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "poem"] | order(createdAt desc) {
          _id,
          title,
          "slug": slug.current,
          "coverImage": coverImage.asset->url
        }`
      )
      .then((data) => {
        setPoems(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const visiblePoems = poems.slice(0, visibleCount);
  const canLoadMore = poems.length > visibleCount;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[55vh]">
        <img
          src={poetryHero}
          alt="Poetry background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80"></div>

        <div className="relative max-w-6xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Poems & Verses
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            A collection of poems shaped by love, memory, silence,
            and lived emotion — written as fragments of thought
            and moments of reflection.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        {loading && (
          <p className="text-center text-muted tracking-wide">
            Gathering verses…
          </p>
        )}

        {!loading && poems.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
            
            {/* ================= LEFT: POEMS ================= */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {visiblePoems.map((poem) => (
                  <Link
                    key={poem._id}
                    to={`/poetry/${poem.slug}`}
                    className="group border border-frame p-5 hover:bg-frame/30 transition"
                  >
                    {poem.coverImage && (
                      <img
                        src={poem.coverImage}
                        alt={poem.title}
                        className="w-full aspect-[3/4] object-cover mb-5"
                      />
                    )}

                    <h2 className="font-heading text-base mb-2 group-hover:underline underline-offset-4">
                      {poem.title}
                    </h2>

                    <span className="block mt-4 text-xs uppercase tracking-widest">
                      Read poem →
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
                    Load more poems
                  </button>
                </div>
              )}
            </div>

            {/* ================= RIGHT: STICKY SIDEBAR ================= */}
            <aside className="hidden lg:block sticky top-28 self-start">
              <h3 className="font-heading text-lg mb-8">
                More Poems
              </h3>

              <div className="space-y-6">
                {poems.slice(0, 5).map((poem) => (
                  <Link
                    key={poem._id}
                    to={`/poetry/${poem.slug}`}
                    className="flex gap-4 items-start group"
                  >
                    {poem.coverImage && (
                      <img
                        src={poem.coverImage}
                        alt={poem.title}
                        className="w-16 h-20 object-cover border border-frame"
                      />
                    )}

                    <p className="text-sm text-muted group-hover:underline underline-offset-4">
                      {poem.title}
                    </p>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        )}

        {!loading && poems.length === 0 && (
          <p className="text-center text-muted max-w-md mx-auto leading-relaxed">
            No poems published yet.  
            New verses will appear here soon.
          </p>
        )}
      </section>
    </>
  );
}
