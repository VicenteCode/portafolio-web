"use client";

import { useEffect, useRef } from "react";

type Crater = { lat: number; lon: number; radius: number };
type Mare   = { lat: number; lon: number; rx: number; ry: number; angle: number; opacity: number };

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

// Major lunar mare projected at approximate real lat/lon positions
const MARE: Mare[] = [
  { lat:  0.59, lon: -0.28, rx: 0.28, ry: 0.22, angle:  0.3, opacity: 0.46 }, // Mare Imbrium
  { lat:  0.45, lon:  0.30, rx: 0.18, ry: 0.14, angle: -0.2, opacity: 0.40 }, // Mare Serenitatis
  { lat:  0.09, lon:  0.44, rx: 0.20, ry: 0.15, angle:  0.1, opacity: 0.38 }, // Mare Tranquillitatis
  { lat:  0.17, lon: -0.79, rx: 0.35, ry: 0.28, angle:  0.5, opacity: 0.43 }, // Oceanus Procellarum
  { lat:  0.29, lon:  1.01, rx: 0.11, ry: 0.08, angle:  0.0, opacity: 0.35 }, // Mare Crisium
  { lat: -0.26, lon:  0.61, rx: 0.13, ry: 0.09, angle: -0.3, opacity: 0.30 }, // Mare Nectaris
  { lat: -0.42, lon: -0.70, rx: 0.14, ry: 0.10, angle:  0.2, opacity: 0.32 }, // Mare Humorum
];

const SIZE = 480;
const CX   = SIZE / 2;
const CY   = SIZE / 2;
const R    = SIZE / 2 - 16;

const PHASE       = 0.72;
const TERM_SEMI_X = R * Math.abs(2 * PHASE - 1);

// Value noise helpers — used once at mount to build the surface texture
const _hash = (x: number, y: number) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const _lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const _smooth = (t: number) => t * t * (3 - 2 * t);
const _noise = (x: number, y: number) => {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = _smooth(x - ix), fy = _smooth(y - iy);
  return _lerp(
    _lerp(_hash(ix, iy),     _hash(ix + 1, iy),     fx),
    _lerp(_hash(ix, iy + 1), _hash(ix + 1, iy + 1), fx),
    fy,
  );
};

