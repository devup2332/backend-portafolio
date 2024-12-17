import { z } from "zod";

export interface IContactSchema {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

export const ContactSchema: z.ZodType<IContactSchema> = z.object({
  email: z.string().email().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});