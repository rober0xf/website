import type { MarkdownMetadata } from "@/lib/types";
import { formatPublishedAt } from "@/lib/dates";

interface Props {
  metadata: MarkdownMetadata | null;
}

export const PostHeaderComponent = ({ metadata }: Props) => {
  if (!metadata) {
    return (
      <div className="pt-5 text-center font-medium text-red-800">
        Article not found
      </div>
    );
  }

  return (
    <header className="mt-6 rounded-lg border border-stone-200 bg-stone-50 p-6 text-stone-800">
      <div className="mt-6 pt-5 text-center sm:text-left">
        <h1 className="mb-3 text-4xl font-bold text-stone-800">
          {metadata.title}
        </h1>
        <div className="inline-block py-2">
          <span className="font-medium text-[#1e40af]">Published: </span>
          <time
            className="font-normal text-stone-500"
            dateTime={metadata.publishedAt}
          >
            {formatPublishedAt(metadata.publishedAt)}
          </time>
        </div>

        <div className="mx-auto mt-10 mb-6 w-full sm:w-3/5">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={metadata.imgUrl}
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
