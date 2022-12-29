import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '../../utils/prisma';

export const videoRouter = router({
  getVideoDetails: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const data = await prisma.youtubeVideoDetails.findUnique({
        where: {
          id,
        },
      });
      return data;
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
