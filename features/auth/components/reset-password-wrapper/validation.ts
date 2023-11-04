import { z } from 'zod'

export const schemaValidation = z.object({
  email: z.string().min(1, 'Email is required'),
  phone: z.string().min(1, 'No. Telp is required'),
})
