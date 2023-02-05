import { router } from '../trpc';

import { incorporationCompanyInfoRouter } from './incorporation-company-info';

export const appRouter = router({
  companyInfo: incorporationCompanyInfoRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
