import type { ContactApiResponse } from '../../types/contact';

export type JsonObject = Record<string, unknown>;

export type ServerlessRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
  socket?: {
    remoteAddress?: string;
  };
};

export type ServerlessResponse = {
  status(statusCode: number): ServerlessResponse;
  json(body: ContactApiResponse): void;
  setHeader(name: string, value: string): void;
};

export type RateLimitEntry = {
  count: number;
  resetAt: number;
};
