import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  // Extract first lines for SEO meta description
  const metaDescription =
    poem.body?.find((block) => block._type === "block" && block.children)
      ?.children?.map((child) => child.text)
      ?.join(" ")
      ?.slice(0, 160) ||
    `Read the poem "${poem.title}" by Deepak Joshi.`;

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{poem.title} | Poem by Deepak Joshi</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <link
          rel="canonical"
          href={`https://authors-page-iota.vercel.app/poetry/${slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={poem.title} />
        <meta
          property="og:description"
          content={metaDescription}
        />
        {poem.coverImage && (
          <meta property="og:image" content={poem.coverImage} />
        )}
      </Helmet>

      {/* ================= CONTENT ================= */}
      <article
        className="max-w-6xl mx-auto px-6 md:px-8 py-20"
        aria-label={`Poem titled ${poem.title}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT: STICKY IMAGE */}
          {poem.coverImage && (
            <div className="md:sticky md:top-32 self-start">
              <div className="border border-frame p-4">
                <img
                  src={poem.coverImage}
                  alt={`Cover image for poem "${poem.title}" by Deepak Joshi`}
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
      </article>
    </>
  );
}
