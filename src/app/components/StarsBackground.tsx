"use client";

import { useTheme } from "next-themes";
import { useState, type CSSProperties } from "react";

type Star = {
  left: string;
  duration: string;
  delay: string;
  size: string;
};

type StarStyle = CSSProperties & {
  "--star-size": string;
};

function generateStars(): Star[] {
  return Array.from({ length: 80 }).map(() => ({
    left: `${Math.random() * 100}%`,
    duration: `${6 + Math.random() * 12}s`,
    delay: `${Math.random() * 5}s`,
    size: `${1 + Math.random() * 4}px`,
  }));
}

export default function StarsBackground() {
  const { resolvedTheme } = useTheme();

  const [stars] = useState<Star[]>(() => generateStars());

  if (!resolvedTheme) return null;

  return (
    <div className={`stars-wrapper ${resolvedTheme}`}>
      {stars.map((star, i) => {
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