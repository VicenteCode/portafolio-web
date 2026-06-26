const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

type Entry = { count: number; resetAt: number };

// Module-scope store — persists within an edge worker instance
const store = new Map<string, Entry>();

type RateLimitResult =
  | { limited: false }
  | { limited: true; retryAfter: number };

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { limited: true, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { limited: false };
}
