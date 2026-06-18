"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SIZE } from "./moon.constants";
import { buildNoiseTexture, drawMoon } from "./drawMoon";
import { createSymbols, drawSymbols } from "./drawSymbols";
import { createBrandState, drawBrand } from "./drawBrand";

export function Moon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ nx: 0, hovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = SIZE;
    canvas.height = SIZE;

    const noiseCanvas = buildNoiseTexture();
    const symbols     = createSymbols();
    const brandState  = createBrandState();

    let baseRotation = 0;
    let mouseOffset  = 0;
    let frame: number;
    let running = false;

    const draw = () => {
      baseRotation += 0.0025;
      const target = mouseRef.current.hovering ? mouseRef.current.nx * 0.6 : 0;
      mouseOffset += (target - mouseOffset) * 0.06;

      ctx.clearRect(0, 0, SIZE, SIZE);
      drawMoon(ctx, baseRotation + mouseOffset, noiseCanvas);
      drawSymbols(ctx, symbols);
      drawBrand(ctx, brandState);

      frame = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) { running = true; draw(); }
        else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(frame); }
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);

    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="cursor-pointer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = { nx: ((e.clientX - rect.left) / rect.width) * 2 - 1, hovering: true };
      }}
      onMouseLeave={() => { mouseRef.current.hovering = false; }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none block border-0 outline-none w-60 h-60 sm:w-120 sm:h-120"
      />
    </motion.div>
  );
}
