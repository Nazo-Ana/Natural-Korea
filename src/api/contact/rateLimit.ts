import type { RateLimitEntry } from './types';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimits = new Map<string, RateLimitEntry>();

export function isRateLimited(ipAddress: string) {
  const now = Date.now();
  const current = rateLimits.get(ipAddress);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}
