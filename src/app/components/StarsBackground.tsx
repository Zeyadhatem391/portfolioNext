"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  alpha: number;
  twinkle: number;
};

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.8,
      speed: Math.random() * 0.8 + 0.25,
      alpha: Math.random() * 0.6 + 0.3,
      twinkle: (Math.random() * 0.015 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let lastTime = performance.now();

    const draw = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = resolvedTheme === "dark" ? "255,255,255" : "59,130,246";

      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${color},0.8)`;

      for (const star of stars) {
        star.y += star.speed * delta;

        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        star.alpha += star.twinkle;

        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinkle *= -1;
        }

        if (star.alpha < 0.25) {
          star.alpha = 0.25;
          star.twinkle *= -1;
        }

        ctx.fillStyle = `rgba(${color},${star.alpha})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
