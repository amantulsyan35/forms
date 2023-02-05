import * as z from 'zod';

export const CompanyInfoFormSchema = z.object({
  entityName: z.string(),
  companySuffix: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string(),
  postalCode: z.string(),
  city: z.string(),
  country: z.string(),
  state: z.string(),
});

export type CompanyInformationFormValue = z.infer<typeof CompanyInfoFormSchema>;
