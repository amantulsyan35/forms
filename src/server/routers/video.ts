import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '../../utils/prisma';

export const videoRouter = router({
  getVideoDetails: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ input }) => {
      return {
        videoDetails: 'hi will be querying on the basis of id',
      };
    }),
  saveVideoDetails: publicProcedure
    .input(
      z.object({
        youtubeLink: z.string(),
        startTime: z.number(),
        endTime: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const data = await prisma.youtubeVideoDetails.create({
        data: input,
      });
      return data;
    }),
});
