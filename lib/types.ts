import { z } from "zod";

export const adressSchema = z.object({
    name: z.string(),
    street: z.string(),
    phone: z.number(),
    city: z.string(),
    pincode: z.number(),
    state: z.string(),
})

export type TAddressSchema = z.infer<typeof adressSchema>;