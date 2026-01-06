// src/pages/BlogDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        
        {/* Image */}
        {post.coverImage && (
          <div className="border border-frame p-6">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div>
          <h1 className="font-heading text-4xl mb-10">
            {post.title}
          </h1>

          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="font-heading text-3xl mt-12 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-heading text-2xl mt-10 mb-5">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-xl mt-8 mb-4">
                    {children}
                  </h3>
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
    </section>
  );
}
