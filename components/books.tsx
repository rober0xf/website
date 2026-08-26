import { AsciiComponent } from "@/components/ascii";
import { BookCardComponent } from "@/components/book-card";
import { BOOKS } from "@/lib/books";
import type { Book } from "@/lib/types";

export const BooksComponent = () => {
  const books: Book[] = BOOKS;

  if (books.length === 0) {
    return (
      <>
        <div className="empty text-center font-medium text-red-800">
          No books in the library yet
        </div>
        <AsciiComponent />
      </>
    );
  }

  return (
    <div className="mt-16">
      <BookCardComponent books={books} />
    </div>
  );
};
