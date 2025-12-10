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
    <section className="post-page">
      <div className="post-inner">
        {/* LEFT IMAGE */}
        {post.coverImage && (
          <div className="post-image-wrapper">
            <div className="post-image-frame">
              <img
                src={post.coverImage}
                alt={post.title}
                className="post-image"
              />
            </div>
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>

          <div className="post-body">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="post-paragraph">{children}</p>
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
