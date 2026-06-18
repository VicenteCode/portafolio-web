import { CX, CY, R } from "./moon.constants";

const BRAND_CHECK_EVERY = 480;
const BRAND_CHANCE      = 0.12;
const BRAND_DURATION    = 240;
const BRAND_FADE        = 40;

export type BrandState = {
  active: boolean;
  angle: number;
  alpha: number;
  countdown: number;
  framesSinceCheck: number;
};

export function createBrandState(): BrandState {
  return { active: false, angle: Math.random() * Math.PI * 2, alpha: 0, countdown: 0, framesSinceCheck: 0 };
}

export function drawBrand(ctx: CanvasRenderingContext2D, state: BrandState): void {
  state.framesSinceCheck++;

  if (!state.active && state.framesSinceCheck >= BRAND_CHECK_EVERY) {
    state.framesSinceCheck = 0;
    if (Math.random() < BRAND_CHANCE) {
      state.active    = true;
      state.countdown = BRAND_DURATION;
    }
  }

  if (state.active) {
    state.countdown--;
    state.angle += 0.0008;

    const elapsed  = BRAND_DURATION - state.countdown;
    const fadeIn   = Math.min(1, elapsed / BRAND_FADE);
    const fadeOut  = Math.min(1, state.countdown / BRAND_FADE);
    state.alpha    = Math.min(fadeIn, fadeOut);

    if (state.countdown <= 0) {
      state.active = false;
      state.alpha  = 0;
    }
  }

  if (state.alpha <= 0) return;

  const x = CX + Math.cos(state.angle) * (R + 95);
  const y = CY + Math.sin(state.angle) * (R + 95);
  const S = 14;

  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha  = state.alpha * 0.9;
  ctx.strokeStyle  = "#8B0000";
  ctx.fillStyle    = "#8B0000";
  ctx.lineWidth    = 1.2;

  // Óvalo exterior
  ctx.beginPath();
  ctx.ellipse(0, 0, S * 0.85, S * 1.2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Óvalo interior superior
  ctx.beginPath();
  ctx.ellipse(0, -S * 0.35, S * 0.3, S * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();

  // Garfio izquierdo
  ctx.beginPath();
  ctx.moveTo(-S * 0.85, 0);
  ctx.bezierCurveTo(-S * 1.4, -S * 0.5, -S * 1.2, S * 0.4, -S * 0.5, S * 0.6);
  ctx.stroke();

  // Garfio derecho
  ctx.beginPath();
  ctx.moveTo(S * 0.85, 0);
  ctx.bezierCurveTo(S * 1.4, -S * 0.5, S * 1.2, S * 0.4, S * 0.5, S * 0.6);
  ctx.stroke();

  // Gancho inferior
  ctx.beginPath();
  ctx.arc(0, S * 0.5, S * 0.45, Math.PI * 0.15, Math.PI * 0.85);
  ctx.stroke();

  ctx.restore();
  ctx.globalAlpha = 1;
}
