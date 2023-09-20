import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  role: z.string(),
  plan: z.string(),
  email: z.string(),
  birthday: z.string(),
  address: z.string(),
  
})

export type User = z.infer<typeof userSchema>
