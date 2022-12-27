import { router } from '../trpc';
import { z } from 'zod';

import { helloRouter } from './hello';

export const appRouter = router({
  hello: helloRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
