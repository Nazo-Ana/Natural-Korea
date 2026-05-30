import type { JsonObject, ServerlessRequest } from './types';

export function getRequestIp(request: ServerlessRequest) {
  const forwardedFor = request.headers['x-forwarded-for'];
  const firstForwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  return firstForwardedIp?.split(',')[0]?.trim() || request.socket?.remoteAddress || 'unknown';
}

export function parseBody(body: unknown): JsonObject | null {
  if (!body) return null;

  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body) as unknown;
      return typeof parsed === 'object' && parsed !== null ? (parsed as JsonObject) : null;
    } catch {
      return null;
    }
  }

  return typeof body === 'object' ? (body as JsonObject) : null;
}