export function Moon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = SIZE;
    canvas.height = SIZE;

    // Build surface noise texture once (96×96 → stretched to sphere diameter)
    const NTEX = 96;
    const noiseCanvas = document.createElement("canvas");
    noiseCanvas.width  = NTEX;
    noiseCanvas.height = NTEX;
    const noiseCtx = noiseCanvas.getContext("2d")!;
    const ndata = noiseCtx.createImageData(NTEX, NTEX);

    for (let ny = 0; ny < NTEX; ny++) {
      for (let nx = 0; nx < NTEX; nx++) {
        const sx = nx / NTEX;
        const sy = ny / NTEX;
        // Three-octave fBm for varied scale detail
        const n = _noise(sx * 4,  sy * 4)  * 0.50
                + _noise(sx * 9,  sy * 9)  * 0.32
                + _noise(sx * 20, sy * 20) * 0.18;
        const v = Math.round((n - 0.5) * 90); // ±45 centred at 0
        const i = (ny * NTEX + nx) * 4;
        ndata.data[i]     = 128 + v;
        ndata.data[i + 1] = 128 + v;
        ndata.data[i + 2] = 120 + v;
        ndata.data[i + 3] = 215;
      }
    }
    noiseCtx.putImageData(ndata, 0, 0);

    let rotation = 0;
    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Lit surface — light from upper-right (waning gibbous)
      const baseGrad = ctx.createRadialGradient(
        CX + R * 0.32, CY - R * 0.32, R * 0.08,
        CX, CY, R,
      );
      baseGrad.addColorStop(0,    "#deded0");
      baseGrad.addColorStop(0.4,  "#b8b8a4");
      baseGrad.addColorStop(0.75, "#787868");
      baseGrad.addColorStop(1,    "#2e2e28");

      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = baseGrad;
      ctx.fill();

      // Everything below is clipped to the sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      // Surface noise — soft-light blend gives natural luminance variation
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(rotation * 0.4); // slow drift to follow sphere rotation
      ctx.translate(-CX, -CY);
      ctx.globalCompositeOperation = "soft-light";
      ctx.globalAlpha = 0.55;
      ctx.drawImage(noiseCanvas, CX - R, CY - R, R * 2, R * 2);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.restore();

      // Mare — dark elliptical regions projected onto the rotating sphere
      for (const mare of MARE) {
        const lon    = mare.lon + rotation;
        const cosLat = Math.cos(mare.lat);
        const x3d    = cosLat * Math.cos(lon);
        const y3d    = Math.sin(mare.lat);
        const z3d    = cosLat * Math.sin(lon);

        if (z3d < -0.1) continue;

        const px    = CX + x3d * R;
        const py    = CY - y3d * R;
        const scale = Math.max(0, (z3d + 1) / 2);
        const mrx   = mare.rx * R * scale * cosLat;
        const mry   = mare.ry * R * scale;

        if (mrx < 8 || mry < 8) continue;

        const alpha   = mare.opacity * Math.min(1, scale * 1.3);
        const maxAxis = Math.max(mrx, mry);
        const mGrad   = ctx.createRadialGradient(px, py, 0, px, py, maxAxis);
        mGrad.addColorStop(0,    `rgba(35,32,24,${alpha})`);
        mGrad.addColorStop(0.55, `rgba(35,32,24,${alpha * 0.5})`);
        mGrad.addColorStop(1,    "rgba(35,32,24,0)");

        ctx.beginPath();
        ctx.ellipse(px, py, mrx, mry, mare.angle, 0, Math.PI * 2);
        ctx.fillStyle = mGrad;
        ctx.fill();
      }

      // Craters
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

        const floorGrad = ctx.createRadialGradient(
          px + cr * 0.25, py + cr * 0.25, 0,
          px, py, cr,
        );
        floorGrad.addColorStop(0,   "rgba(30,30,22,0.65)");
        floorGrad.addColorStop(0.7, "rgba(30,30,22,0.3)");
        floorGrad.addColorStop(1,   "rgba(30,30,22,0)");

        ctx.beginPath();
        ctx.ellipse(px, py, cr, cr * 0.82, 0, 0, Math.PI * 2);
        ctx.fillStyle = floorGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px - cr * 0.2, py - cr * 0.2, cr * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,235,0.35)";
        ctx.fill();
      }

      ctx.restore();

      // Specular highlight — upper-right
      const lightGrad = ctx.createRadialGradient(
        CX + R * 0.38, CY - R * 0.38, 0,
        CX, CY, R,
      );
      lightGrad.addColorStop(0,    "rgba(255,255,245,0.18)");
      lightGrad.addColorStop(0.45, "rgba(255,255,245,0)");
      lightGrad.addColorStop(1,    "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = lightGrad;
      ctx.fill();

      // Dark side — shadow on the left (waning gibbous)
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      ctx.beginPath();
      ctx.arc(CX, CY, R, -Math.PI / 2, Math.PI / 2, true);
      ctx.ellipse(CX, CY, TERM_SEMI_X, R, 0, Math.PI / 2, -Math.PI / 2, false);
      ctx.closePath();

      const t = TERM_SEMI_X / R;
      const shadowGrad = ctx.createLinearGradient(CX, 0, CX - R, 0);
      shadowGrad.addColorStop(0,                      "rgba(3,4,14,0)");
      shadowGrad.addColorStop(Math.max(0, t - 0.1),  "rgba(3,4,14,0)");
      shadowGrad.addColorStop(t,                      "rgba(3,4,14,0.28)");
      shadowGrad.addColorStop(Math.min(1, t + 0.14), "rgba(3,4,14,0.88)");
      shadowGrad.addColorStop(Math.min(1, t + 0.25), "rgba(3,4,14,0.96)");
      shadowGrad.addColorStop(1,                      "rgba(3,4,14,0.97)");

      ctx.fillStyle = shadowGrad;
      ctx.fillRect(CX - R, CY - R, R, R * 2);

      ctx.restore();

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
