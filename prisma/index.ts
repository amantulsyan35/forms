import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  (typeof window === 'undefined'
    ? new PrismaClient({
        log: ['info', 'warn', 'error'],
      })
    : undefined);

export default prisma as PrismaClient;
export * from '@prisma/client';
