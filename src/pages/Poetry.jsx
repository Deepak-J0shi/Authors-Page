// src/pages/Poetry.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import poetryHero from "../assets/poetry-hero.jpg";

export default function Poetry() {
  const [poems, setPoems] = useState([]);
  const [error, setError] = useState(null);

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
        console.log("POEMS FROM SANITY >>>", data);
        setPoems(data || []);
      })
      .catch((err) => {
        console.error("SANITY POEM ERROR >>>", err);
        setError(err.message || "Something went wrong");
      });
  }, []);

  return (
    <section className="poetry-page">
      <h1 className="poetry-heading">Read My Poetry</h1>

      {/* Hero image */}
      <div className="poetry-hero-wrapper">
        <div className="poetry-hero-frame">
          <img
            src={poetryHero}
            alt="Writing poetry"
            className="poetry-hero-image"
          />
        </div>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Error loading poems: {error}
        </p>
      )}

      {/* Poem cards */}
      <div className="poetry-grid">
        {poems.map((poem) => (
          <Link
            key={poem._id}
            to={`/poetry/${poem.slug}`}
            className="poem-card"
          >
            <div className="poem-card-inner">
              {poem.coverImage && (
                <img
                  src={poem.coverImage}
                  alt={poem.title}
                  className="poem-card-image"
                />
              )}

              <h2 className="poem-title">{poem.title}</h2>
              <span className="poem-cta">Read poem →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
