import { httpBatchLink } from '@trpc/client';
import { createTRPCNext, CreateTRPCNext } from '@trpc/next';
import type { AppRouter } from '../src/server/routers/_app';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
}

// if (process.env.VERCEL_URL) {
//   return `https://${process.env.VERCEL_URL}`;
// }

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
        }),
      ],
    };
  },
});
