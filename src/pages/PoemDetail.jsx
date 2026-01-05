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
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-2 gap-24 items-start">
        
        {/* LEFT IMAGE */}
        {poem.coverImage && (
          <div className="border border-frame p-6">
            <img
              src={poem.coverImage}
              alt={poem.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="font-heading text-4xl mb-12">
            {poem.title}
          </h1>

          <div className="space-y-4 text-muted leading-loose">
            <PortableText
              value={poem.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p>{children}</p>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
