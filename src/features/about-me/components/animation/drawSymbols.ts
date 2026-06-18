import { CX, CY, R } from "./moon.constants";

export type OrbitalSymbol = { text: string; angle: number; speed: number; r: number };

export function createSymbols(): OrbitalSymbol[] {
  return [
    { text: "</>", angle: 0.0, speed:  0.0030, r: R + 34 },
    { text: "{}",  angle: 1.2, speed: -0.0022, r: R + 50 },
    { text: "=>",  angle: 2.5, speed:  0.0026, r: R + 38 },
    { text: "::",  angle: 4.0, speed: -0.0018, r: R + 28 },
    { text: "[]",  angle: 5.2, speed:  0.0020, r: R + 46 },
    { text: "fn",  angle: 3.3, speed:  0.0034, r: R + 32 },
  ];
}

export function drawSymbols(ctx: CanvasRenderingContext2D, symbols: OrbitalSymbol[]): void {
  ctx.font = "bold 15px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const sym of symbols) {
    sym.angle += sym.speed;
    const x = CX + Math.cos(sym.angle) * sym.r;
    const y = CY + Math.sin(sym.angle) * sym.r;
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(sym.text, x + 1, y + 1);
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = "#e4e4e7";
    ctx.fillText(sym.text, x, y);
  }
  ctx.globalAlpha = 1;
}
