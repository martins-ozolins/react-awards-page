import { z } from "zod";

const msg = "Please complete this required field.";

export const ContactFormSchema = z.object({
  firstName: z.string().trim().min(1, msg),
  lastName: z.string().trim().min(1, msg),
  email: z.email(msg),
  phone: z.string().trim().min(1, msg),
  company: z.string().trim().min(1, msg),
  businessType: z.string().trim().min(1, msg),
  country: z.string().min(1, msg),
  message: z.string().trim().min(1, msg),
  referral: z.string().trim().min(1, msg),
  newsletter: z.boolean().optional(),
});

export type ContactFormFields = z.infer<typeof ContactFormSchema>;
