// BOOKS
export const ReadingStatus = {
  finished: "Finished",
  reading: "Reading",
  pending: "Pending",
} as const;
export type ReadingStatus = (typeof ReadingStatus)[keyof typeof ReadingStatus];

// PROJECTS
export const ProjectStatus = {
  done: "Done",
  online: "Online",
  in_dev: "In Dev",
  abandoned: "Abandoned",
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const Language = {
  python: "Python",
  typescript: "Typescript",
  go: "Go",
  pawn: "Pawn",
} as const;
export type Language = (typeof Language)[keyof typeof Language];

// BOOKS
export interface Book {
  title: string;
  author: string;
  status: ReadingStatus;
  url: string;
}

// PROJECTS
export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  url: string;
  language: Language;
}

// POSTS
export interface MarkdownMetadata {
  title: string;
  topic: string;
  imgUrl: string;
  publishedAt: string;
  [key: string]: unknown;
}

export interface MarkdownPostMetadataAndSlug {
  slug: string;
  metadata: MarkdownMetadata;
}

// SONG
export interface AlbumImage {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
}

export interface LastSong {
  name: string;
  artist: { "#text": string; mbid?: string };
  album: { "#text": string; mbid?: string };
  url: string;
  image: AlbumImage[];
  date?: {
    uts: string;
    "#text": string;
  };
  "@attr"?: {
    nowplaying?: string;
  };
}

export interface RecentSongs {
  track: LastSong[];
}

export interface SongResponse {
  recenttracks: RecentSongs;
}
