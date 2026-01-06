// src/pages/PoemDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import { PortableText } from "@portabletext/react";

export default function PoemDetail() {
  const { slug } = useParams();
  const [poem, setPoem] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "poem" && slug.current == $slug][0]{
          title,
          "coverImage": coverImage.asset->url,
          body
        }`,
        { slug }
      )
      .then(setPoem)
      .catch(console.error);
  }, [slug]);

  if (!poem) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: STICKY IMAGE */}
        {poem.coverImage && (
          <div className="md:sticky md:top-32 self-start">
            <div className="border border-frame p-4">
              <img
                src={poem.coverImage}
                alt={poem.title}
                className="w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* RIGHT: SCROLLING POEM */}
        <div>
          <h1 className="font-heading text-4xl mb-12">
            {poem.title}
          </h1>

          <PortableText
            value={poem.body}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-muted leading-loose mb-4">
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
