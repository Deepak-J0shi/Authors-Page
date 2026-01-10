// // src/pages/Poetry.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { sanityClient } from "../sanityClient";
// import poetryHero from "../assets/poetry-hero.jpg";

// export default function Poetry() {
//   const [poems, setPoems] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "poem"] | order(createdAt desc) {
//           _id,
//           title,
//           "slug": slug.current,
//           "coverImage": coverImage.asset->url
//         }`
//       )
//       .then((data) => setPoems(data || []))
//       .catch(console.error);
//   }, []);

//   return (
//     <section className="max-w-6xl mx-auto px-8 py-20">
//       <h1 className="font-heading text-4xl text-center mb-14">
//         Read My Poetry
//       </h1>

//       <div className="border border-frame p-6 mb-20">
//         <img
//           src={poetryHero}
//           alt="Poetry hero"
//           className="w-full h-[520px] object-cover"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {poems.slice(0, visibleCount).map((poem) => (
//           <Link
//             key={poem._id}
//             to={`/poetry/${poem.slug}`}
//             className="border border-frame p-6 transition hover:translate-y-[-4px] hover:bg-frame/30"
//           >
//             {poem.coverImage && (
//               <img
//                 src={poem.coverImage}
//                 alt={poem.title}
//                 className="w-full aspect-[3/4] object-cover mb-6"
//               />
//             )}

//             <h2 className="font-heading text-lg mb-2">
//               {poem.title}
//             </h2>

//             <span className="text-sm text-muted">
//               Read poem →
//             </span>
//           </Link>
//         ))}
//       </div>

//       {poems.length > visibleCount && (
//         <div className="text-center mt-20">
//           <button
//             onClick={() => setVisibleCount((c) => c + 6)}
//             className="border border-text px-6 py-2 text-sm"
//           >
//             Load more poems
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import poetryHero from "../assets/poetry-hero.jpg";

export default function Poetry() {
  const [poems, setPoems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
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
    <section className="max-w-6xl mx-auto px-8 py-24">

      {/* ================= PAGE HEADER ================= */}
      <header className="text-center mb-20">
        <h1 className="font-heading text-4xl mb-6">
          Poems & Verses
        </h1>

        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          A collection of poems shaped by memory, love, silence,
          and lived emotion — written as fragments of thought
          and moments of reflection.
        </p>
      </header>

      {/* ================= HERO IMAGE ================= */}
      <div className="border border-frame p-6 mb-24">
        <img
          src={poetryHero}
          alt="Poetry and writing atmosphere"
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <p className="text-center text-muted tracking-wide">
          Gathering verses…
        </p>
      )}

      {/* ================= POETRY GRID ================= */}
      {!loading && visiblePoems.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {visiblePoems.map((poem) => (
              <Link
                key={poem._id}
                to={`/poetry/${poem.slug}`}
                className="group border border-frame p-6 transition hover:bg-frame/30"
              >
                {poem.coverImage && (
                  <img
                    src={poem.coverImage}
                    alt={poem.title}
                    className="w-full aspect-[3/4] object-cover mb-6"
                  />
                )}

                <h2 className="font-heading text-lg mb-3 group-hover:underline underline-offset-4">
                  {poem.title}
                </h2>

                <span className="text-xs uppercase tracking-widest text-text">
                  Read poem →
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
                Load more poems
              </button>
            </div>
          )}
        </>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!loading && poems.length === 0 && (
        <p className="text-center text-muted max-w-md mx-auto leading-relaxed">
          No poems published yet.  
          New verses will appear here soon.
        </p>
      )}
    </section>
  );
}
