import { z } from 'zod'

export const schemaValidation = z.object({
  email: z.string().min(1, 'Email is required'),
  username: z.string().min(1, 'Username is required'),
})
