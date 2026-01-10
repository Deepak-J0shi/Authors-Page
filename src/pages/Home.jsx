import portrait from "../assets/deepak-joshi.jpg";
import heroBg from "../assets/deepak-joshi-hero.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO BACKGROUND ================= */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroBg}
          alt="Himalayan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </section>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative max-w-6xl mx-auto px-8 -mt-40 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Portrait */}
          <div className="border border-frame p-4 bg-bg">
            <img
              src={portrait}
              alt="Deepak Joshi"
              className="w-full object-cover grayscale"
            />
          </div>

          {/* Intro */}
          <div>
            <h1 className="font-heading text-5xl tracking-widest leading-tight">
              DEEPAK <br /> JOSHI
            </h1>

            <p className="mt-4 text-muted uppercase tracking-wider text-sm">
              Poet · Author · Engineer
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 border border-text px-6 py-2 hover:bg-frame/30 transition"
            >
              Get in touch
            </button>

            <p className="mt-8 text-muted max-w-md leading-relaxed">
              Deepak Joshi is an Indian poet, author, and computer science
              engineer. His writing explores speculative fiction poetry,
              reflective prose, and narrative essays rooted in love, nature,
              emotional healing, and lived experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT I WRITE ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <h2 className="font-heading text-3xl mb-12">
          What I Write About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-muted">
          <p>
            <span className="font-heading block mb-2 text-text">Love</span>
            Intimate emotions, quiet longing, and human connection.
          </p>

          <p>
            <span className="font-heading block mb-2 text-text">Nature</span>
            Mountains, rivers, silence, and landscapes that shape memory.
          </p>

          <p>
            <span className="font-heading block mb-2 text-text">Healing</span>
            Poetry as reflection, grief, and emotional recovery.
          </p>
        </div>
      </section>

      {/* ================= FEATURED WRITING ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <h2 className="font-heading text-3xl mb-12">
          Featured Writing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border border-frame p-6">
            <p className="text-xs uppercase tracking-widest mb-3">
              Blog
            </p>
            <h3 className="font-heading text-xl mb-4">
              A Signboard
            </h3>
            <p className="text-muted">
              A travel reflection asking myself whether everyone around me will remember me or not?
            </p>
          </div>

          <div className="border border-frame p-6">
            <p className="text-xs uppercase tracking-widest mb-3">
              Poetry
            </p>
            <h3 className="font-heading text-xl mb-4">
              Us
            </h3>
            <p className="text-muted">
              Poems inspired by real relationships and lived emotions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BOOKS & PUBLICATIONS ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <h2 className="font-heading text-3xl mb-12">
          Books & Publications
        </h2>

        <p className="text-muted max-w-xl mb-10">
          My writing has appeared in collaborative poetry collections
          and anthologies, with more work currently in progress.
        </p>

        <ul className="space-y-4 text-muted">
          <li>— Yellow Days (Poetry Anthology)</li>
          <li>— 120 Amazing Poems (Contributor)</li>
          <li>— Us (Upcoming Poetry Collection)</li>
        </ul>
      </section>

      {/* ================= SOFT CTA ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">
        <p className="font-heading text-2xl max-w-2xl">
          If my words resonate with you, feel free to read,
          share, or reach out.
        </p>
      </section>
    </>
  );
}
