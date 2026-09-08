import { AsciiComponent } from "@/components/ascii";
import { BookCardComponent } from "@/components/book-card";
import { BOOKS } from "@/lib/books";
import type { Book } from "@/lib/types";
import "@/app/styles/books.css";

export const BooksComponent = () => {
  const books: Book[] = BOOKS;

  if (books.length === 0) {
    return (
      <>
        <p>No books in the library yet</p>
        <AsciiComponent />
      </>
    );
  }

  return (
    <div className="books-position">
      <BookCardComponent books={books} />
    </div>
  );
};
