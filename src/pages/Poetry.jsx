// src/pages/Poetry.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import poetryHero from "../assets/poetry-hero.jpg";

export default function Poetry() {
  const [poems, setPoems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

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
      .then((data) => setPoems(data || []))
      .catch(console.error);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="font-heading text-4xl text-center mb-14">
        Read My Poetry
      </h1>

      <div className="border border-frame p-6 mb-20">
        <img
          src={poetryHero}
          alt="Poetry hero"
          className="w-full h-[520px] object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {poems.slice(0, visibleCount).map((poem) => (
          <Link
            key={poem._id}
            to={`/poetry/${poem.slug}`}
            className="border border-frame p-6 transition hover:translate-y-[-4px] hover:bg-frame/30"
          >
            {poem.coverImage && (
              <img
                src={poem.coverImage}
                alt={poem.title}
                className="w-full aspect-[3/4] object-cover mb-6"
              />
            )}

            <h2 className="font-heading text-lg mb-2">
              {poem.title}
            </h2>

            <span className="text-sm text-muted">
              Read poem →
            </span>
          </Link>
        ))}
      </div>

      {poems.length > visibleCount && (
        <div className="text-center mt-20">
          <button
            onClick={() => setVisibleCount((c) => c + 6)}
            className="border border-text px-6 py-2 text-sm"
          >
            Load more poems
          </button>
        </div>
      )}
    </section>
  );
}
