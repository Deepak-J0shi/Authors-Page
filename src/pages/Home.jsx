// src/pages/Home.jsx
import portrait from "../assets/deepak-portrait.jpg";

function Home() {
  return (
    <section className="hero">
      {/* Left: image */}
      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <img src={portrait} alt="Deepak Joshi" className="hero-image" />
        </div>
      </div>

      {/* Right: text */}
      <div className="hero-content">
        <h1 className="hero-name">
          DEEPAK
          <br />
          JOSHI
        </h1>

        <p className="hero-role">Poet • Author</p>

        <button className="btn-primary">Get in touch</button>

        <p className="hero-bio">
          I write reflective poetry and short prose that explore quiet moments,
          unanswered questions, and the soft spaces between love, distance, and
          coming home to yourself.
        </p>
      </div>
    </section>
  );
}

export default Home;
