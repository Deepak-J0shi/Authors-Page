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
      .then(setPoems);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="font-heading text-4xl text-center mb-14">
        Read My Poetry
      </h1>

      <div className="border border-frame p-6 mb-20">
        <img src={poetryHero} alt="" className="w-full" />
      </div>

      <div className="grid grid-cols-3 gap-12">
        {poems.slice(0, visibleCount).map((poem) => (
          <Link
            key={poem._id}
            to={`/poetry/${poem.slug}`}
            className="border border-frame p-6 hover:bg-frame/30 transition"
          >
            {poem.coverImage && (
              <img src={poem.coverImage} alt={poem.title} className="mb-6" />
            )}

            <h2 className="font-heading">
              {poem.title}
            </h2>

            <span className="text-sm mt-4 block">
              Read poem →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
