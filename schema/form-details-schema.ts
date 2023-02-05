import * as z from 'zod';

export const FormDetailsSchema = z.object({
  fieldType: z.string(),
  fieldName: z.string(),
  fieldLabel: z.string().optional(),
  SelectFieldOptions: z.string(),
});

export const SelectFormFieldOptionsSchema = z.object({
  selectOption: z
    .object({
      selectoptions: z.string(),
    })
    .array(),
});

export type SelectFormFieldOptionsType = z.infer<typeof FormDetailsSchema>;

export type FormDetailsType = z.infer<typeof FormDetailsSchema>;
