"use client";

import type { CSSProperties } from "react";

interface StarsProps {
  theme?: "light" | "dark";
}

type Star = {
  left: string;
  duration: string;
  delay: string;
  size: string;
};

const STARS: Star[] = Array.from({ length: 80 }).map(() => ({
  left: `${Math.random() * 100}%`,
  duration: `${6 + Math.random() * 12}s`,
  delay: `${Math.random() * 5}s`,
  size: `${1 + Math.random() * 4}px`,
}));

type StarStyle = CSSProperties & {
  "--star-size": string;
};

export default function StarsBackground({ theme = "dark" }: StarsProps) {
  return (
    <div className={`stars-wrapper ${theme}`}>
      {STARS.map((star, i) => {
        const style: StarStyle = {
          left: star.left,
          animationDuration: star.duration,
          animationDelay: star.delay,
          "--star-size": star.size,
        };

        return <span key={i} className="star" style={style} />;
      })}
    </div>
  );
}
