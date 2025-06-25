// lib/conditionalSchemas.ts
import * as z from 'zod';

export const conditionalSchemas: Record<string, z.ZodObject<any>> = {
  'Provisional Registration': z.object({
    pr_bds_upload: z.any(),
    pr_bonafide_upload: z.any(),
    ssc_memo: z.any(),
    custodian_clg: z.any(),
  }),
  'Bachelor of Dental Surgery (BDS) from Telangana': z.object({
    professional_address: z.string().min(1),
    qualification_description: z.string().min(1),
    bds_university_address: z.string().min(1),
    bds_qualification_year: z.string().min(1),
    bds_clg_address: z.string().min(1),
    bds_degree_upload: z.any(),
    study_upload: z.any(),
    intern_upload: z.any(),
    pr_certificate_upload: z.any(),
    bds_affidavit_upload: z.any(),
    ssc_memo: z.any(),
    custodian_clg: z.any(),
  }),
  // Add other schemas here
};

export const getConditionalSchema = (category: string): z.ZodObject<any> => {
  return conditionalSchemas[category] ?? z.object({});
};

// ✅ Export Step2FormValues like this:
export type Step2FormValues = z.infer<ReturnType<typeof getConditionalSchema>>;
