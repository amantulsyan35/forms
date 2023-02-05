import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '../../utils/prisma';
import { v4 as uuidv4 } from 'uuid';
import { CompanyInfoFormSchema } from '../../../schema/incorporation-form/company-info-schema';

export const incorporationCompanyInfoRouter = router({
  getIncorporationDetail: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const data = await prisma.incorporation.findUnique({
        where: {
          id,
        },
      });
      return data;
    }),
  saveIncorporationDetails: publicProcedure
    .input(CompanyInfoFormSchema)
    .mutation(async ({ input }) => {
      const dataBaseId = uuidv4();

      await prisma.incorporation.create({
        data: { id: dataBaseId, ...input },
      });
      return {};
    }),
});
