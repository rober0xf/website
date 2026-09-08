"use client";

import { useState } from "react";
import { ReadingStatus, type Book } from "@/lib/types";
import Image from "next/image";
import "@/app/styles/books.css";

interface Props {
  books: Book[];
}

const sections = [
  { key: "completed", label: "finished", status: ReadingStatus.finished },
  { key: "current", label: "reading", status: ReadingStatus.reading },
  { key: "pending", label: "pending", status: ReadingStatus.pending },
];

export const BookCardComponent = ({ books }: Props) => {
  const [openBox, setOpenBox] = useState<string | null>(null);

  const toggleBox = (box: string) => {
    setOpenBox((prev) => (prev === box ? null : box));
  };

  return (
    <section>
      {sections.map(({ key, label, status }) => {
        const filtered = books.filter((b) => b.status === status);

        return (
          <div key={key}>
            <button className="book-toggle" onClick={() => toggleBox(key)}>
              <span className="toggle-indicator">
                {openBox === key ? "▾" : "▸"}
              </span>
              {label}
            </button>

            {openBox === key && (
              <div className="book-grid">
                {filtered.map((book) => (
                  <div className="book-card" key={book.title}>
                    <div className="book-image">
                      <Image
                        width={150}
                        height={200}
                        src={book.url}
                        alt={book.title}
                      />
                    </div>

                    <div className="book-content">
                      <div className="book-info">
                        <span>{book.title}</span>
                        <span>-</span>
                        <span>{book.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
