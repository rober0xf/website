import type { Metadata } from "next";
import { BooksComponent } from "@/components/books";

export const metadata: Metadata = {
  title: "rober | bookshelf",
};

export default function Page() {
  return <BooksComponent />;
}
