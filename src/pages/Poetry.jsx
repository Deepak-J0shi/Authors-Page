// src/pages/Poetry.jsx
import poetryHero from "../assets/poetry-hero.jpg"; // big top image
import { poems } from "../data/poems";

export default function Poetry() {
  return (
    <div className="poetry-page">
      {/* Heading */}
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

      {/* Poem cards */}
      <div className="poetry-grid">
        {poems.map((poem) => (
          <a
            key={poem.id}
            href={poem.link}
            target="_blank"
            rel="noreferrer"
            className="poem-card"
          >
            <div className="poem-card-inner">
              <img
                src={poem.image}
                alt={poem.title}
                className="poem-card-image"
              />

              <h2 className="poem-title">{poem.title}</h2>

              <p className="poem-description">{poem.description}</p>

              <span className="poem-cta">Read poem →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
