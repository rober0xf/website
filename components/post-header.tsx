import type { MarkdownMetadata } from "@/lib/types";
import { formatPublishedAt } from "@/lib/dates";
import Image from "next/image";
import "@/app/styles/post-header.css";

interface Props {
  metadata: MarkdownMetadata | null;
}

export const PostHeaderComponent = ({ metadata }: Props) => {
  if (!metadata) {
    return <div className="post-not-found">Article not found</div>;
  }

  return (
    <header className="post-header">
      <div className="post-header-content">
        <h1 className="post-header-title">{metadata.title}</h1>
        <div className="post-header-date">
          <span>Published: </span>
          <time dateTime={metadata.publishedAt}>
            {formatPublishedAt(metadata.publishedAt)}
          </time>
        </div>

        <div className="post-header-image">
          <Image
            src={metadata.imgUrl}
            alt="Description"
            width={500}
            height={300}
          />
        </div>
      </div>
    </header>
  );
};
