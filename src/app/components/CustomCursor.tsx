"use client";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  color?: string; 
  shadowColor?: string; 
  size?: number; 
}

export default function CustomCursor({
  color = "black",
  shadowColor = "red",
  size = 20,
}: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-5); 
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Trail */}
      {trail.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: pos.y,
            left: pos.x,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            backgroundColor: shadowColor,
            opacity: 0.3 - i * 0.05, 
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: color,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
}
