import { SongResponse } from "./types";

export async function getRecentSong(): Promise<SongResponse | null> {
  const url = new URL(process.env.URL!);
  url.searchParams.set("method", "user.getrecenttracks");
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}
