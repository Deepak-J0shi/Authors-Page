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
      <div className="grid grid-cols-2 gap-24 items-start">
        {post.coverImage && (
          <div className="border border-frame p-6">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div>
          <h1 className="font-heading text-4xl mb-10">
            {post.title}
          </h1>

          <div className="space-y-6 text-muted leading-loose">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
