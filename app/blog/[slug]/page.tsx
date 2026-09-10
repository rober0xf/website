import type { Metadata } from "next";
import { PostHeaderComponent } from "@/components/post-header";
import { getPostMetadata, getPostSlugs } from "@/lib/posts";
import "../../prism-light.css";
import "@/app/styles/markdown.css";

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
    <article className="post-article">
      <PostHeaderComponent metadata={metadata} />

      <div className="prose-content">
        <Post />
      </div>
    </article>
  );
}
