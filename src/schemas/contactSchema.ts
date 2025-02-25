import { z } from "zod";

export const ContactSchema = z.object({
  email: z.string().email().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.number().min(1),
  message: z.string().min(1),
});

export type ContactShemaType = z.infer<typeof ContactSchema>;
