import { z } from 'zod'

export const schemaValidation = z.object({
  token: z.string().min(1, 'Token is required'),
  username: z.string().min(1, 'Username is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone is required'),
})
