import Link from "next/link";
import { AsciiComponent } from "@/components/ascii";
import type { MarkdownPostMetadataAndSlug } from "@/lib/types";

interface Props {
  posts: MarkdownPostMetadataAndSlug[];
}

export const PostsComponent = ({ posts }: Props) => {
  if (!posts || posts.length === 0) {
    return (
      <>
        <div className="empty text-center font-medium text-red-800">
          No articles yet
        </div>
        <AsciiComponent />
      </>
    );
  }

  return (
    <div className="posts-wrapper">
      <div className="posts-container">
        {posts.map((post, i) => {
          if (!post.metadata) return null;

          return (
            <div key={post.slug}>
              <article className="post-card">
                <h2 className="post-title font-sans">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#1e40af]"
                  >
                    {post.metadata.title}
                  </Link>
                </h2>

                <p className="post-topic">
                  <span className="poppins text-[#1e40af] font-medium">
                    Topic:{" "}
                  </span>
                  {post.metadata.topic}
                </p>
              </article>

              {i < posts.length - 1 && (
                <div className="mx-auto my-10 h-px w-40 bg-stone-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
