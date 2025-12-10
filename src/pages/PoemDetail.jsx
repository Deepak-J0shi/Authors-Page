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
    <section className="post-page">
      <div className="post-inner">
        {/* LEFT IMAGE */}
        {poem.coverImage && (
          <div className="post-image-wrapper">
            <div className="post-image-frame">
              <img
                src={poem.coverImage}
                alt={poem.title}
                className="post-image"
              />
            </div>
          </div>
        )}

        {/* RIGHT: POEM */}
        <div className="post-content">
          <h1 className="post-title">{poem.title}</h1>

          <div className="post-poem">
            <PortableText
              value={poem.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="post-poem-line">{children}</p>
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
