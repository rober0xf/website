"use client";

import { useEffect, useState } from "react";
import { SongWave } from "./music-wave";
import type { SongResponse } from "@/lib/types";

const POLL_INTERVAL = 30_000; // 30s

export const RecentSongComponent = () => {
  const [data, setData] = useState<SongResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchSong = async () => {
      try {
        const res = await fetch("/api/recent-song", { cache: "no-store" });
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        console.error("error to poll recent song:", err);
      }
    };

    fetchSong();
    const id = setInterval(fetchSong, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const track = data?.recenttracks?.track?.[0];
  if (!track) return null;

  const isPlaying = track["@attr"]?.nowplaying === "true";
  const albumArt =
    track.image?.find((img) => img.size === "medium")?.["#text"] ||
    track.image?.find((img) => img.size === "small")?.["#text"] ||
    "";
  const artistName = track.artist["#text"];
  const albumName = track.album["#text"];

  return (
    <div className="recent-song py-14">
      <div className="recent-song-inner">
        {albumArt && (
          <img
            src={albumArt}
            alt={`${albumName || track.name} album art`}
            className="recent-song-art"
          />
        )}
        <div className="recent-song-info">
          <p className="recent-song-label">
            <span className="recent-song-dot" />
            {isPlaying ? "now listening" : "last played"}
          </p>
          <p className="recent-song-name">{track.name}</p>
          <p className="recent-song-artist">{artistName}</p>
          <div className="w-full">
            <SongWave />
          </div>
        </div>
      </div>
    </div>
  );
};
