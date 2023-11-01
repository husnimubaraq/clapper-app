import { z } from 'zod'

export const schemaValidation = z.object({
  phone: z.string().min(1, 'Nomor HP is required'),
  password: z.string().min(1, 'Password is required'),
})
