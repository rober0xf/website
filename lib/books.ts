import { ReadingStatus, type Book } from "@/lib/types";

const imagePath = "/books/";

export const BOOKS: Book[] = [
  // finished
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    status: ReadingStatus.finished,
    url: `${imagePath}python-crash-course.webp`,
  },
  {
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    status: ReadingStatus.finished,
    url: `${imagePath}grokking.webp`,
  },

  // reading
  {
    title: "Learning Go",
    author: "Jon Bodner",
    status: ReadingStatus.reading,
    url: `${imagePath}learning-go.webp`,
  },
  {
    title: "Effective Python",
    author: "Brett Slatkin",
    status: ReadingStatus.reading,
    url: `${imagePath}effective-python.webp`,
  },

  // want to read
  {
    title: "Data Structures & Algorithms in Python",
    author: "Michael Goodrich",
    status: ReadingStatus.pending,
    url: `${imagePath}dsa-in-python.webp`,
  },
  {
    title: "Architecture Patterns with Python",
    author: "Harry Percival, Bob Gregory",
    status: ReadingStatus.pending,
    url: `${imagePath}architecture-patterns.webp`,
  },
  {
    title: "Design Data-Intensive Applications",
    author: "Martin Kleppmann",
    status: ReadingStatus.pending,
    url: `${imagePath}design-data-intensive-apps.webp`,
  },
];
