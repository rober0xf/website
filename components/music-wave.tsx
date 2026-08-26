"use client";

import { useMemo } from "react";

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
    <div className="relative h-[24px] w-full overflow-hidden block">
      <style jsx>{`
        @keyframes audio-wave {
          0%,
          100% {
            height: 3px;
          }
          50% {
            height: var(--max-height, 18px);
          }
        }
      `}</style>

      {barStyles.map((style, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-[2px] bg-[#579BEA] block rounded-full"
          style={style}
        />
      ))}
    </div>
  );
};
