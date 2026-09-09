"use client";

import { useMemo } from "react";
import "@/app/styles/music-wave.css";

// pseudo random generator
const getStableRandom = (index: number, seed: number) => {
  const x = Math.sin(index + seed) * 10000;
  return x - Math.floor(x);
};

export const SongWave = ({ bars = 25 }: { bars?: number }) => {
  const barStyles = useMemo(() => {
    return Array.from({ length: bars }).map((_, i) => {
      const duration = (1 + getStableRandom(i, 1) * 1.2).toFixed(2);
      const delay = (getStableRandom(i, 2) * 1.5).toFixed(2);
      const scale = 0.4 + getStableRandom(i, 3) * 0.6;

      return {
        // adjust full length
        left: `${(i / (bars - 1)) * 100}%`,
        animationName: "audio-wave",
        animationDuration: `${duration}s`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
        "--max-height": `${Math.round(20 * scale)}px`,
      } as React.CSSProperties;
    });
  }, [bars]);

  return (
    <div className="audio-wave" aria-hidden="true">
      {barStyles.map((style, index) => (
        <span key={index} className="audio-wave-bar" style={style} />
      ))}
    </div>
  );
};
