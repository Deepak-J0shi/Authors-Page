import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sanityClient } from "../sanityClient";
import { PortableText } from "@portabletext/react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          "coverImage": coverImage.asset->url,
          body
        }`,
        { slug }
      )
      .then(setPost)
      .catch(console.error);
  }, [slug]);

  if (!post) return null;

  // Simple text extraction for meta description (SEO-safe)
  const metaDescription =
    post.body?.find((block) => block._type === "block" && block.children)
      ?.children?.map((child) => child.text)
      ?.join(" ")
      ?.slice(0, 160) ||
    `Read the blog "${post.title}" by Deepak Joshi.`;

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{post.title} | Blog by Deepak Joshi</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <link
          rel="canonical"
          href={`https://authors-page-iota.vercel.app/blogs/${slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={metaDescription}
        />
        {post.coverImage && (
          <meta property="og:image" content={post.coverImage} />
        )}
      </Helmet>

      {/* ================= CONTENT ================= */}
      <article
        className="max-w-6xl mx-auto px-6 md:px-8 py-20"
        aria-label={`Blog post titled ${post.title}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT: STICKY IMAGE */}
          {post.coverImage && (
            <div className="md:sticky md:top-32 self-start">
              <div className="border border-frame p-4">
                <img
                  src={post.coverImage}
                  alt={`Cover image for blog "${post.title}" by Deepak Joshi`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* RIGHT: SCROLLING CONTENT */}
          <div>
            <h1 className="font-heading text-4xl mb-10">
              {post.title}
            </h1>

            <PortableText
              value={post.body}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h2 className="font-heading text-3xl mt-14 mb-6">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="font-heading text-2xl mt-12 mb-5">
                      {children}
                    </h3>
                  ),
                  h3: ({ children }) => (
                    <h4 className="font-heading text-xl mt-10 mb-4">
                      {children}
                    </h4>
                  ),
                  normal: ({ children }) => (
                    <p className="text-muted leading-loose mb-6">
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
