import type { Metadata } from "next";
import { PostsComponent } from "@/components/posts";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "rober | articles",
};

export default async function Page() {
  const posts = await getAllPosts();

  return <PostsComponent posts={posts} />;
}
