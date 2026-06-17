"use client";

import { useEffect, useRef } from "react";

type Crater = {
  lat: number;
  lon: number;
  radius: number;
};

const CRATERS: Crater[] = [
  { lat: 0.2,  lon: 0.5,  radius: 22 },
  { lat: -0.3, lon: 1.2,  radius: 15 },
  { lat: 0.5,  lon: 2.0,  radius: 11 },
  { lat: -0.1, lon: 3.5,  radius: 20 },
  { lat: 0.7,  lon: 4.2,  radius: 9  },
  { lat: -0.5, lon: 0.9,  radius: 13 },
  { lat: 0.1,  lon: 5.5,  radius: 17 },
  { lat: -0.6, lon: 2.8,  radius: 10 },
  { lat: 0.4,  lon: 3.9,  radius: 12 },
  { lat: -0.2, lon: 1.7,  radius: 8  },
  { lat: 0.3,  lon: 5.0,  radius: 6  },
  { lat: -0.4, lon: 4.6,  radius: 14 },
];

const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R  = SIZE / 2 - 16;

export function Moon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = SIZE;
    canvas.height = SIZE;

    let rotation = 0;
    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Outer glow
      const glowGrad = ctx.createRadialGradient(CX, CY, R * 0.85, CX, CY, R * 1.3);
      glowGrad.addColorStop(0, "rgba(210,210,180,0.18)");
      glowGrad.addColorStop(1, "rgba(210,210,180,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Moon base sphere
      const baseGrad = ctx.createRadialGradient(
        CX - R * 0.32, CY - R * 0.32, R * 0.08,
        CX, CY, R
      );
      baseGrad.addColorStop(0,   "#deded0");
      baseGrad.addColorStop(0.4, "#b8b8a4");
      baseGrad.addColorStop(0.75, "#787868");
      baseGrad.addColorStop(1,   "#2e2e28");

      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = baseGrad;
      ctx.fill();

      // Clip to sphere for craters
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      for (const crater of CRATERS) {
        const lon    = crater.lon + rotation;
        const cosLat = Math.cos(crater.lat);
        const x3d    = cosLat * Math.cos(lon);
        const y3d    = Math.sin(crater.lat);
        const z3d    = cosLat * Math.sin(lon);

        if (z3d < -0.15) continue;

        const px    = CX + x3d * R;
        const py    = CY - y3d * R;
        const scale = Math.max(0, (z3d + 1) / 2);
        const cr    = crater.radius * scale * cosLat;

        if (cr < 2) continue;

        // Crater floor
        const floorGrad = ctx.createRadialGradient(
          px + cr * 0.25, py + cr * 0.25, 0,
          px, py, cr
        );
        floorGrad.addColorStop(0,   "rgba(30,30,22,0.65)");
        floorGrad.addColorStop(0.7, "rgba(30,30,22,0.3)");
        floorGrad.addColorStop(1,   "rgba(30,30,22,0)");

        ctx.beginPath();
        ctx.ellipse(px, py, cr, cr * 0.82, 0, 0, Math.PI * 2);
        ctx.fillStyle = floorGrad;
        ctx.fill();

        // Crater rim highlight
        ctx.beginPath();
        ctx.arc(px - cr * 0.2, py - cr * 0.2, cr * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,235,0.35)";
        ctx.fill();
      }

      ctx.restore();

      // Light source overlay
      const lightGrad = ctx.createRadialGradient(
        CX - R * 0.38, CY - R * 0.38, 0,
        CX, CY, R
      );
      lightGrad.addColorStop(0,   "rgba(255,255,245,0.18)");
      lightGrad.addColorStop(0.45, "rgba(255,255,245,0)");
      lightGrad.addColorStop(1,   "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = lightGrad;
      ctx.fill();

      rotation += 0.0025;
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: SIZE, height: SIZE }}
      className="pointer-events-none block border-0 outline-none"
    />
  );
}
