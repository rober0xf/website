import fs from "node:fs";
import path from "node:path";
import type {
  MarkdownMetadata,
  MarkdownPostMetadataAndSlug,
} from "@/lib/types";

const POSTS_PATH = path.join(process.cwd(), "posts");

function getPostFiles(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));
}

export function getPostSlugs(): string[] {
  return getPostFiles().map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostMetadata(
  slug: string,
): Promise<MarkdownMetadata | null> {
  if (!getPostSlugs().includes(slug)) return null;

  const mod = await import(`@/posts/${slug}.mdx`);
  return mod.metadata as MarkdownMetadata;
}

export async function getAllPosts(): Promise<MarkdownPostMetadataAndSlug[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => ({
      slug,
      metadata: (await getPostMetadata(slug)) as MarkdownMetadata,
    })),
  );

  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
}
