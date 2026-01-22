import { Helmet } from "react-helmet-async";

import portrait from "../assets/deepak-joshi.jpg";
import heroBg from "../assets/deepak-joshi-hero.png";
import aboutImg from "../assets/about-deepak-joshi.jpg";
import book3 from "../assets/book3.jpg";

import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Deepak Joshi — Indian Poet & Author</title>
        <meta
          name="description"
          content="Official website of Deepak Joshi, an Indian poet and author writing poetry and reflective prose on love, memory, nature, and human experience."
        />
        <link
          rel="canonical"
          href="https://authors-page-iota.vercel.app/"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Deepak Joshi — Poet & Author" />
        <meta
          property="og:description"
          content="Poetry and reflective writing exploring love, memory, nature, and emotional silence."
        />
      </Helmet>

      {/* ================= HERO BACKGROUND ================= */}
      <section className="relative w-full h-[60vh]" aria-hidden="true">
        <img
          src={heroBg}
          alt="Himalayan landscape in the background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </section>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative max-w-6xl mx-auto px-8 -mt-28 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Portrait */}
          <div className="border border-frame p-4 bg-bg">
            <img
              src={portrait}
              alt="Portrait of Deepak Joshi, Indian poet and author"
              className="w-full object-cover grayscale"
            />
          </div>

          {/* Intro */}
          <div>
            <h1 className="font-heading text-5xl tracking-widest leading-tight">
              Deepak <br /> Joshi
            </h1>

            <p className="mt-3 text-muted uppercase tracking-wider text-sm">
              Indian Poet · Author · Engineer
            </p>

            <p className="mt-6 text-muted max-w-md leading-relaxed">
              I write poetry and reflective prose shaped by love, memory,
              nature, and lived experience—exploring the quiet emotional
              landscapes that define being human.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 border border-text px-6 py-2 hover:bg-frame/30 transition"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED BOOK ================= */}
      <section className="border-t border-frame bg-frame/20">
        <div className="max-w-6xl mx-auto px-8 py-20">

          <h2 className="font-heading text-3xl mb-12">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Book Cover */}
            <div className="flex justify-center md:justify-start">
              <div className="border border-frame bg-bg p-3">
                <img
                  src={book3}
                  alt="Cover of the poetry book I Was Never Me After You by Deepak Joshi"
                  className="h-[350px] w-auto object-cover"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                Poetry Collection
              </p>

              <h3 className="font-heading text-2xl mb-4">
                I Was Never Me After You
              </h3>

              <p className="text-muted leading-relaxed mb-8">
                A collection of poems and reflections exploring love,
                loss, memory, and the quiet transformations shaped by time.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/books/i-was-never-me-after-you"
                  className="border border-text px-5 py-2 text-sm hover:bg-frame/30 transition"
                >
                  Read more
                </Link>

                <Link
                  to="/books"
                  className="border border-text px-5 py-2 text-sm hover:bg-frame/30 transition"
                >
                  View all books
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT THE AUTHOR ================= */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-t border-frame">

        <h2 className="font-heading text-3xl mb-16 text-center">
          About the Author
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="max-w-md">
            <p className="text-muted leading-relaxed mb-6">
              Deepak Joshi is an Indian poet and author whose writing explores
              the inner landscapes of love, memory, nature, and emotional silence
              through poetry and reflective prose. His work often draws from
              lived experience, observation, and quiet moments, capturing the
              subtle transformations that shape human relationships and personal
              identity.
            </p>

            <p className="text-muted leading-relaxed mb-6">
              Growing up in India, Deepak’s writing is deeply influenced by place,
              solitude, and the contrast between movement and stillness. His
              poetry reflects an attentiveness to nature and time - how landscapes,
              memories, and emotions leave lasting imprints on the human mind.
              Rather than grand narratives, his work focuses on intimate moments,
              unsaid feelings, and the spaces between words.
            </p>

            <p className="text-muted leading-relaxed mb-6">
              Alongside literature, Deepak works in the field of engineering and
              technology, a dual practice that shapes his creative approach. This
              intersection of analytical thinking and literary intuition allows
              his writing to balance structure with sensitivity, discipline with
              emotional depth. His poems and prose often carry a reflective,
              minimalist tone, emphasizing clarity, restraint, and meaning over
              excess.
            </p>

          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="border border-frame bg-bg p-4 w-[360px]">
              <img
                src={aboutImg}
                alt="Deepak Joshi writing and reflecting"
                className="w-full object-cover grayscale"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
