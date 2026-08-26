import type { Metadata } from "next";
import { PostHeaderComponent } from "@/components/post-header";
import { getPostMetadata, getPostSlugs } from "@/lib/posts";
import "../../prism-light.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const metadata = await getPostMetadata(slug);

  return { title: `rober | ${metadata?.title ?? "not found"}` };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = await getPostMetadata(slug);
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return (
    <article>
      <PostHeaderComponent metadata={metadata} />

      <div className="prose prose-stone max-w-none px-4 py-4">
        <Post />
      </div>
    </article>
  );
}
