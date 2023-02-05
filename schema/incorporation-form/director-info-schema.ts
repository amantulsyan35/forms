import * as z from 'zod';

export const DirectorInfoFormSchema = z.object({
  directorName: z.string(),
});

export type DirectorInfoFormValue = z.infer<typeof DirectorInfoFormSchema>;
