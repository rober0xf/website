import Link from "next/link";
import { AsciiComponent } from "@/components/ascii";
import type { MarkdownPostMetadataAndSlug } from "@/lib/types";
import "@/app/styles/posts.css";

interface Props {
  posts: MarkdownPostMetadataAndSlug[];
}

export const PostsComponent = ({ posts }: Props) => {
  if (!posts || posts.length === 0) {
    return (
      <>
        <div>No articles yet</div>
        <AsciiComponent />
      </>
    );
  }

  return (
    <div className="posts-wrapper">
      <div className="posts-container">
        {posts.map((post, index) => {
          if (!post.metadata) return null;

          return (
            <div key={post.slug}>
              <article className="post-card">
                <h2 className="post-title">
                  <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
                </h2>

                <p className="post-topic">
                  <span>Topic: </span>
                  {post.metadata.topic}
                </p>
              </article>

              {index < posts.length - 1 && <div className="separator" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
